import React, { FC, useState, useEffect, useCallback } from 'react';
import { Quote, ApiResponse } from '../types';
import { Button, List, notification } from 'antd';
import { DisplayQuote } from './display-quote';

export const DeleteQuote: FC = () => {
    const [list, setList] = useState<Quote[]>([]);

    const handleSubmit = async (
        _: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        const result = await fetch('/quotes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const { message, data }: ApiResponse<Quote[]> = await result.json();
        console.log(data);
        notification.success({ message });
        setList(data);
    };

    const handleDelete = async ({ id }: { id: string }) => {
        try {
            const result = await fetch('/quotes/' + id, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            const { message }: ApiResponse<Quote> = await result.json();
            notification.success({ message });
            getListOfQuotes();
        } catch (err) {
            notification.error({ message: err.message });
        }
    };

    const getListOfQuotes = useCallback(async () => {
        const result = await fetch('/quotes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const { message, data }: ApiResponse<Quote[]> = await result.json();
        setList(data);
    }, []);

    useEffect(() => {
        getListOfQuotes();
    }, [getListOfQuotes]);

    return (
        <>
            <h3>This endpoint returns a list of quotes from the api</h3>
            <Button onClick={getListOfQuotes}> Refresh Endpoint</Button>
            <div
                style={{
                    minHeight: '5vh',
                    marginTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                <h3>Response from API:</h3>
                {list.length === 0 ? (
                    <p>There is no quotes currently in the database</p>
                ) : (
                    <List>
                        {list.map((quote: Quote) => {
                            return (
                                <List.Item key={quote._id}>
                                    <div>
                                        <DisplayQuote quote={quote} />
                                        <Button
                                            danger
                                            onClick={(event) =>
                                                handleDelete({ id: quote._id })
                                            }
                                        >
                                            Delete!
                                        </Button>
                                    </div>
                                </List.Item>
                            );
                        })}
                    </List>
                )}
            </div>
        </>
    );
};
