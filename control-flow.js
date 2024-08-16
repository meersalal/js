const arr = []

if (arr.length == 0) {
    console.log("Array is empty");
}

const obj = {}

if (Object.keys(obj).length == 0) {
    console.log("Object is empty");
    
}

//    nullish coalecing operater   ??

let val1;
//val1 = null ?? 20
//val1 = 10 ?? 20
val1 = undefined ?? 15 ?? 10
console.log(val1);


//  terniary operator    
// condition ? true : false

const num = 100
num > 100 ? console.log(true) : console.log(false);

