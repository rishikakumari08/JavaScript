// this keyword use for accessing current context

const user={
    user:"Rishi",
    price:234,

    welcomeMessage:function(){
        console.log(`hello ${this.user} , welcome in java script world.`);
        console.log(this);
        
    }
    
}

user.welcomeMessage();
user.user="Abhinav"
user.welcomeMessage()
console.log(this); 

/*
this return an empty object because there is nothing in the current context but when we use this keyword at browser so it returns window because window is a global object and that is why in dom we can use window properties

*/

// function code(){
//     const userId=123
//   console.log(this.userId);
//   //this will give undefined because this keyword only works for object
  
// }

const code=()=>{
    const userId=123
  console.log(this.userId);
  //this will also return undefined

  console.log(this);
  //but this will return empty object that is why in arrow function we can not use this keyword bu in normal function we can use 
  
}

code()

// +++ explicit return => we need to write return keyword +++++

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
  

// +++ implicit return => we do not need to write return keyword ++++

const addTwo = (num1,num2) => (num1+num2)