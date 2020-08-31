import React, { FC, useState, useEffect, useCallback } from 'react';
import { notification, List, Form, Button, Input, Divider } from 'antd';
import { ApiResponse, Quote } from '../types';
import { DisplayQuote } from './display-quote';
import { ValidateStatus } from 'antd/lib/form/FormItem';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export const UpdateQuote: FC = () => {
    const [list, setList] = useState<Quote[]>([]);

    const onFinish = (values: any) => {
        const { id, title } = values;
        handleSubmit({ id, title });
    };
    const handleSubmit = async ({
        id,
        title,
    }: {
        id: string;
        title: string;
    }) => {
        try {
            const result = await fetch('/quotes/' + id, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                }),
            });
            const { message }: ApiResponse<Quote> = await result.json();
            notification.success({ message });
            getListOfQuotes();
        } catch (err) {
            notification.error({ message: err.message });
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: 'Check ID and Title are filled properly',
        });
    };

    const getListOfQuotes = useCallback(async () => {
        const result = await fetch('/quotes', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const { message, data }: ApiResponse<Quote[]> = await result.json();
        setList(data);
    }, [list]);

    useEffect(() => {
        getListOfQuotes();
    }, []);

    return (
        <>
            <h3>This endpoint enables edit of each quote's title</h3>
            <p>
                Input the id of the quote and the new title you want to edit it
                to
            </p>
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
                <Form.Item
                    style={{ color: 'white !important' }}
                    label="Quote Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input title of quote!',
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
            <Button onClick={getListOfQuotes}> Refresh Endpoint</Button>
            <div
                style={{
                    minHeight: '5vh',
                    marginTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                {list.length === 0 ? (
                    <p>There is no quotes in the database</p>
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
