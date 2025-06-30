//sistema de display none heheheh

function mostrarSec(AbrirPagina) {
    esconderSec()
    let sec = document.getElementById(AbrirPagina)
    sec.style.display ="flex"
    console.log(sec);
    
}
//gambiarra
document.getElementById("infosCont").style.transform = "translateY(79%)"
document.getElementById("BibliotecaInf").style.transform = "translateY(79%)"
document.getElementById("TemperaturaInf").style.transform = "translateY(79%)"
document.getElementById("AgendaInf").style.transform = "translateY(79%)"
document.getElementById("NotasInf").style.transform = "translateY(79%)"
document.getElementById("CarrinhoInf").style.transform = "translateY(79%)"
document.getElementById("AprovadosInf").style.transform = "translateY(79%)"
document.getElementById("MoedasInf").style.transform = "translateY(79%)"


function esconderSec() {
    document.getElementById("Catálogo").style.display ="none"
    document.getElementById('Biblioteca').style.display ="none"
    document.getElementById('Temperatura').style.display ="none"
    document.getElementById("Agenda").style.display ="none"
    document.getElementById('Notas').style.display ="none"
    document.getElementById('Carrinho').style.display ="none"
    document.getElementById('Aprovados').style.display ="none"
    document.getElementById('Moedas').style.display ="none"
    
}
function mostrarMais(id) {
    let div =document.getElementById(id)
    

    div.style.transform == "translateY(79%)" ? div.style.transform = "translateY(0%)" :div.style.transform = "translateY(79%)"

    
}

//1. Catálogo de Produtos
const catalogoDeProdutos = [
    {
        id: 1,
        nome: "Camiseta Básica",
        categoria: "Roupas",
        preco: 39.90,
        emEstoque: true
    },
    {
        id: 2,
        nome: "Tênis Esportivo",
        categoria: "Calçados",
        preco: 149.90,
        emEstoque: true
    },
    {
        id: 3,
        nome: "Relógio Digital",
        categoria: "Acessórios",
        preco: 89.90,
        emEstoque: false
    },
    {
        id: 4,
        nome: "Fone de Ouvido Bluetooth",
        categoria: "Eletrônicos",
        preco: 129.90,
        emEstoque: true
    },
    {
        id: 5,
        nome: "Mochila Escolar",
        categoria: "Utilidades",
        preco: 79.90,
        emEstoque: true
    }
];
function recebendoDadosProduto() {
    let pesquisa = document.getElementById("contPesquisa")
    let conteiner = document.getElementById("produtoParaProcurar")

    let produto = ProcurarProdutos(document.getElementById("nameProduto").value)

    if (produto === "Produto Não encontrado ") {

        let div = document.createElement("div")
        div.setAttribute("class", "Lista-produto")
        div.setAttribute("id", "listaProduto")
        div.innerHTML = `<p>${produto}</p>
        <button onclick="voltar()">Voltar</button>`
        pesquisa.style.display = "none"
        conteiner.appendChild(div)

    } else {
        let div = document.createElement("div")
        div.setAttribute("class", "Lista-produto")
        div.setAttribute("id", "listaProduto")
        div.innerHTML = `
        <p>Nome: ${produto.nome}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: ${produto.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}</p>
        <p>Tem em estoque: ${produto.emEstoque}</p>
        <button onclick="voltar()">Voltar</button>`
        pesquisa.style.display = "none"
        conteiner.appendChild(div)
    }
}
function voltar() {
    let produto = document.getElementById("listaProduto")
    document.getElementById("produtoParaProcurar").removeChild(produto)
    document.getElementById("contPesquisa").style.display = "flex"
}
function ProcurarProdutos(nomeDoProduto) {

    let produto = catalogoDeProdutos.find(produto => produto.nome.toLocaleLowerCase().trim() === nomeDoProduto.toLocaleLowerCase().trim())

    if (produto === undefined) return "Produto Não encontrado "
    else return produto
}
function mostrarNomesProdutos() {
    let cont = document.getElementById("produtoLoja")
    let nomes = catalogoDeProdutos.map(produto => produto.nome)

    let nome = nomes.join(",")
    cont.innerHTML += `
        <div class="buttonVoltar"><button onclick="esconderSec()">X</button></div>
        <h3>Qual desses produtos você deseja procurar:</h3>
        <p>${nome}: </p>`
}
mostrarNomesProdutos()

//2. Sistema de Biblioteca
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    statusEmprestimo: "Disponível",
    emprestar: function () {
        if (this.statusEmprestimo === "Disponível") {
            this.statusEmprestimo = "Emprestado"
            document.getElementById("statsLivro").innerHTML = `
        <h4>Informação do Livro</h4>
        <p>Titulo: ${this.titulo}</p>
        <p>Autor: ${this.autor}</p>
        <p>Status: ${this.statusEmprestimo}</p>`

        }
    },
    devolver: function () {
        if (this.statusEmprestimo === "Emprestado") {
            this.statusEmprestimo = "Disponível"
            document.getElementById("statsLivro").innerHTML = `
        <h4>Informação do Livro</h4>
        <p>Titulo: ${this.titulo}</p>
        <p>Autor: ${this.autor}</p>
        <p>Status: ${this.statusEmprestimo}</p>`

        }

    }
}
document.getElementById("statsLivro").innerHTML = `
    <div class="buttonVoltar"><button onclick="esconderSec()">X</button></div>
        <h4>Informação do Livro</h4>
        <p>Titulo: ${livro.titulo}</p>
        <p>Autor: ${livro.autor}</p>
        <p>Status: ${livro.statusEmprestimo}</p>`

