import { Client } from "pg";
import { loadEnvConfig } from "@next/env";
import { faker } from "@faker-js/faker";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

async function loadFakeData (numUser: number = 10) {
    console.log(`Users generation by ${numUser} users`);

    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_NAME,
        password: process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRESS_PORT ?? '5432')
    });

    await client.connect();

    try {
        await client.query('BEGIN');
        for (let i = 0; i < numUser; i++) {
            await client.query('insert into public.users (username, password, avatar) values ($1, $2, $3)', [
                faker.internet.userName(),
                '123456',
                faker.image.avatar()
            ]);
        }
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        await client.end();
    }
}

// process.argv[2] is the first argument after the command
const numUser = parseInt(process.argv[2] ?? 10);
console.log(`loading ${numUser} fake users`);
loadFakeData(numUser);