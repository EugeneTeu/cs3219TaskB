import mongoose, { Schema, Document } from 'mongoose';

export interface Quote extends Document {
    title: string;
}

const QuoteSchema: Schema = new Schema({
    title: { type: String, required: true },
});

export const QuoteModel = mongoose.model<Quote>('Quote', QuoteSchema);
