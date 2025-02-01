const API_URL = 'http://localhost:3000';

export const getBalance = async (userId) => {
  const response = await fetch(`${API_URL}/account/balance`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'user_id': userId,
    },
  });

  const data = await response.json();
  return data;
};

export const creditAmount = async (userId, amount) => {
  const response = await fetch(`${API_URL}/account/credit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user_id': userId,
    },
    body: JSON.stringify({ amount }),
  });

  const data = await response.json();
  return data;
};

export const debitAmount = async (userId, amount) => {
  const response = await fetch(`${API_URL}/account/debit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user_id': userId,
    },
    body: JSON.stringify({ amount }),
  });

  const data = await response.json();
  return data;
};
