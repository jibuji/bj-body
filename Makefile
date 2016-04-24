
test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
	--compilers js:babel-register \
	--require babel-polyfill \
	--reporter spec \
	--bail



.PHONY: test