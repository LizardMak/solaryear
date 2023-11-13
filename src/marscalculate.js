
export function marsBirthdayCountdown(currentAge, targetAge) {
  const yearDiff = targetAge - currentAge;
  const marsCountdown = yearDiff / 1.88;
  if (marsCountdown > 0) {
    return marsCountdown + " years until birthday!";
  } else {
    const marsNumString = marsCountdown.toString();
    const marsPastString = marsNumString.replace("-", "");
    return "birthday was " + marsPastString + " years ago!";
  }
}