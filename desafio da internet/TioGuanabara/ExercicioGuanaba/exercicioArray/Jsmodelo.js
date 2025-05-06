let numero = []

function enviarNum() {

    let numeroDigitado = document.getElementById("usuNum")
    let numeroModificado = (numeroDigitado.value)
    console.log(numero)
    console.log(numeroDigitado)

    if (numeroModificado < 0 || numeroModificado > 100 || numeroDigitado.value.length == 0) {
        alert("Digite o numero de 0 a 100")

    } else if (numero.length == 0) {
        numero.push(numeroModificado)
        mostrarUsuario(numeroModificado)
        numeroDigitado.value = ``
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