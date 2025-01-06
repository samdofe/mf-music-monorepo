import React, { lazy } from 'react';
import { ShellLayoutComponent } from '../layouts';
import { RouteObject } from 'react-router-dom';

const PodcastApp = lazy(() =>
  import('podcast/PodcastApp').catch(() => {
    return { default: () => <div>Error Loading PodcastApp</div> };
  })
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ShellLayoutComponent />,
    children: [
      {
        index:true,
        element: <PodcastApp />
      },
      {
        path: '/*',
        element: <PodcastApp />
      }
    ]
  }
];
