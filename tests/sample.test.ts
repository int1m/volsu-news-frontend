import { expect, test } from 'vitest';


const cropNumber = (number: number): string => {
  if (number >= 1000) {
    number /= 1000;
    return (number % 1 > 0.1 ? number.toFixed(1).toString() : Math.round(number).toString()) + 'K';
  }
  return number.toString();
};

test('cropNumber', () => {
  expect(cropNumber(341)).toBe('341');
  expect(cropNumber(999)).toBe('999');
  expect(cropNumber(1000)).toBe('1K');
  expect(cropNumber(1120)).toBe('1.1K');
});