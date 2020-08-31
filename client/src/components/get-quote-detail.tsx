import React, { FC, useEffect, useState, useCallback } from 'react';
import { ApiResponse, Quote } from '../types';
import { Button, List, notification, Input, Form, Divider } from 'antd';
import { DisplayQuote } from './display-quote';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
export const GetQuoteDetail: FC = () => {
    const [listOfId, setListOfId] = useState<string[]>([]);
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

    useEffect(() => {
        const getListOfID = async () => {
            const result = await fetch('/quotes', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const { message, data }: ApiResponse<Quote[]> = await result.json();
            const list = data.map((x) => x._id);
            setListOfId(list);
        };
        getListOfID();
    }, []);
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
                    {listOfId.length === 0 ? (
                        <p>There is no quotes currently in the Database</p>
                    ) : (
                        <List>
                            {listOfId.map((id: string, index: number) => {
                                return (
                                    <List.Item key={index}>
                                        <p>Id: {id}</p>
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
