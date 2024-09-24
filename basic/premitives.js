/* Premetive data type->
N:-> NULL
N:-> Number
S:-> Symbol
S:-> String
B:-> BigInt
U:->undefined
*/

let a=null;
let b=453;
let c=Symbol("I am going to rock")
let d="rishi"
let e=BigInt(900)+BigInt(9);
let f=undefined;
console.log(a,b,c,d,e,f)

// objects in js
const item={
    "rih":true,
    "subh":"you and me",
    "dhillon":56,
    "mitraj":"bikhra"
}

console.log(item["rih"])