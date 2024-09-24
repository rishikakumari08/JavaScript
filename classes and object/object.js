function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=3;

console.log(multiplyBy5(4));
console.log(multiplyBy5.power);//this will print 3 that means function is also an object , so everything in js is object
console.log(multiplyBy5.prototype);

function createUser(user,score){
    this.user=user
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++ //now here we need tjis keyword so that we can know the current context
}

createUser.prototype.PrintMe=function(){
   console.log(`The ${this.user} price is ${this.score}`);
   
}

const chai=new createUser("chai",27);//we need to give me new keyword
const tea=createUser('tea',350);

chai.PrintMe()
