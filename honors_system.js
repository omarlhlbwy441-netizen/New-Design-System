
export const medals = [
    { id: 'dev_star', name: 'وسام النجم البرمجي', icon: '⭐', power_boost: 1.2 },
    { id: 'throne_guard', name: 'وسام حارس العرش', icon: '🛡️', power_boost: 1.5 },
    { id: 'diplomat', name: 'وسام السفير الملكي', icon: '🌍', power_boost: 1.3 }
];

export const grantMedal = (userId, medalId) => {
    console.log(`🏅 تم منح ${medalId} للمستخدم ${userId}`);
    return { status: "Granted", effect: "Visibility Boosted" };
};
