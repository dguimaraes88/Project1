const port = 8585

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({ extended: true}))


app.get('/products', (req, res, next) => {
    res.send(dataBase.getProducts()) 
})

app.get('/products/:id', (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id))
}) 

app.post('/products', (req, res, next) => {
    const product = dataBase.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server Working on port ${port}`)
})