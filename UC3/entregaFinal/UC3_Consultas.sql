
-- CONSULTAS

--1. Quais jogadores pertencem a cada equipe?

select jogador.*, equipes.nome as NomeEsquipe from jogador
INNER JOIN Equipes on jogador.idEquipes = equipes.id

--2. Quais partidas foram disputadas?
-- Exiba:
-- jogo;
-- data;
-- rodada;
-- participantes;
-- pontuação obtida.


select jogo.nome as Jogo, P.id as Rodada, Campeonato.dataInicio, jogador.nome as Jogador, p.pontuacao as Pontuacao from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
INNER JOIN partida on P.idpartida = partida.id
INNER JOIN jogo on partida.idjogo = jogo.id
INNER JOIN Campeonato on p.idpartida = campeonato.id


-- 3. Qual foi a pontuação total de cada equipe? 

select MAX(equipes.nome) as Equipe, SUM(pontuacao) as PontuaçãoGrupo from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
INNER JOIN Equipes on jogador.idEquipes = equipes.id
group by equipes.id 

-- 4. Qual é o ranking das equipes?

select MAX(equipes.nome) as Equipe, SUM(pontuacao) as PontuaçãoGrupo from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
INNER JOIN Equipes on jogador.idEquipes = equipes.id
group by equipes.id order by PontuaçãoGrupo desc

-- 5. Qual é o ranking dos jogadores?

select jogador.id, MAX(jogador.nome) as NomeJogador, SUM(p.pontuacao) as pontuacao from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
INNER JOIN Equipes on jogador.idEquipes = equipes.id
group by jogador.id

-- 6. Qual foi a maior pontuação registrada em cada jogo?

select jogo.id, MAX(jogo.nome) as Jogo, MAX(p.pontuacao) as maiorPontuacao from participacao P
INNER JOIN partida ON P.idpartida = partida.id
INNER JOIN Jogo on partida.idJogo = jogo.id
group by jogo.id

-- 7. Qual é a média de pontos obtida por cada equipe?

select equipes.id, MAX(equipes.nome) as equipe, AVG(p.pontuacao) as mediaPontos from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
INNER JOIN Equipes on jogador.idEquipes = equipes.id
group by equipes.id

-- 8. Qual foi a menor e a maior pontuação obtida por cada equipe?

select jogo.id, MAX(jogo.nome) as Jogo, MIN(p.pontuacao) as menorPontuacao from participacao P
INNER JOIN partida ON P.idpartida = partida.id
INNER JOIN Jogo on partida.idJogo = jogo.id
group by jogo.id

-- 9. Quantas partidas foram disputadas em cada jogo?

select jogo.id, MAX(jogo.nome) as jogo, count(*) as QtdPartidas from participacao P
INNER JOIN partida ON P.idpartida = partida.id
INNER JOIN Jogo on partida.idJogo = jogo.id
group by jogo.id

-- 10. Quantas partidas cada jogador disputou?

select MAX(jogador.nome) as Jogador, count(*) as qtdPartidas from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
group by jogador.id order by qtdPartidas desc

-- 11. Quais jogadores participaram de mais de uma partida?
-- Utilize a cláusula HAVING.

select MAX(jogador.nome) as Jogador, count(*) as qtdPartidas from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
group by jogador.id HAVING count(*) > 1 order by qtdPartidas desc

-- 12. Gere uma classificação final do campeonato contendo:
--jogador;
--equipe;
--partidas disputadas;
--pontuação total.
--Ordene os resultados da maior para a menor pontuação

select jogador.id, MAX(jogador.nome) as Jogador, count(*) as QtdPartidasJogadas, SUM(pontuacao) as totalPontuacao from participacao P
INNER JOIN Jogador on P.idjogador = jogador.id
INNER JOIN partida on P.idpartida = partida.id
INNER JOIN jogo on partida.idjogo = jogo.id
group by jogador.id order by totalPontuacao desc