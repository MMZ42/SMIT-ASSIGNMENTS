import React, { useState } from 'react';

const Task2 = () => {
  const [count, setCount] = useState(0);
  
  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev > 0 ? prev - 1 : 0);
  const reset = () => setCount(0);

  return (
    <div className="p-6 border rounded-lg bg-linear-to-r from-green-50/50 to-emerald-50/50">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Task 2: Emoji Counter Game</h2>
      <div className="text-center">
        <div className="text-6xl mb-6">{count >= 10 ? '🎉' : '😊'}</div>
        <div className="text-3xl font-bold mb-6">Count: {count}</div>
        
        {count >= 10 && (
          <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg">
            🎊 Congratulations! You reached 10!
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <button
            onClick={decrease}
            className="px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors disabled:opacity-50"
            disabled={count === 0}
          >
            Decrease (-)
          </button>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg bg-zinc-500 text-white hover:bg-zinc-600 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={increase}
            className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            Increase (+)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;