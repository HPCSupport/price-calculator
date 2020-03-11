import { } from 'ts-jest'
import { sub } from './sub'

describe(`sub`, () => {
  it(`Subs two integers`, () => expect(sub([1, 0], 3)).toEqual([-2, 0]))
  it(`Subs and decrements exponent`, () => expect(sub([1, 1], 5)).toEqual([5, 0]))
  it(`Subs negative and increases exponent`, () => expect(sub([9, 0], -1)).toEqual([1, 1]))
  it(`Subs decimals`, () => expect(sub([153, -4], 0.0035)).toEqual([118, -4]))
})