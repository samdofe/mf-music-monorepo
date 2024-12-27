import React from 'react';
import {Link, RouteObject} from 'react-router-dom';
import { PodcastDetailsPage, PodcastsGridPage } from '@pages';
import { PodcastsLayout } from '@layouts';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PodcastsLayout /> ,
    children: [
      {
        path: '',
        element: <PodcastsGridPage />
      },
      {
        path: 'podcast/:id',
        element: <PodcastDetailsPage />,
        children: [
          {
            path: 'episode/:id',
            element: (
              <div>
                <Link to="/podcast/1234">Click here to go back to Podcast page.</Link>
              </div>
            )
          }
        ]
      }
    ]
  }
];

export default routes;
