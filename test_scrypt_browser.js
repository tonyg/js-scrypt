function output(x) {
    document.getElementById("output").innerHTML += x + "\n";
}

function main () {
    try {
	do_tests();
    } catch (e) {
	alert(JSON.stringify(e));
    }
}

var hex_digit_value = { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
			"5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
			"a": 10, "A": 10,
			"b": 11, "B": 11,
			"c": 12, "C": 12,
			"d": 13, "D": 13,
			"e": 14, "E": 14,
			"f": 15, "F": 15 };

function from_hex(s) {
    if (s.length & 1) throw { message: "from_hex: odd-length input" };
    var result = new Uint8Array(s.length / 2);
    for (var i = 0; i < s.length; i += 2) {
	var v1 = hex_digit_value[s[i]];
	var v2 = hex_digit_value[s[i+1]];
	if ((typeof v1 === "undefined")) throw { message: "Illegal hex digit: " + s[i] };
	if ((typeof v2 === "undefined")) throw { message: "Illegal hex digit: " + s[i+1] };
	result[i >> 1] = (v1 << 4) | v2;
    }
    return result;
}

function do_tests() {
    var browser =
	navigator.userAgent.match(/Firefox\/[^ ]+/) ||
	navigator.userAgent.match(/Chrome\/[^ ]+/) ||
	navigator.userAgent.match(/Safari\/[^ ]+/) ||
	["unknown/0.0"]; // perhaps it's IE. meh
    output(browser[0]);

    var scrypt = scrypt_module_factory();

    output("Starting...");

    output(scrypt.to_hex(from_hex("0123456789abcdef")));
    output("");

    function check(password, salt, n, r, p, expected_hex) {
	var expected = from_hex(expected_hex);
	var best_delta = 100000000;
	var iteration;
	for (iteration = 0; iteration < 3; iteration++) {
	    var startTime = new Date().getTime();
	    var actual = scrypt.crypto_scrypt(scrypt.encode_utf8(password),
					      scrypt.encode_utf8(salt),
					      n, r, p, expected.length);
	    var stopTime = new Date().getTime();
	    if (scrypt.to_hex(actual) !== expected_hex) {
		output("FAILED");
		output("expected: " + expected_hex);
		output("actual:   " + scrypt.to_hex(actual));
	    }
	    var delta = (stopTime - startTime);
	    if (delta < best_delta) best_delta = delta;
	}
	output("Milliseconds for "+password+"/"+salt+"/"+n+"/"+r+"/"+p+": " + best_delta);
    }

    check("", "", 16, 1, 1, "77d6576238657b203b19ca42c18a0497f16b4844e3074ae8dfdffa3fede21442fcd0069ded0948f8326a753a0fc81f17e8d3e0fb2e0d3628cf35e20c38d18906");
    check("password", "NaCl", 1024, 8, 16, "fdbabe1c9d3472007856e7190d01e9fe7c6ad7cbc8237830e77376634b3731622eaf30d92e22a3886ff109279d9830dac727afb94a83ee6d8360cbdfa2cc0640");
    check("pleaseletmein", "SodiumChloride", 16384, 8, 1, "7023bdcb3afd7348461c06cd81fd38ebfda8fbba904f8e3ea9b543f6545da1f2d5432955613f0fcf62d49705242a9af9e61e85dc0d651e40dfcf017b45575887");

    // Disabled: wayyyy too slow.
    //
    // check("pleaseletmein", "SodiumChloride", 1048576, 8, 1, "2101cb9b6a511aaeaddbbe09cf70f881ec568d574a2ffd4dabe5ee9820adaa478e56fd8f4ba5d09ffa1c6d927c40f4c337304049e8a952fbcbf45c6fa77a41a4");

    output("");
    output("...done.");
}

window.onload = main;
