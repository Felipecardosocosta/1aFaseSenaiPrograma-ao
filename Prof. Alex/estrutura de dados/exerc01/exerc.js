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

let setParavra = new Set(palavra)






































// let usuario = [
    

//     {
//     nome:fwwwwfwef,
//     email:asdasdad,
//     avaliaçao: 0,
//     avaliaçoes: [10,9,8],
//     meidia: ()=> {

//         let total = this.avaliaçoes.reduce((acumudador,prximo)=> acumudador+prximo)

//         let media = this.avaliaçoes.length

//         this.avaliaçao = total / media
        
//     }

// }
// ]


