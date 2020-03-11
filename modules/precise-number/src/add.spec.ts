import { } from 'ts-jest'
import { add } from './add'

describe(`add`, () => {
  it(`Adds two integers`, () => expect(add([1, 0], 3)).toEqual([4, 0]))
  it(`Adds and increments exponent`, () => expect(add([5, 0], 5)).toEqual([1, 1]))
  it(`Adds negative and decreases exponent`, () => expect(add([1, 1], -1)).toEqual([9, 0]))
  it(`Adds decimals`, () => expect(add([153, -4], 0.0035)).toEqual([188, -4]))
})