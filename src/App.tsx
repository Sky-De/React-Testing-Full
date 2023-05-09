import React from 'react';
import './App.css';

import ApplicarionForm from './components/applicationForm/ApplicationForm';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Counter } from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <NavLink className='header-link' to="/">Home</NavLink>
        <NavLink className='header-link' to="/counter">Counter</NavLink>
      </header>
      <main className='main'>
      <Routes>
        <Route path='/' element={<ApplicarionForm/>} />
        <Route path='/counter' element={<Counter/>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
