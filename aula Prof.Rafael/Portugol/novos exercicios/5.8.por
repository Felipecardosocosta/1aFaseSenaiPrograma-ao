/*5.8// Crie um programa que leia a idade de uma pessoa e diga se ela pode
votar em uma eleição ou não. As possibilidades são:
- Menores de 16 anos: não podem votar;
- Com 16 e 17: voto facultativo;
- De 18 a 65 anos: voto obrigatório;
- Maiores de 65: voto facultativo. */



programa {
  funcao inicio() {

    //declaraçao de variaveis
    inteiro idade
    
    
    
    //entrada de dados
    escreva("Digite a sua idade: ")
    leia(idade)

    // processamento de dados //saida de dados

    se(idade < 16){
      escreva("Voce não pode votar!!")
    }
    se(16 >=idade< 18 ou idade >=65){
      escreva("Seu é voto facultativo!!")
    }

    se(18 >=idade< 65){
      escreva("Voce não pode votar!!")
    }
    
    
    

    
    
    
    
  }
}
