// 10. Número Secreto
// Gere um número aleatório entre 1 e 10 e salve no localStorage.
// O usuário deve tentar adivinhar o número. Mesmo que ele
// feche o navegador, o número continua sendo o mesmo até ele
// acertar.


class NumeroSecreto{

constructor(){
    this.numeroSecrt = this.pesquisa() || this.gerandoNumero()
    console.log(this.numeroSecrt);

}
gerandoNumero(){
    let min = 1
    let max = 10
    this.numeroSecrt = Math.round(Math.random()*(max-min)+min)
    this.salvandoNumero()
    return this.numeroSecrt
}
recebendoNumero(){
    return document.getElementById("numUser")
}
comparandoNumero(num){
    return num===this.numeroSecrt ? num: false
}
salvandoNumero(){
    localStorage.setItem("NumeroSecret",JSON.stringify(this.numeroSecrt))
}
pesquisa(){
    return JSON.parse(localStorage.getItem("NumeroSecret")) 
}
mostrarResp(){
    let numero = Number(this.recebendoNumero().value)
    console.log(this.numeroSecrt);
    
    if (numero<=10 && numero>0) {
        let resposta = this.AnalizandoDados(numero)
        this.conteinerResposta().innerText=`${resposta}`.toLocaleUpperCase()
        resposta=== true ? this.gerandoNumero(): false
    }else alert("campo invalido")

}
conteinerResposta(){
   return document.getElementById("contResp")
}
AnalizandoDados(numero){  
    console.log(this.numeroSecrt);
    
    return this.numeroSecrt === numero
}
apagaCampos(){
    this.conteinerResposta().innerText = ""
    this.recebendoNumero().value = ""
}
}
let novoJogo = new NumeroSecreto()


document.getElementById("numUser").addEventListener("keypress",function (key) {

    key.key === "Enter"? novoJogo.mostrarResp(): false
})

document.getElementById("numUser").addEventListener("input",function () {

    document.getElementById("contResp").innerText=""
})
