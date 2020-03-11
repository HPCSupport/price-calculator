import { } from 'ts-jest'
import { from_currency } from './from-currency'


describe(`from currency`, () => {
  it(`strips full`, () => expect(from_currency(`$3,141,592.65`)).toBe(3141592.65))
  it(`strips cents`, () => expect(from_currency(`$0.65`)).toBe(0.65))
})