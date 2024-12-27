import { Outlet, useNavigation } from 'react-router-dom';
import React, { lazy } from 'react';
import { CdkHeader } from '@inditex/cdk';
//import { ThreeDotsScaleIcon } from '@inditex/icons';
import styles from './shell.layout.module.scss';

export const ShellLayoutComponent = () => {
  const navigation = useNavigation();

  return (
    <div className={styles['shell']}>
      <div className={styles['shell__layout']}>
        <CdkHeader title="Podcaster" showIcon={navigation.state !== 'idle'} />
        <Outlet />
      </div>
    </div>
  );
};
