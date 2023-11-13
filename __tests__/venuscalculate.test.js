import { venusBirthdayCountdown } from "../src/venuscalculate";
import { userInputs } from "../src/inputdata";

describe('venusBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into venus years', () => {
    const userData = new userInputs();
    userData.inputAge = 21;
    userData.inputTargetAge = 31;
    const venusYearsUntil = venusBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(venusYearsUntil).toEqual("16.129032258064516 years until birthday!")
  })
  test('It should calculate how many years ago a birthday was if the current age is larger than the target', () => {
    const userData = new userInputs();
    userData.inputAge = 31;
    userData.inputTargetAge = 21;
    const venusYearsUntil = venusBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(venusYearsUntil).toEqual("birthday was 16.129032258064516 years ago!")
  })
})