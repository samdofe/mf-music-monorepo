import styles from './BoxTitle.module.scss';

export const BoxTitle = ({title}: {title: string}) => {
  return (
    <div className={styles['box-title']}>
      <span className={styles['box-title__title']}>{title}</span>
    </div>
  );
};
