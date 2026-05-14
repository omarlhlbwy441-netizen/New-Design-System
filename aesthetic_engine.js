
export const applyRoyalVibe = (mode) => {
    const themes = {
        exaltation: { color: "#FFD700", glow: "0 0 30px #FFD700", musicVolume: 1.0 },
        stealth: { color: "#555", glow: "0 0 10px #222", musicVolume: 0.3 }
    };
    console.log(`🎭 جاري ضبط المزاج الإمبراطوري: ${mode}`);
    return themes[mode];
};