// 3. Conversor de Temperatura 

const ConversorTemperatura = {
    Temperatura: 0,
    celsiusParaFahrenheit: function () {

        console.log(this.Temperatura);
        let faher = (this.Temperatura * 9 / 5) + 32
        console.log(faher);


        document.getElementById("Infotemp").innerHTML = `
        <p>Valor da temperatura em Celsius: ${this.Temperatura}°C</p>
        <p>A temperatura em Fahrenheit é : ${faher}°F </p>`

    }
    ,
    fahrenheitParaCelsius: function () {

        let ceusius = (this.Temperatura - 32) * 5 / 9


        document.getElementById("Infotemp").innerHTML = `
        <p>Valor da temperatura em Fahrenheit: ${this.Temperatura}°F</p>
        <p>A temperatura em Celsius é : ${ceusius}°C </p>`


    }

}
function enviarTemp() {
    let temp = document.getElementById("temp")
    ConversorTemperatura.Temperatura = temp.value
    temp.value = ""

}

//4. Agenda de Contatos 

const agenda = {
    contatos: [{
        nome: "Ana Paula",
        telefone: "48999991111",
        email: "ana.paula@email.com"
    },
    {
        nome: "Carlos Silva",
        telefone: "48988882222",
        email: "carlos.silva@email.com"
    },
    {
        nome: "Mariana Costa",
        telefone: "48977773333",
        email: "mariana.costa@email.com"
    },
    {
        nome: "João Pedro",
        telefone: "48966664444",
        email: "joao.pedro@email.com"
    },
    {
        nome: "Fernanda Lima",
        telefone: "48955555555",
        email: "fernanda.lima@email.com"
    }
    ],

    adicionar: function () {

        let newContato = {
            nome: document.getElementById("nomeContatoAdicionar").value,
            telefone: document.getElementById("telefContatoAdicionar").value,
            email: document.getElementById("emailContatoAdicionar").value
        }
        let contatoExistente = this.contatos.find(contato => contato.nome === newContato.nome && contato.telefone === newContato.telefone)
    
        if (contatoExistente === undefined) {

            this.contatos.push(newContato)
            this.listar()
            
        } else document.getElementById("contInfoAdcConta").innerHTML = "Contato já existe"

    },
    remover: function () {
        let nome = document.getElementById("nomeContatoRemover").value
        let telefone = document.getElementById("telefContatoRemover").value

        let cont = document.getElementById("respAgenCont")
        let posição = this.contatos.findIndex(contato => contato.nome === nome && contato.telefone === telefone)
        console.log(posição);


        if (posição !== -1) this.contatos.splice(posição, 1)
        else cont.innerHTML = `contato não encontrado`


        this.listar()

    },

    listar: function () {
        let cont = document.getElementById("contListContato")
        cont.innerHTML = ""
        this.contatos.forEach(contato => {

            cont.innerHTML += `
            <div class="contato">
                <p>Nome do contato: ${contato.nome}</p>
                <p>Telefone: ${contato.telefone}</p>
                <p>Email: ${contato.email}</p>
                <hr>
            </div>

            `
        })

    }

}

agenda.listar()

//5. Relatório de Notas

const aluno = {
    nome: "Felipe Cardoso",
    disciplinas: {
        matematica: [8, 7, 9],
        portugues: [6, 7.5, 8],
        historia: [9, 8.5, 10],
        fisica: [5, 6, 6.5]
    },
    mediaGeral: function () {

        let estruturando = Object.values(this.disciplinas)

        let mediaSeparada = estruturando.map(materia => materia.reduce((acc, pro) => acc + pro, 0) / materia.length)

        let mediaGeral = mediaSeparada.reduce((acc, pro) => acc + pro, 0) / mediaSeparada.length
        return mediaGeral

    },
    mostrarAluno: function () {
        let cont = document.getElementById("infoAluno")

        cont.innerHTML = `
    
    <div class="aluno-resultado">
    <h4>O aluno ${aluno.nome}</h4>
    <p>Suas disciplinas e notas foram: ${JSON.stringify(aluno.disciplinas)}</p>
    <p>Sua media geral foi ${aluno.mediaGeral().toFixed(2)}</p></div>`

    }
}


//6. Carrinho de Compras

