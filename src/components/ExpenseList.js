import React from "react";


function ExpenseList({ expenses, onDeleteExpense }) {
  if (!expenses || expenses.length === 0) {
    return (
      <p className="text-center mt-6 text-gray-500">
        No expenses added yet.
      </p>
    );
  }

const sortedExpenses = [...expenses].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

  return (
    <div className="mt-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Recent Expenses</h2>

      <div className="space-y-3">
        {sortedExpenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold">
                ₹{expense.amount}
              </span>

              <button
                onClick={() => onDeleteExpense(expense.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </div>

            <div className="text-sm text-gray-500">
              {expense.category} • {expense.date}
            </div>

            {expense.note && (
              <div className="text-sm text-gray-600 mt-1">
                {expense.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
