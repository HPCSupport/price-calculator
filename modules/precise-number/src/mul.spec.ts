import { } from 'ts-jest'
import { mul } from './mul'

describe(`mul`, () => {
  it(`Multiply two integers`, () => expect(mul([2, 0], 3)).toEqual([6, 0]))
  it(`Multiply and increments exponent`, () => expect(mul([1, 1], 10)).toEqual([1, 2]))
  it(`Multiply fraction and decreases exponent`, () => expect(mul([1, 1], 0.1)).toEqual([1, 0]))
  it(`Multiply negative`, () => expect(mul([1, 1], -2)).toEqual([-2, 1]))
})