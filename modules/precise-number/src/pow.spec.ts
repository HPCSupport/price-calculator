import { } from 'ts-jest'
import { pow } from './pow'

describe(`pow`, () => {
  it(`Power two integers`, () => expect(pow([2, 0], 3)).toEqual([8, 0]))
  it(`Power root`, () => expect(pow([4, 0], 0.5)).toEqual([2, 0]))
})