const carrinhoObjeto = {
    itens: [{
        nome: "Camisa",
        quantidade: 2,
        valor: 50.00
    },
    {
        nome: "Calça",
        quantidade: 1,
        valor: 120.00
    },
    {
        nome: "Tênis",
        quantidade: 1,
        valor: 250.00
    },
    {
        nome: "Meia",
        quantidade: 4,
        valor: 10.00
    }],
    adicionarItens: function () {
        let item = {
            nome: document.getElementById("adicionarItem").value,
            quantidade: Number(document.getElementById("quantidade").value),
            valor: Number(document.getElementById("valorItem").value)
        }

        this.itens.push(item)
        this.listar()
        document.getElementById("totalListItens").innerHTML = ""

    },

    removerItem: function (ind) {
        this.itens.splice(ind, 1)
        this.listar()
        document.getElementById("totalListItens").innerHTML = ""

    },

    listar: function () {
        let contNomes = document.getElementById("nomeItens")
        let contListValor = document.getElementById("contListValorItens")
        let contButtonDelete = document.getElementById("contListItensDelete")

        contNomes.innerHTML = ""
        contListValor.innerHTML = ""
        contButtonDelete.innerHTML = ""

        this.itens.forEach((item, ind) => {

            contNomes.innerHTML += `<div class="item"><p>${item.nome}</p></div>`

            contListValor.innerHTML += `<div class="valor"><p>${item.valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</p></div>`



            contButtonDelete.innerHTML += `<div class="buttonDelet"><p><button onclick="carrinhoObjeto.removerItem(${ind})">X</button></p></div>`

        })

    },

    totalLista: function () {
        let cont = document.getElementById("totalListItens")

        let valorItens = this.itens.map(item => item.valor * item.quantidade)



        let total = valorItens.reduce((acc, pro) => acc + pro, 0).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        cont.innerHTML = `<div class="cont-valor-carrinho">Valor total: ${total}</div>`

    }

}

carrinhoObjeto.listar()

//7. Filtrar Alunos Aprovados

const alunosParaVerificar = {
    alunos: [
        {
            nome: "Felipe Cardoso",
            idade: 29,
            turma: "3A",
            disciplinas: {
                matematica: [7, 8, 9],
                portugues: [6, 7.5, 8],
                historia: [9, 8.5, 10],
                fisica: [5, 6, 6.5]
            }
        },
        {
            nome: "Ana Paula",
            idade: 28,
            turma: "3A",
            disciplinas: {
                matematica: [9, 8, 10],
                portugues: [8.5, 9, 9.5],
                historia: [7, 8, 7.5],
                fisica: [6, 7, 8]
            }
        },
        {
            nome: "Carlos Silva",
            idade: 30,
            turma: "3B",
            disciplinas: {
                matematica: [5, 6, 6],
                portugues: [7, 6.5, 7],
                historia: [8, 8, 8],
                fisica: [9, 8.5, 9.5]
            }
        },
        {
            nome: "Luciana Martins",
            idade: 27,
            turma: "3C",
            disciplinas: {
                matematica: [4, 5, 6],
                portugues: [5, 6, 5.5],
                historia: [6, 5.5, 6],
                fisica: [4.5, 5, 5]
            }
        },
        {
            nome: "Bruno Oliveira",
            idade: 26,
            turma: "3C",
            disciplinas: {
                matematica: [6, 6, 5.5],
                portugues: [5, 6.5, 6],
                historia: [6, 6, 6],
                fisica: [5.5, 5, 4.5]
            }
        }
    ],
    mostrarAlunos: function () {
        let cont = document.getElementById("contAlunos")
        cont.style.display = "flex"
        cont.innerHTML = `<h4>Lista de todos os alunos</h4>
    <div id="todosOsAlunos">
    </div>`

        this.alunos.forEach(aluno => {
            document.getElementById("todosOsAlunos").innerHTML += `
        <p>${aluno.nome}</p>`
        })
        cont.innerHTML += `<button onclick="alunosParaVerificar.mostrarAprovados()" class="buttonAprovados">Mostrar Alunos Aprovados</button>`
    },
    mostrarAprovados: function () {
        let cont = document.getElementById("alunosAprovados")
        cont.style.display = "flex"
        cont.innerHTML = `<h4>Alunos Aprovados</h4>
    <div id="alunosAP"></div>`
        let mediaParaAprovar = 6
        this.alunos.filter(aluno => {
            let desconstruindo = Object.values(aluno.disciplinas).map(notas => notas.reduce((acc, pro) => acc + pro, 0) / notas.length)

            let mediaGeral = desconstruindo.reduce((acc, pro) => acc + pro, 0) / desconstruindo.length

            if (mediaGeral > mediaParaAprovar) {

                document.getElementById("alunosAP").innerHTML += `<p>${aluno.nome}</p>`
            }

        })
    }
}

//8. Conversor de Moedas

let objetoMoedas = {
    base: `EUA`,
    taxa: {
        REAL: 5.48,
        Euro: 0.85,
        Peso: 1183.95,
        EUA: 1,
    },
    converter: function () {

        let value = Number(document.getElementById("valorDinheiro").value)

        let De = objetoMoedas.taxa[document.getElementById("seletorDe").value]



        let Para = objetoMoedas.taxa[document.getElementById("seletorPara").value]

        let converçãoParaDolar = value / De / 1

        let valorConvertido = converçãoParaDolar * Para / 1
        console.log(valorConvertido);


        return document.getElementById("respConversor").innerHTML = `<h4>O valor convertido ficou em ${valorConvertido}</h4>`

    }
}



