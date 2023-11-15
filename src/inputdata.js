export class UserInputs {
  constructor(inputAge, inputTargetAge) {
    this.inputAge = inputAge;
    this.inputTargetAge = inputTargetAge;
  }
  marsMathCurrent() {
  const marsAge = this.inputAge / 1.88;
  return marsAge;
  }
  marsMathNotPresent() {
  const yearDiff = this.inputTargetAge - this.inputAge;
  const marsYearDiff = yearDiff / 1.88;
  if (marsYearDiff > 0) {
  return marsYearDiff + " Mars years until birthday";
  } else {
    const yearDiffString = marsYearDiff.toString();
    const fixYearDiff = yearDiffString.replace("-", "");
    return "Birthday was " + fixYearDiff + " Mars years ago"
  }
  }
  jupiterMathCurrent() {
  const jupiterAge = this.inputAge / 11.86;
  return jupiterAge
  }
  jupiterMathNotPresent() {
    const yearDiff = this.inputTargetAge - this.inputAge;
    const jupiterYearDiff = yearDiff / 11.86;
    if (jupiterYearDiff > 0) {
    return jupiterYearDiff + " Jupiter years until birthday";
    } else {
      const yearDiffString = jupiterYearDiff.toString();
      const fixYearDiff = yearDiffString.replace("-", "");
      return "Birthday was " + fixYearDiff + " Jupiter years ago"
    }
  }
  venusMathCurrent() {
    const venusAge = this.inputAge / .62;
    return venusAge
  }
  venusMathNotPresent() {
    const yearDiff = this.inputTargetAge - this.inputAge;
    const venusYearDiff = yearDiff / .62;
    if (venusYearDiff > 0) {
    return venusYearDiff + " Venus years until birthday";
    } else {
      const yearDiffString = venusYearDiff.toString();
      const fixYearDiff = yearDiffString.replace("-", "");
      return "Birthday was " + fixYearDiff + " Venus years ago"
    }
  }
  mercuryMathCurrent() {
    const mercuryAge = this.inputAge / .24;
    return mercuryAge
  }
  mercuryMathNotPresent() {
    const yearDiff = this.inputTargetAge - this.inputAge;
    const mercuryYearDiff = yearDiff / .24;
    return mercuryYearDiff + " Mercury years until birthday";
    }
  

}

