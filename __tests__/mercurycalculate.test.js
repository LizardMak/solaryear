import { mercuryBirthdayCountdown } from "../src/mercurycalculate";
import { userInputs } from "../src/inputdata";

describe('mercuryBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const userData = new userInputs();
    userData.inputAge = 21;
    userData.inputTargetAge = 31;
    const mercuryYearsUntil = mercuryBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(mercuryYearsUntil).toEqual(41.66666666666667)
  }) 
  test('It should return an error message if the current age is larger than the target age', () => {
    const userData = new userInputs();
    userData.inputAge = 31;
    userData.inputTargetAge = 21;
    const mercuryYearsUntil = mercuryBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(mercuryYearsUntil).toEqual("error");
  })
})