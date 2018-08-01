# 変数定義
SRC = ./src
PUBLIC = ./public
DEVELOPMENT = development
pug = $(shell which $$(npm bin)/pug 2> /dev/null)

# 実行されるコマンド
.PHONY: install
install:
ifeq (, $(wildcard $(CURDIR)/package.json))
	npm init -y
endif

ifeq (, $(pug))
	npm i -D pug-cli
endif

.PHONY: pug
pug: install

ifeq ($(env), $(DEVELOPMENT))
	npx pug ${SRC}/pug -Pwo ${PUBLIC}
else
	npx pug ${SRC}/pug -o ${PUBLIC}
endif
