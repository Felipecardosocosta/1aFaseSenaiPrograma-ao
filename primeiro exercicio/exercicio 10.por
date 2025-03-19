//Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação.
// Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês
// e no final mostre a média de horas por semana naquele mês.

programa {
  funcao inicio() {

    // Declaração de variáveis
    
    real horas, primeiraSemana, segundaSemana, terceiraSemana, quartaSemana,  media

    // Entrada de Dados

    escreva("Por favor insira a quandidade de horas da primeira semana : ")
    leia(primeiraSemana)

    escreva("Por favor insira a quandidade de horas da segunda semana : ")
    leia(segundaSemana)

    escreva("Por favor insira a quandidade de horas da terceira semana : ")
    leia(terceiraSemana)

    escreva("Por favor insira a quandidade de horas da quarta semana : ")
    leia(quartaSemana)

    // Processamento, Cálculo, Lógica

    media = (primeiraSemana + segundaSemana + terceiraSemana + quartaSemana) / 4

    // Saída de Dados

    escreva("A media de horas estudando programação é de : ", media, " Horas.")





  }
}
