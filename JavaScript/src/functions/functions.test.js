const functions = require("./index");

describe('\nSum of', () => {

    test("10 + 27", () => {
        const result = functions.sum(10, 27)
        expect(result).toBe(37);
    })

    test("53 + 68", () => {
        const result = functions.sum(53, 68)
        expect(result).toBe(121);
    })

    test("12.7 + a", () => {
        const result = functions.sum(12.7, "abc")
        expect(result).toBeUndefined();
    })

})

describe('\nSubtract of', () => {

    test("9 - 3", () => {
        const result = functions.subtract(9, 3)
        expect(result).toBe(6);
    })

    test("65 - 543", () => {
        const result = functions.subtract(65, 543)
        expect(result).toBe(-478);
    })

    test("hello - [1, 2, 3]", () => {
        const result = functions.subtract("hello", [1, 2, 3])
        expect(result).toBeNull();
    })

})

describe('\nPalindrome of', () => {

    test("kayak", () => {
        const result = functions.palindrome("kayak")
        expect(result).toBe("kayak");
    })
    
    test("racecar", () => {
        const result = functions.palindrome("racecar")
        expect(result).toBe("racecar");
    })

    test("[1, 2, 3, 4, 5]", () => {
        const result = functions.palindrome("[1, 2, 3, 4, 5]")
        expect(result).toBeUndefined();
    })

})

describe('\nAverage of', () => {

    test("[1, 2, 3, 4, 5, 6]", () => {
        const result = functions.average([1, 2, 3, 4, 5, 6])
        expect(result).toBe(3.5);
    })

    test("[45, 54, 63]", () => {
        const result = functions.average([45, 54, 63])
        expect(result).toBe(54);
    })

    test("investigation", () => {
        const result = functions.average("investigation")
        expect(result).toBeFalsy();
    })

})

describe('\nFibonacci of', () => {

    test("9", () => {
        const result = functions.fibonacci(9)
        expect(result).toBe(34);
    })

    test("17", () => {
        const result = functions.fibonacci(17)
        expect(result).toBe(1597);
    })

    test("[49, 98]", () => {
        const result = functions.fibonacci([49, 98])
        expect(result).toBeFalsy();
    })

});
