const User={
    user:"Rishika",
    id:123
}

function getUser(objectUser){
    console.log(`The user name is ${objectUser.user} and the id is ${objectUser.id}`);
    
}

getUser({
    user:"Nital",
    id:345
})

//passing the array
const newArray=[12,34,56,78];

function getArray(arr){
    console.log(`the first element of array is ${arr[0]}`);
    
}

getArray([200,400,300,500,100,200]);