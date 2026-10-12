<!-- copal:begin (generated from .copalrules — edit the rules, not this block) -->
## Team engineering rules (billing-api)

Follow these rules when writing code in this repository. ENFORCED rules block the commit and the PR check.

- **hardcoded-credentials** (ENFORCED): no hard-coded credentials. Credentials in source end up in git history, prompts and logs. Load them from the secret manager.
- **sql-injection** (ENFORCED): SQL built by string concatenation/interpolation. Use parameterised queries so user input can never change the statement.
- **path-traversal**: File path built from request input. Resolve against an allow-listed base directory and reject '..' segments.
- **no-console**: console.log left in production code. Use the structured logger so output is levelled and redacted.
- **no-explicit-any**: Explicit `any` disables type checking. Prefer a precise type or `unknown` with narrowing.
- **focused-test** (ENFORCED): Focused test (.only) silently disables the rest of the suite. A focused test makes CI green while skipping everything else.
- **skipped-test**: Skipped test. Skipped tests rot. Fix it, delete it, or track it with a ticket.
- **change-size**: keep each change under 400 lines and 12 files. Small changes are easier to test, review and undo, and keep an AI assistant from drifting. See https://martinfowler.com/articles/branching-patterns.html#healthy-branch.
- **ui-no-persistence**: no imports across src/web/** -> src/persistence/**. Controllers call services, services call ports: persistence stays behind the API boundary. See https://alistair.cockburn.us/hexagonal-architecture/.
- **ledger-rounding**: Inline rounding bypasses LedgerPort. Rounding in one place keeps invoices and the ledger reconciled.
- **approved-dependencies**: dependencies allowed: @billing/*, zod, pino, fastify, decimal.js, typescript, @types/*, vitest, tsx. New packages need a security and licence review.
- **tests-with-code**: changes need a test matching src/**/{name}.test.ts. Billing rules are only as safe as the examples that pin them down.

### Ask the developer first
When your change touches one of these rules, ask the question instead of silently deciding:
- hardcoded-credentials: Where should this value live so it never reaches git, a prompt or a log?
- sql-injection: What happens to this statement if the input contains a quote?
- path-traversal: Which files should a caller be able to reach through this endpoint — and which must they never reach?
- no-console: Who will read this output in production, and how will they filter or redact it?
- no-explicit-any: What do you actually know about this value's shape here?
- focused-test: Which other tests stop running while this one is focused?
- skipped-test: What would have to be true for this test to run again — and who will make it true?
- change-size: What is the smallest step you could verify on its own?
- ui-no-persistence: Which service should own this query, so the controller doesn't need to know the database?
- ledger-rounding: Who owns rounding in this codebase?
- approved-dependencies: Which package we already use could do this?
- tests-with-code: Which example proves this change is right — is it a test yet?

### Before you write code
- Start with a short plan: the files you will touch and why, which rules above apply to each, and the first example you will write as a test. If a file is outside the agreed scope or a step would break a rule, ask the developer before writing any code.

### How to work
- For a feature-sized task, first ask: the first concrete example (it becomes the first failing test), where the code belongs, and what could go wrong.
- Write the agreed examples as failing tests first, show them, and wait for the developer's OK before implementing. Then implement in small steps until they pass — nothing beyond the examples.
- End every task with two lists: Assumptions I made that you didn't state, and Things I added beyond the agreed examples.
- If `.copal/brief.md` exists, it holds the agreed task, scope and examples.
- When the copal CLI or the copal_check_staged MCP tool is available, run it on your change before committing.
<!-- copal:end -->
