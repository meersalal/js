// resolve , reject and fullfuil

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username:"Meer Salal",course: "Js"})
        }else{
            reject("Error: Something went wrong")
        }
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
    
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=> console.log("The promise is either rejected or resolved"))


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username:"Meer Salal", password: "123"})
        }else{
            reject("Error: Js went wrong")
        }
    }, 1000);
})

async function consumedpromiseFour(){
    try {
        const response = await promiseFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumedpromiseFour()