import API_URL from "./api";


export async function getTransactions() {
    const response = await fetch(`${API_URL}/transactions`);
    return await response.json();
}


export async function createTransaction(transaction) {
    const response = await fetch(`${API_URL}/transactions`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
    });

    return await response.json();
}


export async function updateTransaction(id, transaction) {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
    });

    return await response.json();
}


export async function deleteTransaction(id) {
    await fetch(`${API_URL}/transactions/${id}`, {
        method: "DELETE",
    });
}