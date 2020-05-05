function rand({min = 0, max = 1000}){ //aqui atribuiu um valor padrão
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand()) // neste caso da erro pq o descruturing tenta tirar informação de um null