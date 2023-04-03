import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css';

import Home from './page/Home';
import About from './page/About';

import Card from './page/Card';

const router = createBrowserRouter([
  {
  path:"/",
  element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/card/:cardId",
    element: <Card />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

