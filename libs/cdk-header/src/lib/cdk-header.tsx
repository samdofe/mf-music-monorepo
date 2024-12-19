import styles from './cdk-header.module.scss';
import React, { ReactElement } from 'react';
import { Pulse3Icon } from '@inditex/icons';

export function CdkHeader({title, showIcon=false}: {title: string, showIcon?: boolean}): ReactElement {
  return (
    <div className={styles['header']}>
      <span className={styles['header__title']}>{title}</span>
      {showIcon && <i className={styles['header__icon']}><Pulse3Icon /></i>}
    </div>
  );
}

export default CdkHeader;
