import React, { useState } from 'react';

const Task4 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Practice Tailwind CSS', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');
  
  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };
  
  const deleteTodo = (id) => setTodos(todos.filter(todo => todo.id !== id));
  const toggleComplete = (id) => setTodos(todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
  
  const completedTasks = todos.filter(todo => todo.completed).length;

  return (
    <div className="p-6 border rounded-lg bg-linear-to-r from-amber-50/50 to-orange-50/50">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Task 4: Todo App with Rules</h2>
      
      <div className="max-w-md mx-auto">
        <div className="flex mb-6 gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button
            onClick={addTodo}
            disabled={!newTodo.trim()}
            className={`px-6 py-3 rounded-lg transition-colors ${newTodo.trim() ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'}`}
          >
            Add
          </button>
        </div>
        
        <div className="mb-4 p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Progress</h3>
          <div className="flex justify-between">
            <span>Total Tasks: <span className="font-bold">{todos.length}</span></span>
            <span>Completed: <span className="font-bold text-green-600">{completedTasks}</span></span>
          </div>
        </div>
        
        <div className="space-y-3">
          {todos.map(todo => (
            <div key={todo.id} className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="w-5 h-5 text-green-500 rounded"
                />
                <span className={`${todo.completed ? 'line-through text-zinc-500' : ''}`}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task4;