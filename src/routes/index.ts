import express from 'express';
import produtosRouter from './produtos'
import voosRouter from './voos'

const router = express.Router();

router.use('/produtos', produtosRouter) // Middleware to use the produtos routes
router.use('/voos', voosRouter) // Middleware to use the produtos routes

router.get('/ping', (req, res) => {

    res.json({ message: 'pong' })
    
})

router.get('/', (req, res) => {

    let name = req.query.name || 'World'
    let age = req.query.age || 0
    res.json({ name, age })
})

export default router;