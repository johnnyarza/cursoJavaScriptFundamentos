/* var e let praticamente são iguais: ambas servem para declarar variaveis
Contudo let tem regras especificas e nao pode ser reclarada.
*/
var a = 3
let b = 4

var a = 30
b = 40 // let nao pode ser redeclarada

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// const c = 5 

c = 50 // const nao pode ser reatribuido

