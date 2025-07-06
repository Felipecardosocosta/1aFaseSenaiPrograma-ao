// 7. Visita Diária
// Mostre uma mensagem como “Bem-vindo de volta!” caso a
// última visita tenha sido no mesmo dia, e “Saudades de você!”
// se foi em outro dia. Use localStorage para salvar a data.

let dataAtual =new Date()

let diaAtua = dataAtual.toLocaleDateString()
console.log(diaAtua);
let ultimaVisita = localStorage.getItem("ultimaVisita")
console.log(ultimaVisita);

if (ultimaVisita) {

    if (diaAtua===ultimaVisita){
        console.log("Entrou");
        
    document.getElementById("msg").innerText="Bem-vindo de volta!"

} else{
    console.log("false");
    
    document.getElementById("msg").innerText="Saudades de você!"
    
}
    
} else document.getElementById("msg").innerText="Seja Bem Vindo"



localStorage.setItem("ultimaVisita", diaAtua)