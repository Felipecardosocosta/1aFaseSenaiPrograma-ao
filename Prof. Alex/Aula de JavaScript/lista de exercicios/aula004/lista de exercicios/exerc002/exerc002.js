function criarNumeroAleatorio(n) {

    let numero = Math.round(Math.random() * (n - 1) + 1)

    return numero


}

let test = criarNumeroAleatorio(10)
console.log(test)



let array = [{
    nome: "felipe",
    idade: 29,
    id: 1
}, {
    nome: `Dara`,
    idade: 18,
    id: 2
}
    , {
    nome: `Fernanda`,
    idade: 27,
    id: 3
}
    , {
    nome: `Diego`,
    idade: 7,
    id: 4,
    evento: true
}
    , {
    nome: `Leticia`,
    idade: 21,
    id: 5
}
    , {
    nome: `Barnabe`,
    idade: 30,
    id: 6
}
    , {
    nome: `Bluey`,
    idade: 5,
    id: 7
}

]


function removerEvento() {

    let menorIdade = array.filter(value => value.idade < 18)


    return menorIdade

}
console.log(removerEvento());



console.table(array);


