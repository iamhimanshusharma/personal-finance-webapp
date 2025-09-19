export function calculateOverallSavings(incomeTransactions, expenseTransactions) {
    const totalIncome = incomeTransactions.reduce((sum, tx) => sum + tx.amount, 0);
    const totalExpenses = expenseTransactions.reduce((sum, tx) => sum + tx.amount, 0);

    if (totalIncome === 0) return 0; // Avoid division by zero

    const saved = totalIncome - totalExpenses;
    return (saved / totalIncome) * 100;
}
