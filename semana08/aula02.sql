create table Generos (
	id serial primary key,
	nome varchar(200) not null
)

create table Autores (
	id serial primary key,
	nome varchar(200) not null,
	nacionalidade varchar(200) not null,
	ano_nascimento date not null
)

create table Editoras (
	id serial primary key,
	nome varchar(200) not null,
	pais varchar(200) not null,
	fundacao date not null
)

create table Livros (
	id serial primary key,
	titulo varchar(200) not null,
	ano_publicacao int not null,
	editora_id int not null,
	autor_id int not null,
	foreign key (editora_id) references Editoras (id),
	foreign key (autor_id) references Autores (id)
)

select * from autores;
select * from editoras;
select * from livros;
select * from generos;


select
L.titulo as titulo_livro,
L.ano_publicacao,
A.nome as nome_autor,
A.nacionalidade,
A.ano_nascimento
from livros as L
inner join autores as A
on L.autor_id = A.id


--alter table Livros add column ano_publicacao int not null;

-- LIVROS
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('Como programar com Javascript', 2024, 1, 1);
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('Como trabalhar com Postgres', 2020, 2, 2);
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('O que é POO', 2022, 3, 3);
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('TDD: aprendendo a criar testes', 2024, 1, 2);
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('HTML e CSS', 2024, 2, 1);
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('React: componentização', 2024, 3, 1);
insert into Livros (titulo, ano_publicacao, editora_id, autor_id) 
values ('Aprenda a programar em C#', 2024, 2, 3);

-- EDITORAS
insert into Editoras (nome, pais, fundacao) values ('Editora Saraiva', 'Brasil', '1970-01-01');
insert into Editoras (nome, pais, fundacao) values ('Editora Catarinense', 'Brasil', '1960-01-01');
insert into Editoras (nome, pais, fundacao) values ('Editora Abril', 'Brasil', '1980-01-01');


-- AUTORES
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Bruno Costa', 'Brasileira', '1985-05-20');
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Udeilton de Sousa', 'Brasileira', '1990-01-10');
insert into autores (nome, nacionalidade, ano_nascimento) 
values ('Anaísa Mayara', 'Brasileira', '1994-09-05');


-- GENEROS
insert into generos (nome) values ('Romance');
insert into generos (nome) values ('Ficção');
insert into generos (nome) values ('Infantil');
insert into generos (nome) values ('Infanto Juvenil');

