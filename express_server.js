import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!_Hello World!_Hello World!_Hello World!_Hello World!')
})

app.listen(3000)
