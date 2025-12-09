import express from 'express';
const router = express.Router();

router.get('/:from/:to', (req, res) => {

    console.log(`PARAMS`, req.params);
    console.log(`QUERY`, req.query);
    console.log(`BODY`, req.body);

    const { from, to } = req.params;

    const {direct, order} = req.query;

    res.json({
        voo: {
            de: from.toUpperCase(),
            para: to.toUpperCase(),
            price: 1200
        },
        order: { direct, order}
    });
});

export default router;