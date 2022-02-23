export const cropNumber = (number: number): string => {
  let numberValue = number;
  if (numberValue >= 1000) {
    numberValue /= 1000;
    return `${numberValue % 1 > 0.1 ? numberValue.toFixed(1).toString() : Math.round(numberValue).toString()}K`;
  }
  return numberValue.toString();
};
