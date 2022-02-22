import dayjs from 'dayjs';

export const dateNewsFormatting = (date: Date): string => {
  const dateValue = dayjs(date);
  const currentDateTime = dayjs();
  const oneMinuteAgo = dayjs().subtract(1, 'minute');
  const oneHourAgo = dayjs().subtract(1, 'hour');
  const sixHourAgo = dayjs().subtract(6, 'hour');
  const currentDay = currentDateTime.hour(0).minute(0).second(0).millisecond(0);
  const yesterdayDay = currentDay.subtract(1, 'day');
  const currentYear = currentDay.month(0).date(1);

  const dateValueMount = dateValue.format('MMM').toLowerCase().slice(0, -1);

  if (oneMinuteAgo.isBefore(dateValue)) {
    return 'только что';
  }

  if (oneHourAgo.isBefore(dateValue)) {
    return `${dayjs.duration(dateValue.diff(currentDateTime, 'minute'), 'minute').humanize(true)}`;
  }

  if (sixHourAgo.isBefore(dateValue)) {
    return `${dayjs.duration(dateValue.diff(currentDateTime, 'hour'), 'hour').humanize(true)}`;
  }

  if (currentDay.isBefore(dateValue)) {
    return `сегодня в ${dateValue.format('HH:mm')}`;
  }

  if (yesterdayDay.isBefore(dateValue)) {
    return `вчера в ${dateValue.format('HH:mm')}`;
  }

  if (currentYear.isBefore(dateValue)) {
    return `${dateValue.format('DD')} ${dateValueMount} в ${dateValue.format('HH:mm')}`;
  }

  return `${dateValue.format('DD')} ${dateValueMount} ${dateValue.format('YYYY')}`
}