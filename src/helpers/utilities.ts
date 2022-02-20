export const cropNumber = (number: number): string => {
  if (number >= 1000) {
    number /= 1000;
    return (number % 1 > 0.1 ? number.toFixed(1).toString() : Math.round(number).toString()) + 'K';
  }
  return number.toString();
};