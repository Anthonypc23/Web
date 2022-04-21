// função se retorno

 function imprimirSoma(a, b){

 console.log(a+b);

 }

 imprimirSoma(2,3)
 imprimirSoma(2)
 imprimirSoma(2,4,5,6,8,7,9,5,4,4)// e aplicado apenas para os parametros desiguinados pela função 
 imprimirSoma()

 // Função com retorno
 function soma(a,b = 1){
     return a+b

 }

console.log(soma(2,3));
console.log(soma(2));// a função gera soma pois um de seus parametros esta iniciaizado
