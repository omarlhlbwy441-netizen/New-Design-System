
            export const executeJustice = (userId, violation) => {
                console.log(`⚖️ المحكمة الرقمية: رصد مخالفة من ${userId}. نوع المخالفة: ${violation}`);
                return { verdict: "Freeze Assets", status: "Executed" };
            };
            