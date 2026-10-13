#!/usr/bin/env bash
# Downloads the latest Copal VS Code extension on every attach, so an old Codespace never keeps a stale version.
set -euo pipefail
curl -fsSL -o /tmp/copal-vscode.vsix https://github.com/benoitrion/copal-sandbox/releases/download/plugins-preview/copal-vscode.vsix
echo "Copal extension downloaded; it is installed when the editor attaches."
