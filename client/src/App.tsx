import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState<String>('test value');

    useEffect(() => {
        const apiTest = async () => {
            const test = await fetch('http://localhost:8080/quotes', {
                method: 'GET',
            });
            const value = await test.json();
            setValue(JSON.stringify(value));
        };
        apiTest();
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>{value}</p>
            </header>
        </div>
    );
}

export default App;
