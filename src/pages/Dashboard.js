import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { getBalance, creditAmount, debitAmount } from '../services/accountService';

function Dashboard({ userId, userRole }) {
  const [balance, setBalance] = useState(0);
  const [creditAmountInput, setCreditAmount] = useState('');
  const [debitAmountInput, setDebitAmount] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      const data = await getBalance(userId);
      setBalance(data.balance);
    };
    fetchBalance();
  }, [userId]);

  const handleCredit = async () => {
    if (userRole !== 'primary') {
      alert("Only the primary user can credit funds.");
      return;
    }
    const data = await creditAmount(userId, parseFloat(creditAmountInput));
    alert(data.message);
    setBalance(data.balance);
  };

  const handleDebit = async () => {
    const data = await debitAmount(userId, parseFloat(debitAmountInput));
    alert(data.message);
    setBalance(data.balance);
  };

  return (
    <div className="page">
      <h2>Account Balance: {balance}</h2>
      {userRole === 'primary' && (
        <>
          <Input
            value={creditAmountInput}
            onChange={(e) => setCreditAmount(e.target.value)}
            placeholder="Credit Amount"
            type="number"
          />
          <Button text="Credit" onClick={handleCredit} />
        </>
      )}
      <Input
        value={debitAmountInput}
        onChange={(e) => setDebitAmount(e.target.value)}
        placeholder="Debit Amount"
        type="number"
      />
      <Button text="Debit" onClick={handleDebit} />
    </div>
  );
}

export default Dashboard;
