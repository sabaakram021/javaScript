// console.log("Hello world");
// for(let i=1 ; i<5 ; i++){
//     console.log(i);
// }
// let i=1;

// while(i<5){
//     console.log(i);
//     i++;
// }

// let num = 89;
// let flag = 0;
// for(i=2 ;i*i<=num ;i++){
//     if(num % i == 0){
//         flag=1;
//         break;
//     }
// }
// if(flag==1){
//     console.log(num + " is not a prime number");
// }
// else{
//     console.log(num + " is a prime number")
// }

/****************************** Function  *********************/
// function sayHello(){
//     console.log("Hello from function");
// }
// sayHello();


// ***********************Function with parameter *****************

let a = function sum(num1, num2) {
    let addtion = num1 + num2;
    return addtion;
}
console.log(a);
console.log(a(10, 80));