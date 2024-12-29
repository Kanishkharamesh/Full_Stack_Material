/*function a(){
    console.log("hi");
}
a();*/

/*function ab(){
    if(true){
        var a = 5;
        console.log(a);
    }
    console.log(a);
}
ab();*/

/*function ab(){
    if(true){
        let a = 5; // error - only accessed inside so it throws error
        console.log(a);
    }
    console.log(a);
}
ab();*/

/*let a = 5; //o/p 5
console.log(a);*/ 

/*console.log(a) //o/p:undefined
var a = 5;*/

/*console.log(a) //o/p:error
let a = 5;*/

/*let a = 5;
let a = 3; // redeclared of the variable a so error
console.log(a);*/

/*let a = 5;
a = 3; // o/p:3
console.log(a);*/

/*const a = 5;
a = 3; // error due to reinitialization of a const
console.log(a);*/

/*const a = 5; // o/p:5
console.log(a);*/

/*if(false){
    let a = 5; // no output
    console.log(a);
}*/

/*if(true){
    let a = 5; // o/p: 5
    console.log(a);
}*/

/*let a = 8234567890n;
let a = BigInt(1234567);*/

/*let student1 = {
    name : "kani",//string
    age  : 21, //number
    isStudent : true //bool
    //o/p:{name: 'kani', age: 21, isStudent: true}
}
console.log(student1);*/

/*let student1 = {
    name : ["kani","sash"], //string
    age  : 21, //number
    isStudent : true, //bool
    address : { //nested object
        state : "tamilnadu",
        city : "salem"
    },
    hello : function(){
        console.log("hi students");
        console.log("hi teachers");
    }
}
console.log(student1.name); //['kani', 'sash']
console.log(student1.address.state); //tamilnadu
console.log(student1.hello());//hi students
                              //hi teachers
                              //undefined
student1.hello() //hi students
                //hi teachers
console.log(student1.name[0]) //kani
*/

/*let student = new Object();
student.name = "abi";
student.age = 20;
console.log(student); //{name: 'abi', age: 20}*/

/*function Student(name, age) {
    return {
        name: name,
        age: age
    };
}
const student = Student("abi", 20);
console.log(student); //{name: 'abi', age: 20}*/

/*let student = new Object();
student.name = "abi";
student.age = 20;
student.hel = function(){
    console.log("hello this is abi");
}
student.hel() //hello this is abi
console.log(student); // {name: 'abi', age: 20, hel: ƒ} */