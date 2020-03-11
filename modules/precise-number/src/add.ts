import { manipulate } from './helper'



export const add = manipulate(({ a: [aval, aexp], b: [bval] }) => [aval + bval, aexp])