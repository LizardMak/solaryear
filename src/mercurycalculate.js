export function mercuryCalculate(year) {
  const translateYear = year / .24;
  return translateYear;
}

export function mercuryBirthdayCountdown(currentAge, targetAge) {
  const yearDiff = targetAge - currentAge;
  const mercuryCountdown = yearDiff / .24;
  return mercuryCountdown;
}