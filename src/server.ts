import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.listen(3333, () => console.log("Server is running in http://localhost:3333/"));

app.get('/',(request: Request, response: Response) => { response.send('Hello World!') });