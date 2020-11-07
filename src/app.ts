import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import config from './environment';
import routes from './routes';

const app = express();

app.use(cors({ origin: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

mongoose.connect(config.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
const database = mongoose.connection;
database.once("open", async () => {
    console.log("Connected to database");
});
database.on("error", () => {
    console.log("Error connecting to database");
});

app.get('/index', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
})

app.post('/create', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
})

app.delete('/remove', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
})

app.put('/update', (req, res) => {
    console.log("req: ", req)
    return res.status(200).json({message: "Success!"});
});

const server = http.createServer(app);
function startServer(){
    server.listen(config.port, parseInt(config.host), function(){
        console.log('Express server listening on %d, in %s mode %s', config.port, config.host, config.env);
    });
}

setImmediate(startServer);

