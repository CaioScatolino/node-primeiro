import express, { RequestHandler } from 'express';
import produtosRouter from './produtos'
import voosRouter from './voos'
import { interferir } from '../middlewares/interferir';

const router = express.Router();

// router.use(interferir)

router.use('/produtos', produtosRouter) // Middleware to use the produtos routes
router.use('/voos', voosRouter) // Middleware to use the produtos routes


router.get('/ping', (req, res) => {
    console.log('Executou o ping')
    res.json({ message: 'pong' })

})

router.get('/', (req, res) => {

    console.log(`PARAMS`, req.params)
    console.log(`QUERY`, req.query)
    console.log(`BODY`, req.body)

    let name =  'World'
    let age =  0
    res.json({ name, age })
})

export default router;