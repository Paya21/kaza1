import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './page/Home';
import Header from './component/Header';
import About from './page/About';
import Cards from './page/Cards'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Cards />
    </Routes>
    
  </React.StrictMode>
);

