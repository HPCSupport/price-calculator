import { compose } from 'lodash/fp'

export const split_at_decimal = (x: number): [number, number] => {
  const rounded = Math.round(x * 100)
  return [Math.floor(x) , rounded % 100]
}

export const comma_seperate = (x: string) : string => x.length > 3 ? `${comma_seperate(x.slice(0,x.length - 3))},${x.slice(x.length - 3)}` : x

export const format_2dp = ([integer, decimal]:[ number, number]): string => `${comma_seperate(integer.toString())}.${decimal.toString().padStart(2, `0`)}`

export const to_currency = (x: number): string => `$${compose(format_2dp, split_at_decimal)(x)}`