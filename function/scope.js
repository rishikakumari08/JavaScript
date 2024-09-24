// var let const

if(true){
    let a=12;
    const b=34;
    var c=45;
}

// console.log(a);//this will throw error because a is let type of variable which has scope in its if thread only and same with const
// console.log(b);
console.log(c);//but this won't throw error because it can be used any where in the programing and it can be changed any time and that is the main probelm with

function one(){
    const userName="Rishika";

    function two(){
        const learn="Java script";
        console.log(userName);
    }

    // console.log(learn);
    
    /*
    this will throw an error because the scope of learn is not exisitng becuase we teminated from two but we can access userName in two function because we didn't teminated from one function and the scope of userName is existings
    */

    two()
    
}

// one();


// +++++++++ ways to define the function +++++++++++++++


console.log(addone(4));//even if I will call addone before the function delclaration it will work
function addone(num){
    return num+1;
}


// addtwo(3);//but this will trow an error because here we have delclared our funtion by a variable and we declare function like this so this also called as expression
const addtwo=function(num){
    num+2;
}

