import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { registerUser } from '../services/authService';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      alert("Registration successful!");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Button text="Register" onClick={handleRegister} />
      </form>
    </div>
  );
}

export default Register;
