/*pergunta 1 
A- Sydney
B- Melbourne
C- Brisbane
D) Perth                          
F) Adelaide*/

/*pergunta 2
A- 1965
B- 1967
C- 1971
E 1973
F 1968 */

/*pergunta 3
A- Terra
B- Marte
C- Saturno
E) Urano
F) Netuno */

/*pergunta 4
William Shakespeare
Dante Alighieri
Victor Hugo
E) Homero
F) Geoffrey Chaucer */

/*pergunta 5 
B- Oceano Pacífico
C) Oceano Ártico
C- Oceano Antártico
- Oceano Índico
F) Mar Mediterrâneo
 */
let registro = [
    {
        nome: "felipe",
        identidade: "1234",
        acertos: 0,
        tentativas: 3
    },
    {
        nome: "Dara",
        identidade: "12345",
        acertos: 0,
        tentativas: 3

    }

]
let button
let qtdAcertos = 0
let nomeUsuarioRegistro
let identidadeUsuario

function registroclick() {
    nomeUsuarioRegistro = document.getElementById("nomeUsuario").value
    identidadeUsuario = document.getElementById("identidade").value

    let cadastro = registro.find(item => item.identidade == identidadeUsuario)
    //console.log(cadastro)

    if (cadastro != undefined) {
        if (nomeUsuarioRegistro != cadastro.nome) {
            alert("[ERRO] O alternativasQuestao1 de registros esta cadastrado com outro nome verifique se foi digitado corretamente, caso esteja correto entre em contato com o suporte")
        } else {
            document.getElementById("registro").innerHTML = `<h3>Voce ja possui cadastro</h3>
            <p>Voce acertou ${cadastro.acertos} de 5 perguntas</p>
            `
        }
    } else {
        registro.push = {
            nome: nomeUsuarioRegistro,
            identidade: identidadeUsuario,
            acertos: 0,
            tentativas: 3
        }


        button = document.createElement("button")
        button.addEventListener("click", começar)
        button.textContent = `Começar`

        document.getElementById("registro").innerHTML = `<h3>Seu castro foi efetuado com sucesso</h3>
        <p>Aperte começar para iniciar o Quiz!!</p>`
        document.getElementById("registro").appendChild(button)


    }

    //console.table(registro)


}

let ordemNumero = []
function ordemAleatoria() {


    for (let pos = 0; ordemNumero.length <= 4; pos++) {

        let max = 4
        let min = 0

        let numeroAleatorio = Math.round(Math.random() * (max - min) + min)

        //console.log(numeroAleatorio)

        //console.log(pos)
        if (ordemNumero.includes(numeroAleatorio)) {
            //console.log(numeroAleatorio)
            //console.log(ordemNumero)
        } else {
            ordemNumero.push(numeroAleatorio)

        }

    }
    //console.log(ordemNumero)



}
function começar() {
    ordemAleatoria()
    document.getElementById("registro").removeChild(button)

    document.getElementById("registro").innerHTML = `<h3>Seu Quiz iniciou </h3>
    <p>Escolha uma opção e aperte em Proxima para passar de pergunta</p>`

    document.getElementById("guiz1Pergunta1").style.display = `block`
    let alternativasQuestao1 = ["- Sydney", "- Melbourney", "- Brisbane", "- Perth", "- Adelaide"]

    console.log(ordemNumero)

    document.getElementById("aleatorioA1").textContent = alternativasQuestao1[ordemNumero[0]]

    document.getElementById("aleatorioC1").textContent = alternativasQuestao1[ordemNumero[1]]

    document.getElementById("aleatorioD1").textContent = alternativasQuestao1[ordemNumero[2]]

}
let respostaA1 = document.getElementsByName("pergunta1")


//console.log(respostaA1[1].value)

function segundaPergunta() {
    ordemNumero = []

    if (respostaA1[1].checked) {
        console.log("Acertou um acertou")
        qtdAcertos++
    }

    if (respostaA1[0].checked || respostaA1[1].checked || respostaA1[2].checked || respostaA1[3].checked) {
        console.log("Uma resposta foi escolhida")
        let proximaPergunta = mostrarQuestao2()
    } else {
        alert("Escolha uma alternativa")
    }
}
function mostrarQuestao2() {
    document.getElementById("guiz1Pergunta1").style.display = `none`
    document.getElementById("guiz1Pergunta2").style.display = `block`
    // frase1 = 1965
    // frase2 = 1967
    // frase3 = 1971
    // frase4 = 1973
    // frase5 = 1968
    ordemAleatoria()
    console.log(ordemNumero)
    let alternativasQuestao2 = [1965, 1967, 1971, 1973, 1968]


}
let respostaQuestão2 = document.getElementsByName("pergunta2")


