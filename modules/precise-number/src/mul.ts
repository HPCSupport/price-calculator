import { manipulate } from './helper'



export const mul = manipulate(({ a: [aval, aexp], b: [bval, bexp] }) => [aval * bval, aexp + bexp])