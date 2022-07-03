//alert("hey")
let num1=6;
let num2=5;
// const num1 = parseInt(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;

function add()
{
  let result =num1+num2;
    document.getElementById("res").textContent="Sum : "+ result;
}
function sub()
{
  let result= num1-num2;
    document.getElementById("res").textContent="Difference : "+result;
}
function mul()
{
  let result =num1*num2;
    document.getElementById("res").textContent="Product : "+result;
}
function divide()
{
  let result= num1/num2;
    document.getElementById("res").textContent="Division : "+result;
}
