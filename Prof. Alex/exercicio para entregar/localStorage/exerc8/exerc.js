// 8. Última Visita
// Salve a data e hora da última visita do usuário e mostre-a ao
// entrar novamente na página: “Última visita: 29/06/2025 22:30”.

let dataAtual =new Date()

let diaAtua = dataAtual.toLocaleString()
console.log(diaAtua);

let ultimaVisita = localStorage.getItem("InfoUltimaVisita")

if (ultimaVisita) {
    document.getElementById("msg").innerText= `Última visita: ${ultimaVisita}`
    
}




localStorage.setItem("InfoUltimaVisita", diaAtua)