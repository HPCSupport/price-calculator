import { } from 'ts-jest'
import { comma_seperate,format_2dp, split_at_decimal, to_currency } from './to-currency'

describe(`split at decimal`, () => {
  it(`rounds down`, () => expect(split_at_decimal(3.14159)).toEqual([3, 14]))
  it(`rounds up`, () => expect(split_at_decimal(3.1459)).toEqual([3, 15]))
})

describe(`Split comma`, () => {
  it(`10 numbers`, () => expect(comma_seperate(`9876543210`)).toBe(`9,876,543,210`))
  it(`9 numbers`, () => expect(comma_seperate(`876543210`)).toBe(`876,543,210`))
  it(`8 numbers`, () => expect(comma_seperate(`76543210`)).toBe(`76,543,210`))
  it(`7 numbers`, () => expect(comma_seperate(`6543210`)).toBe(`6,543,210`))
  it(`6 numbers`, () => expect(comma_seperate(`543210`)).toBe(`543,210`))
  it(`5 numbers`, () => expect(comma_seperate(`43210`)).toBe(`43,210`))
  it(`4 numbers`, () => expect(comma_seperate(`3210`)).toBe(`3,210`))
  it(`3 numbers`, () => expect(comma_seperate(`210`)).toBe(`210`))
  it(`2 numbers`, () => expect(comma_seperate(`10`)).toBe(`10`))
  it(`1 numbers`, () => expect(comma_seperate(`0`)).toBe(`0`))
  it(`0 numbers`, () => expect(comma_seperate(``)).toBe(``))
})

describe(`format 2dp`, () => {
  it(`formats`, () => expect(format_2dp([31415, 92])).toEqual(`31,415.92`))
})

describe(`To currency`, () => {
  it(`formats full`, () => expect(to_currency(3141592.65358)).toBe(`$3,141,592.65`))
  it(`formats cents`, () => expect(to_currency(0.65358)).toBe(`$0.65`))
})