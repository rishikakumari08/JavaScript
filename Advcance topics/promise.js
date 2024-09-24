// how to create promises
const promiseOne=new Promise((resolve,reject)=>{
    //Do any async task
    //DB calls, cryptography, network 
    setTimeout(function(){
        resolve() //even we call resolve first but this will be executed after the console.log of async task completed
        console.log("async task completed");
        
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed"); //now this part will not be executed because its a resolve task so we need to call resolve in promiseOne method
    
})

new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("Task 2 completed");
    resolve()
 },1000)
},1000).then(function(){
    console.log("Task resolved ");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@chai.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        const error=false
        if(!error){
            resolve({username:"Rishika",id:123})
        }
        else{
            reject("Error:Data not coming")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username  
}).then(function(username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise either resolve or reject") //this piece of code will execute definetly 
)

const promiseFive = new Promise ((resolve,reject)=>{
    setTimeout(function(){
        const error=true
        if(!error){
            resolve({username:"Java Script",id:123})
        }
        else{
            reject("Error:Java script not working")
        }
    },1000)
})


async function resposePromise() {
    try {
        const response= await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

resposePromise()





































/*
   In JavaScript, Promises represent the eventual result of an asynchronous operation. A promise can be in one of three states: pending, resolved (fulfilled), or rejected. When you call resolve() inside a promise, you're signaling that the asynchronous task has been successfully completed, and the promise should now transition from the pending state to the resolved state.

    Here's why you call resolve():

    resolve() Signals Completion: When the promise's asynchronous operation is done successfully, you call resolve() to indicate that the task has been completed, and the .then() method can be executed. If you don't call resolve(), the promise will remain in the pending state, and the success handler (i.e., the .then() function) will never run.
*/