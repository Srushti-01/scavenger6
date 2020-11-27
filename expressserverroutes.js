const express = require('express')
const app = express()
const fs = require('fs')
const bdata = require('./books.json');
const adata = require('./authors.json');
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/books', (req, res) => {
    let booksdata = fs.readFileSync ("./books.json", (err, data) => {
        if (err){
            res.status(500).send({
                success: false,
                message: "Some Error occurred in query.",
                data: errQuery.message
            })
        }
        res.header("Content-Type", "application/json")
        res.send(data)
    })
    JSON.parse(booksdata)
})
app.post('/books', (req, res) => {
    let body = req.body
    let booksdata = fs.readFileSync("./books.json", (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: "Some Error occurred in query.",
                data: errQuery.message
            })
        }
        data.push(body)
        res.header("Content-Type", "application/json")
        res.send(data)
    })
}),

app.get('/authors', (req, res) => {
    let booksdata = fs.readFileSync("./authors.json", (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: "Some Error occurred in query.",
                data: errQuery.message
            })
        }
        res.header("Content-Type", "application/json")
        res.send(data)
    })
}),

app.post('/authors', (req, res) => {
    let body = req.body
    let booksdata = fs.readFileSync("./authors.json", (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                message: "Some Error occurred in query.",
                data: errQuery.message
            })
        }
        res.header("Content-Type", "application/json")
        res.send(data)
    })
    data.push(body)
    res.header("Content-Type", "application/json")
    res.send(body)
}),

app.get('*', function (req, res) {
    res.status(404).send(JSON.stringify({
        error: "Route not found"
    }));
}),

app.listen(port, () => {
    console.log('Example app listening at http://localhost:$', port)
})