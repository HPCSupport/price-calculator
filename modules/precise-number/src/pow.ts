import { manipulate } from './helper'



export const pow = manipulate(({ a: [aval, aexp], b: [bval, bexp] }) => [(aval * 10 ** aexp) ** (bval * 10 ** bexp), 0])