const cadastroVoos = [{
    origem: "",

    destino: "",

    preço: 0,

    duraçao: 0,

    horarioVoo: 0,

    dataVoo: "",

    id: 0

}]
function abrirCadastro() {
    document.getElementById("cadastros").style.display = "block"
    document.getElementById("listVoo").style.display = "none"
    document.getElementById("editarPainel").style.display = "none"
    document.getElementById("excluirPainel").style.display = "none"
}
function abrirLista() {
    document.getElementById("cadastros").style.display = "none"
    document.getElementById("listVoo").style.display = "block"
    document.getElementById("editarPainel").style.display = "none"
    document.getElementById("excluirPainel").style.display = "none"

}
function abrirEditar() {
    document.getElementById("cadastros").style.display = "none"
    document.getElementById("listVoo").style.display = "none"
    document.getElementById("editarPainel").style.display = "block"
    document.getElementById("excluirPainel").style.display = "none"

    
}
function abrirExcluir() {
    document.getElementById("cadastros").style.display = "none"
    document.getElementById("listVoo").style.display = "none"
    document.getElementById("editarPainel").style.display = "none"
    document.getElementById("excluirPainel").style.display = "block"

    
}

const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", cadastrar)


let id = 0

function cadastrar(event) {
    event.preventDefault();

    const origem = document.getElementById("orig")

    const destino = document.getElementById("dest")

    const preço = document.getElementById("preço")

    const duraçao = document.getElementById("temp")

    const horario = document.getElementById("horaVoo")

    const data = document.getElementById("diaVoo")
    console.log("Data text" ,new Date(data.value));

    const conclu = document.getElementById('resp')
   

    const validarDatVoo = validarData(data.value, horario.value)
    console.log(validarDatVoo)



    if (origem.value.length === 0 || destino.value.length === 0 || preço.value.length === 0 || duraçao.value.length === 0 || horario.length === 0 || data.length === 0) {
        conclu.innerHTML = "<p>*Preencha os campos corretamente</p>"


    } else if (validarDatVoo) {

        conclu.innerHTML = "<p>*Data invalida</p>"


    } else if (preço.value < 0) {
        alert("Preço invalido!!")
    } else if (duraçao.value <= 0) {
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
    console.log("Data do servidor " + dtAt);
    console.log("Dia do serv  " + dtAt.getDate());
    console.log("hora do serv " + dtAt.getHours());


    let hoDV = ho.split(':')[0]

    let hoMV = ho.split(':')[1]





    let dtDt = new Date(dtV)


    console.log("dtDT: " , dtDt);

    console.log("Dia usuario " + dtDt.getDate());


    let anoV = dtDt.getFullYear() < dtAt.getFullYear() ? true : false

    let mesV = dtDt.getMonth() < dtAt.getMonth() ? true : false


    let idaV = dtDt.getDate() < dtAt.getDate() ? true : false


    let hoV = hoDV < dtAt.getHours() ? true : false


    let MinV = hoMV < dtAt.getMinutes() ? true : false


    if (anoV) {
        console.log(anoV);

        return true

    } else if (mesV) {

        (mesV)
        return true

    } else if (idaV) {


        return true

    } else if (dtAt.getHours() == dtAt.getDate() && hoV) {
        return true
    }

    else if (dtAt.getHours() == dtAt.getDate() && hoV && MinV) return true

    else return false

}