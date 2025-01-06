import { ThreeDotsScaleIcon } from '@inditex/icons';

import styles from './Loader.module.scss';

export const Loader = ()=>{
  return (
    <div className={styles['loader']}>
      <ThreeDotsScaleIcon/>
    </div>
  )
}
