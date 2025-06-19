const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
    { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
    { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
    { nome: "Meias", preco: 9.9, categoria: "Roupas" },
    { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];




//Exercícios de Números 

// 1. Filtrar números maiores que 10.

let numerosMaiorQue = 10

let filtroDeNumeros = numeros.filter(numero => numero > numerosMaiorQue)

console.log("\nNúmeros filtrados: " + filtroDeNumeros + "\n");

//2. Dobrar todos os números do array.

let numerosDobrados = numeros.map(numero => numero * 2)

console.log('Números dobrados: ' + numerosDobrados + "\n");

//3. Somar todos os números do array

let somaDoArray = numeros.reduce((acc, pr) => acc + pr, 0)

console.log("Somando tudo que tem no array: " + somaDoArray + "\n");

//4. Encontrar o maior número

let maiorNumero = Math.max(...numeros)

console.log('Esse é o maior numero: ' + maiorNumero + "\n");

//5. Encontrar o menor número

let menorNumero = Math.min(...numeros)

console.log('Esse é o menor numero: ' + menorNumero + "\n");

//6. Ordenar os números em ordem crescente

let numerosEmOrdemCrescente = numeros.sort((a, b) => a - b)

console.log("Numeros em ordem crescente: " + numerosEmOrdemCrescente + "\n");

//7.Criar um novo array com apenas os números ímpares.

let arrayImpar = numeros.filter(numero => numero % 2 === 1)

console.log("Numero impar do array: " + arrayImpar + "\n");

//8. Verificar se todos os números são maiores que 3.

let verificandoNumeroMaiorQue = 3

let verificaçãoQuest8 = numeros.every(numero => numero > verificandoNumeroMaiorQue)

console.log("Verificando se no array tem numeros maior que " + `${verificandoNumeroMaiorQue}: ` + verificaçãoQuest8 + "\n");

//9.Verificar se existe algum número maior que 100

let verificandoSeTemNumeroMaiorQue = 100

let verificaçãoQuest9 = numeros.some(numero => numero > verificandoSeTemNumeroMaiorQue)

console.log(`Verificando se tem números maior que ${verificandoSeTemNumeroMaiorQue}: ${verificaçãoQuest9} ` + "\n");

//10. Retornar a média dos números.

let media = Math.round(somaDoArray / numeros.length)

console.log(`Essa é a media do array: ${media}` + "\n");




//Exercícios de Nomes



//1.Ordenar os nomes em ordem alfabética.

nomes.sort()

console.log(`Nomes ordenados em ordem alfabéticas: ${nomes}` + "\n");


//2. Filtrar os nomes com mais de 5 letras.

let numeroDeLetras = 5

let filtroDeNomes = nomes.filter(nome => nome.length > 5)


console.log(`Nomes com ${numeroDeLetras} letras:  ${filtroDeNomes}` + "\n");

//3.Transformar todos os nomes em letras minúsculas

let letraMinuscula = nomes.map(nome => nome.toLocaleLowerCase())

console.log("Nomes em Minusculo: " + letraMinuscula + "\n");

//4.Verificar se algum nome começa com a letra “B”.

let temAlgumNomeComLetraB = nomes.some(nome => nome[0] === "B")

console.log("Verificando se tem nomes que começa com a letra B : " + temAlgumNomeComLetraB + "\n");

//5.Encontrar o nome “Daniel” no array.

let nomeParaEncontrar = "Daniel"

let indice = nomes.indexOf(nomeParaEncontrar)

if (indice != -1) console.log(`O ${nomeParaEncontrar} esta no índice: ${indice}` + "\n");

else console.log(`O ${nomeParaEncontrar} não esta no banco de dados` + "\n");


//6. Criar um array com a quantidade de letras de cada nome.

let arrayQuantidadeLetras = nomes.map(nome => nome.length)

console.log("Quantidade de letras que tem em cada nome: " + arrayQuantidadeLetras + "\n");

//7. Juntar todos os nomes em uma string separada por vírgula.

let juntarNomes = nomes.reduce((acc, pro) => acc + ',' + pro)

console.log(`Nomes em uma única variável separada por virgula: ${juntarNomes}` + "\n");






//Exercícios com produtos


//1.Filtrar os produtos da categoria “Eletrônicos”

let categoriaEletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos")
console.log("Produtos da categoria eletrônicos:")
console.log(categoriaEletronicos);

//2.Criar um array apenas com os nomes dos produtos.

let nomeDosProdutos = produtos.map(produtos => produtos.nome)

console.log("Nome de todos os produtos: " + nomeDosProdutos + "\n");

//3. Criar um array com os preços com desconto de 10%

let porcentagemDesconto = 10//%


let descontoDe10 = produtos.map(produto => produto.preco * ((100 - porcentagemDesconto) / 100))


console.log("Desconto de todos produtos: " + descontoDe10 + "\n");

//4.Calcular o valor total de todos os produtos

let valorTotal = produtos.reduce((acc, pro) => acc + pro.preco, 0)

console.log("O valor total de todos os produtos é: " + valorTotal.toFixed(2) + "\n");

//5. Encontrar o produto mais caro.

let produtoMaisCaro = 0

produtos.forEach(produto => produto.preco > produtoMaisCaro ? produtoMaisCaro = produto.preco : false)

produtoMaisCaro = produtos.filter(produto => produto.preco === produtoMaisCaro)

console.log("Produto mais caro é: ");
console.log(produtoMaisCaro);



//6. Ordenar os produtos do mais barato ao mais caro.

produtos.sort((a, b) => a.preco - b.preco)

console.log("\n" + "Os Produtos foram ordenados assim: ");
console.log(produtos);


//7.Agrupar os produtos por categoria (bônus - mais avançado).


let categorias = {

    Eletrônicos: produtos.filter(produto => produto.categoria === "Eletrônicos"),

    Roupas: produtos.filter(produto => produto.categoria === "Roupas"),

}
console.log("Separado por categorias: ");

console.log(categorias);



//8. Criar uma função que receba uma categoria e retorne os produtos dela.


function buscarCategoria(categoria) {

    return produtos.filter(produto => produto.categoria.toLocaleLowerCase() === categoria.toLocaleLowerCase())
}

let euQuero = "RoUpAs"

console.log("A categoria escolhida foi " + euQuero + ": ");

console.log(buscarCategoria(euQuero))


//9. Criar um array com objetos apenas contendo nome e preço


let novoArray = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: produto.preco
    }
})
console.log("Todos os produtos sem categoria: ");

