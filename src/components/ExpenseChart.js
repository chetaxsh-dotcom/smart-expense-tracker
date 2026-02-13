import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ExpenseChart({ expenses }) {

  if (!expenses || expenses.length === 0) {
    return <p className="mt-4">No data to display</p>;
  }

  const categoryData = expenses.reduce((acc, curr) => {
    const existing = acc.find(item => item.name === curr.category);

    if (existing) {
      existing.value += Number(curr.amount);
    } else {
      acc.push({
        name: curr.category,
        value: Number(curr.amount)
      });
    }

    return acc;
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF"];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Expense Overview</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
