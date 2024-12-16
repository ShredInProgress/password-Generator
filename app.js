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
    currentLength.innerText=`La Longueur choisie est de ${passwordlength}`
})

specialEl.addEventListener('change',()=>{
    special = specialEl.checked
    currentSpecial.innerText=`Caractères spéciaux:${special?"oui":"non"}`
})
numberEl.addEventListener('change',()=>{
    number = numberEl.checked
    currentNumbers.innerText=`Chiffres:${number?"oui":"non"}`
})
capsEl.addEventListener('change',()=>{
    caps = capsEl.checked
    currentCaps.innerText=`Majuscules:${caps?"oui":"non"}`
    console.log(caps)
})

const parameterElement = document.querySelector('.parameters')

const currentLength = document.createElement("li")
currentLength.innerText=`La Longueur choisi est de ${passwordlength}`
parameterElement.appendChild(currentLength)

const currentSpecial = document.createElement("li")
currentSpecial.innerText=`Caractères spéciaux: Non`
parameterElement.appendChild(currentSpecial)

const currentNumbers = document.createElement("li")
currentNumbers.innerText=`Chiffres : Non`
parameterElement.appendChild(currentNumbers)

const currentCaps = document.createElement("li")
currentCaps.innerText=`Majuscules : Non`
parameterElement.appendChild(currentCaps)

const button = document.querySelector('#confirm')
const result = document.querySelector('.result')

button.addEventListener('click',()=>{
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num ="0123456789"
    const specialChar = "!@#$%^&*()"
    let charsSettings = chars
    if (number) charsSettings+= num
    if (special) charsSettings+= specialChar
    let password = ''
    
    for(let i =0; i<passwordlength;i++){
        
        let randomNumber =(Math.floor(Math.random()*charsSettings.length))
        caps?password += charsSettings.substring(randomNumber,randomNumber+1)
            :password += charsSettings.substring(randomNumber,randomNumber+1).toLowerCase()
    }
    
    

    result.innerText= password

})