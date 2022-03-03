function add(n1, n2, printResult, printPhrase) {
    var result = n1 + n2;
    if (printResult) {
        console.log(printPhrase + result);
    }
    else {
        return result;
    }
}
var number1 = 10;
var number2 = 9;
var printResult = true;
var printPhrase = 'Result is :';
var res = add(number1, number2, printResult, printPhrase);
console.log(res);
