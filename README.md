# js-scrypt: Pure-Javascript Emscripten-compiled scrypt routine

[Emscripten](https://github.com/kripken/emscripten)-compiled
[scrypt](http://www.tarsnap.com/scrypt.html) (version 1.1.6), a
Password-Based Key Derivation Function from Colin Percival.

For general background on what `scrypt` is, and why it's useful, see
[these slides (PDF)](http://www.tarsnap.com/scrypt/scrypt-slides.pdf)
and [Colin Percival's page on
scrypt](http://www.tarsnap.com/scrypt.html).

This library is intended only for use in the browser; for node.js,
there are [plenty](https://github.com/cheongwy/node-scrypt)
[of](https://github.com/barrysteyn/node-scrypt)
[existing](https://github.com/hatchan/scrypt) options.

This library was written in order to interoperate with
[js-nacl](https://github.com/tonyg/js-nacl), a cryptographic toolkit
library.

## Building the library

The git checkout includes a pre-compiled version of the library, so
you won't need Emscripten unless you want to change something about
the underlying library itself or how it is compiled.

Essentially, the source checkout contains everything you will need to
use the library in the browser.

## Using the library

In the browser, include the `browser/scrypt.js` script, and invoke
`scrypt_module_factory` to produce a usable `scrypt` module:

    <script src="browser/scrypt.js"></script>
    <script> var scrypt = scrypt_module_factory(); </script>
    ...
    <script> alert(scrypt.to_hex(scrypt.random_bytes(16))); </script>

The `scrypt_module_factory` function takes an optional argument
specifying the total memory available for use by `scrypt()`. If
supplied, it must be a power of two. If omitted, the default is
33,554,432 bytes; 32 megabytes.

The memory assigned to the produced `scrypt` module will not be
released until the module is garbage collected.

## Strings vs. Binary Data

The library enforces a strict distinction between strings and binary
data. Binary data is represented using instances of
[`Uint8Array`](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays/Uint8Array).

### scrypt.to_hex(Uint8Array) → String

Returns a lower-case hexadecimal representation of the given binary
data.

### scrypt.encode_utf8(String) → Uint8Array

Returns the binary equivalent of the argument, encoded using UTF-8.

### scrypt.encode_latin1(String) → Uint8Array

Returns the binary equivalent of the argument, encoded using Latin1
(an 8-bit clean encoding). If any of the character codes in the
argument string are greater than 255, an exception is thrown.

### scrypt.decode_utf8(Uint8Array) → String

Decodes the binary data in the argument using the UTF-8 encoding,
producing the corresponding string.

### scrypt.decode_latin1(Uint8Array) → String

Decodes the binary data in the argument using the Latin1 8-bit clean
encoding, producing the corresponding string.

## Using `crypto_scrypt`

To generate *L* bytes of derived key material from a password *passwd*
and a salt *salt*,

 - choose *N*, **which must be a power of two**, which will set the
   overall difficulty of the computation. The scrypt paper uses
   2<sup>14</sup>=16384 for interactive logins, and
   2<sup>20</sup>=1048576 for file encryption, but running in the
   browser is slow so Your Mileage Will Almost Certainly Vary.

 - choose *r* and *p*. Good values are r=8 and p=1. See the scrypt
   paper for details on these parameters.

Choose wisely! Picking good values for N, r and p is important for
making your keys sufficiently hard to brute-force.

Ensure your password and salt are both represented as
[`Uint8Array`](https://developer.mozilla.org/en-US/docs/JavaScript/Typed_arrays/Uint8Array)
instances, perhaps by calling `scrypt.encode_utf8` or similar.

Then,

    var keyBytes = scrypt.crypto_scrypt(password, salt, N, r, p, L);

and `keyBytes` will contain *L* bytes of key material.

For example,

    scrypt.crypto_scrypt(scrypt.encode_utf8("pleaseletmein"),
                         scrypt.encode_utf8("SodiumChloride"),
                         16384, 8, 1, 64)

produces 64 bytes of key material,

    7023bdcb3afd7348461c06cd81fd38eb
    fda8fbba904f8e3ea9b543f6545da1f2
    d5432955613f0fcf62d49705242a9af9
    e61e85dc0d651e40dfcf017b45575887

as a `Uint8Array`.

## License

js-scrypt is written by Tony Garnock-Jones
<tonygarnockjones@gmail.com> and is licensed under the [2-clause BSD license](http://opensource.org/licenses/BSD-2-Clause):

> Copyright &copy; 2013, Tony Garnock-Jones  
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions
> are met:
>
> 1. Redistributions of source code must retain the above copyright
>    notice, this list of conditions and the following disclaimer.
>
> 2. Redistributions in binary form must reproduce the above copyright
>    notice, this list of conditions and the following disclaimer in
>    the documentation and/or other materials provided with the
>    distribution.
>
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
> "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
> LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
> FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
> COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
> INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
> BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
> LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
> LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
> ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
> POSSIBILITY OF SUCH DAMAGE.

js-scrypt relies on `scrypt` itself, which is written by Colin
Percival and licensed as follows:

> Copyright 2009 Colin Percival  
> All rights reserved.
>
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions
> are met:
>
> 1. Redistributions of source code must retain the above copyright
>    notice, this list of conditions and the following disclaimer.
> 2. Redistributions in binary form must reproduce the above copyright
>    notice, this list of conditions and the following disclaimer in the
>    documentation and/or other materials provided with the distribution.
>
> THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
> ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
> ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
> OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
> HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
> LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
> OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
> SUCH DAMAGE.
