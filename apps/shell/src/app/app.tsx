import React, { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../routing/route-config';
import './app.module.scss';

const router = createBrowserRouter(routes);

const App = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
