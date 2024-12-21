import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './route-config';

const RouteConfigElement = (): ReactElement=>{
  return useRoutes(routes) ?? <></>;
};

export default RouteConfigElement;
