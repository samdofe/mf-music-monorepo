import { ThreeDotsScaleIcon } from '@sdf-design-system/icons';

import styles from './Loader.module.scss';

export const Loader = ()=>{
  return (
    <div className={styles['loader']}>
      <ThreeDotsScaleIcon/>
    </div>
  )
}
