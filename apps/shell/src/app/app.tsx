import React, { ReactElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProviderWrapper } from '@inditex/router';
import routes from './routes/route-config';

const router = createBrowserRouter(routes);

export default function App(): ReactElement {
  return  <RouterProviderWrapper router={router} />
}
