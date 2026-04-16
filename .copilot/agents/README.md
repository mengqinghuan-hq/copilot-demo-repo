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

## Team collaboration (roles & approval)
Define clear roles for any change that affects agents or workflows:

- Author: the person who creates or updates the agent definition.
- Reviewer(s): at least one teammate who reviews content and validates safety and scope.
- Approver(s): repository maintainer or team lead who approves and merges the change.
- Acceptance owner: the person responsible for final verification that the agent behaves as intended.

Recommended flow:
1. Create a requirement issue (use .github/ISSUE_TEMPLATE/requirement.md) and assign Product and Acceptance owner.
2. Implement changes in a feature branch and open a PR referencing the requirement issue.
3. Request review from Reviewer(s) and wait for approvals.
4. Approver merges when CI passes.
5. Acceptance owner performs verification and closes the requirement issue when accepted.

Tagging conventions: use @team or specific handles in issue/pr metadata to notify the right people.
