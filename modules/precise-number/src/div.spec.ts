import { } from 'ts-jest'
import { div } from './div'

describe(`div`, () => {
  it(`Divide two integers`, () => expect(div([2, 0], 3)).toEqual([6666666666666666, -16]))
  it(`Divide and decreases exponent`, () => expect(div([1, 1], 10)).toEqual([1, 0]))
  it(`Divide fraction and increases exponent`, () => expect(div([1, 1], 0.1)).toEqual([1, 2]))
  it(`Divide negative`, () => expect(div([1, 1], -2)).toEqual([-5, 0]))
})