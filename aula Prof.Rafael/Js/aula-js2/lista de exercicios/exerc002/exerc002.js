const bancoDados = localStorage
let usuarosCadastrados = JSON.parse(bancoDados.getItem("numeroUsuariosCadastrados"))|| 0
let cadastro = JSON.parse(bancoDados.getItem("cadastro")) || []

inicializar()

function salvarBanco() {
    bancoDados.setItem("numeroUsuariosCadastrados", JSON.stringify(usuarosCadastrados))
    bancoDados.setItem("cadastro", JSON.stringify(cadastro))
}
function VerificarParaCadastar(){
    let nomeUser = document.getElementById("nome").value
    let senha= document.getElementById("senha").value
    let idade = document.getElementById("idade").value
    let verificarCadastro = cadastro.find(nome => nome.nome === nomeUser)

    if (nomeUser.length===0 ||senha.length===0 ||idade.length===0) {
        alert("Preencha todos os campos")
        
    } else {
        if(verificarCadastro === undefined) cadastarUser(nomeUser,senha,idade)
        else alert("Usuario ja cadastrado") 
    }
    
}
function cadastarUser(nome , senha, idade) {
    usuarosCadastrados ++
    cadastro.push({
        usuarosCadastrados: usuarosCadastrados,
        nome: nome,
        senha: senha,
        idade: idade,
        logado: false
    })
    limparInput()
    salvarBanco()
    mostrarLogin()


    
}
function logar() {
    const nome =document.getElementById("NomeLogin").value
    const senha = document.getElementById("senhaLogin").value

    const cadastroUser = cadastro.find(cadastro => cadastro.nome === nome)
    console.log(cadastroUser);
    console.log(cadastro);
    
    if (cadastroUser != undefined) {
        if(cadastroUser.senha === senha)  {
            mostrarProdutos()
            cadastarUser.logado = true
           
        }else  alert("Senha errada")
    }else alert("usuario nao cadastrado")
    
}
function mostrarLogin() {
    esconderTodas()
    document.getElementById("login").style.display = "flex"
    
}
function mostrarCadastro() {
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
    

}
function inicializar(){
    mostrarLogin()
    
}

function mostrarProdutos() {
    esconderTodas()
    limparInput()
    document.getElementById("navBar").style.display = "flex"
    document.getElementById("produtos").style.display = "flex"
    
}
function limparInput() {
    document.getElementById("nome").value = ""
    document.getElementById("senha").value = ""
    document.getElementById("idade").value= ""

    document.getElementById("NomeLogin").value = ""
    document.getElementById("senhaLogin").value = ""

  
}
function esconderTodas() {
    document.getElementById("navBar").style.display = "none"
    document.getElementById("produtos").style.display = "none"
    document.getElementById("cadastro").style.display = "none"
    document.getElementById("login").style.display = "none"
    
}