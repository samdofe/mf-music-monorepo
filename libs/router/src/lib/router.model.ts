import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';

export interface IRouterProviderWrapperParams{
  router: ReturnType<typeof createBrowserRouter | typeof createMemoryRouter>
}

export interface IRouteWrapperProps {
  element: ReactNode;
  isProtected?: boolean;
  fallback?: string;
}
