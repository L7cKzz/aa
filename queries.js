const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mercado',
  password: 'lu224466',
  port: 5432,
})
const getProducts = (request, response) => {
  pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductsById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createProducts = (request, response) => {
  const { nome, preco } = request.body

  pool.query('INSERT INTO products (nome, preco) VALUES ($1, $2)', [nome, preco], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`products added with ID: ${results.insertId}`)
  })
}

const updateProducts = (request, response) => {
  const id = parseInt(request.params.id)
  const { nome, preco } = request.body

  pool.query(
    'UPDATE products SET nome = $1, preco = $2 WHERE id = $3',
    [nome, preco, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`products modified with ID: ${id}`)
    }
  )
}

const deleteProducts = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`products deleted with ID: ${id}`)
  })
}

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
}