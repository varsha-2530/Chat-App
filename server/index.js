import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();

app.use(cors());
app.use(express.json());


const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
