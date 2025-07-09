// 10. Número Secreto
// Gere um número aleatório entre 1 e 10 e salve no localStorage.
// O usuário deve tentar adivinhar o número. Mesmo que ele
// feche o navegador, o número continua sendo o mesmo até ele
// acertar.


class NumeroSecreto{

constructor(){
    this.numeroSecrt = this.pesquisa()

}
gerandoNumero(){
    let min = 1
    let max = 10
    this.numeroSecrt= Math.round(Math.random()*(max-min)+min)
    this.salvandoNumero()
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
    return JSON.parse(localStorage.getItem("NumeroSecret"))||this.gerandoNumero()
}
mostrarResp(){
    let numero = Number(this.recebendoNumero().value)
    if (numero<=10 && numero>0) {
        let resposta = this.AnalizandoDados(numero)
        this.conteinerResposta().innerHTML=`${resposta}`
        resposta=== true ? this.gerandoNumero(): false
        
        
    }else alert("campo invalido")

}
conteinerResposta(){
   return document.getElementById("contResp")
}
AnalizandoDados(numero){
    
    return this.numeroSecrt === numero
}
}
let novoJogo = new NumeroSecreto()




