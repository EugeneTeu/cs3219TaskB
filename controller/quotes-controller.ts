import express from 'express';
import { response } from 'express';
import { QuoteModel } from '../model';

const getDetailQuote = async (request: any, response: any) => {
    try {
    } catch {}
};

const getQuotes = async (request: any, response: any) => {
    try {
    } catch {}
};

const createQuote = async (request: any, response: any) => {
    try {
        const { title } = request.body;
        const quote = new QuoteModel();
        quote.title = title;
        quote.save(function (err) {
            if (err) {
                return response.send(err);
            }
            return response.json({
                message: 'New quote created!',
                data: quote,
            });
        });
    } catch {}
};

const deleteQuote = async (request: any, response: any) => {
    try {
    } catch {}
};

const updateQuote = async (request: any, response: any) => {
    try {
    } catch {}
};

export const quotesController = {
    getDetailQuote,
    getQuotes,
    createQuote,
    deleteQuote,
    updateQuote,
};
