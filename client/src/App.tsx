import React, { FC, useState, useEffect } from 'react';
import './App.css';
import { Typography, Divider, Card } from 'antd';
import { CodepenCircleFilled } from '@ant-design/icons';
import {
    CreateQuote,
    GetQuoteList,
    GetQuoteDetail,
    UpdateQuote,
    DeleteQuote,
} from './components';
import Meta from 'antd/lib/card/Meta';

const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <br />
                <div className="App-logo">
                    <CodepenCircleFilled style={{ fontSize: '20vh' }} />
                </div>
                <br />
                CS3219 Task B<br></br>
                Eugene Teu
                <br></br>
                Welcome to my API playground
                <br />
                Built with React and Antd
            </header>

            <div className="background">
                <h1>Information</h1>
                <Divider />
                <p>This api will return quotes</p>
                <p>The structure of each Quote is as follows:</p>
                <Card>
                    <Meta title="Quote"></Meta>
                    <br />
                    <p>Each Quote contains title and _id</p>
                    <p>Each Card is uniquely identified by their _id</p>
                    <p>
                        _id is assigned automatically by the databse (mongodb
                        Atlas)
                    </p>
                </Card>
                <br />

                <h1>Playground</h1>
                <Divider />
                <Card>
                    <h2>Create Quotes</h2>
                    <Divider />
                    <div className="api-module">
                        <CreateQuote />
                    </div>
                </Card>
                <Divider />
                <Card>
                    <h2>Get Quotes</h2>
                    <Divider />
                    <div className="api-module">
                        <GetQuoteList />
                    </div>
                </Card>
                <Divider />
                <Card>
                    <h2>Get Quotes Detail</h2>
                    <Divider />
                    <div className="api-module">
                        <GetQuoteDetail />
                    </div>
                </Card>
                <Divider />
                <Card>
                    <h2>Update Quote</h2>
                    <Divider />
                    <div className="api-module">
                        <UpdateQuote />
                    </div>
                </Card>
                <Divider />
                <Card>
                    <h2>Delete Quotes</h2>
                    <Divider />
                    <div className="api-module">
                        <DeleteQuote />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default App;
