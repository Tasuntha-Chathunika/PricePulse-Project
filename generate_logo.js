const fs = require('fs');
const path = require('path');

// Source image from artifacts
const source = "C:\\Users\\tasuntha\\.gemini\\antigravity\\brain\\c79a32f4-9677-4e60-ac4b-1fb4eb2b10ef\\media__1770314449442.png";

// Target JS file in frontend assets
const target = "d:\\Project\\PricePulse-Project\\frontend\\logo.js";

try {
    if (fs.existsSync(source)) {
        // Read file as base64
        const data = fs.readFileSync(source, 'base64');

        // Create ES module content
        const content = `const logo = "data:image/png;base64,${data}";\nexport default logo;`;

        // Write to destination
        fs.writeFileSync(target, content);
        console.log("SUCCESS: logo.js generated at " + target);
    } else {
        console.error("ERROR: Source file not found at " + source);
    }
} catch (e) {
    console.error("ERROR generating logo:", e);
}
