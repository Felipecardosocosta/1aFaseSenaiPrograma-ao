/*5.17 - Imposto de renda do Paulo Guedev
Posta aí o programa que vai calcular o IR nos dois cenários
Como funciona?!
Vamos fazer um programa que leia o salário do MJ e diga quanto ele paga de imposto de renda hoje e
quanto pagará caso o Bolsonaro seja eleito.
Regra para o imposto atual: pesquisar na internet.
Regra para o Bolsonaro/Paulo Guedev: até 6 salários mínimos não paga nada, acima disso paga 20%. */


//8.472 = 6 

//Até 2.259,20	Isento	0,00
// De 2.259,21 até 2.826,65	7,5%	169,44
// De 2.826,66 até 3.751,05	15%	381,44
// De 3.751,06 até 4.664,68	22,5%	662,77
// Acima de 4.664,68	27,5%	896,00


programa {
  funcao inicio() {


    //descrição de variaveis

    real salarioMj, impostoRenda , 
    porcen20 = 0.20,
    porcen7 = 0.075,
    porcen15 = 0.15,
    porcen22= 0.2205,
    porcen27 = 0.2705

    //entrada de dados

    escreva("Digite seu salario em reais: R$")
    leia(salarioMj)

    //processamento de dados
    se(salarioMj > 8472){
      impostoRenda = salarioMj * porcen20

      escreva("O valor pago de imposto caso o Bolsonaro seja eleito é de : R$" + impostoRenda + "\n")

    }senao escreva("Caso o Bolsonaro seja eleito voce será isento\n")


    se(salarioMj < 2259.20 ){
      escreva("No governo atual voce esta isento")
    }senao se (salarioMj >2259.20 e salarioMj < 2826.65){
      impostoRenda = salarioMj * porcen7
      
      escreva("No governo atual voce esta pagando de imposto: R$" + impostoRenda)
    }senao se(salarioMj >2826.65 e salarioMj < 3751.05 ){
      impostoRenda = salarioMj * porcen15
      escreva("No governo atual voce esta pagando de imposto: R$" + impostoRenda)
    
    }senao se(salarioMj >3751.05 e salarioMj < 4664.68 ){
      impostoRenda = salarioMj * porcen22
      escreva("No governo atual voce esta pagando de imposto: R$" + impostoRenda)
    
    }senao se(salarioMj >4664.68 ){
      impostoRenda = salarioMj * porcen27
      escreva("No governo atual voce esta pagando de imposto: R$" + impostoRenda)
    }








    //saida de dados


    
  }
}
