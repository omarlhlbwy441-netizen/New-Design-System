
export const EstateSystem = {
    estates: {
        diamond_palace: { price: 1000000, features: ["Private Chat", "Custom Background", "Thunder Entry"] },
        golden_villa: { price: 500000, features: ["Custom Background", "Elite Badge"] }
    },
    purchaseEstate: (userId, estateType) => {
        console.log(`🏰 المستخدم ${userId} يمتلك الآن: ${estateType}`);
        // خصم الدايموند من المحفظة وتفعيل الأصول
        return { status: "OWNED", registryId: `EST-${Math.random().toString(36).substr(2, 9).toUpperCase()}` };
    }
};
