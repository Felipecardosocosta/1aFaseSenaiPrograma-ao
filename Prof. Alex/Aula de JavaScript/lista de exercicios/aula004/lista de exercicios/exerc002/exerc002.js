let criarNumeroAleatorio = (n) => {
    
    let numero = Math.round(Math.random()*(n-1)+1)

    return numero
    
    
}

let test = criarNumeroAleatorio(5)
console.log(test)


