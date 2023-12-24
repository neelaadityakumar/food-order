import express from 'express';
import App from './services/ExpressApp';
import dbConnection from './services/Database';
import { PORT } from './config';

const StartServer = async () => {
    require('dotenv').config({ path: '.env.local' });
    require('dotenv').config({ path: '.env' });
    
    

    console.log("dotenvsss",process.env.MONGO_URI) // remove this after you've confirmed it is working

    const app = express();

    await dbConnection()

    await App(app);

    app.listen(PORT, () => {
        console.log(`Listening to ports ${PORT}`);
    })
}

StartServer();