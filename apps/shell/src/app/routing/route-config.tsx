import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import { CdkHeader } from '@inditex/cdk-header';
import { ThreeDotsScaleIcon } from '@inditex/icons';
import PodcastApp from 'podcast/PodcastApp';
import HomeApp from 'home/HomeApp';

const ShellLayoutComponent = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('Navigation state inside useEffect: ', navigation.state);
  }, [navigation.state]);
  console.log('Navigation state : ', navigation.state)

  return (
    <div>
      <CdkHeader title="Podcaster" showIcon={navigation.state !== 'idle'} />
      <ThreeDotsScaleIcon />
      <Link to={'/other'}>Go to other</Link>
      <Outlet />
    </div>
  );
};




export const routes: any[] = [
  {
    path: '/',
    element: <ShellLayoutComponent />,
    children: [
      {
        index: true,
        element: <HomeApp />
      },
      {
        path: '/podcast/*',
        element: <PodcastApp />
      }
    ]
  },
  {
    path: '/other',
    element: <ShellLayoutComponent />
  },
];
