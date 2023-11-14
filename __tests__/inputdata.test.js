import { UserInputs } from "../src/inputdata";

describe('marsMathCurrent', () => {

  test('It should return the current age in Mars years', () => {
    const userData = new UserInputs(21, 31);
    const currentAgeMars = userData.marsMathCurrent();
    expect(currentAgeMars).toEqual(11.170212765957448)
  })
})

describe('marsMathNotPresent', () => {

  test('It should return how many Mars years from the current age to the target age', () => {
    const userData = new UserInputs(21, 31);
    const yearDiff = userData.marsMathNotPresent();
    expect(yearDiff).toEqual("5.319148936170213 Mars years until birthday")
  })
  test('It should return a message stating how many Mars years ago an age was if the current age is larger than the target age', () => {
    const userData = new UserInputs(31, 21);
    const yearDiff = userData.marsMathNotPresent();
    expect(yearDiff).toEqual("Birthday was 5.319148936170213 Mars years ago")
  })
})

describe('jupiterMathCurrent', () => {

  test('It should return the current age in Jupiter years', () => {
    const userData = new UserInputs(21, 31);
    const currentAgeMars = userData.jupiterMathCurrent();
    expect(currentAgeMars).toEqual(1.7706576728499157)
  })
})

describe('jupiterMathNotPresent', () => {

  test('It should return how many jupiter years from the current age to the target age', () => {
    const userData = new UserInputs(21, 31);
    const yearDiff = userData.jupiterMathNotPresent();
    expect(yearDiff).toEqual("0.8431703204047218 Jupiter years until birthday")
  })
})