// immediately Invoked Function Expressions

//       named IIFE

(function prices(price){
    console.log(`The price of this house is : ${price}`);
    
})(20000000);

// when you stop the iife function then we use semicolon ;

//   simple iife function 

(() => {
    console.log("This is simple iife function");
    
})()