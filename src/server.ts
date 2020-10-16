import express from 'express';
import './database/connection';
import path from 'path';
import 'express-async-errors';
import routes from './routes';
import errorHandler from './errors/exceptionHandler';
import cors from 'cors'

const port: Number = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);

app.listen(port,() => {
    console.log(`Listening on port ${port}...`);
});


