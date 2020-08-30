"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
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
const app = express_1.default();
// Setup server port
const PORT = process.env.PORT || 8080;
app.use(express_1.default.static(path_1.default.join(__dirname, '/client/build')));
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.use('/test', routes_1.testRouter);
app.use('/quotes', routes_1.quotesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '/client/build/index.html'));
});
//'mongodb://localhost/cs3219-task-b'
mongoose_1.default
    .connect('mongodb+srv://user1:user1@cluster0.e2rp0.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority' !== null && 'mongodb+srv://user1:user1@cluster0.e2rp0.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority' !== void 0 ? 'mongodb+srv://user1:user1@cluster0.e2rp0.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority' : '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((_) => {
    const db = mongoose_1.default.connection;
    mongoose_1.default.set('useFindAndModify', false);
    if (!db) {
        console.log('Error connecting db');
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT} without database`);
        });
    }
    else {
        console.log('Db connected successfully');
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
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
