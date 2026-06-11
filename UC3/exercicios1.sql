/*
Crie uma tabela chamada professor.
Campos: Id, nome, email e especialidade
Utilize: SERIAL, PRIMARY KEY e VARCHAR
*/

CREATE TABLE professor (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) UNIQUE,
	especialidade VARCHAR(50) NOT NULL
);

/*
Crie uma tabela chamada disciplina.
Campos: id, nome, carga_horaria
*/

CREATE TABLE disciplina (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	carga_horaria INT NOT NULL
);

/*
Crie uma tabela chamada curso.
Campos: id, nome, descricao
*/

CREATE TABLE curso (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50),
	descricao VARCHAR(50)

);
