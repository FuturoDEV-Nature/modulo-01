create table locais (
	id serial primary key,
	nome varchar(200) not null,
	endereco varchar(1000) not null,
	capacidade int not null default 1 check(capacidade >= 1),
	
)

create table eventos (
	id serial primary key,
	nome varchar(200) not null,
	data date not null CHECK (data > CURRENT_DATE),
	local_id int not null,
	foreign key (local_id) references locais (id),
	ativo boolean not null default true
)

drop table eventos;

select * from locais;
select * from eventos;

insert into locais (nome, endereco, capacidade) 
values ('Faculdade', 'Rua da faculdade', 100);
insert into locais (nome, endereco, capacidade) 
values ('Lab365', 'Rua do lab365', 200);

update locais set endereco = 'Rua do Lab365' where id = 2

insert into eventos (nome, data, ativo, local_id) values 
('Bingo universitário', '2024-03-26', true,  1);
insert into eventos (nome, data, ativo, local_id) values 
('Palestra soft skills', '2024-04-05', true, 2);
insert into eventos (nome, data, ativo, local_id) values 
('Aula prática laboratório', '2024-05-02', true,  1);


select
e.nome as nome_evento,
e.data,
l.nome as nome_local,
l.capacidade
from eventos as e 
inner join locais as l
on e.local_id = l.id