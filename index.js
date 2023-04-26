import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'


dotenv.config();
const app = express();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('base de données est connectée')
    }
    catch(error){
        throw error
    }
}
mongoose.set('strictQuery', false)

app.use(express.json())
app.use(cors())
app.use(cookieParser())




app.listen(process.env.PORT, () =>{
    connect()
    console.log('connection backend')})