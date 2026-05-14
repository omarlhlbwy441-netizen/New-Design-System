
export const AgencyPricing = {
    currencies: {
        EGP: 50.00, // سعر صرف الجنيه المصري للدايموند
        SAR: 3.75,  // ريال سعودي
        AED: 3.67,  // درهم إماراتي
        USD: 1.00   // دولار
    },
    calculateRate: (amount, currency) => {
        return amount * AgencyPricing.currencies[currency];
    }
};
