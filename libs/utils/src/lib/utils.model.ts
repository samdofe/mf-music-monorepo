import { DATE_FORMATS, TIME_FORMATS } from './utils.constants';

export type TTimeFormats = typeof TIME_FORMATS[keyof typeof TIME_FORMATS];

export type TDateFormats = typeof DATE_FORMATS[keyof typeof DATE_FORMATS];

export type TTimeObject = Record<'d' | 'h' | 'm' | 's', number | string>;
