import express from 'express';
import connection from './database/db.js';


const app = express();



const PORT = 8000;

connection();


app.listen(PORT, ()=>console.log(`server is runing successfully on port ${PORT} hello`));

