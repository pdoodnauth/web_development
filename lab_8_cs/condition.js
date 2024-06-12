console.log("Pratima")
console.log("=====Example 1: if statement====")
let day = true;

if(day) {
    console.log("Good Morning")
}

console.log("=====Example 2: if-else statement====")

let n1 = 5, n2 = 5

if(n1===n2){
    console.log("They are equal")
}
else{
    console.log("They are different")}

    console.log("=====Example 3: multiway condition statement====")
    //check if a number is positive, negative or zero//
    let number = 0
    if(number>0){
        console.log(`Number ${number} is positive`)
    }
    else if(number<0){
        console.log(`Number ${number} is negative`)
    }
    else if(number===0){
        console.log("The number is zero")
    }
    else{
        console.log(`${number} is undefined!`)
    }
console.log("=====Example 4: multiway condition statement in prompt function====")
//check if a user enters a number, did't enter anything or pressed cancel button
let n = prompt("Enter a number: ")

if(n===null){
    console.log("Cancel was selected")
}
else if(n===""){
    console.log("OK was selected")
}
else if(isNaN(n)){
    console.log(`${n} is a string`)
}
else {
    console.log (`${n} is a number`)
}

console.log("=====Example 5: nested conditional statement====")
//check if a password has at least 6+ characters and no space)
let password = prompt("Enter a password")

//to find the # of char in a string we use the method .length//
if(password.length>=6){
    console.log(`Password ${password} has ${password.length} characters`)
    if(password.indexOf(" ")===-1){
        console.log(`Password ${password} DOESN'T HAVE SPACE`)
    }
    else{
        console.log(`Password${password} HAS SPACE`)
    }
}
else{
    console.log(`Password ${password} has less than 6 characters`)
}
console.log("====Exercise=====")

let value = prompt("Enter any number")
    if(value>0){
        console.log(`Number ${value} is positive`)
    }
    else if(value<0){
        console.log(`Number ${value} is negative`)
    }
    else if(value===0){
        console.log("Number Value is zero")
    }
    else{
        console.log(`${value} is undefined!`)
    }

    console.log ("=====Example 6: List====")
    let colors = ["yellow", "magenta", "red", "olive", "orange", "babyblue", "hotpink"]
    //all list have an index number that starts with 0(leftmost)
    console.log(`The third color is ${colors[2]}`)

    let selectcolor = prompt("Example 6: select a color using index number")

    switch(selectcolor){
        case '0':
            console.log(`Selected color = ${colors[0]}`)
            break
        case '1':
            console.log(`Selected color = ${colors[1]}`)
            break
        case '2':
            console.log(`Selected color = ${colors[2]}`)
            break
        case '3':
            console.log(`Selected color = ${colors[3]}`)
            break
        case '4':
            console.log(`Selected color = ${colors[4]}`)
            break
        default:
            console.log("color is not on list")
    }

console.log ("=====Example 7: String====")
let greeting= "Good Evening"
console.log(`The seventh character ${greeting[6]}`)

