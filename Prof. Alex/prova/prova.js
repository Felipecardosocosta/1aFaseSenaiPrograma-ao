// 1. Filtro e transformação com ordenação (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um novo array com as disciplinas que possuem mais de 7 caracteres, convertidas para letras
// maiúsculas e ordenadas.

const palavras = ["desenvolvimento", "web", "javascript", "logica", "frontend"]

let filtro = palavras.filter(materias => materias.length > 7).map(materia => materia.toLocaleUpperCase())
console.log(filtro);


// 2. Média dos alunos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie um array com objetos contendo nome e notas. Retorne a um novo array com nome e a média.


const alunos = [
    {
        nome: "Ana",
        notas: [8, 9, 10]
    },
    {
        nome: "Carlos",
        notas: [6, 7, 5]
    }
]

const medias = alunos.map(aluno => {
    let media = aluno.notas.reduce((acc, pro) => acc + pro) / aluno.notas.length
    aluno.notas = media
    return {
        nome: aluno.nome,
        media: aluno.notas
    }
})
console.log(medias);



// 3. Cálculo de estoque (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● A partir do array abaixo, calcule o saldo final do estoque:


const transacoes = [
    {
        tipo: "entrarda",
        valor: 100
    },
    {
        tipo: "saida",
        valor: 60
    },
    {
        tipo: "entrarda",
        valor: 50
    },
    {
        tipo: "entrarda",
        valor: 30
    },
]

let saldoFinal = transacoes.reduce((saldoFinal, proximo) => {

    if (proximo.tipo === "entrarda") {
        saldoFinal += proximo.valor
    } else saldoFinal -= proximo.valor
    return saldoFinal
}, 0)
console.log(saldoFinal);


//4. Aplicar desconto em produtos (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
//● Crie uma função que aplica 10% de desconto em produtos com valor > R$100.


const produtos = [
    {
        nome: "Cadeira",
        valor: 150
    },
    {
        nome: "Lapis",
        valor: 5
    },
]

function desconto() {

    let valorParaDesconto = 100
    produtos.forEach(produto => {

        if (produto.valor > valorParaDesconto) {

            produto.valor -= produto.valor * 0.1
        }

    })
}
console.log(produtos);

desconto()
console.log(produtos);



// 5. Verificações de dados (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Verifique se algum usuário está logado e se todos estão logados:


const usuarios = [
    {
        nome: "",
        logado: true
    },
    {
        nome: "",
        logado: false
    },
    {
        nome: "",
        logado: true
    },
]
console.log(usuarios.some(usuario => usuario.logado === true));

console.log(usuarios.every(usuario => usuario.logado === true));



//6. Função buscar produto (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Crie uma função que busca um produto pelo nome

const produtos6 = [
    {
        nome: "Notebook",
        preco: 3000
    },
    {
        nome: "Mouse",
        preco: 3000
    },
]

function buscar(nome) {
    return produtos6.filter(produtos => produtos.nome === nome)
}

console.log(buscar("Notebook"))


// 7. Listar tarefas pendentes (Capacidades: 1, 2, 3, 4, 5, 7, 8, 9, 10)
// ● Filtre as tarefas não concluídas e liste com prefixo "Pendente: ...":

const tarefas = [
    {
        descricao: "Estudar JS",
        concluida: true
    },
    {
        descricao: "Fazer Prova",
        concluida: false
    },
    {
        descricao: "Enviar projeto",
        concluida: false
    },

]

function listarPendente() {

    return {
        Pendente: tarefas.filter(tarefas => tarefas.concluida === false)
    }

}

console.log(listarPendente());
