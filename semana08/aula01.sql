-- COMANDOS DDL
-- script para fazer a criação de uma tabela
create table Produto (
	id serial primary key not null,
	nome varchar(200) not null,
	--cpf varchar(12) not null unique,
	preco decimal(18,4) not null default 1, 
	quantidade int not null,
	check(preco > 0 AND quantidade > 0)
);

-- script para deletar uma tabela
drop table Produto;

-- alterar uma tabela
	-- adiciona uma coluna
alter table Produto add column dataCriacao TIMESTAMP;
	-- remove uma coluna
alter table Produto drop column dataCriacao;


-- COMANDOS DML
-- Comando para ler os dados;
select * from Produto;

-- filtrar textos
select * from Produto where nome like 'G%';

-- select ordenado crescente
select * from Produto order by id;

-- select ordenado decrescente
select * from Produto order by id desc;

-- comando para inserir dados
insert into Produto (nome, preco, quantidade) values ('Grafite BIC 0,7', 2.5, 10)

-- comando para deletar dados
delete from Produto where id = 6

-- atualizar dados
update Produto set nome = 'Caneta BIC Vermelha' where id = 15