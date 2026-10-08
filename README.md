# billing-api

Test application for [Copal](https://github.com/benoitrion/copal-sandbox): a small invoicing API whose engineering policy lives in [`.copalrules`](.copalrules).

```bash
npm install && npm start      # http://localhost:3000/health · /customers/c-42/invoices · POST /invoices/preview
```

## What Copal checks here

| Rule | Mode | Meaning |
|---|---|---|
| `ui-no-persistence` | enforce | `src/web/**` must not import `src/persistence/**` |
| `ledger-rounding` | enforce | money is rounded through `LedgerPort.round`, never inline (with an automatic correction) |
| `approved-dependencies` | enforce | only reviewed packages in `package.json` |
| `hardcoded-credentials`, `sql-injection` | enforce | built-in security pack |
| `invoice-contract-test` | audit (enforce in CI) | changes to `src/invoice/*.ts` come with their test |

## Pull requests

Every pull request runs the `copal` workflow: a `copal/check` commit status plus a review with inline findings. Make `copal/check` a required status check in branch protection to block merges.

The `scenario/*` branches each carry one typical AI-assisted change; open a PR from any of them to see the check:

| Branch | Expected |
|---|---|
| `scenario/01-invoice-rounding` | blocked: inline rounding (with suggested fix) + hard-coded AWS key + missing test |
| `scenario/02-ui-to-db` | blocked: controller imports persistence; audit: `console.log`, `any` |
| `scenario/03-sql-and-deps` | blocked: SQL injection, unapproved dependencies, customer IBAN |
| `scenario/05-feature-done-right` | passes: same feature through `LedgerPort`, test updated |

## Pre-commit hook

From a clone of [copal-sandbox](https://github.com/benoitrion/copal-sandbox) (`npm install && npm run build`):

```bash
COPAL=/path/to/copal-sandbox/packages/cli/dist/src/index.js
node $COPAL login --server <copal-server-url> --key <api-key>   # once; key stays in ~/.copal, never in the repo
cd billing-api && node $COPAL hook install
```

Commits that break an enforce rule are blocked locally; `node $COPAL check --fix` applies suggested corrections.
