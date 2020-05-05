// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000    
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome :n , idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa // no caso de bemHumorado caso ele nao tenha sido definido anteriormete ele recebera valor padrão true
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero,cep}} = pessoa
console.log(logradouro,numero,cep)

const {conta: {ag, num}} = pessoa // neste caso da erro pq conta não existe, logo na hora que tenta tirar um variavel aninhada de um pai que nao existe da erro
