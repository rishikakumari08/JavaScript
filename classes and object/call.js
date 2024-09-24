//call passes current execution context to other object

function SetUserName(name){
    this.name=name;
}

function UserDetail(userName,id,password){
    // SetUserName(userName)
    SetUserName.call(this,userName)
    this.password=password
    this.id=id
}

const chai=new UserDetail("chai","chai@fb.com",123)
console.log(chai);//we only gets password and id because when we calling SetUserName so we don't get the current context of userName so for this we use a method called call() and we this keyword also as a parameter so that it can hold all the variables and method and give it to the other object
