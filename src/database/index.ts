import { Connection, createConnection } from 'typeorm';

export default async (): Promise<Connection> => {
    if (process.env.NODE_ENV === "test") {
        return await createConnection("test");
    } else {
        return await createConnection("default");
    }
}