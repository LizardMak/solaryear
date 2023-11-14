import { UserInputs } from "../src/inputdata";

describe('marsMathCurrent', () => {

  test('It should return the current age in mars years', () => {
    const userData = new UserInputs(21, 31);
    const currentAgeMars = userData.marsMathCurrent();
    expect(currentAgeMars).toEqual(11.170212765957448)
  })
})

describe('marsMathNotPresent', () => {

  test('It should return how many mars years from the current age to the target age', () => {
    const userData = new UserInputs(21, 31);
    const yearDiff = userData.marsMathNotPresent();
    expect(yearDiff).toEqual(5.319148936170213)
  })
})