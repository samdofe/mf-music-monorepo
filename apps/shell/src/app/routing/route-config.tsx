import React, { lazy } from 'react';
import { ShellLayoutComponent } from '@layouts';
import { Navigate } from 'react-router-dom';
import { RouteWrapper } from '@inditex/router';

const PodcastApp = lazy(() =>
  import('podcast/PodcastApp').catch(() => {
    return { default: () => <div>Error Loading PodcastApp</div> };
  })
);

export const routes: any[] = [
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
