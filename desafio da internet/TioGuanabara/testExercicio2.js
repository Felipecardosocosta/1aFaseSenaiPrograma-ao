/*11. Sessão de Cinema
História:
Lista de exercícios 5
A entrada no cinema é gratuita para crianças até 12 anos ou idosos acima de 60.
Desafio:
let idade;
Exiba:
"Entrada gratuita 🎟" ou
"Precisa pagar ingresso 💳"
 */

function clicar(){

    let idade
    let resposta
    let respostaSaida = document.getElementById("resultado")



    idade=prompt('Digite sua idade: ') 
    resposta= idade <= 12 || idade>=60?'Entrada gratuita 🎟':'Precisa pagar ingresso 💳'

    console.log(resposta)
    alert(resposta)

    respostaSaida.innerText = resposta


}






let n1 =8
let n2 = 8

console.log(n1+n2)


