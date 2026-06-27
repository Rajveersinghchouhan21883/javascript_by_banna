// stack(primitive)->string,number,bigint,boolean,null,undefined,symbol and
//  heap(non-primitive)like ->object,function,Array

let myname ="rajveer";
let anotherName = myname;
anotherName ="raju:"

console.log(myname)
console.log(anotherName)


let userOne ={
    email :"raju@gmail.com",
    upi:"raj@ypl"
}

let userTwo = userOne;
userTwo.email ="rajveer@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

