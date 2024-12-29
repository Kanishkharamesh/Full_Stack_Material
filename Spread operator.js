// symbol (...) the three dots
/*
let a = [1,2,3,4,5]
let b = [...a]
console.log(b); //o/p all the a values are printed [1, 2, 3, 4, 5]
console.log(b[0]); //o/p 1
b[2] = 10;
console.log(b); //o/p: [1, 2, 10, 4, 5]
*/

/*
let a = [1,2,3,4,5]
let b = a
b[2] = 10;
console.log(a); // o/p: [1, 2, 10, 4, 5]
// the reason why a is also updated is because in the a's array address is stored in b's array. if b is updated then a is also updated.
// direct manipulation of pointers..
*/
/*
let a = 10;
function x() {
    a=20;
    console.log(a);
}
x();
console.log(a);
// 2 times 20 is printed
*/

/*
var aa = 10;
function x() {
    aa=20;
    console.log(aa);
}
x();
console.log(aa);
// 2 times 20 is printed
*/

/*
let a = 10;
let b = a;
b = 20;
console.log(a); //o/p:10
*/

/*
let a = [1,2,3,4,5]
let x = [6,7,8,9]
let b =[...a,...x]
console.log(b); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

/*
let a = [1,2,3,4,5]
let x = [6,7,8,9]
let b =[...a,...x]
function spreadExample(values){
    console.log(values);
}
spreadExample(...b); //o/p: 1
*/

// ----------------------------------------------------

/*
//rest operator
function spreadExample(...values){
    console.log(values);
}
spreadExample(1,2,3,4,5); //[1, 2, 3, 4, 5]
*/

/*
let a = [1,2,3,4,5]
let x = [6,7,8,9]
let b =[...a,...x]
function spreadExample(x,...values){
    console.log(values);
}
spreadExample(1,2,3,4,5); //[2, 3, 4, 5]
*/

/*
let a = [1,2,3,4,5]
let x = [6,7,8,9]
let b =[...a,...x]
function spreadExample(...values,x){ // everything is stored in values so nothing in x , it produces error
    console.log(values);
}
spreadExample(1,2,3,4,5); // error
*/

//--------------------------------------------------------

//Destructuring operator
/*
let a = [1,2,3,4,5]
let [b,c,x,...y]=a;
console.log(y); //[4,5]
*/