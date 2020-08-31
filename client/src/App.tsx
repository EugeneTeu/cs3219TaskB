import React, { FC, useState, useEffect } from 'react';
import './App.css';
import { Typography, Divider } from 'antd';

import {
    CreateQuote,
    GetQuoteList,
    GetQuoteDetail,
    UpdateQuote,
    DeleteQuote,
} from './components';

const App: FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                CS3219 Task B<br></br>
                Eugene Teu
                <br></br>
                Welcome to my API playground
            </header>
            <div className="background">
                <h1>Information</h1>
                <Divider />
                <p>This api will return quotes</p>
                <p>The structure of each Quote is as follows:</p>
                <p>[INSERT QUOTE INFO]</p>

                <h1>Playground</h1>
                <Divider />
                <h2>Create Quotes</h2>
                <Divider />
                <div className="api-module">
                    <CreateQuote />
                </div>
                <h2>Get Quotes</h2>
                <Divider />
                <div className="api-module">
                    <GetQuoteList />
                </div>
                <h2>Get Quotes Detail</h2>
                <Divider />
                <div className="api-module">
                    <GetQuoteDetail />
                </div>
                <h2>Update Quote</h2>
                <Divider />
                <div className="api-module">
                    <UpdateQuote />
                </div>

                <h2>Delete Quotes</h2>
                <Divider />
                <div className="api-module">
                    <DeleteQuote />
                </div>
            </div>
        </div>
    );
};

export default App;
