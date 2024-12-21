import React, { lazy, ReactNode } from 'react';
import { Outlet, RouteObject, useNavigate, useRoutes } from 'react-router-dom';
import App from '../app';
import { CdkHeader } from '@inditex/cdk-header';
import { ThreeDotsScaleIcon } from '@inditex/icons';

const RouteConfigElement = ({ routes }: { routes:  RouteObject[] }): ReactNode =>{
  return useRoutes(routes) ?? <></>;
};

const loadRemoteRoutes = (remoteRoutePromise: Promise<any>) => {
  return lazy(async () => {
    const { default: remoteRoutes } = await remoteRoutePromise;
    return { default: () => <RouteConfigElement routes={remoteRoutes} /> };
  });
};

const homeRoutes = import('home/route-config');
const podcastRoutes = import('podcast/route-config');

// Lazy-loaded components
const HomeApp = lazy(() => import('home/HomeApp'));
const PodcastApp = lazy(() => import('podcast/PodcastApp'));
const getRoutesElement = (routesPromise: Promise<any>) => lazy(async () => {
  const { default: routes } = await routesPromise;

  // Return a component that wraps RouteConfigElement
  return {
    default: () => <RouteConfigElement routes={routes} />,
  };
});

// const HomeRoutesElement = getRoutesElement(homeRoutes);
// const PodcastRoutesElement = getRoutesElement(podcastRoutes);


const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <div>
        <CdkHeader title="Podcaster" showIcon={true} />
        <ThreeDotsScaleIcon />
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomeApp />
      },
      {
        path: 'podcast',
        element: <PodcastApp />
      },
    ]
  }
];

export default routes;
