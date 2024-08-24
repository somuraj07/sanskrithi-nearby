import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log(err);
    console.log("eroor finded");
});

app.listen(3000, () => {
    console.log("server is running ")
});


app.use("/api/user",userRouter)