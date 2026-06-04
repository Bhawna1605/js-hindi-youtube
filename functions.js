// function sayMyName(){
//     console.log("B");
//     console.log("H");
//     console.log("A");
//     console.log("W");
//     console.log("N");
//     console.log("A");
// }
// sayMyName()
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(4,8);
function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumbers(4,8)
console.log("Result:",result);
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Bhawna"));
// console.log(loginUserMessage());
function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Bhawna"));
console.log(loginUserMessage());//interview mein pucha jata h