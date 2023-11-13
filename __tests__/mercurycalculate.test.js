import { mercuryBirthdayCountdown } from "../src/mercurycalculate";
import { userInputs } from "../src/inputdata";

describe('mercuryBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const userData = new userInputs();
    userData.inputAge = 21;
    userData.inputTargetAge = 31;
    const mercuryYearsUntil = mercuryBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(mercuryYearsUntil).toEqual("41.66666666666667 years until birthday!")
  }) 
  test('It should calculate how many years ago a birthday was if the current age is larger than the target', () => {
    const userData = new userInputs();
    userData.inputAge = 31;
    userData.inputTargetAge = 21;
    const mercuryYearsUntil = mercuryBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(mercuryYearsUntil).toEqual("birthday was 41.66666666666667 years ago!");
  })
  test('It should return an error if input digits are negative', () => {
    const userData = new userInputs();
    userData.inputAge = -21;
    userData.inputTargetAge = -31;
    const mercuryYearsUntil = mercuryBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(mercuryYearsUntil).toEqual("ERROR: INVALID INPUTS")
  })
})