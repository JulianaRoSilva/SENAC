-- ACADEMIA
CREATE TABLE Professor (
	idProfessor SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	CREF INT UNIQUE NOT NULL
);

CREATE TABLE aluno (
	idMatricula SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	telefone VARCHAR(50)
);
-- ------------------------ --

-- CLINICA
CREATE TABLE medico (
	idMedico SERIAL PRIMARY KEY,
	especialidade VARCHAR(50) NOT NULL,
	CRM INT UNIQUE NOT NULL
);

CREATE TABLE paciente (
	idPaciente SERIAL PRIMARY KEY,
	CPF VARCHAR(14) UNIQUE NOT NULL,
	dataNascimento DATE
);

CREATE TABLE consulta (
	idConsulta SERIAL PRIMARY KEY,
	idMedico INT,
	idPaciente INT,
	
	CONSTRAINT fk_consulta_medico 
	FOREIGN KEY (idMedico) REFERENCES medico(idMedico),
	
	CONSTRAINT fk_Consulta_Paciente
	FOREIGN KEY (idPaciente) REFERENCES paciente(idpaciente)
);
-- ---------------------- --

-- BIBLIOTECA
CREATE TABLE autor (
	idAutor SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	nacionalidade VARCHAR(50)
);

CREATE TABLE livros (
	idLivro SERIAL PRIMARY KEY,
	titulo VARCHAR(100) NOT NULL,
	anoPublicacao INT
);

CREATE TABLE biblioteca (
	idAutor INT,
	idLivro INT,
	
	CONSTRAINT fk_autor 
	FOREIGN KEY (idAutor) REFERENCES autor(idAutor),
	
	CONSTRAINT fk_livro 
	FOREIGN KEY (idLivro) REFERENCES livros(idLivro)
);
-- ------------------- --
-- PIZZARIA

CREATE TABLE cliente (
	idCliente SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE Pizza (
	idPizza SERIAL PRIMARY KEY,
	sabor VARCHAR(50) UNIQUE NOT NULL,
	preco DECIMAL(5,2) NOT NULL
);	

/*
Prof dani, achei interessante que na tabela de clientes, tivesse
o id do cliente. Tomei liberdade de adicional
*/
CREATE TABLE PedidoVendaHeader (
	idPedido SERIAL PRIMARY KEY,
	idCliente INT,
	dataEmissao DATE NOT NULL,
	valorTotal DECIMAL(5,2) NOT NULL,
	
	CONSTRAINT fk_Cliente 
	FOREIGN KEY (idCliente) REFERENCES cliente(idcliente)
);

CREATE TABLE pedidoVendaItens (
	idPedido INT,
	idPizza INT,
	item INT NOT NULL, -- Item para controlar a quantidade de pizzar no pedido da pizzaria
	
	-- controle para nao repetir o id pedido e o item.
	PRIMARY KEY (idPedido, item),
	
	CONSTRAINT fk_idPedido
	FOREIGN KEY (idPedido) 
	REFERENCES pedidoVendaHeader(idPedido),
	
	CONSTRAINT fk_Pizza 
	FOREIGN KEY (idPizza) 
	REFERENCES Pizza(idPizza)
);
-- ----------------------- --
-- LOCADORA

CREATE TABLE cliente (
	idCliente SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE filmes (
	idFilme SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	categoria VARCHAR(50)
);

CREATE TABLE locacaoHeader (
	idLocacao SERIAL PRIMARY KEY,
	dataLocacao DATE NOT NULL,
	valorTotal DECIMAL(5,2) NOT NULL,
	idCliente INT,
	
	CONSTRAINT fk_cliente
	FOREIGN KEY (idCliente) REFERENCES cliente(idCliente)
);

CREATE TABLE locacoesItens (
	idLocacao INT,
	IdFilme INT,
	Item INT,
	valorItem DECIMAL(5,2) NOT NULL,
	
	PRIMARY KEY(idLocacao,Item),
	
	CONSTRAINT fk_idLocacao
	FOREIGN KEY (idLocacao) REFERENCES locacaoHeader(idLocacao),
	
	CONSTRAINT fk_idFilme
	FOREIGN KEY (IdFilme) REFERENCES filmes(idFilme)
);
-- -------------------- --
-- SISTEMA ESCOLAR
CREATE TABLE professores (
	idProfessor SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE Turmas(
	idTurma SERIAL PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
);

CREATE TABLE Alunos (
	idAluno SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	idMatricula INT
);

CREATE TABLE disciplinas (
	idDisciplina SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL
);

CREATE TABLE Contrato(
	idContrato SERIAL PRIMARY KEY,
	idProfessor INT,
	idDisciplina INT,
	
	CONSTRAINT fk_professor 
	FOREIGN KEY (idProfessor) REFERENCES professores(IdProfessor),
	
	CONSTRAINT fk_disciplina 
	FOREIGN KEY (idDisciplina) REFERENCES disciplinas(idDisciplina)
);

CREATE TABLE Matricula (
	idMatricula SERIAL PRIMARY KEY,
	idAluno INT,
	idTurma INT,
	
	CONSTRAINT fk_Aluno 
	FOREIGN KEY (idAluno) REFERENCES Alunos(idAluno),
	
	CONSTRAINT fk_Turma 
	FOREIGN KEY (idTurma) REFERENCES Turmas(idTurma)
);



