//for of loop
//["","",""]
//[{},{},{}]
// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }
// const greeting="Hello world!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`)
// }
//Maps
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")
// map.set('IN',"India")//repetition not allowed
// //console.log(map)
// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }
// const myObj={->objects are iterable but by not this method
//     game1:'BGMI',
//     game2:'Spiderman'
// }
//for in loop
// for (const [key,value] of myObj) {
//     console.log(key,':-',value);
// }
// const myObject={
//     js:'Javascript',
//     cpp:'C++',
//     rb:'Ruby',
//     swift:'Swift by apple'
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }//object k liye for in loop aur array mein bhi for in lg skta h aur uski key mein index print hoga
//for each loop
const coding=["js","java","python","ruby",'cpp']
// coding.forEach( function (val){
//     console.log(val);
// })
// coding.forEach( (val)=>{
//     console.log(val);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item)=>{
    console.log(`${item.languageName} iska shortcut h ${item.languageFileName}`);
})