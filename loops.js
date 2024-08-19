// break and continue

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(element);   
    
// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("Detected 5");
//         continue
//     }
//     console.log(element);   
    
// }


//         do-while loop

// let price = 98

// do {
//     console.log(`Price is ${price}`);
//     price++
// } while (price <= 100);


//             forof loop

const number = [1,2,3,4,5,6,7]

for (const num of number) {
   // console.log(num);
    
}


const string = "Meer Salal"

for (const str of string) {
    //console.log(str);
    
}

const map = new Map()

map.set('Pak',"PAkistan")
map.set('Ind',"India")
map.set('Qat',"Qatar")

for (const [key,value] of map) {
   // console.log(key,'stand for',value);
    
}



//        forIn loop

const user = {
    name : "Meer",
    course: "javaScript"
}

for (const key in user) {
    //console.log(user[key]);
    
}


const course = {
    js : "Javascript",
    r : "Ruby",
    py : "Python"
}

for (const key in course) {
    //console.log(`${key} stand for ${course[key]}`);
    
}

//     forEach

const arr = [
    {
      username : "Meer Salal",
      course : "js"  
    },
    {
        username : "yasir",
        course : "Python"  
      },
      {
        username : "Ali",
        course : "Ruby"  
      },
      {
        username : "Ahmad",
        course : "C++" 
      },
]


arr.forEach((item) => {
    console.log(item.username);
    
})

