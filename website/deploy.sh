#!/usr/bin/env bash

set -euo pipefail

# Deploy the website to the public
GIT_USER=$(git config user.name) CURRENT_BRANCH=master USE_SSH=true yarn deploy