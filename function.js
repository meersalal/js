//   function with object 

const User = {
    username : "Meer Salal",
    course : "JS"
}

function Users(AnyObject){
    console.log(`UserName is ${AnyObject.username} and CourseName is ${AnyObject.course} `);
     
}
//  one method
//  Users(User)

//  second method
// Users({
//    username : "Salal",
//    course : "Js"
// })



//   function with Array 


price = [200,300,400]

function TotalAmount(AnyArray){
    return AnyArray[2]
}

//console.log(TotalAmount(price));

console.log(TotalAmount([
    400,500,700
]));

