import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { testRouter, quotesRouter } from './routes';

mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var db = mongoose.connection;
if (!db) {
    console.log('Error connecting db');
} else {
    console.log('Db connected successfully');
}

const app = express();
// Setup server port
const PORT = process.env.PORT || 8080;

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use('/test', testRouter);
app.use('/quotes', quotesRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
