import React, { useContext } from 'react';
import './App.css';

import ApplicarionForm from './components/applicationForm/ApplicationForm';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Counter } from './components/counter/Counter';
import { ModeContext } from './context/themeContext';
import ModeIcon from './components/modeIcon/ModeIcon';

function App() {
  

  return (
    <div className="App">
      <header className='header'>
        <nav className='header__nav'>
          <NavLink className='header__nav--link' to="/">Home</NavLink>
          <NavLink className='header__nav--link' to="/counter">Counter</NavLink>
        </nav>
        <ModeIcon/>
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
