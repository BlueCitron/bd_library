import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { sequelize } from './models';
import router from './routes';

dotenv.config();
sequelize.sync({ force: false });
const app = express();

const { HOST, PORT } = process.env

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);
app.get('/', (req, res) => {
  res.json('Hello World')
})

app.listen(PORT, HOST, () => {
  console.log(`Listening on: http://${HOST}:${PORT}`)
});
