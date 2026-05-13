
export const banUser = (userId) => {
    console.log(`⚖️ قرار سيادي: تم نفي المستخدم ${userId} من الإمبراطورية للأبد.`);
    return { status: "Exiled", blacklist: true };
};
