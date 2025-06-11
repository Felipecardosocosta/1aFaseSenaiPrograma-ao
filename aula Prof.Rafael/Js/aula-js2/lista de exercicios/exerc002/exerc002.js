const bancoDados = localStorage

let cadastro = JSON.parse(bancoDados.getItem("cadastro")) || []
console.log(cadastro);


inicializar()

 document.getElementById("idade").addEventListener("keypress", (event)=> {
    console.log(event.key);
    event.key === "Enter" ? VerificarParaCadastar() : false
 })
document.getElementById("senhaLogin").addEventListener("keypress", (event) =>{
    event.key === "Enter"? logar() : false
})
function salvarBanco() {
    
    bancoDados.setItem("cadastro", JSON.stringify(cadastro))
}
function VerificarParaCadastar(){
    let usuário = {
        nome: document.getElementById("nome").value,
        senha: document.getElementById("senha").value,
        idade: document.getElementById("idade").value,
        id: Date.now()
    }
    
    let verificarCadastro = cadastro.find(nome => nome.nome === usuário.nome)

    if (usuário.nome.length===0 ||usuário.senha.length===0 ||usuário.idade.length===0) {
        alert("Preencha todos os campos")
        
    } else {
        if(verificarCadastro === undefined) cadastarUser(usuário)
        else alert("Usuario ja cadastrado") 
    }
    
}
function cadastarUser(usuário) {
    cadastro.push(usuário)
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
    }else alert("usuário nao cadastrado")
    
}
function mostrarLogin() {
    esconderTodas()
    document.getElementById("login").style.display = "flex"
    document.getElementById("NomeLogin").focus()

    
}
function mostrarCadastro() {
    esconderTodas()
    document.getElementById("cadastro").style.display = "flex"
    document.getElementById("nome").focus()
    

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
    let usuarioLogado = cadastro.find(usuário=> usuário.logado === true)

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