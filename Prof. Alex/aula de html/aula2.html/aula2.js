let nome = prompt("Qual o seu nome ?")
if (nome == null) {
    alert("Bem vindo ser Anonimo ")
} else {
    alert(`Olá ${nome} seja bem vindo!!`)
}



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

function temperatura() {
    let temp = Number(prompt("Digite a temperatura em Celsius:"))

    let converçao = temp * (9 / 5) + 32

    alert(`A temperatura ${temp} em Fahrenheit é ${converçao}`)


}
function exerc4() {

    let numero = (prompt("Digite um numero para verificar se é par ou impar:"))

    if (numero % 2 != 0) {
        alert(`O numero ${numero} é ímpar!!`)
    } else {
        alert(`O numero ${numero} é Par!`)
    }
}
function mediaTres() {
    let nota1 = prompt("Digite o primeiro numero")
    let nota2 = prompt("Digite o segundo numroe")
    let nota3 = prompt("Digite o terceiro numero")

    let result = (nota1 + nota2 + nota3) / 3

    alert(`A media é ${result}`)
}
function imc() {
    let peso = Number(prompt("Digite seu peso"))
    let altura = Number(prompt("Digite sua altura"))

    let imc = peso / (altura * altura)


    if (imc < 18.5) {
        alert("Abaixo do peso")
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal")


    } else if (imc >= 25 && imc <= 29.9) {
        alert("Sobrepeso")
    } else {
        alert("Obesidade")
    }


}
function anoBissexto(){
    let ano = prompt("Qual o ano ?")

    if(ano % 100 ===0 && ano%400 !=0){
        alert("O ano nao é bissexto")
    }else {
        alert("O ano é bissexto")
    }

}





let usuario = [
    

    {
    nome:"fwwwwfwef",
    email:"asdasdad",
    avaliaçao: 0,
    avaliaçoes: [10,9,8],
    meidia: function() {

        
        
        let total = this.avaliaçoes.reduce((acumudador,prximo)=> acumudador+prximo)
        console.log(total);
        
        let media = this.avaliaçoes.length

        this.avaliaçao = total / media
        
    }

}
]
console.table(usuario)

let user = usuario.find(user=> user.nome === "fwwwwfwef")

user.meidia(user)

console.table(usuario);