
export const signCreatorContract = (creatorId, agencyId) => {
    return {
        contractId: `SIG-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        share: "80%",
        status: "VERIFIED_BY_MAYA",
        date: new Date().toISOString()
    };
};
