/*5.7// 
O albergue utilizas faixas de preço de acordo com o número de diárias
Até 5 diárias, o preço por diária é R$100,00;
De 6 a 10 diárias, R$90,00 por dia;
A partir de 11 dias, sai R$80,00 por dia;
Outros fatos relevantes para determinar o valor da conta:
- Ele acabou ganhando um desconto a mais de 10% do valor total porque
teve um “envolvimento emocional” com a moça que trabalha no balcão;
- Quando ele abriu a carteira pra pagar, a moça viu que ele tem a
carteirinha da Associação dos motoristas do Uber de Palhoça, entidade
com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
de desconto;
- Ele se passou e vai pagar multa de R$150 por danos materiais.
Criar um programa que lê o número de dias que ele vai ficar no albergue
e apresente o valor final da conta e sua composição (os detalhes,
pagamentos, descontos...);
 */

programa {
  funcao inicio() {
    
    //descriçao de variaveis

    inteiro diarias 
    real valorDiarias, desconto10Porcento = 0.1 , desconto15Porcento =0.15 , multa = 150
    real valorConta , valorTotalDiarias, valorDescontoEnvolvimento , valorDescontoCarteirinha, valorPagarParcial, valorPagarComMulta
    real valorDescontoTotal, valorSemDesconto
    
    //entrada de dados
    escreva("Digite o numero de diarias: ")
    leia(diarias)

    limpa()

    //Processamento de dados
    se (diarias <= 5 ){
      valorDiarias = 100
    }
    
    se(6 > diarias <10){
      valorDiarias = 90
    }
    se(diarias >11){
      valorDiarias = 80
    }

    valorTotalDiarias = valorDiarias * diarias

    valorDescontoEnvolvimento = valorTotalDiarias * desconto10Porcento

    valorDescontoCarteirinha = valorTotalDiarias * desconto15Porcento

    valorPagarParcial = valorTotalDiarias - valorDescontoEnvolvimento - valorDescontoCarteirinha

    valorPagarComMulta = valorPagarParcial + multa

    valorDescontoTotal = valorDescontoCarteirinha + valorDescontoEnvolvimento

    valorSemDesconto = valorTotalDiarias + multa


    //saida de dados
    escreva("O valor sem desconto ficou de : R$" + valorSemDesconto +"\n")
    escreva("Seu desconto foi de: R$"+ valorDescontoTotal + "\n")
    escreva("Voce recebeu uma multa de: R$" + multa + "\n")
    escreva("O valor final para pagar ficou de: R$" + valorPagarComMulta+"\n")



    
  }
}
