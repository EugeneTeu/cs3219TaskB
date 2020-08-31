import React, { FC, useState } from 'react';
import { Divider, Input, Form, Button, notification } from 'antd';
import { ApiResponse, Quote } from '../types';
import { DisplayQuote } from './display-quote';

export const CreateQuote: FC = () => {
    const [quote, setQuote] = useState<Quote>({
        _id: 'null',
        title: 'empty',
        _v: 0,
    });

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const handleSubmit = async ({ title }: { title: string }) => {
        const result = await fetch('/quotes/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
            }),
        });
        const { message, data }: ApiResponse<Quote> = await result.json();
        notification.success({ message });

        setQuote(data);
    };
    const onFinish = (values: any) => {
        const { title } = values;
        handleSubmit({ title });
    };

    const onFinishFailed = (_: any) => {
        notification.error({
            message: 'Title is required! Please fill up the input',
        });
    };
    return (
        <>
            <h3>This endpoint creates a quote</h3>

            <Form
                {...layout}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
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
            <div
                style={{
                    minHeight: '5vh',
                    marginTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                <h3>Response from API:</h3>

                <DisplayQuote quote={quote} />
            </div>
        </>
    );
};
