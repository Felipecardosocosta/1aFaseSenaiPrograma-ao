


function enviar() {

    let inicio = Number(document.getElementById
        ("inicio").value)
    let fim = Number(document.getElementById("fim").value)

    let passo = Number(document.getElementById("passo").value)
    let resultado = document.getElementById("resultado")

    if (inicio === 0 || fim === 0 || passo === 0) {
        alert("[ERRO!!] Preencha tudo para poder contar")

    } else {
        resultado.innerHTML = `Contando:<br>`

        for (let variavel = inicio; variavel < fim; variavel += passo) {

            resultado.innerHTML += ` ${variavel}`
            console.log(variavel)
        }

    }

}