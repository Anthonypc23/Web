let a = 7;
let b = 94;
let temp = 0;
// depois da troca ... a = 94 e b = 7

console.log("a = "+a);
console.log("b = "+b);

console.log("\n TROCA \n");

temp = a;
a = b;
b = temp;

console.log("a = "+a);
console.log("b = "+b);

// solução do professor

console.log("\n solução do professor \n");

[a,b] = [b,a];

console.log("a = "+a);
console.log("b = "+b);

