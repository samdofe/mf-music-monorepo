import { Outlet } from 'react-router-dom';
import { usePodcastsLoad } from '@api';
import React from 'react';
import { Loader } from '@ui';
import styles from './Podcasts.layout.module.scss';

export const PodcastsLayout = ()=>{
  const {data, isFetching} = usePodcastsLoad();
  return isFetching ? (
    <Loader />
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
