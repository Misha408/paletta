import './App.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { NavBar } from './Components/NavBar/NavBar.tsx';
import { Footer } from './Components/Footer/Footer.jsx';
import { MobileNavBar } from './Components/MobileNavBar/MobileNavBar.jsx';
import ScrollToTop from './Components/SkrollToTop.jsx';

export const App = () => {

  return (
    <div>
      <div className="extraSmal:hidden small:block">
        <NavBar />
      </div>

      <div className="small:hidden">
        <MobileNavBar />
      </div>

      <main className='extraSmall:pt-[1rem] small:pt-0'>
        <ScrollToTop />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
