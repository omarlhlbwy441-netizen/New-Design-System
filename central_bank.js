
            const COIN_NAME = "DoubleCoin (DBC)";
            export const mintCurrency = (vaultValue) => {
                const supply = vaultValue * 1000; // نسبة الربط بالأصول
                return `💠 تم صك ${supply.toLocaleString()} من عملة ${COIN_NAME}`;
            };
            