/*Missão: Planeta JavaScript
História:
Você é um astronauta tentando pousar no Planeta JavaScript. A nave só pousa se
o combustível for maior que 50 e o clima for "bom".
Desafio:
let combustivel;
let clima;
Exiba:
"Pouso autorizado!" ou
"Abortar missão!"
 */


//declaração de variaveis
let combustivel
let clima
let exibindo


// entrada de dados

combustivel = Number (prompt('Qual é o nivel de combustivel em porcentagem: '))
clima = prompt ('Qual o estado do clima: ')

//Processaamendo de dados

if(combustivel > 50 && clima === 'bom'){
    console.log('Pouso autorizado!')
    alert('Pouso autorizado!')
    exibindo = document.getElementById("tentativa de pouso")
    exibindo.innerText = "Pouso autorizado!"
}else {
    console.log('Abortar missão!!')
    alert('Abortar missão')
    
    exibindo = document.getElementById("tentativa de pouso")
    exibindo.innerText = "Abortar missão"
}





