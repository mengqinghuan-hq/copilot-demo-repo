This workflow automates syncing Copilot agent definitions.

Recommended workflow:
1. Run scripts/sync_agents_to_repo.sh from your local machine (or copy it locally) to copy files from ~/.copilot/agents into this repo and push to branch `agents-sync`.
2. The GitHub Action will validate the files and open a Pull Request to `main`.

Note: The script expects your local machine to have git access to this repository.
