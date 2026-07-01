//let arr;
let arrays = new Array(1,3,4,2,4,5)
//console.log(arrays);

let array =[1,11,111,1111,11111]
//console.log(array);



///// slice and splice 

let arr = new Array(0,1,2,3,4,5,6,7)
//console.log(arr);

let arr1 = arr.slice(1,3)
//console.log(arr);
//console.log("a",arr1)

let arr2 = arr.splice(1,3)
//console.log(arr);
//console.log("b",arr2)

//////////////////////////////////////////////////////////////////////////
let newarr1 =[1,2,3,4]
let newarr2 =[5,6,7,8]

//newarr1.push(newarr2)
//console.log(newarr1);

let newarr3 = newarr1.concat(newarr2)
//console.log(newarr3);

let newarr12 =[...newarr1,...newarr2]
//console.log(newarr12);


console.log(Array.isArray("rajveer"))
console.log(Array.from("rajveer"))
console.log(Array.of("rajveer","raju"))

console.log(Array.from({
    name : "rajveer",
    age: 20
}))

let obj ={
    0:"rajveer",
    1:"singh",
    length:2
}
console.log(Array.from(obj));

