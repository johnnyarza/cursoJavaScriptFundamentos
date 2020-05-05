function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)  // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}// objeto é par chave/valor normalmente seria comprarSorvete: comprarSorvete
                                                                    //, mas quando vc omite o identificador ele atribui o nome da constatne do objeto  igual
}

console.log(compras(true, true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false,false))