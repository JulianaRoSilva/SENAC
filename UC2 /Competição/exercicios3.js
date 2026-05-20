const ask = require("readline-sync");

const alunos = [];

function cadastrarAluno(nome, nota1, nota2, nota3) {
    alunos.push([nome, nota1, nota2, nota3])
    // função não retorna nada nesse caso, vai apenas cadastrar
}


function calcularMedia(aluno) {
    let media = (aluno[1] + aluno[2] + aluno[3]) / 3;
    return media;
}

function verificarSituacao(media) {
    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
        } else if (media >= 5) {
        situacao = "Recuperacao";
        } else {
        situacao = "Reprovado";
        }
    return situacao;
}

function mostrarAluno(alunos){
    for(let i = 0; i < alunos.lenght; i++){
        console.log(`
            Aluno: ${alunos[i][0]}
            Notas: ${alunos[i][1]}, ${alunos[i][2]} e ${alunos[i][2]}
            Media: ${calcularMedia(alunos[i][1], alunos[i][2]), alunos[i][2]}
            Situação: ${verificarSituacao(calcularMedia(alunos[i][1], alunos[i][2]), alunos[i][2])}
            `
        )
    }
}


let aluno = ask.question('Digite o aluno: ')
let nota1 = ask.question('Digite a primeira nota: ')
let nota2 = ask.question('Digite a segunda nota: ')
let nota3 = ask.question('Digite a terceira nota:  ')

cadastrarAluno(aluno, nota1, nota2, nota3);
console.log();


