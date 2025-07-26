import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const Dashboard = () => {
  const [portfolioValue, setPortfolioValue] = useState(12345.67);
  const [notification, setNotification] = useState('');

  // Connect to the real-time backend
  useEffect(() => {
    // NOTE: Replace with your actual backend URL
    const socket = io("http://localhost:3001");

    socket.on("connect", () => {
      console.log("Connected to real-time server!");
    });

    socket.on("incoming-transaction", (data) => {
      setNotification(`Incoming: ${data.amount} ${data.symbol}!`);
      // Logic to update portfolio would go here
      setTimeout(() => setNotification(''), 5000); // Hide after 5s
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <div className="container mx-auto p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">Light-man Trust</h1>
        {/* Placeholder for user avatar */}
        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
      </header>

      {notification && (
        <div className="bg-blue-500 text-white p-4 rounded-lg mb-8 animate-pulse">
          {notification}
        </div>
      )}

      <div className="text-center mb-12">
        <p className="text-gray-400">Total Portfolio Value</p>
        <h2 className="text-5xl font-bold tracking-tighter">${portfolioValue.toLocaleString()}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">Send</button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">Receive</button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">Swap</button>
        <button className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700">Stake</button>
      </div>

      {/* Placeholder for asset list */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Assets</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p>ETH, USDC, MATIC...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
