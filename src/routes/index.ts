import express from 'express';
const router = express.Router();


router.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});


router.get('/', (req, res) => {
    let name = `Caio`
    let age = 23
    res.json({ name, age });
});


export default router;