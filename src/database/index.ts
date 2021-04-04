import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
    if(process.env.NODE_ENV === 'test') {
        return createConnection("test");
    } else {
        return createConnection("default");
    }  
};