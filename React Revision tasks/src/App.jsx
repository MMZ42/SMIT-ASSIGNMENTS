
import React from 'react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import Task6 from './components/Task6';

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-zinc-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            React Revision Tasks
          </h1>
          <p className="text-zinc-600">Frontend Development with ReactJS</p>
          <p className="text-zinc-500 text-sm mt-2">Instructor: Sir Talal Ahmed</p>
        </header>
        
        <div className="space-y-12">
          <Task1 />
          <Task2 />
          <Task3 />
          <Task4 />
          <Task5 />
          <Task6 />
        </div>
        
        <footer className="mt-12 pt-8 border-t text-center text-zinc-500">
          <p>Practice is the key to mastery in React. Keep coding! 💻</p>
        </footer>
      </div>
    </div>
  );
};

export default App;