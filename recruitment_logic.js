
export const scoutTalent = (skillLevel) => {
    if (skillLevel > 9.5) {
        console.log("🎖️ تم رصد كفاءة استثنائية.. إرسال دعوة إمبراطورية.");
        return { status: "Invited", rank: "Imperial_Elite" };
    }
    return { status: "Monitoring" };
};
