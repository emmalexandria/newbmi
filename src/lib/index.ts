export function calcBMI(weight: number, height: number) {
  height=height/100;
  return weight/Math.pow(height, 2);
}

export function calcNewBMI(weight: number, height: number) {
  height=height/100;
  return 1.3 * weight / Math.pow(height, 2.5);
}

export function getBMIRange(bmi: number): string {
  if(bmi < 18.5) {
    return "Underweight";
  }
  else if(bmi < 24.9) {
    return "Healthy";
  }
  else if(bmi < 29.9) {
    return "Overweight"
  }
  else if(bmi >= 30) {
    return "Obese"
  }

  return "Healthy"
}