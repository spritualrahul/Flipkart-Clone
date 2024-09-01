import express from 'express';
import connection from './database/db.js';
import Router from './Routes/route.js';


const app = express();
dotenv.config();
app.use('/',Router);



const PORT = 8000;

connection();


app.listen(PORT, ()=>console.log(`server is runing successfully on port ${PORT} hello`));

