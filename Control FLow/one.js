// for of loop

const arr=[1,2,3,4,5];

for(const i of arr){
    // console.log(i);
    
}

//Map :-> it does not store dublicate values
const map = new Map()

map.set('IN',"India");
map.set('Us',"United state");
map.set('Br',"Brazil");
map.set('Cl',"chlorine");

// console.log(map);

for (const [key,value] of map) {
    // console.log(key);
    // console.log("values are: "+ value);
    
}


//objects itertion

const obj={
    JS:"Java Script",
    Rb:"Ruby",
    Py:"python",
    Db:"Database"
}

// for (const i of obj) {
//     console.log(i); //
// we can't iterate object by using for of loop becuase for of loop are used on iterable elements and objects are non iterable element  
// }

for (const key in obj) {
    // console.log(`${key} shortcut is for ${obj[key]}`);
}

/*
    for...in: This loop is used to iterate over the enumerable properties (i.e., keys) of an object. It is meant for objects like {} where you have key-value pairs stored as object properties.

    for...of: This loop is used to iterate over the values of an iterable object like arrays, strings, Map, Set, and other data structures that implement the iterable protocol.
*/

//for each

const coding=["Ruby","Python","Cpp","C"];

//in forEach we use call back function, call back function has not any names
coding.forEach((item)=>{
//   console.log(item);
    
})

const print = (item) =>{
    // console.log(item);
    
}

//now we can use any predefined function as call back function but we only need to give refrence we don't need to execute

coding.forEach(print)

const coders=[
    {
        coderName:"Love babbar",
        channelName:"code help"
    },
    {
        coderName:"Sriver",
        channelName:"Codex"
    },
    {
        coderName:"Shradha",
        channelName:"Apna college"
    }
]


coders.forEach((item)=>{
    console.log(`owner of ${item.channelName} is ${item.coderName}`);
    
})