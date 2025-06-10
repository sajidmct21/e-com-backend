import express from "express";
import env from "dotenv";
import { dbConnection } from "./database/databaseConnection.js";
import categoryRouter from './routes/category.route.js'
import cors from 'cors'

const app = express();
env.config();
const port = process.env.PORT || 8000;
dbConnection();

app.use(express.json());
app.use(cors())

app.use('/api/category',categoryRouter)

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
    status: error.statusCode || 500,
    data: error,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
