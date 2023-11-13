
export function mercuryBirthdayCountdown(currentAge, targetAge) {
  if (currentAge < 0 || targetAge < 0) {
    return "ERROR: INVALID INPUTS";
  } else {
    const yearDiff = targetAge - currentAge;
    const mercuryCountdown = yearDiff / .24;
    if (mercuryCountdown >= 0) {
      return mercuryCountdown + " years until birthday!";
    } else {
      const mercuryNumString = mercuryCountdown.toString();
      const mercuryPastString = mercuryNumString.replace("-", "");
      return "birthday was " + mercuryPastString + " years ago!";
    }
  }
}