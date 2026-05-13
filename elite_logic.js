
            const ranks = ["Soldier", "Knight", "Lord", "Sovereign"];
            export const assignRank = (contribution) => {
                let rank = ranks[Math.min(Math.floor(contribution / 1000), ranks.length - 1)];
                return `🏆 الرتبة الممنوحة: ${rank}`;
            };
            