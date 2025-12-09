//  let userDetails=function(name, password ){
//     console.log("Hello");
//     console.log(`Username : ${name} , Password:${password}`);
// }
// userDetails("Ravi", "Ravi@1234")

//Function with Return type
 let userDetails=function(name, password ){
    console.log("Hello");
    console.log(`Username : ${name} , Password:${password}`);
    return {
        name:"raju",
        password:"raju@12334"
    };
}
console.log(userDetails("Ravi", "Ravi@1234"));
let returnValues=userDetails("rani","Rani@1234")
console.log(returnValues);

//normal function :
//------------------

    function getUserDetails(username, password){
        console.log(username, password);
       return username , password
    }

 console.log(getUserDetails("admin","admin@123"));

//immediate invoking function
(function (username, password) {
  console.log(username, password);
  console.log("Hey hello this is immediate invoking fun..");
})("admin","admin@123");

// arrow Function :
// role no 1
let arrowFun = () => {
  let a = 10;
  let b = 20;
  console.log(a + b);
};

// arrowFun();
// role no 2 :

let fun1=()=>{return "return some value"}

// role no 3 :
// In Arrow function "this" keyword word differently

let arrow=()=>{
    console.log(this);
    window.console.log("hello")
}
arrow()

function outerFun() {
    let a = 10;
    return function () {
    console.log(a++);
  }
}
let result=outerFun()
result()

// higher order function

function LandingPage(reg, log) {
  console.log("Home Page .....");
}
function Register() {
  console.log("User Register Successfully");
}
function Login() {
  console.log("User Login Successfully");
}
LandingPage(Register(), Login());




function* generatorFun(){
    yield a=10;
    yield b=20;
    yield c=30;
console.log("Generator Function");
}
let result1=generatorFun()
console.log(result1.next().value);
console.log(result1.next().value);
console.log(result1.next().value);
result1.next()
