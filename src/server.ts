import express from "express";
import helmet from "helmet";
import path from 'path';

const server = express()

server.use(helmet()) // Security middleware
server.use(express.json()) // Middleware to parse JSON requests
server.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded requests
server.use(express.static(path.join(__dirname, '../public'))) // Middleware to serve static files

server.get('/ping', (req, res) => {
    res.json({ message: 'pong' })
})

server.get('/produtos', (req, res) => {
    res.json({ produtos: [] })
})
server.post('/produtos', (req, res) => {
    res.json({ produtos: [] })
})

server.get('/', (req, res) => {

    let name = req.query.name || 'World'
    let age = req.query.age || 0
    res.json({ name, age })
})

server.listen(3000, () => {
    console.log('Servidor is running on http://localhost:3000')
})