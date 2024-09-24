/*


Currying in JavaScript is a technique of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument. Instead of a function that takes all its arguments at once, a curried function takes the first argument, returns a new function that takes the second argument, and so on until all arguments have been provided.

*/

function add(a){
    return function (b){
        return function (c){
            return (a+b+c);
        }
    }
}

console.log(add(4)(5)(8))

//email generater

// function getEmail(to){
//     return function (subject){
//         return function (body){
//             console.log(`sending message to ${to} with subject ${subject}:${body}`)
//         }
//     }
// }

// modern js code for this function

const getEmail= (to)=>(subject)=>(body)=>console.log(`sending message to ${to} with subject ${subject}:${body}`);

let step1=getEmail("rishika@gmail.com");
let step2=step1("Your order has been shipped");
step2("Your order will be placed soon at your address");