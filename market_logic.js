
export const inventory = [
    { id: 'gold_tag', name: 'اللقب الذهبي', price: 5000, type: 'Status' },
    { id: 'stealth_mod', name: 'وحدة التخفي', price: 15000, type: 'Tech' },
    { id: 'whale_access', name: 'تصريح دخول الحيتان', price: 50000, type: 'Intelligence' }
];

export const processPurchase = (userId, itemId) => {
    console.log(`🛒 عملية شراء: المستخدم ${userId} طلب المنتج ${itemId}`);
    return { status: "Success", tax_deducted: "1% to Throne" };
};
