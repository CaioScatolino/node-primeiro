import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({ message: 'pong' })
})




router.get('/', (req, res) => {

    let name = req.query.name || 'World'
    let age = req.query.age || 0
    res.json({ name, age })
})

export default router;