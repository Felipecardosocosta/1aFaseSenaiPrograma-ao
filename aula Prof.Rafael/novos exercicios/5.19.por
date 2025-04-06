/*5.18 - STAR Ubers
PRIMEIRA ETAPA:
https://www.youtube.com/watch?v=lFM2QeZk_Xg
- Ler a distância da próxima corrida e dizer quanto tempo vai levar.
1 dado de Entrada: Distância (em quilômetros);
1 dado de Saída: Tempo de viagem (em segundos). 

5.19 - SEGUNDA ETAPA:
O tempo de viagem já é apresentado em segundos...
Caso este tempo seja maior que um minuto, apresentar este valor também
em minutos;
Caso seja maior que uma hora, apresentar também em horas;
Caso seja maior que um dia, apresentar também em dias;
Caso seja maior que 30 dias, apresentar também em meses;
Caso seja maior que 12 meses, apresentar também em anos.
Deu, simples assim... */



programa {
  funcao inicio() {

    real distancia , tempoViagem ,velocidadeLuz = 300 ,tempoMinutos = 60 , tempoHoras = 3600 , tempoDias= 86400 , tempoMeses = 2592000 , 
    tempoAno = 31536000
    inteiro tempoViagemFinal



    escreva("Diga qual é a distância da proxima corrida: ")
    leia(distancia)

    tempoViagem = distancia / velocidadeLuz

    se (tempoViagem <= 60){
      se (tempoViagem ==1){
      escreva("O tempo que levara a proxima corrida é de: "+ tempoViagem + " Segundo")
      }senao escreva("O tempo que levara a proxima corrida é de: "+ tempoViagem + " Segundos")
    
    }senao se(tempoViagem > 60 e tempoViagem < 3600){
      tempoViagemFinal = tempoViagem / tempoMinutos
      se(tempoViagemFinal == 1){
        escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Minuto")
      
      }senao escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Minutos")
       
    }senao se (tempoViagem > 3600 e tempoViagem < tempoDias){
      tempoViagemFinal = tempoViagem / tempoHoras

      se(tempoViagemFinal == 1){
        escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Hora")
      
      }senao escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Horas")

    }senao se (tempoViagem > tempoDias e tempoViagem < tempoMeses){
      tempoViagemFinal = tempoViagem / tempoDias

      se(tempoViagemFinal == 1){
        escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Dia")
      
      }senao escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Dias")

    }senao se (tempoViagem > tempoMeses e tempoViagem < tempoAno){
      tempoViagemFinal = tempoViagem / tempoMeses

      se(tempoViagemFinal == 1){
        escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Mês")
      
      }senao escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Meses")

    }senao se (tempoViagem > 31536000){
      tempoViagemFinal = tempoViagem / tempoAno

      se(tempoViagemFinal == 1){
        escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Ano")
      
      }senao escreva("O tempo que levara a proxima corrida é de: "+ tempoViagemFinal + " Anos")

    }


    
  }
}
