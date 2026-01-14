import React, { useState } from 'react';

const Task1 = () => {
  const StudentCard = ({ name, rollNumber, batch, favoriteLanguage, theme = 'light' }) => (
    <div className={`p-4 rounded-lg shadow mb-4 transition-all ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-white text-zinc-800'}`}>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="space-y-1">
        <p><span className="font-semibold">Roll No:</span> {rollNumber}</p>
        <p><span className="font-semibold">Batch:</span> {batch}</p>
        <p><span className="font-semibold">Favorite Language:</span> {favoriteLanguage}</p>
      </div>
    </div>
  );

  const students = [
    { id: 1, name: "Ali Khan", rollNumber: "001", batch: "2023", favoriteLanguage: "JavaScript" },
    { id: 2, name: "Sara Ahmed", rollNumber: "002", batch: "2023", favoriteLanguage: "Python" },
    { id: 3, name: "Ahmed Raza", rollNumber: "003", batch: "2024", favoriteLanguage: "TypeScript" },
    { id: 4, name: "Fatima Noor", rollNumber: "004", batch: "2024", favoriteLanguage: "Java" },
  ];

  const [theme, setTheme] = useState('light');

  return (
    <div className="p-6 border rounded-lg bg-linear-to-r from-blue-50/50 to-indigo-50/50">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Task 1: React Playground App</h2>
      <div className="mb-4">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map(student => (
          <StudentCard key={student.id} {...student} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Task1;