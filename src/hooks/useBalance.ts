import { useState, useEffect } from 'react';

export const useBalance = () => {
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem('balance');
    return savedBalance ? Number(savedBalance) : 5700444;
  });

  useEffect(() => {
    localStorage.setItem('balance', balance.toString());
  }, [balance]);

  const updateBalance = (newBalance: number) => {
    setBalance(newBalance);
  };

  return { balance, updateBalance };
};
