import React, { ReactElement, useState } from 'react';
import { RouteObject, useNavigate } from 'react-router-dom';
import { usePodcastLoad } from '@api';
import { ThreeDotsScaleIcon } from '@inditex/icons';
import { CdkThumbnail } from '@inditex/cdk';

const useDelayedNavigation = () => {
  const navigate = useNavigate();

  return (to: string, options?: any) => {
    setTimeout(() => navigate(to, options), 3000); // Delay navigation by 3 seconds
  };
};

const HomeLayout = (): ReactElement => {
  const {data, isFetching} = usePodcastLoad();
  const  {artist, image, name} = {
    artist: {
      label: "The Joe Budden Network",
      attributes: {
        "href": "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"
      }
    },
    image: [
      {
        "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
        "attributes": {
          "height": "55"
        }
      },
      {
        "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
        "attributes": {
          "height": "60"
        }
      },
      {
        "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
        "attributes": {
          "height": "170"
        }
      }
    ],
    name: {
      "label": "The Joe Budden Podcast"
    }
  };
  const navigate = useDelayedNavigation();

  const gotToPodcast = ()=>{
    navigate('/podcast/1234');
  }

  return (
    <div>
      <h1>HOME Remote app!!</h1>
      <button onClick={gotToPodcast}>Go to Podcast</button>
      <CdkThumbnail imgUrl={image[2].label} title={name.label.toUpperCase()} subTitle={`Author: ${artist.label}`}/>
      {
        isFetching ? (
          <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ThreeDotsScaleIcon />
          </div>
        ) : data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )
      }
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
