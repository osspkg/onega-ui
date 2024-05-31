SHELL=/bin/bash
DATE=$(shell date '+%Y-%m-%d')
TEMPDIR=$(shell mktemp -d)

setup_node:
	@. ${NVM_DIR}/nvm.sh && nvm install && nvm use

install:
	yarn install --force --ignore-scripts

start_dev: build_icons
	yarn run start

start_prod:
	jasta --config=development/dev/config.yaml

lint:
	yarn run apigen
	yarn run lint

build: build_icons build_styles build_core build_kit
	yarn run build

prerender:
	/home/user/.gvm/.cache/modules/bin/jasta prerender --config=development/dev/config.yaml

deploy: lint build prerender
	scp -r dist/website/* root@$(value STATIC_HOST):/home/onegaui/www/
	scp development/prod/jasta.yaml root@$(value STATIC_HOST):/etc/jasta/websites/onega-ui.yaml
	ssh root@$(value STATIC_HOST) 'systemctl restart jasta'

new_project:
	@read -p "Enter Project Name: " LIB && \
	read -p "Enter Project Prefix: " PREFIX && \
	ng generate library $$LIB --prefix=$$PREFIX && \
	ng generate @angular-eslint/schematics:add-eslint-to-project $$LIB

######################################################################

build_icons:
	rm -rf dist/icons
	yarn icons
	cp projects/icons/LICENSE dist/icons/LICENSE
	cp projects/icons/README.md dist/icons/README.md
	cp projects/icons/package.json dist/icons/package.json
	cp dist/icons/icons.css dist/icons/icons.scss

release_icons_fix: icons.patch build_icons icons.publish

release_icons_new: icons.minor build_icons icons.publish

build_styles:
	rm -rf dist/styles
	yarn styles
	cp projects/styles/src/themes/*.scss dist/styles/themes
	cp projects/styles/LICENSE dist/styles/LICENSE
	cp projects/styles/README.md dist/styles/README.md
	cp projects/styles/package.json dist/styles/package.json

release_styles_fix: styles.patch build_styles styles.publish

release_styles_new: styles.minor build_styles styles.publish

build_core: core.lint core.build

build_kit: kit.lint kit.build

watch_core: core.watch

watch_kit: kit.watch

release_kit_fix: kit.lint kit.patch kit.build kit.publish

release_kit_new: kit.lint kit.minor kit.build kit.publish

release_core_fix: core.lint core.patch core.build core.publish

release_core_new: core.lint core.minor core.build core.publish

######################################################################

%.lint:
	yarn ng lint $*

%.build:
	yarn ng build $*

%.watch:
	yarn ng build $* --watch

%.patch:
	cd projects/$* && yarn version --patch --no-git-tag-version --no-commit-hooks

%.minor:
	cd projects/$* && yarn version --minor --no-git-tag-version --no-commit-hooks

%.major:
	cd projects/$* && yarn version --major --no-git-tag-version --no-commit-hooks

%.publish:
	cd dist/$* && yarn publish --access public

%.fix: %.lint %.patch %.build %.publish
	@echo %* Done!

%.new: %.lint %.minor %.build %.publish
	@echo %* Done!




