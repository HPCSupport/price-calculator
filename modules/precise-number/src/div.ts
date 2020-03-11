import { manipulate } from './helper'



export const div = manipulate(({ a: [aval, aexp], b: [bval, bexp] }) => [aval / bval, aexp - bexp])