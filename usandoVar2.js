var numero = 1; 

{
    numero = 2; // var tem escopo global, logo vai sobreescrever o valor acima
    console.log('dentro=' + numero)
}

console.log('fora=' + numero)