import React from 'react';
import { Link, Outlet, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/podcast',
    element: (
      <div>
        <h1>PODCAST Remote app</h1>
        <Outlet />

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        {/*      <div role="navigation">
        <ul>
          <li>
            <Link to="/podcast">Podcast</Link>
          </li>
          <li>
            <Link to="/podcast/episode">Podcast : Episode</Link>
          </li>
        </ul>
      </div>*/}
      </div>
    ),
    children: [
      {
        index: true,
        element: (
          <div>
            This are the routes from micro front end Podcast{' '}
            <Link to="episode">Click here for Podcast : episode </Link>
          </div>
        )
      },
      {
        path: 'episode',
        element: (
          <div>
            <Link to="..">Click here to go back to Podcast page.</Link>
          </div>
        )
      }
    ]
  }
];

export default routes;
