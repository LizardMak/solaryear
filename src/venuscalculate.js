
export function venusBirthdayCountdown(currentAge, targetAge) {
  if (currentAge < 0 || targetAge < 0) {
    return "ERROR: INVALID INPUTS"
  }
  const yearDiff = targetAge - currentAge;
  const venusCountdown = yearDiff / .62;
  if (venusCountdown > 0) {
    return venusCountdown + " years until birthday!"
  } else {
    const venusNumString = venusCountdown.toString();
    const venusPastString = venusNumString.replace("-", "");
    return "birthday was " + venusPastString + " years ago!"
  }
}