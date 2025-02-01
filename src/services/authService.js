const API_URL = 'http://localhost:3000';

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!data.user_id) {
    throw new Error('Invalid credentials');
  }
  return { user_id: data.user_id, role: data.role };
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (data.message !== 'User registered successfully') {
    throw new Error('Registration failed');
  }
  return data;
};
