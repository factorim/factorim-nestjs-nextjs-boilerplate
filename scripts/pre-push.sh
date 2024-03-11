#!/bin/sh
echo "Starting: pre-push Git hook"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

DIR=$PWD
GIT_VERSION=$(git branch --show-current)

APP_FOLDER="packages/app"
API_FOLDER="packages/api"
COMPOSER_FOLDER="packages/composer"

# Check App
check_app() {
  SERVICE_CHANGED=$(git diff --stat --cached origin/$GIT_VERSION | grep $APP_FOLDER)
  if [ -z "${SERVICE_CHANGED}" ]; then
    echo "${GREEN}Frontend has not changed${NC}"
  else
    echo "${YELLOW}Frontend has changed${NC}"
    cd "$DIR/$APP_FOLDER"
    pnpm run lint
  fi
}

# Check Api
check_api() {
  SERVICE_CHANGED=$(git diff --stat --cached origin/$GIT_VERSION | grep $API_FOLDER)
  if [ -z "${SERVICE_CHANGED}" ]; then
    echo "${GREEN}Api has not changed${NC}"
  else
    echo "${YELLOW}Api has changed${NC}"
    cd "$DIR/$API_FOLDER"
    pnpm run test
    pnpm run lint
  fi
}

# Check Composer
check_composer() {
  SERVICE_CHANGED=$(git diff --stat --cached origin/$GIT_VERSION | grep $COMPOSER_FOLDER)
  if [ -z "${SERVICE_CHANGED}" ]; then
    echo "${GREEN}Composer has not changed${NC}"
  else
    echo "${YELLOW}Composer has changed${NC}"
    cd "$DIR/$COMPOSER_FOLDER"
    pnpm run test
    pnpm run lint
  fi
}

check_app
check_api
check_composer
