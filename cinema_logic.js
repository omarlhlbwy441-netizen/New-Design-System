
export const syncLighting = (dominantColor) => {
    console.log(`🎬 جاري مزامنة إضاءة القصر مع اللون: ${dominantColor}`);
    document.body.style.boxShadow = `inset 0 0 100px ${dominantColor}`;
};

export const streamIntel = (timestamp) => {
    return { info: "بيانات استخباراتية مشفرة تظهر في الثانية " + timestamp };
};
