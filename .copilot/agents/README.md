# Copilot Agents

This directory contains Copilot agent definitions used by the team.

Location: `.copilot/agents/`

Each agent file is a Markdown document with simple front-matter. Required fields:
- `name`: unique agent id
- `description`: short summary
- `tools`: allowed tools
- `model`: preferred model

How to update:
1. Edit or add `*.agent.md` in this directory.
2. Commit to a branch and open a PR for review, or push to `main` if you have permission.

Notes:
- A one-time helper script was removed; manual uploads are preferred to avoid granting broad workflow scopes.
- Keep definitions small and well-documented. Include contact info in agent file when needed.

If you need automation later, create a secure workflow and request explicit approval.
