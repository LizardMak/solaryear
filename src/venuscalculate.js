
export function venusBirthdayCountdown(currentAge, targetAge) {
  const yearDiff = targetAge - currentAge;
  const venusCountdown = yearDiff / .62;
  if (venusCountdown >= 0) {
  return venusCountdown + " years until birthday!"
  } else {
    const venusNumString = venusCountdown.toString();
    const venusPastString = venusNumString.replace("-", "");
    return "birthday was " + venusPastString + " years ago!"
  }
}