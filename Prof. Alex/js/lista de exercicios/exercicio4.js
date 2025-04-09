/*🛒 6. O Carrinho da Loja
História:
Uma loja só dá desconto se o cliente comprar mais de 3 itens ou se o valor total
for maior que R$ 100.
Desafio:
let quantidadeItens;
let valorTotal;
Mostre:
"Desconto aplicado!" ou
"Sem desconto dessa vez."
 */
let quantidadeItens
let valorTotal
let desconto
let valorFinal

quantidadeItens = prompt('Qual a quantidade de itens comprados: ')
valorTotal = prompt('Qual o valor total da compra: ')
desconto = valorTotal * 0.10
valorFinal = valorTotal - desconto

if(quantidadeItens >= 3 || valorTotal >=100){
    console.log('O desconto de '+ desconto +'R$ foi aplicado')
    alert('O desconto de R$'+ desconto +' foi aplicado\nO valor total ficou de R$'+ valorFinal)
}else {
    console.log('Sem desconto disponivel')
    alert('Sem desconto disponivel')
 }