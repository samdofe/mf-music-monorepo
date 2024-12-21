import React, { ReactElement } from 'react';
import { RouteObject, useNavigate } from 'react-router-dom';

const HomeLayout = (): ReactElement => {
  const navigate = useNavigate();

  const gotToPodcast = ()=>{
    navigate('/podcast');
  }

  return (
    <div>
      <h1>HOME Remote app</h1>
      <button onClick={gotToPodcast}>Go to Podcast</button>
    </div>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />
  }
];

export default routes;
