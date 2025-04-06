/*5.18 - STAR Ubers
PRIMEIRA ETAPA:
https://www.youtube.com/watch?v=lFM2QeZk_Xg
- Ler a distância da próxima corrida e dizer quanto tempo vai levar.
1 dado de Entrada: Distância (em quilômetros);
1 dado de Saída: Tempo de viagem (em segundos). */



programa {
  funcao inicio() {

    real distancia , tempoViagem ,velocidadeLuz = 300


    escreva("Diga qual é a distância da proxima corrida: ")
    leia(distancia)

    tempoViagem = distancia / velocidadeLuz

    escreva("O tempo que levara a proxima corrida é de: "+ tempoViagem + " segundos")


    
  }
}
