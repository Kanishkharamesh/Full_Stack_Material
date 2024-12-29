/*
function dog(){
    console.log("JACK the dog")
}
function cat(){
    console.log("ROSE the cat")
}
dog()
cat()
*/

// taking the function and passing it as a parameter is called call back function.

/* function dog(callback){
    setTimeout(()=>{
        console.log("JACK IS A DOG");
        callback();
    },2000);
}
    function callback(){
        console.log("ROSE THE CAT");
    }
dog(callback)
//JACK IS A DOG
//ROSE THE CAT */

/* function attendance(lunch) {
    setTimeout(() => {
        console.log("This is attendance");
        lunch(goingtohome);
    }, 2000);
}

function lunch(goingtohome) {
    setTimeout(() => {
        console.log("This is lunch time");
        goingtohome();
    }, 4000);
}

function goingtohome() {
    console.log("Go to home now");
}

attendance(lunch);

// output:
// This is attendance
// This is lunch time
// Go to home now */

/* function attendance(callback){
    setTimeout(()=>{
        console.log("Mark the attendance");
        callback();
    },2000);

}
function lunch(callback){
    setTimeout(()=>{
        console.log("Eat your lunch");
        callback();
    },2000);
}

function goingtohome(callback){
    console.log("Boarded the house");
    callback();
}

//call back hell passing function as a parameter to another function
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("Day completed")
        })
    })
})

// Mark the attendance
// Eat your lunch
// Boarded the house
// Day completed */
