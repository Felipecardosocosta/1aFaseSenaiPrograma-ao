/*Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza.
Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas).
Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h",
sendo X a velocidade.*/



programa {
  funcao inicio() {

    //Declaraçao de variaveis

    real distaciaPercorrida, tempoTrilha, velocidadeMedia

    
    //Entrada de dados
    
    escreva("Qual foi a distancia percorrida em quilometros : ")
    leia(distaciaPercorrida)

    escreva("Qual foi o tempo que durou a trilha : ")
    leia(tempoTrilha)



    
    //Prossecamento de dados

    velocidadeMedia = distaciaPercorrida / tempoTrilha

  
    //Saida de dados

    escreva("Sua média de velocidade durante essa trilha foi de : ",velocidadeMedia, "Km/h")




    
  }
}
