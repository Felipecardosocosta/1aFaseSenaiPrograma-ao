/*Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) 
comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e 
mostra na tela o total dos livros sem desconto e com desconto.*/


programa {
  funcao inicio() {
    //Declaraçao de variaveis
    
    real livro1, livro2, livro3, totalSemDesconto, totalComDesconto, desconto
    real porcentagemDesconto = 0.15
    
    //Entrada de dados
   
    escreva("Digite o valor do primeiro livro : ")
    leia(livro1)

    escreva("Digite o valor do segundo livro : ")
    leia(livro2)

    escreva("Digite o valor do três livro : ")
    leia(livro3)
    
    
    //Prossecamento de dados
    totalSemDesconto = livro1 + livro2 + livro3
    desconto = (livro1 + livro2 + livro3) * porcentagemDesconto
    totalComDesconto =  totalSemDesconto - desconto
    
    
    
    //Saida de dados
    escreva("O valor total da compra : ",totalSemDesconto, "R$" , "\nO valor da compra com desconto fica : ", totalComDesconto, "R$")
  







  }
}
