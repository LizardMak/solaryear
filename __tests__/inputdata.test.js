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
    const currentAgeJupiter = userData.jupiterMathCurrent();
    expect(currentAgeJupiter).toEqual(1.7706576728499157)
  })
})

describe('jupiterMathNotPresent', () => {

  test('It should return how many Jupiter years from the current age to the target age', () => {
    const userData = new UserInputs(21, 31);
    const yearDiff = userData.jupiterMathNotPresent();
    expect(yearDiff).toEqual("0.8431703204047218 Jupiter years until birthday")
  })
  test('It should return a message stating how many Jupiter years ago an age was if the current age is larger than the target age', () => {
    const userData = new UserInputs(31, 21);
    const yearDiff = userData.jupiterMathNotPresent();
    expect(yearDiff).toEqual("Birthday was 0.8431703204047218 Jupiter years ago")
  })
})

describe('venusMathCurrent', () => {

  test('It should return the current age in venus years', () => {
    const userData = new UserInputs(21, 31);
    const currentAgeVenus = userData.venusMathCurrent();
    expect(currentAgeVenus).toEqual(33.87096774193549)
  })
})

describe('venusMathNotPresent', () => {

  test('It should return how many Venus years from the current age to the target age', () => {
    const userData = new UserInputs(21, 31);
    const yearDiff = userData.venusMathNotPresent();
    expect(yearDiff).toEqual("16.129032258064516 Venus years until birthday")
  })
  test('It should return a message stating how many Venus years ago an age was if the current age is larger than the target age', () => {
    const userData = new UserInputs(31, 21);
    const yearDiff = userData.venusMathNotPresent();
    expect(yearDiff).toEqual("Birthday was 16.129032258064516 Venus years ago")
  })
})

describe('mercuryMathCurrent', () => {

  test('It should return the current age in Mercury years', () => {
    const userData = new UserInputs(21, 31);
    const currentAgeMercury = userData.mercuryMathCurrent();
    expect(currentAgeMercury).toEqual(87.5)
  })
})

describe('mercuryMathNotPresent', () => {

  test('It should return how many Mercury years from the current age to the target age', () => {
    const userData = new UserInputs(21, 31);
    const yearDiff = userData.mercuryMathNotPresent();
    expect(yearDiff).toEqual("41.66666666666667 Mercury years until birthday")
  })
  test('It should return a message stating how many Mercury years ago an age was if the current age is larger than the target age', () => {
    const userData = new UserInputs(31, 21);
    const yearDiff = userData.mercuryMathNotPresent();
    expect(yearDiff).toEqual("Birthday was 41.66666666666667 Mercury years ago")
  })
})