import { TDateFormats, TTimeFormats, TTimeObject } from './utils.model';
import { DATE_FORMATS, TIME_FORMATS } from './utils.constants';

export const cdkUtilsTimeFormatter = (milliseconds: number, format: TTimeFormats): number | string | Partial<TTimeObject> => {

  const total_seconds = Math.floor(milliseconds / 1000);
  const total_minutes = Math.floor(total_seconds / 60);
  const total_hours = Math.floor(total_minutes / 60);
  const days = Math.floor(total_hours / 24);
  const seconds = total_seconds % 60;
  const minutes = total_minutes % 60;
  const hours = total_hours % 24;

  const timeFormatter = {
    [TIME_FORMATS.S]: () => total_seconds,
    [TIME_FORMATS.M]: () => total_minutes,
    [TIME_FORMATS.H]: () => total_hours,
    [TIME_FORMATS.D]: () => days,
    [TIME_FORMATS.MM_SS]: ()=> {
      const formattedSeconds = seconds.toString().padStart(2, '0');
      return  `${minutes}:${formattedSeconds}`;
    },
    [TIME_FORMATS.HH_MM]: ()=> {
      const formattedMinutes = minutes.toString().padStart(2, '0');
      return  `${hours}:${formattedMinutes}`;
    },
    [TIME_FORMATS.DEFAULT]: () => ({ d: days, h: hours, m: minutes, s: seconds }),
  }

  return timeFormatter[format]
      ? timeFormatter[format]()
      : timeFormatter[TIME_FORMATS.DEFAULT]();
};

export const cdkUtilsDateFormatter = (date: string, format: TDateFormats ): string =>{
  const d = new Date(date);
  const dateFormatter = {
    [DATE_FORMATS.DATE_STRING]: () => d.toDateString(),
    [DATE_FORMATS.DATE_LOCALE_STRING]: () => d.toLocaleDateString()
  };

  return dateFormatter[format]
    ? dateFormatter[format]()
    : dateFormatter[DATE_FORMATS.DEFAULT]();
}

export const cdkUtilsFieldFormatter = (value: string | number, format: TDateFormats | TTimeFormats)=> {
  return format.includes('time:') ? cdkUtilsTimeFormatter(value as number, format) : cdkUtilsDateFormatter(value as string, format);
}
