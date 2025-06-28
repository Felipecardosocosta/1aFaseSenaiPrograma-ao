let palavras = ["ana","joao","felipe","dara","cecilia","alou"]

let maiuscula = palavras.map(palavra => {

    let m = [...palavra]
    
    m[0] = m[0].toLocaleUpperCase()

    
    
    return m.join('')
})

console.log(maiuscula);


let disciplinas={
        matematica: [8, 7, 9],
        portugues: [6, 7.5, 8],
        historia: [9, 8.5, 10],
        fisica: [5, 6, 6.5]
    }

console.log(Object.values(disciplinas));


