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

// array de objetos de inimigos
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

// função que controla a geração do personagem de toda a rodada
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
                playerGenerated = { ...wizard };
                valid = true;
                break;
            case 2:
                playerGenerated = { ...burglar };
                valid = true;
                break;
            case 3:
                playerGenerated = { ...warrior };
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
    lock()
    return playerGenerated;
}

// Função que gera um inimigo aleatório do array de inimigos
function spawnEnemy(enemies) {
    let index = Math.floor(Math.random() * enemies.length);

    console.log(`
\x1b[38;5;208myou will battle with:\x1b[0m
\x1b[35m==================================================\x1b[0m
\x1b[32m    Enemy: ${enemies[index].name}\x1b[0m
\x1b[32m    Health: ${enemies[index].health}\x1b[0m
\x1b[32m    Attack: ${enemies[index].min} to ${enemies[index].max}\x1b[0m
\x1b[35m==================================================\x1b[0m
`);
    lock()

    return { ...enemies[index] };
}

// ========= 
// Funções de ataque de cada classe:
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

// ========= 

function enemyAttack(enemy) {
    return Math.floor(Math.random() * (enemy.max - enemy.min + 1)) + enemy.min;
}

function attack(character, enemy) {
    let characterDamage = character.attack();
    let enemyDamage = enemy.enemyAttack(enemy);



    console.clear()


    console.log('\x1b[34m===================================================\x1b[0m');
    console.log(`\x1b[34m⚔️  You dealt ${characterDamage} damage to ${enemy.name}! \x1b[0m`);
    console.log('\x1b[34m===================================================\x1b[0m');

    enemy.health -= characterDamage;

    if (enemy.health > 0) {

        console.log('\x1b[32m===================================================\x1b[0m');
        console.log(`\x1b[32m💥 ${enemy.name} dealt ${enemyDamage} damage to you! \x1b[0m`);
        console.log('\x1b[32m===================================================\x1b[0m');

        character.health -= enemyDamage;

    } else {

        console.log('\x1b[31m===================================================\x1b[0m');
        console.log('\x1b[31m☠️  Your attack was LETHAL! \x1b[0m');
        console.log('\x1b[31m===================================================\x1b[0m');

    }
}

// função de rodada defensiva. Vai devidir o dano recebido por 2
function defense(character, enemy) {

    if (character.defense > 0) {

        character.defense -= 1;

        console.clear();

        console.log('\x1b[34m============================================================\x1b[0m');
        console.log('\x1b[34m🛡️  Defense activated! Enemy damage will be reduced by half! \x1b[0m');
        console.log('\x1b[34m============================================================\x1b[0m');

        let characterDamage = character.attack();
        let enemyDamage = enemy.enemyAttack(enemy);

        console.log('\x1b[32m===================================================\x1b[0m');
        console.log(`\x1b[32m⚔️  You dealt ${characterDamage} damage to ${enemy.name}! \x1b[0m`);
        console.log('\x1b[32m===================================================\x1b[0m');

        enemy.health -= characterDamage;

        console.log('\x1b[31m===================================================\x1b[0m');
        console.log(`\x1b[31m💥 ${enemy.name} dealt ${enemyDamage} damage to you! \x1b[0m`);
        console.log(`\x1b[31m🛡️  Your defense reduced the damage to ${Math.floor(enemyDamage / 2)}! \x1b[0m`);
        console.log('\x1b[31m===================================================\x1b[0m');

        character.health -= Math.floor(enemyDamage / 2);

    } else {

        console.log(`
\x1b[35m===================================================\x1b[0m

        \x1b[31m❌ You have no defenses left!\x1b[0m

\x1b[35m===================================================\x1b[0m
`);

    }
}

// função para usar poção
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

//Mostrar as opções do turno do jogador.
function combatMenu() {

    while (true) {

        console.log(`
\x1b[33mAction against the enemy:\x1b[0m
\x1b[33m1 - Attack\x1b[0m
\x1b[33m2 - Defend\x1b[0m
\x1b[33m3 - Use Potion\x1b[0m
`);
        let option = Number(ask.question());
        switch (option) {
            case 1:
                valid = true;
                return 1;
            case 2:
                valid = true;
                return 2;
            case 3:
                valid = true;
                return 3;
            default:
                console.clear()
                console.log("invalid Option!");
                ask.question('Press ENTER for return to options...')
                break;
        }
    }
}

