//if
// if(2==="2"){
//     console.log("Executed");
// }
//>,<,<=,>=,!=,==,===,!==
const isUserLoggedIn=true 
const temperature=41 
// if(temperature<50){
//     console.log("Temperature is less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }
// console.log("Execute");
// const score=200
// if(score>100){
//     var power="fly"//var mein scope ki problem nhi hoti h baaki const aur let mein hoti h
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
//const balance=1000
//if(balance>500) console.log("Test"),console.log("Test2");->kaafi unreadable code h
// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<750){
//     console.log("Less than 750");
// }
// else if(balance<900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Greater than 500");
// }
// const userLoggedIn=true
// const debitCard=true
// const loggedInFromGoogle=false 
// const loggedInFromEmail=true 
// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in");
// }
// const month=3
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     default:
//         console.log("Default case match");
//         break;
// }
const userEmail="bhawna@google.com"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}
//falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//truthy value
//"0"," ",'false',[],{},function(){}
// if(userEmail.length===0){
//     console.log("Array is empty");
// }
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }
//Nullish Coalescing Operator(??):null undefined
let val1;
// val1=5??10
//val1=null??10
//val1=undefined??10
val1=null??10??20
console.log(val1);
//Ternary Operator
//condition?true:false
const iceTeaPrice=100
iceTeaPrice>=80?console.log("Less than 80"):console.log("Greater than 80");