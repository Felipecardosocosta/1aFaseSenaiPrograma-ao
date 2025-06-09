function verificarIdade(dataNaci){

    const idadeMinima = 18

    const dataAtual = new Date
    const mesAtual = dataAtual.getMonth() + 1
    const anoAtual = dataAtual.getFullYear()
    const diaAtual = dataAtual.getDate()

    const anoNacimentoUser = dataNaci.split("-")[0]
    const mesNacimentoUser = dataNaci.split("-")[1]
    const diaNacimentoUser = dataNaci.split("-")[2]
    
    
    let idadeUser = (anoNacimentoUser - anoAtual) * -1 
    console.log(typeof idadeUser);
    
    if(mesNacimentoUser >= mesAtual && diaNacimentoUser >= diaAtual){
        
         idadeUser ++ 

    }

    let verificaçãoIdade = idadeUser < idadeMinima ? true : false

    return verificaçãoIdade

}


let validar = verificarIdade("2001-06-07")
console.log(validar);
