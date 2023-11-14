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
    
  }
}

