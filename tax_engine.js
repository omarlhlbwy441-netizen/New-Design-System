
export const applySovereignTax = (amount) => {
    const taxRate = 0.005; // 0.5% ضريبة سيادية
    const taxAmount = amount * taxRate;
    console.log(`🏦 تم تحصيل ضريبة قدرها ${taxAmount} DBC للخزنة المركزية.`);
    return { net: amount - taxAmount, tax: taxAmount };
};
