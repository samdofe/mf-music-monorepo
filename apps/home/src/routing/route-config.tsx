import React from 'react';
import { RouteObject } from 'react-router-dom';
import { PodcastsPage } from '../pages';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <PodcastsPage />
  }
];

export default routes;
