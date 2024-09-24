console.log("Jai shree ram");
let a=9;// a contains 67
console.log(a)
// we can store also string in our a variable that is the beauty of the js
a="rihsi"
console.log(a)


// difference between let, var and const
// we can make variable as let for blocks and it won't change the value of the same variable
let b="virat";
{
   let b="king";
   console.log(b)
}
// the b will peinted as virat 
console.log(b)

// but it will not same for var
var c=34;
{
    var c=23;
    console.log(c);
}
console.log(c)
// for both time it will print 23 that is why we don't use var many time means we can redeclare var but not let


const v=23
// we can't declare the v again it will through error and we need to assign some value to const variable.
