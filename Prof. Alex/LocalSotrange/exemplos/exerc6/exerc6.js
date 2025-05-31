let bancoDeDados = localStorage
let id = JSON.parse(bancoDeDados.getItem("id")) || 0
let listaCadastrada = JSON.parse(bancoDeDados.getItem("listaCadastrada")) || []

//salvando...
function salvarDados() {
    bancoDeDados.setItem("id", JSON.stringify("id"))
    bancoDeDados.setItem("listaCadastrada", JSON.stringify(listaCadastrada))


}
//Display: flex/none
function AbrirHome() {
    limparLista()
    document.getElementById("contHome").style.display = "flex"
    document.getElementById("contCadastro").style.display = "none"
    document.getElementById("contList").style.display = "none"

    document.getElementById("divMenu").style.backgroundColor = "rgb(231, 199, 95)"
    document.getElementById("divCadastro").style.backgroundColor = "rgba(240, 248, 255, 0)"
    document.getElementById("divLista").style.backgroundColor = "rgba(240, 248, 255, 0)"
}
function AbrirCadastro() {
    limparLista()
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
function esconderEdiçao() {
    document.getElementById("contEditar").style.display = "none"

}
//Entrada de dados
function entradaDados(event) {
    event.preventDefault()

    let infoCadastro = document.getElementById("infoCadastro")

    let nomeDig = document.getElementById("nome")

    let emailDig = document.getElementById("email")

    let telefoneDig = document.getElementById("telef")

    if (nomeDig.value.length === 0 || emailDig.value.length === 0 || telefoneDig.value.length === 0) {

        infoCadastro.innerHTML = `<p>*Preencha os dados</p>`

    } else if (verifDadosExist(telefoneDig.value)) {

        infoCadastro.innerHTML = `<p>*Telefone já cadastrado</p>`

    } else if (verifcarEmailExist(emailDig.value)) {

        infoCadastro.innerHTML = `<p>*Email já cadastrado</p>`

    } else cadastrarUsuario(nomeDig.value, emailDig.value, telefoneDig.value,)
}
//limparInpust
function limparInput() {


    document.getElementById("nome").value = ""

    document.getElementById("email").value = ""

    document.getElementById("telef").value = ""


    document.getElementById("nomeEditar").value = ""

    document.getElementById("telefEditar").value = ""

    document.getElementById("emailEditar").value = ""

}
//verificação telefone
function verifTelefExist(telef) {

    let verifCadasTelef = listaCadastrada.find(telefone => telefone.telefone === telef) === undefined ? false : true

    return verifCadasTelef

}
//verificação email
function verifcarEmailExist(emailDig) {
    let verifCadasEmail = listaCadastrada.find(email => email.email === emailDig) === undefined ? false : true

    return verifCadasEmail

}
//Cadastrar
function cadastrarUsuario(nome, email, telef) {

    id++
    listaCadastrada.push({ nome: nome, email: email, telefone: telef, id: id })
    salvarDados()

    document.getElementById("infoCadastro").innerHTML = `<p>*Perfil Cadastrado</p>`
    limparInput()



}
//Mostrar lista
function mostraLista() {
    const contList = document.getElementById("contList")

    if (listaCadastrada.length == 0) {

    } else {
        listaCadastrada.forEach((element, index) => {

            contList.innerHTML += `
            <div class="usuario" id="usuario${index}">

            <h4>Nome: ${element.nome} </h4>
            
            <h4>Email: ${element.email}</h4>
            
                <h4>Telefone: ${element.telefone}</h4>
                <div>
                <button class="buttonEdit" onclick="editarUser(${element.id})">
                <i class="bi bi-pen-fill"></i>
                </button> 
                <button class="buttonDelet" onclick="deletarUser(${index})">
                <i class="bi bi-trash3"></i>
                </button>
                </div>

                </div>`
        });
    }

}
//Limpar lista
function limparLista() {
    document.getElementById("contList").innerHTML = ""

}
//EditarCadastro
function editarUser(i) {

    let Cadastro = listaCadastrada.find(id => id.id === i)

    let conteinerEditar = document.getElementById("contEditar")

    conteinerEditar.style.display = "flex"

    conteinerEditar.innerHTML = `
    <div class="conteudoEditar">
            <form class = "editarForm">
            <div class="buttonX">
            <button onclick="cancelarEdit(event)" class="editarI">
            <i class="bi bi-x-square"></i>
            </button></div>
            
            <div>
            <label for="nomeEditar"></label>
            <input type="text" name="nome" id="nomeEditar" placeholder="Nome" value="${Cadastro.nome}" disabled></div>
            <div>
            <label for="emailEditar"></label>
            <input type="email" name="email" id="emailEditar" placeholder="Email" value="${Cadastro.email}"  required></div>
            <div>
            <label for="telefEditar"></label>
            <input type="number" name="telefone" id="telefEditar" value="${Cadastro.telefone}" placeholder="Telefone" required></div>

            <div id="infoEditar">
            </div>
            <input type="submit" id="SalvarEditar" value="Salvar" onclick="editarCadastro(event, ${i})">

        </form>
        </div>
    </div>    `

}
//Validando edição
function editarCadastro(event, id) {
    event.preventDefault()
    const infoEditar = document.getElementById("infoEditar")

    let cadastro = listaCadastrada.find(idtent => idtent.id === id)

    const telefEdit = document.getElementById("telefEditar")

    const emailEdit = document.getElementById("emailEditar")



    if (emailEdit.value.length === 0 || telefEdit.value.length === 0) {

        infoEditar.innerHTML = `<p>*Preencha os dados</p>`

    } else if (emailEdit.value !== cadastro.email) {


        if (verifcarEmailExist(emailEdit.value)) {

            infoEditar.innerHTML = `<p>*Email ja esta cadastrado em outro usuário </p>`

        } else if (telefEdit.value !== cadastro.telefone) {

            if (verifTelefExist(telefEdit.value)) {

                infoEditar.innerHTML = `<p>*Telefone ja esta cadastrado em outro usuário </p>`
            } else {

                salvarEdição(telefEdit.value, emailEdit.value, id)
            }


        } else salvarEdição(telefEdit.value, emailEdit.value, id)



    } else if (telefEdit.value !== cadastro.telefone) {


        if (verifTelefExist(telefEdit.value)) {

            infoEditar.innerHTML = `<p>*Telefone ja esta cadastrado em outro usuário </p>`

        } else salvarEdição(telefEdit.value, emailEdit.value, id)

    } else {

        esconderEdiçao()
        limparInput()


    }

}
//salvar alteração da ediçao
function salvarEdição(telef, email, id) {

    let cadastro = listaCadastrada.find(idet => idet.id === id)



    cadastro.email = email

    cadastro.telefone = telef

    salvarDados()
    limparInput()
    esconderEdiçao()
    limparLista()
    mostraLista()

}
//Deletar Cadastro
function deletarUser(index) {

    let removerDiv = document.getElementById(`usuario${index}`)

    document.getElementById("contList").removeChild(removerDiv)
    listaCadastrada.splice(index, 1)

    salvarDados()

}
function cancelarEdit(event) {
    event.preventDefault()

    limparInput()
    esconderEdiçao()

}






