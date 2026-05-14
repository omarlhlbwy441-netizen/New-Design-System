
export const userWallet = {
    diamonds: 0, // للشراء والهدايا
    coins: 0,    // للأرباح والسحب
    rank: "User"  // User, Elite, VIP, CVIP
};

export const agencies = {
    shipping: { name: "وكالة الشحن المركزية", commission: 0.05 },
    talents: { name: "وكالة النجوم", memberCount: 0 }
};

export const processGift = (senderId, receiverId, diamondAmount) => {
    // خصم دايموند من المرسل -> تحويل كوينز للمستقبل -> نسبة للوكالة -> نسبة للعرش
    const platformFee = diamondAmount * 0.1;
    const agencyFee = diamondAmount * 0.05;
    const netCoins = diamondAmount - (platformFee + agencyFee);
    console.log(`🎁 تم تحويل ${netCoins} كوينز لصانع المحتوى.`);
    return { platformFee, agencyFee, netCoins };
};
