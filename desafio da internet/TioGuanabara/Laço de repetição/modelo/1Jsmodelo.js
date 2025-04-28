


function enviar() {
    let inicio = document.getElementById
        ("inicio")
    let fim = document.getElementById("fim")

    let passo = document.getElementById("passo")
    let resultado = document.getElementById("resultado")
    console.log(inicio)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value == 0) {
        alert("[ERRO!!] Preencha tudo para poder contar Lembre de que 0 passos é impossivel contar")

    } else {
        resultado.innerHTML = `Contando:<br>`
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pass = Number(passo.value)


        if (ini > fi) {
            for (let variavel = ini; variavel >= fi; variavel -= pass) {

                resultado.innerHTML += ` ${variavel} \u{1F91D}`
            }
            resultado.innerHTML += ` FIM \u{1F448}`
        } else {



            for (let variavel = ini; variavel <= fi; variavel += pass) {

                resultado.innerHTML += ` ${variavel}\u{1F448}`
                console.log(variavel)
            }
            resultado.innerHTML += ` FIM \u{1F91D}`
        }
    }

}

