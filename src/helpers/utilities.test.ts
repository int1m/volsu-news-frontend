import { cropNumber } from '@/helpers/utilities';

test('cropNumber', () => {
  expect(cropNumber(341)).toBe('341');
  expect(cropNumber(999)).toBe('999');
  expect(cropNumber(1000)).toBe('1K');
  expect(cropNumber(1120)).toBe('1.1K');
});
