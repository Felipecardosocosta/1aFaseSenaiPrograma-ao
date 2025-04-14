/*🎈 13. Festa VIP
História:
Só entra na festa VIP quem estiver na lista de convidados e trouxer convite.
Desafio:
let nome = "Joana";
let temConvite = true;
Use if/else para dizer se pode entrar ou não.
 */

//Declaraçao de variaveis

const enviarNome = document.getElementById("enviarNome")
const div = document.getElementById("res")
const listNome = "Joana"
const codigo = "12345"


//Processamento de dados
enviarNome.addEventListener("click", clicouNome)

function clicouNome() {
    let nomeVerificar

    let nome = document.getElementById("nome")
    nomeVerificar = (nome.value)

    let codigoVerificador
    let convite = document.getElementById("convite")
    codigoVerificador = (convite.value)

    if (nomeVerificar === listNome && codigoVerificador === codigo) {
        console.log("True")
        div.innerHTML = "<strong>Permitido!!</strong>"
    } else {
        console.log("False")
        div.innerHTML = "<strong>Negado!</strong>"
    }


}


