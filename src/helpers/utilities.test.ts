import { cropNumber } from '@/helpers/utilities';

test('cropNumber', () => {
  expect(cropNumber(341)).toBe('341');
});
