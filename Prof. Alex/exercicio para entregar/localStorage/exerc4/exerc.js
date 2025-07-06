let nomeA = localStorage.getItem("BemVindo") 
if (nomeA) document.getElementById("cumprimento").innerText = `Olá, ${nomeA}`
else  document.getElementById("cumprimento").innerText = "Seja Bem Vindo"
    
function enviar() {
    let nome = document.getElementById("usuario")
    localStorage.setItem("BemVindo", nome.value)
    nome.value = ""
    
}

