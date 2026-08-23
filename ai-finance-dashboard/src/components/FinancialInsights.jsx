import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function FinancialInsights() {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

    const savingsRate = income > 0 ? 
    (((income - expenses) / income * 100).toFixed(1)) : 0;

    let savingsMessage = "";
    let savingsColor = "";

    if(savingsRate >= 50) {
        savingsMessage = "Excellent! You're saving a large portion of your income";
        savingsColor = "text-green-600";
    } else if ( savingsRate >= 30){
        savingsMessage="Good! You are saving more than 30% of your income";
        savingsColor = "text-yellow-600";
    } else {
        savingsMessage="Try saving some money";
        savingsColor="text-red-600";
    }

  const highestExpense = transactions
    .filter((t) => t.amount < 0)
    .sort((a, b) => a.amount - b.amount)[0];

    const categoryTotals = transactions
  .filter((t) => t.amount < 0)
  .reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {});

const highestCategory = Object.entries(categoryTotals).sort(
  (a, b) => b[1] - a[1]
)[0];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">
        📊 Financial Insights
      </h2>

      <ul className="space-y-3">
        <li>
          💰 Total Income: <strong>₹{income}</strong>
        </li>

        <li>
          💸 Total Expenses: <strong>₹{expenses}</strong>
        </li>

<li>
  🏆 Biggest Transaction:
  <strong>
    {highestExpense
      ? ` ${highestExpense.category} - ${highestExpense.title} (₹${Math.abs(highestExpense.amount)})`
      : " None"}
  </strong>
</li>

<li>
  📂 Highest Spending Category:
  <strong>
    {highestCategory
      ? ` ${highestCategory[0]} (₹${highestCategory[1]})`
      : " None"}
  </strong>
</li>
        
      </ul>

      <li>
  📈 Savings Rate:
  <strong> {savingsRate}%</strong>
</li>

<li className={savingsColor}>
 💡   <strong>{savingsMessage}</strong>
</li>
    </div>
  );
}

export default FinancialInsights;