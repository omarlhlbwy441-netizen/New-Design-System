
export const embassies = [
    { name: "Al-Fajr Script", url: "https://github.com/omarlhlbwy441-netizen/AlFajr", status: "Allied" },
    { name: "Nuktat Daw Archive", url: "https://drive.google.com", status: "Secure Storage" }
];

export const trackCrossTraffic = (source) => {
    console.log(`🌐 زائر جديد قادم من سفارة: ${source}`);
    return { influence_gain: "+5 Points" };
};
