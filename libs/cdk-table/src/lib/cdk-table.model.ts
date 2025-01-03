import { TTimeFormats } from '@inditex/utils';

export type TColumnFormats =
  | TTimeFormats
  | 'localeDateString'
  | 'toDateString'
  | 'localeTimeString';

export interface ICdkHeader {
  label: string;
  key: string;
  customStyles?: Record<string, string>;
  format?: TColumnFormats;
}

export interface ICdkTableConfig<T>{
  headersTemplateStyle: string;
  headers: ICdkHeader[];
  data: T[];
}
