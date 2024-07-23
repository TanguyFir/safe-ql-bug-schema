import { Client } from "pg";
import "dotenv/config";
import sql from "sql-template-tag";

async function main() {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
  });
  await client.connect();

  const res = await client.query<{ name: string }>(
    sql`SELECT name FROM schema1.table1`
  );
}

main().catch(console.error);
