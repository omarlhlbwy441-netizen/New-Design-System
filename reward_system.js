
export const claimWelcomeBonus = (userId) => {
    console.log(`🎁 تم منح مكافأة ترحيبية لـ ${userId}: 100 DBC`);
    return { bonus: 100, currency: "DBC" };
};
