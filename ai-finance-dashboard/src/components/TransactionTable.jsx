
import { deleteTransaction as deleteTransactionApi } 
from "../services/transactionApi";

function TransactionTable({transactions,
   setTransactions, setEditingTransaction}){

const deleteTransaction = async (id) => {
  try {
    await deleteTransactionApi(id);

    setTransactions((prev) =>
      prev.filter((transaction) => transaction._id !== id)
    );
  } catch (error) {
    console.error(error);
    alert("Failed to delete transaction.");
  }
};

    return(<>
<div className="bg-white rounded-xl shadow-md p-6 mt-8">
<h2 className="text-xl font-bold mb-4">
    Recent Transactions
</h2>

<table className="w-full">
    <thead>
        <tr className="text-left-border-b">
            <th className="pb-3 text-center">Title</th>
            <th className="pb-3 text-center">Category</th>
            <th className="pb-3 text-center">Amount</th>
             <th className="pb-3 text-center">Date</th>
            <th className="pb-3 text-center">Action</th>
           
        </tr>
    </thead>

   <tbody>
  {transactions.map((transaction) => (
    <tr key={transaction._id} className="border-b">
      <td className="py-3 text-title">{transaction.title}</td>
      <td className="text-center">{transaction.category}</td>
      <td
        className={`text-center ${
          transaction.amount >= 0
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {transaction.amount}
      </td>
      <td className="text-center">
      { transaction.date 
      ? new Date(transaction.date).toLocaleDateString("en-GB",{
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      : "N/A"
      }
     
</td>

<td className="flex gap-2 py-2 text-center">
<button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
onClick={() => setEditingTransaction(transaction)}
>
  Edit
</button>

  <button
    onClick={() => deleteTransaction(transaction._id)}
    className="bg-red-500 text-white px-3 py-1 rounded"
  >
    Delete
  </button>
</td>

    </tr>
  ))}
</tbody>

</table>
</div>
</>
    );
}

export default TransactionTable