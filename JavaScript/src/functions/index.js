module.exports = {

    sum(a, b) {
        return a + b
    }, 

    subtract(a, b) {
        return a - b
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
    },

    fibonacci(num) {
        let num1 = 0
        let num2 = 1
        for (let i = 1; i < num; i++) {
            aux = num1 + num2;
            num1 = num2;
            num2 = aux;
        }
        return num2
      }
      
};