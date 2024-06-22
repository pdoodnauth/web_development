/**
 * Monday, June 17: Event in JS
 * Pratima doodnauth
 *
 */
//oneclick event
//step 1 find and save the element that we want to apply an event
const btn = document.querySelector(".btn1")
//step 2: bound the click to the btn1
btn.onclick = function(){
    alert("HEY THERE")
}

//onmouseover event
document.querySelector(".linkqcc").onmouseout = ()=>{
    alert("QCC LINK WAS TOUCHED")
}
// change color div
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor= randomcolor()
})
let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue},${greenvalue},${bluevalue})`
}

//add the click event to each button to the background color to olive

let btnolive = document.querySelector(".btnolive")

btnolive.addEventListener("click", function(){
    colorcontainer.style.backgroundColor= "olive"
})

//add the click event to each button to the background color to orange

let btnorange = document.querySelector(".btnorange")

btnorange.addEventListener("click", function(){
    colorcontainer.style.backgroundColor= "orange"
})

//add the click event to each button to the background color to reset

let btnreset = document.querySelector(".btnreset")

btnreset.addEventListener("click", function(){
    colorcontainer.style.backgroundColor= "white"
})
/*
//collect the button
let btnpressme = document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
    //switch text content 'btnpressme' button from 'Press me' to 'Button was pressed'
    if (e.target.textContent === "Press Me!"){
        e.target.textContent = "Button was pressed"
    }
    else{
        e.target.textContent = "Press Me!"
    }
})
*/
/* remove an item from a list*/

/*let listfruits = document.querySelector("#listfruits")
listfruits.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() ==="li"){
        event.target.remove()
    }
})
*/
let visitqcc = document.querySelector(".visitqcc")


/*scroll event*/
let content= document.querySelector("#content")
let btnscrollright = document.querySelector(".btnscrollright")
btnscrollright.addEventListener("click", function(){
    window.scrollBy(100,0)
})

/*Slice of photo gallery*/
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")
btnleft.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})
btnright.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})
/* to top */
const gotop = document.querySelector(".gotop")
window.addEventListener("scroll", function(){
    let pxtop = window.scrollY;
    if(pxtop>=300){
        gotop.style.display="block"
    }
    else{
        gotop.style.display="none"
    }
})

    /**
    Thursday June 20
    Form Events
    Input Events
    get reference to the form elements
    */
const myform = document.querySelector("#myform")
//get the <div class="greeting">
const greeting = document.querySelector(".greeting")
const greetingname = document.querySelector(".greeting p span")

myform.addEventListener("submit", function(event){
    //prevent the default form submission behavior
    event.preventDefault()

    //start form validation, username
    const usernameinput = document.querySelector("#username")
    //collect the input text value
    const username = usernameinput.value
//validation 1: make sure the user types a username nefore pressing the submit button
if (username.trim() ===""){
    alert("Please enter a username")
    return; //stop further execution of the function
}
//if the validation passed, you can submit the data to the server
//client (frontend)
//server(backend)

//greeting message after the validation

greetingname.innerHTML = username
greeting.style.display = "block"
usernameinput.value = ""
}) 
