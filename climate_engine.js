
export const syncClimate = () => {
    const hour = new Date().getHours();
    let mood = { theme: "Gold", lighting: "Bright" };
    
    if (hour >= 18 || hour <= 5) {
        mood = { theme: "Deep Black", lighting: "Starry" };
    } else if (hour >= 5 && hour <= 8) {
        mood = { theme: "Silver", lighting: "Soft" };
    }
    
    console.log(`🌦️ ضبط مناخ القصر على وضع: ${mood.theme}`);
    return mood;
};
