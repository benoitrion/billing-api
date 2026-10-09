<!-- copal:begin (generated from .copalrules — edit the rules, not this block) -->
## Team engineering rules (billing-api)

Follow these rules when writing code in this repository. ENFORCED rules block the commit and the PR check.

- **hardcoded-credentials** (ENFORCED): no hard-coded credentials. Credentials in source end up in git history, prompts and logs. Load them from the secret manager.
- **sql-injection** (ENFORCED): SQL built by string concatenation/interpolation. Use parameterised queries so user input can never change the statement.
- **path-traversal**: File path built from request input. Resolve against an allow-listed base directory and reject '..' segments.
- **no-console**: console.log left in production code. Use the structured logger so output is levelled and redacted.
- **no-explicit-any**: Explicit `any` disables type checking. Prefer a precise type or `unknown` with narrowing.
- **ui-no-persistence** (ENFORCED): no imports across src/web/** -> src/persistence/**. Keep persistence behind the API boundary: controllers call services, services call ports. See docs/rules/ui-no-persistence.md.
- **ledger-rounding** (ENFORCED): Inline rounding bypasses LedgerPort. Rounding in one place keeps invoices and the ledger reconciled. See docs/rules/ledger-rounding.md.
- **approved-dependencies** (ENFORCED): dependencies allowed: @billing/*, zod, pino, fastify, decimal.js, typescript, @types/*, vitest, tsx. New packages need a security and licence review (#platform-deps). See docs/rules/approved-dependencies.md.
- **invoice-contract-test**: changes need a test matching src/invoice/{name}.test.ts. Invoice maths is contract-tested against the ledger fixtures. See docs/rules/invoice-contract-test.md.

### Ask the developer first
When your change touches one of these rules, ask the question instead of silently deciding:
- hardcoded-credentials: Where should this value live so it never reaches git, a prompt or a log?
- sql-injection: What happens to this statement if the input contains a quote?
- path-traversal: Which files should a caller be able to reach through this endpoint — and which must they never reach?
- no-console: Who will read this output in production, and how will they filter or redact it?
- no-explicit-any: What do you actually know about this value's shape here?
- ui-no-persistence: Which layer should know how invoices are stored — and what would the controller need to stop knowing?
- ledger-rounding: Who owns rounding in this codebase?
- approved-dependencies: Could an approved package or a few lines of our own code do this — and who will maintain the new one?
- invoice-contract-test: Which example would prove this invoice change is right — and is it written down as a test yet?

### How to work
- For a feature-sized task, first ask: the first concrete example (it becomes the first failing test), where the code belongs, and what could go wrong. Then work test-first in small steps.
- Run `copal check --staged` (or the copal_check_staged MCP tool) before committing.
<!-- copal:end -->
