
export const generateCardStyle = (rank, balance) => {
    let style = { border: "1px solid #C0C0C0", bg: "rgba(10,10,10,0.9)" };
    if (balance > 100000) style = { border: "2px solid #FFD700", bg: "linear-gradient(135deg, #000, #1a1a1a)", glow: "0 0 20px #FFD700" };
    return style;
};
