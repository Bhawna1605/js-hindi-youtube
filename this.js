const user={
    username:"Bhawna",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Hitesh"
// user.welcomeMessage()
//console.log(this);
// function chai(){
//     let username="Raj"
//     console.log(this.username);
// }
// chai()
// 
// const chai=function(){
//     let username="Raj"
//     console.log(this.username);
// }
// chai()
// const chai= ()=>{//arrow function
//     let username="Raj"
//     //console.log(this.username);
//     console.log(this);
// }
// chai()
// const addTwo= (num1,num2)=>{
//     return num1+num2
// }
//const addTwo= (num1,num2)=> num1+num2//known as implicit return 
//const addTwo= (num1,num2)=> (num1+num2)//parenthesis use hua toh return nhi likhna curly braces hua toh likhna h
const addTwo= (num1,num2)=> ({username:"Bhawna"})
console.log(addTwo(4,5))