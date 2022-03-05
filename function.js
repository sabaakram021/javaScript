// function sayHello()
// {
//     console.log("hello from function");
// }
// sayHello();
//function with parameter

// function sum(num1,num2)
// {
//     let add=num1+num2;
//     console.log(add);
// }
// sum(10,20);

// function with return type 

// function multiply(num1,num2)
// {
//     return num1*num2;
// }
// console.log(multiply(2,3));


// functions storing 
//functions are 1st class citizen
// let a=function sub(num1,num2){
//         return num1-num2;
//     }
// console.log(a(8,2));

//IIFE
(function(){
    console.log("IIFI");
})();
(function(num1,num2)
{
    console.log(num1/num2);
})(10,2);


(function(num1,num2)
{
    console.log(num1+num2);
})(10,93);
