# billing-api: a Copal showcase

A small invoicing service, invented for demonstrating [Copal](https://copal.benoitrion.workers.dev). Its history tells a familiar story:

1. **AI slop.** The team adopts AI assistants and merges large, untested, wide changes without review: duplicated rounding, a controller reaching into the database, an unapproved dependency, leftover TODOs.
2. **Coached.** Copal is added. The next changes are small, start from tests, and stay in one module.

Try it:

- **Public diagnostic:** paste `benoitrion/billing-api` on the [diagnostic page](https://copal.benoitrion.workers.dev/readiness.html).
- **Copal on a pull request:** open the latest open pull request to see Copal's questions and reviewer guide.
- **In the editor:** open a Codespace (*Code › Codespaces › Create codespace on main*). The Copal extension installs itself; open a file in `src/` and try writing an inline rounding or an import from `src/persistence` in `src/web`.
- **Team report:** see the issues labelled `copal-report`, or run *Actions › copal › Run workflow*.

Everything here is fictional demo code.
