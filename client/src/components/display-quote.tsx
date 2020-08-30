import React, { FC } from 'react';
import { Quote } from '../types';
type Props = {
    quote: Quote;
};

export const DisplayQuote: FC<Props> = ({ quote }: { quote: Quote }) => {
    return (
        <div style={{ minHeight: '3vh' }}>
            <p>Id: {quote._id}</p>
            <p>Title: {quote.title}</p>
        </div>
    );
};
