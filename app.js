const lengthEl = document.querySelector("#length")
const specialEl = document.querySelector("#special")
const numberEl = document.querySelector("#number")
const capsEl = document.querySelector("#caps")

let passwordlength = 8
let special = false
let number = false
let caps = false

lengthEl.addEventListener('change',()=>{
    passwordlength = parseInt(lengthEl.value,10)
    console.log(passwordlength)
})

specialEl.addEventListener('change',()=>{
    special = specialEl.cheked? true : false
    console.log(special)
})
numberEl.addEventListener('change',()=>{
    console.log(number)
})
capsEl.addEventListener('change',()=>{
    console.log(caps)
})
