const ask = require('readline-sync');

console.clear();

function criarConta(user, password) {
    users.push([user, password]);

    console.clear();
    console.log('Cadastro realizado com sucesso!');
    ask.question('Pressione ENTER para voltar ao Menu.')
    // não precisa de return, porque a função só vai adicionar o usuario digitado no array de Usuários
}

function fazerLogin(verUser, verPassword) {
    
    // Laço para percorrer cada posição do array
    for (let us of users) {
        
        // Verificação se os valores digitados vão estar presentes no array atual verificado no for
        if (us[0] === verUser && us[1] === verPassword) {
            acessControl = true; // se o usuário estiverem corretos, troco a variável para TRUE
            console.clear()
            return `✅ Login realizado com sucesso! Bem vindo ${verUser}`;
            
        }
    }

    console.clear()
    return "Usuário ou senha incorretos. Digite novamente!";
}


let users = []; // variável de usuários que será alimentada conforme cadastro
let option = null; // variável para controlar a opção desejada no menu

/**
 * Variável utilizada para controlar:
 * - Continuação do loop quando o usuario e senha estiverem errados na hora do login
 * - Ao colocar login e senha corretos, não pular novamente para o menu, finalizar o projeto com uma mensagem de acesso
*/
let acessControl = false;

console.clear();

// controleAcesso com ! para inverter a posição da variavel e conseguir controlar melhor
while (option !== 0 && !acessControl) { 

    option = Number(ask.question(`
    +----------------------------------+
    |           PORTAL SENAC           |
    +----------------------------------+
    
    1 - Fazer Login
    2 - Cadastrar Usuario
    0 - Sair
    
    +----------------------------------+
    Opcao desejada: `));

    console.clear()

    switch (option) {
        case 1:
            if (users.length > 0) {
                while (!acessControl) {
                    console.log(`
+----------------------------------+
|          LOGIN SISTEMA 🔐        |
+----------------------------------+
                
                    `)
                    let us = ask.question(`Login: `);
                    let pass = ask.question(`Senha: `, { hideEchoBack: true });

                    
                    console.log(fazerLogin(us, pass));

                }
            } else {
                console.log('Não existe nenhum usuário cadastrado no sistema.' )
                ask.question('Pressione ENTER para retornar ao Menu!')
                console.clear();
            }
        break;

        case 2:
            console.log(`
+----------------------------------+
|      CADASTRO DE USUARIO 👤      |
+----------------------------------+
                    `);

            let cadUs = ask.question(`Login: `);
            let cadPass = ask.question(`Senha: `, { hideEchoBack: true });

            console.log(criarConta(cadUs, cadPass));
            console.clear()
            
            break;

        case 0:
            console.log('Saiu do sistema')
            break;

        default:
            console.log('Opcao invalida!')
    }
}