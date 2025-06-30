



//1. Banco com Múltiplas Contas

const banco = {
    relatório: function () {
        let cont = document.getElementById("contRelatBanc")
        let saldoBanco = this.contas.reduce((soma, conta) => soma + conta.saldo, 0)
        cont.innerHTML = `o saldo do banco é: ${saldoBanco.toLocaleString('pt-BR', {
            style: "currency",
            currency: 'BRL'
        })}`
    }
    , contas: [
        {
            nome: "Felipe Cardoso",
            saldo: 3500.00,
            depositar: function (valor) {
                this.saldo += valor

            },
            sacar: function (valor) {
                valor > this.saldo ? alert("Saldo insuficiente!") : this.saldo -= valor
            }

        },
        {
            nome: "Ana Paula",
            saldo: 4820.75,
            depositar: function (valor) {
                this.saldo += valor

            },
            sacar: function (valor) {
                valor > this.saldo ? alert("Saldo insuficiente!") : this.saldo -= valor
            }
        },
        {
            nome: "Carlos Silva",
            saldo: 1200.50,
            depositar: function (valor) {
                this.saldo += valor

            },
            sacar: function (valor) {
                valor > this.saldo ? alert("Saldo insuficiente!") : this.saldo -= valor
            }
        },
        {
            nome: "Mariana Costa",
            saldo: 890.00,
            depositar: function (valor) {
                this.saldo += valor

            },
            sacar: function (valor) {
                valor > this.saldo ? alert("Saldo insuficiente!") : this.saldo -= valor
            }
        },
        {
            nome: "João Pedro",
            saldo: 150.25,
            depositar: function (valor) {
                this.saldo += valor

            },
            sacar: function (valor) {
                valor > this.saldo ? alert("Saldo insuficiente!") : this.saldo -= valor
            }
        }
    ]
}


banco.contas.find(conta => conta.nome === "João Pedro").sacar(300)


//2. Sistema de Votação

const objetoVotação = {

    relatorio: function () {

        let maisVotado = this.candidatos.reduce((maisVotado, atual) => {

            return maisVotado.votos < atual.votos ? maisVotado = atual : maisVotado
        })
        document.getElementById("contVotos").innerHTML = `<div class="cont-candidato">
        <h4>O candidato mais votado foi : ${maisVotado.candidato} com ${maisVotado.votos} votos</h4>
        </div>`

    },
    votar: function (ind) {

        this.candidatos.find((candidato, index) => index === ind).votos++

    },
    candidatos: [
        {
            candidato: "João Silva",
            votos: 0,

        },
        {
            candidato: "Maria Souza",
            votos: 0,


        },
        {
            candidato: "Carlos Oliveira",
            votos: 0,


        },
        {
            candidato: "Ana Martins",
            votos: 0,
        },
    ]

}

function iniciarVotação() {
    let cont = document.getElementById("contVotos")
    cont.innerHTML = ""
    objetoVotação.candidatos.forEach((candidato, ind) => {
        cont.innerHTML += `
        <div class="VotaçaoCandidato">
            <p>Nome do candidato: ${candidato.candidato}</p>
            <button onclick="objetoVotação.votar(${ind})">Votar</button>
        </div>`

    })
    cont.innerHTML += `<button class="buttonRelatorioVotos" onclick="objetoVotação.relatorio()">Relatório</button>`
}


//3.Agenda Semanal de Compromissos

