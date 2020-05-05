console.log('a=' + a)
var a = 2 // a variavel declarada sofre içamento, ou seja, sua declaração vai pra cima. Apenas a declaração, o valor n sofre içamento
console.log('a=' + a)

function test () {
    console.log('b=' + b)
    var b = 3 // içamento ocorre dentro do escopo
    console.log('b=' + b)
}

test()
//console.log('b=' + b)// este caso gera erro

console.log('c=' + c)
let c = 4 // let nao faz içamento
console.log('c=' + c)