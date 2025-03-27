/*Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário. */



programa {
  funcao inicio() {

    //Declaraçao de variaveis
    real salario , anosServidos, porcentagem, bonus


    //Entrada de dados
    escreva("digite o salario : ")
    leia(salario)

    escreva("digite o tempo de serviço : ")
    leia(anosServidos)


    //Prossecamento de dados

    porcentagem = (salario * 5)/100

    se(anosServidos>=5){
      bonus = porcentagem + salario
      escreva("voce recebeu a bonificação : R$" ,bonus)
    }

  
    
    
    //Saida de dados
    
  }
}
