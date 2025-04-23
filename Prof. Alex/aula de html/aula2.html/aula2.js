function enviar() {

    let imagem = document.getElementById("imagem")
    imagem.setAttribute("src", "pexels-stephendn-65718.jpg")

}
const rest = document.getElementById("result")

function soma() {

    let num1 = Number(prompt("Digite o primeiro numero:"))
    let num2 = Number(prompt("Digite o segundo numero:"))
    resultado = num1 + num2

    rest.innerHTML += `<p><strong>O Resultado é  da soma é ${resultado}</strong></p>`

}

function media() {
    let num1 = Number(prompt("Digite o primeiro numero :"))
    let num2 = Number(prompt("Digite o segundo numero:"))
    resultado = (num1 + num2) / 2

    rest.innerHTML += `<p><strong>O Resultado da media é ${resultado}</strong></p>`
}
