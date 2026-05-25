const ask = require('readline-sync');

// CRIAÇÃO DAS CLASSES EM OBJETOS
let wizard = {
    className: 'Wizard',
    health: 150,
    defense: 4,
    potion: 5,
    attack: attackWizard
}

let burglar = {
    className: 'Burglar',
    health: 200,
    defense: 7,
    potion: 4,
    attack: attackBurglar
}

let warrior = {
    className: 'Warrior',
    health: 230,
    defense: 5,
    potion: 3,
    attack: attackWarrior
}

let enemies = [
    {
        name: 'Ogro',
        health: 60,
        min: 7,
        max: 12,
        enemyAttack: enemyAttack
    },
    {
        name: 'Goblin',
        health: 50,
        min: 8,
        max: 10,
        enemyAttack: enemyAttack
    },
    {
        name: 'Necromancer',
        health: 60,
        min: 8,
        max: 14,
        enemyAttack: enemyAttack
    },
    {
        name: 'Gargula',
        health: 35,
        min: 20,
        max: 25,
        enemyAttack: enemyAttack
    },
    {
        name: 'Cavaleiro do Inferno',
        health: 50,
        min: 10,
        max: 15,
        enemyAttack: enemyAttack
    }
]

// ---------- FUNÇÕES ------------


// FUNÇÕES DE ATAQUE DAS CLASSES

function createCharacter() {

    let valid = false // variavel para controlar que o usuário digite uma opção de classe Válida
    let playerGenerated;
    let name;


    console.clear();

    while (!valid) {

        console.clear();

        console.log(`
\x1b[35m========================================================================================================================\x1b[0m
                                    \x1b[33m⚔️ SHADOWS OF BACKBERRY ⚔️\x1b[0m
\x1b[35m========================================================================================================================\x1b[0m

`);

        name = ask.question('\x1b[32mChoose your character`s name:\x1b[0m ');

        console.clear();

        console.log(`
\x1b[35m========================================================================================================================\x1b[0m
                                    \x1b[33m⚔️ SHADOWS OF BACKBERRY ⚔️\x1b[0m
\x1b[35m========================================================================================================================\x1b[0m

        \x1b[32mConfirm name ${name.toUpperCase()}?\x1b[0m

                \x1b[32m[1] - Yes\x1b[0m
                \x1b[32m[0] - Change name\x1b[0m

`);

        let choose = Number(ask.question());

        if (choose == 1) {
            valid = true;
        }
    }

    console.clear()

    valid = false;
    while (!valid) {

        console.clear()

        console.log(`
\x1b[35m╔══════════════════════╗\x1b[0m   \x1b[35m╔══════════════════════╗\x1b[0m   \x1b[35m╔══════════════════════╗\x1b[0m
\x1b[35m║\x1b[0m      \x1b[33m🧙 MAGE\x1b[0m         \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m      \x1b[33m🗡️  ROGUE\x1b[0m        \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m     \x1b[33m⚔️  WARRIOR\x1b[0m       \x1b[35m║\x1b[0m
\x1b[35m╠══════════════════════╣\x1b[0m   \x1b[35m╠══════════════════════╣\x1b[0m   \x1b[35m╠══════════════════════╣\x1b[0m
\x1b[35m║\x1b[0m \x1b[32mHealth:\x1b[0m 150          \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[32mHealth:\x1b[0m 200          \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[32mHealth:\x1b[0m 230          \x1b[35m║\x1b[0m
\x1b[35m║\x1b[0m \x1b[32mDefense:\x1b[0m 4           \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[32mDefense:\x1b[0m 7           \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[32mDefense:\x1b[0m 5           \x1b[35m║\x1b[0m
\x1b[35m║\x1b[0m \x1b[32mPotions:\x1b[0m 5           \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[32mPotions:\x1b[0m 4           \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[32mPotions:\x1b[0m 3           \x1b[35m║\x1b[0m
\x1b[35m║                      ║\x1b[0m   \x1b[35m║                      ║\x1b[0m   \x1b[35m║                      ║\x1b[0m
\x1b[35m║\x1b[0m \x1b[31mDamage:\x1b[0m 10 - 20      \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[31mDamage:\x1b[0m 5 - 15       \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[31mDamage:\x1b[0m 8 - 15       \x1b[35m║\x1b[0m
\x1b[35m║                      ║\x1b[0m   \x1b[35m║                      ║\x1b[0m   \x1b[35m║                      ║\x1b[0m
\x1b[35m║\x1b[0m \x1b[34mMaster of magic\x1b[0m      \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[34mFast and stealthy\x1b[0m    \x1b[35m║\x1b[0m   \x1b[35m║\x1b[0m \x1b[34mStrong and durable\x1b[0m   \x1b[35m║\x1b[0m
\x1b[35m╚══════════════════════╝\x1b[0m   \x1b[35m╚══════════════════════╝\x1b[0m   \x1b[35m╚══════════════════════╝\x1b[0m


\x1b[35m========================================================================\x1b[0m

            \x1b[33m${name.toUpperCase()}, CHOOSE YOUR CLASS\x1b[0m

                    \x1b[32m[1] MAGE\x1b[0m
                    \x1b[32m[2] ROGUE\x1b[0m
                    \x1b[32m[3] WARRIOR\x1b[0m

\x1b[35m========================================================================\x1b[0m
`);

        let option = Number(ask.question());


        switch (option) {
            case 1:
                playerGenerated = wizard;
                valid = true;
                break;
            case 2:
                playerGenerated = burglar;
                valid = true;
                break;
            case 3:
                playerGenerated = warrior;
                valid = true;
                break;
            default:
                console.log('\x1b[31mInvalid Option!\x1b[0m');
                ask.question('\x1b[33mPress ENTER to choose again!\x1b[0m ');
        }
    }



    console.clear()

    console.log(`
\x1b[35m==================================================\x1b[0m

                \x1b[33m${name.toUpperCase()}\x1b[0m

\x1b[32mClass chosen:\x1b[0m ${playerGenerated.className.toUpperCase()}

\x1b[34mHealth:\x1b[0m ${playerGenerated.health}

\x1b[36mDefense:\x1b[0m ${playerGenerated.defense}

\x1b[35mNumber of potions:\x1b[0m ${playerGenerated.potion}

\x1b[35m==================================================\x1b[0m
`);

    playerGenerated.playerName = name;
    ask.question('\x1b[33mPress ENTER to continue...\x1b[0m');
    return playerGenerated;
}

