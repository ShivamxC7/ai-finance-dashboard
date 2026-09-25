import { getTransactions } from "../services/transactionApi";
import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, setTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}