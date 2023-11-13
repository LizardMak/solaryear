import { mercuryCalculate } from "../src/mercurycalculate";
import { mercuryBirthdayCountdown } from "../src/mercurycalculate";

describe('mercuryCalculate', () => {

  test('It should translate the current year to mercury years', () => {
    const year = 2023;
    let translateYear = mercuryCalculate(year);
    expect(translateYear).toEqual(8429.166666666668)
  })
})

describe('mercuryBirthdayCountdown', () => {

  test('It should translate the difference between the current and target age into mercury years', () => {
    const currentAge = 21;
    const targetAge = 31;
    const mercuryYearsUntil = mercuryBirthdayCountdown(currentAge, targetAge);
    expect(mercuryYearsUntil).toEqual(41.66666666666667)
  }) 
})