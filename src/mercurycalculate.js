
export function mercuryBirthdayCountdown(currentAge, targetAge) {
  const yearDiff = targetAge - currentAge;
  const mercuryCountdown = yearDiff / .24;
  return mercuryCountdown;
}