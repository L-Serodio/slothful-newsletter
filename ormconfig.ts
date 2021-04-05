import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

export default [{
        name: "default",
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DEFAULT,
        migrations: ["./src/database/migrations/**.ts"],
        entities: ["./src/models/**.ts"],
        logging: false,
        cli: {
            migrationsDir: "./src/database/migrations"
        }  
    }, {
            name: "test",
            type: "postgres",
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_TEST,
            migrations: ["./src/database/migrations/**.ts"],
            entities: ["./src/models/**.ts"],
            logging: false,
            cli: {
                migrationsDir: "./src/database/migrations"
            }
    }]
            
