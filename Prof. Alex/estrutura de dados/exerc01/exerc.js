let setNumeros = new Set()

setNumeros.add("felipe")
// setNumeros.add(2)
// setNumeros.add(3)
// setNumeros.add(4)
// setNumeros.add(4)


console.log(setNumeros);


const meuArray = Array.from(setNumeros);
// ou
const outroArray = [...setNumeros];



console.log(outroArray);

let minhaEst= new Set(meuArray)


console.log([...minhaEst]);
let numeros = [0,1,2,2,4,5,6,7,8,8]

let tirarDuplicatas = new Set(numeros)

console.log(tirarDuplicatas);



//Segundo Maior Numero

let array =[]

for (let index = 0; index < 9; index++) {
    let min = 0
    let max = 10
    let numero = Math.round(Math.random()*((max-min)+min))
    array.push(numero)
}
let semDuplicatas = new Set(array)

array = [...semDuplicatas] // []

console.log(array);


let segundoMaiorNumero = 0

let maiorNumero = 0

array.forEach((value, ind)=>{

    if (value > segundoMaiorNumero) {
        
        if (value < maiorNumero) {
            segundoMaiorNumero = value
        }else {
            segundoMaiorNumero = maiorNumero
            maiorNumero = value
        }
    }else if (value > maiorNumero) {
        maiorNumero = value
    }
})
console.log("Segundo maior numero: "+segundoMaiorNumero+"\n");
console.log("Maior numero:  "+maiorNumero+"\n");




//verificar se uma string é um palíndromo

let nomess=["Ana", 'Roberto', 'Otto', 'Mariana', 'Renan', 'João', 'Hannah', 'Lucas', 'Ava', 'Pedro']


let nomeesPalíndromo = nomess.filter(elemento => {

    let nome = [...elemento.toLowerCase()]

    let verificar = nome.map((elemento,ind)=> nome[nome.length - ind - 1])
  
    return JSON.stringify(verificar) == JSON.stringify(nome) ? elemento : false
    
})
console.log(nomeesPalíndromo);



let palavra = [..."otorrinolaringologista"]

let letraPesquisa = "a"

let contagem = palavra.filter(letra => letra === letraPesquisa)

console.log(contagem.length);


//6. Transformar um array de pares em um objeto

let arrayPares = [['a', 1],['b', 2], ['c', 3], ['d', 4]]


let objeto = {}

for(let cont = 0; cont < arrayPares.length; cont ++){

    let [nome, valor] = arrayPares[cont]

    objeto[nome] = valor

}
console.log(objeto);

//7. Somar todos os valores de um objeto

let soma = Object.values(objeto).reduce( (primeroResp, segundo)=>primeroResp + segundo , 0)


console.log(soma);


//Verificar se dois arrays têm os mesmos elementos (ignorando ordem)

let primerio = [1,2,3,0,5]

let segundoArray = [4,5,6,3,2,1,4]

let set = new Set(segundoArray)
let verificando = primerio.map(elemento => segundoArray.includes(elemento) ? elemento : false)

console.log(verificando);


//9. Implementar o método .map() manualmente

let mapManual = []

for (const key in primerio) {

   mapManual.push(3 +primerio[key])

}

console.log(mapManual);


//10. Remover chaves com valores nulos de um objeto

let arrayMisturado = ['a', 1, null, 'b', 2, null, 3];

let objetoMisturado = {
  a: 1,
  b: null,
  c: 3,
  d: null,
  e: 5
};

let tirandoNull = Object.values(objetoMisturado).filter(elemento => elemento !== null)

console.log(tirandoNull);


