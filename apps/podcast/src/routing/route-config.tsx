import React from 'react';
import { RouteObject} from 'react-router-dom';
import { EpisodePlayerPage, EpisodesListPage, PodcastDetailsPage, PodcastsGridPage } from '@pages';
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
            element: <EpisodePlayerPage />
          }
        ]
      }
    ]
  }
];

export default routes;
