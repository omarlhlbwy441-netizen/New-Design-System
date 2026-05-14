
export const exchangeDiamondsToCoins = (diamonds) => {
    const rate = 100; // كل 1 دايموند يعطي 100 كوينز عند الاستلام
    return diamonds * rate;
};

export const agencyWithdraw = (agencyId, amount) => {
    console.log(`🏦 وكالة ${agencyId} تطلب سحب أرباح بقيمة ${amount} DBC`);
    // خصم العمولة الإمبراطورية 1%
};
