import React from 'react';

const Task5 = () => {
  const Layout = ({ children }) => (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 to-zinc-100">
      {children}
    </div>
  );

  const Header = ({ title }) => (
    <header className="bg-linear-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );

  const Sidebar = ({ children }) => (
    <aside className="w-full md:w-64 bg-white p-4 shadow-md rounded-lg">
      <h3 className="font-bold text-lg mb-4">Navigation</h3>
      {children}
    </aside>
  );

  const Main = ({ children }) => (
    <main className="flex-1 p-4">
      {children}
    </main>
  );

  const Footer = () => (
    <footer className="bg-zinc-800 text-white p-4 text-center">
      <p>© 2024 React Tasks App. All rights reserved.</p>
    </footer>
  );

  return (
    <div className="border rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 p-6 bg-linear-to-r from-indigo-500 to-purple-600 text-white">
        Task 5: Component Composition
      </h2>
      
      <Layout>
        <Header title="React Dashboard" />
        <div className="flex flex-col md:flex-row p-4 gap-4">
          <Sidebar>
            <nav className="space-y-2">
              <div className="block p-2 hover:bg-blue-50 rounded">Task 1: Student Cards</div>
              <div className="block p-2 hover:bg-blue-50 rounded">Task 2: Emoji Counter</div>
              <div className="block p-2 hover:bg-blue-50 rounded">Task 3: Signup Form</div>
              <div className="block p-2 hover:bg-blue-50 rounded">Task 4: Todo App</div>
              <div className="block p-2 hover:bg-blue-50 rounded">Task 6: Product Cards</div>
            </nav>
          </Sidebar>
          <Main>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Main Content Area</h3>
              <p className="mb-4">This demonstrates component composition in React.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Layout</strong>: Wraps all layout components</li>
                <li><strong>Header</strong>: Top navigation bar component</li>
                <li><strong>Sidebar</strong>: Left navigation panel.</li>
                <li><strong>Main</strong>: Main content container</li>
                <li><strong>Footer</strong>: Bottom section component</li>
              </ul>
            </div>
          </Main>
        </div>
        <Footer />
      </Layout>
    </div>
  );
};

export default Task5;