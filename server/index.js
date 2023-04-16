import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.js'
import taskRoute from './routes/taskRoute.js'
import fileUpload from "express-fileupload";

const app = express()
dotenv.config()

// Constants

const PORT = process.env.PORT || 3001
const DB_FULL_URL = process.env.DB_FULL_URL

// Middleware

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

// Routes

app.use('/api/auth', authRoute)
app.use('/api/tasks', taskRoute)

// Functions

async function start() {
    try {
        await mongoose.connect(
            `${DB_FULL_URL}`, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        }
        )

        console.log('Mongo connected!');

        app.listen(PORT, () => {
            console.log(`Server Started on PORT: ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

start()