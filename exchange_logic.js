
export const getDBCPrice = () => {
    const basePrice = 2001.00; // سعر رمزي يمثل بداية العصر
    const growth = Math.random() * 50; 
    return (basePrice + growth).toFixed(2);
};
