export const formatNumberPosition = (number: string) => {
  let qtdZeros = '';
  for (let i = 0; i < 4 - number.length; i++) {
    qtdZeros += '0';
  }
  return `#${qtdZeros}${number}`;
};

export const capitalize = (text: string): string => {
  return text[0]?.toUpperCase() + text.substring(1).toLowerCase();
};

export const formatHeight = (height: number): string => {
  return `${height / 10} m`;
};

export const formatWeight = (weight: number): string => {
  return `${weight / 10} kg`;
};
