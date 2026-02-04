const cron = require('node-cron');
const Product = require('../models/Product');
const { scrapeProduct } = require('./scraperService');
const { sendEmail } = require('../utils/emailService');

const startCronJob = () => {
    console.log("⏳ Cron Job Initialized: Checking prices every hour.");

    // Run every hour: '0 * * * *'
    cron.schedule('0 * * * *', async () => {
        console.log("🔍 [Cron] Starting Price Check Cycle...");

        try {
            const products = await Product.find().populate('user');

            if (products.length === 0) {
                console.log("ℹ️ No products to check.");
                return;
            }

            for (const product of products) {
                try {
                    const oldPrice = product.currentPrice;
                    const scrapedData = await scrapeProduct(product.url);

                    if (!scrapedData || !scrapedData.price) {
                        console.warn(`⚠️ Skipped ${product.title} - Scrape failed.`);
                        continue;
                    }

                    const newPrice = scrapedData.price;

                    // Log as requested
                    console.log(`Checking ${product.title.substring(0, 20)}... Old: ${oldPrice} | New: ${newPrice}`);

                    // ALERT LOGIC: If New < Old
                    if (newPrice < oldPrice) {
                        console.log(`📉 PRICE DROP! Sending Alert: ${product.user.email}`);

                        // 1. Send Email
                        if (product.user && product.user.email) {
                            await sendEmail(product.user.email, 'price_drop', {
                                name: product.user.name,
                                productName: product.title,
                                oldPrice: oldPrice,
                                newPrice: newPrice,
                                url: product.url
                            });
                        }
                    }

                    // Always update database with latest price
                    product.currentPrice = newPrice;
                    product.priceHistory.push({ price: newPrice, date: new Date() });
                    product.lastChecked = new Date();
                    await product.save();

                } catch (err) {
                    console.error(`❌ Error checking ${product.url}:`, err.message);
                }
            }
        } catch (err) {
            console.error("❌ Cron Job Critical Error:", err);
        }
    });
};

module.exports = { startCronJob };