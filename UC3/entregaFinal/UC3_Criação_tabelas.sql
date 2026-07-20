-- CRIAÇÃO DE TABELAS

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
	idEquipes INT,

	 CONSTRAINT fk_jogador_equipes
     FOREIGN KEY (idEquipes)
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
	dataInicio DATE NOT NULL
);

-- =========================================================
-- TABELA: Partida
-- =========================================================

CREATE TABLE partida (
	id SERIAL PRIMARY KEY,
	idJogo INT,
	idCampeonato INT,

	CONSTRAINT fk_partida_jogo
        FOREIGN KEY (idJogo)
        REFERENCES jogo(id),
	
	CONSTRAINT fk_partida_campeonato
        FOREIGN KEY (idCampeonato)
        REFERENCES campeonato(id)

);

-- =========================================================
-- TABELA: Participação
-- =========================================================

CREATE TABLE participacao (
	id SERIAL PRIMARY KEY,
    pontuacao INT NOT NULL,
    idPartida INT,
	idJogador INT,
		
    CONSTRAINT fk_participacao_partida 
	FOREIGN KEY (idPartida) 
	REFERENCES partida(id),
    
	CONSTRAINT fk_participacao_jogador 
	FOREIGN KEY (idJogador) 
	REFERENCES jogador(id) 
);

-- INSERÇÃO DE VALORES NAS TABELAS

INSERT INTO equipes(nome) VALUES
('SQL power'),('emanuGo'),('bombinhas'),
('só resenha'),('codex_tro'),('seled playes');

-- =========================================================

INSERT INTO jogador(nome, idEquipes) VALUES
('Rafael', 1),('Fofonka', 1),('Wellington', 1),('erick', 1),
('Antony', 2),('Emanuel', 2),('Erick', 2),
('Arthur', 3),('Lohan', 3),('Erick', 3),('Vitor', 3),
('Juliana', 4),('Marcia', 4),('Tauane', 4),('Mariana', 4),('Alison', 4),('Bianca', 4),
('Willian', 5),('Tomas', 5),('Bruno', 5),('Gabriel', 5),
('Silvio', 6),('Bruno', 6),('Dionatan', 6),('Vinicius', 6);


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

INSERT INTO campeonato(nome, datainicio)
VALUES ('Campeonato Retrô 2026','2026-07-10');


-- =========================================================
/*
Partidas que vai contar o id do jogo, e o id do campeonato. 
Será o controle de qual jogo vai ser jogado pelos jogadores
*/ 

INSERT INTO partida(idJogo, idCampeonato) VALUES
(1,1),(2,1),(3,1),(4,1);

-- =========================================================

-- consulta auxiliar
select jogador.id as idJogador, jogador.nome as jogador, equipes.id as idEquipe, equipes.nome 
as nomeEquipe from jogador
inner join equipes on jogador.idEquipes = equipes.id 
order by jogador.nome

-- =========================================================
-- 1 primeira rodada: mario kart id 1
-- =========================================================

INSERT INTO participacao(idPartida,idJogador,pontuacao) VALUES
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
(1,17,50),(1,11,25); -- campea ju


-- =========================================================
-- 2 segunda rodada: Street Fighter 2
-- =========================================================
select * from participacao

INSERT INTO participacao(idPartida,idJogador,pontuacao) VALUES
-- GA
(2,23,0),(2,9,5),
(2,22,0),(2,7,5),
(2,7,5),(2,8,5),

-- GB
(2,15,0),(2,2,5),
(2,22,0),(2,2,5),
(2,12,0),(2,17,5),

-- SEMI FINAL
(2,2,5),(2,18,0),
(2,6,5),(2,8,0),

-- FINAL
(2,2,50),(2,5,25);  
-- =========================================================
-- 3 terceira rodada: Bomber Man 3
-- =========================================================

INSERT INTO participacao(idPartida,idJogador,pontuacao) VALUES
-- GA
(3,6,5),(3,21,0),
(3,6,5),(3,18,0),
(3,17,5),(3,22,0),

-- GB
(3,3,0),(3,8,5),
(3,8,5),(3,15,0),
(3,15,5),(3,2,0),

-- SEMI FINAL
(3,6,0),(3,15,5),
(3,18,5),(3,8,0),

-- FINAL
(3,15,25),(3,18,50); -- campea alison

-- =========================================================
-- 2 segunda rodada: Mortal Kombat 4
-- =========================================================

INSERT INTO participacao(idPartida,idJogador,pontuacao) VALUES

-- GA
(4,17,15),(4,11,0),
(4,1,10),(4,17,5),
(4,17,10),(4,15,5),

-- GB
(4,9,10),(4,6,5),
(4,6,10),(4,24,5),
(4,25,10),(4,9,5),

-- SEMI FINAL
(4,3,20),(4,24,0),
(4,17,10),(4,6,20),

-- FINAL
(4,6,50),(4,24,25); -- campea ju

-- ===================================