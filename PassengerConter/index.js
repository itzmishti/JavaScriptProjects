//alert("hey");
//
// let firstBatch=5
// let secondBatch=7
// let count=firstBatch+secondBatch;
// console.log(count);
let count=0;
function increment(){

    count=count+1
    document.getElementById("count-el").textContent=count;

}
//saveString="";
function save(){
  let countStr=count +" - ";
  document.getElementById("save-el").textContent+=countStr;
  document.getElementById("count-el").textContent=0;
  count=0;
  console.log(count);

}

// function countdown(){
//   for(var i=5;i>=0;i--)
//   {
//     console.log(i);
//   }
//   console.log("Go");
// }
// countdown();
