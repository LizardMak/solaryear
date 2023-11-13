import { mercuryCalculate } from "../src/mercurycalculate";

describe('mercuryCalculate', () => {

  test('It should translate the current year to mercury years', () => {
    const year = 2023;
    let translateYear = mercuryCalculate(year);
    expect(translateYear).toEqual(8429.166666666668)
  })
})