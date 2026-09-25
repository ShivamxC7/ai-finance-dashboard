import API_URL from "./api";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export async function getTransactions() {
  const response = await fetch(`${API_URL}/transactions`, {
    headers: getAuthHeaders(),
  });

  return await response.json();
}

export async function createTransaction(transaction) {
  const response = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
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
      ...getAuthHeaders(),
    },
    body: JSON.stringify(transaction),
  });

  return await response.json();
}

export async function deleteTransaction(id) {
  await fetch(`${API_URL}/transactions/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
}

export async function deleteAllTransactions() {
  const response = await fetch(`${API_URL}/transactions/all`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  return await response.json();
}