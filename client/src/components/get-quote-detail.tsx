import React, { FC, useEffect, useState, useCallback } from 'react';
import { ApiResponse, Quote } from '../types';
import { Button, List, notification, Input, Form, Divider } from 'antd';
import { DisplayQuote } from './display-quote';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export const GetQuoteDetail: FC = () => {
    const [list, setList] = useState<Quote[]>([]);
    const [quote, setQuote] = useState<Quote>({
        _id: 'null',
        title: 'empty',
        _v: 0,
    });
    const handleSubmit = async ({ id }: { id: string }) => {
        try {
            const result = await fetch('/quotes/' + id, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const { message, data }: ApiResponse<Quote> = await result.json();
            notification.success({ message });
            setQuote(data);
        } catch (err) {
            notification.error({ message: err.message });
        }
    };

    const onFinish = (values: any) => {
        const { id } = values;
        handleSubmit({ id });
    };

    const onFinishFailed = (_: any) => {
        notification.error({
            message: 'ID is required! Please fill up the input',
        });
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
            <h3>This endpoint returns a single quote from the api</h3>
            <Form
                {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    style={{ color: 'white !important' }}
                    label="ID of Quote"
                    name="id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input ID of quote!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
            <Divider />
            <h3>Response from API:</h3>
            <DisplayQuote quote={quote} />
            <Button onClick={getListOfQuotes}> Refresh Endpoint</Button>
            <h3>Request any of the following IDs:</h3>
            <Divider />
            <div
                style={{
                    minHeight: '5vh',
                    marginTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                <div>
                    {list.length === 0 ? (
                        <p>There is no quotes currently in the Database</p>
                    ) : (
                        <List>
                            {list.map((x: Quote, index: number) => {
                                return (
                                    <List.Item key={index}>
                                        <p>Id: {x._id}</p>
                                    </List.Item>
                                );
                            })}
                        </List>
                    )}
                </div>
            </div>
        </>
    );
};
