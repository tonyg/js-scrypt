SCRYPTRAW=scrypt_raw.js
SCRYPTVERSION=1.2.0
SCRYPTUNPACKED=scrypt-$(SCRYPTVERSION)
SCRYPTTARBALL=scrypt-$(SCRYPTVERSION).tgz

PYTHON=python
EMCC='which emcc'

## Builds well with emscripten 1.35.0
all: browser

$(SCRYPTRAW): $(SCRYPTUNPACKED)
	cd $(SCRYPTUNPACKED); EMCC_DEBUG=2 $(EMCC) lib/crypto/crypto_scrypt.c lib/crypto/crypto_scrypt_smix.c lib/scryptenc/*.c lib/util/memlimit.c libcperciva/alg/sha256.c  libcperciva/util/*.c -I libcperciva/util/ -I libcperciva/alg/ -I libcperciva/cpusupport/ -I libcperciva/crypto/ -I lib/crypto -I lib/scryptenc/ -I lib/util/ -o ../scrypt_raw.js -DHAVE_CONFIG_H  --memory-init-file 0 -s LINKABLE=1 -s EXPORTED_FUNCTIONS="['_crypto_scrypt','_malloc','_free']" -I . -O3


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
	cp $@/config.h.in $@/config.h	
	rm $@/lib/crypto/crypto_scrypt_smix_sse2.c
