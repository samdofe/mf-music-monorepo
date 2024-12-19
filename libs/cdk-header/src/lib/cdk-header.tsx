import styles from './cdk-header.module.scss';
import { ReactElement } from 'react';

export function CdkHeader({title}: {title: string}): ReactElement {
  return (
    <div className={styles['header']}>
      <span className={styles['header__title']}>{title}</span>
      <span className={styles['header__icon']}>icono</span>
    </div>
  );
}

export default CdkHeader;
