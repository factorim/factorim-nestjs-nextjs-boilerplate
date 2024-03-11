#!/bin/bash

pnpm run migrate:dev
pnpm run seed
pnpm run start:prod

