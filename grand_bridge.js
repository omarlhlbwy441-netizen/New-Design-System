
            /* هذا العصب يربط بين الأفعال البرمجية وردود الفعل البصرية */
            export const Bridge = {
                onDiamondRain: () => {
                    document.body.classList.add('diamond-rain-active');
                    console.log("🌧️ العصب البصري: تفعيل طقس الهطول الماسي.");
                },
                onAuctionBid: (bidAmount) => {
                    // تحديث كافة الشاشات لحظياً بسعر المزاد الجديد
                    console.log(`🔨 العصب المالي: مزايدة جديدة بقيمة ${bidAmount}`);
                }
            };
            