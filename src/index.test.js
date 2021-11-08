import { createAdder } from "./index.js";

describe("test sum function", ()=> {
  it("sum numbers", ()=> { 
    const add5 = createAdder(5)
    const result = add5(5)
    expect(result).toBe(10)
  }),
  it("sum string + number", ()=> { 
    const add5 = createAdder("5")
    const result = add5(5)
    expect(result).toBe("55")
  }),
  it("sum number + null", ()=> { 
    const add5 = createAdder(5)
    const result = add5(null)
    expect(result).toBe(5)
  })
})