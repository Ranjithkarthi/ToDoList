import express  from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { UserRouter } from './routes/user.js'

//app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(UserRouter)


//db connection
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ranjith:gorilla44@cluster0.uzut6ew.mongodb.net/to-do');
    console.log("DB Connected");
}
connectDB()

app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`)
})

