create table products (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(30),
  preco MONEY
);
INSERT INTO products (nome, preco)
VALUES ('bisnaguinha', 10,00'), ('requeijao', '7,50');