import { } from 'ts-jest'
import { equalize, from_precise, normalize, to_precise } from './helper'

describe(`to precise`, () => {
  it(`Passes precision number`, () => expect(to_precise([3, 5])).toEqual([3, 5]))
  it(`Converts int to zero base`, () => expect(to_precise(3)).toEqual([3, 0]))
  it(`Converts decimal to min precision`, () => expect(to_precise(Math.PI)).toEqual([3141592653589793, -15]))
})

describe(`from precise`, () => {
  it(`Passes number`, () => expect(from_precise(3)).toEqual(3))
  it(`Converts to decimal`, () => expect(from_precise([3141592653589793, -15])).toEqual(Math.PI))
})

describe(`equalize`, () => {
  it(`Picks highest common power`, () => expect(equalize(3.1415, 3.1)).toEqual({ a: [31415, -4], b: [31000, -4] }))
  it(`Picks right power`, () => expect(equalize([1, 1], [1,0])).toEqual({ a: [10, 0], b: [1, 0] }))
  it(`Picks left power`, () => expect(equalize([1, 0], [1,1])).toEqual({ a: [1, 0], b: [10, 0] }))
  it(`Normalizes power`, () => expect(equalize([10, 3], [100, 2])).toEqual({a: [1, 4], b: [1, 4]}))
})

describe(`normalize`, () => {
  it(`Crushes extra zeroes`, () => expect(normalize([30000, 2])).toEqual([3, 6]))
  it(`Crushes adds decimals`, () => expect(normalize([3.1415, 0])).toEqual([31415, -4]))
})