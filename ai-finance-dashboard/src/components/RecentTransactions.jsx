import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function RecentTransaction(){

const {transactions} = useContext(TransactionContext);
const recentTransactions = [...transactions]
.reverse()
.slice(0,5);
    return(
        <>
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">
               🗒️ Recent Transactions
            </h2>
<table className="w-full">
    <thead>
        <tr className="border-b">
            <th className="text-left pb-3">Title</th>
            <th className="text-left pb-3">Category</th>
            <th className="text-left pb-3">Amount</th>
        </tr>
    </thead>

    <tbody>
        {recentTransactions.map((transaction)=>(
            <tr key={transaction.id} className="border-b">
                <td className="py-3">{transaction.title}</td>
                <td>{transaction.category}</td>

                <td
                className={
                    transaction.amount >= 0
                    ? "text-green-600 font-semibold"
                    : "text-red-500 font-semibold"
                }
                >
                    ₹{Math.abs(transaction.amount)}
                </td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
        </>
    );
}

export default RecentTransaction