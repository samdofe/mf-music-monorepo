import styles from './cdk-thumbnail.module.scss';
import { ICdkThumbnailProps } from './cdk-thumbnail.model';
import { MouseEvent, MouseEventHandler, ReactElement } from 'react';

export const CdkThumbnail = ({imgUrl, title, subTitle, onThumbnailClick}: ICdkThumbnailProps): ReactElement => {
  const handleOnClick = () => {
    onThumbnailClick();
  };
  return (
    <div className={styles['cdk-thumbnail']} onClick={handleOnClick}>
      <img className={styles['cdk-thumbnail__img']} src={imgUrl} alt="" />
      <span className={styles['cdk-thumbnail__title']}>{title}</span>
      <span className={styles['cdk-thumbnail__sub-title']}>{subTitle}</span>
    </div>
  );
}

export default CdkThumbnail;
