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

let ordemPerguntas = []
function ordemAleatoria() {


    for (let pos = 0; ordemPerguntas.length <= 4; pos++) {

        let max = 4
        let min = 0

        let numeroAleatorio = Math.round(Math.random() * (max - min) + min)

        //console.log(numeroAleatorio)

        //console.log(pos)
        if (ordemPerguntas.includes(numeroAleatorio)) {
            //console.log(numeroAleatorio)
            //console.log(ordemPerguntas)
        } else {
            ordemPerguntas.push(numeroAleatorio)

        }

    }
    //console.log(ordemPerguntas)



}
function começar() {
    ordemAleatoria()
    document.getElementById("registro").removeChild(button)

    document.getElementById("registro").innerHTML = `<h3>Seu Quiz iniciou </h3>
    <p>Escolha uma opção e aperte em Proxima para passar de pergunta</p>`

    document.getElementById("guiz1Pergunta1").style.display = `block`
    let alternativasQuestao1 = ["- Sydney", "- Melbourney", "- Brisbane", "- Perth", "- Adelaide"]

    console.log(ordemPerguntas)

    document.getElementById("aleatorioA1").textContent = alternativasQuestao1[ordemPerguntas[0]]

    document.getElementById("aleatorioC1").textContent = alternativasQuestao1[ordemPerguntas[1]]

    document.getElementById("aleatorioD1").textContent = alternativasQuestao1[ordemPerguntas[2]]

}

//console.log(respostaA1[1].value)

function segundaPergunta() {
    let respostaA1 = document.getElementsByName("pergunta1")
    ordemPerguntas = []

    if (respostaA1[1].checked) {
        console.log("Acertou um acertou")
        qtdAcertos++
    }

    if (respostaA1[0].checked || respostaA1[1].checked || respostaA1[2].checked || respostaA1[3].checked) {
        console.log("Uma resposta foi escolhida")
        mostrarQuestao2()
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
    console.log(ordemPerguntas)
    let alternativasQuestao2 = ['- 1965', '- 1967', '- 1971', '- 1973', '- 1968']

    document.getElementById("aleatorioA2").textContent = alternativasQuestao2[ordemPerguntas[0]]
    document.getElementById("aleatorioB2").textContent = alternativasQuestao2[ordemPerguntas[1]]
    document.getElementById("aleatorioD2").textContent = alternativasQuestao2[ordemPerguntas[2]]
    //terceiraPergunta()

}
function terceiraPergunta() {
    let respostaQuestão2 = document.getElementsByName("pergunta2")

    if (respostaQuestão2[2].checked) {
        console.log("acertou mais um ")
        qtdAcertos++
    }
    if (respostaQuestão2[0].checked || respostaQuestão2[1].checked || respostaQuestão2[2].checked || respostaQuestão2[3].checked) {
        console.log("Selecionou alguma resposta questao 2")
        mostrarQuestao3()

    } else {
        alert("c")
    }
}
function mostrarQuestao3() {
    ordemPerguntas = []
    document.getElementById("guiz1Pergunta2").style.display = `none`
    document.getElementById("guiz1Pergunta3").style.display = `block`
    ordemAleatoria()
    console.log(ordemPerguntas)

    /*A- Terra
    B- Marte
    C- Saturno
    E) Urano
    F) Netuno */

    let ordemPerguntasQuest3 = ["- Terra", "- Marte", '- Saturno', '- Urano', '- Neturno']

    document.getElementById("aleatorioA3").textContent = ordemPerguntasQuest3[ordemPerguntas[0]]
    document.getElementById("aleatorioB3").textContent = ordemPerguntasQuest3[ordemPerguntas[1]]
    document.getElementById("aleatorioC3").textContent = ordemPerguntasQuest3[ordemPerguntas[2]]

}


function enviar3() {
    let respostaQuestão3 = document.getElementsByName("pergunta3")

    if (respostaQuestão3[3].checked) {
        console.log("Acertou outra pergunta")
        qtdAcertos++
        mostrarQuestao4()
    } else if (respostaQuestão3[0].checked || respostaQuestão3[1].checked || respostaQuestão3[2].checked) {
        console.log("Escolheu uma resposta questao3")
        mostrarQuestao4()

    } else {
        alert("Escolha uma alternativa")
    }
}

function mostrarQuestao4() {
    ordemAleatoria()
    ordemPerguntas

    document.getElementById("guiz1Pergunta3").style.display = `none`
    document.getElementById("pergunta4").style.display = `block`
    /*/*pergunta 4
    William Shakespeare
    Dante Alighieri
    Victor Hugo
    E) Homero
    F) Geoffrey Chaucer */
    let ordemPerguntasQuest4 = ["- William Shakespeare", '- Dante Alighieri', '- Victor Hugo', '- Homero', '- Geoffrey Chaucer',]


    document.getElementById("aleatorioA4").textContent = ordemPerguntasQuest4[ordemPerguntas[0]]
    document.getElementById("aleatorioC4").textContent = ordemPerguntasQuest4[ordemPerguntas[1]]
    document.getElementById("aleatorioD4").textContent = ordemPerguntasQuest4[ordemPerguntas[2]]

}
function enviar4() {
    let respostaQuestão4 = document.getElementsByName("pergunta4")


    if (respostaQuestão4[1].checked) {
        console.log("Acertou mais um ")
        qtdAcertos++
        mostrarQuestao5()
    } else if (respostaQuestão4[0].checked || respostaQuestão4[2].checked || respostaQuestão4[3].checked) {

        console.log("Escolheu uma resposta da questao 4 ")
        mostrarQuestao5()
    } else {
        alert("Escolha uma alternativa")
    }

}
