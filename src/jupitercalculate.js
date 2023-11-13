
export function jupiterBirthdayCountdown(currentAge, targetAge) {
  if (currentAge < 0 || targetAge < 0) {
    return "ERROR: INVALID INPUTS"
  }
  const yearDiff = targetAge - currentAge;
  const jupiterCountdown = yearDiff / 11.86;
  if (jupiterCountdown > 0) {
    return jupiterCountdown + " years until birthday!"
  } else {
    const jupiterNumString = jupiterCountdown.toString();
    const jupiterPastString = jupiterNumString.replace("-", "");
    return "birthday was " + jupiterPastString + " years ago!"
  }
}