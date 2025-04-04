import express from "express";
import helmet from "helmet";
import path from 'path';
import router from './routes'
import produtosRouter from './routes/produtos'
import voosRouter from './routes/voos'

const server = express()

server.use(helmet()) // Security middleware
server.use(express.json()) // Middleware to parse JSON requests
server.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded requests
server.use(express.static(path.join(__dirname, '../public'))) // Middleware to serve static files


server.use('/', router) // Middleware to use the routes defined in the router
server.use('/produtos', produtosRouter) // Middleware to use the produtos routes
server.use('/voos', voosRouter) // Middleware to use the produtos routes

server.listen(3000, () => {
    console.log('Servidor is running on http://localhost:3000')
})