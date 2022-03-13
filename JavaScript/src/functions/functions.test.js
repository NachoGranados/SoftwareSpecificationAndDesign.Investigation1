const functions = require("./index");

test("sum 1 + 2", () => {
    const result = functions.sum(1, 2)
    expect(result).toBe(3);
})

test("subtract 9 - 3", () => {
    const result = functions.subtract(9, 3)
    expect(result).toBe(6);
})

test("multiply 4 * 8", () => {
    const result = functions.multiply(4, 8)
    expect(result).toBe(32);
})

test("divide 15 / 3", () => {
    const result = functions.divide(15, 3)
    expect(result).toBe(5);
})

test("palindrome of kayak", () => {
    const result = functions.palindrome("kayak")
    expect(result).toBe("kayak");
})

test("average of [1, 2, 3, 4, 5, 6]", () => {
    const result = functions.average([1, 2, 3, 4, 5, 6])
    expect(result).toBe(3.5);
})


















;