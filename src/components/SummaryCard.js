import React from "react";

function SummaryCard({ expenses }) {

  const totalExpense = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  const totalTransactions = expenses.length;

  const uniqueCategories = [
    ...new Set(expenses.map(item => item.category))
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      
      <div className="bg-blue-500 text-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Total Expense</h3>
        <p className="text-2xl font-bold mt-2">₹ {totalExpense.toLocaleString()}
      </p>
      </div>

      <div className="bg-green-500 text-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Transactions</h3>
        <p className="text-2xl font-bold mt-2">{totalTransactions}</p>
      </div>

      <div className="bg-purple-500 text-white p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Categories</h3>
        <p className="text-2xl font-bold mt-2">{uniqueCategories.length}</p>
      </div>

    </div>
  );
}

export default SummaryCard;
