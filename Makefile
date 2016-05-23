SCRYPTRAW=scrypt_raw.js
SCRYPTVERSION=1.2.0
SCRYPTUNPACKED=scrypt-$(SCRYPTVERSION)
SCRYPTTARBALL=scrypt-$(SCRYPTVERSION).tgz

EMCONFIGURE=`which emconfigure`
EMCC=`which emcc`

## Builds well with emscripten SDK 1.36.4.
all: browser

$(SCRYPTRAW): $(SCRYPTUNPACKED)/config.h
	EMCC_DEBUG=2 $(EMCC) \
		-s ASSERTIONS=2 \
		-s LINKABLE=1 \
		-s EXPORTED_FUNCTIONS="['_crypto_scrypt','_malloc','_free']" \
		-O2 -o $@ \
		-DHAVE_CONFIG_H \
		-I $(SCRYPTUNPACKED) \
		-I $(SCRYPTUNPACKED)/libcperciva/cpusupport \
		-I $(SCRYPTUNPACKED)/libcperciva/alg \
		-I $(SCRYPTUNPACKED)/libcperciva/util \
		$$(find $(SCRYPTUNPACKED)/lib/crypto -name '*.c') \
		$(SCRYPTUNPACKED)/libcperciva/util/insecure_memzero.c \
		$(SCRYPTUNPACKED)/libcperciva/util/warnp.c \
		$(SCRYPTUNPACKED)/libcperciva/alg/sha256.c

$(SCRYPTUNPACKED)/config.h: $(SCRYPTUNPACKED)
	(cd $(SCRYPTUNPACKED); $(EMCONFIGURE) ./configure)
	touch $@

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
	cp scrypt_raw.js.mem $@/

veryclean: clean
	rm -rf $(SCRYPTUNPACKED)

$(SCRYPTUNPACKED): $(SCRYPTTARBALL)
	tar -zxvf $<
	rm -f $(SCRYPTUNPACKED)/lib/crypto/crypto_scrypt-ref.c
