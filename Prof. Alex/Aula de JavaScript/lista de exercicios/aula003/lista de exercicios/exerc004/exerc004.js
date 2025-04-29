let seletor
document.getElementById("seletor").addEventListener("change", function () {
    seletor = this.value
    console.log(seletor)

})
function jogar() {
    let numeroUsuario = Number(document.getElementById("numeroUsuario").value)
    console.log(seletor)
    let max = 10
    let min = 0
    let numeroMaquina = Math.round(Math.random() * (max - min) + min)
    console.log(`Numero maquina ${numeroMaquina}`)
    console.log(`Numero Usuario ${numeroUsuario}`)

    let resultado = numeroMaquina + numeroUsuario
    if (seletor === undefined || seletor === "escolha") {
        alert("[ERRO] Escolha entre ímpar ou par")

    } else if (numeroUsuario == "") {
        alert("[ERRO] Digite um numero")
    } else {

        if (resultado % 2 == 0 && seletor == "par" || resultado % 2 != 0 && seletor == "impar") {

            document.getElementById("resposta").innerHTML = `<p>O Resultado foi ${resultado} <br> Você Ganhou!!</p>`
            document.getElementById("resposta").style.backgroundColor = "green"


        } else {
            document.getElementById("resposta").innerHTML = `<p>O Resultado foi ${resultado} <br> Você Perdeu!!</p>`
            document.getElementById("resposta").style.backgroundColor = "red"

        }
    }



}



