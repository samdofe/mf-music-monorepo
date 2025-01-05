import styles from './cdk-input-filter.module.scss';
import { CdkInputFilterProps } from './cdk-input-filter.model';
import { ReactElement } from 'react';

export function CdkInputFilter({totalResults, placeholder, onSearchChange}: CdkInputFilterProps): ReactElement {
  const handleSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(evt.target.value);
  };
  return (
    <div className={styles['input-filter']} data-testid="cdk-input-filter-testid">
      <span className={styles['input-filter__pill']}>{totalResults}</span>
      <input
        className={styles['input-filter__search-box']}
        placeholder={placeholder}
        type="text"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default CdkInputFilter;
