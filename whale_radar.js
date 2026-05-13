
export const trackWhales = () => {
    const activity = Math.random() > 0.8 ? "🚨 تنبيه: تحرك حوت ضخم مرصود" : "✅ الاستقرار المالي مستمر";
    console.log(`📡 رادار الاستخبارات: ${activity}`);
    return { status: activity, threatLevel: "Low" };
};
