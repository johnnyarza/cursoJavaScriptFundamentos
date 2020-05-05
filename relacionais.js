console.log('01)', '1' == 1)
console.log('02)', '1' === 1)// === significa estritamente igual. Neste caso dá false pq '1' é string e outro é number
console.log("03)", '3' != 3)
console.log("04)", '3' !== 3)// !== estritamente diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('07)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // neste caso faz comparação de referencia de memoria logo será falso
console.log('10)', d1 == d2)// neste caso tambem faz comparação de referencia de memoria logo será falso
console.log('11-1)', d1.getTime() === d2.getTime())// neste caso da true pq está comparando number
console.log('11-2)', d1.getTime() == d2.getTime())// neste caso da true pq está comparando number

console.log("12)", undefined == null)
console.log("13)", undefined === null)

// É recomendado utilizar === para evitar mistura entre tipo de variaveis
