import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    /*res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )*/
    res.send('API is working properly');
});

export const testRouter = router;
