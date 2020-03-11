import { manipulate } from './helper'



export const sub = manipulate(({ a: [aval, aexp], b: [bval] }) => [aval - bval, aexp])