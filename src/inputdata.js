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
  return marsYearDiff;
  }
}

