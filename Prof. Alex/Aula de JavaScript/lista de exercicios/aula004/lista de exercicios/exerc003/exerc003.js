const cadastroVoos = [{
    origem: "",

    destino: "",

    preço: 0,

    duraçao: 0,

    horarioVoo: 0,

    dataVoo: "",

    id: 0

}]

let id = 0

function cadastrar() {

    const origem = document.getElementById("orig")

    const destino = document.getElementById("dest")

    const preço = document.getElementById("preço")

    const duraçao = document.getElementById("temp")

    const horario = document.getElementById("horaVoo")

    const data = document.getElementById("diaVoo")

    const conclu = document.getElementById('resp')

    const validarDatVoo = validarData(data.value, horario.value)



    if (origem.value.length === 0 || destino.value.length === 0 || preço.value.length === 0 || duraçao.value.length === 0 || horario.length === 0 || data.length === 0) {
        alert("Preencha o campo corretamente")

    } else if (validarDatVoo) {

        conclu.innerHTML = "*Data invalida"



    } else if (preço.value < 0) {
        alert("Preço invalido!!")
    } else

        if (duraçao.value <= 0) {
            alert("Duração invalida")
        } else {

            id++

            cadastroVoos.push(
                {
                    origem: origem.value,

                    destino: destino.value,

                    preço: preço.value,

                    duraçao: duraçao.value,

                    horarioVoo: 0,

                    dataVoo: "",

                    id: id
                }
            )
            origem.value = ""
            destino.value = ""
            preço.value = ""
            duraçao.value = ""
            conclu.innerHTML = `*Voo n°${id} foi cadastrado`

        }

}

function validarData(dtV, ho) {

    let dtAt = new Date()
    console.log(dtAt);


    let hoDV = new Date(ho)

    let dtDt = new Date(dtV)

    let anoV = dtDt.getFullYear() < dtAt.getFullYear() ? true : false

    let mesV = dtDt.getMonth() < dtAt.getMonth() ? true : false

    let idaV = dtDt.getDate() < dtAt.getDate() ? true : false

    let hoV = hoDV.getHours() < dtAt.getHours() ? true : false

    let MinV = hoDV.getMinutes() < dtAt.getMinutes() ? true : false


    if (anoV) return true

    else if (mesV) return true

    else if (idaV) return true

    else if (hoV) return true

    else if (MinV) return true

    else return false

}