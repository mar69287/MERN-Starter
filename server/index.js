import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/database.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('hello from Server Side!')
});
const port = process.env.PORT || 8080;

const startServer = async () => {
    try {
      connectDB(process.env.DATABASE_URL);
      app.listen(8080, () => console.log(`Express app running on port ${port}`));
    } catch (error) {
      console.log(error);
    }
};
  
startServer();