import { Client } from "pg";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

async function loadFakeData (numUser: number = 10) {
    console.log(`Users generation by ${numUser} users ${process.env.POSTGRES_HOST}`);

    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRESS_PORT ?? '5432')
    });

    await client.connect();

    const res = await client.query('SELECT 1');
    console.log(res);
    await client.end();
}

loadFakeData();