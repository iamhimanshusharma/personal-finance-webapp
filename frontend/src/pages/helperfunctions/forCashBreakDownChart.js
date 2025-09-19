export function calculateMonthlyTotals(transactions) {
    // Create an array with 12 months initialized to 0
    const monthlyTotals = Array(12).fill(0);

    transactions.forEach(tx => {
        const date = new Date(tx.createdAt);
        const monthIndex = date.getMonth(); // 0 = Jan, 11 = Dec
        monthlyTotals[monthIndex] += tx.amount;
    });

    return monthlyTotals;
}
