console.log("Pratima Doodnauth")
//select special <div id="special">
let division = document.querySelector("#special")

//change css style (color) to the collection division

division.style.color ="olive"

//select  <span class="s3">20%</span>
let s3 = document.querySelector(".s3")
// change css style, color and font-size to the collected span
s3.style.color="red"
s3.style.fontSize = "30px"

//sleclect OFF
let s4 = document.querySelector(".s4")
s4.style.backgroundColor= "pink"
s4.style.padding = "12px"

//change text content
s3.textContent = "50%"
s4.innerHTML = "OFF by <b><em>midnight</em</b>"

//className method
let spans = document.querySelectorAll("#special span")
spans[1].className = "changefontfamily"