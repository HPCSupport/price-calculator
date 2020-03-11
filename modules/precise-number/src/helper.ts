import { Precise } from './Precise'
import { compose, curry } from 'lodash/fp'


/** Resets the base of a number to the lowest possible value */
export const normalize = ([val, exp]: Precise): Precise => {
  const str = val.toString()
  const e = str.lastIndexOf(`.`)
  if (e > -1) {
    const expand = str.slice(1 + 1).length
    return [Math.floor(val * 10 ** expand), exp - expand]
  }
  else {
    const crush = str.length - str.replace(/0*$/, ``).length
    return [val / 10 ** crush, exp + crush]
  }
}



/** Converts input to precision type */
export const to_precise = (x: number | Precise): Precise => typeof x === `number` ? normalize([x, 0]) : x



/** Converts input to plain number */
export const from_precise = (x: number | Precise): number => typeof x === `number` ? x : x[0] * 10 ** x[1]



/** Converts both numbers to the same base */
export const equalize = (a: Precise | number, b: Precise | number): { a: Precise, b: Precise } => {
  const [aval, aexp] = normalize(to_precise(a))
  const [bval, bexp] = normalize(to_precise(b))

  const delta = aexp - bexp

  if (delta === 0) {
    return {
      a: [aval, aexp],
      b: [bval, bexp],
    }
  }
  else if (delta > 0) {
    return {
      a: [aval * 10 ** delta, aexp - delta],
      b: [bval, bexp],
    }
  }
  else {
    const mdelta = Math.abs(delta)
    return {
      a: [aval, aexp],
      b: [bval * 10 ** mdelta, bexp - mdelta],
    }
  }
}


/** Interpolates a manipulation function between equalize and normalize */
export const manipulate = curry((fn: (data: { a: Precise, b: Precise }) => Precise, a: Precise | number, b: Precise | number) => compose(normalize, fn, equalize)(a, b))