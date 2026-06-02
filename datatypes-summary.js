//Primitive data type
//7 types=> String,Number,Boolean,Null,Undefined,Symbol,BigInt
const score=100
console.log(typeof score);
const scoreValue=100.3
console.log(typeof scoreValue);
const isLoggedIn=false 
console.log(typeof isLoggedIn);
const outsideTemp=null
console.log(typeof outsideTemp);
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
const bigNumber=3456543576654356754n
//Reference(Non-Primitve) data type
//Array,Objects,Functions
const heros=["Shaktiman","Naagraj","Doga"];
//console.log(typeof heros);-> yeh krenge toh humesha hi object aayega output mein
console.log(Array.isArray(heros));
let myObj={
    name:"Bhawna",
    age:20,
}
console.log(typeof myObj);
const myFunction=function(){
    console.log("Hello world");
}
myFunction();