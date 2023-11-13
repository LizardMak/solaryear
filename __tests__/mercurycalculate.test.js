import { mercuryBirthdayCountdown } from "../src/mercurycalculate";

describe('mercuryBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const currentAge = 21;
    const targetAge = 31;
    const mercuryYearsUntil = mercuryBirthdayCountdown(currentAge, targetAge);
    expect(mercuryYearsUntil).toEqual(41.66666666666667)
  }) 
  test('It should return an error message if the current age is larger than the target age', () => {
    const currentAge = 31;
    const targetAge = 21;
    const mercuryYearsUntil = mercuryBirthdayCountdown(currentAge, targetAge);
    expect(mercuryYearsUntil).toEqual("error");
  })
})