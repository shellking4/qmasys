
import { format, intervalToDuration, formatDuration } from 'date-fns'
import { enGB, eo, ru, fr } from 'date-fns/locale'

export const serverConstants = {
    
} 

const locales = {enGB, eo, ru, fr};

const formatStr = "PPPPpp";

export const formatDate = (date: any, dateFormat?: string) => {
  return format(new Date(date), dateFormat ? dateFormat : formatStr, {
    locale: locales.fr
  });
}

export const getDateDiffInDays = (date1: string, date2: string) => {
  const dateParam1 = new Date(date1).valueOf();
  const dateParam2 = new Date(date2).valueOf();
  const diffTime = Math.abs(dateParam1 - dateParam2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays
}

export const getDateDiff = (date1: string, date2: string) => {
  return formatDuration(
    intervalToDuration({
      start: new Date(date1),
     end: new Date(date2)
    }), { locale: fr })
}


export const getDiff = (date: string) => {
  return intervalToDuration({
    start: date ? new Date(date) : new Date(),
    end: new Date()
  });
}
