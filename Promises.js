//to avoid cll back promise is  done

/* function attandace() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("attandance");
    
    }, 2000);
    
   })
  
} 

function lunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("lunch");
           
        }, 2000);
    })
   
}

function goingtohome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve ("going to home");
             
         }, 2000); 
    })
   
}

attandace()
.then((result) => {
    console.log(result);
    return lunch();
})
.then((result) => {
    console.log(result);
    return goingtohome();
})
.then((result) => {
    console.log(result);
    console.log("end");
})
.catch((error) => {
    console.error(error);
});
----------------------------------------------

function attandace() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        let a=true;
        if(a)         
            resolve("attandance true");
            else
 reject("attandance false");
     
     }, 2000);
     
    })
   
 }
 
 function lunch() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            let b=true;
            if(b)         
                resolve("l true");
            else
             reject("l false");
            
         }, 2000);
     })
    
 }
 
 function goingtohome() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            let c=true;
            if(c)         
                resolve("home true");
            else
             reject("home false");
              
          }, 2000); 
     })
    
 }
 
 attandace().then((result) => {
     console.log(result);
     return lunch();
 }).then((result) => {
     console.log(result);
     return goingtohome();
 }) .then((result) => {
     console.log(result);
     console.log("end");
 }) .catch((error) => {
     console.error(error);
 });
 -----------------------------------------------------------------------
 
function attandace() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        let a=true;
        if(a)         
            resolve("attandance true");
            else
 reject("attandance false");
   
     }, 2000);
     
    })
   } 
 function lunch() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            let b=false;
            if(b)         
                resolve("l true");
            else
             reject("l false");
            
         }, 2000);
     })
     }
  function goingtohome() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            let c=true;
            if(c)         
                resolve("home true");
            else
             reject("home false");
              
          }, 2000); 
     })
    
 }
 
 attandace().then((result) => {
     console.log(result);
     return lunch();
 }).then((result) => {
     console.log(result);
     return goingtohome();
 }) .then((result) => {
     console.log(result);
     console.log("end");
 }) .catch((error) => {
     console.error(error);
 });
 -----------------------------------
function apple()
{
    console.log("apple");
    return new Promise((resolve,reject)=>{
        //resolve("good")
       reject("bad") 
    })
}
apple().then((result)=>{console.log(result)})
    .catch((result)=>{console.error(result)})
---------------------------------------
aysnc 
async function a()
{
    await db=connectionstring
}
fun b()
{

}
func c()
{

}

//-------------------------------------------
function attandace() {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        let a=true;
        if(a)         
            resolve("attandance true");
            else
 reject("attandance false");
     
     }, 2000);
     
    })
   
 }
 
 function lunch() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            let b=true;
            if(b)         
                resolve("l true");
            else
             reject("l false");
            
         }, 2000);
     })
    
 }
 
 function goingtohome() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
            let c=true;
            if(c)         
                resolve("home true");
            else
             reject("home false");
              
          }, 2000); 
     })
    
 }
async function final(){
    try {
        let attandances = await attandace();
        console.log(attandances);
        let lun=await lunch();
        console.log(lun);
        let home=await goingtohome();
        console.log(home);
    } catch (error) {
        console.error(error);
    };
}

final();

*/