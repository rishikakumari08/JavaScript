const user={
    username:"Rishika",
    loginCount:6,
    signedIn:true,

    getUserId:function(){
        console.log(`username:${this.username}`);//here we need to give this.usename because we need to give the current context means which variable we want to access so username variable is part of user object so it is accessing its own variable that why we need to give current context this which tells the scope
        console.log(this);
        
        
    }
}

console.log(user.username);
console.log(user.getUserId());

