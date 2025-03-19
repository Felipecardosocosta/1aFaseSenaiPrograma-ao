/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos.
 O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. 
 Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos
  que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/


programa {
  funcao inicio() {

    //Declaraçao de variaveis
    
    real larguraMetros , comprimentoMetros , metroQuadrado ,quantidadeParaComprar, valorParaPagar, quandidadeCaixas
    
    //variaveis fixa 
    
    real custo = 45.50 , caixa = 60 ,azulejos = 120 
    
    
    //Entrada de dados
    
    escreva("Digite a largura da area em metros : ")
    leia(larguraMetros)

    escreva("Digite a comprimento da area em metros : ")
    leia(comprimentoMetros)

    
    
    //Prossecamento de dados

    metroQuadrado = larguraMetros * comprimentoMetros 

    quantidadeParaComprar = azulejos * metroQuadrado

    quandidadeCaixas = quantidadeParaComprar / caixa

    valorParaPagar = quandidadeCaixas * custo


    //Saida de dados

    escreva("A de caixas para compra é de : ", quandidadeCaixas, "\nO valor a ser pago é de : ",valorParaPagar)
    







  }
}
