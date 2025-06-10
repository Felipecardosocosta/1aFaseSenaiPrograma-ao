const bancoDados = localStorage
let NumeroUsuariosCadastrados = JSON.parse(bancoDados.getItem("numeroUsuariosCadastrados"))|| 0
let cadastro = JSON.parse(bancoDados.getItem("cadastro")) || []

inicializar()

 document.getElementById("idade").addEventListener("keypress", function enter(event) {
    console.log(event.key);
    

    event.key === "Enter" ? VerificarParaCadastar() : false
    
    
 })

function salvarBanco() {
    bancoDados.setItem("numeroUsuariosCadastrados", JSON.stringify(NumeroUsuariosCadastrados))
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
    NumeroUsuariosCadastrados ++
    cadastro.push({
        NumeroUsuariosCadastrados: NumeroUsuariosCadastrados,
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

    let cadastroUser = cadastro.find(cadastro => cadastro.nome === nome)
    console.log(cadastroUser);
    console.log(cadastro);
    
    if (cadastroUser != undefined) {
        if(cadastroUser.senha === senha)  {
            mostrarProdutos()
            cadastroUser.logado = true
            salvarBanco()
           
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
function inicializar(){
    let usuarioLogado = cadastro.find(usuario=> usuario.logado === true)

    if(usuarioLogado != undefined){
        mostrarProdutos()
    }else{
        mostrarLogin()    
    }
}
function deslogar(){
    
    let deslogar = cadastro.find(deslogar=> deslogar.logado === true)


    if(deslogar!= undefined){
        deslogar.logado = false
        mostrarLogin()
        salvarBanco()
    }else alert("[ERRO]")
    
}