//arrow function

const add = (a,b) =>{
   return a+b;
};

console.log(add(3,5));

//hoisting -> we need to first define the funtion then we can use it 

// console.log(AddNumber(a,b));//this will return error

const AddNumber = (a,b) =>{
    return a+b;
}

//This keyword

//in normal function this keyword works as an object
const obj={
    value:20,
    myFun:function(){
        console.log(this.value);
    }

}

obj.myFun();

// this keyword points globally when we use in case of arrow function

const obj1={
    value:20,
    myFun:()=>{
        console.log(this.value);
    }

}