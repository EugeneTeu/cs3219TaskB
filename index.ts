import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { testRouter, quotesRouter } from './routes';
import cors from 'cors';
import path from 'path';
/*
const MongoClient = mongo.MongoClient;
const uri = process.env.dbClientString;
if (!uri) {
    throw new Error('err');
}
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    client.close();
});*/

const app = express();
// Setup server port
const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.use('/test', testRouter);
app.use('/quotes', quotesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
//'mongodb://localhost/cs3219-task-b'

mongoose
    .connect('mongodb://localhost/cs3219-task-b' ?? '', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
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

/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.e2rp0.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

    */
