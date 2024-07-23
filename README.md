# Repository to reproduce bug of SafeQL

```bash
docker compose up
pnpm lint
```

No error is expected but SafeQL does not take schema into account and do not distinguish `schema1.table1` and `schema2.table1` then it raises an error.
