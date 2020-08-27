import express from 'express';
import { response, Request } from 'express';
import { QuoteModel, Quote } from '../model';

const getDetailQuote = async (request: Request, response: any) => {
    try {
        const { id } = request.params;
        QuoteModel.findById(id, (err: Error, quote: any) => {
            if (err) {
                console.log(err);
                return response.send(err);
            }

            return response.json({
                data: quote,
            });
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in getting single quote');
    }
};

const getQuotes = async (request: Request, response: any) => {
    try {
        const value = await QuoteModel.find();
        return response.json({
            data: value,
        });

        /*
        QuoteModel.find({}, (err: Error, quotes: Quote[]) => {
            return response.json({
                data: quotes,
            });
        });*/
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
        quote.save((err: Error) => {
            if (err) {
                return response.send(err);
            }
            return response.json({
                message: 'New quote created!',
                data: quote,
            });
        });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in Creating');
    }
};

const deleteQuote = async (request: Request, response: any) => {
    try {
        const { id } = request.params;
        QuoteModel.deleteOne({ _id: id });
    } catch (err) {
        console.log(err);
        return response.status(500).send('Error in Deleting');
    }
};

const updateQuote = async (request: Request, response: any) => {
    try {
        const { id } = request.params;
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
