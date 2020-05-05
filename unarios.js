let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // da true pq a escrita num2-- (pos fixado) é executado após a comparação. A escrita prefixada (++num1) é executada antes da comparação
console.log(num1 === num2)