const arr=["Rishika","Rishu","Rishi","RishiMuni","Risho","Rushika"];

const print =(name)=>{
    console.log(name);
}

// arr.forEach(print);//foeEach is a function and it is calling a function print so here forEach becomes highorder function because it is taking a function as a parameter

// arr.forEach(val=>console.log(val));//forEach not returns anything

const newArr=arr.map(val=>console.log(val+" "+"oberoi"));//but map return a new array

//filter checks the condition and according to that it gives the value

const num=[2,4,1,7,9,10,12];

const newArr1=num.filter(val=>val%2==0);
// console.log(newArr1)

//slice return the subarray

const arr1=num.slice(1,5);
console.log(arr1);