import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionTable from "../components/TransactionTable";
import AddTransaction from "../components/AddTransaction";


function Transactions(){

   const{transactions, setTransactions} = useContext(TransactionContext);
   const[editingTransaction, setEditingTransaction] = useState(null);
   const[search, setSearch] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [sortBy, setSortBy] = useState("Newest");

  const filteredTransactions = transactions.filter((transaction) => {
  const matchesSearch =
    transaction.title.toLowerCase().includes(search.toLowerCase()) ||
    transaction.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    transaction.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const sortedTransactions = [...filteredTransactions];

switch (sortBy) {
  case "Newest":
    sortedTransactions.sort((a, b) => b.id - a.id);
    break;

  case "Oldest":
    sortedTransactions.sort((a, b) => a.id - b.id);
    break;

  case "Highest Amount":
    sortedTransactions.sort(
      (a, b) => Math.abs(b.amount) - Math.abs(a.amount)
    );
    break;

  case "Lowest Amount":
    sortedTransactions.sort(
      (a, b) => Math.abs(a.amount) - Math.abs(b.amount)
    );
    break;

  case "A-Z":
    sortedTransactions.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    break;
}

    return(
<main className="flex-1 p-8">

<h1 className="text-3xl font-bold">
    Transactions
</h1>

<div className="flex gap-4 mt-6 mb-6">
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border rounded-lg px-4 py-3"
  >
    <option>All</option>
    <option>Food</option>
    <option>Shopping</option>
    <option>Entertainment</option>
    <option>Travelling</option>
    <option>Salary</option>
  </select>

<select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="border rounded-lg px-4 py-3"
>
  <option>Newest</option>
  <option>Oldest</option>
  <option>Highest Amount</option>
  <option>Lowest Amount</option>
  <option>A-Z</option>
</select>

  <input
    type="text"
    placeholder="🔍 Search by title or category..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 border rounded-lg p-3"
  />
</div>

<TransactionTable 
transactions={filteredTransactions}
setTransactions={setTransactions}
setEditingTransaction={setEditingTransaction} />

<AddTransaction 
transactions={transactions}
setTransactions={setTransactions}
editingTransaction={editingTransaction}
setEditingTransaction={setEditingTransaction}
    />

</main>

    );
}

export default Transactions