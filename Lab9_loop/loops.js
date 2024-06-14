console.log("Pratima Doodnauth")
console.log("=====Example 1: for loop as a counter=====")
let i = 1;
for(i ; i <5; i++){
    console.log(`iteration = ${i}`)
}

console.log("=====Example 2: for loop as a decrement counter=====")
//create a loop counter from 10 to 0//
for(let n = 10; n>=0; n--){
    console.log(`iteration = ${n}`);
}

console.log("=====Example 3: condition inside the loop=====")
//check # of even numbers betn -5 and 5//
let counter = 0
for(let m = -5; m<=5; m++){
    console.log(`iteration = ${m}`)
    if(m%2 === 0 && m !==0){
        counter++
    }
}
console.log(`There is/are ${counter } of even numbers`)

console.log("=====Example 4: While loop as a counter=====")
//display number 0 to 4//
let p = 0
while(p<=4){
    console.log(`iteration=${p}`)
    p++
}

console.log("=====Example 5: while loop=====")
//guess number game//
const SECRET = 8

let guessnumber = parseInt(prompt("Guess a number between 1 and 10"))
while(guessnumber!==SECRET){
    guessnumber = parseInt(prompt("Guess a number between 1 and 10"))
}
console.log(`GREAT!!! U GUESSED IT THE NUMBER IS ${SECRET}`)


console.log("=====Example 6: while loop in List=====")
let colors = ["red", "blue", "pink"]
let sizeofcolors = colors.length
let index = 0
while(index<sizeofcolors){
    console.log(colors[index])
    index++
}

console.log("=====Example 7: while loop to simulate a password log-in=====")
//terminate the loop if password fails after 3 attempts//
const password= "peterpan"
let userpassword = prompt("enter a passord")
let numberattempt = 0
while (userpassword !== password){
    numberattempt++
    if(numberattempt>2){
        console.log("Your account is locked!")
        break
    }
    userpassword = prompt(`You have ${3-numberattempt} attempts left. Enter a password again`)  
}
console.log("Too bad for u!!!")

console.log("=====Example 8: do-while loop to simulate money withdraw from a bank account=====")
//user is going to withdraw money from an account with a balance for $1000//
let withdraw = 0
let balance = 1000
do{
    withdraw = parseInt(prompt("How much do you want to withdraw?"))
    if(withdraw<=balance){
        balance = balance - withdraw
        break
    }
    else{
        console.log("insifficient amount, try again")
    }
}while(withdraw>balance)
console.log(`your new balance is ${balance}`)

console.log("=====Exercise: Simulate a Bank Transaction=====")
//Simulate the collection of a pin number of 4 digits
//After pin collection, ask user to pick a transaction: (switch and case or if stsatement) view balance, deposit or withdraw (do while loop)
//ask the user if they want another transaction
//print result

console.log("Simulate the collection of a pin number of 4 digits")
const pin= 12345
let userpin = parseInt(prompt("enter your pin"))
let pinattempt = 0
while (userpin !== pin){
    pinattempt++
    if(pinattempt>2){
        console.log("Your account is locked!")
        break
    }
    userpin = parseInt(prompt(`You have ${3-pinattempt} attempts left. Enter a pin again`))  
}
console.log("Proceed with transaction!!!")
let a = "check balance"
let b = "withdraw"
let c = "deposit"

