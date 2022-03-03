var button = document.querySelector('button');
// the exclamation defines that the element will never be null, that is sure
// and as HTMLInputElement will define that it is typecasted as a input
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(input1.value, input2.value));
});
