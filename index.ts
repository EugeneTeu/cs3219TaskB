require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { testRouter, quotesRouter } from './routes';
import cors from 'cors';
import path from 'path';

const app = express();
// Setup server port
const PORT = process.env.PORT || 8080;

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/test', testRouter);
app.use('/quotes', quotesRouter);
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

//'mongodb://localhost/cs3219-task-b'
//'mongodb+srv://user1:user1@cluster0.e2rp0.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose
    .connect(
        'mongodb+srv://user1:user1@cluster0.e2rp0.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((_) => {
        const db = mongoose.connection;
        mongoose.set('useFindAndModify', false);
        if (!db) {
            console.log('Error connecting db');
            app.listen(PORT, () => {
                console.log(
                    `⚡️[server]: Server is running at https://localhost:${PORT} without database`
                );
            });
        } else {
            console.log('Db connected successfully');
            app.listen(PORT, () => {
                console.log(
                    `⚡️[server]: Server is running at https://localhost:${PORT}`
                );
            });
        }
    });
export default app;
