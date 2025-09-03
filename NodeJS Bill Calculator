const productCatalog = {
    "Apple": 10.00,
    "Samsung": 6.00,
    "Xiaomi": 3.60,
    "Techno": 3.00,
    "Infinix": 2.90,
    "Oppo": 3.50,
    "Vivo": 3.00,
    "Nokia": 2.50,
    "OnePlus": 6.10
};

const cart = {
    "Apple": 1,
    "Samsung": 1,
    "Xiaomi": 2,
    "Techno": 2,
    "Infinix": 2,
};

const discount = {
    "Apple": 8.5,
    "Samsung": 30.5,
    "Xiaomi": 50.5,
    "Oppo": 12.5,
    "Vivo": 8.5,
};

const PERCENT = 100;

function validateInputs(prices, items) {
    for (const [item, qty] of Object.entries(items)) {
        if (!(item in prices)) {
            throw new Error(`Product "${item}" not found in product catalog.`);
        }
        if (typeof qty !== "number" || qty <= 0) {
            throw new Error(`Invalid quantity (${qty}) for product "${item}".`);
        }
        if (typeof prices[item] !== "number" || prices[item] <= 0) {
            throw new Error(`Invalid price (${prices[item]}) for product "${item}".`);
        }
    }
}

function roundToTwo(num) {
    return Number(num.toFixed(2));
}

function calculatePrice(prices, items, discounts) {
    validateInputs(prices, items);

    return Object.fromEntries(
        Object.entries(items).map(([item, quantity]) => {
            const price = prices[item];
            const discountPercent = discounts[item] || 0;
            const total = roundToTwo(price * quantity * (1 - discountPercent / PERCENT));
            return [item, total];
        })
    );
}

function main() {
    try {
        const bill = calculatePrice(productCatalog, cart, discount);
        console.log(bill);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
