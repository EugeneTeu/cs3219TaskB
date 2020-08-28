import express, { Request, Response } from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { testRouter, quotesRouter } from './server/routes';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use('/test', testRouter);
    server.use('/quotes', quotesRouter);

    server.all('*', (req, res) => {
        return handle(req, res);
    });
    mongoose
        .connect('mongodb://localhost/cs3219-task-b', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((_) => {
            const db = mongoose.connection;
            if (!db) {
                console.log('Error connecting db');
                server.listen(port, () => {
                    console.log(
                        `⚡️[server]: Server is running at https://localhost:${port} without database`
                    );
                });
            } else {
                console.log('Db connected successfully');
                server.listen(port, () => {
                    console.log(
                        `⚡️[server]: Server is running at https://localhost:${port}`
                    );
                });
            }
        });

    /*server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });*/
});
