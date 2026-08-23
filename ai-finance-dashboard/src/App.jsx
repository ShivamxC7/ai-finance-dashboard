import { useState } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from './pages/Transactions.jsx';
import AICoach from './pages/AICoach.jsx';
import Settings from './pages/Settings.jsx';
import About from './pages/About.jsx';

import {Routes, Route} from "react-router-dom"



function App(){
  return(
  
    <div className="min-h-screen bg-gray-100">



   <Navbar></Navbar>

  <div className="flex ">
  <Sidebar />

  <div className="flex-1">
   <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/transactions" element={<Transactions />} />
  <Route path="/ai-coach" element={<AICoach />} />
  <Route path ="/settings" element={<Settings />} />
  <Route path ="/about" element={<About/>}/>
</Routes>



  </div>
</div>


</div>

    
  );
}

export default App
