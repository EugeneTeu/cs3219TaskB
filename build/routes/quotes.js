"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotesRouter = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const router = express_1.default.Router();
router.get('/', controller_1.quotesController.getQuotes);
router.get('/:id', controller_1.quotesController.getDetailQuote);
router.post('/create', controller_1.quotesController.createQuote);
router.put('/:id', controller_1.quotesController.updateQuote);
router.delete('/:id', controller_1.quotesController.deleteQuote);
exports.quotesRouter = router;
