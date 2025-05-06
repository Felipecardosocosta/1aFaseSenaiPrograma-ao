
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
        tentativas: 1
    }
]
let acertosTentativas = []
let quetãoErrada = []
let divRegistro = document.getElementById("registro")

const estadoInicial = divRegistro.innerHTML


let button
let qtdAcertos = 0
let nomeUsuarioRegistro
let identidadeUsuario

function registroclick() {
    console.log(nomeUsuarioRegistro)
    nomeUsuarioRegistro = document.getElementById("nomeUsuario").value
    identidadeUsuario = document.getElementById("identidade").value

    let cadastro = registro.find(item => item.identidade == identidadeUsuario)


    if (cadastro != undefined) {
        if (nomeUsuarioRegistro != cadastro.nome) {
            alert("[ERRO] O reistro ja esta cadastrado com outro nome verifique se foi digitado corretamente, caso esteja correto entre em contato com o suporte")
        } else {
            let buttonQuiz2 = document.createElement("button")
            buttonQuiz2.textContent = "Segundo Guiz"
            buttonQuiz2.addEventListener("click", guiz2)
            let buttonTentarNovamente = document.createElement("button")
            buttonTentarNovamente.addEventListener("click", tentarDnv)
            buttonTentarNovamente.textContent = `Tentar Novamente`

            document.getElementById("registro").innerHTML = `<h3>Voce ja possui cadastro</h3>
            <p>Voce acertou ${cadastro.acertos} de 5 perguntas</p>
            <p>Voce pode ainda pode tentar responder o sugundo guiz de pergunta</p>`
            document.getElementById("resultado").appendChild(buttonQuiz2)
            document.getElementById("resultado").appendChild(buttonTentarNovamente)

        }
    } else if (nomeUsuarioRegistro == `` || identidadeUsuario == ``) {
        alert("[ERRO]Preencha corretamente o nome e identidade")
    } else {
        registro.push({
            nome: nomeUsuarioRegistro,
            identidade: identidadeUsuario,
            acertos: 0,
            tentativas: 1

        })
        //console.log(registro)

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

function enviar1() {
    let respostaA1 = document.getElementsByName("pergunta1")
    ordemPerguntas = []

    if (respostaA1[1].checked) {
        console.log("Acertou um acertou")
        qtdAcertos++
        console.log(`acertou ${qtdAcertos} de 5 questao`)
        console.log(respostaA1.length)

        mostrarQuestao2()
    } else if (respostaA1[0].checked || respostaA1[2].checked || respostaA1[3].checked) {

        quetãoErrada.push(`A capital da Austrália `)

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
function enviar2() {
    let respostaQuestão2 = document.getElementsByName("pergunta2")

    if (respostaQuestão2[2].checked) {
        console.log("acertou mais um ")
        qtdAcertos++
        console.log(`acertou ${qtdAcertos} de 5 questao`)


        mostrarQuestao3()
    } else if (respostaQuestão2[0].checked || respostaQuestão2[1].checked || respostaQuestão2[3].checked) {
        console.log("Selecionou alguma resposta questao 2")
        quetãoErrada.push('O ano que homem pisou na Lua ')

        mostrarQuestao3()

    } else {
        alert("Escolha uma alternativa")
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
        console.log(`acertou ${qtdAcertos} de 5 questao`)


        mostrarQuestao4()
    } else if (respostaQuestão3[0].checked || respostaQuestão3[1].checked || respostaQuestão3[2].checked) {
        console.log("Escolheu uma resposta questao3")
        quetãoErrada.push("O maior planeta do Sistema Solar ")

        mostrarQuestao4()

    } else {
        alert("Escolha uma alternativa")
    }
}

function mostrarQuestao4() {
    ordemAleatoria()
    ordemPerguntas

    document.getElementById("guiz1Pergunta3").style.display = `none`
    document.getElementById("guiz1Pergunta4").style.display = `block`
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
        console.log(`acertou ${qtdAcertos} de 5 questao`)

        mostrarQuestao5()
    } else if (respostaQuestão4[0].checked || respostaQuestão4[2].checked || respostaQuestão4[3].checked) {
        quetãoErrada.push("O escritor de Dom Quixote ")

        console.log("Escolheu uma resposta da questao 4 ")

        mostrarQuestao5()
    } else {
        alert("Escolha uma alternativa")
    }

}
function mostrarQuestao5() {
    ordemPerguntas = []
    ordemAleatoria()
    document.getElementById("guiz1Pergunta4").style.display = `none`
    document.getElementById("guiz1Pergunta5").style.display = 'block'
    /*pergunta 5 
    B- Oceano Pacífico
    C) Oceano Ártico
    C- Oceano Antártico
    - Oceano Índico
    F) Mar Mediterrâneo
    */
    let ordemPerguntasQuest5 = ["- Oceano Pacífico", '- Oceano Ártico', '- Oceano Antártico', '- Oceano Índico', '- Mar Mediterrâneo']

    document.getElementById("aleatorioB5").textContent = ordemPerguntasQuest5[ordemPerguntas[0]]
    document.getElementById("aleatorioC5").textContent = ordemPerguntasQuest5[ordemPerguntas[1]]
    document.getElementById("aleatorioD5").textContent = ordemPerguntasQuest5[ordemPerguntas[2]]


}
function enviar5() {

    let respostaQuestão5 = document.getElementsByName("pergunta5")

    if (respostaQuestão5[0].checked) {
        console.log("Acertou mais uma pergunta")
        qtdAcertos++
        console.log(`acertou ${qtdAcertos} de 5 questao`)

        mostrarResultadoQuizz()

    } else if (respostaQuestão5[1].checked || respostaQuestão5[2].checked || respostaQuestão5[3].checked) {
        console.log("Usuario escolheu uma resposta")
        quetãoErrada.push("O oceano que banha a costa leste do Brasil ")

        mostrarResultadoQuizz()
    } else {
        alert("Escolha uma alternativa")

    }
}

function mostrarResultadoQuizz() {
    console.log(quetãoErrada)
    ordemPerguntas = []
    document.getElementById("guiz1Pergunta5").style.display = 'none'
    document.getElementById("resultado").innerHTML = `<h3>${nomeUsuarioRegistro} </h3>`
    document.getElementById("resultado").innerHTML += `<h4>Voce Acertou ${qtdAcertos} de 5 questões </h4>
    `
    document.getElementById("registro").innerHTML = ""
    if (quetãoErrada.length > 0) {
        document.getElementById("resultado").innerHTML += `<h4>Voce errou as questões: </h4>`
        for (let controle of quetãoErrada) {
            console.log(controle)
            document.getElementById("resultado").innerHTML += `<p> ${controle} </p>`


        }
    }

    let buttonFinal = document.createElement("button")
    buttonFinal.textContent = `Salvar`
    buttonFinal.addEventListener("click", salvar)
    document.getElementById("resultado").appendChild(buttonFinal)
    //alert(quetãoErrada)
    let buttonTentarNovamente = document.createElement("button")
    buttonTentarNovamente.addEventListener("click", tentarDnv)
    buttonTentarNovamente.textContent = `Tentar Novamente`
    document.getElementById("resultado").appendChild(buttonTentarNovamente)



}
function salvar() {
    let buttonInicio = document.createElement("button")
    buttonInicio.textContent = 'Inicio'
    buttonInicio.addEventListener("click", voltarInicio)

    let registroSalvar = registro.find(item => item.identidade == identidadeUsuario)
    if (registroSalvar.tentativas == 0) {
        for (const element of acertosTentativas) {
            if (element > qtdAcertos) {
                qtdAcertos = element
            }

        }
    }
    registroSalvar.acertos = qtdAcertos
    console.table(registroSalvar)
    console.log(registro)
    nomeUsuarioRegistro = ""
    identidadeUsuario = ""
    qtdAcertos = 0
    console.log(nomeUsuarioRegistro, "zerando variavel nome usuario")
    console.log(identidadeUsuario, "zerando variavel")
    console.log(qtdAcertos, "zerando variavel")
    apagarRadio()
    quetãoErrada = []
    console.log(`${quetãoErrada}quetãoErrada Resetou questao errada`)


    document.getElementById("resultado").innerHTML = "<h3>Seu resultado foi salvo com sucesso</h3>"
    document.getElementById("resultado").appendChild(buttonInicio)

}
function voltarInicio() {
    divRegistro.innerHTML = estadoInicial
    document.getElementById("resultado").innerHTML = ``

}


function apagarRadio() {

    let divSelecionada = document.querySelectorAll(".perguntas")
    console.log(divSelecionada.length)

    if (divSelecionada) {
        const todosRadio = document.querySelectorAll('input')
        console.log(todosRadio.length)

        for (let index = 0; index < todosRadio.length; index++) {
            if (todosRadio[index].checked) {
                todosRadio[index].checked = false

            }

        }
    }


}
function guiz2() {
    alert("ainda nao esta pronto")
}


function tentarDnv() {


    let cadastro = registro.find(item => item.identidade == identidadeUsuario)

    //console.log (`${cadastro}  aasdsdfiusdgfiusdgfisudf `)

    if (cadastro.tentativas <= 0) {
        alert("Voce nao tem mais tentativas")
    } else {
        console.log(cadastro.tentativas + `  asasdasdasdasd`)
        cadastro.tentativas--
        console.log(cadastro.tentativas)
        começar()
        apagarRadio()
        acertosTentativas.push(qtdAcertos)
        qtdAcertos = 0
        document.getElementById("resultado").innerHTML = ``
        quetãoErrada = []


    }



}


