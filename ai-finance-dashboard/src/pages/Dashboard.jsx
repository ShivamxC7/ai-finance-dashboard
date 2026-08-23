import SummaryCard from "../components/SummaryCard";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import ExpenseChart from "../components/ExpenseChart";
import FinancialInsights from "../components/FinancialInsights";
import RecentTransaction from "../components/RecentTransactions";


function Dashboard() {
const{ transactions } = useContext(TransactionContext);
const income = transactions
  .filter((t) => t.amount > 0)
  .reduce((sum, t) => sum + t.amount, 0);

  const currency = "₹";

const expenses = transactions
  .filter((t) => t.amount < 0)
  .reduce((sum, t) => sum + Math.abs(t.amount), 0);

const balance = income - expenses;

const summaryData = [
  {
    icon: "💰",
    title: "Balance",
    amount: `${currency}${balance}`,
  },
  {
    icon: "📈",
    title: "Income",
    amount: `${currency}${income}`,
  },
  {
    icon: "📉",
    title: "Expenses",
    amount: `${currency}${expenses}`,
  },
];
    
  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold">Welcome Back User</h1>

      <p className="text-gray-500 mt-2">
        Here's a quick overview of your finances
      </p>

      <div className="flex flex-wrap gap-6 mt-8">
       {summaryData.map((item)=>(
        <SummaryCard
        key={item.title}
        icon={item.icon}
        title={item.title}
        amount={item.amount}
        />

       ))}
      </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <ExpenseChart/>
      <FinancialInsights/>
      <RecentTransaction/>
        </div>

    </main>
  );
}

export default Dashboard;