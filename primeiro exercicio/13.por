/* Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
 Em seguida o número de votos do candidato X, o número de votos do candidato Y,
  total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). 
  Calcular e escrever o percentual que cada um representa em relação ao total de eleitores*/




programa {
  funcao inicio() {
    
    //Declaraçao de variaveis

    real numeroTotalVotos, candidato1, candidato2, votosBrancos
    real nulos, porcentagemCandidato1, porcentagemCandidato2, porcentagemNulos, porcentagemBrancos
    real porcentagem100Porcento = 100
    
    //Entrada de dados

    escreva("Digite o numero de votos da eleiçao : ")
    leia(numeroTotalVotos)

    escreva("Digite o numero de votos do candidato 1 : ")
    leia(candidato1)

    escreva("Digite o numero de votos do candidado 2 : ")
    leia(candidato2)

    escreva("Digite o numero de votos nulos : ")
    leia(nulos)


    escreva("Digite o numero de votos brancos : ")
    leia(votosBrancos)

    //Prossecamento de dados

    porcentagemCandidato1 = (candidato1/numeroTotalVotos)* porcentagem100Porcento
    porcentagemCandidato2 = (candidato2/numeroTotalVotos)* porcentagem100Porcento
    porcentagemBrancos = (votosBrancos/numeroTotalVotos)* porcentagem100Porcento
    porcentagemNulos = (nulos/numeroTotalVotos)* porcentagem100Porcento
    

    //Saida de dados

    escreva("As porcentagens das apurações são : ", "\nA porcentagemdo do cadidato numero 1 é : ", porcentagemCandidato1,"%","\nA porcentagem do candidato numero 2 é : ",porcentagemCandidato2,"%", "\nA porcentagemdo dos votos nulos sao : ", porcentagemNulos, "%","\nA porcentagemdo dos votos em brancos sao :",porcentagemBrancos,"%")




    





  }
}
