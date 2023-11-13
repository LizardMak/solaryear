import { jupiterBirthdayCountdown } from "../src/jupitercalculate";
import { userInputs } from "../src/inputdata";

describe('jupiterBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const userData = new userInputs();
    userData.inputAge = 21;
    userData.inputTargetAge = 31;
    const jupiterYearsUntil = jupiterBirthdayCountdown(userData.inputAge, userData.inputTargetAge);
    expect(jupiterYearsUntil).toEqual("5.319148936170213 years until birthday!")
  })
}) 