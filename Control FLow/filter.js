

const myNum=[1,2,3,4,5,6,7,8,9]
//filter returns an array
const newNums=myNum.filter((num)=>{
    return num>4
})

// console.log(newNums);

//by using forEach loop

const arr=[];

myNum.forEach((num)=>{
    if(num>4){
        arr.push(num)
    }
})
// console.log(arr);

//reducer

// const Reducer=myNum.reduce(function (acc,currval){
//     return acc+currval
// },0)



const Reducer=myNum.reduce((acc,currval)=>acc+currval,0)

console.log(Reducer);