function spawnEnemy(enemies) {
    let index = Math.floor(Math.random() * enemies.length);

    console.log(`
    Inimigo da rodada: ${enemies[index].name}
    Vida: ${enemies[index].health}
    Ataque: ${enemies[index].min} ate ${enemies[index].max}
        `);
    ask.question('\x1b[33mPress ENTER to continue...\x1b[0m');

    return {...enemies[index]};
}

function attackWizard() { // Dano entre 10 e 20
    let damage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    return damage;
}

function attackBurglar() { // Dano entre 5 e 15
    let damage = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    return damage;
}

function attackWarrior() { // Dano entre 8 e 15
    let damage = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
    return damage;
}

function enemyAttack(enemy) {
    return Math.floor(Math.random() * (enemy.max - enemy.min + 1)) + enemy.min;
}

function attack(character, enemy) {
    let characterDamage = character.attack();
    let enemyDamage = enemy.enemyAttack(enemy);


    
    console.clear()
    console.log(`Voce deu ${characterDamage} de dano em ${enemy.name}!`)
    enemy.health -= characterDamage;

    if (enemy.health > 0) {
        console.log(`${enemy.name} deu ${enemyDamage} de dano em voce!`)
        character.health -= enemyDamage;
    } else {
        console.log('Seu golpe foi letal!')
    }
}

function defense(character, enemy) {
    console.clear()
    console.log('Defesa ativada! o dano do inimigo será recebido pela metade!')
    let characterDamage = character.attack();
    let enemyDamage = (enemy.enemyAttack(enemy));

    console.log(`Voce deu ${characterDamage} de dano em ${enemy.name}!`)
    enemy.health -= characterDamage;

    console.log(`${enemy.name} deu ${enemyDamage} de dano em voce, mas com sua defesa, o dano recebido foi ${Math.floor(enemyDamage / 2)}`)
    character.health -= (Math.floor(enemyDamage / 2));
}

function usePotion(character) {

    console.clear();
    if (character.potion > 0) {

        character.health += 30;
        character.potion--;

        console.log(`
\x1b[35m==================================================\x1b[0m

        \x1b[32m🧪 You used a magical potion!\x1b[0m

        \x1b[34m+30 Health Points\x1b[0m

        \x1b[36mCurrent Health:\x1b[0m ${character.health}

        \x1b[31m-1 Potion from inventory\x1b[0m

\x1b[35m==================================================\x1b[0m
`);
    

    } else {

        console.log(`
\x1b[35m==================================================\x1b[0m

        \x1b[31m❌ You have no potions left!\x1b[0m

\x1b[35m==================================================\x1b[0m
`);
    }
}

// função que vai receber um array de INIMIGOS e retornar o OBJETO do inimigo escolhido

function combatMenu() { //Mostrar as opções do turno do jogador.

    let valid = false;


    while (!valid) {

        console.log(`
    Action against the enemy:
    1 - Attack
    2 - Defend
    3 - Use Potion`)
        let option = Number(ask.question());
        switch (option) {
            case 1:
                valid = true;
                return 1
                break;
            case 2:
                valid = true;
                return 2
                break;
            case 3:
                valid = true;
                return 3;
                break;
            default:
                console.clear()
                console.log("invalid Option!");
                ask.question('Press ENTER for return to options...')
                break;
        }
    }
}

