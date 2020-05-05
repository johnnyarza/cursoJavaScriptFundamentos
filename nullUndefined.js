let valor // não inicializada
console.log(valor)
//console.log(valor2) // valor 2 não foi declarado

console.log('')

valor = null // não tem nenhum valor e nem aponta para memoria
console.log(valor)
//console.log(valor.toString()) // da erro pq a variavel é nula

console.log('')

const produto = {}
console.log(produto)
console.log(produto.preco) // undefined
//console.log(produto.preco.a) // da erro pq tenta acessar algo undefined
produto.preco = 3.50
console.log(produto)

console.log('')

produto.preco = undefined // não é recomendado atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)