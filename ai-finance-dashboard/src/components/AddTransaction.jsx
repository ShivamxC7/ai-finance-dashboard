import { useState, useEffect } from "react";

import {
    createTransaction,
    updateTransaction,
} from "../services/transactionApi";

function AddTransaction({setTransactions,
    editingTransaction, setEditingTransaction
}){

  

const[amount, setAmount] = useState("");
const[category, setCategory] = useState("Food");
const[remark, setRemark] = useState("");
const[editId, setEditId] = useState(null);



useEffect(() => {
    if(editingTransaction){
        setAmount(Math.abs(editingTransaction.amount));
        setCategory(editingTransaction.category);
        setRemark(editingTransaction.title);
        setEditId(editingTransaction._id);
    }
}, [editingTransaction]);


const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !remark) {
        alert("Please fill all fields!");
        return;
    }

    const transactionData = {
        title: remark,
        category,
        amount:
            category === "Salary"
                ? Number(amount)
                : -Number(amount),
    };

    try {

        if (editId) {

            const updatedTransaction = await updateTransaction(
    editId,
    transactionData
);

            setTransactions((prev) =>
                prev.map((transaction) =>
                    transaction._id === editId
                        ? updatedTransaction
                        : transaction
                )
            );

            setEditId(null);
            setEditingTransaction(null);

        } else {

          const savedTransaction = await createTransaction(transactionData);

            setTransactions((prev) => [
                ...prev,
                savedTransaction,
            ]);
        }

        setAmount("");
        setCategory("Food");
        setRemark("");

    } catch (error) {
        console.error(error);
        alert("Failed to save transaction.");
    }
};

    return(
<div className="bg-white rounded-xl shadow-md p-6 mt-8">

    <h2 className="text-xl font-bold mb-6">
  {editId ? "Save Changes" : "Add Transaction"}
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
        <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-lg p-3"/>

        <select 
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
        className="w-full border rounded-lg p-3">
            <option>Food</option>
            <option>Shopping</option>
             <option>Entertainment</option>
              <option>Salary</option>
               <option>Travelling</option>
        </select>

        <input 
        type="text"
        placeholder="Remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        className="w-full border rounded-lg p-3"/>
        

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            {editId ? "Save Changes" : "Add Transaction"}
        </button>
    </form>
</div>
    );
}

export default AddTransaction;