console.log("Pratima Doodnauth")
function msg(){
    console.log("Hello World!")
}

function printcount(){
    for (let x= 1; x <=3; x++){
        console.log(x)
    }
}
function greeting(name){
    console.log(`Welcome to javascript ${name}`)
}
//function that passes multiple arguments

function fullname(firstname, lastname){
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`) //lastname[0] to print the first character of lastname
}
// function withour parameters but returns a value

function sumxy(){
    let x = 10
    let y = -2
    return x+y
}
function sum(x,y){
    return x+y
}
//calling sum function
let s = sum(5, 10)
console.log(`The sum is ${s}`)

//function to check if a # is positive
function checkpositive(number){
    if(number>0){
        return true
    }
    else{
        return false
    }
}
//calling funct
let n = 2
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`)

//save function in a variable

const addition = function(num1, num2){
    return num1+num2
}
//regular variable function
//const pdt = function(num1, num2){return num1*num2}

//ARROW function

const product = (num1, num2) =>{return num1*num2}

//ANONYMOUS function
(
    function(){
        console.log("This is an anonymous function")
    }

)();

(
    ()=>{console.log("This is an anonymous function using arrow")}
) ();

//Object
//car is the object
let car = {
    //attribute
    make:"Jeep",
    year: 2021,
    model: "wrangler",
    startmileage : 10,
    endmileage : 50,

    // behavior (methods, function)
    accelerate : function(){return this.model},
    brake : function(){return this.make},
    distancetravel: function(){return this.endmileage - this.startmileage}

}

//add method, 'start' to the car object
car.start = function(){
    return `${this.make} ${this.model} is running`
}

//add a property "price"
car.price = 32000