.PHONY: deploy build status logs logs-server logs-admin logs-web down help

COMPOSE = docker compose -f docker-compose.prod.yml

help:
	@echo "Cares Bangladesh VPS Deployment Automation"
	@echo ""
	@echo "Available commands:"
	@echo "  make deploy       Pull latest origin/master and rebuild all containers"
	@echo "  make build        Alias for make deploy"
	@echo "  make status       Show running container status"
	@echo "  make logs         View all container logs"
	@echo "  make logs-server  View backend container logs"
	@echo "  make logs-admin   View dashboard container logs"
	@echo "  make logs-web     View storefront container logs"
	@echo "  make down         Stop all containers"

deploy:
	@echo "🚀 Deploying Cares Bangladesh..."
	git fetch --all
	git reset --hard origin/master
	mkdir -p /opt/www/uploads
	chmod -R 777 /opt/www/uploads
	$(COMPOSE) build
	$(COMPOSE) up -d --remove-orphans
	docker image prune -f
	@echo "✓ Deployment complete!"
	$(COMPOSE) ps

build: deploy

status:
	$(COMPOSE) ps

logs:
	$(COMPOSE) logs -f

logs-server:
	$(COMPOSE) logs -f server

logs-admin:
	$(COMPOSE) logs -f admin

logs-web:
	$(COMPOSE) logs -f web

down:
	$(COMPOSE) down
