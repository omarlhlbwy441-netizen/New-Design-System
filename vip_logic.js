
export const verifyVIP = (key) => {
    return key === "EMPEROR-2001" ? { access: "Granted", rank: "Supreme" } : { access: "Denied" };
};
