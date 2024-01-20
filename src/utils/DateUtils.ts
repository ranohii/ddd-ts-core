import dayjs from 'dayjs';

export class DateUtils {
  static format(value?: string, template = 'YY/MM/DD/HH:mm'): string {
    return dayjs(value).format(template);
  }
}
