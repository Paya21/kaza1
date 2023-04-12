import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css';

import Home from './page/Home';
import About from './page/About';
import Card from './page/Card';
import ErrorPage from './page/Error';

const router = createBrowserRouter([
  {
  path:"/",
  element: <Home />,
  errorElement: <ErrorPage />
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