const agendaSemanal = {

    semana: {
        Segunda: [{
            compromisso: "Reunião",
            horario: '09:00'

        },
        {
            compromisso: "Academia",
            horario: '18:00'
        }],

        Terça: [{
            compromisso: "Dentista",
            horario: '10:00'
        }, {
            compromisso: "Estudar React",
            horario: '18:00'
        },],

        Quarta: [{
            compromisso: "Reunião de equipe",
            horario: '09:00'
        },
        {
            compromisso: "Curso de inglês",
            horario: "20:00"
        }],

        Quinta: [{
            compromisso: "Trabalho remoto",
            horario: "07:30"
        },
        {
            compromisso: "Mercado",
            horario: "20:00"
        }],


        Sexta: [{
            compromisso: "Entrega de projeto",
            horario: "23:59"
        },
        {
            compromisso: "Filme com amigos",
            horario: "20:00"
        }],

        Sábado: [{
            compromisso: "Almoço com família",
            horario: "12:00"
        },
        {
            compromisso: "Caminhada no parque",
            horario: "08:00"
        }],


        Domingo: [{
            compromisso: "Planejar a semana",
            horario: "18:00"
        }],

    },
    adicionar: function (compromisso, dia) {

        this.semana[dia].push(compromisso)
        this.listar()

    },
    remover: function (dia, ind) {

        this.semana[dia].splice(ind, 1)
        this.listar()




    },
    listar: function () {
        let cont = document.getElementById("contAgenda")

        cont.innerHTML = ""

        Object.entries(this.semana).forEach(([diaSemana, compromissos]) => {

            compromissos.sort((a, b) => {
                return a.horario.localeCompare(b.horario)
            })


            cont.innerHTML += `
            <div class="cont-dia-semana" >
                <h3>${diaSemana}</h3>
               
                <div class="conteudo-dia">
                    <div id="contCompromis${diaSemana}" class="compromissos" >
                        <h4>Compromissos</h4>
                        <hr>
                    </div>
                
                    <div id="contHorario${diaSemana}" class="horários">
                        <h4>Horários</h4>
                        <hr>
                    </div>

                    <div id="contbuttonDelete${diaSemana}"class="buttons-deletar" >
                        <h4>Deletar</h4>
                        <hr>
                    </div>

                </div>
            </div>`
            compromissos.forEach((dia, index) => {
                document.getElementById(`contCompromis${diaSemana}`).innerHTML += `
                <div class="cont-compromiso"><p>${dia.compromisso}</p></div>`

                document.getElementById(`contHorario${diaSemana}`).innerHTML += `
                <div class="cont-horario"><p>${dia.horario}</p></div>
                `

                document.getElementById(`contbuttonDelete${diaSemana}`).innerHTML += `
                <div class="cont-button-delete">
                <p><button onclick='agendaSemanal.remover("${diaSemana}",${index})'>X</button></p>
                </div>
                `

            }
            )
        }
        )

    }

};

document.getElementById("formAgenda").addEventListener("submit", function (e) {
    e.preventDefault()

    let compromisso = {
        compromisso: document.getElementById("adicionarCompromisso").value,
        horario: document.getElementById("hora").value
    }

    let dia = document.getElementById("diaSemana").value

    agendaSemanal.adicionar(compromisso, dia)
}

)
agendaSemanal.listar()

//4. Gerador de Fichas de RPG 

const criandoPersonagens = {
    personagens: [],

    criarPersonagem: function (nome) {
        let personagem = [["Força", 0], ["Destreza", 0], ["Vida", 0]]

        personagem.forEach(criando => {
            let max = 10
            let min = 1
            let atributo = Math.round(Math.random() * (max - min) + min)

            criando[1] = atributo


        })
        personagem = Object.fromEntries(personagem)
        personagem["Nome"] = nome
        console.log(personagem);


        this.personagens.push(personagem)
        return personagem
    }
}


criandoPersonagens.criarPersonagem("roberto")
console.log(criandoPersonagens.personagens);



//5. Validador de Formulário 

function ValidarForm(objeto) {

    let validando = {
        nome: objeto.nome.length >= 2 ? "Nome Valido" : "Nome Menor que 2 caracteres",

        email: objeto.email.includes("@") ? "Email Valido" : "Email Invalido",

        idade: objeto.idade > 18 ? "Idade Valida" : "Idade invalida Menor que 18 anos"

    }

    return validando

}
ValidarForm({
    nome: "felipe",
    email: "asasd@!",
    idade: 18
})

//6. Sistema de Gestão de Projetos

const projeto = {
    nome: "Site da TrilhaConecta",
    status: "em andamento",
    tarefas: [
        {
            nome: "Criar layout da página inicial",
            prazo: "2025-07-01",
            status: "concluída"
        },
        {
            nome: "Implementar sistema de login",
            prazo: "2025-07-05",
            status: "pendente"
        },
        {
            nome: "Adicionar sistema de chat nos eventos",
            prazo: "2025-07-08",
            status: "pendente"
        },
        {
            nome: "Testar layout responsivo em dispositivos móveis",
            prazo: "2025-07-10",
            status: "pendente"
        }
    ],
    alterarStatus: function (nomeTarefa, status) {

        let tarefa = this.tarefas.find(tarefa => tarefa.nome === nomeTarefa)

        if (tarefa) tarefa.status = status
    },
    listarTarefa: function (status) {
        let tarefas = this.tarefas.filter(tarefa => tarefa.status === status)

        return tarefas

    }

}

console.log(projeto.listarTarefa("pendente"))


//7. Simulador de Jogo de Dados


const jogoDeDados = {
    histórico: [],

    jogarDados: function () {
        let max = 6
        let min = 1
        let dado1 = Math.round(Math.random() * (max - min) + min)
        let dado2 = Math.round(Math.random() * (max - min) + min)
        let soma = dado1 + dado2
        this.registrarHistórico(soma)
        return soma

    },
    registrarHistórico: function (numero) {
        this.histórico.push(numero)

    },
    quantasVezesSaiu: function (numero) {
        return this.histórico.filter(nume => nume == numero).length
    }
}
jogoDeDados.jogarDados()