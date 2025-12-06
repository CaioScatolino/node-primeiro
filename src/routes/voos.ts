import express from 'express';
const router = express.Router();

router.get('/:from/:to', (req, res) => {

    const { from, to } = req.params;

    res.json({
        voo: {
            de: from.toUpperCase(),
            para: to.toUpperCase(),
            price: 1200
        }
    });
});

export default router;