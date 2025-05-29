let bancoDeDados = localStorage

let listaCadastrada = JSON.parse(bancoDeDados.getItem("listaCadastrada")) || []

//salvando...
function salvarDados() {
    bancoDeDados.setItem("listaCadastrada", JSON.stringify(listaCadastrada))
}


//Display: flex/none
function AbrirHome() {
    document.getElementById("contHome").style.display = "flex"
    document.getElementById("contCadastro").style.display = "none"
    document.getElementById("contList").style.display = "none"

    document.getElementById("divMenu").style.backgroundColor = "rgb(231, 199, 95)"
    document.getElementById("divCadastro").style.backgroundColor = "rgba(240, 248, 255, 0)"
    document.getElementById("divLista").style.backgroundColor = "rgba(240, 248, 255, 0)"
}
function AbrirCadastro() {
    document.getElementById("contHome").style.display = "none"
    document.getElementById("contCadastro").style.display = "flex"
    document.getElementById("contList").style.display = "none"

    document.getElementById("divMenu").style.backgroundColor = "rgba(240, 248, 255, 0)"
    document.getElementById("divCadastro").style.backgroundColor = "rgb(231, 199, 95)"
    document.getElementById("divLista").style.backgroundColor = "rgba(240, 248, 255, 0)"

}
function AbrirLista() {
    mostraLista()
    document.getElementById("contHome").style.display = "none"
    document.getElementById("contCadastro").style.display = "none"
    document.getElementById("contList").style.display = "flex"

    document.getElementById("divMenu").style.backgroundColor = "rgba(240, 248, 255, 0)"
    document.getElementById("divCadastro").style.backgroundColor = "rgba(240, 248, 255, 0)"
    document.getElementById("divLista").style.backgroundColor = "rgb(231, 199, 95)"
}


//Entrada de dados
function entradaDados(event) {
    event.preventDefault()

    let infoCadastro = document.getElementById("infoCadastro")

    let nomeDigitado = document.getElementById("nome")

    let emailDigitado = document.getElementById("email")

    let telefoneDigitado = document.getElementById("telef")

    let verificarCadastroTelef = listaCadastrada.find(telefone => telefone.telefone === telefoneDigitado.value)

    let verificarCadastroEmail = listaCadastrada.find(email => email.email === emailDigitado.value)



    if (verificarCadastroTelef === undefined && verificarCadastroEmail === undefined) {
        listaCadastrada.push({ nome: nomeDigitado.value, email: emailDigitado.value, telefone: telefoneDigitado.value })
        salvarDados()
        infoCadastro.innerHTML = `<p>*Perfil Cadastrado</p>`
    } else {
        infoCadastro.innerHTML = `<p>*Perfil ja existente</p>`

    }
}


//leitura de dados


function mostraLista() {
    const contList = document.getElementById("contList")

    if (listaCadastrada.length == 0) {

    } else {
        listaCadastrada.forEach((element, index) => {

            contList.innerHTML += `<div class="usuario">
                <h4>Nome: ${element.nome} </h4>
                

                
                <h4>Email: ${element.email}</h4>


                <h4>Telefone: ${element.telefone}</h4>


                <button class="buttonEdit" onclick="editarUser(${index})">
                <i class="bi bi-pen-fill"></i>
                </button> 
                <button class="buttonDelet" onclick="deletarUser(${index})">
                <i class="bi bi-trash3"></i>
                </button>

            </div>`

        });
    }


}




