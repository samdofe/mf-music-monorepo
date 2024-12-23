import React from 'react';
import { Link, Outlet, RouteObject } from 'react-router-dom';
import { RouteWrapper } from '@inditex/router';

const routes: RouteObject[] = [
  {
    path: '/:id',
    element: <RouteWrapper element={<Outlet />} />,
    children: [
      {
        path: '',
        element: (
          <div>
            <h1>PODCAST Remote app</h1>
            Link to <Link to={`/`}>HOME</Link>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: '',
            element: (
              <div>
                This are the routes from micro front end Podcast{' '}
                <Link to="/podcast/1234/episode">Click here for Podcast : episode </Link>
              </div>
            )
          },
          {
            path: 'episode',
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
