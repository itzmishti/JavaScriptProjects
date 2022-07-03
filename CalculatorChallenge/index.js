//alert("hey")
let num1=6;
let num2=5;

document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;

add()
{
  let result =num1+num2;
    document.getElementById("res").textContent="Sum : "+result;
}
sub()
{
  let result= num1-num2;
    document.getElementById("res").textContent="Difference : "+result;
}
mul()
{
  let result =num1*num2;
    document.getElementById("res").textContent="Product : "+result;
}
divide()
{
  let result= num1/num2;
    document.getElementById("res").textContent="Division : "+result;
}
