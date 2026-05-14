
export const JackpotSystem = {
    drawWinner: (participants) => {
        const winner = participants[Math.floor(Math.random() * participants.length)];
        console.log(`🏆 الفائز بالجائزة الكبرى هو: ${winner.id}`);
        return winner;
    },
    triggerDiamondRain: (roomId, amount) => {
        console.log(`🌧️ هطول ماسي في الغرفة ${roomId} بقيمة ${amount} دايموند!`);
        // منطق توزيع الكوينز على الحاضرين
    }
};
