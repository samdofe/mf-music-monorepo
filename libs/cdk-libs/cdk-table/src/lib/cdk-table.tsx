import {ReactNode} from 'react';
import {ICdkTableConfig} from './cdk-table.model';
import styles from './cdk-table.module.scss';
import { cdkUtilsFieldFormatter } from '@inditex/utils';

export function CdkTable<T>({headers, headersTemplateStyle, data, onRowClickHandler}: ICdkTableConfig<T>) {
  const handleRowClick = (selectedItem: T)=>{
    if(onRowClickHandler){
      onRowClickHandler(selectedItem);
    }
  }
  return (
    <div className={styles['cdk-table']}>
      <div
        className={styles['cdk-table__header']}
        style={{gridTemplateColumns: `${headersTemplateStyle}`}}>
        {headers.map(({key, label, customStyles}) => (
          <div key={key} className={styles['cdk-table__header__cell']} style={customStyles}>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles['cdk-table__body']}>
        {data.map((item, rowIdx) => (
          <div
            key={rowIdx}
            className={[
              styles['cdk-table__body__row'],
              `${rowIdx % 2 === 0 ? styles['cdk-table__body__row-even-idx'] : styles['']}`
            ]
              .filter(Boolean)
              .join(' ')}
            style={{gridTemplateColumns: `${headersTemplateStyle}`}}
            onClick={() => {handleRowClick(item)}}
          >
            {headers.map((header, columnIdx) => {
              const {key, format, customStyles} = header;
              const value = item[key as keyof T] as string | number;
              const finalValue = format ? cdkUtilsFieldFormatter(value, format) : value;

              return (
                <div
                  key={key}
                  className={[
                    styles[`cdk-table__body__cell`],
                    `${columnIdx === 0 ? styles['cdk-table__body__first-column-idx'] : styles['']}`
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={customStyles}
                >
                  <span>{finalValue as ReactNode}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CdkTable;
