import express from 'express';
import { quotesController } from '../controller';
const router = express.Router();

router.get('/', quotesController.getQuotes);

router.get('/:id', quotesController.getDetailQuote);

router.post('/create', quotesController.createQuote);

router.put('/:id', quotesController.updateQuote);

router.delete('/:id', quotesController.deleteQuote);

export const quotesRouter = router;
