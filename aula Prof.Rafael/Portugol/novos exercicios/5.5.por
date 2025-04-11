/*5.5// Mano Juca é meio tansinho, coitado. Disso vocês já sabem. 
Mas a coisa tem piorado. Um professor inventou de usar 
o tal do sistema de média ponderada, onde cada prova
 tem um valor (peso) diferente. 
 Nas ideia desse professor que não tem pena da 
 ausência de poder de processamento mental do Mano Juca 
cada prova tem o peso:
- Prova 1: peso 0.4;
- Prova 2: peso 0.6;
- Prova 3: peso 1.
Crie um algoritmo para ler as notas no Mano Juca e 
calcular a média dele, coitado...
Diga também se o malandro
 passou (a média no mobral dele é 7,0). */


programa {
  funcao inicio() {

     //Declaraçao de variaveis

    real prova1Peso = 0.4 , prova2Peso = 0.6, prova3Peso = 1
    real prova1 , prova2 , prova3
    real mediaNominalNota, mediaNominalPeso,medianominalFinal

    //Entrada de dados

    escreva("Digita a nota da prova numero 1: ")
    leia(prova1)
    
    escreva("Digita a nota da prova numero 2: ")
    leia(prova2)
    
    escreva("Digita a nota da prova numero 3: ")
    leia(prova3)
    
    //Prossecamento de dados

    mediaNominalNota = (prova1 * prova1Peso) + (prova2 * prova2Peso) +(prova3 * prova3Peso)
    mediaNominalPeso = (prova1Peso + prova2Peso + prova3Peso)
    medianominalFinal = mediaNominalNota / mediaNominalPeso
    


    //Saida de dados

    escreva("Sua media nominal é de: " +medianominalFinal + "\n")
    se(medianominalFinal == 7){
      escreva("Voce passou na risca abestado!!")
    }
    se(medianominalFinal>= 8){
      escreva("Voce foi aprovado!!")
    }
    se(medianominalFinal< 7){
      escreva("Voce foi reprovado mazanza!!")
    }



    
  }
}
