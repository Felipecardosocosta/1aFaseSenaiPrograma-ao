//id="valor"
//id="tipo"
//id = "saldo"
let enviar = document.getElementById("enviar")
enviar.addEventListener("click", clicou)
let valorString = document.getElementById("valor")
let tipo = document.getElementById("tipo")
tipo.addEventListener("change", opcao)
let saldos = document.getElementById("saldo")
let seletor
let ganhos = 0
let despesa = 0
let saldo = 0
let valorDigitado = 0




function opcao() {

    seletor = this.value
    console.log(seletor)

}



function clicou() {
    valorDigitado = Number(valorString.value)

    if (seletor === "ganhos") {
        ganhos += valorDigitado

        saldo = ganhos - despesa

        let valorFormatado = saldo.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        saldos.innerHTML = `<strong>Seu saldo é ${valorFormatado}</strong>`
        console.log(saldo)
        if (saldo < 0) {

            saldos.style.backgroundColor = "rgb(187, 21, 21)"

        } else {
            saldos.style.backgroundColor = "rgb(103, 204, 2)"

        }


    } else if (seletor === "despesa") {

        despesa += valorDigitado

        saldo = ganhos - despesa

        let valorFormatado = saldo.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        saldos.innerHTML = `<strong>Seu saldo é ${valorFormatado}</strong>`
        console.log(saldo)
        if (saldo < 0) {

            saldos.style.backgroundColor = "rgb(187, 21, 21)"

        } else {
            saldos.style.backgroundColor = "rgb(103, 204, 2)"

        }








    }

}











