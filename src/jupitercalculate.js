
export function jupiterBirthdayCountdown(currentAge, targetAge) {
  const yearDiff = targetAge - currentAge;
  const jupiterCountdown = yearDiff / 11.86;
  return jupiterCountdown + " years until birthday!"
}