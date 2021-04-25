import { app } from './app';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}/`));