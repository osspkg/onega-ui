SHELL=/bin/bash
DATE=$(shell date '+%Y-%m-%d')

setup_node:
	@. ${NVM_DIR}/nvm.sh && nvm install && nvm use

install:
	yarn install --force --ignore-scripts

start:
	yarn run start

lint:
	yarn run lint

build:
	yarn run build
	@sed -i 's/\[CURR_UPDATE\]/$(DATE)/' dist/website/sitemap.xml

deploy: build
	scp -r dist/website/* root@$(value ONEGA_UI_HOST):/home/onegaui/www/
	scp development/jasta.yaml root@$(value ONEGA_UI_HOST):/etc/jasta/websites/onega-ui.yaml
	ssh root@$(value ONEGA_UI_HOST) 'systemctl restart jasta'

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

icons_release_fix: icons.patch build_icons icons.publish

icons_release_new: icons.minor build_icons icons.publish

build_styles:
	rm -rf dist/styles
	yarn styles
	cp projects/styles/src/themes/*.scss dist/styles/themes
	cp projects/styles/LICENSE dist/styles/LICENSE
	cp projects/styles/README.md dist/styles/README.md
	cp projects/styles/package.json dist/styles/package.json

styles_release_fix: styles.patch build_styles styles.publish

styles_release_new: styles.minor build_styles styles.publish

build_core: core.lint core.build

build_kit: kit.lint kit.build

watch_core: core.watch

watch_kit: kit.watch

kit_release_fix: kit.lint kit.patch kit.build kit.publish

core_release_fix: core.fix

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




