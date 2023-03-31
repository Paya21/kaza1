import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './page/Home';
import Header from './component/Header';
import About from './page/About';
import Cards from './page/Cards'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Home />
      <Header />
      <About />
      <Cards />
    </div>
  </React.StrictMode>
);

