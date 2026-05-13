
            export const processRewards = (userActivity) => {
                const rewardAmount = userActivity * 0.001; // نسبة الجذب الأولية
                console.log(`✨ تم تخصيص مكافأة قدرها ${rewardAmount} لمستخدم جديد.`);
                return rewardAmount;
            };
            