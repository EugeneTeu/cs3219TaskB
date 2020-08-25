import express from 'express';
import { quotesController } from '../controller';
const router = express.Router();
// quotes/:id
router.get('/test', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.send('API is working properly');
});

router.get('/:id', quotesController.getDetailQuote);

router.get('/list', quotesController.getQuotes);

router.post('/create', quotesController.createQuote);

router.put('/:id', quotesController.updateQuote);

router.delete('/:id', quotesController.deleteQuote);

export const quotesRouter = router;
