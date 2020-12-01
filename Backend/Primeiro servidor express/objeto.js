let pessoa = {
    nome: "Ana Kely",
    sobrenome: "Lopes",
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
pessoa.nome = "Ana";
console.log(pessoa.nome);

let nome = "Bob";
let idade = 4;

let cachorro = {
    nome,
    idade,
}

console.log(cachorro.nome);

let carro = {
    modelo: "palio",
    ano: 1995,
}

let {modelo, ano} = carro; 

console.log(modelo, ano)