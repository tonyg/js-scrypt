SCRYPTRAW=scrypt_raw.js
SCRYPTVERSION=1.1.6
SCRYPTUNPACKED=scrypt-$(SCRYPTVERSION)
SCRYPTTARBALL=scrypt-$(SCRYPTVERSION).tgz

PYTHON=python
EMCC=`which emcc`

## Builds well with emscripten of August 8, 2013 or newer and Clang/LLVM 3.2.
all: browser

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
	rm -rf browser

browser: $(SCRYPTRAW) scrypt_browser_prefix.js scrypt_cooked.js scrypt_browser_suffix.js
	mkdir -p $@
	cat \
		scrypt_browser_prefix.js \
		$(SCRYPTRAW) \
		scrypt_cooked.js \
		scrypt_browser_suffix.js \
	> $@/scrypt.js

veryclean: clean
	rm -rf $(SCRYPTUNPACKED)

$(SCRYPTUNPACKED): $(SCRYPTTARBALL)
	tar -zxvf $<
	cp config.h $@
	rm $@/lib/crypto/crypto_aesctr.*
	rm $@/lib/crypto/crypto_scrypt-nosse.c
	rm $@/lib/crypto/crypto_scrypt-sse.c
