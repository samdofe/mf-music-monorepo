import { Outlet } from 'react-router-dom';
import { usePodcastsLoad } from '@api';
import { ThreeDotsScaleIcon } from '@inditex/icons';
import React from 'react';
import styles from './Podcasts.layout.module.scss';

export const PodcastsLayout = ()=>{
  const {data, isFetching} = usePodcastsLoad();
  return isFetching ? (
    <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ThreeDotsScaleIcon />
    </div>
  ) : data ? (
    <div className={styles['podcasts-layout']}>
      <Outlet />
    </div>
  ) : (
    <div>
      <p>NO RESULTS FOUND</p>
    </div>
  );
}
