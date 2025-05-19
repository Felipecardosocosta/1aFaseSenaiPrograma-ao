const cadastroVoos = [{
    origem: "",

    destino: "",

    preço: 0,

    duraçao: 0,

    horarioVoo: 0,

    dataVoo: ""

}]

function cadastrar() {

    const origem = document.getElementById("orig")

    const destino = document.getElementById("dest")

    const preço = document.getElementById("preço")

    const duraçao = document.getElementById("temp")

    const conclu = document.getElementById('resp')

    const horario = document.getElementById("horaVoo")

    const data = document.getElementById("diaVoo")



    if (origem.value.length === 0 || destino.value.length === 0 || preço.value.length === 0 || duraçao.value.length === 0) {
        alert("Preencha o campo corretamente")

    } else if (preço.value < 0) {
        alert("Preço invalido!!")

    } else if (false) {


    } else if (duraçao.value <= 0) {
        alert("Duração invalida")
    } else {

        cadastroVoos.push(
            {
                origem: origem.value,

                destino: destino.value,

                preço: preço.value,

                duraçao: duraçao.value,

                horarioVoo: 0,

                dataVoo: ""

            }
        )

        origem.value = ""
        destino.value = ""
        preço.value = ""
        duraçao.value = ""
        conclu.innerHTML = "*Voo foi cadastrado com sucesso*"


    }

}
