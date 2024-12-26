import React from 'react';
import {Link, Outlet, RouteObject} from 'react-router-dom';
import {RouteWrapper} from '@inditex/router';
import {PodcastsPage} from '@pages';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <PodcastsPage />
      },
      {
        path: 'podcast/:id',
        element: (
          <RouteWrapper
            element={
              <div>
                <h1>PODCAST ID PAGE</h1>
                Link to <Link to={`/`}>HOME</Link>
                <Outlet />
              </div>
            }
          />
        ),
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
