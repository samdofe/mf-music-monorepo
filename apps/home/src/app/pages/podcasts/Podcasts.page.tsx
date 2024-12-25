import { useNavigate } from 'react-router-dom';
import React, { ReactElement } from 'react';
import { usePodcastLoad } from '@api';
import { CdkThumbnail } from '@inditex/cdk-thumbnail';
import { ThreeDotsScaleIcon } from '@inditex/icons';
import styles from './podcasts.page.module.scss';

const useDelayedNavigation = () => {
  const navigate = useNavigate();

  return (to: string, options?: any) => {
    setTimeout(() => navigate(to, options), 3000); // Delay navigation by 3 seconds
  };
};

export const PodcastsPage = (): ReactElement => {
  const {data, isFetching} = usePodcastLoad();
  const navigate = useDelayedNavigation();

  const gotToPodcast = () => {
    navigate('/podcast/1234');
  };

  return (
    <div className={styles['podcasts']}>
{/*      <h1>HOME Remote app!!</h1>
      <button onClick={gotToPodcast}>Go to Podcast</button>*/}
      <div className={styles['podcasts__filter-container']}>
        <input type="text" />
      </div>
      {isFetching ? (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ThreeDotsScaleIcon />
        </div>
      ) : (
        data && (
          <div className={styles['podcasts__grid']}>
            {data.map(({image, name, artist}) => (
              <CdkThumbnail
                imgUrl={image[2].label}
                title={name.label.toUpperCase()}
                subTitle={`Author: ${artist.label}`}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default PodcastsPage;
