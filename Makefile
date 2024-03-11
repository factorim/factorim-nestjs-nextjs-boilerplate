SERVICE := FACTORIM NESTJS NEXTJS BOILERPLATE
bold := $(shell tput bold)
sgr0 := $(shell tput sgr0)

help:
	@printf "\
	$(SERVICE)\n\
	\n\
	$(bold)SYNOPSIS$(sgr0)\n\
    make [COMMANDS]\n\
	\n\
	$(bold)COMMANDS$(sgr0)\n\
		$(bold)help$(sgr0)\n\
		  Shows this help message.\n\n\
		$(bold)demo$(sgr0)\n\
		  Starts the demo mode.\n\n\
	"

# Dev

.PHONY: demo
demo:
	@docker network inspect factorim-network >/dev/null 2>&1 || \
	docker network create factorim-network
	docker compose up
	