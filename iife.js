//(IIFE)->Immediately Invoked Function Expressions
// function chai(){
//     console.log(`DB connected`);
// }
// chai()
(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();
// ( ()=>{
//     console.log(`DB connected TO`);
// })()
( (name)=>{
    console.log(`DB connected TO ${name}`);
})('hitesh')