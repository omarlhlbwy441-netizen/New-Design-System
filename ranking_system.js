
export const getEliteRank = (balance) => {
    if (balance > 10000) return "Grand Architect";
    if (balance > 5000) return "Imperial Knight";
    return "Citizen";
};
