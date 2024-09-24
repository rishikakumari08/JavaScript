//synchronous task -> which gives the result instantly and works in a sequenece
//asynchronous task -> which does not gives the result instantly it returns a promise

//async function are those functions who waits to execute the task 

const a=10;
const b=20;
const result =a+b;
async function GetData() {
    let result=await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(result);
}

GetData();
console.log(result)//even we calling it after the async function it will run first because async function takes time to execute and that is why when we execute the code so it does not wait for async function to execute