function startCombat(character, enemy) {


    console.clear();
    console.log(`Combat between ${character.playerName} and ${enemy.name} STARTED!`);

    while (character.health > 0 && enemy.health > 0) {

        console.log(`
========================
${character.playerName}: ${character.health} HP
${enemy.name}: ${enemy.health} HP
Pocoes: ${character.potion}
========================
`);

        let option = combatMenu(); // menu de ações

        switch (option) {

            case 1:
                attack(character, enemy);
                break;

            case 2:
                defense(character, enemy)
                break;

            case 3:
                usePotion(character);
                break;
        }

        ask.question('Press ENTER para continuar...');
        console.clear();
    }

    if (character.health <= 0) {
        console.log('YOU DIE!');

    } else if (qtdeEnemies < 5) {

        qtdeEnemies++;

        console.log(`${enemy.name} foi derrotado!`);
        if (qtdeEnemies < 5) {
            console.log(`Ainda faltam ${5 - qtdeEnemies}`)
        }
        ask.question('Press ENTER para continuar...');
    }
    if (qtdeEnemies === 5) {
        console.log('Todos os inimigos da sua jornada foram derrotados!')
        ask.question('Press ENTER para continuar...');
    }
}


let qtdeEnemies = 0;
let menu = 1

while (menu != 0 && qtdeEnemies < 5 ) {

    console.clear()

    console.log(`
\x1b[35m==================================================\x1b[0m
\x1b[33m           ⚔️ SHADOWS OF BACKBERRY ⚔️\x1b[0m
\x1b[35m==================================================\x1b[0m

            \x1b[32m[1] Start battle\x1b[0m

            \x1b[32m[2] About opponents\x1b[0m

            \x1b[32m[3] About the game\x1b[0m

\x1b[35m==================================================\x1b[0m
`);

    menu = Number(ask.question());

    switch (menu) {
        case 1:
            
            let character = createCharacter();
            console.log('O jogo Começou!');

            while (character.health > 0 && qtdeEnemies < 5) {

                console.clear();

                let enemy = spawnEnemy(enemies);

                startCombat(character, enemy);
            }

            if (character.health > 0) {
                console.log('\x1b[32mParabéns, você venceu o jogo!\x1b[0m');
                ask.question('press to continue..')
            } else {
                console.log('\x1b[31mGame Over!\x1b[0m');
                ask.question('Press ENTER to continue...')

                console.clear()
                console.log(`
                Do you want to play again?
                    1 - YES
                    2 - NO
                    `)
                let decision = Number(ask.question())
                if (decision === 2){
                    menu = 0;

                }
            }
            break;

        case 2:

            console.clear()
            for (let enemy of enemies) {
                console.log(`
\x1b[35m==================================================\x1b[0m
\x1b[34mOponente:\x1b[0m ${enemy.name.toUpperCase()}
\x1b[34mVida:\x1b[0m ${enemy.health}
\x1b[31mDano:\x1b[0m ${enemy.min} ate ${enemy.max}
\x1b[35m==================================================\x1b[0m
`);
            }
            ask.question('press ENTER to return to MENU..')
            break;

        case 3:
            console.clear();
            console.log(`
\x1b[35m╔══════════════════════════════════════════════════════════════╗\x1b[0m
\x1b[35m║\x1b[0m                    \x1b[34m⚔️  ABOUT THE GAME ⚔️\x1b[0m                       \x1b[35m║\x1b[0m
\x1b[35m╚══════════════════════════════════════════════════════════════╝\x1b[0m

\x1b[34mBlackberry War\x1b[0m is a terminal RPG where you must survive
dangerous battles and defeat powerful enemies.

\x1b[35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m

You can choose between three classes:

\x1b[32m⚔️  Warrior\x1b[0m  → High health and balanced damage.
\x1b[32m🧙 Mage\x1b[0m      → Powerful attacks but lower defense.
\x1b[32m🗡️  Thief\x1b[0m     → Fast and unpredictable attacks.

\x1b[35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m

To win the game, you must defeat
\x1b[31m5 randomly generated enemies\x1b[0m.

Each enemy has:
\x1b[31m• Different health\x1b[0m
\x1b[31m• Different attack damage\x1b[0m
\x1b[31m• Unique combat difficulty\x1b[0m

\x1b[35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m

During battles you can use special actions:

\x1b[35m⚔️  Attack\x1b[0m
Deal random damage based on your class.

\x1b[35m🛡️  Defense\x1b[0m
Reduce the enemy attack damage by half.

\x1b[35m🧪 Potion Use\x1b[0m
Recover +30 HP during battle.

\x1b[35m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\x1b[0m

`);
            ask.question('press ENTER to return to MENU..')
            break;

        default:
            ask.question('Invalid Option, press ENTER to return to MENU..')
            break;
    }
}







