
import cors from "cors";
import dotenv from "dotenv"
import express from "express";
import  { MongoClient } from "mongodb";
import {dataRouter} from './routes/data.js'

dotenv.config()

const app = express();
app.use(cors())
const PORT = process.env.PORT

const MONGO_URL=process.env.MONGO_URL

app.get("/", (request, response) =>  {
    response.send("Hello Everyone")
});

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    console.log("Mongo is connected");
    return client;
  }

export const client =  await createConnection();
app.use(express.json())
app.use("/data",dataRouter)
//create a server
app.listen(PORT, () => console.log("Server started on port", PORT));


