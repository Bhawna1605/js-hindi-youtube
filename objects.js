//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Bhawna",
    "full name":"Bhawna Singla",
    [mySym]:"mykey1",
    age:20,
    location:"Faridabad",
    email:"bhawna@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
JsUser.email="bhawna@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email="bhawna@microsoft.com"
console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());