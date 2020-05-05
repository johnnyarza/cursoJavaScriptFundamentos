function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))// neste caso assumiu o primeiro como zero
console.log(rand([]))//neste caso assume valor padrão
console.log(rand())//vai dar erro