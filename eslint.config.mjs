import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from "typescript-eslint";
import "dotenv/config";

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } =
  process.env;

const databaseUrl = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;

export default tseslint.config(
  ...tseslint.configs.recommendedTypeCheckedOnly,
  safeql.configs.connections({
    databaseUrl,
    targets: [{ wrapper: "client.query" }],
  })
);
