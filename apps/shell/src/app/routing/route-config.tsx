import React from 'react';
import PodcastApp from 'podcast/PodcastApp';
import HomeApp from 'home/HomeApp';
import { ShellLayoutComponent } from '@layouts';

export const routes: any[] = [
  {
    path: '/',
    element: <ShellLayoutComponent />,
    children: [
      {
        index: true,
        element: <HomeApp />
      },
      {
        path: '/podcast/*',
        element: <PodcastApp />
      }
    ]
  }
];
