import { marsBirthdayCountdown } from "../src/marscalculate";
import { userInputs } from "../src/inputdata";

describe('marsBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const userData = new userInputs();
    userData.inputAge = 21;
    userData.inputTargetAge = 31;
    const marsYearsUntil = marsBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(marsYearsUntil).toEqual("5.319148936170213 years until birthday!")
  }) 
  test('It should calculate how many years ago a birthday was if the current age is larger than the target', () => {
    const userData = new userInputs();
    userData.inputAge = 31;
    userData.inputTargetAge = 21;
    const marsYearsUntil = marsBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(marsYearsUntil).toEqual("birthday was 5.319148936170213 years ago!");
  })
})