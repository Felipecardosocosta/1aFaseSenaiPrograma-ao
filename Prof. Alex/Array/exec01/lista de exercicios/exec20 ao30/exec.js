let palavras = ["ana","joao","felipe","dara","cecilia","alou"]

let maiuscula = palavras.map(palavra => {

    let m = [...palavra]
    
    m[0] = m[0].toLocaleUpperCase()

    
    
    return m.join('')
})

console.log(maiuscula);





