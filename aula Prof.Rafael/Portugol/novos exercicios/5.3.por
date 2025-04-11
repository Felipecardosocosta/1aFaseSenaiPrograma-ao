/*5.3 – Mano Juca enfrenta o rodízio de carros de
São Paulo;
Faça um algoritmo que leia o último número
da placa do carro e mostre o
dia em que ele não pode rodar pela cidade de São Paulo.
Final 0 ou 1: não pode rodar na segunda-feira;
Final 2 ou 3: não pode rodar na terça-feira;
Final 4 ou 5: não pode rodar na quarta-feira;
Final 6 ou 7: não pode rodar na quinta-feira;
Final 8 ou 9: não pode rodar na sexta-feira.
 */


programa {
  funcao inicio() {

    
    //Declaraçao de variaveis
    inteiro numeroFinalPlaca
    
    
    //Entrada de dados
    escreva("digite o numero da placa do mazanza !! :")
    leia(numeroFinalPlaca)
    
    //Prossecamento de dados //Saida de dados
     se (numeroFinalPlaca == 0 ou numeroFinalPlaca == 1){
      escreva("não pode rodar na segunda-feira!!")
     }
     se (numeroFinalPlaca == 2 ou numeroFinalPlaca == 3){
      escreva("não pode rodar na terça-feira!!")
     }
     se (numeroFinalPlaca == 4 ou numeroFinalPlaca == 5){
      escreva("não pode rodar na quarda-feira!!")
     }
     se (numeroFinalPlaca == 6 ou numeroFinalPlaca == 7){
      escreva("não pode rodar na quinta-feira!!")
     }
     se (numeroFinalPlaca == 8 ou numeroFinalPlaca == 9){
      escreva("não pode rodar na sexta-feira!!")
     }
   

    
    
    
    
  }
}
