let somarButton = document.getElementById("soma")
somarButton.addEventListener("click",somar)
somarButton.addEventListener("mouseout",somaGreen)

let subtrairButton = document.getElementById("subtrair")
subtrairButton.addEventListener("click",subtrair)
subtrairButton.addEventListener("mouseout",subGreen)

let multiplicarButton = document.getElementById("multiplicar")
multiplicarButton.addEventListener("click",multiplicar)
multiplicarButton.addEventListener("mouseout",mulGreen)

let dividirButton = document.getElementById("dividir")
dividirButton.addEventListener("click",dividir)
dividirButton.addEventListener("mouseout",diviGreen)

let mediaButton = document.getElementById("media")
mediaButton.addEventListener("click",media)
mediaButton.addEventListener("mouseout",mediaGreen)


let numeroString1 = document.getElementById("numero1")
let numero1 = Number(numeroString1.value)

let numeroString2 = document.getElementById("numero2")
let numero2 = Number(numeroString2.value)

let resposta = document.getElementById("res")

let resultado


function somaGreen(){
    somarButton.style.backgroundColor = "rgb(20, 223, 20)"

}
function subGreen(){
    subtrairButton.style.backgroundColor = "rgb(20, 223, 20)"
}
function mulGreen(){
    multiplicarButton.style.backgroundColor = "rgb(20, 223, 20)"
}
function diviGreen(){
    dividirButton.style.backgroundColor = "rgb(20, 223, 20)"
}
function mediaGreen(){
    mediaButton.style.backgroundColor = "rgb(20, 223, 20)"
}

function somar(){
    somarButton.style.backgroundColor = "red"
    numero1 = Number(numeroString1.value)
    numero2 = Number(numeroString2.value)
    
    resultado = numero1 + numero2

    console.log(resultado)

    resposta.innerHTML = `<strong>O Resultado é: ${resultado}</strong>`

}

function subtrair(){

    subtrairButton.style.backgroundColor = "rgb(199, 23, 23)"

    numero1 = Number(numeroString1.value)
    numero2 = Number(numeroString2.value)

    resultado = numero1 - numero2

    console.log(resultado)

    resposta.innerHTML = `<strong>O Resultado é: ${resultado}</strong>`


}
function multiplicar(){
    multiplicarButton.style.backgroundColor = "rgb(199, 23, 23)"

    numero1 = Number(numeroString1.value)
    numero2 = Number(numeroString2.value)

    resultado = numero1 * numero2

    console.log(resultado)

    resposta.innerHTML = `<strong>O Resultado é: ${resultado} </strong>`

}
function dividir(){
    dividirButton.style.backgroundColor = "rgb(199, 23, 23)"

    numero1 = Number(numeroString1.value)
    numero2 = Number(numeroString2.value)

    resultado= numero1 / numero2

    console.log(resultado)

    resposta.innerHTML = `<strong>O Resultado é: ${resultado}</strong>`
}
function media(){
    mediaButton.style.backgroundColor = "rgb(199, 23, 23)"

    numero1 = Number(numeroString1.value)
    numero2 = Number(numeroString2.value)

    resultado = (numero1 + numero2)/2
    console.log(resultado)

    resposta.innerHTML = `<strong>O Resultado é: ${resultado}</strong>`
}








