const a =  {name: ' Teste'}

console.log(a)

const b = a // passagem de endereço

 b.name = "opa"

 console.log(b.name)

console.log(a)

let c = 3 
let d = c
d++ // = d + 1

 console.log(d)

 // <-------------------------------------->

let valor // nao inicializada
console.log(valor)

 valor = null // ausencia de valor
 console.log(valor)
//  console.log(valor.toString())// ERRO!!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evie atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)
produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)




