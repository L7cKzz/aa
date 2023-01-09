const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/Products', db.getProducts)
app.get('/Products/:id', db.getProductsById)
app.post('/Products', db.createProducts)
app.put('/Products/:id', db.updateProducts)
app.delete('/Products/:id', db.deleteProducts)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
