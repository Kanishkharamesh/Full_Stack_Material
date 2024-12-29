/* 
1. if
2. if else
3. if elseif else
4. nested if else
5. switch
-------------------------------------

if(condition)
{
statements
}
else
{
statements
}

---------------------------------------
*/

/*
let a = 15; 
if(a%3==0)
{
    console.log("hi");
}
if(a%5==0)
{
    console.log("hello");
}
*/

/*
let choice = "welcome"
switch(choice)
{
    case 'hi':
        console.log("hi everyone");
        break;
    case 'hello':
        console.log("hello everyone");
        break;
    case 'welcome':
        console.log("Welcome everyone");
        break;
    default:
        console.log("ok");
        break;
}
*/

/*
let choice = [1,2,3];
switch(choice)
{
    case [2,3,4]:
        console.log("hi everyone");
        break;
    case [1,2,3]:
        console.log("hello everyone");
        break;
    case [4,5,6]:
        console.log("Welcome everyone");
        break;
    default:
        console.log("ok");
        break;
}
*/

/*
let choice = 1;
switch(choice)
{
    case 1:
        console.log("hi everyone"); // no break so all the case will be executed until it sees a break in any case
    case 2:
        console.log("hello everyone");
    case 3:
        console.log("Welcome everyone");
        break;
    default:
        console.log("ok");
        break;
}
// o/p:
// hi everyone
// hello everyone
// Welcome everyone
*/

/*
if(false)
    console.log("hi"); // this is considered as an if statement
    console.log("hello"); // statement outside the if statement so the o/p is hello
*/

/*
if(true)
{
    console.log("hi"); // this is considered as an if statement
    console.log("hello");
}
else
    console.log("welcome");
console.log("college");

// o/p:
// hi
// hello
// college
*/

/*
syntax:
for(initialization; CSSConditionRule; increment/decrement){
    statements;
}
*/

/*
for(let a = 1; a<10; a++)
{
    console.log(a); //prints from 1 to 9
}
*/

/*
for(;;)
    {
        console.log("hello"); // infinite times it runs
    }
*/

/*
let a = 1;
for (console.log('a'); a<=3; console.log('b')){
    console.log('c');
    a++;
}
// o/p:
// a
// c
// b
// c
// b
// c
// b
*/

/*
let a = 1 ;
for(a=1;a<100;a++);
console.log("hi") //1 times hi
console.log(a); // 100
*/

/*for(let a=1;a<100;a++)
console.log("hi") //99 times hi
console.log(a); //error due to not giving block so it is a separate statement so only the immediate statement next to for is propelry executes.
// the scope is within the for loop but this out of scope so the error
*/

/*for(var a=1;a<100;a++)
console.log("hi") //99 times hi
console.log(a); //100 because in this case the var is globally scoped so this statement is also executed along with the for loop
*/

/*
while()// error
{
    console.log("hi");
}
*/

/*
let a=1;
while(a<=10) // this is called entry check loop
{
    console.log(a);
    a++; // prints from 1 to 10
}
*/

/*
let a=100;
do // this is called exit check loop
{
    console.log(a);
    a++; // prints 100
}while(a<=10);
*/