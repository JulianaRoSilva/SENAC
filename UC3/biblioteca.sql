CREATE TABLE Livro (
	id serial primary key,
	titulo varchar(100) not null,
	ano_publicacao date not null
);

create table autor (
	id serial primary key,
	nome varchar(50) not null,
	nacionalidade varchar(15) not null
);

create table autoria (
	id serial primary key,
	id_livro INT,
	id_autor INT,
	
	CONSTRAINT fk_autoria_livro 
		FOREIGN KEY (id_livro)
		REFERENCES livro(id),
	
	CONSTRAINT fk_autoria_autor 
		FOREIGN KEY (id_autor)
		REFERENCES autor(id)
);



