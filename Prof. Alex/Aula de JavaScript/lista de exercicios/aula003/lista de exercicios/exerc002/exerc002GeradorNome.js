function entrou() {
    document.getElementById("inicio").classList.add("mouseEntrou")
}
function saiu() {
    document.getElementById("inicio").classList.remove("mouseEntrou")
}




function começar() {
    let nome = prompt("Digite seu nome")
    let numeroAleatorio = Math.round(Math.random() * 2 + 1)
    console.log(numeroAleatorio)

    let frase1 = `O insubstituível ${nome} que tem o poder de Transformar Água em Café!!`
    let frase2 = `Capitão ${nome} com o incrivel poder de Teletranportar!!`
    let frase3 = `O indestrutivel ${nome} é feito de aço e quase impossível ser ferido!!`
    if (nome === null || nome >= 0 || nome <= 0) {
        alert("[ERRO] Ser nao identificado")
    } else {
        if (numeroAleatorio === 1) {
            alert(frase1)
        } else if (numeroAleatorio === 2) {
            alert(frase2)
        } else {
            alert(frase3)
        }
    }
}
