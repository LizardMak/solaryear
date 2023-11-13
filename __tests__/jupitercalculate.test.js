import { jupiterBirthdayCountdown } from "../src/jupitercalculate";
import { userInputs } from "../src/inputdata";

describe('jupiterBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const userData = new userInputs();
    userData.inputAge = 21;
    userData.inputTargetAge = 31;
    const jupiterYearsUntil = jupiterBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(jupiterYearsUntil).toEqual("0.8431703204047218 years until birthday!")
  })
  test('It should calculate how many years ago a birthday was if the current age is larger than the target', () => {
    const userData = new userInputs();
    userData.inputAge = 31;
    userData.inputTargetAge = 21;
    const jupiterYearsUntil = jupiterBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(jupiterYearsUntil).toEqual("birthday was 0.8431703204047218 years ago!");
  })
}) 