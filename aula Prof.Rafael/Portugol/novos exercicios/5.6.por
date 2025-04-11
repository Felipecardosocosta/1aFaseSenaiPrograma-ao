/*5.6// Mano Juca tá se aventurando em um novo gamezinho no celular dele.
  Ele tá se divertindo, mas não tem a menor ideia se tá
  mandando bem ou não.
  Crie um algoritmo que leia a pontuação que ele fez e diga
  como ele se saiu, sendo:
  - “Deu ruim”, se pontuação <= 10
  - “Tá... (Acrescente aqui uma frase motivacional)”, se
  pontuação > 10 e pontuação <= 100
  - “Supimpa!”, se pontuação > 100 e pontuação <= 200
  - MITOU!, se pontuação > 200 */





programa {
  funcao inicio() {

    //descriçao de variaveis

    real  pontos



    //entrada de dados
    escreva("escreva sua pontuaçao no jogo : ")
    leia(pontos)


    //Processamento de dados //saida de dados
    se(pontos <= 10){
      escreva("Deu ruim boca mole !!")
    }
    se(pontos > 10 e (pontos <= 100)){
      escreva("Ta quase chegando em algum lugar so nao vai piorar")
    }
    se(pontos >100 e (pontos <= 200)){
      escreva("Supimpa! Tamo compedindo ")
    }
    se(pontos >200){
      escreva("MITOU!")
    }



    





    
    
  }
}
