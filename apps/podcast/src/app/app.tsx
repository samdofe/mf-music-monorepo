import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProviderWrapper } from '@inditex/router';
import routes from './routes/route-config';

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProviderWrapper router={router}/>
}
