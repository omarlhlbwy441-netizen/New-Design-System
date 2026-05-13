
export const forecastEmpireTrends = () => {
    const trends = ["ارتفاع قيمة DBC", "زيادة التجنيد في السفارات", "استقرار الدرع الكمي"];
    const prediction = trends[Math.floor(Math.random() * trends.length)];
    console.log(`🔮 توقع الأوراكل: ${prediction}`);
    return prediction;
};
