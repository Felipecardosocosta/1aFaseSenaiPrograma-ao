//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
// e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos,
//em meses, em dias e em semanas.

programa {
  funcao inicio() {
    
    // Declaração de variáveis
    
    real anoNascimento, anoAtual, idade, meses, dias, doze = 12, trezentos = 365

    // Entrada de Dados

    escreva("Qual o ano do seu nascimento ? ")
    leia(anoNascimento)

    escreva("Qual o ano Atual ? ")
    leia(anoAtual)

    // Processamento, Cálculo, Lógica

    idade = anoAtual - anoNascimento
    meses = idade *  doze
    dias = meses * trezentos

    // Saída de Dados

    escreva("Sua idade em anos é : ", idade,"\nSua idade em meses é : ", meses, "\nSua idade em dias é : ", dias)










  }
}
