const ask = require('readline-sync');


function criarUsuario(nome, idade, cidade, hobbies){
  return [nome, idade, cidade, hobbies]
}

function formatarHobbies(hobbies) {
  if (hobbies.length == 1){
    return hobbies
  } else {
     let ultimo = hobbies[hobbies.length - 1]; // pegando o ultimo elemento do array
     let restantes = hobbies.slice(0,-1); //slice pega os valores do array de certa posição ATÉ certa posição
     return restantes.join(", ") + ' e ' + ultimo;
  }
}

function gerarDescricao(usuario){
  const hobbies = formatarHobbies(usuario.at(-1));
  const frase = `${usuario[0]} tem ${usuario[1]} anos, mora em ${usuario[2]} e gosta de: ${hobbies}`;
  return frase;

}

function adicionaUsuario(usuarios, usuario){
  const allUsers = usuarios;
  usuarios.push(usuario);
  return allUsers
}

function gerarRelatorio(usuarios){
  return `Total de usuário cadastrados: ${usuarios.length}`
}

// -- -----------------

// demonstração sem usar readline sync
const usuarios = [];

let juliana = criarUsuario('juliana', 23, 'sao leo', ['games', 'futebol']);
let amanda = criarUsuario('amanda', 23, 'sao leo',['jardinagem', 'games']);
let leonardo = criarUsuario('leonardo barbosa', 24, 'canoas', ['pichar paredes']);


console.log(gerarDescricao(juliana))
console.log(gerarDescricao(amanda))
console.log(gerarDescricao(leonardo))

console.log(formatarHobbies(juliana.at(-1)))
console.log(formatarHobbies(amanda.at(-1)))

console.log(adicionaUsuario(usuarios, juliana));
console.log(adicionaUsuario(usuarios, amanda));
console.log(adicionaUsuario(usuarios, leonardo));

console.log(gerarRelatorio(usuarios))

// -- --------------------- --

// demonstração de código usando readline-sync
// declarando variáveis para serem utilizadas no código

// let nome;
// let idade;
// let cidade;
// let hobbies = [];

// nome = ask.question('Qual o seu nome? ');
// idade = Number(ask.question('Qual é a sua idade? '));
// cidade = ask.question('Em que cidade mora? ');

// // usando split pra separar os valores depois da virgula e map para tirar os espaços caso o usuário coloque
// listaHobbyes = ask.question('Digite seus hobbies: ')
// hobbies = listaHobbyes.split(', ').map(h => h.trim());

// let user = criarUsuario(nome, idade, cidade, hobbies)

// console.log(criarUsuario(nome, idade, cidade, hobbies));
// console.log(`Seus hobbies sao: ${formatarHobbies(hobbies)}`);
// console.log(gerarDescricao(user));
