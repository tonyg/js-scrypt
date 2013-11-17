SCRYPTRAW=src/scrypt_raw.js
SCRYPTVERSION=1.1.6
JSSCRYPTVERSION=${shell node -e 'console.log(require("./tools/version.js"))'}
RELEASE=browser/scrypt-$(JSSCRYPTVERSION).js
SCRYPTUNPACKED=scrypt-$(SCRYPTVERSION)
SCRYPTTARBALL=scrypt-$(SCRYPTVERSION).tgz

PYTHON=python
EMCC=`which emcc`

## Builds well with emscripten of August 8, 2013 or newer and Clang/LLVM 3.2.
all: release

$(SCRYPTRAW): $(SCRYPTUNPACKED)
	EMCC_DEBUG=2 $(PYTHON) $(EMCC) \
		-s LINKABLE=1 \
		-s EXPORTED_FUNCTIONS="['_crypto_scrypt','_malloc','_free']" \
		-O2 --closure 1 -o $@ \
		-DHAVE_CONFIG_H \
		-I $(SCRYPTUNPACKED) \
		-I $(SCRYPTUNPACKED)/lib/util \
		$$(find $(SCRYPTUNPACKED)/lib/crypto -name '*.c')

clean:
	rm -f $(SCRYPTRAW)
	rm -r $(RELEASE)

node_modules: package.json
	@ npm prune
	@ npm install

index.js: $(SCRYPTRAW) src/scrypt_cooked.js node_modules tools/create-index.js
	node tools/create-index.js

release: node_modules index.js
	./node_modules/.bin/umd scrypt --commonJS index.js $(RELEASE)

veryclean: clean
	rm -rf $(SCRYPTUNPACKED)

$(SCRYPTUNPACKED): $(SCRYPTTARBALL)
	tar -zxvf $<
	cp config.h $@
	rm $@/lib/crypto/crypto_aesctr.*
	rm $@/lib/crypto/crypto_scrypt-nosse.c
	rm $@/lib/crypto/crypto_scrypt-sse.c
