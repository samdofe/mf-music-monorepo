import React, { ReactElement } from 'react';
import { RouteObject, useNavigate } from 'react-router-dom';
import { usePodcastLoad } from '@api';

const useDelayedNavigation = () => {
  const navigate = useNavigate();

  return (to: string, options?: any) => {
    setTimeout(() => navigate(to, options), 3000); // Delay navigation by 3 seconds
  };
};

const HomeLayout = (): ReactElement => {
  const {data} = usePodcastLoad();
  const navigate = useDelayedNavigation();

  const gotToPodcast = ()=>{
    navigate('/podcast/1234');
  }

  return (
    <div>
      <h1>HOME Remote app!!</h1>
      <button onClick={gotToPodcast}>Go to Podcast</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
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
