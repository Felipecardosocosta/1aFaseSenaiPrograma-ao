let numero = []

function enviarNum() {
    document.getElementById("resoluçao").innerHTML = ``
    let numeroDigitado = document.getElementById("usuNum")
    let numeroModificado = (numeroDigitado.value)
    console.log(numero)
    console.log(numeroDigitado)

    if (numeroModificado < 0 || numeroModificado > 100 || numeroDigitado.value.length == 0) {
        alert("Digite o numero de 0 a 100")

    } else if (numero.indexOf(numeroModificado) == -1) {
        numero.push(numeroModificado)
        mostrarUsuario(numeroModificado)
        numeroDigitado.value = ``

    } else {
        alert("Numero ja digitado")
    }


}

function mostrarUsuario(n) {
    let display = document.getElementById("MostrarNum")
    let opçao = document.createElement("option")
    opçao.textContent = `Valor ${n} adicionado `
    opçao.value = n
    display.appendChild(opçao)

}
function leitura() {
    let mostra = document.getElementById("resoluçao")
    if (numero.length == 0) {
        alert("[ERRO]Nao foi digitado um numero")

    } else {

        soma = 0
        for (const contador in numero) {
            soma += Number(numero[contador])
            console.log(soma)
        }
        if (numero.length > 1) {
        }
        let maiorNumero = 0
        for (const controle of numero) {
            console.log(controle, numero, maiorNumero)
            if (Number(controle) > maiorNumero) {
                maiorNumero = controle
            }
        }
        mostra.innerHTML += `<p>Foi digitado ${numero.length} numeros<p>`
        mostra.innerHTML += `O maior numero digitado foi ${maiorNumero} `
        mostra.innerHTML += `<p>A soma de todos os numeros são ${soma}</p>`
        mostra.innerHTML += `<p>A media dos numeros é ${soma / numero.length}</p>`
        
    }
    
}