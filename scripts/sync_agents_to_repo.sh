#!/usr/bin/env bash
set -euo pipefail
# Usage: run from any location; set REPO_DIR env or pass path as first arg
REPO_DIR="${1:-.}"
SRC="$HOME/.copilot/agents"
DEST="$REPO_DIR/.copilot/agents"
if [ ! -d "$SRC" ]; then
  echo "Source directory $SRC does not exist" >&2
  exit 1
fi
mkdir -p "$DEST"
pushd "$REPO_DIR" > /dev/null
# create or reset branch
git fetch origin main --quiet || true
git checkout -B agents-sync
rsync -a --delete "$SRC/" "$DEST/"
# Only commit if changes
if git status --porcelain | grep -q '.'; then
  git add .copilot/agents
  git commit -m "Sync copilot agents from local machine\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
  git push -u origin agents-sync --force
  echo "Pushed agents to origin/agents-sync"
else
  echo "No changes to agent files"
fi
popd > /dev/null
