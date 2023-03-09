import express  from 'express';
import mongoose from 'mongoose';
import route from './route.js';
const Port = 3000;
mongoose.set('strictQuery', true);

const app = express();

const url = ('mongodb://127.0.0.1/crud')
mongoose.connect(url, ()=>{
    console.log("DateBase is connected.........");

app.use(express.json());
app.use('/crud',route);

app.listen(Port, ()=>{
    console.log(`server is running on port ${Port}`);
})
