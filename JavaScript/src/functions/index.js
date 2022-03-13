module.exports = {

    sum(a, b) {
        return a + b
    }, 

    subtract(a, b) {
        return a - b
    }, 

    multiply(a, b) {
        return a * b
    }, 

    divide(a, b) {
        return a / b
    },

    palindrome(string) {
        return string
        .split("")
        .reverse("")
        .join("")
    },

    average(array) {
        let result = 0
        array.forEach(num => { result += num})
        return result / array.length
    }




};