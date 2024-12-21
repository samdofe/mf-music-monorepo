import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router } from '@remix-run/router';

export const useCreateBrowserRouter = (routes: RouteObject[]): Router => {
  return createBrowserRouter(routes);
};
