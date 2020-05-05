const prod1 = {}
prod1.nome = 'Johnny'
prod1.preco = 4444.44
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)
console.log('')

const prod2 = {
    nome : 'Camisa Polo',
    preco : 79.90
}

console.log(prod2)
console.log('')

const prod3 = {  // objetos aninhados
    nome : 'Camisa Polo',
    preco : 79.90,
    obj : { // so vai existir no contexto de prod 3
        blabla : { // so vai existir no contexto de prod 3
            blbla : 2
        }
    }
}

console.log(prod3)