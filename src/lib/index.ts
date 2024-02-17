export function calcBMI(weight: number, height: number) {
  return weight/Math.pow(height, 2)
}

export function calcNewBMI(weight: number, height: number) {
  return 1.3 * weight / Math.pow(height, 2.5);
}
