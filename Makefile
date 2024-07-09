MAKEFILE_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
PJ_NAME := `basename ${MAKEFILE_DIR}`
HOST_UID := `id -u $$USER`
HOST_GID := `id -g $$USER`

.PHONY: up
up:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml up -d

.PHONY: stop
stop:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml stop

.PHONY: remove
remove:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml down --rmi all --remove-orphans

.PHONY: destroy
destroy:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml down --rmi all --volumes --remove-orphans

.PHONY: refresh
refresh:
	@make remove
	@make up

.PHONY: rebuild
rebuild:
	@make destroy
	@make up

.PHONY: bash
bash:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml exec node bash

.PHONY: bash-root
bash-root:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml exec -u 0 node bash

.PHONY: bash-db
bash-db:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml exec mysql bash

.PHONY: logs
logs:
	HOST_UID=$(HOST_UID) HOST_GID=$(HOST_GID) docker compose -p $(PJ_NAME) -f ./.docker/dev/docker-compose.yml logs