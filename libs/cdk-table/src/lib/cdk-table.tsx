import { ReactNode } from 'react';
import { ICdkTableConfig } from './cdk-table.model';
import { cdkUtilsFieldFormatter } from '@inditex/utils';
import styles from './cdk-table.module.scss';

export function CdkTable<T>({headers, headersTemplateStyle, data}: ICdkTableConfig<T>) {
  return (
    <div className={styles['cdk-table']}>
      <div className={styles['cdk-table__header']} style={{gridTemplateColumns: `${headersTemplateStyle}`}}>
        {headers.map(({key, label, customStyles}) => (
          <div key={key} className={styles['cdk-table__header__cell']} style={customStyles}>
            <span>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className={styles['cdk-table__body']} style={{gridTemplateColumns: `${headersTemplateStyle}`}}>
        {data.map((item, rowIdx) =>
          headers.map((header, columnIdx) => {
            const {key, format, customStyles} = header;
            const value = item[key as keyof T] as string | number;
            const finalValue = format ? cdkUtilsFieldFormatter(value, format) : value;
            return (
              <div
                key={key}
                className={[
                  styles[`cdk-table__body__cell`],
                  `${rowIdx%2===0 ? styles['cdk-table__body__row-idx-even'] : styles['cdk-table__body__row-idx-odd']}`,
                  `${columnIdx===0 ? styles['cdk-table__body__first-column-idx'] : styles['']}`
                ]
                .filter(Boolean)
                .join(' ')
              } style={customStyles}>
                <span>{finalValue as ReactNode}</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CdkTable;
