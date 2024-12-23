import { Route, RouteObject } from 'react-router-dom';
import React, { ReactElement } from 'react';

export const renderRoutes = (
  routes: RouteObject[]
): ReactElement[] =>
  routes.map(({ path, element, children }) => (
    <Route key={path || 'default'} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
