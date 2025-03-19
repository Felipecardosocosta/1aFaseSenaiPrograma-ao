/* Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, 
são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. 
No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás,
 mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio.
  Mostrar na tela o total cobrado pelo passeio.*/





programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real tempoPasseio , totalPagar ,calculoTempoMetrocubico,custoGas , totalPagar
    inteiro quantidadePessoas

    //Declaraçao de variaveis fixas
    
    inteiro metroCubicoR$ = 15 , cintoMinutos = 10 , taxaPessoa = 20 , metroCubicoGasto = 5

    
    //Entrada de dados

    escreva("Informe o tempo do passeio : ")
    leia(tempoPasseio)
    
    escreva("Informe a quandidade de passageiros sendo o limite 4 : ")
    leia(quantidadePessoas)


    
    //Prossecamento de dados

    calculoTempoMetrocubico = (tempoPasseio /metroCubicoGasto) * cintoMinutos

    custoGas = calculoTempoMetrocubico * metroCubicoR$

    totalPagar = custoGas + (taxaPessoa * quantidadePessoas)



    //Saida de dados

    escreva("O valor total do passeio é de : ", totalPagar, " R$")


    






    
  }
}
