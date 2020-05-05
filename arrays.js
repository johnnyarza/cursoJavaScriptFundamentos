const valores = [7.7,8.9,9.2,5.6]
console.log(valores)
console.log(valores[0],valores[3])
console.log(valores[4]) // como esta fora do array o resultado é undefined

valores[4] = 10
console.log(valores[4])

valores[6] = 3
console.log(valores)

console.log(valores.length)

valores.push({id:3}, false, null , 'teste')
console.log(valores)

console.log(valores.pop())  // retorna o ultimo numero do array e retira ele do array

console.log(valores)

console.log(typeof valores)

delete valores[0]
console.log(valores)
