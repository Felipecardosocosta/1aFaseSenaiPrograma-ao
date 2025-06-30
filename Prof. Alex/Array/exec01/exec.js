// let nomes = ["felipe","alex", "joao"]

// for (const key in nomes) {
//     console.log(key)

// }

// for (const element of nomes) {
//     console.log(element)

// }

let numero = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosInvertidos = numero.map((elemento, index) => {
    console.log(index)
    const len = numero.length - 1
    console.log(len)
    return numero[len - index]
}
)
console.log(numero);
console.log(numerosInvertidos);
