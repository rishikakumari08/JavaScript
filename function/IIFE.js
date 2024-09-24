// Immediately Invoked Function Expressions (IIFE)

(function(){
    console.log(`Hello I am learnign java script`);
})();

((user)=>{
    console.log(`Welcome in the world of JS ${user}`);  
})("Rishu");

(Hello = ()=> {
    const user= "Momo"
    console.log(`${user}, you are in the named IIFE`);
})();