
export const collectThroneTax = (diamondAmount) => {
    const tax = diamondAmount * 0.01;
    console.log(`💰 تم تحصيل ${tax} دايموند كضريبة سيادية للعرش.`);
    return tax;
};

export const triggerThunderEntry = (userRank) => {
    if (userRank === 'CVIP') {
        console.log("⚡ تفعيل صاعقة الدخول: المجد للإمبراطور أو النخبة العليا!");
        return true;
    }
    return false;
};
