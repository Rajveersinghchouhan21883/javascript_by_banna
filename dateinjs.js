let date = new Date();
console.log(date);
/*
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toJSON());
*/


//let myDate = new Date(2005,7,25)
//let myDate = new Date(2026,5,29)

//console.log(myDate.toLocaleDateString());
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());


let myTime = Date.now();
let Date1 = new Date(2026,5,29)
let Date2 = new Date(2026,5,30)

console.log(Date2.getTime()-Date1.getTime());

console.log(1000 *60 * 60*24);

let nowDate = new Date()
console.log(nowDate.toLocaleString('default',{weekday:"short"}));

