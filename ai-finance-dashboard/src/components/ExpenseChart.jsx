import { PieChart, Pie, Cell, Tooltip, Legend,
    ResponsiveContainer
 } from "recharts";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function ExpenseChart(){

    const {transactions} = useContext(TransactionContext);
    const expenseData = transactions.filter(
        (transaction) => transaction.amount < 0).reduce((acc, transaction) => {
        const existing = acc.find(
            (item) =>item.name === transaction.category
        );

        if(existing) {
            existing.value += Math.abs(transaction.amount);
        } else {
            acc.push({
                name: transaction.category,
                value: Math.abs(transaction.amount),
            });
        }

        return acc;
    }, []);

    const COLORS = [
        "#0088fe",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#AF19FF",
    ];

    console.log(expenseData);
    console.log(transactions);
    return(
<>

<div className="bg-white rounded-xl shadow-md p-6 mt-8">
    <h2 className="text-xl font-bold mb-4">
        Expense Category
    </h2>
<div className="w-full h-80">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={expenseData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {expenseData.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
</div>
</div>


</>
    );
}

export default ExpenseChart