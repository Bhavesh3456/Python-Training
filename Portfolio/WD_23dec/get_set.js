let inp=document.createElement("input")
inp.style.color="red"

let div=document.querySelector(".box")
div.before(inp)
inp.setAttribute("placeholder","enter your name")