
export const processTransaction = (sender, receiver, amountInDiamonds) => {
    const throneTax = amountInDiamonds * 0.01;
    const agencyFee = amountInDiamonds * 0.05;
    const creatorEarnings = amountInDiamonds - (throneTax + agencyFee);
    
    // تحويل الأرباح إلى كوينز (فئة الأرباح)
    const coinsEarned = creatorEarnings * 100; 
    console.log(`💰 جاري تحويل ${coinsEarned} كوينز للمذيع بعد خصم الضرائب.`);
    return { coinsEarned, throneTax, agencyFee };
};
