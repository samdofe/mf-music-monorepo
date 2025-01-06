import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { EpisodePlayerPage, EpisodesListPage, PodcastDetailsPage, PodcastsGridPage } from '@pages';
import { PodcastsLayout } from '@layouts';
import { RouteWrapper } from '@inditex/router';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RouteWrapper element={<PodcastsLayout />} />,
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
            element: <EpisodePlayerPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
];

export default routes;
