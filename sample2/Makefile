# gulpコマンドのパスを代入
gulp = $(shell which $$(npm bin)/gulp 2> /dev/null)

.PHONY: install
install:
ifeq (, $(wildcard $(CURDIR)/package.json))
	npm init -y
endif

ifeq (, $(gulp))
	npm i -D gulp-cli gulp gulp-uglify
endif

gulp: gulpfile.js
	make install
	npx gulp