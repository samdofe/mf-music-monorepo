import { RouteObject, useRoutes } from 'react-router-dom';
import { ReactElement } from 'react';

export const useAppRoutes = (routes: RouteObject[]): ReactElement | null => {
  return useRoutes(routes);
};
