import { dateNewsFormatting } from '~/helpers/dateHelper';

import dayjs from 'dayjs';
import local from 'dayjs/locale/ru';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale(local);
dayjs.extend(duration)
dayjs.extend(relativeTime);

test('dateNewsFormatting', () => {
  const testDate = dayjs();
  const currentDay = testDate.hour(0).minute(0).second(0).millisecond(0);
  const yesterdayDay = currentDay.subtract(1, 'day')
  const currentYear = currentDay.month(0).date(1);

  expect(dateNewsFormatting(testDate.toDate())).toBe('только что');
  expect(dateNewsFormatting(testDate.subtract(1, 'minute').toDate())).toBe('минуту назад');
  expect(dateNewsFormatting(testDate.subtract(4, 'minute').toDate())).toBe('4 минуты назад');
  expect(dateNewsFormatting(testDate.subtract(5, 'minute').toDate())).toBe('5 минут назад');
  expect(dateNewsFormatting(testDate.subtract(10, 'minute').toDate())).toBe('10 минут назад');
  expect(dateNewsFormatting(testDate.subtract(37, 'minute').toDate())).toBe('37 минут назад');
  expect(dateNewsFormatting(testDate.subtract(55, 'minute').toDate())).toBe('час назад');
  expect(dateNewsFormatting(testDate.subtract(1, 'hour').toDate())).toBe('час назад');

  expect(dateNewsFormatting(testDate.subtract(2, 'hour').toDate())).toBe('2 часа назад');
  if (currentDay.isBefore(testDate.subtract(7, 'hour'))) {
    expect(dateNewsFormatting(testDate.subtract(7, 'hour').toDate())).toBe(`сегодня в ${testDate.subtract(7, 'hour').format('HH:mm')}`);
  }

  expect(dateNewsFormatting(testDate.subtract(1, 'day').toDate())).toBe(`вчера в ${testDate.format('HH:mm')}`);

  const currentYearDate = currentYear.add(2, 'day');
  if (currentYearDate.isBefore(yesterdayDay)) {
    expect(dateNewsFormatting(currentYearDate.toDate())).toBe(`03 янв в ${currentYearDate.format('HH:mm')}`);
  }

  const oneYearAgo = currentYear.add(-3, 'day');

  if (oneYearAgo.isBefore(yesterdayDay)) {
    expect(dateNewsFormatting(oneYearAgo.toDate())).toBe(`${oneYearAgo.format('DD')} дек ${oneYearAgo.format('YYYY')}`);
  }
});