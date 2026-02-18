const API_URL = "http://localhost:5000/api";

// DOM Elements
const views = {
    login: document.getElementById("login-view"),
    dashboard: document.getElementById("dashboard-view")
};

const inputs = {
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    productUrl: document.getElementById("product-url")
};

const buttons = {
    login: document.getElementById("login-btn"),
    track: document.getElementById("track-btn"),
    logout: document.getElementById("logout-btn"),
    refresh: document.getElementById("refresh-btn"),
    toggleList: document.getElementById("toggle-list-btn")
};

const containers = {
    itemList: document.getElementById("item-list"),
    itemListContainer: document.getElementById("item-list-container")
};

const labels = {
    loginError: document.getElementById("login-error")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    checkAuth();
    setupEventListeners();
});

function setupEventListeners() {
    buttons.login.addEventListener("click", handleLogin);
    buttons.track.addEventListener("click", handleTrackItem);
    buttons.logout.addEventListener("click", handleLogout);
    buttons.refresh.addEventListener("click", loadItems);
    buttons.toggleList.addEventListener("click", toggleItemList);
}

// --- UI LOGIC ---
function toggleItemList() {
    const isExpanded = containers.itemListContainer.classList.contains("expanded");

    if (isExpanded) {
        containers.itemListContainer.classList.remove("expanded");
        buttons.toggleList.classList.remove("expanded");
    } else {
        containers.itemListContainer.classList.add("expanded");
        buttons.toggleList.classList.add("expanded");
        // Load items if empty when expanding
        if (containers.itemList.children.length === 0 || containers.itemList.innerHTML.includes("Loading")) {
            loadItems();
        }
    }
}

// --- AUTH FLOW ---
function checkAuth() {
    chrome.storage.local.get(["token", "email"], (result) => {
        if (result.token && result.email) {
            showDashboard();
            loadItems();
        } else {
            showLogin();
        }
    });
}

async function handleLogin() {
    const email = inputs.email.value.trim();
    const password = inputs.password.value.trim();

    if (!email || !password) {
        showLoginError("Please enter email and password.");
        return;
    }

    setBtnLoading(buttons.login, true, "Signing In...");

    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (res.ok) {
            chrome.storage.local.set({ token: data.token, email: data.email }, () => {
                showDashboard();
                loadItems();
                inputs.email.value = "";
                inputs.password.value = "";
                showLoginError("");
            });
        } else {
            showLoginError(data.message || "Login Failed");
        }
    } catch (err) {
        showLoginError("Network Error. Check server.");
        console.error(err);
    } finally {
        setBtnLoading(buttons.login, false);
    }
}

function handleLogout() {
    chrome.storage.local.remove(["token", "email"], () => {
        showLogin();
    });
}

// --- ITEM MANAGEMENT ---
async function loadItems() {
    containers.itemList.innerHTML = '<div style="text-align: center; color: #64748b; font-size: 13px; padding: 10px;">Updating list...</div>';

    const { token, email } = await getAuthData();
    if (!token || !email) return handleLogout();

    try {
        const res = await fetch(`${API_URL}/products?userEmail=${encodeURIComponent(email)}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        const items = await res.json();

        renderItems(items);
    } catch (err) {
        containers.itemList.innerHTML = '<div style="text-align: center; color: #ef4444; font-size: 13px; padding: 10px;">Failed to load items.</div>';
        console.error(err);
    }
}

async function handleTrackItem() {
    const url = inputs.productUrl.value.trim();
    if (!url) return;

    const { token, email } = await getAuthData();
    if (!token || !email) return handleLogout();

    setBtnLoading(buttons.track, true, "Tracking...");

    try {
        const res = await fetch(`${API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ url, userEmail: email })
        });

        const data = await res.json();

        if (res.ok || res.status === 200) {
            if (data.status === 'exists') {
                alert("You are already tracking this item!");
            } else {
                inputs.productUrl.value = "";
                alert("Item added successfully!");
                loadItems();
                // Auto expand list on add
                if (!containers.itemListContainer.classList.contains("expanded")) {
                    toggleItemList();
                }
            }
        } else {
            alert(data.error || "Failed to add item");
        }
    } catch (err) {
        alert("Error connecting to server.");
        console.error(err);
    } finally {
        setBtnLoading(buttons.track, false);
    }
}

async function handleDeleteItem(id) {
    if (!confirm("Stop tracking this item?")) return;

    const { token } = await getAuthData();
    if (!token) return handleLogout();

    try {
        const res = await fetch(`${API_URL}/products/${id}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (res.ok) {
            loadItems();
        } else {
            alert("Failed to delete item.");
        }
    } catch (err) {
        alert("Error deleting item.");
    }
}

// --- HELPER FUNCTIONS ---
function renderItems(items) {
    containers.itemList.innerHTML = "";

    if (!items || items.length === 0) {
        containers.itemList.innerHTML = '<div style="text-align: center; color: #64748b; font-size: 13px; padding: 20px;">No items tracked yet.<br>Paste a URL to start!</div>';
        return;
    }

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `
            <img src="${item.image || 'icon.png'}" class="item-img" alt="Product">
            <div class="item-info">
                <a href="${item.url}" target="_blank" class="item-name" title="${item.name}">${item.name}</a>
                <div class="item-price">Rs. ${item.currentPrice ? item.currentPrice.toLocaleString() : 'N/A'}</div>
            </div>
            <button class="delete-btn" title="Stop Tracking">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        `;

        div.querySelector(".delete-btn").addEventListener("click", () => handleDeleteItem(item._id));
        containers.itemList.appendChild(div);
    });
}

function getAuthData() {
    return new Promise((resolve) => {
        chrome.storage.local.get(["token", "email"], (res) => resolve(res));
    });
}

function showLogin() {
    views.login.classList.remove("hidden");
    views.dashboard.classList.add("hidden");
    buttons.logout.classList.add("hidden");
}

function showDashboard() {
    views.login.classList.add("hidden");
    views.dashboard.classList.remove("hidden");
    buttons.logout.classList.remove("hidden");
}

function showLoginError(msg) {
    if (msg) {
        labels.loginError.textContent = msg;
        labels.loginError.style.display = "block";
    } else {
        labels.loginError.style.display = "none";
    }
}

function setBtnLoading(btn, isLoading, text) {
    if (isLoading) {
        if (!btn.dataset.defaultHtml) {
            btn.dataset.defaultHtml = btn.innerHTML;
        }
        btn.disabled = true;
        btn.textContent = text;
        btn.style.opacity = "0.7";
    } else {
        btn.disabled = false;
        if (btn.dataset.defaultHtml) {
            btn.innerHTML = btn.dataset.defaultHtml;
        }
        btn.style.opacity = "1";
    }
}
