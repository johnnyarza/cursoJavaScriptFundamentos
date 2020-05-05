//funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,2)
imprimirSoma(2)
imprimirSoma(10,2,3,4,5,)
imprimirSoma()


//funcao com retorno
function soma (a, b = 1){ // aqui definiu-se o valor padrão para b
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())