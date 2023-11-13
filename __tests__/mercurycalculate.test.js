import { mercuryCalculate } from "../src/mercurycalculate";

describe('mercuryCalculate', () => {

  test('It should translate the current year to mercury years', () => {
    const year = 2023;
    expect(translateYear).toEqual(8429.16666667)
  })
})