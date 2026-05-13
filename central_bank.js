
            const COIN_NAME = "DoubleCoin (DBC)";
            export const mintCurrency = (vaultValue) => {
                const supply = vaultValue * 1000; // نسبة الربط بالأصول
                return `💠 تم صك ${supply.toLocaleString()} من عملة ${COIN_NAME}`;
            };
            
export const initialMint = () => {
    const supply = 1000000;
    console.log(`💎 تم صك ${supply.toLocaleString()} DBC بنجاح.`);
    return supply;
};
