const name="Rishika   "
const NewName="Rishu"
// console.log(name.length);//m=now we want to make a function so that all the spaces should be remove from any string

//so we can make our own function
String.prototype.trueLength=function(){
    console.log(`the actual length is ${this.trim().length}`);
    
}

NewName.trueLength()

//inheritance

const Teacher={
    name:"rishika"
}

const student={
    Username:"Rishu",
    // __proto__:Teacher //now student can access all the property of teacher
}

// console.log(student.name);
Object.setPrototypeOf(Teacher,student)//this is the modern way of inheritance
console.log(Teacher.Username);

