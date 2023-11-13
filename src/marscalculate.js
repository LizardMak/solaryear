
export function marsBirthdayCountdown(currentAge, targetAge) {
  if (currentAge < 0 || targetAge < 0) {
    return "ERROR: INVALID INPUTS"
  }
  const yearDiff = targetAge - currentAge;
  const marsCountdown = yearDiff / 1.88;
  if (marsCountdown > 0) {
    return marsCountdown + " years until birthday!"
  } else {
    const marsNumString = marsCountdown.toString();
    const marsPastString = marsNumString.replace("-", "");
    return "birthday was " + marsPastString + " years ago!"
  }
}