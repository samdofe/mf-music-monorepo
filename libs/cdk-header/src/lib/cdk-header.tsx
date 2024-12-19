import styles from './cdk-header.module.scss';
import { ReactElement } from 'react';

export function CdkHeader({title}: {title: string}): ReactElement {
  return (
    <div className={styles['container']}>
      <h1>Welcome to { title }</h1>
    </div>
  );
}

export default CdkHeader;
