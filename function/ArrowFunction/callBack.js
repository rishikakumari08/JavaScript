function highOrder(a,b,callback){
    let ans=a+b;
    callback(ans);
}



highOrder(4,5, val=>console.log(val));