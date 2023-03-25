let obj1 = {
    'name' : 'Saba Akram',
    'age' : 23,
    phone_number : 9507829261,
    address : {
        city:'ranchi',state:'jharkhand'
    },
    sayHI : function(){
        console.log("Hi, How are you")
    }
};
// console.log(obj1);
// console.log(obj1.address.city)
// console.log(obj1.sayHI());
// obj1.sayHI();

// adding a key 
// console.log(obj1);
obj1.id = 2152467;
// console.log(obj1);


//delete a key
console.log(obj1);
delete obj1.sayHI;
console.log(obj1);
