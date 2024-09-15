// src/App.js
import React from 'react';
import ExecCard from './components/ExecCard';
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <NavBar/>
     <ExecCard/>
    </div>
  );
}

export default App;