var prompt=require('prompt-sync')({ sigint: true });
// Prompt the user for input
// problem a1....
// var name=prompt('What is your name? ');
// console.log(`Hello, ${name}!`);
// if(name==="Lenin"|| name==="lenin"){
//     console.log("Welcome to the club!");
// }else{
//     console.log("You are not welcome here!");
// }
// Problem 1....
// var age=prompt("What is your age? ");
// console.log(`Your age is: ${age}`);
// if(age<18){
//     console.log("You get a 20% discount...!");
    
// }if(age>=18 && age<=65){
//     console.log("Normal ticket price allowed...!");
// }if(age>65){
//     console.log("You get a 50% senior discount...!");
// }

// Problem 2....

// var length=prompt("Enter the length of the rectangle: ");
// console.log(`The length of the rectangle is: ${length}`);

// var width=prompt("Enter the width of the rectangle: ");
// console.log(`The width of the rectangle is: ${width}`);
// var area=length*width;
// console.log(`The area of the rectangle is: ${area}`);

// Problem 3....Object and Properties

// const product1={
//     name:"Mobile",
//     price:"10000",
//     inStock:true
// }
// const product2={
//     name:"Laptop",
//     price:"50000",
//     inStock:false
// }
// const product3={
//     name:"Tablet",
//     price:"3000",
//     inStock:true
// }
// console.log(`${product1.name},${product2.name},${product3.inStock}`);
// console.log(product1);
// console.log(product2);
// console.log(product3);

// Problem 4....Array of objects

// var GuestList=["Lenin","Srinivas","Ravi","Kiran","Suresh"];

// var guest=prompt("Enter your name: ");
// console.log(`Hello, ${guest}..!`);
// if(GuestList.includes(guest)){
//     console.log(`Welcome to the party!`);
// }
// else{
//     console.log(` Sorry, you are not on the guest list.`);
// }
// Problem 5....Json objects(javaScript object notation)

var jsonObject={
    "date":"2025-01-01",
    "temperature":25,
    "humidity":70,
    "condition":"Sunny",
    "location":"New York",
    "forecast":[
        {
            "date":"2025-01-02",
            "temperature":28,
            "condition":"Partly Cloudy"
        },
        {
            "date":"2025-01-03",
            "temperature":22,
            "condition":"Rainy"
        }

    ]
}
console.log(jsonObject.condition);
console.log(jsonObject.date);
console.log(jsonObject.forecast[1].condition);

