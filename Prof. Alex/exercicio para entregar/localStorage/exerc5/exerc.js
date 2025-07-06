let corSet = localStorage.getItem("usuarioCor") 
if (corSet) document.getElementById("body").style.backgroundColor = corSet

    
function enviar(cor) {
    document.getElementById("body").style.backgroundColor = cor
    localStorage.setItem("usuarioCor", cor)
    
}

