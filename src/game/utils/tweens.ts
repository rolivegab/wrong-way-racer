export const easeInExpo = (x: number) =>
  x === 0 ? 0 : Math.pow(2, 10 * x - 10);

export const linear = (x: number) => x;
