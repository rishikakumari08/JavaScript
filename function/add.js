function add()
{
    let ans=0;
  for(let i=0;i<arguments.length;i++)
  {
    ans=ans+arguments[0];
  }
  return ans;
}

console.log(add(7,3,2,6,7,2,9));

//second way
function AddNumber(...numbers){//spread operator
    let ans=0;
  for(let i=0;i<arguments.length;i++)
  {
    ans=ans+arguments[0];
  }
  return ans;
}

let res=AddNumber(9,2,41,0,3,1,5);
console.log(res);