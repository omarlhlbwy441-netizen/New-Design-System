
    export const ContractEngine = {
        splitRatio: {
            talentsAndAgencies: 0.82,
            systemSovereignty: 0.18
        },
        processGift: (amount) => {
            const forTalent = amount * ContractEngine.splitRatio.talentsAndAgencies;
            const forSystem = amount * ContractEngine.splitRatio.systemSovereignty;
            console.log(`✅ تم التوزيع: ${forTalent} للشركاء | ${forSystem} للعرش`);
            return { forTalent, forSystem };
        }
    };
    