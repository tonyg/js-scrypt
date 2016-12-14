# js-scrypt: Pure-Javascript Emscripten-compiled scrypt routine

[Emscripten](https://github.com/kripken/emscripten)-compiled
[scrypt](http://www.tarsnap.com/scrypt.html) (version 1.2.0), a
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

## Change history

v1.2.0: Changed emscripten generation options: the `.js.mem` file is
no longer required. The interface to `scrypt_module_factory` remains
the same.

v1.1.0: Based on scrypt v1.2.0. **INCOMPATIBLE API CHANGES** since
0.5.0.

The interface to `scrypt_module_factory` has changed.

Previously, `scrypt_module_factory` expected one (optional) parameter,
`requested_total_memory`, and returned the new `scrypt` module
directly.

Now, Emscripten uses an asynchronous loading technique that requires
use of a callback. `scrypt_module_factory` now expects a callback
which will be called with the `scrypt` module when it is ready to be
called. The module factory returns no useful value: it is up to the
user-supplied callback to transmit the `scrypt` module on to where it
is needed.

v0.5.0: Based on scrypt v1.1.6.

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
    <script> scrypt_module_factory(function (scrypt) {
      ...
      alert(scrypt.to_hex(scrypt.random_bytes(16)));
      ...
    }); </script>

The `scrypt_module_factory` function takes an optional second
argument, a dictionary specifying optional configuration values. At
present, it supports only one configuration option: the total memory
available for use by `scrypt()`, to be placed in a key named
`requested_total_memory`. If supplied, `requested_total_memory` must
be a power of two. It defaults to 33,554,432 (2<sup>25</sup>) bytes; 
32 MB.

The amount of memory needed is directly proportional to the 
[work factor `N`](#using-crypto_scrypt).  A good rule of thumb is:

    For any work factor N = 2^x, your requested memory should be 2^(x+11) bytes.
    (Just add 11 to the exponent, if it's a power of 2).
    Describing your memory size requirements as a function of N: 
        mem(N) = 2^(log2(N) + 11)
    wich can be simplified to:
        mem(N) = 2048 * N

**NOTE:** these values were found through experimenting. Chrome 
(Linux, V. 52.0.2743.82 (64-bit)) will not allow more than 1GB and 
Firefox (Linux, V. 50) crashed my desktop at 2GB (with 8GB RAM installed).

(Practical) example: Hashing with the recommended N = 2<sup>20</sup> = 
1048576 for file encryption, would require 2<sup>31</sup> = 2147483648 
bytes (2GB) of memory. If N = 2<sup>14</sup> is consicered sufficient, 
only 2<sup>25</sup> = 33554432 bytes (32MB) are required. 

To enlarge the work factor without running into memory issues, 
[this paper](https://tools.ietf.org/pdf/rfc7914.pdf) from the RFC suggests 
increasing `p` instead of `N`:

> a large value of p can be used to increase the computational cost of 
scrypt without increasing the memory usage

For general use, assuming the variable `N` holds the (highest) work factor 
and is larger than 2<sup>14</sup> (16384), it is recommended to initialize 
`scrypt` like this:

    scrypt_module_factory(on_ready, { 
        requested_total_memory: N * 2048
    });

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
   
   Be aware that *N* > 2<sup>14</sup> will require more memory
   than is available by default. Refer to
   [Using the library](#using-the-library) for an in-depth
   tutorial on how to reserve the required ammount of memory.
   
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

> Copyright &copy; 2013&ndash;2016, Tony Garnock-Jones  
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
