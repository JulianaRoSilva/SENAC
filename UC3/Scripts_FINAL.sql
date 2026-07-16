-- =========================================================
-- TABELA: Equipes
-- =========================================================

CREATE TABLE equipes (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(88) NOT NULL
);

-- =========================================================
-- TABELA: Jogador
-- =========================================================

CREATE TABLE jogador (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(88) NOT NULL,
	id_equipes INT,

	 CONSTRAINT fk_jogador_equipes
     FOREIGN KEY (id_equipes)
     REFERENCES equipes(id)

);

-- =========================================================
-- TABELA: Jogo
-- =========================================================

CREATE TABLE jogo (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(88) NOT NULL,
	genero VARCHAR(100)
);

-- =========================================================
-- TABELA: Campeonato
-- =========================================================

CREATE TABLE campeonato (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(88) NOT NULL,
	data_inicio DATE NOT NULL
);

-- =========================================================
-- TABELA: Partida
-- =========================================================

CREATE TABLE partida (
	id SERIAL PRIMARY KEY,
	id_jogo INT,
	id_campeonato INT,

	CONSTRAINT fk_partida_jogo
        FOREIGN KEY (id_jogo)
        REFERENCES jogo(id),
	
	CONSTRAINT fk_partida_campeonato
        FOREIGN KEY (id_campeonato)
        REFERENCES campeonato(id)

);

-- =========================================================
-- TABELA: Participação
-- =========================================================

CREATE TABLE participacao (
	id SERIAL PRIMARY KEY,
    pontuacao INT NOT NULL,
    id_partida INT,
	id_jogador INT,
		
    CONSTRAINT fk_participacao_partida 
	FOREIGN KEY (id_partida) 
	REFERENCES partida(id),
    
	CONSTRAINT fk_participacao_jogador 
	FOREIGN KEY (id_jogador) 
	REFERENCES jogador(id) 
);

-----------------------------------------------------------

INSERT INTO equipes(nome) VALUES
('SQL power'),('emanuGo'),('bombinhas'),
('só resenha'),('codex_tro'),('seled playes');

-- =========================================================

INSERT INTO jogador(nome, id_equipes) VALUES
('Rafael', 1),('Fofonka', 1),('Wellington', 1),('erick', 1),
('Antony', 2),('Emanuel', 2),('Erick', 2),
('Arthur', 3),('Lohan', 3),('Erick', 3),('Vitor', 3);
('Juliana', 4),('Marcia', 4),('Tauane', 4),('Mariana', 4),('Alison', 4),('Bianca', 4),
('Willian', 5),('Tomas', 5),('Bruno', 5),('Gabriel', 5),
('Silvio', 6),('Bruno', 6),('Dionatan', 6),('Vinicius', 6);

update jogador set id_equipes = 3 where id = 25

/*EQUIPES:
SQLPOWER: RAFA, FOFONKA, WELLINGTON, ERICK: 5   
BOMBINHAS: ARTUR, LOHAN, VITOR: 15
EMANUGO: ANTONY, ERICK, EMANUEL
CODEX-TRO: WILLIAM, GABRIEL, BRUNO, TOMAS
SELECT-PLAYERS: SILVIO, BRUNO, DIONATAN VINI
SÓ RESENHA: MARCIA, TAUANE, MARI, ALISSON,BIANCA,JULIANA*/

-- =========================================================

INSERT INTO jogo(nome,genero) VALUES
('Mortal Kombat','Luta'),
('Super Mario','Plataforma'),
('Street Fighter','Luta'),
('Bomber Man','Arcade');


-- =========================================================

INSERT INTO campeonato(nome, data_inicio)
VALUES ('Campeonato Retrô 2026','2026-07-10');


-- =========================================================
/*Partidas que vai contar o id do jogo, e o id do campeonato. 
Será o controle de qual jogo vai ser jogado pelos jogadores
*/ 

INSERT INTO partida(id_jogo, id_campeonato) VALUES
(1,1),(2,1),(3,1),(4,1);

-- =========================================================

-- consulta auxiliar
select jogador.id as idJogador, jogador.nome as jogador, equipes.id as idEquipe, equipes.nome as nomeEquipe from jogador
inner join equipes on jogador.id_equipes = equipes.id order by id_equipes

-- =========================================================
-- 1 primeira rodada: mario kart id 1
-- =========================================================

select * from participacao order by id_jogador

INSERT INTO participacao(id_partida,id_jogador,pontuacao) VALUES
-- GA
(1,4,5),(1,23,0),
(1,15,0),(1,5,5),
(1,25,5),(1,18,0),

-- GB
(1,2,0),(1,5,5),
(1,5,0),(1,8,5),
(1,2,5),(1,25,5),

-- SEMI FINAL
(1,17,5),(1,11,0),
(1,17,5),(1,24,0),
(1,16,5),(1,24,0),

-- FINAL
(1,11,50),(1,17,25); -- campea ju


-- =========================================================
-- 2 segunda rodada: Street Fighter
-- =========================================================



-- =========================================================
-- 3 terceira rodada: Bomber Man 
-- =========================================================

(codex_tro,5), (só sesenha,0)
(codex_tro,5), (selectplayers,0)
(só resenha,5),(selectplayers,0)

-- =========================================================
-- final
-- =========================================================

(codex_tro,5), (só resenha,0)
(codex_tro,25), (só resenha,50)