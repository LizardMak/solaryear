
export function venusBirthdayCountdown(currentAge, targetAge) {
  const yearDiff = targetAge - currentAge;
  const venusCountdown = yearDiff / .62;
  return venusCountdown + " years until birthday!"
}