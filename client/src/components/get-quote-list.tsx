import React, { FC, useState, useEffect } from 'react';
import { Quote, ApiResponse } from '../types';
import { Button, List, notification } from 'antd';
import { DisplayQuote } from './display-quote';

export const GetQuoteList: FC = () => {
    const [list, setList] = useState<Quote[]>([]);

    const handleSubmit = async (
        _: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        const result = await fetch('http://localhost:8080/quotes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const { message, data }: ApiResponse<Quote[]> = await result.json();
        console.log(data);
        notification.success({ message });
        setList(data);
    };

    return (
        <>
            <h3>This endpoint returns a list of quotes from the api</h3>
            <Button type="primary" onClick={handleSubmit}>
                Get List
            </Button>
            <div
                style={{
                    minHeight: '5vh',
                    marginTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                <h3>Response from API:</h3>
                {list.length === 0 ? (
                    <p>
                        There is no quotes currently requested / currently in
                        the database
                    </p>
                ) : (
                    <List>
                        {list.map((quote: Quote) => {
                            return (
                                <List.Item key={quote._id}>
                                    <DisplayQuote quote={quote} />
                                </List.Item>
                            );
                        })}
                    </List>
                )}
            </div>
        </>
    );
};
