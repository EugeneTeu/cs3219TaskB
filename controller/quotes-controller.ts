import express from 'express';
import { response, Request } from 'express';
import { QuoteModel, Quote } from '../model';

const getDetailQuote = async (request: Request, response: any) => {
    try {
        const { id } = request.params;
        const quote = await QuoteModel.findById(id);
        return response.json({
            message: 'Quote successfully requested',
            data: quote,
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in getting single quote');
    }
};

const getQuotes = async (request: Request, response: any) => {
    try {
        const value = await QuoteModel.find();
        return response.status(200).json({
            message: 'Quotes successfully requested',
            data: value,
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in getting Quotes');
    }
};

const createQuote = async (request: Request, response: any) => {
    try {
        const { title } = request.body;
        const quote = new QuoteModel();
        quote.title = title;
        await quote.save();
        return response.status(200).json({
            message: 'New quote created!',
            data: quote,
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in Creating');
    }
};

const deleteQuote = async (request: Request, response: any) => {
    try {
        const { id } = request.params;
        await QuoteModel.deleteOne({ _id: id });
        return response.status(200).json({
            message: 'Quote deleted!',
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in Deleting');
    }
};

const updateQuote = async (request: Request, response: any) => {
    try {
        const { id } = request.params;
        const { title } = request.body;
        await QuoteModel.findByIdAndUpdate({ _id: id }, { title });
        return response.status(200).json({
            message: 'Quote updated !',
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in updating');
    }
};

export const quotesController = {
    getDetailQuote,
    getQuotes,
    createQuote,
    deleteQuote,
    updateQuote,
};
