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
    
  }
}

