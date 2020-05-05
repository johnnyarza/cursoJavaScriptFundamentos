var numero = 1

{
    let numero = 2
    console.log('dentro=' + numero) // o let tem escopo, mesmo que seja apenas um bloco
}
console.log('fora=' + numero)