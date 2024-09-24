function add(a,b){
    return a+b;
}

function square(a){
    return a*a;
}

//compostition

function compostition(fn1,fn2){
    return function (a,b){
        return fn2(fn1(a,b));
    }
}

//modern java script

const compose= (fn1,fn2)=>(a,b)=>fn2(fn1(a,b));

const result=compose(add,square);

console.log(result(2,3));