import React, { useState } from 'react';

const Task3 = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', password: '' });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const isFormValid = formData.name && formData.email && formData.password;

  return (
    <div className="p-6 border rounded-lg bg-linear-to-r from-purple-50/50 to-pink-50/50">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Task 3: Mini Signup Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your password"
          />
        </div>
        
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg transition-colors ${isFormValid ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'}`}
        >
          Sign Up
        </button>
      </form>
      
      {submittedData && (
        <div className="mt-8 max-w-md mx-auto p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2 text-green-600">Submitted Data:</h3>
          <div className="space-y-1">
            <p><span className="font-semibold">Name:</span> {submittedData.name}</p>
            <p><span className="font-semibold">Email:</span> {submittedData.email}</p>
            <p><span className="font-semibold">Password:</span> ••••••••</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task3;