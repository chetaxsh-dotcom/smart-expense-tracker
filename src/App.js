import { useState, useEffect } from "react";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryCard from "./components/SummaryCard";


function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedData = localStorage.getItem("expenses");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ExpenseForm onAddExpense={addExpense} />
      <SummaryCard expenses={expenses}/> 
      <ExpenseChart expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;
