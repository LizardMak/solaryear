import { UserInputs } from "../src/inputdata";

describe('marsMathCurrent', () => {

  test('It should return the current age in mars years', () => {
    const userData = new UserInputs(21, 31);
    const currentAgeMars = userData.marsMathCurrent();
    expect(currentAgeMars).toEqual(11.170212765957448)
  })
})