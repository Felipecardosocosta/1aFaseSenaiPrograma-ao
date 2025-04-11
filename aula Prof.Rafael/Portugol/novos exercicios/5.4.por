/*5.4 – Mano Juca palestreiro;
Faça um algoritmo que leia o nº da palestra que 
ele quer participar e
mostre o local e o horário que ela acontecerá.
Palestras disponíveis:
1 - Animações com Scratch, laboratório 305, 19h;
2 - Scratch para gamers, laboratório 512, 20h;
3 - JavaScript para leigos, laboratório 101, 19h;
4 - Tópicos avançados de JavaScript, laboratório 305, 20h;
5 - Vida e carreira, auditório, 21h.
 */



programa {
  funcao inicio() {
    
    
    //Declaraçao de variaveis
    real numeroPalestra
    
    //Entrada de dados
    escreva("Qual palestra voce deseja assistir:\n")
    escreva("1 - Animações com Scratch\n")
    escreva("2 - Scratch para gamers\n")
    escreva("3 - JavaScript para leigos\n")
    escreva("4 - Tópicos avançados de JavaScript\n")
    escreva("5 - Vida e carreira\n")
    escreva("Digite o dumero da palestra que voce deseja assistir: ")
    leia(numeroPalestra)


    //Prossecamento de dados //Saida de dados

    se(numeroPalestra == 1 ){
      escreva("\nAnimações com Scratch\nLocal: Laboratório 305\nHorario 19h;\n")
    }
    se(numeroPalestra == 2 ){
      escreva("\nScratch para gamers\nLocal: Laboratório 512\nHorario 20h;\n")
    }
    se(numeroPalestra == 3 ){
      escreva("\nJavaScript para leigos\nLocal: Laboratório 101\nHorario 19h;\n")
    }
    se(numeroPalestra == 4 ){
      escreva("\nTópicos avançados de JavaScript\nLocal: Laboratório 305\nHorario 20h;\n")
    }
    se(numeroPalestra == 5 ){
      escreva("\nVida e carreira\nLocal: Auditório\nHorario 21h;\n")
    }
    
    se(numeroPalestra == 0 ou numeroPalestra>= 6){
      escreva("\nPalestra nao identificada\n\n ")
    }


    
  }
}
