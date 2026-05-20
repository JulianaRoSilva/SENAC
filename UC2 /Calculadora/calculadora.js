const ask = require('readline-sync');

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

function resto(num1, num2) {
    return num1 % num2;
}


const valor = Number(ask.question(`
 _____________________
|  _________________  |
| |              0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | 0 | . | = | | / | |
| |___|___|___| |___| |
|_____________________|

OPCOES DE OPERACOES
    1 - Somar
    2 - Subtracao
    3 - Multiplicaco
    4 - Divisao
    5 - Resto

Opcao desejada: 
    `));

console.clear();

if (valor <= 5) {
    // console.log('Sugestão: digite numeros de um digito que o resultado de 1 digito tambem!!')
    const num1 = Number(ask.question('Digite o primeiro numero: '))
    const num2 = Number(ask.question('Digite o segundo numero: '))

    console.clear();

    function mostrarCalculadora(conta, resultado, Operacao) {
    console.log(`
${Operacao}
_______________________
|   _________________   |
|  |           ${conta} |  |
|  |               ${resultado} |  |
|  |_________________|  |
|   ___ ___ ___   ___   |
|  | 7 | 8 | 9 | | + |  |
|  |___|___|___| |___|  |
|  | 4 | 5 | 6 | | - |  |
|  |___|___|___| |___|  |
|  | 1 | 2 | 3 | | x |  |
|  |___|___|___| |___|  |
|  | 0 | . | = | | / |  |
|  |___|___|___| |___|  |
|______________________ |
`);
}

    switch (valor) {
        case 1: {
            let conta = `${num1} + ${num2}`;
            let resultado = soma(num1, num2);
            mostrarCalculadora(conta, resultado, 'SOMA')
            break
        }
        case 2: {
            let conta = `${num1} - ${num2}`;
            let resultado = subtracao(num1, num2);
            mostrarCalculadora(conta, resultado, 'SUBTRACAO')
            break
        }
        case 3: {
            let conta = `${num1} * ${num2}`;
            let resultado = multiplicacao(num1, num2);
            mostrarCalculadora(conta, resultado,'MULTIPLICACAO')
            break
        }
        case 4: {
            let conta = `${num1} / ${num2}`;
            let resultado = divisao(num1, num2);
            mostrarCalculadora(conta, resultado, 'DIVISAO')
            break
        }
        case 5: {
            let conta = `${num1} % ${num2}`;
            let resultado = resto(num1, num2);
            mostrarCalculadora(conta, resultado, 'RESTO')
            break
        }
    }
} else {
    console.log('Opção inválida!')
}