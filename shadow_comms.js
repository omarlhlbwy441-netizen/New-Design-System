
export const encryptShadowMsg = (msg, medalId) => {
    console.log(`🌑 تشفير رسالة باستخدام مفتاح الوسام: ${medalId}`);
    // محاكاة تشفير عالي المستوى
    return btoa(msg + medalId); 
};

export const burnMessage = (msgId) => {
    console.log(`🔥 تم تدمير الرسالة ${msgId} بنجاح.`);
};
