let criarNumeroAleatorio = (n) => {
    
    let numero = Math.round(Math.random()*(n-1)+1)


    if (numero ==2) {
        criarNumeroAleatorio(n)
        
    }else{
    return numero
    }
    
}

let n = criarNumeroAleatorio(5)
console.log(n)