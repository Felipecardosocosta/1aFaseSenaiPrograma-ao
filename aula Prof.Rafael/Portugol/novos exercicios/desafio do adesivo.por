/*Para poder realizar o primeiro teste de demanda na propriedade, 
Heitor está contratando pessoas para desenvolver o protótipo do seu caixa de atendimento/pagamento. 
Este caixa perguntará às pessoas as quantidades colhidas de cada fruta e, de acordo com a tabela de preços, 
vai apresentar o recibo ao cliente e o valor a ser pago.
 */
/*Maçã
R$ 1,50

Laranja
R$ 2,00

Bergamota
R$ 1,00

Banana
R$ 1,20

Pera
R$ 0,50 */

programa {
  funcao inicio() {
    
    real maca = 1.5, laranja = 2.0 ,bergamota = 1.00 , banana =1.20 , pera = 0.50

    real qtdMaca , qtdLaranja , qtdBergamota , qtdBanana , qtdPera , valorTotalCompra

    real valorPegaMaca,valorPegaLaranja , valorPegaBergamota, valorPegaBanana , valorPegaPera


    escreva("Qual a quantidade de maça colhidas: ")
    leia(qtdMaca)
    escreva("Qual a quantidade de bergamota colhidas: ")
    leia(qtdBergamota)
    escreva("Qual a quantidade de laranjas colhidas: ")
    leia(qtdLaranja)
    escreva("Qual a quantidade de banana colhidas: ")
    leia(qtdBanana)
    escreva("Qual a quantidade de pera colhidas: ")
    leia(qtdPera)

    valorPegaMaca = qtdMaca * maca
    valorPegaBergamota = qtdBergamota * bergamota
    valorPegaLaranja = qtdLaranja * laranja
    valorPegaBanana = qtdBanana * banana
    valorPegaPera = qtdPera * pera
    valorTotalCompra = valorPegaBanana + valorPegaBergamota + valorPegaLaranja+valorPegaMaca+ valorPegaPera


    escreva("Seu recibo \n")
    escreva("A quantidade de Maça comprada foi: ", qtdMaca," O valor pago pelas maça foi de : R$",valorPegaMaca,"\n")
    escreva("A quantidade de Bergamota comprada foi: ", qtdBergamota," O valor pago pelas Bergamota foi de : R$",valorPegaBergamota,"\n")
    escreva("A quantidade de Laranjas comprada foi: ", qtdLaranja," O valor pago pelas Laranjas foi de : R$",valorPegaLaranja,"\n")
    escreva("A quantidade de Banana comprada foi: ", qtdBanana," O valor pago pelas Banana foi de : R$",valorPegaBanana,"\n")
    escreva("A quantidade de Pera comprada foi: ", qtdPera," O valor pago pelas Pera foi de : R$",valorPegaPera,"\n")
    escreva("O total a pagar é de: R$",valorTotalCompra,"\n")



    





    
  }
}
