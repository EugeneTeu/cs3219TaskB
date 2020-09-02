"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotesController = void 0;
const model_1 = require("../model");
const getDetailQuote = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const quote = yield model_1.QuoteModel.findById(id);
        return response.json({
            message: 'Quote successfully requested',
            data: quote,
        });
    }
    catch (err) {
        console.log(err);
        return response.status(500).send('Error in getting single quote');
    }
});
const getQuotes = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const value = yield model_1.QuoteModel.find();
        return response.status(200).json({
            message: 'Quotes successfully requested',
            data: value,
        });
    }
    catch (err) {
        console.log(err);
        return response.status(500).send('Error in getting Quotes');
    }
});
const createQuote = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = request.body;
        const quote = new model_1.QuoteModel();
        quote.title = title;
        yield quote.save();
        return response.status(200).json({
            message: 'New quote created',
            data: quote,
        });
    }
    catch (err) {
        console.log(err);
        return response.status(500).send('Error in Creating');
    }
});
const deleteQuote = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        yield model_1.QuoteModel.deleteOne({ _id: id });
        return response.status(200).json({
            message: 'quote deleted',
        });
    }
    catch (err) {
        console.log(err);
        return response.status(500).send('Error in Deleting');
    }
});
const updateQuote = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = request.params;
        const { title } = request.body;
        yield model_1.QuoteModel.findByIdAndUpdate({ _id: id }, { title });
        return response.status(200).json({
            message: 'quote updated',
        });
    }
    catch (err) {
        console.log(err);
        return response.status(500).send('Error in updating');
    }
});
exports.quotesController = {
    getDetailQuote,
    getQuotes,
    createQuote,
    deleteQuote,
    updateQuote,
};