console.log(novoArray);


//10. Verificar se todos os produtos custam mais de R$ 5

let verificandoValorProduto = produtos.every(produto => produto.preco > 5)

console.log("Todos os produtos tem o valor maior que 5 ? " + verificandoValorProduto + "\n");



//Bônus (Desafios com Lógica)


//1. Dado o array numeros , crie um array apenas com os quadrados dos números pares.


let aoQuadrado = numeros.filter((numero, ind) => numero % 2 === 0)
aoQuadrado = aoQuadrado.map(numero => numero ** 2)
console.log('Numeros pares ao quadrado: ' + aoQuadrado + "\n");


//2. A partir de nomes , retorne o nome com maior quantidade de letras.

let nomeMaior = Math.max(...nomes.map(nome => nome.length))
nomeMaior = nomes.filter(nome => nome.length === nomeMaior)

console.log("Os maiores nomes são: " + nomeMaior + "\n");

//3. Verifique se todos os nomes terminam com uma vogal.

let vogais = ["a", 'e', 'i', 'o', 'u']

let verificarVogal = nomes.every(nome => vogais.includes(nome[nome.length - 1]))

console.log("Verificar se todos os nomes terminam em vogais: " + verificarVogal + "\n");

//4. Junte os arrays numeros e nomes em um único array

let juntandoArray = [...nomes, ...numeros]

console.log('Juntando arrays de nome e numero: ' + juntandoArray + "\n");

//5. Crie um array com os nomes dos produtos que custam menos de R$100 e pertencem a “Roupas”.

let produtoRoupaCustoMenor100 = produtos.filter(produto => {

    if (produto.categoria === 'Roupas') {
        return produto.preco < 100 ? produto.nome : undefined

    }
})

console.log('Filtro aplicado roupas que custao menos de 100R$:' + `\n`);
console.log(produtoRoupaCustoMenor100);

//6. Crie uma função que calcule o valor médio dos produtos da categoria “Eletrônicos”.

function valorMedioCategoriaEletronicos() {

    let eletronicos = produtos.filter(produto => produto.categoria === "Eletrônicos")

    let soma = eletronicos.map(produto => produto.preco)

    return soma.reduce((acc, pro) => acc + pro) / soma.length

}
console.log('Media dos preços dos produtos Eletrônicos: ' + valorMedioCategoriaEletronicos().toFixed(2));




































