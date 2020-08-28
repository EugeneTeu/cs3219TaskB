import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { testRouter, quotesRouter } from './routes';

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

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use('/test', testRouter);
app.use('/quotes', quotesRouter);

mongoose
    .connect('mongodb://localhost/cs3219-task-b', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((_) => {
        const db = mongoose.connection;
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
