// function calculatorCartPrice(num1){//this function will print only one element
//     return num1
// }
// console.log(calculatorCartPrice(200,400,500));
// function calculatorCartPrice(...num1){//this function will print all elements
//     return num1
// }
// console.log(calculatorCartPrice(200,400,500));
function calculatorCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculatorCartPrice(200,400,500));
const user={
    name:"Bhawna",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user)//if nhi dia hoga toh undefined aa jayega
handleObject({
    name:"Hitesh",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));