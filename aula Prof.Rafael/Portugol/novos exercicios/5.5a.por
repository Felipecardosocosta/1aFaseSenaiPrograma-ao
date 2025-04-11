/*5.5a// Mano Juca é meio tansinho, coitado. Disso 
vocês já sabem. Mas a
coisa tem piorado. Não consegue nem saber se passou...
Crie um algoritmo para ler duas notas no Mano Juca e 
calcular 
a média
dele, coitado...
Diga também se o malandro passou (a média no mobral dele 
é 7,0). */

programa {
  funcao inicio() {
    //Declaraçao de variaveis
    
    
    real nota1 , nota2 , media
    //Entrada de dados
    
    

    escreva("digite a primeira nota: ")
    leia(nota1)

    escreva("digite a segunda nota: ")
    leia(nota2)

    //Prossecamento de dados
    
   
    media = (nota1 +nota2 )/ 2

     //Saida de dados

    escreva ("sua media é de: " + media)

    se(media >=7){
      escreva("\nvoce foi aprovado!!")
    }
    se(media < 7){
      escreva("\nvoce foi reprovado!!")

    }
  }
}
