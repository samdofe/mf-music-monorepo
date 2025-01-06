import styles from './NoResults.module.scss';

export const NoResults = () => {
  return (
    <div
      className={styles['no-results-container']}
      data-testid={"no-results-testid"}
    >
      <p>NO RESULTS FOUND</p>
    </div>
  )
}
