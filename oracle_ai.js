
            export const predictMarket = (trends) => {
                const growthRate = Math.random() * 0.15; // محاكاة نمو ذكي
                console.log("🧠 الأوراكل يحلل البيانات... التوقع: نمو مستقر بنسبة " + (growthRate * 100).toFixed(2) + "%");
                return { action: "Hold/Invest", confidence: 0.98 };
            };
            