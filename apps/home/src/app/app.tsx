import React from 'react';
import { RouterProviderWrapper } from '@inditex/router';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/route-config';

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProviderWrapper router={router} />;
}
