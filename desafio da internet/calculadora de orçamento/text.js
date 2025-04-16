//id="valor"
//id="tipo"
//id = "saldo"
let enviar = document.getElementById("enviar")
enviar.addEventListener("click", clicou)

tipo = document.getElementById("tipo")
tipo.addEventListener("change", opcao)

let seletor
let ganhos = 0
let despesa = 0
let saldo = 0
let historicoGanhos = []
let historicoDespesas = []







function opcao() {

    seletor = this.value
    console.log(seletor)

}



function clicou() {
    const valorDigitado = Number(document.getElementById("valor").value)
    let saldos = document.getElementById("saldo")
    const descriçao = document.getElementById("descriçao").value

    if (seletor === "ganhos") {
        ganhos += valorDigitado

        saldo = ganhos - despesa

        let valorFormatado = saldo.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })


        saldos.innerHTML = `<strong>Seu saldo é ${valorFormatado}</strong>`

        console.log(saldo)
        const hist = document.createElement("li");
        document.getElementById("cont").appendChild(hist)

        historicoGanhos.push(valorDigitado)
        hist.innerHTML = `${descriçao}:  +R$${valorDigitado}<hr>`


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
        //nao sei se é correto fazer desce jeito ...
        const hist = document.createElement("li");
        document.getElementById("cont").appendChild(hist)

        historicoDespesas.push(despesa)
        hist.innerHTML = `${descriçao}:   -R$${valorDigitado}<hr>`
        if (saldo < 0) {

            saldos.style.backgroundColor = "rgb(187, 21, 21)"

        } else {
            saldos.style.backgroundColor = "rgb(103, 204, 2)"

        }


    }


    console.log(historicoDespesas)
    console.log(historicoGanhos)


}