// função que controla todo o combate das rodadas do jogo
function startCombat(character, enemy) {


    console.clear();
    console.log(`\x1b[32mCombat between ${character.playerName} and ${enemy.name} STARTED!\x1b[0m`);

    while (character.health > 0 && enemy.health > 0) {

        console.log(`
\x1b[35m========================\x1b[0m
\x1b[34m${character.playerName}: ${character.health} HP\x1b[0m
\x1b[31m${enemy.name}: ${enemy.health} HP\x1b[0m
\x1b[35m========================\x1b[0m
\x1b[32mPotions: ${character.potion}\x1b[0m
\x1b[32mDefenses: ${character.defense}\x1b[0m
\x1b[35m========================\x1b[0m
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

        lock()
        console.clear();
    }

    if (character.health <= 0) {
        console.log('YOU DIED!');

    } else if (vitory < 5) {

        vitory++;

        console.log(`
\x1b[35m=====================================\x1b[0m
\x1b[32m        Defeated monster!\x1b[0m
\x1b[35m=====================================\x1b[0m
\x1b[33mYou won the battle against:\x1b[0m
\x1b[31m${enemy.name}\x1b[0m
\x1b[35m=====================================\x1b[0m
`);
        if (vitory < 5) {
            console.log(`\x1b[33mThere are still ${5 - vitory} battles left!\x1b[0m`);
        }
        ask.question('\x1b[33mPress ENTER for the next battle\x1b[0m');
    }
    if (vitory === 5) {
        console.log(`
\x1b[34m====================================================\x1b[0m
\x1b[32mALL THE ENEMIES IN YOUR JOURNEY HAVE BEEN DEFEATED!\x1b[0m
\x1b[34m====================================================\x1b[0m
`);
        ask.question('Press ENTER to continue...');
    }
}

// função para mostrar regras do jogo
function showGame() {
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
}

// função para travar o codigo e esperar o usuario apertar ENTER para continuar
function lock() {
    ask.question('\x1b[33mPress ENTER to continue...\x1b[0m');
}

function showEnemis() {
    for (let enemy of enemies) {
        console.log(`
\x1b[35m==================================================\x1b[0m
\x1b[34mEnemy:\x1b[0m ${enemy.name.toUpperCase()}
\x1b[34mHealth:\x1b[0m ${enemy.health}
\x1b[31mDamage:\x1b[0m ${enemy.min} to ${enemy.max}
\x1b[35m==================================================\x1b[0m
`);
    }
}

// variável para controlar vitórias do jogador sobre os mosntros. Precisa ser 5 vitórias para encerrar o código
let vitory = 0;

while (true) {

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

    let menu = Number(ask.question());

    switch (menu) {
        case 1:

            let character = createCharacter();

            while (character.health > 0 && vitory < 5) {

                console.clear();

                let enemy = spawnEnemy(enemies);
                startCombat(character, enemy);
            }

            if (character.health > 0) {
                console.log(`\x1b[33m
              ___________
             '._==_==_=_.'  
             .-\\:      /-.
            | (|:.      |) |
             '-|:.      |-'
               \\::.    /
                '::. .'
                  ) (
                _.' '._
        🏆     """"""""    🏆
========================================
          CHAMPION OF THE BATTLE
========================================
        
\x1b[0m`);
                lock()
                console.clear()

                console.log(`
\x1b[33m========================================\x1b[0m
\x1b[33m             PLAY AGAIN?               \x1b[0m
\x1b[33m========================================\x1b[0m

\x1b[33m[1] YES ⚔️\x1b[0m
\x1b[33m[2] NO  🚪\x1b[0m

\x1b[33m========================================\x1b[0m
`);

                let decision = Number(ask.question())
                if (decision === 2) {
                    process.exit();

                } else {
                    console.clear()
                    console.log('\x1b[31mGame Over!\x1b[0m');
                    lock()

                    console.log(`
\x1b[33m========================================\x1b[0m
\x1b[33m             PLAY AGAIN?               \x1b[0m
\x1b[33m========================================\x1b[0m

\x1b[33m[1] YES ⚔️\x1b[0m
\x1b[33m[2] NO  🚪\x1b[0m

\x1b[33m========================================\x1b[0m
`);

                    let decision = Number(ask.question())
                    if (decision === 2) {
                        process.exit();
                    }
                }
            }
            break;
        case 2:
            console.clear();
            showEnemis();
            ask.question('\x1b[33mPress ENTER to return to menu...\x1b[0m');
            break;
        case 3:
            console.clear();
            showGame();
            ask.question('press ENTER to return to MENU..')
            break;
        default:
            ask.question('Invalid Option, press ENTER to return to MENU..')
            break;
    }
}

