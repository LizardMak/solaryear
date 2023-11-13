
export function mercuryBirthdayCountdown(currentAge, targetAge) {
  if (currentAge > targetAge) {
    return "error";
  } else {
  const yearDiff = targetAge - currentAge;
  const mercuryCountdown = yearDiff / .24;
  return mercuryCountdown;
  };
}