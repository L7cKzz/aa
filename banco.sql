-- Active: 1673393656117@@127.0.0.1@5432@mercado

-- faça o campo ID ser um autoincremento e nao apenas um inteiro
-- faça o campo ID ser uma chave primária
-- isso irá exigir que os INSERTs ignorem esse campo

create table IF NOT EXISTS products (
  id INTEGER,
  nome VARCHAR(30),
  preco MONEY
);

delete from products;

INSERT INTO products (id, nome, preco) VALUES
  (1,'bisnaguinha',10.00);

--  ( "id":null,"nome":"requeijao","preco":"R$ 5,00"),
--  ("id":null,"nome":"bisnaguinha","preco":"R$ 10,00"),
--  ("id":null,"nome":"requeijao","preco":"R$ 5,00");
