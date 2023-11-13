
export function marsBirthdayCountdown(currentAge, targetAge) {

    const yearDiff = targetAge - currentAge;
    const mercuryCountdown = yearDiff / 1.88;
    return mercuryCountdown + " years until birthday!";
}