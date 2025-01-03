import React from 'react';
import {Link, RouteObject} from 'react-router-dom';
import { EpisodesListPage, PodcastDetailsPage, PodcastsGridPage } from '@pages';
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
        path: 'podcast/:podcastId',
        element: <PodcastDetailsPage />,
        children: [
          {
            path: '',
            element: <EpisodesListPage />
          },
          {
            path: 'episode/:episodeId',
            element: (
              <div>
                <Link to="/podcast/788236947">Click here to go back to Podcast page.</Link>
              </div>
            )
          }
        ]
      }
    ]
  }
];

export default routes;
