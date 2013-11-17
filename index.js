
function factory(requested_total_memory){
  var Module = {TOTAL_MEMORY: (requested_total_memory || 33554432)};
  var scrypt_raw = Module;

  function g(a) {
  throw a;
}
var k = void 0, l = !0, m = null, p = !1;
function q() {
  return function() {
  }
}
var s, t;
t || (t = eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));
var aa = {}, ba;
for(ba in t) {
  t.hasOwnProperty(ba) && (aa[ba] = t[ba])
}
var ca = "object" === typeof process && "function" === typeof require, da = "object" === typeof window, ea = "function" === typeof importScripts, fa = !da && !ca && !ea;
if(ca) {
  t.print = function(a) {
    process.stdout.write(a + "\n")
  };
  t.printErr = function(a) {
    process.stderr.write(a + "\n")
  };
  var ga = require("fs"), ha = require("path");
  t.read = function(a, b) {
    var a = ha.normalize(a), c = ga.readFileSync(a);
    !c && a != ha.resolve(a) && (a = path.join(__dirname, "..", "src", a), c = ga.readFileSync(a));
    c && !b && (c = c.toString());
    return c
  };
  t.readBinary = function(a) {
    return t.read(a, l)
  };
  t.load = function(a) {
    ia(read(a))
  };
  t.arguments = process.argv.slice(2);
  module.exports = t
}else {
  fa ? (t.print = print, "undefined" != typeof printErr && (t.printErr = printErr), t.read = "undefined" != typeof read ? read : function() {
    g("no read() available (jsc?)")
  }, t.readBinary = function(a) {
    return read(a, "binary")
  }, "undefined" != typeof scriptArgs ? t.arguments = scriptArgs : "undefined" != typeof arguments && (t.arguments = arguments), this.Module = t) : da || ea ? (t.read = function(a) {
    var b = new XMLHttpRequest;
    b.open("GET", a, p);
    b.send(m);
    return b.responseText
  }, "undefined" != typeof arguments && (t.arguments = arguments), "undefined" !== typeof console ? (t.print = function(a) {
    console.log(a)
  }, t.printErr = function(a) {
    console.log(a)
  }) : t.print = q(), da ? this.Module = t : t.load = importScripts) : g("Unknown runtime environment. Where are we?")
}
function ia(a) {
  eval.call(m, a)
}
"undefined" == !t.load && t.read && (t.load = function(a) {
  ia(t.read(a))
});
t.print || (t.print = q());
t.printErr || (t.printErr = t.print);
t.arguments || (t.arguments = []);
t.print = t.print;
t.ka = t.printErr;
t.preRun = [];
t.postRun = [];
for(ba in aa) {
  aa.hasOwnProperty(ba) && (t[ba] = aa[ba])
}
function ja() {
  return u
}
function ka(a) {
  u = a
}
function la(a) {
  switch(a) {
    case "i1":
    ;
    case "i8":
      return 1;
    case "i16":
      return 2;
    case "i32":
      return 4;
    case "i64":
      return 8;
    case "float":
      return 4;
    case "double":
      return 8;
    default:
      return"*" === a[a.length - 1] ? ma : "i" === a[0] ? (a = parseInt(a.substr(1)), w(0 === a % 8), a / 8) : 0
  }
}
function na(a, b, c) {
  c && c.length ? (c.splice || (c = Array.prototype.slice.call(c)), c.splice(0, 0, b), t["dynCall_" + a].apply(m, c)) : t["dynCall_" + a].call(m, b)
}
var oa;
function pa() {
  var a = [], b = 0;
  this.gb = function(c) {
    c &= 255;
    if(0 == a.length) {
      if(0 == (c & 128)) {
        return String.fromCharCode(c)
      }
      a.push(c);
      b = 192 == (c & 224) ? 1 : 224 == (c & 240) ? 2 : 3;
      return""
    }
    if(b && (a.push(c), b--, 0 < b)) {
      return""
    }
    var c = a[0], d = a[1], e = a[2], f = a[3];
    2 == a.length ? c = String.fromCharCode((c & 31) << 6 | d & 63) : 3 == a.length ? c = String.fromCharCode((c & 15) << 12 | (d & 63) << 6 | e & 63) : (c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63, c = String.fromCharCode(Math.floor((c - 65536) / 1024) + 55296, (c - 65536) % 1024 + 56320));
    a.length = 0;
    return c
  };
  this.Kc = function(a) {
    for(var a = unescape(encodeURIComponent(a)), b = [], e = 0;e < a.length;e++) {
      b.push(a.charCodeAt(e))
    }
    return b
  }
}
function qa(a) {
  var b = u;
  u = u + a | 0;
  u = u + 7 & -8;
  return b
}
function ra(a) {
  var b = sa;
  sa = sa + a | 0;
  sa = sa + 7 & -8;
  return b
}
function ta(a) {
  var b = y;
  y = y + a | 0;
  y = y + 7 & -8;
  y >= ua && va("Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value " + ua + ", or (2) set Module.TOTAL_MEMORY before the program runs.");
  return b
}
function wa(a, b) {
  return Math.ceil(a / (b ? b : 8)) * (b ? b : 8)
}
var ma = 4, xa = {}, ya = p, za;
function w(a, b) {
  a || va("Assertion failed: " + b)
}
t.ccall = function(a, b, c, d) {
  return Ba(Ca(a), b, c, d)
};
function Ca(a) {
  try {
    var b = t["_" + a];
    b || (b = eval("_" + a))
  }catch(c) {
  }
  w(b, "Cannot call unknown function " + a + " (perhaps LLVM optimizations or closure removed it?)");
  return b
}
function Ba(a, b, c, d) {
  function e(a, b) {
    if("string" == b) {
      if(a === m || a === k || 0 === a) {
        return 0
      }
      a = B(a);
      b = "array"
    }
    if("array" == b) {
      f || (f = ja());
      var c = qa(a.length);
      Da(a, c);
      return c
    }
    return a
  }
  var f = 0, h = 0, d = d ? d.map(function(a) {
    return e(a, c[h++])
  }) : [];
  a = a.apply(m, d);
  "string" == b ? b = Ea(a) : (w("array" != b), b = a);
  f && ka(f);
  return b
}
t.cwrap = function(a, b, c) {
  var d = Ca(a);
  return function() {
    return Ba(d, b, c, Array.prototype.slice.call(arguments))
  }
};
function Fa(a, b, c) {
  c = c || "i8";
  "*" === c.charAt(c.length - 1) && (c = "i32");
  switch(c) {
    case "i1":
      D[a] = b;
      break;
    case "i8":
      D[a] = b;
      break;
    case "i16":
      Ga[a >> 1] = b;
      break;
    case "i32":
      E[a >> 2] = b;
      break;
    case "i64":
      za = [b >>> 0, (tempDouble = b, 1 <= +Ha(tempDouble) ? 0 < tempDouble ? (Ia(+Ja(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Ka((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)];
      E[a >> 2] = za[0];
      E[a + 4 >> 2] = za[1];
      break;
    case "float":
      La[a >> 2] = b;
      break;
    case "double":
      Ma[a >> 3] = b;
      break;
    default:
      va("invalid type for setValue: " + c)
  }
}
t.setValue = Fa;
t.getValue = function(a, b) {
  b = b || "i8";
  "*" === b.charAt(b.length - 1) && (b = "i32");
  switch(b) {
    case "i1":
      return D[a];
    case "i8":
      return D[a];
    case "i16":
      return Ga[a >> 1];
    case "i32":
      return E[a >> 2];
    case "i64":
      return E[a >> 2];
    case "float":
      return La[a >> 2];
    case "double":
      return Ma[a >> 3];
    default:
      va("invalid type for setValue: " + b)
  }
  return m
};
var Na = 0, Oa = 1, F = 2, Pa = 4;
t.ALLOC_NORMAL = Na;
t.ALLOC_STACK = Oa;
t.ALLOC_STATIC = F;
t.ALLOC_DYNAMIC = 3;
t.ALLOC_NONE = Pa;
function I(a, b, c, d) {
  var e, f;
  "number" === typeof a ? (e = l, f = a) : (e = p, f = a.length);
  var h = "string" === typeof b ? b : m, c = c == Pa ? d : [Qa, qa, ra, ta][c === k ? F : c](Math.max(f, h ? 1 : b.length));
  if(e) {
    d = c;
    w(0 == (c & 3));
    for(a = c + (f & -4);d < a;d += 4) {
      E[d >> 2] = 0
    }
    for(a = c + f;d < a;) {
      D[d++ | 0] = 0
    }
    return c
  }
  if("i8" === h) {
    return a.subarray || a.slice ? J.set(a, c) : J.set(new Uint8Array(a), c), c
  }
  for(var d = 0, i, j;d < f;) {
    var n = a[d];
    "function" === typeof n && (n = xa.ff(n));
    e = h || b[d];
    0 === e ? d++ : ("i64" == e && (e = "i32"), Fa(c + d, n, e), j !== e && (i = la(e), j = e), d += i)
  }
  return c
}
t.allocate = I;
function Ea(a, b) {
  for(var c = p, d, e = 0;;) {
    d = J[a + e | 0];
    if(128 <= d) {
      c = l
    }else {
      if(0 == d && !b) {
        break
      }
    }
    e++;
    if(b && e == b) {
      break
    }
  }
  b || (b = e);
  var f = "";
  if(!c) {
    for(;0 < b;) {
      d = String.fromCharCode.apply(String, J.subarray(a, a + Math.min(b, 1024))), f = f ? f + d : d, a += 1024, b -= 1024
    }
    return f
  }
  c = new pa;
  for(e = 0;e < b;e++) {
    d = J[a + e | 0], f += c.gb(d)
  }
  return f
}
t.Pointer_stringify = Ea;
t.UTF16ToString = function(a) {
  for(var b = 0, c = "";;) {
    var d = Ga[a + 2 * b >> 1];
    if(0 == d) {
      return c
    }
    ++b;
    c += String.fromCharCode(d)
  }
};
t.stringToUTF16 = function(a, b) {
  for(var c = 0;c < a.length;++c) {
    Ga[b + 2 * c >> 1] = a.charCodeAt(c)
  }
  Ga[b + 2 * a.length >> 1] = 0
};
t.UTF32ToString = function(a) {
  for(var b = 0, c = "";;) {
    var d = E[a + 4 * b >> 2];
    if(0 == d) {
      return c
    }
    ++b;
    65536 <= d ? (d -= 65536, c += String.fromCharCode(55296 | d >> 10, 56320 | d & 1023)) : c += String.fromCharCode(d)
  }
};
t.stringToUTF32 = function(a, b) {
  for(var c = 0, d = 0;d < a.length;++d) {
    var e = a.charCodeAt(d);
    if(55296 <= e && 57343 >= e) {
      var f = a.charCodeAt(++d), e = 65536 + ((e & 1023) << 10) | f & 1023
    }
    E[b + 4 * c >> 2] = e;
    ++c
  }
  E[b + 4 * c >> 2] = 0
};
function Ra(a) {
  try {
    "number" === typeof a && (a = Ea(a));
    if("_" !== a[0] || "_" !== a[1] || "Z" !== a[2]) {
      return a
    }
    switch(a[3]) {
      case "n":
        return"operator new()";
      case "d":
        return"operator delete()"
    }
    var b = 3, c = {v:"void", b:"bool", c:"char", s:"short", i:"int", l:"long", f:"float", d:"double", w:"wchar_t", a:"signed char", h:"unsigned char", t:"unsigned short", j:"unsigned int", m:"unsigned long", x:"long long", y:"unsigned long long", z:"..."}, d = [], e = l, f = function(h, j, n) {
      var j = j || Infinity, z = "", x = [], v;
      if("N" === a[b]) {
        b++;
        "K" === a[b] && b++;
        for(v = [];"E" !== a[b];) {
          if("S" === a[b]) {
            b++;
            var A = a.indexOf("_", b);
            v.push(d[a.substring(b, A) || 0] || "?");
            b = A + 1
          }else {
            if("C" === a[b]) {
              v.push(v[v.length - 1]), b += 2
            }else {
              var A = parseInt(a.substr(b)), G = A.toString().length;
              if(!A || !G) {
                b--;
                break
              }
              var N = a.substr(b + G, A);
              v.push(N);
              d.push(N);
              b += G + A
            }
          }
        }
        b++;
        v = v.join("::");
        j--;
        if(0 === j) {
          return h ? [v] : v
        }
      }else {
        if(("K" === a[b] || e && "L" === a[b]) && b++, A = parseInt(a.substr(b))) {
          G = A.toString().length, v = a.substr(b + G, A), b += G + A
        }
      }
      e = p;
      "I" === a[b] ? (b++, A = f(l), G = f(l, 1, l), z += G[0] + " " + v + "<" + A.join(", ") + ">") : z = v;
      a:for(;b < a.length && 0 < j--;) {
        if(v = a[b++], v in c) {
          x.push(c[v])
        }else {
          switch(v) {
            case "P":
              x.push(f(l, 1, l)[0] + "*");
              break;
            case "R":
              x.push(f(l, 1, l)[0] + "&");
              break;
            case "L":
              b++;
              A = a.indexOf("E", b) - b;
              x.push(a.substr(b, A));
              b += A + 2;
              break;
            case "A":
              A = parseInt(a.substr(b));
              b += A.toString().length;
              "_" !== a[b] && g("?");
              b++;
              x.push(f(l, 1, l)[0] + " [" + A + "]");
              break;
            case "E":
              break a;
            default:
              z += "?" + v;
              break a
          }
        }
      }
      !n && (1 === x.length && "void" === x[0]) && (x = []);
      return h ? x : z + ("(" + x.join(", ") + ")")
    };
    return f()
  }catch(h) {
    return a
  }
}
function Sa() {
  var a = Error().stack;
  return a ? a.replace(/__Z[\w\d_]+/g, function(a) {
    var c = Ra(a);
    return a === c ? a : a + " [" + c + "]"
  }) : "(no stack trace available)"
}
var D, J, Ga, Ta, E, Ua, La, Ma, Va = 0, sa = 0, Wa = 0, u = 0, Xa = 0, Ya = 0, y = 0, ua = t.TOTAL_MEMORY || 16777216;
w("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && !!(new Int32Array(1)).subarray && !!(new Int32Array(1)).set, "Cannot fallback to non-typed array case: Code is too specialized");
var K = new ArrayBuffer(ua);
D = new Int8Array(K);
Ga = new Int16Array(K);
E = new Int32Array(K);
J = new Uint8Array(K);
Ta = new Uint16Array(K);
Ua = new Uint32Array(K);
La = new Float32Array(K);
Ma = new Float64Array(K);
E[0] = 255;
w(255 === J[0] && 0 === J[3], "Typed arrays 2 must be run on a little-endian system");
t.HEAP = k;
t.HEAP8 = D;
t.HEAP16 = Ga;
t.HEAP32 = E;
t.HEAPU8 = J;
t.HEAPU16 = Ta;
t.HEAPU32 = Ua;
t.HEAPF32 = La;
t.HEAPF64 = Ma;
function Za(a) {
  for(;0 < a.length;) {
    var b = a.shift();
    if("function" == typeof b) {
      b()
    }else {
      var c = b.fa;
      "number" === typeof c ? b.Ya === k ? na("v", c) : na("vi", c, [b.Ya]) : c(b.Ya === k ? m : b.Ya)
    }
  }
}
var $a = [], ab = [], bb = [], cb = [], db = [], eb = p;
function fb(a) {
  $a.unshift(a)
}
t.addOnPreRun = t.We = fb;
t.addOnInit = t.Te = function(a) {
  ab.unshift(a)
};
t.addOnPreMain = t.Ve = function(a) {
  bb.unshift(a)
};
t.addOnExit = t.Se = function(a) {
  cb.unshift(a)
};
function gb(a) {
  db.unshift(a)
}
t.addOnPostRun = t.Ue = gb;
function B(a, b, c) {
  a = (new pa).Kc(a);
  c && (a.length = c);
  b || a.push(0);
  return a
}
t.intArrayFromString = B;
t.intArrayToString = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c];
    255 < d && (d &= 255);
    b.push(String.fromCharCode(d))
  }
  return b.join("")
};
t.writeStringToMemory = function(a, b, c) {
  a = B(a, c);
  for(c = 0;c < a.length;) {
    D[b + c | 0] = a[c], c += 1
  }
};
function Da(a, b) {
  for(var c = 0;c < a.length;c++) {
    D[b + c | 0] = a[c]
  }
}
t.writeArrayToMemory = Da;
function hb(a, b, c) {
  for(var d = 0;d < a.length;d++) {
    D[b + d | 0] = a.charCodeAt(d)
  }
  c || (D[b + a.length | 0] = 0)
}
t.writeAsciiToMemory = hb;
function ib(a, b) {
  return 0 <= a ? a : 32 >= b ? 2 * Math.abs(1 << b - 1) + a : Math.pow(2, b) + a
}
function jb(a, b) {
  if(0 >= a) {
    return a
  }
  var c = 32 >= b ? Math.abs(1 << b - 1) : Math.pow(2, b - 1);
  if(a >= c && (32 >= b || a > c)) {
    a = -2 * c + a
  }
  return a
}
Math.imul || (Math.imul = function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16) | 0
});
Math.jf = Math.imul;
var Ha = Math.abs, Ka = Math.ceil, Ja = Math.floor, Ia = Math.min, kb = 0, lb = m, mb = m;
function nb() {
  kb++;
  t.monitorRunDependencies && t.monitorRunDependencies(kb)
}
t.addRunDependency = nb;
function ob() {
  kb--;
  t.monitorRunDependencies && t.monitorRunDependencies(kb);
  if(0 == kb && (lb !== m && (clearInterval(lb), lb = m), mb)) {
    var a = mb;
    mb = m;
    a()
  }
}
t.removeRunDependency = ob;
t.preloadedImages = {};
t.preloadedAudios = {};
Va = 8;
sa = Va + 1408;
ab.push({fa:function() {
  pb()
}});
var qb;
qb = qb = I([0, 0, 0, 0, 0, 0, 0, 0], "i8", F);
I([111, 112, 116, 105, 111, 110, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 115, 0, 0, 0, 0, 0, 0, 0, 111, 112, 116, 105, 111, 110, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 64, 0, 0, 0, 0, 0, 0, 89, 64, 0, 0, 0, 0, 0, 136, 195, 64, 0, 0, 0, 0, 132, 215, 151, 65, 0, 128, 224, 55, 121, 195, 65, 67, 
23, 110, 5, 181, 181, 184, 147, 70, 245, 249, 63, 233, 3, 79, 56, 77, 50, 29, 48, 249, 72, 119, 130, 90, 60, 191, 115, 127, 221, 79, 21, 117, 152, 3, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 111, 112, 116, 105, 111, 110, 32, 100, 111, 101, 115, 110, 39, 116, 32, 116, 97, 107, 101, 32, 97, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 45, 45, 32, 37, 46, 42, 115, 0, 117, 110, 107, 
110, 111, 119, 110, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 115, 0, 0, 0, 0, 117, 110, 107, 110, 111, 119, 110, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 99, 0, 0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 0, 97, 109, 98, 105, 103, 117, 111, 117, 115, 32, 111, 112, 116, 105, 111, 110, 32, 45, 45, 32, 37, 46, 42, 115, 0, 0, 0, 0, 0, 0, 0, 0, 80, 79, 83, 73, 88, 76, 89, 95, 67, 79, 82, 82, 69, 67, 84, 0, 115, 116, 100, 58, 58, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0, 0, 98, 97, 
100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 37, 115, 10, 0, 0, 0, 0, 0, 37, 115, 10, 0, 0, 0, 0, 0, 105, 110, 32, 117, 115, 101, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 0, 0, 0, 0, 58, 32, 0, 0, 0, 0, 0, 0, 58, 32, 
0, 0, 0, 0, 0, 0, 37, 115, 58, 32, 0, 0, 0, 0, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 32, 32, 32, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 109, 97, 120, 32, 115, 121, 115, 116, 101, 109, 32, 98, 121, 116, 101, 115, 32, 61, 32, 37, 49, 48, 108, 117, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 8, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 3, 0, 0, 8, 0, 0, 0, 6, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 32, 3, 0, 0, 8, 0, 0, 0, 14, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 116, 57, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0, 0, 0, 0, 83, 116, 57, 98, 97, 100, 95, 97, 108, 108, 111, 99, 0, 0, 0, 0, 83, 116, 50, 48, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 110, 101, 119, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 0, 0, 0, 0, 83, 116, 49, 54, 98, 97, 100, 95, 97, 114, 114, 97, 121, 95, 108, 101, 110, 103, 116, 104, 0, 0, 0, 0, 0, 0, 0, 0, 160, 2, 0, 0, 
0, 0, 0, 0, 176, 2, 0, 0, 248, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 192, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 224, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", Pa, 8);
var rb = wa(I(12, "i8", F), 8);
w(0 == rb % 8);
var sb = 0;
function L(a) {
  return E[sb >> 2] = a
}
t._memcpy = tb;
t._memset = ub;
var M = {sa:1, Ba:2, Be:3, Ad:4, da:5, rb:6, Wc:7, Xd:8, Aa:9, kd:10, ra:11, Le:11, hc:12, ac:13, vd:14, ie:15, hd:16, ob:17, Me:18, pb:19, je:20, Ra:21, H:22, Sd:23, gc:24, ne:25, Ie:26, wd:27, ee:28, Ua:29, ye:30, Ld:31, se:32, sd:33, ic:34, ae:42, yd:43, ld:44, Cd:45, Dd:46, Ed:47, Kd:48, Je:49, Vd:50, Bd:51, qd:35, Yd:37, ad:52, dd:53, Ne:54, Td:55, ed:56, fd:57, rd:35, gd:59, ge:60, Wd:61, Fe:62, fe:63, be:64, ce:65, xe:66, Zd:67, Zc:68, Ce:69, md:70, te:71, Nd:72, td:73, cd:74, oe:76, bd:77, 
we:78, Fd:79, Gd:80, Jd:81, Id:82, Hd:83, he:38, qb:39, Od:36, Sa:40, Ta:95, re:96, pd:104, Ud:105, $c:97, ve:91, le:88, de:92, ze:108, od:111, Xc:98, nd:103, Rd:101, Pd:100, Ge:110, xd:112, dc:113, ec:115, bc:114, cc:89, Md:90, ue:93, Ae:94, Yc:99, Qd:102, fc:106, Ca:107, He:109, Ke:87, ud:122, De:116, me:95, $d:123, zd:84, pe:75, jd:125, ke:131, qe:130, Ee:86}, vb = {"0":"Success", 1:"Not super-user", 2:"No such file or directory", 3:"No such process", 4:"Interrupted system call", 5:"I/O error", 
6:"No such device or address", 7:"Arg list too long", 8:"Exec format error", 9:"Bad file number", 10:"No children", 11:"No more processes", 12:"Not enough core", 13:"Permission denied", 14:"Bad address", 15:"Block device required", 16:"Mount device busy", 17:"File exists", 18:"Cross-device link", 19:"No such device", 20:"Not a directory", 21:"Is a directory", 22:"Invalid argument", 23:"Too many open files in system", 24:"Too many open files", 25:"Not a typewriter", 26:"Text file busy", 27:"File too large", 
28:"No space left on device", 29:"Illegal seek", 30:"Read only file system", 31:"Too many links", 32:"Broken pipe", 33:"Math arg out of domain of func", 34:"Math result not representable", 35:"File locking deadlock error", 36:"File or path name too long", 37:"No record locks available", 38:"Function not implemented", 39:"Directory not empty", 40:"Too many symbolic links", 42:"No message of desired type", 43:"Identifier removed", 44:"Channel number out of range", 45:"Level 2 not synchronized", 46:"Level 3 halted", 
47:"Level 3 reset", 48:"Link number out of range", 49:"Protocol driver not attached", 50:"No CSI structure available", 51:"Level 2 halted", 52:"Invalid exchange", 53:"Invalid request descriptor", 54:"Exchange full", 55:"No anode", 56:"Invalid request code", 57:"Invalid slot", 59:"Bad font file fmt", 60:"Device not a stream", 61:"No data (for no delay io)", 62:"Timer expired", 63:"Out of streams resources", 64:"Machine is not on the network", 65:"Package not installed", 66:"The object is remote", 
67:"The link has been severed", 68:"Advertise error", 69:"Srmount error", 70:"Communication error on send", 71:"Protocol error", 72:"Multihop attempted", 73:"Cross mount point (not really error)", 74:"Trying to read unreadable message", 75:"Value too large for defined data type", 76:"Given log. name not unique", 77:"f.d. invalid for this operation", 78:"Remote address changed", 79:"Can   access a needed shared lib", 80:"Accessing a corrupted shared lib", 81:".lib section in a.out corrupted", 82:"Attempting to link in too many libs", 
83:"Attempting to exec a shared library", 84:"Illegal byte sequence", 86:"Streams pipe error", 87:"Too many users", 88:"Socket operation on non-socket", 89:"Destination address required", 90:"Message too long", 91:"Protocol wrong type for socket", 92:"Protocol not available", 93:"Unknown protocol", 94:"Socket type not supported", 95:"Not supported", 96:"Protocol family not supported", 97:"Address family not supported by protocol family", 98:"Address already in use", 99:"Address not available", 100:"Network interface is not configured", 
101:"Network is unreachable", 102:"Connection reset by network", 103:"Connection aborted", 104:"Connection reset by peer", 105:"No buffer space available", 106:"Socket is already connected", 107:"Socket is not connected", 108:"Can't send after socket shutdown", 109:"Too many references", 110:"Connection timed out", 111:"Connection refused", 112:"Host is down", 113:"Host is unreachable", 114:"Socket already connected", 115:"Connection already in progress", 116:"Stale file handle", 122:"Quota exceeded", 
123:"No medium (in tape drive)", 125:"Operation canceled", 130:"Previous owner died", 131:"State not recoverable"};
function wb(a, b) {
  for(var c = 0, d = a.length - 1;0 <= d;d--) {
    var e = a[d];
    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--)
  }
  if(b) {
    for(;c--;c) {
      a.unshift("..")
    }
  }
  return a
}
function O(a) {
  var b = "/" === a.charAt(0), c = "/" === a.substr(-1), a = wb(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  !a && !b && (a = ".");
  a && c && (a += "/");
  return(b ? "/" : "") + a
}
function xb(a) {
  if("/" === a) {
    return"/"
  }
  var b = a.lastIndexOf("/");
  return-1 === b ? a : a.substr(b + 1)
}
function yb() {
  for(var a = "", b = p, c = arguments.length - 1;-1 <= c && !b;c--) {
    var d = 0 <= c ? arguments[c] : "/";
    "string" !== typeof d && g(new TypeError("Arguments to path.resolve must be strings"));
    d && (a = d + "/" + a, b = "/" === d.charAt(0))
  }
  a = wb(a.split("/").filter(function(a) {
    return!!a
  }), !b).join("/");
  return(b ? "/" : "") + a || "."
}
var zb = [];
function Ab(a, b) {
  zb[a] = {input:[], ia:[], va:b};
  Bb[a] = {o:Cb}
}
var Cb = {open:function(a) {
  var b = zb[a.g.Ma];
  b || g(new P(M.pb));
  a.N = b;
  a.seekable = p
}, close:function(a) {
  a.N.ia.length && a.N.va.La(a.N, 10)
}, ca:function(a, b, c, d) {
  (!a.N || !a.N.va.Lb) && g(new P(M.rb));
  for(var e = 0, f = 0;f < d;f++) {
    var h;
    try {
      h = a.N.va.Lb(a.N)
    }catch(i) {
      g(new P(M.da))
    }
    h === k && 0 === e && g(new P(M.ra));
    if(h === m || h === k) {
      break
    }
    e++;
    b[c + f] = h
  }
  e && (a.g.timestamp = Date.now());
  return e
}, write:function(a, b, c, d) {
  (!a.N || !a.N.va.La) && g(new P(M.rb));
  for(var e = 0;e < d;e++) {
    try {
      a.N.va.La(a.N, b[c + e])
    }catch(f) {
      g(new P(M.da))
    }
  }
  d && (a.g.timestamp = Date.now());
  return e
}}, Q = {P:m, $b:1, Qa:2, nb:3, X:function() {
  return Q.createNode(m, "/", 16895, 0)
}, createNode:function(a, b, c, d) {
  (24576 === (c & 61440) || 4096 === (c & 61440)) && g(new P(M.sa));
  Q.P || (Q.P = {dir:{g:{ba:Q.p.ba, K:Q.p.K, eb:Q.p.eb, ja:Q.p.ja, ja:Q.p.ja, rename:Q.p.rename, Zb:Q.p.Zb, Xb:Q.p.Xb, Vb:Q.p.Vb, Oa:Q.p.Oa}, Q:{ha:Q.o.ha}}, file:{g:{ba:Q.p.ba, K:Q.p.K}, Q:{ha:Q.o.ha, ca:Q.o.ca, write:Q.o.write, zb:Q.o.zb, Sb:Q.o.Sb}}, link:{g:{ba:Q.p.ba, K:Q.p.K, Na:Q.p.Na}, Q:{}}, Cb:{g:{ba:Q.p.ba, K:Q.p.K}, Q:Db}});
  c = Eb(a, b, c, d);
  16384 === (c.mode & 61440) ? (c.p = Q.P.dir.g, c.o = Q.P.dir.Q, c.u = {}) : 32768 === (c.mode & 61440) ? (c.p = Q.P.file.g, c.o = Q.P.file.Q, c.u = [], c.Ga = Q.Qa) : 40960 === (c.mode & 61440) ? (c.p = Q.P.link.g, c.o = Q.P.link.Q) : 8192 === (c.mode & 61440) && (c.p = Q.P.Cb.g, c.o = Q.P.Cb.Q);
  c.timestamp = Date.now();
  a && (a.u[b] = c);
  return c
}, bb:function(a) {
  a.Ga !== Q.Qa && (a.u = Array.prototype.slice.call(a.u), a.Ga = Q.Qa)
}, p:{ba:function(a) {
  var b = {};
  b.df = 8192 === (a.mode & 61440) ? a.id : 1;
  b.kf = a.id;
  b.mode = a.mode;
  b.qf = 1;
  b.uid = 0;
  b.hf = 0;
  b.Ma = a.Ma;
  b.size = 16384 === (a.mode & 61440) ? 4096 : 32768 === (a.mode & 61440) ? a.u.length : 40960 === (a.mode & 61440) ? a.link.length : 0;
  b.Ye = new Date(a.timestamp);
  b.pf = new Date(a.timestamp);
  b.cf = new Date(a.timestamp);
  b.pc = 4096;
  b.$e = Math.ceil(b.size / b.pc);
  return b
}, K:function(a, b) {
  b.mode !== k && (a.mode = b.mode);
  b.timestamp !== k && (a.timestamp = b.timestamp);
  if(b.size !== k) {
    Q.bb(a);
    var c = a.u;
    if(b.size < c.length) {
      c.length = b.size
    }else {
      for(;b.size > c.length;) {
        c.push(0)
      }
    }
  }
}, eb:function() {
  g(Fb[M.Ba])
}, ja:function(a, b, c, d) {
  return Q.createNode(a, b, c, d)
}, rename:function(a, b, c) {
  if(16384 === (a.mode & 61440)) {
    var d;
    try {
      d = Gb(b, c)
    }catch(e) {
    }
    if(d) {
      for(var f in d.u) {
        g(new P(M.qb))
      }
    }
  }
  delete a.parent.u[a.name];
  a.name = c;
  b.u[c] = a;
  a.parent = b
}, Zb:function(a, b) {
  delete a.u[b]
}, Xb:function(a, b) {
  var c = Gb(a, b), d;
  for(d in c.u) {
    g(new P(M.qb))
  }
  delete a.u[b]
}, Vb:function(a) {
  var b = [".", ".."], c;
  for(c in a.u) {
    a.u.hasOwnProperty(c) && b.push(c)
  }
  return b
}, Oa:function(a, b, c) {
  a = Q.createNode(a, b, 41471, 0);
  a.link = c;
  return a
}, Na:function(a) {
  40960 !== (a.mode & 61440) && g(new P(M.H));
  return a.link
}}, o:{ca:function(a, b, c, d, e) {
  a = a.g.u;
  if(e >= a.length) {
    return 0
  }
  d = Math.min(a.length - e, d);
  w(0 <= d);
  if(8 < d && a.subarray) {
    b.set(a.subarray(e, e + d), c)
  }else {
    for(var f = 0;f < d;f++) {
      b[c + f] = a[e + f]
    }
  }
  return d
}, write:function(a, b, c, d, e, f) {
  var h = a.g;
  h.timestamp = Date.now();
  a = h.u;
  if(d && 0 === a.length && 0 === e && b.subarray) {
    return f && 0 === c ? (h.u = b, h.Ga = b.buffer === D.buffer ? Q.$b : Q.nb) : (h.u = new Uint8Array(b.subarray(c, c + d)), h.Ga = Q.nb), d
  }
  Q.bb(h);
  for(a = h.u;a.length < e;) {
    a.push(0)
  }
  for(f = 0;f < d;f++) {
    a[e + f] = b[c + f]
  }
  return d
}, ha:function(a, b, c) {
  1 === c ? b += a.position : 2 === c && 32768 === (a.g.mode & 61440) && (b += a.g.u.length);
  0 > b && g(new P(M.H));
  a.Tc = [];
  return a.position = b
}, zb:function(a, b, c) {
  Q.bb(a.g);
  a = a.g.u;
  for(b += c;b > a.length;) {
    a.push(0)
  }
}, Sb:function(a, b, c, d, e, f, h) {
  32768 !== (a.g.mode & 61440) && g(new P(M.pb));
  a = a.g.u;
  if(!(h & 2) && (a.buffer === b || a.buffer === b.buffer)) {
    e = p, d = a.byteOffset
  }else {
    if(0 < e || e + d < a.length) {
      a = a.subarray ? a.subarray(e, e + d) : Array.prototype.slice.call(a, e, e + d)
    }
    e = l;
    (d = Qa(d)) || g(new P(M.hc));
    b.set(a, d)
  }
  return{tf:d, Xe:e}
}}}, Hb = I(1, "i32*", F), Ib = I(1, "i32*", F);
qb = I(1, "i32*", F);
var Jb = m, Lb = [], Bb = [m], R = [m], Mb = 1, Nb = m, Ob = l, P = m, Fb = {};
function Pb(a) {
  a instanceof P || g(a + " : " + Sa());
  L(a.Ib)
}
function Qb(a, b) {
  a = yb("/", a);
  b = b || {hb:0};
  8 < b.hb && g(new P(M.Sa));
  for(var c = wb(a.split("/").filter(function(a) {
    return!!a
  }), p), d = Jb, e = "/", f = 0;f < c.length;f++) {
    var h = f === c.length - 1;
    if(h && b.parent) {
      break
    }
    d = Gb(d, c[f]);
    e = O(e + "/" + c[f]);
    d.Fc && (d = d.X.root);
    if(!h || b.ta) {
      for(h = 0;40960 === (d.mode & 61440);) {
        d = Qb(e, {ta:p}).g;
        d.p.Na || g(new P(M.H));
        var d = d.p.Na(d), i = yb;
        var j = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1), e = j[0], j = j[1];
        !e && !j ? e = "." : (j && (j = j.substr(0, j.length - 1)), e += j);
        e = i(e, d);
        d = Qb(e, {hb:b.hb}).g;
        40 < h++ && g(new P(M.Sa))
      }
    }
  }
  return{path:e, g:d}
}
function Rb(a) {
  for(var b;;) {
    if(a === a.parent) {
      return a = a.X.Gc, !b ? a : "/" !== a[a.length - 1] ? a + "/" + b : a + b
    }
    b = b ? a.name + "/" + b : a.name;
    a = a.parent
  }
}
function Sb(a, b) {
  for(var c = 0, d = 0;d < b.length;d++) {
    c = (c << 5) - c + b.charCodeAt(d) | 0
  }
  return(a + c >>> 0) % Nb.length
}
function Gb(a, b) {
  var c = Tb(a, "x");
  c && g(new P(c));
  for(c = Nb[Sb(a.id, b)];c;c = c.Ic) {
    var d = c.name;
    if(c.parent.id === a.id && d === b) {
      return c
    }
  }
  return a.p.eb(a, b)
}
function Eb(a, b, c, d) {
  Ub || (Ub = function(a, b, c, d) {
    this.id = Mb++;
    this.name = b;
    this.mode = c;
    this.p = {};
    this.o = {};
    this.Ma = d;
    this.X = this.parent = m;
    a || (a = this);
    this.parent = a;
    this.X = a.X;
    a = Sb(this.parent.id, this.name);
    this.Ic = Nb[a];
    Nb[a] = this
  }, Ub.prototype = {}, Object.defineProperties(Ub.prototype, {ca:{get:function() {
    return 365 === (this.mode & 365)
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366
  }}, write:{get:function() {
    return 146 === (this.mode & 146)
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147
  }}, Dc:{get:function() {
    return 16384 === (this.mode & 61440)
  }}, Cc:{get:function() {
    return 8192 === (this.mode & 61440)
  }}}));
  return new Ub(a, b, c, d)
}
var Vb = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function Wb(a) {
  var b = Vb[a];
  "undefined" === typeof b && g(Error("Unknown file open mode: " + a));
  return b
}
function Tb(a, b) {
  return Ob ? 0 : -1 !== b.indexOf("r") && !(a.mode & 292) || -1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73) ? M.ac : 0
}
function Xb(a, b) {
  try {
    return Gb(a, b), M.ob
  }catch(c) {
  }
  return Tb(a, "wx")
}
function Yb(a, b, c) {
  Zb || (Zb = q(), Zb.prototype = {}, Object.defineProperties(Zb.prototype, {object:{get:function() {
    return this.g
  }, set:function(a) {
    this.g = a
  }}, mf:{get:function() {
    return 1 !== (this.$ & 2097155)
  }}, nf:{get:function() {
    return 0 !== (this.$ & 2097155)
  }}, lf:{get:function() {
    return this.$ & 1024
  }}}));
  if(a.__proto__) {
    a.__proto__ = Zb.prototype
  }else {
    var d = new Zb, e;
    for(e in a) {
      d[e] = a[e]
    }
    a = d
  }
  var f;
  a: {
    b = b || 1;
    for(c = c || 4096;b <= c;b++) {
      if(!R[b]) {
        f = b;
        break a
      }
    }
    g(new P(M.gc))
  }
  a.O = f;
  return R[f] = a
}
var Db = {open:function(a) {
  a.o = Bb[a.g.Ma].o;
  a.o.open && a.o.open(a)
}, ha:function() {
  g(new P(M.Ua))
}};
function $b(a, b) {
  var c;
  b && (c = Qb(b, {ta:p}), b = c.path);
  var d = {type:a, sf:{}, Gc:b, root:m}, e = a.X(d);
  e.X = d;
  d.root = e;
  c && (c.g.X = d, c.g.Fc = l, "/" === b && (Jb = d.root));
  Lb.push(d);
  return e
}
function ac(a, b, c) {
  var d = Qb(a, {parent:l}).g, a = xb(a), e = Xb(d, a);
  e && g(new P(e));
  d.p.ja || g(new P(M.sa));
  return d.p.ja(d, a, b, c)
}
function bc(a, b) {
  b = (b !== k ? b : 438) & 4095;
  b |= 32768;
  return ac(a, b, 0)
}
function cc(a, b) {
  b = (b !== k ? b : 511) & 1023;
  b |= 16384;
  return ac(a, b, 0)
}
function dc(a, b, c) {
  "undefined" === typeof c && (c = b, b = 438);
  return ac(a, b | 8192, c)
}
function ec(a, b) {
  var c = Qb(b, {parent:l}).g, d = xb(b), e = Xb(c, d);
  e && g(new P(e));
  c.p.Oa || g(new P(M.sa));
  return c.p.Oa(c, d, a)
}
function fc(a, b) {
  var c;
  c = "string" === typeof a ? Qb(a, {ta:l}).g : a;
  c.p.K || g(new P(M.sa));
  c.p.K(c, {mode:b & 4095 | c.mode & -4096, timestamp:Date.now()})
}
function gc(a, b) {
  var c, b = "string" === typeof b ? Wb(b) : b;
  c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
  var d;
  if("object" === typeof a) {
    d = a
  }else {
    a = O(a);
    try {
      d = Qb(a, {ta:!(b & 131072)}).g
    }catch(e) {
    }
  }
  b & 64 && (d ? b & 128 && g(new P(M.ob)) : d = ac(a, c, 0));
  d || g(new P(M.Ba));
  8192 === (d.mode & 61440) && (b &= -513);
  d ? 40960 === (d.mode & 61440) ? c = M.Sa : 16384 === (d.mode & 61440) && (0 !== (b & 2097155) || b & 512) ? c = M.Ra : (c = ["r", "w", "rw"][b & 2097155], b & 512 && (c += "w"), c = Tb(d, c)) : c = M.Ba;
  c && g(new P(c));
  if(b & 512) {
    c = d;
    c = "string" === typeof c ? Qb(c, {ta:l}).g : c;
    c.p.K || g(new P(M.sa));
    16384 === (c.mode & 61440) && g(new P(M.Ra));
    32768 !== (c.mode & 61440) && g(new P(M.H));
    var f = Tb(c, "w");
    f && g(new P(f));
    c.p.K(c, {size:0, timestamp:Date.now()})
  }
  b &= -641;
  d = Yb({g:d, path:Rb(d), $:b, seekable:l, position:0, o:d.o, Tc:[], error:p}, k, k);
  d.o.open && d.o.open(d);
  t.logReadFiles && !(b & 1) && (hc || (hc = {}), a in hc || (hc[a] = 1, t.printErr("read file: " + a)));
  return d
}
function ic(a) {
  try {
    a.o.close && a.o.close(a)
  }catch(b) {
    g(b)
  }finally {
    R[a.O] = m
  }
}
function jc(a, b, c, d, e, f) {
  (0 > d || 0 > e) && g(new P(M.H));
  0 === (a.$ & 2097155) && g(new P(M.Aa));
  16384 === (a.g.mode & 61440) && g(new P(M.Ra));
  a.o.write || g(new P(M.H));
  var h = l;
  "undefined" === typeof e ? (e = a.position, h = p) : a.seekable || g(new P(M.Ua));
  a.$ & 1024 && ((!a.seekable || !a.o.ha) && g(new P(M.Ua)), a.o.ha(a, 0, 2));
  b = a.o.write(a, b, c, d, e, f);
  h || (a.position += b);
  return b
}
function kc() {
  P || (P = function(a) {
    this.Ib = a;
    for(var b in M) {
      if(M[b] === a) {
        this.code = b;
        break
      }
    }
    this.message = vb[a];
    this.stack = Sa()
  }, P.prototype = Error(), [M.Ba].forEach(function(a) {
    Fb[a] = new P(a);
    Fb[a].stack = "<generic error, no stack>"
  }))
}
var lc;
function mc(a, b) {
  var c = 0;
  a && (c |= 365);
  b && (c |= 146);
  return c
}
function nc(a, b, c, d, e, f) {
  a = b ? O(("string" === typeof a ? a : Rb(a)) + "/" + b) : a;
  d = mc(d, e);
  e = bc(a, d);
  if(c) {
    if("string" === typeof c) {
      for(var a = Array(c.length), b = 0, h = c.length;b < h;++b) {
        a[b] = c.charCodeAt(b)
      }
      c = a
    }
    fc(e, d | 146);
    a = gc(e, "w");
    jc(a, c, 0, c.length, 0, f);
    ic(a);
    fc(e, d)
  }
  return e
}
function oc(a, b, c, d) {
  a = O(("string" === typeof a ? a : Rb(a)) + "/" + b);
  b = mc(!!c, !!d);
  oc.Rb || (oc.Rb = 64);
  var e;
  e = oc.Rb++ << 8 | 0;
  Bb[e] = {o:{open:function(a) {
    a.seekable = p
  }, close:function() {
    d && (d.buffer && d.buffer.length) && d(10)
  }, ca:function(a, b, d, e) {
    for(var n = 0, z = 0;z < e;z++) {
      var x;
      try {
        x = c()
      }catch(v) {
        g(new P(M.da))
      }
      x === k && 0 === n && g(new P(M.ra));
      if(x === m || x === k) {
        break
      }
      n++;
      b[d + z] = x
    }
    n && (a.g.timestamp = Date.now());
    return n
  }, write:function(a, b, c, e) {
    for(var n = 0;n < e;n++) {
      try {
        d(b[c + n])
      }catch(z) {
        g(new P(M.da))
      }
    }
    e && (a.g.timestamp = Date.now());
    return n
  }}};
  return dc(a, b, e)
}
function pc(a) {
  if(a.Cc || a.Dc || a.link || a.u) {
    return l
  }
  var b = l;
  "undefined" !== typeof XMLHttpRequest && g(Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."));
  if(t.read) {
    try {
      a.u = B(t.read(a.url), l)
    }catch(c) {
      b = p
    }
  }else {
    g(Error("Cannot load without read() or XMLHttpRequest."))
  }
  b || L(M.da);
  return b
}
var Ub, Zb, hc, S = {X:function() {
  return Eb(m, "/", 16895, 0)
}, qc:function(a, b, c) {
  c && w(1 == b == (6 == c));
  a = {tc:a, type:b, protocol:c, D:m, wa:{}, fb:[], la:[], oa:S.G};
  b = S.Ka();
  c = Eb(S.root, b, 49152, 0);
  c.na = a;
  b = Yb({path:b, g:c, $:Wb("r+"), seekable:p, o:S.o});
  a.Q = b;
  return a
}, wc:function(a) {
  a = R[a];
  return!a || 49152 !== (a.g.mode & 49152) ? m : a.g.na
}, o:{Ub:function(a) {
  a = a.g.na;
  return a.oa.Ub(a)
}, Nb:function(a, b, c) {
  a = a.g.na;
  return a.oa.Nb(a, b, c)
}, ca:function(a, b, c, d) {
  a = a.g.na;
  d = a.oa.Mc(a, d);
  if(!d) {
    return 0
  }
  b.set(d.buffer, c);
  return d.buffer.length
}, write:function(a, b, c, d) {
  a = a.g.na;
  return a.oa.Pc(a, b, c, d)
}, close:function(a) {
  a = a.g.na;
  a.oa.close(a)
}}, Ka:function() {
  S.Ka.Db || (S.Ka.Db = 0);
  return"socket[" + S.Ka.Db++ + "]"
}, G:{Ha:function(a, b, c) {
  var d;
  "object" === typeof b && (d = b, c = b = m);
  if(d) {
    d.xb ? (b = d.xb.uf, c = d.xb.vf) : ((c = /ws[s]?:\/\/([^:]+):(\d+)/.exec(d.url)) || g(Error("WebSocket URL must be in the format ws(s)://address:port")), b = c[1], c = parseInt(c[2], 10))
  }else {
    try {
      var e = ca ? {headers:{"websocket-protocol":["binary"]}} : ["binary"];
      d = new (ca ? require("ws") : window.WebSocket)("ws://" + b + ":" + c, e);
      d.binaryType = "arraybuffer"
    }catch(f) {
      g(new P(M.dc))
    }
  }
  b = {T:b, port:c, n:d, Ia:[]};
  S.G.yb(a, b);
  S.G.Ac(a, b);
  2 === a.type && "undefined" !== typeof a.pa && b.Ia.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (a.pa & 65280) >> 8, a.pa & 255]));
  return b
}, Ja:function(a, b, c) {
  return a.wa[b + ":" + c]
}, yb:function(a, b) {
  a.wa[b.T + ":" + b.port] = b
}, Wb:function(a, b) {
  delete a.wa[b.T + ":" + b.port]
}, Ac:function(a, b) {
  function c() {
    try {
      for(var a = b.Ia.shift();a;) {
        b.n.send(a), a = b.Ia.shift()
      }
    }catch(c) {
      b.n.close()
    }
  }
  function d(c) {
    w("string" !== typeof c && c.byteLength !== k);
    var c = new Uint8Array(c), d = e;
    e = p;
    d && 10 === c.length && 255 === c[0] && 255 === c[1] && 255 === c[2] && 255 === c[3] && 112 === c[4] && 111 === c[5] && 114 === c[6] && 116 === c[7] ? (c = c[8] << 8 | c[9], S.G.Wb(a, b), b.port = c, S.G.yb(a, b)) : a.la.push({T:b.T, port:b.port, data:c})
  }
  var e = l;
  ca ? (b.n.ua("open", c), b.n.ua("message", function(a, b) {
    b.Ze && d((new Uint8Array(a)).buffer)
  }), b.n.ua("error", q())) : (b.n.onopen = c, b.n.onmessage = function(a) {
    d(a.data)
  })
}, Ub:function(a) {
  if(1 === a.type && a.D) {
    return a.fb.length ? 65 : 0
  }
  var b = 0, c = 1 === a.type ? S.G.Ja(a, a.U, a.V) : m;
  if(a.la.length || !c || c && c.n.readyState === c.n.za || c && c.n.readyState === c.n.CLOSED) {
    b |= 65
  }
  if(!c || c && c.n.readyState === c.n.OPEN) {
    b |= 4
  }
  if(c && c.n.readyState === c.n.za || c && c.n.readyState === c.n.CLOSED) {
    b |= 16
  }
  return b
}, Nb:function(a, b, c) {
  switch(b) {
    case 21531:
      return b = 0, a.la.length && (b = a.la[0].data.length), E[c >> 2] = b, 0;
    default:
      return M.H
  }
}, close:function(a) {
  if(a.D) {
    try {
      a.D.close()
    }catch(b) {
    }
    a.D = m
  }
  for(var c = Object.keys(a.wa), d = 0;d < c.length;d++) {
    var e = a.wa[c[d]];
    try {
      e.n.close()
    }catch(f) {
    }
    S.G.Wb(a, e)
  }
  return 0
}, bind:function(a, b, c) {
  ("undefined" !== typeof a.jb || "undefined" !== typeof a.pa) && g(new P(M.H));
  a.jb = b;
  a.pa = c || _mkport();
  if(2 === a.type) {
    a.D && (a.D.close(), a.D = m);
    try {
      a.oa.Ec(a, 0)
    }catch(d) {
      d instanceof P || g(d), d.Ib !== M.Ta && g(d)
    }
  }
}, bf:function(a, b, c) {
  a.D && g(new P(ERRNO_CODS.Ta));
  if("undefined" !== typeof a.U && "undefined" !== typeof a.V) {
    var d = S.G.Ja(a, a.U, a.V);
    d && (d.n.readyState === d.n.CONNECTING && g(new P(M.bc)), g(new P(M.fc)))
  }
  b = S.G.Ha(a, b, c);
  a.U = b.T;
  a.V = b.port;
  g(new P(M.ec))
}, Ec:function(a) {
  ca || g(new P(M.Ta));
  a.D && g(new P(M.H));
  var b = require("ws").Oe;
  a.D = new b({host:a.jb, port:a.pa});
  a.D.ua("connection", function(b) {
    if(1 === a.type) {
      var d = S.qc(a.tc, a.type, a.protocol), b = S.G.Ha(d, b);
      d.U = b.T;
      d.V = b.port;
      a.fb.push(d)
    }else {
      S.G.Ha(a, b)
    }
  });
  a.D.ua("closed", function() {
    a.D = m
  });
  a.D.ua("error", q())
}, accept:function(a) {
  a.D || g(new P(M.H));
  var b = a.fb.shift();
  b.Q.$ = a.Q.$;
  return b
}, gf:function(a, b) {
  var c, d;
  b ? ((a.U === k || a.V === k) && g(new P(M.Ca)), c = a.U, d = a.V) : (c = a.jb || 0, d = a.pa || 0);
  return{T:c, port:d}
}, Pc:function(a, b, c, d, e, f) {
  if(2 === a.type) {
    if(e === k || f === k) {
      e = a.U, f = a.V
    }
    (e === k || f === k) && g(new P(M.cc))
  }else {
    e = a.U, f = a.V
  }
  var h = S.G.Ja(a, e, f);
  1 === a.type && ((!h || h.n.readyState === h.n.za || h.n.readyState === h.n.CLOSED) && g(new P(M.Ca)), h.n.readyState === h.n.CONNECTING && g(new P(M.ra)));
  b = b instanceof Array || b instanceof ArrayBuffer ? b.slice(c, c + d) : b.buffer.slice(b.byteOffset + c, b.byteOffset + c + d);
  if(2 === a.type && (!h || h.n.readyState !== h.n.OPEN)) {
    if(!h || h.n.readyState === h.n.za || h.n.readyState === h.n.CLOSED) {
      h = S.G.Ha(a, e, f)
    }
    h.Ia.push(b);
    return d
  }
  try {
    return h.n.send(b), d
  }catch(i) {
    g(new P(M.H))
  }
}, Mc:function(a, b) {
  1 === a.type && a.D && g(new P(M.Ca));
  var c = a.la.shift();
  if(!c) {
    if(1 === a.type) {
      var d = S.G.Ja(a, a.U, a.V);
      if(d) {
        if(d.n.readyState === d.n.za || d.n.readyState === d.n.CLOSED) {
          return m
        }
        g(new P(M.ra))
      }
      g(new P(M.Ca))
    }
    g(new P(M.ra))
  }
  var d = c.data.byteLength || c.data.length, e = c.data.byteOffset || 0, f = c.data.buffer || c.data, h = Math.min(b, d), i = {buffer:new Uint8Array(f, e, h), T:c.T, port:c.port};
  1 === a.type && h < d && (c.data = new Uint8Array(f, e + h, d - h), a.la.unshift(c));
  return i
}}};
function qc(a, b, c) {
  a = R[a];
  if(!a) {
    return L(M.Aa), -1
  }
  try {
    return jc(a, D, b, c)
  }catch(d) {
    return Pb(d), -1
  }
}
function rc(a, b, c, d) {
  c *= b;
  if(0 == c) {
    return 0
  }
  a = qc(d, a, c);
  if(-1 == a) {
    if(b = R[d]) {
      b.error = l
    }
    return 0
  }
  return Math.floor(a / b)
}
t._strlen = sc;
function tc(a) {
  return 0 > a || 0 === a && -Infinity === 1 / a
}
function uc(a, b) {
  function c(a) {
    var c;
    "double" === a ? c = Ma[b + e >> 3] : "i64" == a ? (c = [E[b + e >> 2], E[b + (e + 8) >> 2]], e += 8) : (a = "i32", c = E[b + e >> 2]);
    e += Math.max(Math.max(la(a), ma), 8);
    return c
  }
  for(var d = a, e = 0, f = [], h, i;;) {
    var j = d;
    h = D[d];
    if(0 === h) {
      break
    }
    i = D[d + 1 | 0];
    if(37 == h) {
      var n = p, z = p, x = p, v = p, A = p;
      a:for(;;) {
        switch(i) {
          case 43:
            n = l;
            break;
          case 45:
            z = l;
            break;
          case 35:
            x = l;
            break;
          case 48:
            if(v) {
              break a
            }else {
              v = l;
              break
            }
          ;
          case 32:
            A = l;
            break;
          default:
            break a
        }
        d++;
        i = D[d + 1 | 0]
      }
      var G = 0;
      if(42 == i) {
        G = c("i32"), d++, i = D[d + 1 | 0]
      }else {
        for(;48 <= i && 57 >= i;) {
          G = 10 * G + (i - 48), d++, i = D[d + 1 | 0]
        }
      }
      var N = p;
      if(46 == i) {
        var H = 0, N = l;
        d++;
        i = D[d + 1 | 0];
        if(42 == i) {
          H = c("i32"), d++
        }else {
          for(;;) {
            i = D[d + 1 | 0];
            if(48 > i || 57 < i) {
              break
            }
            H = 10 * H + (i - 48);
            d++
          }
        }
        i = D[d + 1 | 0]
      }else {
        H = 6
      }
      var C;
      switch(String.fromCharCode(i)) {
        case "h":
          i = D[d + 2 | 0];
          104 == i ? (d++, C = 1) : C = 2;
          break;
        case "l":
          i = D[d + 2 | 0];
          108 == i ? (d++, C = 8) : C = 4;
          break;
        case "L":
        ;
        case "q":
        ;
        case "j":
          C = 8;
          break;
        case "z":
        ;
        case "t":
        ;
        case "I":
          C = 4;
          break;
        default:
          C = m
      }
      C && d++;
      i = D[d + 1 | 0];
      switch(String.fromCharCode(i)) {
        case "d":
        ;
        case "i":
        ;
        case "u":
        ;
        case "o":
        ;
        case "x":
        ;
        case "X":
        ;
        case "p":
          j = 100 == i || 105 == i;
          C = C || 4;
          var T = h = c("i" + 8 * C), r;
          8 == C && (h = 117 == i ? +(h[0] >>> 0) + 4294967296 * +(h[1] >>> 0) : +(h[0] >>> 0) + 4294967296 * +(h[1] | 0));
          4 >= C && (h = (j ? jb : ib)(h & Math.pow(256, C) - 1, 8 * C));
          var Aa = Math.abs(h), j = "";
          if(100 == i || 105 == i) {
            r = 8 == C && vc ? vc.stringify(T[0], T[1], m) : jb(h, 8 * C).toString(10)
          }else {
            if(117 == i) {
              r = 8 == C && vc ? vc.stringify(T[0], T[1], l) : ib(h, 8 * C).toString(10), h = Math.abs(h)
            }else {
              if(111 == i) {
                r = (x ? "0" : "") + Aa.toString(8)
              }else {
                if(120 == i || 88 == i) {
                  j = x && 0 != h ? "0x" : "";
                  if(8 == C && vc) {
                    if(T[1]) {
                      r = (T[1] >>> 0).toString(16);
                      for(x = (T[0] >>> 0).toString(16);8 > x.length;) {
                        x = "0" + x
                      }
                      r += x
                    }else {
                      r = (T[0] >>> 0).toString(16)
                    }
                  }else {
                    if(0 > h) {
                      h = -h;
                      r = (Aa - 1).toString(16);
                      T = [];
                      for(x = 0;x < r.length;x++) {
                        T.push((15 - parseInt(r[x], 16)).toString(16))
                      }
                      for(r = T.join("");r.length < 2 * C;) {
                        r = "f" + r
                      }
                    }else {
                      r = Aa.toString(16)
                    }
                  }
                  88 == i && (j = j.toUpperCase(), r = r.toUpperCase())
                }else {
                  112 == i && (0 === Aa ? r = "(nil)" : (j = "0x", r = Aa.toString(16)))
                }
              }
            }
          }
          if(N) {
            for(;r.length < H;) {
              r = "0" + r
            }
          }
          0 <= h && (n ? j = "+" + j : A && (j = " " + j));
          "-" == r.charAt(0) && (j = "-" + j, r = r.substr(1));
          for(;j.length + r.length < G;) {
            z ? r += " " : v ? r = "0" + r : j = " " + j
          }
          r = j + r;
          r.split("").forEach(function(a) {
            f.push(a.charCodeAt(0))
          });
          break;
        case "f":
        ;
        case "F":
        ;
        case "e":
        ;
        case "E":
        ;
        case "g":
        ;
        case "G":
          h = c("double");
          if(isNaN(h)) {
            r = "nan", v = p
          }else {
            if(isFinite(h)) {
              N = p;
              C = Math.min(H, 20);
              if(103 == i || 71 == i) {
                N = l, H = H || 1, C = parseInt(h.toExponential(C).split("e")[1], 10), H > C && -4 <= C ? (i = (103 == i ? "f" : "F").charCodeAt(0), H -= C + 1) : (i = (103 == i ? "e" : "E").charCodeAt(0), H--), C = Math.min(H, 20)
              }
              if(101 == i || 69 == i) {
                r = h.toExponential(C), /[eE][-+]\d$/.test(r) && (r = r.slice(0, -1) + "0" + r.slice(-1))
              }else {
                if(102 == i || 70 == i) {
                  r = h.toFixed(C), 0 === h && tc(h) && (r = "-" + r)
                }
              }
              j = r.split("e");
              if(N && !x) {
                for(;1 < j[0].length && -1 != j[0].indexOf(".") && ("0" == j[0].slice(-1) || "." == j[0].slice(-1));) {
                  j[0] = j[0].slice(0, -1)
                }
              }else {
                for(x && -1 == r.indexOf(".") && (j[0] += ".");H > C++;) {
                  j[0] += "0"
                }
              }
              r = j[0] + (1 < j.length ? "e" + j[1] : "");
              69 == i && (r = r.toUpperCase());
              0 <= h && (n ? r = "+" + r : A && (r = " " + r))
            }else {
              r = (0 > h ? "-" : "") + "inf", v = p
            }
          }
          for(;r.length < G;) {
            r = z ? r + " " : v && ("-" == r[0] || "+" == r[0]) ? r[0] + "0" + r.slice(1) : (v ? "0" : " ") + r
          }
          97 > i && (r = r.toUpperCase());
          r.split("").forEach(function(a) {
            f.push(a.charCodeAt(0))
          });
          break;
        case "s":
          v = (n = c("i8*")) ? sc(n) : 6;
          N && (v = Math.min(v, H));
          if(!z) {
            for(;v < G--;) {
              f.push(32)
            }
          }
          if(n) {
            for(x = 0;x < v;x++) {
              f.push(J[n++ | 0])
            }
          }else {
            f = f.concat(B("(null)".substr(0, v), l))
          }
          if(z) {
            for(;v < G--;) {
              f.push(32)
            }
          }
          break;
        case "c":
          for(z && f.push(c("i8"));0 < --G;) {
            f.push(32)
          }
          z || f.push(c("i8"));
          break;
        case "n":
          z = c("i32*");
          E[z >> 2] = f.length;
          break;
        case "%":
          f.push(h);
          break;
        default:
          for(x = j;x < d + 2;x++) {
            f.push(D[x])
          }
      }
      d += 2
    }else {
      f.push(h), d += 1
    }
  }
  return f
}
function wc(a, b, c) {
  c = uc(b, c);
  b = ja();
  a = rc(I(c, "i8", Oa), 1, c.length, a);
  ka(b);
  return a
}
function xc(a) {
  xc.Za || (y = y + 4095 & -4096, xc.Za = l, w(ta), xc.oc = ta, ta = function() {
    va("cannot dynamically allocate, sbrk now has control")
  });
  var b = y;
  0 != a && xc.oc(a);
  return b
}
function U() {
  return E[U.I >> 2]
}
function yc() {
  return!!yc.mb
}
function zc(a) {
  var b = p;
  try {
    a == __ZTIi && (b = l)
  }catch(c) {
  }
  try {
    a == __ZTIj && (b = l)
  }catch(d) {
  }
  try {
    a == __ZTIl && (b = l)
  }catch(e) {
  }
  try {
    a == __ZTIm && (b = l)
  }catch(f) {
  }
  try {
    a == __ZTIx && (b = l)
  }catch(h) {
  }
  try {
    a == __ZTIy && (b = l)
  }catch(i) {
  }
  try {
    a == __ZTIf && (b = l)
  }catch(j) {
  }
  try {
    a == __ZTId && (b = l)
  }catch(n) {
  }
  try {
    a == __ZTIe && (b = l)
  }catch(z) {
  }
  try {
    a == __ZTIc && (b = l)
  }catch(x) {
  }
  try {
    a == __ZTIa && (b = l)
  }catch(v) {
  }
  try {
    a == __ZTIh && (b = l)
  }catch(A) {
  }
  try {
    a == __ZTIs && (b = l)
  }catch(G) {
  }
  try {
    a == __ZTIt && (b = l)
  }catch(N) {
  }
  return b
}
function Ac(a, b, c) {
  if(0 == c) {
    return p
  }
  if(0 == b || b == a) {
    return l
  }
  switch(zc(b) ? b : E[E[b >> 2] - 8 >> 2]) {
    case 0:
      return 0 == E[E[a >> 2] - 8 >> 2] ? Ac(E[a + 8 >> 2], E[b + 8 >> 2], c) : p;
    case 1:
      return p;
    case 2:
      return Ac(a, E[b + 8 >> 2], c);
    default:
      return p
  }
}
function Bc(a, b, c) {
  if(!Bc.Bc) {
    try {
      E[__ZTVN10__cxxabiv119__pointer_type_infoE >> 2] = 0
    }catch(d) {
    }
    try {
      E[NaN >> 2] = 1
    }catch(e) {
    }
    try {
      E[NaN >> 2] = 2
    }catch(f) {
    }
    Bc.Bc = l
  }
  E[U.I >> 2] = a;
  E[U.I + 4 >> 2] = b;
  E[U.I + 8 >> 2] = c;
  "uncaught_exception" in yc ? yc.mb++ : yc.mb = 1;
  g(a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
}
function Cc(a) {
  try {
    return Dc(a)
  }catch(b) {
  }
}
function Ec() {
  if(Ec.Oc) {
    Ec.Oc = p
  }else {
    V.setThrew(0);
    E[U.I + 4 >> 2] = 0;
    var a = E[U.I >> 2], b = E[U.I + 8 >> 2];
    b && (na("vi", b, [a]), E[U.I + 8 >> 2] = 0);
    a && (Cc(a), E[U.I >> 2] = 0)
  }
}
var Fc = I(1, "i32*", F);
function Gc(a) {
  var b, c;
  Gc.Za ? (c = E[Fc >> 2], b = E[c >> 2]) : (Gc.Za = l, W.USER = "root", W.PATH = "/", W.PWD = "/", W.HOME = "/home/emscripten", W.LANG = "en_US.UTF-8", W._ = "./this.program", b = I(1024, "i8", F), c = I(256, "i8*", F), E[c >> 2] = b, E[Fc >> 2] = c);
  var d = [], e = 0, f;
  for(f in a) {
    if("string" === typeof a[f]) {
      var h = f + "=" + a[f];
      d.push(h);
      e += h.length
    }
  }
  1024 < e && g(Error("Environment size exceeded TOTAL_ENV_SIZE!"));
  for(a = 0;a < d.length;a++) {
    h = d[a], hb(h, b), E[c + 4 * a >> 2] = b, b += h.length + 1
  }
  E[c + 4 * d.length >> 2] = 0
}
var W = {};
function Hc(a) {
  if(0 === a) {
    return 0
  }
  a = Ea(a);
  if(!W.hasOwnProperty(a)) {
    return 0
  }
  Hc.ma && Dc(Hc.ma);
  Hc.ma = I(B(W[a]), "i8", Na);
  return Hc.ma
}
function Ic(a, b, c) {
  if(a in vb) {
    if(vb[a].length > c - 1) {
      return L(M.ic)
    }
    hb(vb[a], b);
    return 0
  }
  return L(M.H)
}
function Jc(a) {
  Jc.buffer || (Jc.buffer = Qa(256));
  Ic(a, Jc.buffer, 256);
  return Jc.buffer
}
function Kc(a) {
  t.print("exit(" + a + ") called");
  t.exit(a)
}
function Lc(a, b) {
  var c = ib(a & 255);
  D[Lc.ma | 0] = c;
  if(-1 == qc(b, Lc.ma, 1)) {
    if(c = R[b]) {
      c.error = l
    }
    return-1
  }
  return c
}
var Mc = p, Nc = p, Oc = p, Pc = p, Qc = k, Rc = k;
function Sc(a) {
  return{jpg:"image/jpeg", jpeg:"image/jpeg", png:"image/png", bmp:"image/bmp", ogg:"audio/ogg", wav:"audio/wav", mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".") + 1)]
}
var Tc = [];
function Uc() {
  var a = t.canvas;
  Tc.forEach(function(b) {
    b(a.width, a.height)
  })
}
function Vc() {
  var a = t.canvas;
  this.Vc = a.width;
  this.Uc = a.height;
  a.width = screen.width;
  a.height = screen.height;
  "undefined" != typeof SDL && (a = Ua[SDL.screen + 0 * ma >> 2], E[SDL.screen + 0 * ma >> 2] = a | 8388608);
  Uc()
}
function Wc() {
  var a = t.canvas;
  a.width = this.Vc;
  a.height = this.Uc;
  "undefined" != typeof SDL && (a = Ua[SDL.screen + 0 * ma >> 2], E[SDL.screen + 0 * ma >> 2] = a & -8388609);
  Uc()
}
var Xc, Yc, Zc, $c, sb = ra(4);
E[sb >> 2] = 0;
kc();
Nb = Array(4096);
Jb = Eb(m, "/", 16895, 0);
$b(Q, "/");
cc("/tmp");
cc("/dev");
Bb[259] = {o:{ca:function() {
  return 0
}, write:function() {
  return 0
}}};
dc("/dev/null", 259);
Ab(1280, {Lb:function(a) {
  if(!a.input.length) {
    var b = m;
    if(ca) {
      if(b = process.stdin.read(), !b) {
        if(process.stdin._readableState && process.stdin._readableState.ended) {
          return m
        }
        return
      }
    }else {
      "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), b !== m && (b += "\n")) : "function" == typeof readline && (b = readline(), b !== m && (b += "\n"))
    }
    if(!b) {
      return m
    }
    a.input = B(b, l)
  }
  return a.input.shift()
}, La:function(a, b) {
  b === m || 10 === b ? (t.print(a.ia.join("")), a.ia = []) : a.ia.push(ad.gb(b))
}});
Ab(1536, {La:function(a, b) {
  b === m || 10 === b ? (t.printErr(a.ia.join("")), a.ia = []) : a.ia.push(ad.gb(b))
}});
dc("/dev/tty", 1280);
dc("/dev/tty1", 1536);
cc("/dev/shm");
cc("/dev/shm/tmp");
ab.unshift({fa:function() {
  if(!t.noFSInit && !lc) {
    w(!lc, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    lc = l;
    kc();
    t.stdin = t.stdin;
    t.stdout = t.stdout;
    t.stderr = t.stderr;
    t.stdin ? oc("/dev", "stdin", t.stdin) : ec("/dev/tty", "/dev/stdin");
    t.stdout ? oc("/dev", "stdout", m, t.stdout) : ec("/dev/tty", "/dev/stdout");
    t.stderr ? oc("/dev", "stderr", m, t.stderr) : ec("/dev/tty1", "/dev/stderr");
    var a = gc("/dev/stdin", "r");
    E[Hb >> 2] = a.O;
    w(1 === a.O, "invalid handle for stdin (" + a.O + ")");
    a = gc("/dev/stdout", "w");
    E[Ib >> 2] = a.O;
    w(2 === a.O, "invalid handle for stdout (" + a.O + ")");
    a = gc("/dev/stderr", "w");
    E[qb >> 2] = a.O;
    w(3 === a.O, "invalid handle for stderr (" + a.O + ")")
  }
}});
bb.push({fa:function() {
  Ob = p
}});
cb.push({fa:function() {
  lc = p;
  for(var a = 0;a < R.length;a++) {
    var b = R[a];
    b && ic(b)
  }
}});
t.FS_createFolder = function(a, b, c, d) {
  a = O(("string" === typeof a ? a : Rb(a)) + "/" + b);
  return cc(a, mc(c, d))
};
t.FS_createPath = function(a, b) {
  for(var a = "string" === typeof a ? a : Rb(a), c = b.split("/").reverse();c.length;) {
    var d = c.pop();
    if(d) {
      var e = O(a + "/" + d);
      try {
        cc(e)
      }catch(f) {
      }
      a = e
    }
  }
  return e
};
t.FS_createDataFile = nc;
t.FS_createPreloadedFile = function(a, b, c, d, e, f, h, i, j) {
  function n() {
    Oc = document.pointerLockElement === v || document.mozPointerLockElement === v || document.webkitPointerLockElement === v
  }
  function z(c) {
    function n(c) {
      i || nc(a, b, c, d, e, j);
      f && f();
      ob()
    }
    var r = p;
    t.preloadPlugins.forEach(function(a) {
      !r && a.canHandle(A) && (a.handle(c, A, n, function() {
        h && h();
        ob()
      }), r = l)
    });
    r || n(c)
  }
  t.preloadPlugins || (t.preloadPlugins = []);
  if(!Xc && !ea) {
    Xc = l;
    try {
      new Blob, Yc = l
    }catch(x) {
      Yc = p, console.log("warning: no blob constructor, cannot create blobs with mimetypes")
    }
    Zc = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : !Yc ? console.log("warning: no BlobBuilder") : m;
    $c = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : k;
    !t.Tb && "undefined" === typeof $c && (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), t.Tb = l);
    t.preloadPlugins.push({canHandle:function(a) {
      return!t.Tb && /\.(jpg|jpeg|png|bmp)$/i.test(a)
    }, handle:function(a, b, c, d) {
      var e = m;
      if(Yc) {
        try {
          e = new Blob([a], {type:Sc(b)}), e.size !== a.length && (e = new Blob([(new Uint8Array(a)).buffer], {type:Sc(b)}))
        }catch(f) {
          var h = "Blob constructor present but fails: " + f + "; falling back to blob builder";
          oa || (oa = {});
          oa[h] || (oa[h] = 1, t.ka(h))
        }
      }
      e || (e = new Zc, e.append((new Uint8Array(a)).buffer), e = e.getBlob());
      var i = $c.createObjectURL(e), n = new Image;
      n.onload = function() {
        w(n.complete, "Image " + b + " could not be decoded");
        var d = document.createElement("canvas");
        d.width = n.width;
        d.height = n.height;
        d.getContext("2d").drawImage(n, 0, 0);
        t.preloadedImages[b] = d;
        $c.revokeObjectURL(i);
        c && c(a)
      };
      n.onerror = function() {
        console.log("Image " + i + " could not be decoded");
        d && d()
      };
      n.src = i
    }});
    t.preloadPlugins.push({canHandle:function(a) {
      return!t.rf && a.substr(-4) in {".ogg":1, ".wav":1, ".mp3":1}
    }, handle:function(a, b, c, d) {
      function e(d) {
        h || (h = l, t.preloadedAudios[b] = d, c && c(a))
      }
      function f() {
        h || (h = l, t.preloadedAudios[b] = new Audio, d && d())
      }
      var h = p;
      if(Yc) {
        try {
          var i = new Blob([a], {type:Sc(b)})
        }catch(n) {
          return f()
        }
        var i = $c.createObjectURL(i), j = new Audio;
        j.addEventListener("canplaythrough", function() {
          e(j)
        }, p);
        j.onerror = function() {
          if(!h) {
            console.log("warning: browser could not fully decode audio " + b + ", trying slower base64 approach");
            for(var c = "", d = 0, f = 0, i = 0;i < a.length;i++) {
              d = d << 8 | a[i];
              for(f += 8;6 <= f;) {
                var n = d >> f - 6 & 63, f = f - 6, c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[n]
              }
            }
            2 == f ? (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 3) << 4], c += "==") : 4 == f && (c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(d & 15) << 2], c += "=");
            j.src = "data:audio/x-" + b.substr(-3) + ";base64," + c;
            e(j)
          }
        };
        j.src = i;
        setTimeout(function() {
          ya || e(j)
        }, 1E4)
      }else {
        return f()
      }
    }});
    var v = t.canvas;
    v.ib = v.requestPointerLock || v.mozRequestPointerLock || v.webkitRequestPointerLock;
    v.Jb = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || q();
    v.Jb = v.Jb.bind(document);
    document.addEventListener("pointerlockchange", n, p);
    document.addEventListener("mozpointerlockchange", n, p);
    document.addEventListener("webkitpointerlockchange", n, p);
    t.elementPointerLock && v.addEventListener("click", function(a) {
      !Oc && v.ib && (v.ib(), a.preventDefault())
    }, p)
  }
  var A = b ? yb(O(a + "/" + b)) : a;
  nb();
  if("string" == typeof c) {
    var G = h, N = function() {
      G ? G() : g('Loading data file "' + c + '" failed.')
    }, H = new XMLHttpRequest;
    H.open("GET", c, l);
    H.responseType = "arraybuffer";
    H.onload = function() {
      if(200 == H.status || 0 == H.status && H.response) {
        var a = H.response;
        w(a, 'Loading data file "' + c + '" failed (no arrayBuffer).');
        a = new Uint8Array(a);
        z(a);
        ob()
      }else {
        N()
      }
    };
    H.onerror = N;
    H.send(m);
    nb()
  }else {
    z(c)
  }
};
t.FS_createLazyFile = function(a, b, c, d, e) {
  var f, h;
  "undefined" !== typeof XMLHttpRequest ? (ea || g("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"), f = function() {
    this.cb = p;
    this.Ea = []
  }, f.prototype.get = function(a) {
    if(!(a > this.length - 1 || 0 > a)) {
      var b = a % this.Da;
      return this.xc(Math.floor(a / this.Da))[b]
    }
  }, f.prototype.Qc = function(a) {
    this.xc = a
  }, f.prototype.Ab = function() {
    var a = new XMLHttpRequest;
    a.open("HEAD", c, p);
    a.send(m);
    200 <= a.status && 300 > a.status || 304 === a.status || g(Error("Couldn't load " + c + ". Status: " + a.status));
    var b = Number(a.getResponseHeader("Content-length")), d, e = 1048576;
    if(!((d = a.getResponseHeader("Accept-Ranges")) && "bytes" === d)) {
      e = b
    }
    var f = this;
    f.Qc(function(a) {
      var d = a * e, h = (a + 1) * e - 1, h = Math.min(h, b - 1);
      if("undefined" === typeof f.Ea[a]) {
        var i = f.Ea;
        d > h && g(Error("invalid range (" + d + ", " + h + ") or no bytes requested!"));
        h > b - 1 && g(Error("only " + b + " bytes available! programmer error!"));
        var j = new XMLHttpRequest;
        j.open("GET", c, p);
        b !== e && j.setRequestHeader("Range", "bytes=" + d + "-" + h);
        "undefined" != typeof Uint8Array && (j.responseType = "arraybuffer");
        j.overrideMimeType && j.overrideMimeType("text/plain; charset=x-user-defined");
        j.send(m);
        200 <= j.status && 300 > j.status || 304 === j.status || g(Error("Couldn't load " + c + ". Status: " + j.status));
        d = j.response !== k ? new Uint8Array(j.response || []) : B(j.responseText || "", l);
        i[a] = d
      }
      "undefined" === typeof f.Ea[a] && g(Error("doXHR failed!"));
      return f.Ea[a]
    });
    this.nc = b;
    this.mc = e;
    this.cb = l
  }, f = new f, Object.defineProperty(f, "length", {get:function() {
    this.cb || this.Ab();
    return this.nc
  }}), Object.defineProperty(f, "chunkSize", {get:function() {
    this.cb || this.Ab();
    return this.mc
  }}), h = k) : (h = c, f = k);
  var i, a = O(("string" === typeof a ? a : Rb(a)) + "/" + b);
  i = bc(a, mc(d, e));
  f ? i.u = f : h && (i.u = m, i.url = h);
  var j = {};
  Object.keys(i.o).forEach(function(a) {
    var b = i.o[a];
    j[a] = function() {
      pc(i) || g(new P(M.da));
      return b.apply(m, arguments)
    }
  });
  j.ca = function(a, b, c, d, e) {
    pc(i) || g(new P(M.da));
    a = a.g.u;
    if(e >= a.length) {
      return 0
    }
    d = Math.min(a.length - e, d);
    w(0 <= d);
    if(a.slice) {
      for(var f = 0;f < d;f++) {
        b[c + f] = a[e + f]
      }
    }else {
      for(f = 0;f < d;f++) {
        b[c + f] = a.get(e + f)
      }
    }
    return d
  };
  i.o = j;
  return i
};
t.FS_createLink = function(a, b, c) {
  a = O(("string" === typeof a ? a : Rb(a)) + "/" + b);
  return ec(c, a)
};
t.FS_createDevice = oc;
ab.unshift({fa:q()});
cb.push({fa:q()});
var ad = new pa;
ca && (require("fs"), process.platform.match(/^win/));
ab.push({fa:function() {
  S.root = $b(S, m)
}});
U.I = I(12, "void*", F);
Gc(W);
Lc.ma = I([0], "i8", F);
t.requestFullScreen = function(a, b) {
  function c() {
    Nc = p;
    (document.webkitFullScreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.mozFullscreenElement || document.fullScreenElement || document.fullscreenElement) === d ? (d.Bb = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen, d.Bb = d.Bb.bind(document), Qc && d.ib(), Nc = l, Rc && Vc()) : Rc && Wc();
    if(t.onFullScreen) {
      t.onFullScreen(Nc)
    }
  }
  Qc = a;
  Rc = b;
  "undefined" === typeof Qc && (Qc = l);
  "undefined" === typeof Rc && (Rc = p);
  var d = t.canvas;
  Pc || (Pc = l, document.addEventListener("fullscreenchange", c, p), document.addEventListener("mozfullscreenchange", c, p), document.addEventListener("webkitfullscreenchange", c, p));
  d.Nc = d.requestFullScreen || d.mozRequestFullScreen || (d.webkitRequestFullScreen ? function() {
    d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
  } : m);
  d.Nc()
};
t.requestAnimationFrame = function(a) {
  "undefined" === typeof window ? setTimeout(a, 1E3 / 60) : (window.requestAnimationFrame || (window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.setTimeout), window.requestAnimationFrame(a))
};
t.setCanvasSize = function(a, b, c) {
  var d = t.canvas;
  d.width = a;
  d.height = b;
  c || Uc()
};
t.pauseMainLoop = q();
t.resumeMainLoop = function() {
  Mc && (Mc = p, m())
};
t.getUserMedia = function() {
  window.Kb || (window.Kb = navigator.getUserMedia || navigator.mozGetUserMedia);
  window.Kb(k)
};
Wa = u = wa(sa);
Xa = Wa + 5242880;
Ya = y = wa(Xa);
w(Ya < ua);
var bd = I([8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "i8", 3), cd = I([8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 
2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 
0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0], "i8", 3), Ia = Math.min;
var V = (function(global,env,buffer) {
// EMSCRIPTEN_START_ASM
 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = env.ctlz_i8 | 0;
 var o = env._stderr | 0;
 var p = env.__ZTVN10__cxxabiv120__si_class_type_infoE | 0;
 var q = env.__ZTVN10__cxxabiv117__class_type_infoE | 0;
 var r = env.___progname | 0;
 var s = +env.NaN;
 var t = +env.Infinity;
 var u = 0;
 var v = 0;
 var w = 0;
 var x = 0;
 var y = 0, z = 0, A = 0, B = 0, C = 0.0, D = 0, E = 0, F = 0, G = 0.0;
 var H = 0;
 var I = 0;
 var J = 0;
 var K = 0;
 var L = 0;
 var M = 0;
 var N = 0;
 var O = 0;
 var P = 0;
 var Q = 0;
 var R = global.Math.floor;
 var S = global.Math.abs;
 var T = global.Math.sqrt;
 var U = global.Math.pow;
 var V = global.Math.cos;
 var W = global.Math.sin;
 var X = global.Math.tan;
 var Y = global.Math.acos;
 var Z = global.Math.asin;
 var _ = global.Math.atan;
 var $ = global.Math.atan2;
 var aa = global.Math.exp;
 var ab = global.Math.log;
 var ac = global.Math.ceil;
 var ad = global.Math.imul;
 var ae = env.abort;
 var af = env.assert;
 var ag = env.asmPrintInt;
 var ah = env.asmPrintFloat;
 var ai = env.min;
 var aj = env.invoke_vi;
 var ak = env.invoke_vii;
 var al = env.invoke_ii;
 var am = env.invoke_viii;
 var an = env.invoke_v;
 var ao = env.invoke_iii;
 var ap = env._strncmp;
 var aq = env._llvm_va_end;
 var ar = env._sysconf;
 var as = env.___cxa_throw;
 var at = env._strerror;
 var au = env._abort;
 var av = env._fprintf;
 var aw = env._llvm_eh_exception;
 var ax = env.___cxa_free_exception;
 var ay = env._fflush;
 var az = env.___buildEnvironment;
 var aA = env.__reallyNegative;
 var aB = env._strchr;
 var aC = env._fputc;
 var aD = env.___setErrNo;
 var aE = env._fwrite;
 var aF = env._send;
 var aG = env._write;
 var aH = env._exit;
 var aI = env.___cxa_find_matching_catch;
 var aJ = env.___cxa_allocate_exception;
 var aK = env._isspace;
 var aL = env.__formatString;
 var aM = env.___resumeException;
 var aN = env._llvm_uadd_with_overflow_i32;
 var aO = env.___cxa_does_inherit;
 var aP = env._getenv;
 var aQ = env._vfprintf;
 var aR = env.___cxa_begin_catch;
 var aS = env.__ZSt18uncaught_exceptionv;
 var aT = env._pwrite;
 var aU = env.___cxa_call_unexpected;
 var aV = env._sbrk;
 var aW = env._strerror_r;
 var aX = env.___errno_location;
 var aY = env.___gxx_personality_v0;
 var aZ = env.___cxa_is_number_type;
 var a_ = env._time;
 var a$ = env.__exit;
 var a0 = env.___cxa_end_catch;
 var a1 = 0.0;
// EMSCRIPTEN_START_FUNCS
function a8(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0, ac = 0, ad = 0, ae = 0, af = 0, ag = 0, ah = 0, ai = 0, aj = 0, ak = 0, al = 0, am = 0, an = 0, ao = 0, ap = 0, aq = 0, as = 0, at = 0, av = 0, aw = 0, ax = 0, ay = 0, az = 0, aA = 0, aB = 0, aC = 0, aD = 0, aE = 0, aF = 0, aG = 0, aH = 0, aI = 0;
 do {
  if (a >>> 0 < 245) {
   if (a >>> 0 < 11) {
    b = 16;
   } else {
    b = a + 11 & -8;
   }
   d = b >>> 3;
   e = c[232] | 0;
   f = e >>> (d >>> 0);
   if ((f & 3 | 0) != 0) {
    g = (f & 1 ^ 1) + d | 0;
    h = g << 1;
    i = 968 + (h << 2) | 0;
    j = 968 + (h + 2 << 2) | 0;
    h = c[j >> 2] | 0;
    k = h + 8 | 0;
    l = c[k >> 2] | 0;
    do {
     if ((i | 0) == (l | 0)) {
      c[232] = e & ~(1 << g);
     } else {
      if (l >>> 0 < (c[236] | 0) >>> 0) {
       au();
       return 0;
      }
      m = l + 12 | 0;
      if ((c[m >> 2] | 0) == (h | 0)) {
       c[m >> 2] = i;
       c[j >> 2] = l;
       break;
      } else {
       au();
       return 0;
      }
     }
    } while (0);
    l = g << 3;
    c[h + 4 >> 2] = l | 3;
    j = h + (l | 4) | 0;
    c[j >> 2] = c[j >> 2] | 1;
    n = k;
    return n | 0;
   }
   if (b >>> 0 <= (c[234] | 0) >>> 0) {
    o = b;
    break;
   }
   if ((f | 0) != 0) {
    j = 2 << d;
    l = f << d & (j | -j);
    j = (l & -l) - 1 | 0;
    l = j >>> 12 & 16;
    i = j >>> (l >>> 0);
    j = i >>> 5 & 8;
    m = i >>> (j >>> 0);
    i = m >>> 2 & 4;
    p = m >>> (i >>> 0);
    m = p >>> 1 & 2;
    q = p >>> (m >>> 0);
    p = q >>> 1 & 1;
    r = (j | l | i | m | p) + (q >>> (p >>> 0)) | 0;
    p = r << 1;
    q = 968 + (p << 2) | 0;
    m = 968 + (p + 2 << 2) | 0;
    p = c[m >> 2] | 0;
    i = p + 8 | 0;
    l = c[i >> 2] | 0;
    do {
     if ((q | 0) == (l | 0)) {
      c[232] = e & ~(1 << r);
     } else {
      if (l >>> 0 < (c[236] | 0) >>> 0) {
       au();
       return 0;
      }
      j = l + 12 | 0;
      if ((c[j >> 2] | 0) == (p | 0)) {
       c[j >> 2] = q;
       c[m >> 2] = l;
       break;
      } else {
       au();
       return 0;
      }
     }
    } while (0);
    l = r << 3;
    m = l - b | 0;
    c[p + 4 >> 2] = b | 3;
    q = p;
    e = q + b | 0;
    c[q + (b | 4) >> 2] = m | 1;
    c[q + l >> 2] = m;
    l = c[234] | 0;
    if ((l | 0) != 0) {
     q = c[237] | 0;
     d = l >>> 3;
     l = d << 1;
     f = 968 + (l << 2) | 0;
     k = c[232] | 0;
     h = 1 << d;
     do {
      if ((k & h | 0) == 0) {
       c[232] = k | h;
       s = f;
       t = 968 + (l + 2 << 2) | 0;
      } else {
       d = 968 + (l + 2 << 2) | 0;
       g = c[d >> 2] | 0;
       if (g >>> 0 >= (c[236] | 0) >>> 0) {
        s = g;
        t = d;
        break;
       }
       au();
       return 0;
      }
     } while (0);
     c[t >> 2] = q;
     c[s + 12 >> 2] = q;
     c[q + 8 >> 2] = s;
     c[q + 12 >> 2] = f;
    }
    c[234] = m;
    c[237] = e;
    n = i;
    return n | 0;
   }
   l = c[233] | 0;
   if ((l | 0) == 0) {
    o = b;
    break;
   }
   h = (l & -l) - 1 | 0;
   l = h >>> 12 & 16;
   k = h >>> (l >>> 0);
   h = k >>> 5 & 8;
   p = k >>> (h >>> 0);
   k = p >>> 2 & 4;
   r = p >>> (k >>> 0);
   p = r >>> 1 & 2;
   d = r >>> (p >>> 0);
   r = d >>> 1 & 1;
   g = c[1232 + ((h | l | k | p | r) + (d >>> (r >>> 0)) << 2) >> 2] | 0;
   r = g;
   d = g;
   p = (c[g + 4 >> 2] & -8) - b | 0;
   while (1) {
    g = c[r + 16 >> 2] | 0;
    if ((g | 0) == 0) {
     k = c[r + 20 >> 2] | 0;
     if ((k | 0) == 0) {
      break;
     } else {
      u = k;
     }
    } else {
     u = g;
    }
    g = (c[u + 4 >> 2] & -8) - b | 0;
    k = g >>> 0 < p >>> 0;
    r = u;
    d = k ? u : d;
    p = k ? g : p;
   }
   r = d;
   i = c[236] | 0;
   if (r >>> 0 < i >>> 0) {
    au();
    return 0;
   }
   e = r + b | 0;
   m = e;
   if (r >>> 0 >= e >>> 0) {
    au();
    return 0;
   }
   e = c[d + 24 >> 2] | 0;
   f = c[d + 12 >> 2] | 0;
   do {
    if ((f | 0) == (d | 0)) {
     q = d + 20 | 0;
     g = c[q >> 2] | 0;
     if ((g | 0) == 0) {
      k = d + 16 | 0;
      l = c[k >> 2] | 0;
      if ((l | 0) == 0) {
       v = 0;
       break;
      } else {
       w = l;
       x = k;
      }
     } else {
      w = g;
      x = q;
     }
     while (1) {
      q = w + 20 | 0;
      g = c[q >> 2] | 0;
      if ((g | 0) != 0) {
       w = g;
       x = q;
       continue;
      }
      q = w + 16 | 0;
      g = c[q >> 2] | 0;
      if ((g | 0) == 0) {
       break;
      } else {
       w = g;
       x = q;
      }
     }
     if (x >>> 0 < i >>> 0) {
      au();
      return 0;
     } else {
      c[x >> 2] = 0;
      v = w;
      break;
     }
    } else {
     q = c[d + 8 >> 2] | 0;
     if (q >>> 0 < i >>> 0) {
      au();
      return 0;
     }
     g = q + 12 | 0;
     if ((c[g >> 2] | 0) != (d | 0)) {
      au();
      return 0;
     }
     k = f + 8 | 0;
     if ((c[k >> 2] | 0) == (d | 0)) {
      c[g >> 2] = f;
      c[k >> 2] = q;
      v = f;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   L223 : do {
    if ((e | 0) != 0) {
     f = d + 28 | 0;
     i = 1232 + (c[f >> 2] << 2) | 0;
     do {
      if ((d | 0) == (c[i >> 2] | 0)) {
       c[i >> 2] = v;
       if ((v | 0) != 0) {
        break;
       }
       c[233] = c[233] & ~(1 << c[f >> 2]);
       break L223;
      } else {
       if (e >>> 0 < (c[236] | 0) >>> 0) {
        au();
        return 0;
       }
       q = e + 16 | 0;
       if ((c[q >> 2] | 0) == (d | 0)) {
        c[q >> 2] = v;
       } else {
        c[e + 20 >> 2] = v;
       }
       if ((v | 0) == 0) {
        break L223;
       }
      }
     } while (0);
     if (v >>> 0 < (c[236] | 0) >>> 0) {
      au();
      return 0;
     }
     c[v + 24 >> 2] = e;
     f = c[d + 16 >> 2] | 0;
     do {
      if ((f | 0) != 0) {
       if (f >>> 0 < (c[236] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[v + 16 >> 2] = f;
        c[f + 24 >> 2] = v;
        break;
       }
      }
     } while (0);
     f = c[d + 20 >> 2] | 0;
     if ((f | 0) == 0) {
      break;
     }
     if (f >>> 0 < (c[236] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[v + 20 >> 2] = f;
      c[f + 24 >> 2] = v;
      break;
     }
    }
   } while (0);
   if (p >>> 0 < 16) {
    e = p + b | 0;
    c[d + 4 >> 2] = e | 3;
    f = r + (e + 4) | 0;
    c[f >> 2] = c[f >> 2] | 1;
   } else {
    c[d + 4 >> 2] = b | 3;
    c[r + (b | 4) >> 2] = p | 1;
    c[r + (p + b) >> 2] = p;
    f = c[234] | 0;
    if ((f | 0) != 0) {
     e = c[237] | 0;
     i = f >>> 3;
     f = i << 1;
     q = 968 + (f << 2) | 0;
     k = c[232] | 0;
     g = 1 << i;
     do {
      if ((k & g | 0) == 0) {
       c[232] = k | g;
       y = q;
       z = 968 + (f + 2 << 2) | 0;
      } else {
       i = 968 + (f + 2 << 2) | 0;
       l = c[i >> 2] | 0;
       if (l >>> 0 >= (c[236] | 0) >>> 0) {
        y = l;
        z = i;
        break;
       }
       au();
       return 0;
      }
     } while (0);
     c[z >> 2] = e;
     c[y + 12 >> 2] = e;
     c[e + 8 >> 2] = y;
     c[e + 12 >> 2] = q;
    }
    c[234] = p;
    c[237] = m;
   }
   f = d + 8 | 0;
   if ((f | 0) == 0) {
    o = b;
    break;
   } else {
    n = f;
   }
   return n | 0;
  } else {
   if (a >>> 0 > 4294967231) {
    o = -1;
    break;
   }
   f = a + 11 | 0;
   g = f & -8;
   k = c[233] | 0;
   if ((k | 0) == 0) {
    o = g;
    break;
   }
   r = -g | 0;
   i = f >>> 8;
   do {
    if ((i | 0) == 0) {
     A = 0;
    } else {
     if (g >>> 0 > 16777215) {
      A = 31;
      break;
     }
     f = (i + 1048320 | 0) >>> 16 & 8;
     l = i << f;
     h = (l + 520192 | 0) >>> 16 & 4;
     j = l << h;
     l = (j + 245760 | 0) >>> 16 & 2;
     B = 14 - (h | f | l) + (j << l >>> 15) | 0;
     A = g >>> ((B + 7 | 0) >>> 0) & 1 | B << 1;
    }
   } while (0);
   i = c[1232 + (A << 2) >> 2] | 0;
   L271 : do {
    if ((i | 0) == 0) {
     C = 0;
     D = r;
     E = 0;
    } else {
     if ((A | 0) == 31) {
      F = 0;
     } else {
      F = 25 - (A >>> 1) | 0;
     }
     d = 0;
     m = r;
     p = i;
     q = g << F;
     e = 0;
     while (1) {
      B = c[p + 4 >> 2] & -8;
      l = B - g | 0;
      if (l >>> 0 < m >>> 0) {
       if ((B | 0) == (g | 0)) {
        C = p;
        D = l;
        E = p;
        break L271;
       } else {
        G = p;
        H = l;
       }
      } else {
       G = d;
       H = m;
      }
      l = c[p + 20 >> 2] | 0;
      B = c[p + 16 + (q >>> 31 << 2) >> 2] | 0;
      j = (l | 0) == 0 | (l | 0) == (B | 0) ? e : l;
      if ((B | 0) == 0) {
       C = G;
       D = H;
       E = j;
       break;
      } else {
       d = G;
       m = H;
       p = B;
       q = q << 1;
       e = j;
      }
     }
    }
   } while (0);
   if ((E | 0) == 0 & (C | 0) == 0) {
    i = 2 << A;
    r = k & (i | -i);
    if ((r | 0) == 0) {
     o = g;
     break;
    }
    i = (r & -r) - 1 | 0;
    r = i >>> 12 & 16;
    e = i >>> (r >>> 0);
    i = e >>> 5 & 8;
    q = e >>> (i >>> 0);
    e = q >>> 2 & 4;
    p = q >>> (e >>> 0);
    q = p >>> 1 & 2;
    m = p >>> (q >>> 0);
    p = m >>> 1 & 1;
    I = c[1232 + ((i | r | e | q | p) + (m >>> (p >>> 0)) << 2) >> 2] | 0;
   } else {
    I = E;
   }
   if ((I | 0) == 0) {
    J = D;
    K = C;
   } else {
    p = I;
    m = D;
    q = C;
    while (1) {
     e = (c[p + 4 >> 2] & -8) - g | 0;
     r = e >>> 0 < m >>> 0;
     i = r ? e : m;
     e = r ? p : q;
     r = c[p + 16 >> 2] | 0;
     if ((r | 0) != 0) {
      p = r;
      m = i;
      q = e;
      continue;
     }
     r = c[p + 20 >> 2] | 0;
     if ((r | 0) == 0) {
      J = i;
      K = e;
      break;
     } else {
      p = r;
      m = i;
      q = e;
     }
    }
   }
   if ((K | 0) == 0) {
    o = g;
    break;
   }
   if (J >>> 0 >= ((c[234] | 0) - g | 0) >>> 0) {
    o = g;
    break;
   }
   q = K;
   m = c[236] | 0;
   if (q >>> 0 < m >>> 0) {
    au();
    return 0;
   }
   p = q + g | 0;
   k = p;
   if (q >>> 0 >= p >>> 0) {
    au();
    return 0;
   }
   e = c[K + 24 >> 2] | 0;
   i = c[K + 12 >> 2] | 0;
   do {
    if ((i | 0) == (K | 0)) {
     r = K + 20 | 0;
     d = c[r >> 2] | 0;
     if ((d | 0) == 0) {
      j = K + 16 | 0;
      B = c[j >> 2] | 0;
      if ((B | 0) == 0) {
       L = 0;
       break;
      } else {
       M = B;
       N = j;
      }
     } else {
      M = d;
      N = r;
     }
     while (1) {
      r = M + 20 | 0;
      d = c[r >> 2] | 0;
      if ((d | 0) != 0) {
       M = d;
       N = r;
       continue;
      }
      r = M + 16 | 0;
      d = c[r >> 2] | 0;
      if ((d | 0) == 0) {
       break;
      } else {
       M = d;
       N = r;
      }
     }
     if (N >>> 0 < m >>> 0) {
      au();
      return 0;
     } else {
      c[N >> 2] = 0;
      L = M;
      break;
     }
    } else {
     r = c[K + 8 >> 2] | 0;
     if (r >>> 0 < m >>> 0) {
      au();
      return 0;
     }
     d = r + 12 | 0;
     if ((c[d >> 2] | 0) != (K | 0)) {
      au();
      return 0;
     }
     j = i + 8 | 0;
     if ((c[j >> 2] | 0) == (K | 0)) {
      c[d >> 2] = i;
      c[j >> 2] = r;
      L = i;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   L321 : do {
    if ((e | 0) != 0) {
     i = K + 28 | 0;
     m = 1232 + (c[i >> 2] << 2) | 0;
     do {
      if ((K | 0) == (c[m >> 2] | 0)) {
       c[m >> 2] = L;
       if ((L | 0) != 0) {
        break;
       }
       c[233] = c[233] & ~(1 << c[i >> 2]);
       break L321;
      } else {
       if (e >>> 0 < (c[236] | 0) >>> 0) {
        au();
        return 0;
       }
       r = e + 16 | 0;
       if ((c[r >> 2] | 0) == (K | 0)) {
        c[r >> 2] = L;
       } else {
        c[e + 20 >> 2] = L;
       }
       if ((L | 0) == 0) {
        break L321;
       }
      }
     } while (0);
     if (L >>> 0 < (c[236] | 0) >>> 0) {
      au();
      return 0;
     }
     c[L + 24 >> 2] = e;
     i = c[K + 16 >> 2] | 0;
     do {
      if ((i | 0) != 0) {
       if (i >>> 0 < (c[236] | 0) >>> 0) {
        au();
        return 0;
       } else {
        c[L + 16 >> 2] = i;
        c[i + 24 >> 2] = L;
        break;
       }
      }
     } while (0);
     i = c[K + 20 >> 2] | 0;
     if ((i | 0) == 0) {
      break;
     }
     if (i >>> 0 < (c[236] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[L + 20 >> 2] = i;
      c[i + 24 >> 2] = L;
      break;
     }
    }
   } while (0);
   do {
    if (J >>> 0 < 16) {
     e = J + g | 0;
     c[K + 4 >> 2] = e | 3;
     i = q + (e + 4) | 0;
     c[i >> 2] = c[i >> 2] | 1;
    } else {
     c[K + 4 >> 2] = g | 3;
     c[q + (g | 4) >> 2] = J | 1;
     c[q + (J + g) >> 2] = J;
     i = J >>> 3;
     if (J >>> 0 < 256) {
      e = i << 1;
      m = 968 + (e << 2) | 0;
      r = c[232] | 0;
      j = 1 << i;
      do {
       if ((r & j | 0) == 0) {
        c[232] = r | j;
        O = m;
        P = 968 + (e + 2 << 2) | 0;
       } else {
        i = 968 + (e + 2 << 2) | 0;
        d = c[i >> 2] | 0;
        if (d >>> 0 >= (c[236] | 0) >>> 0) {
         O = d;
         P = i;
         break;
        }
        au();
        return 0;
       }
      } while (0);
      c[P >> 2] = k;
      c[O + 12 >> 2] = k;
      c[q + (g + 8) >> 2] = O;
      c[q + (g + 12) >> 2] = m;
      break;
     }
     e = p;
     j = J >>> 8;
     do {
      if ((j | 0) == 0) {
       Q = 0;
      } else {
       if (J >>> 0 > 16777215) {
        Q = 31;
        break;
       }
       r = (j + 1048320 | 0) >>> 16 & 8;
       i = j << r;
       d = (i + 520192 | 0) >>> 16 & 4;
       B = i << d;
       i = (B + 245760 | 0) >>> 16 & 2;
       l = 14 - (d | r | i) + (B << i >>> 15) | 0;
       Q = J >>> ((l + 7 | 0) >>> 0) & 1 | l << 1;
      }
     } while (0);
     j = 1232 + (Q << 2) | 0;
     c[q + (g + 28) >> 2] = Q;
     c[q + (g + 20) >> 2] = 0;
     c[q + (g + 16) >> 2] = 0;
     m = c[233] | 0;
     l = 1 << Q;
     if ((m & l | 0) == 0) {
      c[233] = m | l;
      c[j >> 2] = e;
      c[q + (g + 24) >> 2] = j;
      c[q + (g + 12) >> 2] = e;
      c[q + (g + 8) >> 2] = e;
      break;
     }
     if ((Q | 0) == 31) {
      R = 0;
     } else {
      R = 25 - (Q >>> 1) | 0;
     }
     l = J << R;
     m = c[j >> 2] | 0;
     while (1) {
      if ((c[m + 4 >> 2] & -8 | 0) == (J | 0)) {
       break;
      }
      S = m + 16 + (l >>> 31 << 2) | 0;
      j = c[S >> 2] | 0;
      if ((j | 0) == 0) {
       T = 262;
       break;
      } else {
       l = l << 1;
       m = j;
      }
     }
     if ((T | 0) == 262) {
      if (S >>> 0 < (c[236] | 0) >>> 0) {
       au();
       return 0;
      } else {
       c[S >> 2] = e;
       c[q + (g + 24) >> 2] = m;
       c[q + (g + 12) >> 2] = e;
       c[q + (g + 8) >> 2] = e;
       break;
      }
     }
     l = m + 8 | 0;
     j = c[l >> 2] | 0;
     i = c[236] | 0;
     if (m >>> 0 < i >>> 0) {
      au();
      return 0;
     }
     if (j >>> 0 < i >>> 0) {
      au();
      return 0;
     } else {
      c[j + 12 >> 2] = e;
      c[l >> 2] = e;
      c[q + (g + 8) >> 2] = j;
      c[q + (g + 12) >> 2] = m;
      c[q + (g + 24) >> 2] = 0;
      break;
     }
    }
   } while (0);
   q = K + 8 | 0;
   if ((q | 0) == 0) {
    o = g;
    break;
   } else {
    n = q;
   }
   return n | 0;
  }
 } while (0);
 K = c[234] | 0;
 if (o >>> 0 <= K >>> 0) {
  S = K - o | 0;
  J = c[237] | 0;
  if (S >>> 0 > 15) {
   R = J;
   c[237] = R + o;
   c[234] = S;
   c[R + (o + 4) >> 2] = S | 1;
   c[R + K >> 2] = S;
   c[J + 4 >> 2] = o | 3;
  } else {
   c[234] = 0;
   c[237] = 0;
   c[J + 4 >> 2] = K | 3;
   S = J + (K + 4) | 0;
   c[S >> 2] = c[S >> 2] | 1;
  }
  n = J + 8 | 0;
  return n | 0;
 }
 J = c[235] | 0;
 if (o >>> 0 < J >>> 0) {
  S = J - o | 0;
  c[235] = S;
  J = c[238] | 0;
  K = J;
  c[238] = K + o;
  c[K + (o + 4) >> 2] = S | 1;
  c[J + 4 >> 2] = o | 3;
  n = J + 8 | 0;
  return n | 0;
 }
 do {
  if ((c[224] | 0) == 0) {
   J = ar(30) | 0;
   if ((J - 1 & J | 0) == 0) {
    c[226] = J;
    c[225] = J;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 J = o + 48 | 0;
 S = c[226] | 0;
 K = o + 47 | 0;
 R = S + K | 0;
 Q = -S | 0;
 S = R & Q;
 if (S >>> 0 <= o >>> 0) {
  n = 0;
  return n | 0;
 }
 O = c[342] | 0;
 do {
  if ((O | 0) != 0) {
   P = c[340] | 0;
   L = P + S | 0;
   if (L >>> 0 <= P >>> 0 | L >>> 0 > O >>> 0) {
    n = 0;
   } else {
    break;
   }
   return n | 0;
  }
 } while (0);
 L413 : do {
  if ((c[343] & 4 | 0) == 0) {
   O = c[238] | 0;
   L415 : do {
    if ((O | 0) == 0) {
     T = 292;
    } else {
     L = O;
     P = 1376;
     while (1) {
      U = P | 0;
      M = c[U >> 2] | 0;
      if (M >>> 0 <= L >>> 0) {
       V = P + 4 | 0;
       if ((M + (c[V >> 2] | 0) | 0) >>> 0 > L >>> 0) {
        break;
       }
      }
      M = c[P + 8 >> 2] | 0;
      if ((M | 0) == 0) {
       T = 292;
       break L415;
      } else {
       P = M;
      }
     }
     if ((P | 0) == 0) {
      T = 292;
      break;
     }
     L = R - (c[235] | 0) & Q;
     if (L >>> 0 >= 2147483647) {
      W = 0;
      break;
     }
     m = aV(L | 0) | 0;
     e = (m | 0) == ((c[U >> 2] | 0) + (c[V >> 2] | 0) | 0);
     X = e ? m : -1;
     Y = e ? L : 0;
     Z = m;
     _ = L;
     T = 301;
    }
   } while (0);
   do {
    if ((T | 0) == 292) {
     O = aV(0) | 0;
     if ((O | 0) == -1) {
      W = 0;
      break;
     }
     g = O;
     L = c[225] | 0;
     m = L - 1 | 0;
     if ((m & g | 0) == 0) {
      $ = S;
     } else {
      $ = S - g + (m + g & -L) | 0;
     }
     L = c[340] | 0;
     g = L + $ | 0;
     if (!($ >>> 0 > o >>> 0 & $ >>> 0 < 2147483647)) {
      W = 0;
      break;
     }
     m = c[342] | 0;
     if ((m | 0) != 0) {
      if (g >>> 0 <= L >>> 0 | g >>> 0 > m >>> 0) {
       W = 0;
       break;
      }
     }
     m = aV($ | 0) | 0;
     g = (m | 0) == (O | 0);
     X = g ? O : -1;
     Y = g ? $ : 0;
     Z = m;
     _ = $;
     T = 301;
    }
   } while (0);
   L435 : do {
    if ((T | 0) == 301) {
     m = -_ | 0;
     if ((X | 0) != -1) {
      aa = Y;
      ab = X;
      T = 312;
      break L413;
     }
     do {
      if ((Z | 0) != -1 & _ >>> 0 < 2147483647 & _ >>> 0 < J >>> 0) {
       g = c[226] | 0;
       O = K - _ + g & -g;
       if (O >>> 0 >= 2147483647) {
        ac = _;
        break;
       }
       if ((aV(O | 0) | 0) == -1) {
        aV(m | 0) | 0;
        W = Y;
        break L435;
       } else {
        ac = O + _ | 0;
        break;
       }
      } else {
       ac = _;
      }
     } while (0);
     if ((Z | 0) == -1) {
      W = Y;
     } else {
      aa = ac;
      ab = Z;
      T = 312;
      break L413;
     }
    }
   } while (0);
   c[343] = c[343] | 4;
   ad = W;
   T = 309;
  } else {
   ad = 0;
   T = 309;
  }
 } while (0);
 do {
  if ((T | 0) == 309) {
   if (S >>> 0 >= 2147483647) {
    break;
   }
   W = aV(S | 0) | 0;
   Z = aV(0) | 0;
   if (!((Z | 0) != -1 & (W | 0) != -1 & W >>> 0 < Z >>> 0)) {
    break;
   }
   ac = Z - W | 0;
   Z = ac >>> 0 > (o + 40 | 0) >>> 0;
   Y = Z ? W : -1;
   if ((Y | 0) != -1) {
    aa = Z ? ac : ad;
    ab = Y;
    T = 312;
   }
  }
 } while (0);
 do {
  if ((T | 0) == 312) {
   ad = (c[340] | 0) + aa | 0;
   c[340] = ad;
   if (ad >>> 0 > (c[341] | 0) >>> 0) {
    c[341] = ad;
   }
   ad = c[238] | 0;
   L455 : do {
    if ((ad | 0) == 0) {
     S = c[236] | 0;
     if ((S | 0) == 0 | ab >>> 0 < S >>> 0) {
      c[236] = ab;
     }
     c[344] = ab;
     c[345] = aa;
     c[347] = 0;
     c[241] = c[224];
     c[240] = -1;
     S = 0;
     do {
      Y = S << 1;
      ac = 968 + (Y << 2) | 0;
      c[968 + (Y + 3 << 2) >> 2] = ac;
      c[968 + (Y + 2 << 2) >> 2] = ac;
      S = S + 1 | 0;
     } while (S >>> 0 < 32);
     S = ab + 8 | 0;
     if ((S & 7 | 0) == 0) {
      ae = 0;
     } else {
      ae = -S & 7;
     }
     S = aa - 40 - ae | 0;
     c[238] = ab + ae;
     c[235] = S;
     c[ab + (ae + 4) >> 2] = S | 1;
     c[ab + (aa - 36) >> 2] = 40;
     c[239] = c[228];
    } else {
     S = 1376;
     while (1) {
      af = c[S >> 2] | 0;
      ag = S + 4 | 0;
      ah = c[ag >> 2] | 0;
      if ((ab | 0) == (af + ah | 0)) {
       T = 324;
       break;
      }
      ac = c[S + 8 >> 2] | 0;
      if ((ac | 0) == 0) {
       break;
      } else {
       S = ac;
      }
     }
     do {
      if ((T | 0) == 324) {
       if ((c[S + 12 >> 2] & 8 | 0) != 0) {
        break;
       }
       ac = ad;
       if (!(ac >>> 0 >= af >>> 0 & ac >>> 0 < ab >>> 0)) {
        break;
       }
       c[ag >> 2] = ah + aa;
       ac = c[238] | 0;
       Y = (c[235] | 0) + aa | 0;
       Z = ac;
       W = ac + 8 | 0;
       if ((W & 7 | 0) == 0) {
        ai = 0;
       } else {
        ai = -W & 7;
       }
       W = Y - ai | 0;
       c[238] = Z + ai;
       c[235] = W;
       c[Z + (ai + 4) >> 2] = W | 1;
       c[Z + (Y + 4) >> 2] = 40;
       c[239] = c[228];
       break L455;
      }
     } while (0);
     if (ab >>> 0 < (c[236] | 0) >>> 0) {
      c[236] = ab;
     }
     S = ab + aa | 0;
     Y = 1376;
     while (1) {
      aj = Y | 0;
      if ((c[aj >> 2] | 0) == (S | 0)) {
       T = 334;
       break;
      }
      Z = c[Y + 8 >> 2] | 0;
      if ((Z | 0) == 0) {
       break;
      } else {
       Y = Z;
      }
     }
     do {
      if ((T | 0) == 334) {
       if ((c[Y + 12 >> 2] & 8 | 0) != 0) {
        break;
       }
       c[aj >> 2] = ab;
       S = Y + 4 | 0;
       c[S >> 2] = (c[S >> 2] | 0) + aa;
       S = ab + 8 | 0;
       if ((S & 7 | 0) == 0) {
        ak = 0;
       } else {
        ak = -S & 7;
       }
       S = ab + (aa + 8) | 0;
       if ((S & 7 | 0) == 0) {
        al = 0;
       } else {
        al = -S & 7;
       }
       S = ab + (al + aa) | 0;
       Z = S;
       W = ak + o | 0;
       ac = ab + W | 0;
       _ = ac;
       K = S - (ab + ak) - o | 0;
       c[ab + (ak + 4) >> 2] = o | 3;
       do {
        if ((Z | 0) == (c[238] | 0)) {
         J = (c[235] | 0) + K | 0;
         c[235] = J;
         c[238] = _;
         c[ab + (W + 4) >> 2] = J | 1;
        } else {
         if ((Z | 0) == (c[237] | 0)) {
          J = (c[234] | 0) + K | 0;
          c[234] = J;
          c[237] = _;
          c[ab + (W + 4) >> 2] = J | 1;
          c[ab + (J + W) >> 2] = J;
          break;
         }
         J = aa + 4 | 0;
         X = c[ab + (J + al) >> 2] | 0;
         if ((X & 3 | 0) == 1) {
          $ = X & -8;
          V = X >>> 3;
          L500 : do {
           if (X >>> 0 < 256) {
            U = c[ab + ((al | 8) + aa) >> 2] | 0;
            Q = c[ab + (aa + 12 + al) >> 2] | 0;
            R = 968 + (V << 1 << 2) | 0;
            do {
             if ((U | 0) != (R | 0)) {
              if (U >>> 0 < (c[236] | 0) >>> 0) {
               au();
               return 0;
              }
              if ((c[U + 12 >> 2] | 0) == (Z | 0)) {
               break;
              }
              au();
              return 0;
             }
            } while (0);
            if ((Q | 0) == (U | 0)) {
             c[232] = c[232] & ~(1 << V);
             break;
            }
            do {
             if ((Q | 0) == (R | 0)) {
              am = Q + 8 | 0;
             } else {
              if (Q >>> 0 < (c[236] | 0) >>> 0) {
               au();
               return 0;
              }
              m = Q + 8 | 0;
              if ((c[m >> 2] | 0) == (Z | 0)) {
               am = m;
               break;
              }
              au();
              return 0;
             }
            } while (0);
            c[U + 12 >> 2] = Q;
            c[am >> 2] = U;
           } else {
            R = S;
            m = c[ab + ((al | 24) + aa) >> 2] | 0;
            P = c[ab + (aa + 12 + al) >> 2] | 0;
            do {
             if ((P | 0) == (R | 0)) {
              O = al | 16;
              g = ab + (J + O) | 0;
              L = c[g >> 2] | 0;
              if ((L | 0) == 0) {
               e = ab + (O + aa) | 0;
               O = c[e >> 2] | 0;
               if ((O | 0) == 0) {
                an = 0;
                break;
               } else {
                ao = O;
                ap = e;
               }
              } else {
               ao = L;
               ap = g;
              }
              while (1) {
               g = ao + 20 | 0;
               L = c[g >> 2] | 0;
               if ((L | 0) != 0) {
                ao = L;
                ap = g;
                continue;
               }
               g = ao + 16 | 0;
               L = c[g >> 2] | 0;
               if ((L | 0) == 0) {
                break;
               } else {
                ao = L;
                ap = g;
               }
              }
              if (ap >>> 0 < (c[236] | 0) >>> 0) {
               au();
               return 0;
              } else {
               c[ap >> 2] = 0;
               an = ao;
               break;
              }
             } else {
              g = c[ab + ((al | 8) + aa) >> 2] | 0;
              if (g >>> 0 < (c[236] | 0) >>> 0) {
               au();
               return 0;
              }
              L = g + 12 | 0;
              if ((c[L >> 2] | 0) != (R | 0)) {
               au();
               return 0;
              }
              e = P + 8 | 0;
              if ((c[e >> 2] | 0) == (R | 0)) {
               c[L >> 2] = P;
               c[e >> 2] = g;
               an = P;
               break;
              } else {
               au();
               return 0;
              }
             }
            } while (0);
            if ((m | 0) == 0) {
             break;
            }
            P = ab + (aa + 28 + al) | 0;
            U = 1232 + (c[P >> 2] << 2) | 0;
            do {
             if ((R | 0) == (c[U >> 2] | 0)) {
              c[U >> 2] = an;
              if ((an | 0) != 0) {
               break;
              }
              c[233] = c[233] & ~(1 << c[P >> 2]);
              break L500;
             } else {
              if (m >>> 0 < (c[236] | 0) >>> 0) {
               au();
               return 0;
              }
              Q = m + 16 | 0;
              if ((c[Q >> 2] | 0) == (R | 0)) {
               c[Q >> 2] = an;
              } else {
               c[m + 20 >> 2] = an;
              }
              if ((an | 0) == 0) {
               break L500;
              }
             }
            } while (0);
            if (an >>> 0 < (c[236] | 0) >>> 0) {
             au();
             return 0;
            }
            c[an + 24 >> 2] = m;
            R = al | 16;
            P = c[ab + (R + aa) >> 2] | 0;
            do {
             if ((P | 0) != 0) {
              if (P >>> 0 < (c[236] | 0) >>> 0) {
               au();
               return 0;
              } else {
               c[an + 16 >> 2] = P;
               c[P + 24 >> 2] = an;
               break;
              }
             }
            } while (0);
            P = c[ab + (J + R) >> 2] | 0;
            if ((P | 0) == 0) {
             break;
            }
            if (P >>> 0 < (c[236] | 0) >>> 0) {
             au();
             return 0;
            } else {
             c[an + 20 >> 2] = P;
             c[P + 24 >> 2] = an;
             break;
            }
           }
          } while (0);
          aq = ab + (($ | al) + aa) | 0;
          as = $ + K | 0;
         } else {
          aq = Z;
          as = K;
         }
         J = aq + 4 | 0;
         c[J >> 2] = c[J >> 2] & -2;
         c[ab + (W + 4) >> 2] = as | 1;
         c[ab + (as + W) >> 2] = as;
         J = as >>> 3;
         if (as >>> 0 < 256) {
          V = J << 1;
          X = 968 + (V << 2) | 0;
          P = c[232] | 0;
          m = 1 << J;
          do {
           if ((P & m | 0) == 0) {
            c[232] = P | m;
            at = X;
            av = 968 + (V + 2 << 2) | 0;
           } else {
            J = 968 + (V + 2 << 2) | 0;
            U = c[J >> 2] | 0;
            if (U >>> 0 >= (c[236] | 0) >>> 0) {
             at = U;
             av = J;
             break;
            }
            au();
            return 0;
           }
          } while (0);
          c[av >> 2] = _;
          c[at + 12 >> 2] = _;
          c[ab + (W + 8) >> 2] = at;
          c[ab + (W + 12) >> 2] = X;
          break;
         }
         V = ac;
         m = as >>> 8;
         do {
          if ((m | 0) == 0) {
           aw = 0;
          } else {
           if (as >>> 0 > 16777215) {
            aw = 31;
            break;
           }
           P = (m + 1048320 | 0) >>> 16 & 8;
           $ = m << P;
           J = ($ + 520192 | 0) >>> 16 & 4;
           U = $ << J;
           $ = (U + 245760 | 0) >>> 16 & 2;
           Q = 14 - (J | P | $) + (U << $ >>> 15) | 0;
           aw = as >>> ((Q + 7 | 0) >>> 0) & 1 | Q << 1;
          }
         } while (0);
         m = 1232 + (aw << 2) | 0;
         c[ab + (W + 28) >> 2] = aw;
         c[ab + (W + 20) >> 2] = 0;
         c[ab + (W + 16) >> 2] = 0;
         X = c[233] | 0;
         Q = 1 << aw;
         if ((X & Q | 0) == 0) {
          c[233] = X | Q;
          c[m >> 2] = V;
          c[ab + (W + 24) >> 2] = m;
          c[ab + (W + 12) >> 2] = V;
          c[ab + (W + 8) >> 2] = V;
          break;
         }
         if ((aw | 0) == 31) {
          ax = 0;
         } else {
          ax = 25 - (aw >>> 1) | 0;
         }
         Q = as << ax;
         X = c[m >> 2] | 0;
         while (1) {
          if ((c[X + 4 >> 2] & -8 | 0) == (as | 0)) {
           break;
          }
          ay = X + 16 + (Q >>> 31 << 2) | 0;
          m = c[ay >> 2] | 0;
          if ((m | 0) == 0) {
           T = 407;
           break;
          } else {
           Q = Q << 1;
           X = m;
          }
         }
         if ((T | 0) == 407) {
          if (ay >>> 0 < (c[236] | 0) >>> 0) {
           au();
           return 0;
          } else {
           c[ay >> 2] = V;
           c[ab + (W + 24) >> 2] = X;
           c[ab + (W + 12) >> 2] = V;
           c[ab + (W + 8) >> 2] = V;
           break;
          }
         }
         Q = X + 8 | 0;
         m = c[Q >> 2] | 0;
         $ = c[236] | 0;
         if (X >>> 0 < $ >>> 0) {
          au();
          return 0;
         }
         if (m >>> 0 < $ >>> 0) {
          au();
          return 0;
         } else {
          c[m + 12 >> 2] = V;
          c[Q >> 2] = V;
          c[ab + (W + 8) >> 2] = m;
          c[ab + (W + 12) >> 2] = X;
          c[ab + (W + 24) >> 2] = 0;
          break;
         }
        }
       } while (0);
       n = ab + (ak | 8) | 0;
       return n | 0;
      }
     } while (0);
     Y = ad;
     W = 1376;
     while (1) {
      az = c[W >> 2] | 0;
      if (az >>> 0 <= Y >>> 0) {
       aA = c[W + 4 >> 2] | 0;
       aB = az + aA | 0;
       if (aB >>> 0 > Y >>> 0) {
        break;
       }
      }
      W = c[W + 8 >> 2] | 0;
     }
     W = az + (aA - 39) | 0;
     if ((W & 7 | 0) == 0) {
      aC = 0;
     } else {
      aC = -W & 7;
     }
     W = az + (aA - 47 + aC) | 0;
     ac = W >>> 0 < (ad + 16 | 0) >>> 0 ? Y : W;
     W = ac + 8 | 0;
     _ = ab + 8 | 0;
     if ((_ & 7 | 0) == 0) {
      aD = 0;
     } else {
      aD = -_ & 7;
     }
     _ = aa - 40 - aD | 0;
     c[238] = ab + aD;
     c[235] = _;
     c[ab + (aD + 4) >> 2] = _ | 1;
     c[ab + (aa - 36) >> 2] = 40;
     c[239] = c[228];
     c[ac + 4 >> 2] = 27;
     c[W >> 2] = c[344];
     c[W + 4 >> 2] = c[345];
     c[W + 8 >> 2] = c[346];
     c[W + 12 >> 2] = c[347];
     c[344] = ab;
     c[345] = aa;
     c[347] = 0;
     c[346] = W;
     W = ac + 28 | 0;
     c[W >> 2] = 7;
     if ((ac + 32 | 0) >>> 0 < aB >>> 0) {
      _ = W;
      while (1) {
       W = _ + 4 | 0;
       c[W >> 2] = 7;
       if ((_ + 8 | 0) >>> 0 < aB >>> 0) {
        _ = W;
       } else {
        break;
       }
      }
     }
     if ((ac | 0) == (Y | 0)) {
      break;
     }
     _ = ac - ad | 0;
     W = Y + (_ + 4) | 0;
     c[W >> 2] = c[W >> 2] & -2;
     c[ad + 4 >> 2] = _ | 1;
     c[Y + _ >> 2] = _;
     W = _ >>> 3;
     if (_ >>> 0 < 256) {
      K = W << 1;
      Z = 968 + (K << 2) | 0;
      S = c[232] | 0;
      m = 1 << W;
      do {
       if ((S & m | 0) == 0) {
        c[232] = S | m;
        aE = Z;
        aF = 968 + (K + 2 << 2) | 0;
       } else {
        W = 968 + (K + 2 << 2) | 0;
        Q = c[W >> 2] | 0;
        if (Q >>> 0 >= (c[236] | 0) >>> 0) {
         aE = Q;
         aF = W;
         break;
        }
        au();
        return 0;
       }
      } while (0);
      c[aF >> 2] = ad;
      c[aE + 12 >> 2] = ad;
      c[ad + 8 >> 2] = aE;
      c[ad + 12 >> 2] = Z;
      break;
     }
     K = ad;
     m = _ >>> 8;
     do {
      if ((m | 0) == 0) {
       aG = 0;
      } else {
       if (_ >>> 0 > 16777215) {
        aG = 31;
        break;
       }
       S = (m + 1048320 | 0) >>> 16 & 8;
       Y = m << S;
       ac = (Y + 520192 | 0) >>> 16 & 4;
       W = Y << ac;
       Y = (W + 245760 | 0) >>> 16 & 2;
       Q = 14 - (ac | S | Y) + (W << Y >>> 15) | 0;
       aG = _ >>> ((Q + 7 | 0) >>> 0) & 1 | Q << 1;
      }
     } while (0);
     m = 1232 + (aG << 2) | 0;
     c[ad + 28 >> 2] = aG;
     c[ad + 20 >> 2] = 0;
     c[ad + 16 >> 2] = 0;
     Z = c[233] | 0;
     Q = 1 << aG;
     if ((Z & Q | 0) == 0) {
      c[233] = Z | Q;
      c[m >> 2] = K;
      c[ad + 24 >> 2] = m;
      c[ad + 12 >> 2] = ad;
      c[ad + 8 >> 2] = ad;
      break;
     }
     if ((aG | 0) == 31) {
      aH = 0;
     } else {
      aH = 25 - (aG >>> 1) | 0;
     }
     Q = _ << aH;
     Z = c[m >> 2] | 0;
     while (1) {
      if ((c[Z + 4 >> 2] & -8 | 0) == (_ | 0)) {
       break;
      }
      aI = Z + 16 + (Q >>> 31 << 2) | 0;
      m = c[aI >> 2] | 0;
      if ((m | 0) == 0) {
       T = 442;
       break;
      } else {
       Q = Q << 1;
       Z = m;
      }
     }
     if ((T | 0) == 442) {
      if (aI >>> 0 < (c[236] | 0) >>> 0) {
       au();
       return 0;
      } else {
       c[aI >> 2] = K;
       c[ad + 24 >> 2] = Z;
       c[ad + 12 >> 2] = ad;
       c[ad + 8 >> 2] = ad;
       break;
      }
     }
     Q = Z + 8 | 0;
     _ = c[Q >> 2] | 0;
     m = c[236] | 0;
     if (Z >>> 0 < m >>> 0) {
      au();
      return 0;
     }
     if (_ >>> 0 < m >>> 0) {
      au();
      return 0;
     } else {
      c[_ + 12 >> 2] = K;
      c[Q >> 2] = K;
      c[ad + 8 >> 2] = _;
      c[ad + 12 >> 2] = Z;
      c[ad + 24 >> 2] = 0;
      break;
     }
    }
   } while (0);
   ad = c[235] | 0;
   if (ad >>> 0 <= o >>> 0) {
    break;
   }
   _ = ad - o | 0;
   c[235] = _;
   ad = c[238] | 0;
   Q = ad;
   c[238] = Q + o;
   c[Q + (o + 4) >> 2] = _ | 1;
   c[ad + 4 >> 2] = o | 3;
   n = ad + 8 | 0;
   return n | 0;
  }
 } while (0);
 c[(aX() | 0) >> 2] = 12;
 n = 0;
 return n | 0;
}
function a9(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 d = i;
 i = i + 288 | 0;
 e = d | 0;
 f = d + 256 | 0;
 g = e | 0;
 b6(g, b);
 b = 16;
 do {
  h = c[e + (b - 2 << 2) >> 2] | 0;
  j = c[e + (b - 15 << 2) >> 2] | 0;
  c[e + (b << 2) >> 2] = (c[e + (b - 16 << 2) >> 2] | 0) + (c[e + (b - 7 << 2) >> 2] | 0) + ((h >>> 19 | h << 13) ^ h >>> 10 ^ (h >>> 17 | h << 15)) + ((j >>> 18 | j << 14) ^ j >>> 3 ^ (j >>> 7 | j << 25));
  b = b + 1 | 0;
 } while ((b | 0) < 64);
 b = f;
 j = a;
 bE(b | 0, j | 0, 32) | 0;
 j = f + 28 | 0;
 b = f + 16 | 0;
 h = c[b >> 2] | 0;
 k = f + 20 | 0;
 l = f + 24 | 0;
 m = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) + 1116352408 + (c[g >> 2] | 0) + ((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + ((m ^ c[k >> 2]) & h ^ m) | 0;
 m = f | 0;
 h = c[m >> 2] | 0;
 g = f + 4 | 0;
 o = c[g >> 2] | 0;
 p = f + 8 | 0;
 q = c[p >> 2] | 0;
 r = f + 12 | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + n + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) + 1899447441 + (c[e + 4 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) - 1245643825 + (c[e + 8 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) - 373957723 + (c[e + 12 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) + 961987163 + (c[e + 16 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) + 1508970993 + (c[e + 20 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) - 1841331548 + (c[e + 24 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) - 1424204075 + (c[e + 28 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) - 670586216 + (c[e + 32 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 310598401 + (c[e + 36 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) + 607225278 + (c[e + 40 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) + 1426881987 + (c[e + 44 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) + 1925078388 + (c[e + 48 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) - 2132889090 + (c[e + 52 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 1680079193 + (c[e + 56 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 n = (c[m >> 2] | 0) - 1046744716 + (c[e + 60 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[m >> 2] = s;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 h = (c[j >> 2] | 0) - 459576895 + (c[e + 64 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[j >> 2] = n;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 s = (c[l >> 2] | 0) - 272742522 + (c[e + 68 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[l >> 2] = h;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 n = (c[k >> 2] | 0) + 264347078 + (c[e + 72 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[k >> 2] = s;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 h = (c[b >> 2] | 0) + 604807628 + (c[e + 76 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[b >> 2] = n;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 s = (c[r >> 2] | 0) + 770255983 + (c[e + 80 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[r >> 2] = h;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 n = (c[p >> 2] | 0) + 1249150122 + (c[e + 84 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[p >> 2] = s;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 h = (c[g >> 2] | 0) + 1555081692 + (c[e + 88 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[g >> 2] = n;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 s = (c[m >> 2] | 0) + 1996064986 + (c[e + 92 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[m >> 2] = h;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) - 1740746414 + (c[e + 96 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) - 1473132947 + (c[e + 100 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) - 1341970488 + (c[e + 104 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) - 1084653625 + (c[e + 108 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) - 958395405 + (c[e + 112 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) - 710438585 + (c[e + 116 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) + 113926993 + (c[e + 120 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) + 338241895 + (c[e + 124 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) + 666307205 + (c[e + 128 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 773529912 + (c[e + 132 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) + 1294757372 + (c[e + 136 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) + 1396182291 + (c[e + 140 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) + 1695183700 + (c[e + 144 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) + 1986661051 + (c[e + 148 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 2117940946 + (c[e + 152 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 n = (c[m >> 2] | 0) - 1838011259 + (c[e + 156 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[m >> 2] = s;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 h = (c[j >> 2] | 0) - 1564481375 + (c[e + 160 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[j >> 2] = n;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 s = (c[l >> 2] | 0) - 1474664885 + (c[e + 164 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[l >> 2] = h;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 n = (c[k >> 2] | 0) - 1035236496 + (c[e + 168 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[k >> 2] = s;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 h = (c[b >> 2] | 0) - 949202525 + (c[e + 172 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[b >> 2] = n;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 s = (c[r >> 2] | 0) - 778901479 + (c[e + 176 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[r >> 2] = h;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 n = (c[p >> 2] | 0) - 694614492 + (c[e + 180 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[p >> 2] = s;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 h = (c[g >> 2] | 0) - 200395387 + (c[e + 184 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[g >> 2] = n;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 s = (c[m >> 2] | 0) + 275423344 + (c[e + 188 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[m >> 2] = h;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 n = (c[j >> 2] | 0) + 430227734 + (c[e + 192 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[j >> 2] = s;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 h = (c[l >> 2] | 0) + 506948616 + (c[e + 196 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[l >> 2] = n;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 s = (c[k >> 2] | 0) + 659060556 + (c[e + 200 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[k >> 2] = h;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 n = (c[b >> 2] | 0) + 883997877 + (c[e + 204 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[b >> 2] = s;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 h = (c[r >> 2] | 0) + 958139571 + (c[e + 208 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[r >> 2] = n;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 s = (c[p >> 2] | 0) + 1322822218 + (c[e + 212 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[p >> 2] = h;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 n = (c[g >> 2] | 0) + 1537002063 + (c[e + 216 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[g >> 2] = s;
 o = c[k >> 2] | 0;
 q = c[j >> 2] | 0;
 h = (c[m >> 2] | 0) + 1747873779 + (c[e + 220 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[l >> 2]) & o ^ q) | 0;
 q = c[p >> 2] | 0;
 o = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[m >> 2] = n;
 q = c[b >> 2] | 0;
 o = c[l >> 2] | 0;
 s = (c[j >> 2] | 0) + 1955562222 + (c[e + 224 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[k >> 2]) & q ^ o) | 0;
 o = c[g >> 2] | 0;
 q = c[p >> 2] | 0;
 c[r >> 2] = (c[r >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[j >> 2] = h;
 o = c[r >> 2] | 0;
 q = c[k >> 2] | 0;
 n = (c[l >> 2] | 0) + 2024104815 + (c[e + 228 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[b >> 2]) & o ^ q) | 0;
 q = c[m >> 2] | 0;
 o = c[g >> 2] | 0;
 c[p >> 2] = (c[p >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((o | q) & h | o & q) | 0;
 c[l >> 2] = s;
 q = c[p >> 2] | 0;
 o = c[b >> 2] | 0;
 h = (c[k >> 2] | 0) - 2067236844 + (c[e + 232 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[r >> 2]) & q ^ o) | 0;
 o = c[j >> 2] | 0;
 q = c[m >> 2] | 0;
 c[g >> 2] = (c[g >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((q | o) & s | q & o) | 0;
 c[k >> 2] = n;
 o = c[g >> 2] | 0;
 q = c[r >> 2] | 0;
 s = (c[b >> 2] | 0) - 1933114872 + (c[e + 236 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[p >> 2]) & o ^ q) | 0;
 q = c[l >> 2] | 0;
 o = c[j >> 2] | 0;
 c[m >> 2] = (c[m >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((o | q) & n | o & q) | 0;
 c[b >> 2] = h;
 q = c[m >> 2] | 0;
 o = c[p >> 2] | 0;
 n = (c[r >> 2] | 0) - 1866530822 + (c[e + 240 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[g >> 2]) & q ^ o) | 0;
 o = c[k >> 2] | 0;
 q = c[l >> 2] | 0;
 c[j >> 2] = (c[j >> 2] | 0) + n;
 s = n + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((q | o) & h | q & o) | 0;
 c[r >> 2] = s;
 o = c[j >> 2] | 0;
 q = c[g >> 2] | 0;
 h = (c[p >> 2] | 0) - 1538233109 + (c[e + 244 >> 2] | 0) + ((o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + ((q ^ c[m >> 2]) & o ^ q) | 0;
 q = c[b >> 2] | 0;
 o = c[k >> 2] | 0;
 c[l >> 2] = (c[l >> 2] | 0) + h;
 n = h + ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((o | q) & s | o & q) | 0;
 c[p >> 2] = n;
 q = c[l >> 2] | 0;
 o = c[m >> 2] | 0;
 s = (c[g >> 2] | 0) - 1090935817 + (c[e + 248 >> 2] | 0) + ((q >>> 6 | q << 26) ^ (q >>> 11 | q << 21) ^ (q >>> 25 | q << 7)) + ((o ^ c[j >> 2]) & q ^ o) | 0;
 o = c[r >> 2] | 0;
 q = c[b >> 2] | 0;
 c[k >> 2] = (c[k >> 2] | 0) + s;
 h = s + ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + ((q | o) & n | q & o) | 0;
 c[g >> 2] = h;
 g = c[k >> 2] | 0;
 k = c[j >> 2] | 0;
 j = (c[m >> 2] | 0) - 965641998 + (c[e + 252 >> 2] | 0) + ((g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + ((k ^ c[l >> 2]) & g ^ k) | 0;
 k = c[p >> 2] | 0;
 p = c[r >> 2] | 0;
 c[b >> 2] = (c[b >> 2] | 0) + j;
 b = j + ((h >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10)) + ((p | k) & h | p & k) | 0;
 c[m >> 2] = b;
 c[a >> 2] = (c[a >> 2] | 0) + b;
 b = a + 4 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 4 >> 2] | 0);
 b = a + 8 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 8 >> 2] | 0);
 b = a + 12 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 12 >> 2] | 0);
 b = a + 16 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 16 >> 2] | 0);
 b = a + 20 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 20 >> 2] | 0);
 b = a + 24 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 24 >> 2] | 0);
 b = a + 28 | 0;
 c[b >> 2] = (c[b >> 2] | 0) + (c[f + 28 >> 2] | 0);
 i = d;
 return;
}
function bb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0;
 if ((a | 0) == 0) {
  return;
 }
 b = a - 8 | 0;
 d = b;
 e = c[236] | 0;
 if (b >>> 0 < e >>> 0) {
  au();
 }
 f = c[a - 4 >> 2] | 0;
 g = f & 3;
 if ((g | 0) == 1) {
  au();
 }
 h = f & -8;
 i = a + (h - 8) | 0;
 j = i;
 L672 : do {
  if ((f & 1 | 0) == 0) {
   k = c[b >> 2] | 0;
   if ((g | 0) == 0) {
    return;
   }
   l = -8 - k | 0;
   m = a + l | 0;
   n = m;
   o = k + h | 0;
   if (m >>> 0 < e >>> 0) {
    au();
   }
   if ((n | 0) == (c[237] | 0)) {
    p = a + (h - 4) | 0;
    if ((c[p >> 2] & 3 | 0) != 3) {
     q = n;
     r = o;
     break;
    }
    c[234] = o;
    c[p >> 2] = c[p >> 2] & -2;
    c[a + (l + 4) >> 2] = o | 1;
    c[i >> 2] = o;
    return;
   }
   p = k >>> 3;
   if (k >>> 0 < 256) {
    k = c[a + (l + 8) >> 2] | 0;
    s = c[a + (l + 12) >> 2] | 0;
    t = 968 + (p << 1 << 2) | 0;
    do {
     if ((k | 0) != (t | 0)) {
      if (k >>> 0 < e >>> 0) {
       au();
      }
      if ((c[k + 12 >> 2] | 0) == (n | 0)) {
       break;
      }
      au();
     }
    } while (0);
    if ((s | 0) == (k | 0)) {
     c[232] = c[232] & ~(1 << p);
     q = n;
     r = o;
     break;
    }
    do {
     if ((s | 0) == (t | 0)) {
      u = s + 8 | 0;
     } else {
      if (s >>> 0 < e >>> 0) {
       au();
      }
      v = s + 8 | 0;
      if ((c[v >> 2] | 0) == (n | 0)) {
       u = v;
       break;
      }
      au();
     }
    } while (0);
    c[k + 12 >> 2] = s;
    c[u >> 2] = k;
    q = n;
    r = o;
    break;
   }
   t = m;
   p = c[a + (l + 24) >> 2] | 0;
   v = c[a + (l + 12) >> 2] | 0;
   do {
    if ((v | 0) == (t | 0)) {
     w = a + (l + 20) | 0;
     x = c[w >> 2] | 0;
     if ((x | 0) == 0) {
      y = a + (l + 16) | 0;
      z = c[y >> 2] | 0;
      if ((z | 0) == 0) {
       A = 0;
       break;
      } else {
       B = z;
       C = y;
      }
     } else {
      B = x;
      C = w;
     }
     while (1) {
      w = B + 20 | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) != 0) {
       B = x;
       C = w;
       continue;
      }
      w = B + 16 | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) == 0) {
       break;
      } else {
       B = x;
       C = w;
      }
     }
     if (C >>> 0 < e >>> 0) {
      au();
     } else {
      c[C >> 2] = 0;
      A = B;
      break;
     }
    } else {
     w = c[a + (l + 8) >> 2] | 0;
     if (w >>> 0 < e >>> 0) {
      au();
     }
     x = w + 12 | 0;
     if ((c[x >> 2] | 0) != (t | 0)) {
      au();
     }
     y = v + 8 | 0;
     if ((c[y >> 2] | 0) == (t | 0)) {
      c[x >> 2] = v;
      c[y >> 2] = w;
      A = v;
      break;
     } else {
      au();
     }
    }
   } while (0);
   if ((p | 0) == 0) {
    q = n;
    r = o;
    break;
   }
   v = a + (l + 28) | 0;
   m = 1232 + (c[v >> 2] << 2) | 0;
   do {
    if ((t | 0) == (c[m >> 2] | 0)) {
     c[m >> 2] = A;
     if ((A | 0) != 0) {
      break;
     }
     c[233] = c[233] & ~(1 << c[v >> 2]);
     q = n;
     r = o;
     break L672;
    } else {
     if (p >>> 0 < (c[236] | 0) >>> 0) {
      au();
     }
     k = p + 16 | 0;
     if ((c[k >> 2] | 0) == (t | 0)) {
      c[k >> 2] = A;
     } else {
      c[p + 20 >> 2] = A;
     }
     if ((A | 0) == 0) {
      q = n;
      r = o;
      break L672;
     }
    }
   } while (0);
   if (A >>> 0 < (c[236] | 0) >>> 0) {
    au();
   }
   c[A + 24 >> 2] = p;
   t = c[a + (l + 16) >> 2] | 0;
   do {
    if ((t | 0) != 0) {
     if (t >>> 0 < (c[236] | 0) >>> 0) {
      au();
     } else {
      c[A + 16 >> 2] = t;
      c[t + 24 >> 2] = A;
      break;
     }
    }
   } while (0);
   t = c[a + (l + 20) >> 2] | 0;
   if ((t | 0) == 0) {
    q = n;
    r = o;
    break;
   }
   if (t >>> 0 < (c[236] | 0) >>> 0) {
    au();
   } else {
    c[A + 20 >> 2] = t;
    c[t + 24 >> 2] = A;
    q = n;
    r = o;
    break;
   }
  } else {
   q = d;
   r = h;
  }
 } while (0);
 d = q;
 if (d >>> 0 >= i >>> 0) {
  au();
 }
 A = a + (h - 4) | 0;
 e = c[A >> 2] | 0;
 if ((e & 1 | 0) == 0) {
  au();
 }
 do {
  if ((e & 2 | 0) == 0) {
   if ((j | 0) == (c[238] | 0)) {
    B = (c[235] | 0) + r | 0;
    c[235] = B;
    c[238] = q;
    c[q + 4 >> 2] = B | 1;
    if ((q | 0) != (c[237] | 0)) {
     return;
    }
    c[237] = 0;
    c[234] = 0;
    return;
   }
   if ((j | 0) == (c[237] | 0)) {
    B = (c[234] | 0) + r | 0;
    c[234] = B;
    c[237] = q;
    c[q + 4 >> 2] = B | 1;
    c[d + B >> 2] = B;
    return;
   }
   B = (e & -8) + r | 0;
   C = e >>> 3;
   L774 : do {
    if (e >>> 0 < 256) {
     u = c[a + h >> 2] | 0;
     g = c[a + (h | 4) >> 2] | 0;
     b = 968 + (C << 1 << 2) | 0;
     do {
      if ((u | 0) != (b | 0)) {
       if (u >>> 0 < (c[236] | 0) >>> 0) {
        au();
       }
       if ((c[u + 12 >> 2] | 0) == (j | 0)) {
        break;
       }
       au();
      }
     } while (0);
     if ((g | 0) == (u | 0)) {
      c[232] = c[232] & ~(1 << C);
      break;
     }
     do {
      if ((g | 0) == (b | 0)) {
       D = g + 8 | 0;
      } else {
       if (g >>> 0 < (c[236] | 0) >>> 0) {
        au();
       }
       f = g + 8 | 0;
       if ((c[f >> 2] | 0) == (j | 0)) {
        D = f;
        break;
       }
       au();
      }
     } while (0);
     c[u + 12 >> 2] = g;
     c[D >> 2] = u;
    } else {
     b = i;
     f = c[a + (h + 16) >> 2] | 0;
     t = c[a + (h | 4) >> 2] | 0;
     do {
      if ((t | 0) == (b | 0)) {
       p = a + (h + 12) | 0;
       v = c[p >> 2] | 0;
       if ((v | 0) == 0) {
        m = a + (h + 8) | 0;
        k = c[m >> 2] | 0;
        if ((k | 0) == 0) {
         E = 0;
         break;
        } else {
         F = k;
         G = m;
        }
       } else {
        F = v;
        G = p;
       }
       while (1) {
        p = F + 20 | 0;
        v = c[p >> 2] | 0;
        if ((v | 0) != 0) {
         F = v;
         G = p;
         continue;
        }
        p = F + 16 | 0;
        v = c[p >> 2] | 0;
        if ((v | 0) == 0) {
         break;
        } else {
         F = v;
         G = p;
        }
       }
       if (G >>> 0 < (c[236] | 0) >>> 0) {
        au();
       } else {
        c[G >> 2] = 0;
        E = F;
        break;
       }
      } else {
       p = c[a + h >> 2] | 0;
       if (p >>> 0 < (c[236] | 0) >>> 0) {
        au();
       }
       v = p + 12 | 0;
       if ((c[v >> 2] | 0) != (b | 0)) {
        au();
       }
       m = t + 8 | 0;
       if ((c[m >> 2] | 0) == (b | 0)) {
        c[v >> 2] = t;
        c[m >> 2] = p;
        E = t;
        break;
       } else {
        au();
       }
      }
     } while (0);
     if ((f | 0) == 0) {
      break;
     }
     t = a + (h + 20) | 0;
     u = 1232 + (c[t >> 2] << 2) | 0;
     do {
      if ((b | 0) == (c[u >> 2] | 0)) {
       c[u >> 2] = E;
       if ((E | 0) != 0) {
        break;
       }
       c[233] = c[233] & ~(1 << c[t >> 2]);
       break L774;
      } else {
       if (f >>> 0 < (c[236] | 0) >>> 0) {
        au();
       }
       g = f + 16 | 0;
       if ((c[g >> 2] | 0) == (b | 0)) {
        c[g >> 2] = E;
       } else {
        c[f + 20 >> 2] = E;
       }
       if ((E | 0) == 0) {
        break L774;
       }
      }
     } while (0);
     if (E >>> 0 < (c[236] | 0) >>> 0) {
      au();
     }
     c[E + 24 >> 2] = f;
     b = c[a + (h + 8) >> 2] | 0;
     do {
      if ((b | 0) != 0) {
       if (b >>> 0 < (c[236] | 0) >>> 0) {
        au();
       } else {
        c[E + 16 >> 2] = b;
        c[b + 24 >> 2] = E;
        break;
       }
      }
     } while (0);
     b = c[a + (h + 12) >> 2] | 0;
     if ((b | 0) == 0) {
      break;
     }
     if (b >>> 0 < (c[236] | 0) >>> 0) {
      au();
     } else {
      c[E + 20 >> 2] = b;
      c[b + 24 >> 2] = E;
      break;
     }
    }
   } while (0);
   c[q + 4 >> 2] = B | 1;
   c[d + B >> 2] = B;
   if ((q | 0) != (c[237] | 0)) {
    H = B;
    break;
   }
   c[234] = B;
   return;
  } else {
   c[A >> 2] = e & -2;
   c[q + 4 >> 2] = r | 1;
   c[d + r >> 2] = r;
   H = r;
  }
 } while (0);
 r = H >>> 3;
 if (H >>> 0 < 256) {
  d = r << 1;
  e = 968 + (d << 2) | 0;
  A = c[232] | 0;
  E = 1 << r;
  do {
   if ((A & E | 0) == 0) {
    c[232] = A | E;
    I = e;
    J = 968 + (d + 2 << 2) | 0;
   } else {
    r = 968 + (d + 2 << 2) | 0;
    h = c[r >> 2] | 0;
    if (h >>> 0 >= (c[236] | 0) >>> 0) {
     I = h;
     J = r;
     break;
    }
    au();
   }
  } while (0);
  c[J >> 2] = q;
  c[I + 12 >> 2] = q;
  c[q + 8 >> 2] = I;
  c[q + 12 >> 2] = e;
  return;
 }
 e = q;
 I = H >>> 8;
 do {
  if ((I | 0) == 0) {
   K = 0;
  } else {
   if (H >>> 0 > 16777215) {
    K = 31;
    break;
   }
   J = (I + 1048320 | 0) >>> 16 & 8;
   d = I << J;
   E = (d + 520192 | 0) >>> 16 & 4;
   A = d << E;
   d = (A + 245760 | 0) >>> 16 & 2;
   r = 14 - (E | J | d) + (A << d >>> 15) | 0;
   K = H >>> ((r + 7 | 0) >>> 0) & 1 | r << 1;
  }
 } while (0);
 I = 1232 + (K << 2) | 0;
 c[q + 28 >> 2] = K;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 r = c[233] | 0;
 d = 1 << K;
 do {
  if ((r & d | 0) == 0) {
   c[233] = r | d;
   c[I >> 2] = e;
   c[q + 24 >> 2] = I;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
  } else {
   if ((K | 0) == 31) {
    L = 0;
   } else {
    L = 25 - (K >>> 1) | 0;
   }
   A = H << L;
   J = c[I >> 2] | 0;
   while (1) {
    if ((c[J + 4 >> 2] & -8 | 0) == (H | 0)) {
     break;
    }
    M = J + 16 + (A >>> 31 << 2) | 0;
    E = c[M >> 2] | 0;
    if ((E | 0) == 0) {
     N = 619;
     break;
    } else {
     A = A << 1;
     J = E;
    }
   }
   if ((N | 0) == 619) {
    if (M >>> 0 < (c[236] | 0) >>> 0) {
     au();
    } else {
     c[M >> 2] = e;
     c[q + 24 >> 2] = J;
     c[q + 12 >> 2] = q;
     c[q + 8 >> 2] = q;
     break;
    }
   }
   A = J + 8 | 0;
   B = c[A >> 2] | 0;
   E = c[236] | 0;
   if (J >>> 0 < E >>> 0) {
    au();
   }
   if (B >>> 0 < E >>> 0) {
    au();
   } else {
    c[B + 12 >> 2] = e;
    c[A >> 2] = e;
    c[q + 8 >> 2] = B;
    c[q + 12 >> 2] = J;
    c[q + 24 >> 2] = 0;
    break;
   }
  }
 } while (0);
 q = (c[240] | 0) - 1 | 0;
 c[240] = q;
 if ((q | 0) == 0) {
  O = 1384;
 } else {
  return;
 }
 while (1) {
  q = c[O >> 2] | 0;
  if ((q | 0) == 0) {
   break;
  } else {
   O = q + 8 | 0;
  }
 }
 c[240] = -1;
 return;
}
function ba(b, d, e, f, g, h) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0, ac = 0, ad = 0;
 j = i;
 if ((e | 0) == 0) {
  k = -1;
  i = j;
  return k | 0;
 }
 l = c[44] | 0;
 if ((l | 0) == 0) {
  c[220] = 1;
  c[44] = 1;
  m = 1;
  n = 1;
  o = 1194;
 } else {
  p = c[220] | 0;
  q = c[74] | 0;
  if ((q | 0) == -1 | (p | 0) != 0) {
   m = p;
   n = l;
   o = 1194;
  } else {
   r = q;
   s = p;
   t = l;
  }
 }
 if ((o | 0) == 1194) {
  l = (aP(336) | 0) != 0 | 0;
  c[74] = l;
  r = l;
  s = m;
  t = n;
 }
 n = a[e] | 0;
 if (n << 24 >> 24 == 45) {
  u = h | 2;
  o = 1198;
 } else {
  m = (r | 0) != 0 | n << 24 >> 24 == 43 ? h & -2 : h;
  if (n << 24 >> 24 == 43) {
   u = m;
   o = 1198;
  } else {
   v = e;
   w = m;
  }
 }
 if ((o | 0) == 1198) {
  v = e + 1 | 0;
  w = u;
 }
 c[222] = 0;
 if ((s | 0) == 0) {
  x = t;
  o = 1202;
 } else {
  c[50] = -1;
  c[48] = -1;
  y = t;
  z = s;
  o = 1201;
 }
 while (1) {
  if ((o | 0) == 1201) {
   o = 0;
   if ((z | 0) == 0) {
    x = y;
    o = 1202;
    continue;
   } else {
    A = y;
   }
  } else if ((o | 0) == 1202) {
   o = 0;
   s = c[40] | 0;
   if ((a[s] | 0) == 0) {
    A = x;
   } else {
    B = s;
    C = x;
    break;
   }
  }
  c[220] = 0;
  if ((A | 0) >= (b | 0)) {
   o = 1204;
   break;
  }
  D = d + (A << 2) | 0;
  E = c[D >> 2] | 0;
  c[40] = E;
  if ((a[E] | 0) == 45) {
   F = E + 1 | 0;
   G = a[F] | 0;
   if (G << 24 >> 24 != 0) {
    o = 1236;
    break;
   }
   if ((aB(v | 0, 45) | 0) != 0) {
    o = 1236;
    break;
   }
  }
  c[40] = 920;
  if ((w & 2 | 0) != 0) {
   o = 1221;
   break;
  }
  if ((w & 1 | 0) == 0) {
   k = -1;
   o = 1306;
   break;
  }
  s = c[48] | 0;
  do {
   if ((s | 0) == -1) {
    c[48] = A;
    H = A;
    I = 0;
   } else {
    t = c[50] | 0;
    if ((t | 0) == -1) {
     H = A;
     I = 0;
     break;
    }
    u = t - s | 0;
    e = A - t | 0;
    m = (u | 0) % (e | 0) | 0;
    if ((m | 0) == 0) {
     J = e;
    } else {
     n = e;
     h = m;
     while (1) {
      m = (n | 0) % (h | 0) | 0;
      if ((m | 0) == 0) {
       J = h;
       break;
      } else {
       n = h;
       h = m;
      }
     }
    }
    h = (A - s | 0) / (J | 0) | 0;
    do {
     if ((J | 0) > 0) {
      n = -u | 0;
      if ((h | 0) > 0) {
       K = 0;
      } else {
       L = A;
       M = t;
       N = s;
       O = 0;
       break;
      }
      do {
       m = K + t | 0;
       r = d + (m << 2) | 0;
       l = 0;
       p = m;
       m = c[r >> 2] | 0;
       while (1) {
        q = ((p | 0) < (t | 0) ? e : n) + p | 0;
        P = d + (q << 2) | 0;
        Q = c[P >> 2] | 0;
        c[P >> 2] = m;
        c[r >> 2] = Q;
        P = l + 1 | 0;
        if ((P | 0) < (h | 0)) {
         l = P;
         p = q;
         m = Q;
        } else {
         break;
        }
       }
       K = K + 1 | 0;
      } while ((K | 0) < (J | 0));
      L = c[44] | 0;
      M = c[50] | 0;
      N = c[48] | 0;
      O = c[220] | 0;
     } else {
      L = A;
      M = t;
      N = s;
      O = 0;
     }
    } while (0);
    c[48] = L - M + N;
    c[50] = -1;
    H = L;
    I = O;
   }
  } while (0);
  s = H + 1 | 0;
  c[44] = s;
  y = s;
  z = I;
  o = 1201;
 }
 do {
  if ((o | 0) == 1236) {
   I = c[48] | 0;
   z = c[50] | 0;
   if ((I | 0) != -1 & (z | 0) == -1) {
    c[50] = A;
    R = a[F] | 0;
    S = A;
   } else {
    R = G;
    S = z;
   }
   if (R << 24 >> 24 == 0) {
    B = E;
    C = A;
    break;
   }
   c[40] = F;
   if ((a[F] | 0) != 45) {
    B = F;
    C = A;
    break;
   }
   if ((a[E + 2 | 0] | 0) != 0) {
    B = F;
    C = A;
    break;
   }
   z = A + 1 | 0;
   c[44] = z;
   c[40] = 920;
   if ((S | 0) != -1) {
    y = S - I | 0;
    H = z - S | 0;
    O = (y | 0) % (H | 0) | 0;
    if ((O | 0) == 0) {
     T = H;
    } else {
     L = H;
     N = O;
     while (1) {
      O = (L | 0) % (N | 0) | 0;
      if ((O | 0) == 0) {
       T = N;
       break;
      } else {
       L = N;
       N = O;
      }
     }
    }
    N = (z - I | 0) / (T | 0) | 0;
    do {
     if ((T | 0) > 0) {
      L = -y | 0;
      if ((N | 0) > 0) {
       U = 0;
      } else {
       V = S;
       W = I;
       X = z;
       break;
      }
      do {
       O = U + S | 0;
       M = d + (O << 2) | 0;
       J = 0;
       K = O;
       O = c[M >> 2] | 0;
       while (1) {
        x = ((K | 0) < (S | 0) ? H : L) + K | 0;
        s = d + (x << 2) | 0;
        t = c[s >> 2] | 0;
        c[s >> 2] = O;
        c[M >> 2] = t;
        s = J + 1 | 0;
        if ((s | 0) < (N | 0)) {
         J = s;
         K = x;
         O = t;
        } else {
         break;
        }
       }
       U = U + 1 | 0;
      } while ((U | 0) < (T | 0));
      V = c[50] | 0;
      W = c[48] | 0;
      X = c[44] | 0;
     } else {
      V = S;
      W = I;
      X = z;
     }
    } while (0);
    c[44] = W - V + X;
   }
   c[50] = -1;
   c[48] = -1;
   k = -1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1204) {
   c[40] = 920;
   z = c[50] | 0;
   I = c[48] | 0;
   do {
    if ((z | 0) == -1) {
     if ((I | 0) == -1) {
      break;
     }
     c[44] = I;
    } else {
     N = z - I | 0;
     H = A - z | 0;
     y = (N | 0) % (H | 0) | 0;
     if ((y | 0) == 0) {
      Y = H;
     } else {
      L = H;
      O = y;
      while (1) {
       y = (L | 0) % (O | 0) | 0;
       if ((y | 0) == 0) {
        Y = O;
        break;
       } else {
        L = O;
        O = y;
       }
      }
     }
     O = (A - I | 0) / (Y | 0) | 0;
     do {
      if ((Y | 0) > 0) {
       L = -N | 0;
       if ((O | 0) > 0) {
        Z = 0;
       } else {
        _ = z;
        $ = I;
        aa = A;
        break;
       }
       do {
        y = Z + z | 0;
        K = d + (y << 2) | 0;
        J = 0;
        M = y;
        y = c[K >> 2] | 0;
        while (1) {
         t = ((M | 0) < (z | 0) ? H : L) + M | 0;
         x = d + (t << 2) | 0;
         s = c[x >> 2] | 0;
         c[x >> 2] = y;
         c[K >> 2] = s;
         x = J + 1 | 0;
         if ((x | 0) < (O | 0)) {
          J = x;
          M = t;
          y = s;
         } else {
          break;
         }
        }
        Z = Z + 1 | 0;
       } while ((Z | 0) < (Y | 0));
       _ = c[50] | 0;
       $ = c[48] | 0;
       aa = c[44] | 0;
      } else {
       _ = z;
       $ = I;
       aa = A;
      }
     } while (0);
     c[44] = $ - _ + aa;
    }
   } while (0);
   c[50] = -1;
   c[48] = -1;
   k = -1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1221) {
   c[44] = A + 1;
   c[222] = c[D >> 2];
   k = 1;
   i = j;
   return k | 0;
  } else if ((o | 0) == 1306) {
   i = j;
   return k | 0;
  }
 } while (0);
 D = (f | 0) != 0;
 L1654 : do {
  if (D) {
   if ((B | 0) == (c[d + (C << 2) >> 2] | 0)) {
    ab = B;
    break;
   }
   A = a[B] | 0;
   do {
    if (A << 24 >> 24 == 45) {
     c[40] = B + 1;
     ac = 0;
    } else {
     if ((w & 4 | 0) == 0) {
      ab = B;
      break L1654;
     }
     if (A << 24 >> 24 == 58) {
      ac = 0;
      break;
     }
     ac = (aB(v | 0, A << 24 >> 24 | 0) | 0) != 0 | 0;
    }
   } while (0);
   A = bh(d, v, f, g, ac) | 0;
   if ((A | 0) == -1) {
    ab = c[40] | 0;
    break;
   }
   c[40] = 920;
   k = A;
   i = j;
   return k | 0;
  } else {
   ab = B;
  }
 } while (0);
 B = ab + 1 | 0;
 c[40] = B;
 ac = a[ab] | 0;
 ab = ac << 24 >> 24;
 if ((ac << 24 >> 24 | 0) == 45) {
  if ((a[B] | 0) == 0) {
   o = 1264;
  }
 } else if ((ac << 24 >> 24 | 0) == 58) {
  o = 1267;
 } else {
  o = 1264;
 }
 do {
  if ((o | 0) == 1264) {
   w = aB(v | 0, ab | 0) | 0;
   if ((w | 0) == 0) {
    if (ac << 24 >> 24 != 45) {
     o = 1267;
     break;
    }
    if ((a[B] | 0) == 0) {
     k = -1;
    } else {
     break;
    }
    i = j;
    return k | 0;
   }
   C = a[w + 1 | 0] | 0;
   if (D & ac << 24 >> 24 == 87 & C << 24 >> 24 == 59) {
    do {
     if ((a[B] | 0) == 0) {
      A = (c[44] | 0) + 1 | 0;
      c[44] = A;
      if ((A | 0) < (b | 0)) {
       c[40] = c[d + (A << 2) >> 2];
       break;
      }
      c[40] = 920;
      do {
       if ((c[46] | 0) != 0) {
        if ((a[v] | 0) == 58) {
         break;
        }
        b2(48, (ad = i, i = i + 8 | 0, c[ad >> 2] = ab, ad) | 0);
        i = ad;
       }
      } while (0);
      c[42] = ab;
      k = (a[v] | 0) == 58 ? 58 : 63;
      i = j;
      return k | 0;
     }
    } while (0);
    A = bh(d, v, f, g, 0) | 0;
    c[40] = 920;
    k = A;
    i = j;
    return k | 0;
   }
   if (C << 24 >> 24 != 58) {
    if ((a[B] | 0) != 0) {
     k = ab;
     i = j;
     return k | 0;
    }
    c[44] = (c[44] | 0) + 1;
    k = ab;
    i = j;
    return k | 0;
   }
   c[222] = 0;
   do {
    if ((a[B] | 0) == 0) {
     if ((a[w + 2 | 0] | 0) == 58) {
      break;
     }
     A = (c[44] | 0) + 1 | 0;
     c[44] = A;
     if ((A | 0) < (b | 0)) {
      c[222] = c[d + (A << 2) >> 2];
      break;
     }
     c[40] = 920;
     do {
      if ((c[46] | 0) != 0) {
       if ((a[v] | 0) == 58) {
        break;
       }
       b2(48, (ad = i, i = i + 8 | 0, c[ad >> 2] = ab, ad) | 0);
       i = ad;
      }
     } while (0);
     c[42] = ab;
     k = (a[v] | 0) == 58 ? 58 : 63;
     i = j;
     return k | 0;
    } else {
     c[222] = B;
    }
   } while (0);
   c[40] = 920;
   c[44] = (c[44] | 0) + 1;
   k = ab;
   i = j;
   return k | 0;
  }
 } while (0);
 do {
  if ((o | 0) == 1267) {
   if ((a[B] | 0) != 0) {
    break;
   }
   c[44] = (c[44] | 0) + 1;
  }
 } while (0);
 do {
  if ((c[46] | 0) != 0) {
   if ((a[v] | 0) == 58) {
    break;
   }
   b2(272, (ad = i, i = i + 8 | 0, c[ad >> 2] = ab, ad) | 0);
   i = ad;
  }
 } while (0);
 c[42] = ab;
 k = 63;
 i = j;
 return k | 0;
}
function bc(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 d = a;
 e = d + b | 0;
 f = e;
 g = c[a + 4 >> 2] | 0;
 L1310 : do {
  if ((g & 1 | 0) == 0) {
   h = c[a >> 2] | 0;
   if ((g & 3 | 0) == 0) {
    return;
   }
   i = d + (-h | 0) | 0;
   j = i;
   k = h + b | 0;
   l = c[236] | 0;
   if (i >>> 0 < l >>> 0) {
    au();
   }
   if ((j | 0) == (c[237] | 0)) {
    m = d + (b + 4) | 0;
    if ((c[m >> 2] & 3 | 0) != 3) {
     n = j;
     o = k;
     break;
    }
    c[234] = k;
    c[m >> 2] = c[m >> 2] & -2;
    c[d + (4 - h) >> 2] = k | 1;
    c[e >> 2] = k;
    return;
   }
   m = h >>> 3;
   if (h >>> 0 < 256) {
    p = c[d + (8 - h) >> 2] | 0;
    q = c[d + (12 - h) >> 2] | 0;
    r = 968 + (m << 1 << 2) | 0;
    do {
     if ((p | 0) != (r | 0)) {
      if (p >>> 0 < l >>> 0) {
       au();
      }
      if ((c[p + 12 >> 2] | 0) == (j | 0)) {
       break;
      }
      au();
     }
    } while (0);
    if ((q | 0) == (p | 0)) {
     c[232] = c[232] & ~(1 << m);
     n = j;
     o = k;
     break;
    }
    do {
     if ((q | 0) == (r | 0)) {
      s = q + 8 | 0;
     } else {
      if (q >>> 0 < l >>> 0) {
       au();
      }
      t = q + 8 | 0;
      if ((c[t >> 2] | 0) == (j | 0)) {
       s = t;
       break;
      }
      au();
     }
    } while (0);
    c[p + 12 >> 2] = q;
    c[s >> 2] = p;
    n = j;
    o = k;
    break;
   }
   r = i;
   m = c[d + (24 - h) >> 2] | 0;
   t = c[d + (12 - h) >> 2] | 0;
   do {
    if ((t | 0) == (r | 0)) {
     u = 16 - h | 0;
     v = d + (u + 4) | 0;
     w = c[v >> 2] | 0;
     if ((w | 0) == 0) {
      x = d + u | 0;
      u = c[x >> 2] | 0;
      if ((u | 0) == 0) {
       y = 0;
       break;
      } else {
       z = u;
       A = x;
      }
     } else {
      z = w;
      A = v;
     }
     while (1) {
      v = z + 20 | 0;
      w = c[v >> 2] | 0;
      if ((w | 0) != 0) {
       z = w;
       A = v;
       continue;
      }
      v = z + 16 | 0;
      w = c[v >> 2] | 0;
      if ((w | 0) == 0) {
       break;
      } else {
       z = w;
       A = v;
      }
     }
     if (A >>> 0 < l >>> 0) {
      au();
     } else {
      c[A >> 2] = 0;
      y = z;
      break;
     }
    } else {
     v = c[d + (8 - h) >> 2] | 0;
     if (v >>> 0 < l >>> 0) {
      au();
     }
     w = v + 12 | 0;
     if ((c[w >> 2] | 0) != (r | 0)) {
      au();
     }
     x = t + 8 | 0;
     if ((c[x >> 2] | 0) == (r | 0)) {
      c[w >> 2] = t;
      c[x >> 2] = v;
      y = t;
      break;
     } else {
      au();
     }
    }
   } while (0);
   if ((m | 0) == 0) {
    n = j;
    o = k;
    break;
   }
   t = d + (28 - h) | 0;
   l = 1232 + (c[t >> 2] << 2) | 0;
   do {
    if ((r | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = y;
     if ((y | 0) != 0) {
      break;
     }
     c[233] = c[233] & ~(1 << c[t >> 2]);
     n = j;
     o = k;
     break L1310;
    } else {
     if (m >>> 0 < (c[236] | 0) >>> 0) {
      au();
     }
     i = m + 16 | 0;
     if ((c[i >> 2] | 0) == (r | 0)) {
      c[i >> 2] = y;
     } else {
      c[m + 20 >> 2] = y;
     }
     if ((y | 0) == 0) {
      n = j;
      o = k;
      break L1310;
     }
    }
   } while (0);
   if (y >>> 0 < (c[236] | 0) >>> 0) {
    au();
   }
   c[y + 24 >> 2] = m;
   r = 16 - h | 0;
   t = c[d + r >> 2] | 0;
   do {
    if ((t | 0) != 0) {
     if (t >>> 0 < (c[236] | 0) >>> 0) {
      au();
     } else {
      c[y + 16 >> 2] = t;
      c[t + 24 >> 2] = y;
      break;
     }
    }
   } while (0);
   t = c[d + (r + 4) >> 2] | 0;
   if ((t | 0) == 0) {
    n = j;
    o = k;
    break;
   }
   if (t >>> 0 < (c[236] | 0) >>> 0) {
    au();
   } else {
    c[y + 20 >> 2] = t;
    c[t + 24 >> 2] = y;
    n = j;
    o = k;
    break;
   }
  } else {
   n = a;
   o = b;
  }
 } while (0);
 a = c[236] | 0;
 if (e >>> 0 < a >>> 0) {
  au();
 }
 y = d + (b + 4) | 0;
 z = c[y >> 2] | 0;
 do {
  if ((z & 2 | 0) == 0) {
   if ((f | 0) == (c[238] | 0)) {
    A = (c[235] | 0) + o | 0;
    c[235] = A;
    c[238] = n;
    c[n + 4 >> 2] = A | 1;
    if ((n | 0) != (c[237] | 0)) {
     return;
    }
    c[237] = 0;
    c[234] = 0;
    return;
   }
   if ((f | 0) == (c[237] | 0)) {
    A = (c[234] | 0) + o | 0;
    c[234] = A;
    c[237] = n;
    c[n + 4 >> 2] = A | 1;
    c[n + A >> 2] = A;
    return;
   }
   A = (z & -8) + o | 0;
   s = z >>> 3;
   L1409 : do {
    if (z >>> 0 < 256) {
     g = c[d + (b + 8) >> 2] | 0;
     t = c[d + (b + 12) >> 2] | 0;
     h = 968 + (s << 1 << 2) | 0;
     do {
      if ((g | 0) != (h | 0)) {
       if (g >>> 0 < a >>> 0) {
        au();
       }
       if ((c[g + 12 >> 2] | 0) == (f | 0)) {
        break;
       }
       au();
      }
     } while (0);
     if ((t | 0) == (g | 0)) {
      c[232] = c[232] & ~(1 << s);
      break;
     }
     do {
      if ((t | 0) == (h | 0)) {
       B = t + 8 | 0;
      } else {
       if (t >>> 0 < a >>> 0) {
        au();
       }
       m = t + 8 | 0;
       if ((c[m >> 2] | 0) == (f | 0)) {
        B = m;
        break;
       }
       au();
      }
     } while (0);
     c[g + 12 >> 2] = t;
     c[B >> 2] = g;
    } else {
     h = e;
     m = c[d + (b + 24) >> 2] | 0;
     l = c[d + (b + 12) >> 2] | 0;
     do {
      if ((l | 0) == (h | 0)) {
       i = d + (b + 20) | 0;
       p = c[i >> 2] | 0;
       if ((p | 0) == 0) {
        q = d + (b + 16) | 0;
        v = c[q >> 2] | 0;
        if ((v | 0) == 0) {
         C = 0;
         break;
        } else {
         D = v;
         E = q;
        }
       } else {
        D = p;
        E = i;
       }
       while (1) {
        i = D + 20 | 0;
        p = c[i >> 2] | 0;
        if ((p | 0) != 0) {
         D = p;
         E = i;
         continue;
        }
        i = D + 16 | 0;
        p = c[i >> 2] | 0;
        if ((p | 0) == 0) {
         break;
        } else {
         D = p;
         E = i;
        }
       }
       if (E >>> 0 < a >>> 0) {
        au();
       } else {
        c[E >> 2] = 0;
        C = D;
        break;
       }
      } else {
       i = c[d + (b + 8) >> 2] | 0;
       if (i >>> 0 < a >>> 0) {
        au();
       }
       p = i + 12 | 0;
       if ((c[p >> 2] | 0) != (h | 0)) {
        au();
       }
       q = l + 8 | 0;
       if ((c[q >> 2] | 0) == (h | 0)) {
        c[p >> 2] = l;
        c[q >> 2] = i;
        C = l;
        break;
       } else {
        au();
       }
      }
     } while (0);
     if ((m | 0) == 0) {
      break;
     }
     l = d + (b + 28) | 0;
     g = 1232 + (c[l >> 2] << 2) | 0;
     do {
      if ((h | 0) == (c[g >> 2] | 0)) {
       c[g >> 2] = C;
       if ((C | 0) != 0) {
        break;
       }
       c[233] = c[233] & ~(1 << c[l >> 2]);
       break L1409;
      } else {
       if (m >>> 0 < (c[236] | 0) >>> 0) {
        au();
       }
       t = m + 16 | 0;
       if ((c[t >> 2] | 0) == (h | 0)) {
        c[t >> 2] = C;
       } else {
        c[m + 20 >> 2] = C;
       }
       if ((C | 0) == 0) {
        break L1409;
       }
      }
     } while (0);
     if (C >>> 0 < (c[236] | 0) >>> 0) {
      au();
     }
     c[C + 24 >> 2] = m;
     h = c[d + (b + 16) >> 2] | 0;
     do {
      if ((h | 0) != 0) {
       if (h >>> 0 < (c[236] | 0) >>> 0) {
        au();
       } else {
        c[C + 16 >> 2] = h;
        c[h + 24 >> 2] = C;
        break;
       }
      }
     } while (0);
     h = c[d + (b + 20) >> 2] | 0;
     if ((h | 0) == 0) {
      break;
     }
     if (h >>> 0 < (c[236] | 0) >>> 0) {
      au();
     } else {
      c[C + 20 >> 2] = h;
      c[h + 24 >> 2] = C;
      break;
     }
    }
   } while (0);
   c[n + 4 >> 2] = A | 1;
   c[n + A >> 2] = A;
   if ((n | 0) != (c[237] | 0)) {
    F = A;
    break;
   }
   c[234] = A;
   return;
  } else {
   c[y >> 2] = z & -2;
   c[n + 4 >> 2] = o | 1;
   c[n + o >> 2] = o;
   F = o;
  }
 } while (0);
 o = F >>> 3;
 if (F >>> 0 < 256) {
  z = o << 1;
  y = 968 + (z << 2) | 0;
  C = c[232] | 0;
  b = 1 << o;
  do {
   if ((C & b | 0) == 0) {
    c[232] = C | b;
    G = y;
    H = 968 + (z + 2 << 2) | 0;
   } else {
    o = 968 + (z + 2 << 2) | 0;
    d = c[o >> 2] | 0;
    if (d >>> 0 >= (c[236] | 0) >>> 0) {
     G = d;
     H = o;
     break;
    }
    au();
   }
  } while (0);
  c[H >> 2] = n;
  c[G + 12 >> 2] = n;
  c[n + 8 >> 2] = G;
  c[n + 12 >> 2] = y;
  return;
 }
 y = n;
 G = F >>> 8;
 do {
  if ((G | 0) == 0) {
   I = 0;
  } else {
   if (F >>> 0 > 16777215) {
    I = 31;
    break;
   }
   H = (G + 1048320 | 0) >>> 16 & 8;
   z = G << H;
   b = (z + 520192 | 0) >>> 16 & 4;
   C = z << b;
   z = (C + 245760 | 0) >>> 16 & 2;
   o = 14 - (b | H | z) + (C << z >>> 15) | 0;
   I = F >>> ((o + 7 | 0) >>> 0) & 1 | o << 1;
  }
 } while (0);
 G = 1232 + (I << 2) | 0;
 c[n + 28 >> 2] = I;
 c[n + 20 >> 2] = 0;
 c[n + 16 >> 2] = 0;
 o = c[233] | 0;
 z = 1 << I;
 if ((o & z | 0) == 0) {
  c[233] = o | z;
  c[G >> 2] = y;
  c[n + 24 >> 2] = G;
  c[n + 12 >> 2] = n;
  c[n + 8 >> 2] = n;
  return;
 }
 if ((I | 0) == 31) {
  J = 0;
 } else {
  J = 25 - (I >>> 1) | 0;
 }
 I = F << J;
 J = c[G >> 2] | 0;
 while (1) {
  if ((c[J + 4 >> 2] & -8 | 0) == (F | 0)) {
   break;
  }
  K = J + 16 + (I >>> 31 << 2) | 0;
  G = c[K >> 2] | 0;
  if ((G | 0) == 0) {
   L = 1108;
   break;
  } else {
   I = I << 1;
   J = G;
  }
 }
 if ((L | 0) == 1108) {
  if (K >>> 0 < (c[236] | 0) >>> 0) {
   au();
  }
  c[K >> 2] = y;
  c[n + 24 >> 2] = J;
  c[n + 12 >> 2] = n;
  c[n + 8 >> 2] = n;
  return;
 }
 K = J + 8 | 0;
 L = c[K >> 2] | 0;
 I = c[236] | 0;
 if (J >>> 0 < I >>> 0) {
  au();
 }
 if (L >>> 0 < I >>> 0) {
  au();
 }
 c[L + 12 >> 2] = y;
 c[K >> 2] = y;
 c[n + 8 >> 2] = L;
 c[n + 12 >> 2] = J;
 c[n + 24 >> 2] = 0;
 return;
}
function be(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0;
 d = a + 4 | 0;
 e = c[d >> 2] | 0;
 f = e & -8;
 g = a;
 h = g + f | 0;
 i = h;
 j = c[236] | 0;
 if (g >>> 0 < j >>> 0) {
  au();
  return 0;
 }
 k = e & 3;
 if (!((k | 0) != 1 & g >>> 0 < h >>> 0)) {
  au();
  return 0;
 }
 l = g + (f | 4) | 0;
 m = c[l >> 2] | 0;
 if ((m & 1 | 0) == 0) {
  au();
  return 0;
 }
 if ((k | 0) == 0) {
  if (b >>> 0 < 256) {
   n = 0;
   return n | 0;
  }
  do {
   if (f >>> 0 >= (b + 4 | 0) >>> 0) {
    if ((f - b | 0) >>> 0 > c[226] << 1 >>> 0) {
     break;
    } else {
     n = a;
    }
    return n | 0;
   }
  } while (0);
  n = 0;
  return n | 0;
 }
 if (f >>> 0 >= b >>> 0) {
  k = f - b | 0;
  if (k >>> 0 <= 15) {
   n = a;
   return n | 0;
  }
  c[d >> 2] = e & 1 | b | 2;
  c[g + (b + 4) >> 2] = k | 3;
  c[l >> 2] = c[l >> 2] | 1;
  bc(g + b | 0, k);
  n = a;
  return n | 0;
 }
 if ((i | 0) == (c[238] | 0)) {
  k = (c[235] | 0) + f | 0;
  if (k >>> 0 <= b >>> 0) {
   n = 0;
   return n | 0;
  }
  l = k - b | 0;
  c[d >> 2] = e & 1 | b | 2;
  c[g + (b + 4) >> 2] = l | 1;
  c[238] = g + b;
  c[235] = l;
  n = a;
  return n | 0;
 }
 if ((i | 0) == (c[237] | 0)) {
  l = (c[234] | 0) + f | 0;
  if (l >>> 0 < b >>> 0) {
   n = 0;
   return n | 0;
  }
  k = l - b | 0;
  if (k >>> 0 > 15) {
   c[d >> 2] = e & 1 | b | 2;
   c[g + (b + 4) >> 2] = k | 1;
   c[g + l >> 2] = k;
   o = g + (l + 4) | 0;
   c[o >> 2] = c[o >> 2] & -2;
   p = g + b | 0;
   q = k;
  } else {
   c[d >> 2] = e & 1 | l | 2;
   e = g + (l + 4) | 0;
   c[e >> 2] = c[e >> 2] | 1;
   p = 0;
   q = 0;
  }
  c[234] = q;
  c[237] = p;
  n = a;
  return n | 0;
 }
 if ((m & 2 | 0) != 0) {
  n = 0;
  return n | 0;
 }
 p = (m & -8) + f | 0;
 if (p >>> 0 < b >>> 0) {
  n = 0;
  return n | 0;
 }
 q = p - b | 0;
 e = m >>> 3;
 L973 : do {
  if (m >>> 0 < 256) {
   l = c[g + (f + 8) >> 2] | 0;
   k = c[g + (f + 12) >> 2] | 0;
   o = 968 + (e << 1 << 2) | 0;
   do {
    if ((l | 0) != (o | 0)) {
     if (l >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     if ((c[l + 12 >> 2] | 0) == (i | 0)) {
      break;
     }
     au();
     return 0;
    }
   } while (0);
   if ((k | 0) == (l | 0)) {
    c[232] = c[232] & ~(1 << e);
    break;
   }
   do {
    if ((k | 0) == (o | 0)) {
     r = k + 8 | 0;
    } else {
     if (k >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     s = k + 8 | 0;
     if ((c[s >> 2] | 0) == (i | 0)) {
      r = s;
      break;
     }
     au();
     return 0;
    }
   } while (0);
   c[l + 12 >> 2] = k;
   c[r >> 2] = l;
  } else {
   o = h;
   s = c[g + (f + 24) >> 2] | 0;
   t = c[g + (f + 12) >> 2] | 0;
   do {
    if ((t | 0) == (o | 0)) {
     u = g + (f + 20) | 0;
     v = c[u >> 2] | 0;
     if ((v | 0) == 0) {
      w = g + (f + 16) | 0;
      x = c[w >> 2] | 0;
      if ((x | 0) == 0) {
       y = 0;
       break;
      } else {
       z = x;
       A = w;
      }
     } else {
      z = v;
      A = u;
     }
     while (1) {
      u = z + 20 | 0;
      v = c[u >> 2] | 0;
      if ((v | 0) != 0) {
       z = v;
       A = u;
       continue;
      }
      u = z + 16 | 0;
      v = c[u >> 2] | 0;
      if ((v | 0) == 0) {
       break;
      } else {
       z = v;
       A = u;
      }
     }
     if (A >>> 0 < j >>> 0) {
      au();
      return 0;
     } else {
      c[A >> 2] = 0;
      y = z;
      break;
     }
    } else {
     u = c[g + (f + 8) >> 2] | 0;
     if (u >>> 0 < j >>> 0) {
      au();
      return 0;
     }
     v = u + 12 | 0;
     if ((c[v >> 2] | 0) != (o | 0)) {
      au();
      return 0;
     }
     w = t + 8 | 0;
     if ((c[w >> 2] | 0) == (o | 0)) {
      c[v >> 2] = t;
      c[w >> 2] = u;
      y = t;
      break;
     } else {
      au();
      return 0;
     }
    }
   } while (0);
   if ((s | 0) == 0) {
    break;
   }
   t = g + (f + 28) | 0;
   l = 1232 + (c[t >> 2] << 2) | 0;
   do {
    if ((o | 0) == (c[l >> 2] | 0)) {
     c[l >> 2] = y;
     if ((y | 0) != 0) {
      break;
     }
     c[233] = c[233] & ~(1 << c[t >> 2]);
     break L973;
    } else {
     if (s >>> 0 < (c[236] | 0) >>> 0) {
      au();
      return 0;
     }
     k = s + 16 | 0;
     if ((c[k >> 2] | 0) == (o | 0)) {
      c[k >> 2] = y;
     } else {
      c[s + 20 >> 2] = y;
     }
     if ((y | 0) == 0) {
      break L973;
     }
    }
   } while (0);
   if (y >>> 0 < (c[236] | 0) >>> 0) {
    au();
    return 0;
   }
   c[y + 24 >> 2] = s;
   o = c[g + (f + 16) >> 2] | 0;
   do {
    if ((o | 0) != 0) {
     if (o >>> 0 < (c[236] | 0) >>> 0) {
      au();
      return 0;
     } else {
      c[y + 16 >> 2] = o;
      c[o + 24 >> 2] = y;
      break;
     }
    }
   } while (0);
   o = c[g + (f + 20) >> 2] | 0;
   if ((o | 0) == 0) {
    break;
   }
   if (o >>> 0 < (c[236] | 0) >>> 0) {
    au();
    return 0;
   } else {
    c[y + 20 >> 2] = o;
    c[o + 24 >> 2] = y;
    break;
   }
  }
 } while (0);
 if (q >>> 0 < 16) {
  c[d >> 2] = p | c[d >> 2] & 1 | 2;
  y = g + (p | 4) | 0;
  c[y >> 2] = c[y >> 2] | 1;
  n = a;
  return n | 0;
 } else {
  c[d >> 2] = c[d >> 2] & 1 | b | 2;
  c[g + (b + 4) >> 2] = q | 3;
  d = g + (p | 4) | 0;
  c[d >> 2] = c[d >> 2] | 1;
  bc(g + b | 0, q);
  n = a;
  return n | 0;
 }
 return 0;
}
function bf(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ab = 0;
 b = i;
 i = i + 128 | 0;
 d = b | 0;
 e = b + 64 | 0;
 f = 0;
 do {
  c[d + (f << 2) >> 2] = cj(a + (f << 2) | 0) | 0;
  f = f + 1 | 0;
 } while (f >>> 0 < 16);
 f = d;
 g = e;
 bE(g | 0, f | 0, 64) | 0;
 f = e | 0;
 g = e + 48 | 0;
 h = e + 16 | 0;
 j = e + 32 | 0;
 k = e + 20 | 0;
 l = e + 4 | 0;
 m = e + 36 | 0;
 n = e + 52 | 0;
 o = e + 40 | 0;
 p = e + 24 | 0;
 q = e + 56 | 0;
 r = e + 8 | 0;
 s = e + 60 | 0;
 t = e + 44 | 0;
 u = e + 12 | 0;
 v = e + 28 | 0;
 w = 0;
 x = c[f >> 2] | 0;
 y = c[g >> 2] | 0;
 z = c[h >> 2] | 0;
 A = c[j >> 2] | 0;
 B = c[k >> 2] | 0;
 C = c[l >> 2] | 0;
 D = c[m >> 2] | 0;
 E = c[n >> 2] | 0;
 F = c[o >> 2] | 0;
 G = c[p >> 2] | 0;
 H = c[q >> 2] | 0;
 I = c[r >> 2] | 0;
 J = c[s >> 2] | 0;
 K = c[t >> 2] | 0;
 L = c[u >> 2] | 0;
 M = c[v >> 2] | 0;
 do {
  N = y + x | 0;
  O = (N << 7 | N >>> 25) ^ z;
  N = O + x | 0;
  P = (N << 9 | N >>> 23) ^ A;
  N = P + O | 0;
  Q = (N << 13 | N >>> 19) ^ y;
  N = Q + P | 0;
  R = (N << 18 | N >>> 14) ^ x;
  N = C + B | 0;
  S = (N << 7 | N >>> 25) ^ D;
  N = S + B | 0;
  T = (N << 9 | N >>> 23) ^ E;
  N = T + S | 0;
  U = (N << 13 | N >>> 19) ^ C;
  N = U + T | 0;
  V = (N << 18 | N >>> 14) ^ B;
  N = G + F | 0;
  W = (N << 7 | N >>> 25) ^ H;
  N = W + F | 0;
  X = (N << 9 | N >>> 23) ^ I;
  N = X + W | 0;
  Y = (N << 13 | N >>> 19) ^ G;
  N = Y + X | 0;
  Z = (N << 18 | N >>> 14) ^ F;
  N = K + J | 0;
  _ = (N << 7 | N >>> 25) ^ L;
  N = _ + J | 0;
  $ = (N << 9 | N >>> 23) ^ M;
  N = $ + _ | 0;
  aa = (N << 13 | N >>> 19) ^ K;
  N = aa + $ | 0;
  ab = (N << 18 | N >>> 14) ^ J;
  N = _ + R | 0;
  C = (N << 7 | N >>> 25) ^ U;
  U = C + R | 0;
  I = (U << 9 | U >>> 23) ^ X;
  X = I + C | 0;
  L = (X << 13 | X >>> 19) ^ _;
  _ = L + I | 0;
  x = (_ << 18 | _ >>> 14) ^ R;
  R = O + V | 0;
  G = (R << 7 | R >>> 25) ^ Y;
  Y = G + V | 0;
  M = (Y << 9 | Y >>> 23) ^ $;
  $ = M + G | 0;
  z = ($ << 13 | $ >>> 19) ^ O;
  O = z + M | 0;
  B = (O << 18 | O >>> 14) ^ V;
  V = S + Z | 0;
  K = (V << 7 | V >>> 25) ^ aa;
  aa = K + Z | 0;
  A = (aa << 9 | aa >>> 23) ^ P;
  P = A + K | 0;
  D = (P << 13 | P >>> 19) ^ S;
  S = D + A | 0;
  F = (S << 18 | S >>> 14) ^ Z;
  Z = W + ab | 0;
  y = (Z << 7 | Z >>> 25) ^ Q;
  Q = y + ab | 0;
  E = (Q << 9 | Q >>> 23) ^ T;
  T = E + y | 0;
  H = (T << 13 | T >>> 19) ^ W;
  W = H + E | 0;
  J = (W << 18 | W >>> 14) ^ ab;
  w = w + 2 | 0;
 } while (w >>> 0 < 8);
 c[f >> 2] = x;
 c[g >> 2] = y;
 c[h >> 2] = z;
 c[j >> 2] = A;
 c[k >> 2] = B;
 c[l >> 2] = C;
 c[m >> 2] = D;
 c[n >> 2] = E;
 c[o >> 2] = F;
 c[p >> 2] = G;
 c[q >> 2] = H;
 c[r >> 2] = I;
 c[s >> 2] = J;
 c[t >> 2] = K;
 c[u >> 2] = L;
 c[v >> 2] = M;
 M = d | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e >> 2] | 0);
 M = d + 4 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 4 >> 2] | 0);
 M = d + 8 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 8 >> 2] | 0);
 M = d + 12 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 12 >> 2] | 0);
 M = d + 16 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 16 >> 2] | 0);
 M = d + 20 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 20 >> 2] | 0);
 M = d + 24 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 24 >> 2] | 0);
 M = d + 28 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 28 >> 2] | 0);
 M = d + 32 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 32 >> 2] | 0);
 M = d + 36 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 36 >> 2] | 0);
 M = d + 40 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 40 >> 2] | 0);
 M = d + 44 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 44 >> 2] | 0);
 M = d + 48 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 48 >> 2] | 0);
 M = d + 52 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 52 >> 2] | 0);
 M = d + 56 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 56 >> 2] | 0);
 M = d + 60 | 0;
 c[M >> 2] = (c[M >> 2] | 0) + (c[e + 60 >> 2] | 0);
 e = 0;
 do {
  cc(a + (e << 2) | 0, c[d + (e << 2) >> 2] | 0);
  e = e + 1 | 0;
 } while (e >>> 0 < 16);
 i = b;
 return;
}
function bd(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 g = a;
 h = b;
 i = h;
 j = d;
 k = e;
 l = k;
 if ((i | 0) == 0) {
  m = (f | 0) != 0;
  if ((l | 0) == 0) {
   if (m) {
    c[f >> 2] = (g >>> 0) % (j >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   o = (g >>> 0) / (j >>> 0) >>> 0;
   return (H = n, o) | 0;
  } else {
   if (!m) {
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   o = 0;
   return (H = n, o) | 0;
  }
 }
 m = (l | 0) == 0;
 do {
  if ((j | 0) == 0) {
   if (m) {
    if ((f | 0) != 0) {
     c[f >> 2] = (i >>> 0) % (j >>> 0);
     c[f + 4 >> 2] = 0;
    }
    n = 0;
    o = (i >>> 0) / (j >>> 0) >>> 0;
    return (H = n, o) | 0;
   }
   if ((g | 0) == 0) {
    if ((f | 0) != 0) {
     c[f >> 2] = 0;
     c[f + 4 >> 2] = (i >>> 0) % (l >>> 0);
    }
    n = 0;
    o = (i >>> 0) / (l >>> 0) >>> 0;
    return (H = n, o) | 0;
   }
   p = l - 1 | 0;
   if ((p & l | 0) == 0) {
    if ((f | 0) != 0) {
     c[f >> 2] = a | 0;
     c[f + 4 >> 2] = p & i | b & 0;
    }
    n = 0;
    o = i >>> ((bR(l | 0) | 0) >>> 0);
    return (H = n, o) | 0;
   }
   p = (bS(l | 0) | 0) - (bS(i | 0) | 0) | 0;
   if (p >>> 0 <= 30) {
    q = p + 1 | 0;
    r = 31 - p | 0;
    s = q;
    t = i << r | g >>> (q >>> 0);
    u = i >>> (q >>> 0);
    v = 0;
    w = g << r;
    break;
   }
   if ((f | 0) == 0) {
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = h | b & 0;
   n = 0;
   o = 0;
   return (H = n, o) | 0;
  } else {
   if (!m) {
    r = (bS(l | 0) | 0) - (bS(i | 0) | 0) | 0;
    if (r >>> 0 <= 31) {
     q = r + 1 | 0;
     p = 31 - r | 0;
     x = r - 31 >> 31;
     s = q;
     t = g >>> (q >>> 0) & x | i << p;
     u = i >>> (q >>> 0) & x;
     v = 0;
     w = g << p;
     break;
    }
    if ((f | 0) == 0) {
     n = 0;
     o = 0;
     return (H = n, o) | 0;
    }
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = h | b & 0;
    n = 0;
    o = 0;
    return (H = n, o) | 0;
   }
   p = j - 1 | 0;
   if ((p & j | 0) != 0) {
    x = (bS(j | 0) | 0) + 33 - (bS(i | 0) | 0) | 0;
    q = 64 - x | 0;
    r = 32 - x | 0;
    y = r >> 31;
    z = x - 32 | 0;
    A = z >> 31;
    s = x;
    t = r - 1 >> 31 & i >>> (z >>> 0) | (i << r | g >>> (x >>> 0)) & A;
    u = A & i >>> (x >>> 0);
    v = g << q & y;
    w = (i << q | g >>> (z >>> 0)) & y | g << r & x - 33 >> 31;
    break;
   }
   if ((f | 0) != 0) {
    c[f >> 2] = p & g;
    c[f + 4 >> 2] = 0;
   }
   if ((j | 0) == 1) {
    n = h | b & 0;
    o = a | 0 | 0;
    return (H = n, o) | 0;
   } else {
    p = bR(j | 0) | 0;
    n = i >>> (p >>> 0) | 0;
    o = i << 32 - p | g >>> (p >>> 0) | 0;
    return (H = n, o) | 0;
   }
  }
 } while (0);
 if ((s | 0) == 0) {
  B = w;
  C = v;
  D = u;
  E = t;
  F = 0;
  G = 0;
 } else {
  g = d | 0 | 0;
  d = k | e & 0;
  e = cg(g, d, -1, -1) | 0;
  k = H;
  i = w;
  w = v;
  v = u;
  u = t;
  t = s;
  s = 0;
  while (1) {
   I = w >>> 31 | i << 1;
   J = s | w << 1;
   j = u << 1 | i >>> 31 | 0;
   a = u >>> 31 | v << 1 | 0;
   ce(e, k, j, a) | 0;
   b = H;
   h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
   K = h & 1;
   L = ce(j, a, h & g, (((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1) & d) | 0;
   M = H;
   b = t - 1 | 0;
   if ((b | 0) == 0) {
    break;
   } else {
    i = I;
    w = J;
    v = M;
    u = L;
    t = b;
    s = K;
   }
  }
  B = I;
  C = J;
  D = M;
  E = L;
  F = 0;
  G = K;
 }
 K = C;
 C = 0;
 if ((f | 0) != 0) {
  c[f >> 2] = E;
  c[f + 4 >> 2] = D;
 }
 n = (K | 0) >>> 31 | (B | C) << 1 | (C << 1 | K >>> 31) & 0 | F;
 o = (K << 1 | 0 >>> 31) & -2 | G;
 return (H = n, o) | 0;
}
function bg(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0.0, A = 0.0, B = 0, C = 0, D = 0, E = 0.0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0.0, O = 0, P = 0, Q = 0.0, R = 0.0, S = 0.0;
 e = b;
 while (1) {
  f = e + 1 | 0;
  if ((aK(a[e] | 0) | 0) == 0) {
   break;
  } else {
   e = f;
  }
 }
 g = a[e] | 0;
 if ((g << 24 >> 24 | 0) == 43) {
  i = f;
  j = 0;
 } else if ((g << 24 >> 24 | 0) == 45) {
  i = f;
  j = 1;
 } else {
  i = e;
  j = 0;
 }
 e = -1;
 f = 0;
 g = i;
 while (1) {
  k = a[g] | 0;
  if (((k << 24 >> 24) - 48 | 0) >>> 0 < 10) {
   l = e;
  } else {
   if (k << 24 >> 24 != 46 | (e | 0) > -1) {
    break;
   } else {
    l = f;
   }
  }
  e = l;
  f = f + 1 | 0;
  g = g + 1 | 0;
 }
 l = g + (-f | 0) | 0;
 i = (e | 0) < 0;
 m = ((i ^ 1) << 31 >> 31) + f | 0;
 n = (m | 0) > 18;
 o = (n ? -18 : -m | 0) + (i ? f : e) | 0;
 e = n ? 18 : m;
 do {
  if ((e | 0) == 0) {
   p = b;
   q = 0.0;
  } else {
   if ((e | 0) > 9) {
    m = l;
    n = e;
    f = 0;
    while (1) {
     i = a[m] | 0;
     r = m + 1 | 0;
     if (i << 24 >> 24 == 46) {
      s = a[r] | 0;
      t = m + 2 | 0;
     } else {
      s = i;
      t = r;
     }
     u = (f * 10 | 0) - 48 + (s << 24 >> 24) | 0;
     r = n - 1 | 0;
     if ((r | 0) > 9) {
      m = t;
      n = r;
      f = u;
     } else {
      break;
     }
    }
    v = +(u | 0) * 1.0e9;
    w = 9;
    x = t;
    y = 1399;
   } else {
    if ((e | 0) > 0) {
     v = 0.0;
     w = e;
     x = l;
     y = 1399;
    } else {
     z = 0.0;
     A = 0.0;
    }
   }
   if ((y | 0) == 1399) {
    f = x;
    n = w;
    m = 0;
    while (1) {
     r = a[f] | 0;
     i = f + 1 | 0;
     if (r << 24 >> 24 == 46) {
      B = a[i] | 0;
      C = f + 2 | 0;
     } else {
      B = r;
      C = i;
     }
     D = (m * 10 | 0) - 48 + (B << 24 >> 24) | 0;
     i = n - 1 | 0;
     if ((i | 0) > 0) {
      f = C;
      n = i;
      m = D;
     } else {
      break;
     }
    }
    z = +(D | 0);
    A = v;
   }
   E = A + z;
   do {
    if ((k << 24 >> 24 | 0) == 69 | (k << 24 >> 24 | 0) == 101) {
     m = g + 1 | 0;
     n = a[m] | 0;
     if ((n << 24 >> 24 | 0) == 43) {
      F = g + 2 | 0;
      G = 0;
     } else if ((n << 24 >> 24 | 0) == 45) {
      F = g + 2 | 0;
      G = 1;
     } else {
      F = m;
      G = 0;
     }
     m = a[F] | 0;
     if (((m << 24 >> 24) - 48 | 0) >>> 0 < 10) {
      H = F;
      I = 0;
      J = m;
     } else {
      K = 0;
      L = F;
      M = G;
      break;
     }
     while (1) {
      m = (I * 10 | 0) - 48 + (J << 24 >> 24) | 0;
      n = H + 1 | 0;
      f = a[n] | 0;
      if (((f << 24 >> 24) - 48 | 0) >>> 0 < 10) {
       H = n;
       I = m;
       J = f;
      } else {
       K = m;
       L = n;
       M = G;
       break;
      }
     }
    } else {
     K = 0;
     L = g;
     M = 0;
    }
   } while (0);
   n = o + ((M | 0) == 0 ? K : -K | 0) | 0;
   m = (n | 0) < 0 ? -n | 0 : n;
   if ((m | 0) > 511) {
    c[(aX() | 0) >> 2] = 34;
    N = 1.0;
    O = 88;
    P = 511;
    y = 1416;
   } else {
    if ((m | 0) == 0) {
     Q = 1.0;
    } else {
     N = 1.0;
     O = 88;
     P = m;
     y = 1416;
    }
   }
   if ((y | 0) == 1416) {
    while (1) {
     y = 0;
     if ((P & 1 | 0) == 0) {
      R = N;
     } else {
      R = N * +h[O >> 3];
     }
     m = P >> 1;
     if ((m | 0) == 0) {
      Q = R;
      break;
     } else {
      N = R;
      O = O + 8 | 0;
      P = m;
      y = 1416;
     }
    }
   }
   if ((n | 0) > -1) {
    p = L;
    q = E * Q;
    break;
   } else {
    p = L;
    q = E / Q;
    break;
   }
  }
 } while (0);
 if ((d | 0) != 0) {
  c[d >> 2] = p;
 }
 if ((j | 0) == 0) {
  S = q;
  return +S;
 }
 S = -0.0 - q;
 return +S;
}
function bh(b, d, e, f, g) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 h = i;
 j = c[40] | 0;
 k = c[44] | 0;
 l = k + 1 | 0;
 c[44] = l;
 m = aB(j | 0, 61) | 0;
 if ((m | 0) == 0) {
  n = ct(j | 0) | 0;
  o = 0;
 } else {
  n = m - j | 0;
  o = m + 1 | 0;
 }
 m = c[e >> 2] | 0;
 L1729 : do {
  if ((m | 0) != 0) {
   L1731 : do {
    if ((g | 0) != 0 & (n | 0) == 1) {
     p = 0;
     q = m;
     while (1) {
      if ((a[j] | 0) == (a[q] | 0)) {
       if ((ct(q | 0) | 0) == 1) {
        r = p;
        break L1731;
       }
      }
      p = p + 1 | 0;
      q = c[e + (p << 4) >> 2] | 0;
      if ((q | 0) == 0) {
       break L1729;
      }
     }
    } else {
     q = 0;
     p = -1;
     s = m;
     while (1) {
      if ((ap(j | 0, s | 0, n | 0) | 0) == 0) {
       if ((ct(s | 0) | 0) == (n | 0)) {
        r = q;
        break L1731;
       }
       if ((p | 0) == -1) {
        t = q;
       } else {
        break;
       }
      } else {
       t = p;
      }
      u = q + 1 | 0;
      v = c[e + (u << 4) >> 2] | 0;
      if ((v | 0) == 0) {
       r = t;
       break L1731;
      } else {
       q = u;
       p = t;
       s = v;
      }
     }
     do {
      if ((c[46] | 0) != 0) {
       if ((a[d] | 0) == 58) {
        break;
       }
       b2(304, (w = i, i = i + 16 | 0, c[w >> 2] = n, c[w + 8 >> 2] = j, w) | 0);
       i = w;
      }
     } while (0);
     c[42] = 0;
     x = 63;
     i = h;
     return x | 0;
    }
   } while (0);
   if ((r | 0) == -1) {
    break;
   }
   s = e + (r << 4) + 4 | 0;
   p = c[s >> 2] | 0;
   q = (o | 0) == 0;
   if (!((p | 0) != 0 | q)) {
    do {
     if ((c[46] | 0) != 0) {
      if ((a[d] | 0) == 58) {
       break;
      }
      b2(208, (w = i, i = i + 16 | 0, c[w >> 2] = n, c[w + 8 >> 2] = j, w) | 0);
      i = w;
     }
    } while (0);
    if ((c[e + (r << 4) + 8 >> 2] | 0) == 0) {
     y = c[e + (r << 4) + 12 >> 2] | 0;
    } else {
     y = 0;
    }
    c[42] = y;
    x = (a[d] | 0) == 58 ? 58 : 63;
    i = h;
    return x | 0;
   }
   do {
    if ((p - 1 | 0) >>> 0 < 2) {
     if (!q) {
      c[222] = o;
      break;
     }
     if ((p | 0) != 1) {
      break;
     }
     c[44] = k + 2;
     c[222] = c[b + (l << 2) >> 2];
    }
   } while (0);
   if (!((c[s >> 2] | 0) == 1 & (c[222] | 0) == 0)) {
    if ((f | 0) != 0) {
     c[f >> 2] = r;
    }
    p = c[e + (r << 4) + 8 >> 2] | 0;
    q = c[e + (r << 4) + 12 >> 2] | 0;
    if ((p | 0) == 0) {
     x = q;
     i = h;
     return x | 0;
    }
    c[p >> 2] = q;
    x = 0;
    i = h;
    return x | 0;
   }
   do {
    if ((c[46] | 0) != 0) {
     if ((a[d] | 0) == 58) {
      break;
     }
     b2(8, (w = i, i = i + 8 | 0, c[w >> 2] = j, w) | 0);
     i = w;
    }
   } while (0);
   if ((c[e + (r << 4) + 8 >> 2] | 0) == 0) {
    z = c[e + (r << 4) + 12 >> 2] | 0;
   } else {
    z = 0;
   }
   c[42] = z;
   c[44] = (c[44] | 0) - 1;
   x = (a[d] | 0) == 58 ? 58 : 63;
   i = h;
   return x | 0;
  }
 } while (0);
 if ((g | 0) != 0) {
  c[44] = k;
  x = -1;
  i = h;
  return x | 0;
 }
 do {
  if ((c[46] | 0) != 0) {
   if ((a[d] | 0) == 58) {
    break;
   }
   b2(248, (w = i, i = i + 8 | 0, c[w >> 2] = j, w) | 0);
   i = w;
  }
 } while (0);
 c[42] = 0;
 x = 63;
 i = h;
 return x | 0;
}
function bi(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 do {
  if ((c[224] | 0) == 0) {
   f = ar(30) | 0;
   if ((f - 1 & f | 0) == 0) {
    c[226] = f;
    c[225] = f;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 f = (a | 0) == 0;
 do {
  if ((e | 0) == 0) {
   if (f) {
    g = a8(0) | 0;
    return g | 0;
   } else {
    h = a << 2;
    if (h >>> 0 < 11) {
     i = 0;
     j = 16;
     break;
    }
    i = 0;
    j = h + 11 & -8;
    break;
   }
  } else {
   if (f) {
    g = e;
   } else {
    i = e;
    j = 0;
    break;
   }
   return g | 0;
  }
 } while (0);
 do {
  if ((d & 1 | 0) == 0) {
   if (f) {
    k = 0;
    l = 0;
    break;
   } else {
    m = 0;
    n = 0;
   }
   while (1) {
    e = c[b + (n << 2) >> 2] | 0;
    if (e >>> 0 < 11) {
     o = 16;
    } else {
     o = e + 11 & -8;
    }
    e = o + m | 0;
    h = n + 1 | 0;
    if ((h | 0) == (a | 0)) {
     k = 0;
     l = e;
     break;
    } else {
     m = e;
     n = h;
    }
   }
  } else {
   h = c[b >> 2] | 0;
   if (h >>> 0 < 11) {
    p = 16;
   } else {
    p = h + 11 & -8;
   }
   k = p;
   l = ad(p, a) | 0;
  }
 } while (0);
 p = a8(j - 4 + l | 0) | 0;
 if ((p | 0) == 0) {
  g = 0;
  return g | 0;
 }
 n = p - 8 | 0;
 m = c[p - 4 >> 2] & -8;
 if ((d & 2 | 0) != 0) {
  bC(p | 0, 0, -4 - j + m | 0);
 }
 if ((i | 0) == 0) {
  c[p + (l - 4) >> 2] = m - l | 3;
  q = p + l | 0;
  r = l;
 } else {
  q = i;
  r = m;
 }
 c[q >> 2] = p;
 p = a - 1 | 0;
 L1166 : do {
  if ((p | 0) == 0) {
   s = n;
   t = r;
  } else {
   if ((k | 0) == 0) {
    u = n;
    v = r;
    w = 0;
   } else {
    a = n;
    m = r;
    i = 0;
    while (1) {
     l = m - k | 0;
     c[a + 4 >> 2] = k | 3;
     j = a + k | 0;
     d = i + 1 | 0;
     c[q + (d << 2) >> 2] = a + (k + 8);
     if ((d | 0) == (p | 0)) {
      s = j;
      t = l;
      break L1166;
     } else {
      a = j;
      m = l;
      i = d;
     }
    }
   }
   while (1) {
    i = c[b + (w << 2) >> 2] | 0;
    if (i >>> 0 < 11) {
     x = 16;
    } else {
     x = i + 11 & -8;
    }
    i = v - x | 0;
    c[u + 4 >> 2] = x | 3;
    m = u + x | 0;
    a = w + 1 | 0;
    c[q + (a << 2) >> 2] = u + (x + 8);
    if ((a | 0) == (p | 0)) {
     s = m;
     t = i;
     break;
    } else {
     u = m;
     v = i;
     w = a;
    }
   }
  }
 } while (0);
 c[s + 4 >> 2] = t | 3;
 g = q;
 return g | 0;
}
function bj(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 do {
  if ((c[224] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[226] = b;
    c[225] = b;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
   }
  }
 } while (0);
 b = c[238] | 0;
 if ((b | 0) == 0) {
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  j = 0;
 } else {
  k = c[235] | 0;
  l = k + 40 | 0;
  m = 1;
  n = l;
  o = l;
  l = 1376;
  while (1) {
   p = c[l >> 2] | 0;
   q = p + 8 | 0;
   if ((q & 7 | 0) == 0) {
    r = 0;
   } else {
    r = -q & 7;
   }
   q = p + (c[l + 4 >> 2] | 0) | 0;
   s = m;
   t = n;
   u = o;
   v = p + r | 0;
   while (1) {
    if (v >>> 0 >= q >>> 0 | (v | 0) == (b | 0)) {
     w = s;
     x = t;
     y = u;
     break;
    }
    z = c[v + 4 >> 2] | 0;
    if ((z | 0) == 7) {
     w = s;
     x = t;
     y = u;
     break;
    }
    A = z & -8;
    B = A + u | 0;
    if ((z & 3 | 0) == 1) {
     C = A + t | 0;
     D = s + 1 | 0;
    } else {
     C = t;
     D = s;
    }
    z = v + A | 0;
    if (z >>> 0 < p >>> 0) {
     w = D;
     x = C;
     y = B;
     break;
    } else {
     s = D;
     t = C;
     u = B;
     v = z;
    }
   }
   v = c[l + 8 >> 2] | 0;
   if ((v | 0) == 0) {
    break;
   } else {
    m = w;
    n = x;
    o = y;
    l = v;
   }
  }
  l = c[340] | 0;
  d = k;
  e = y;
  f = w;
  g = l - y | 0;
  h = c[341] | 0;
  i = l - x | 0;
  j = x;
 }
 c[a >> 2] = e;
 c[a + 4 >> 2] = f;
 f = a + 8 | 0;
 c[f >> 2] = 0;
 c[f + 4 >> 2] = 0;
 c[a + 16 >> 2] = g;
 c[a + 20 >> 2] = h;
 c[a + 24 >> 2] = 0;
 c[a + 28 >> 2] = i;
 c[a + 32 >> 2] = j;
 c[a + 36 >> 2] = d;
 return;
}
function bk(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0;
 do {
  if ((c[224] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[226] = b;
    c[225] = b;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 if (a >>> 0 >= 4294967232) {
  d = 0;
  return d | 0;
 }
 b = c[238] | 0;
 if ((b | 0) == 0) {
  d = 0;
  return d | 0;
 }
 e = c[235] | 0;
 do {
  if (e >>> 0 > (a + 40 | 0) >>> 0) {
   f = c[226] | 0;
   g = ad((((-41 - a + e + f | 0) >>> 0) / (f >>> 0) | 0) - 1 | 0, f) | 0;
   h = b;
   i = 1376;
   while (1) {
    j = c[i >> 2] | 0;
    if (j >>> 0 <= h >>> 0) {
     if ((j + (c[i + 4 >> 2] | 0) | 0) >>> 0 > h >>> 0) {
      k = i;
      break;
     }
    }
    j = c[i + 8 >> 2] | 0;
    if ((j | 0) == 0) {
     k = 0;
     break;
    } else {
     i = j;
    }
   }
   if ((c[k + 12 >> 2] & 8 | 0) != 0) {
    break;
   }
   i = aV(0) | 0;
   h = k + 4 | 0;
   if ((i | 0) != ((c[k >> 2] | 0) + (c[h >> 2] | 0) | 0)) {
    break;
   }
   j = aV(-(g >>> 0 > 2147483646 ? -2147483648 - f | 0 : g) | 0) | 0;
   l = aV(0) | 0;
   if (!((j | 0) != -1 & l >>> 0 < i >>> 0)) {
    break;
   }
   j = i - l | 0;
   if ((i | 0) == (l | 0)) {
    break;
   }
   c[h >> 2] = (c[h >> 2] | 0) - j;
   c[340] = (c[340] | 0) - j;
   h = c[238] | 0;
   l = (c[235] | 0) - j | 0;
   j = h;
   i = h + 8 | 0;
   if ((i & 7 | 0) == 0) {
    m = 0;
   } else {
    m = -i & 7;
   }
   i = l - m | 0;
   c[238] = j + m;
   c[235] = i;
   c[j + (m + 4) >> 2] = i | 1;
   c[j + (l + 4) >> 2] = 40;
   c[239] = c[228];
   d = 1;
   return d | 0;
  }
 } while (0);
 if ((c[235] | 0) >>> 0 <= (c[239] | 0) >>> 0) {
  d = 0;
  return d | 0;
 }
 c[239] = -1;
 d = 0;
 return d | 0;
}
function bm(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 d = a >>> 0 < 16 ? 16 : a;
 if ((d - 1 & d | 0) == 0) {
  e = d;
 } else {
  a = 16;
  while (1) {
   if (a >>> 0 < d >>> 0) {
    a = a << 1;
   } else {
    e = a;
    break;
   }
  }
 }
 if ((-64 - e | 0) >>> 0 <= b >>> 0) {
  c[(aX() | 0) >> 2] = 12;
  f = 0;
  return f | 0;
 }
 if (b >>> 0 < 11) {
  g = 16;
 } else {
  g = b + 11 & -8;
 }
 b = a8(e + 12 + g | 0) | 0;
 if ((b | 0) == 0) {
  f = 0;
  return f | 0;
 }
 a = b - 8 | 0;
 d = a;
 h = e - 1 | 0;
 do {
  if ((b & h | 0) == 0) {
   i = d;
  } else {
   j = b + h & -e;
   k = j - 8 | 0;
   l = a;
   if ((k - l | 0) >>> 0 > 15) {
    m = k;
   } else {
    m = j + (e - 8) | 0;
   }
   j = m;
   k = m - l | 0;
   l = b - 4 | 0;
   n = c[l >> 2] | 0;
   o = (n & -8) - k | 0;
   if ((n & 3 | 0) == 0) {
    c[m >> 2] = (c[a >> 2] | 0) + k;
    c[m + 4 >> 2] = o;
    i = j;
    break;
   } else {
    n = m + 4 | 0;
    c[n >> 2] = o | c[n >> 2] & 1 | 2;
    n = m + (o + 4) | 0;
    c[n >> 2] = c[n >> 2] | 1;
    c[l >> 2] = k | c[l >> 2] & 1 | 2;
    l = b + (k - 4) | 0;
    c[l >> 2] = c[l >> 2] | 1;
    bc(d, k);
    i = j;
    break;
   }
  }
 } while (0);
 d = i + 4 | 0;
 b = c[d >> 2] | 0;
 do {
  if ((b & 3 | 0) != 0) {
   m = b & -8;
   if (m >>> 0 <= (g + 16 | 0) >>> 0) {
    break;
   }
   a = m - g | 0;
   e = i;
   c[d >> 2] = g | b & 1 | 2;
   c[e + (g | 4) >> 2] = a | 3;
   h = e + (m | 4) | 0;
   c[h >> 2] = c[h >> 2] | 1;
   bc(e + g | 0, a);
  }
 } while (0);
 f = i + 8 | 0;
 return f | 0;
}
function bl() {
 var a = 0, b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0;
 a = i;
 do {
  if ((c[224] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[226] = b;
    c[225] = b;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
   }
  }
 } while (0);
 b = c[238] | 0;
 if ((b | 0) == 0) {
  d = 0;
  e = 0;
  f = 0;
 } else {
  g = c[341] | 0;
  h = c[340] | 0;
  j = h - 40 - (c[235] | 0) | 0;
  k = 1376;
  while (1) {
   l = c[k >> 2] | 0;
   m = l + 8 | 0;
   if ((m & 7 | 0) == 0) {
    n = 0;
   } else {
    n = -m & 7;
   }
   m = l + (c[k + 4 >> 2] | 0) | 0;
   p = j;
   q = l + n | 0;
   while (1) {
    if (q >>> 0 >= m >>> 0 | (q | 0) == (b | 0)) {
     r = p;
     break;
    }
    s = c[q + 4 >> 2] | 0;
    if ((s | 0) == 7) {
     r = p;
     break;
    }
    t = s & -8;
    u = p - ((s & 3 | 0) == 1 ? t : 0) | 0;
    s = q + t | 0;
    if (s >>> 0 < l >>> 0) {
     r = u;
     break;
    } else {
     p = u;
     q = s;
    }
   }
   q = c[k + 8 >> 2] | 0;
   if ((q | 0) == 0) {
    d = r;
    e = h;
    f = g;
    break;
   } else {
    j = r;
    k = q;
   }
  }
 }
 k = c[o >> 2] | 0;
 av(k | 0, 544, (r = i, i = i + 8 | 0, c[r >> 2] = f, r) | 0) | 0;
 i = r;
 av(k | 0, 512, (r = i, i = i + 8 | 0, c[r >> 2] = e, r) | 0) | 0;
 i = r;
 av(k | 0, 416, (r = i, i = i + 8 | 0, c[r >> 2] = d, r) | 0) | 0;
 i = r;
 i = a;
 return;
}
function bn(a, b, d, e, f, g, h, i, j, k) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 j = j | 0;
 k = k | 0;
 var l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 l = bI(i, 0, h, 0) | 0;
 m = H;
 n = 0;
 if (m >>> 0 > n >>> 0 | m >>> 0 == n >>> 0 & l >>> 0 > 1073741823 >>> 0) {
  c[(aX() | 0) >> 2] = 27;
  o = -1;
  return o | 0;
 }
 l = cg(f, g, -1, -1) | 0;
 if ((l & f | 0) != 0 | (H & g | 0) != 0 | (f | 0) == 0 & (g | 0) == 0) {
  c[(aX() | 0) >> 2] = 22;
  o = -1;
  return o | 0;
 }
 do {
  if (!((33554431 / (i >>> 0) | 0) >>> 0 < h >>> 0 | h >>> 0 > 16777215)) {
   l = 0;
   if (l >>> 0 < g >>> 0 | l >>> 0 == g >>> 0 & (33554431 / (h >>> 0) | 0) >>> 0 < f >>> 0) {
    break;
   }
   l = h << 7;
   n = a8(ad(l, i) | 0) | 0;
   if ((n | 0) == 0) {
    o = -1;
    return o | 0;
   }
   m = a8(h << 8) | 0;
   do {
    if ((m | 0) != 0) {
     p = bI(l, 0, f, g) | 0;
     q = a8(p) | 0;
     if ((q | 0) == 0) {
      bb(m);
      break;
     }
     p = ad(i << 7, h) | 0;
     bo(a, b, d, e, 1, 0, n, p);
     if ((i | 0) != 0) {
      r = h << 7;
      s = 0;
      do {
       bq(n + (ad(r, s) | 0) | 0, h, f, g, q, m);
       s = s + 1 | 0;
      } while (s >>> 0 < i >>> 0);
     }
     bo(a, b, n, p, 1, 0, j, k);
     bb(q);
     bb(m);
     bb(n);
     o = 0;
     return o | 0;
    }
   } while (0);
   bb(n);
   o = -1;
   return o | 0;
  }
 } while (0);
 c[(aX() | 0) >> 2] = 12;
 o = -1;
 return o | 0;
}
function bp(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 d = a + (b << 2) | 0;
 if ((b | 0) == 0) {
  return 0;
 } else {
  e = a;
 }
 L1182 : while (1) {
  a = c[e >> 2] | 0;
  L1184 : do {
   if ((a | 0) == 0) {
    f = e + 4 | 0;
   } else {
    b = a - 8 | 0;
    g = b;
    h = a - 4 | 0;
    i = c[h >> 2] & -8;
    c[e >> 2] = 0;
    if (b >>> 0 < (c[236] | 0) >>> 0) {
     j = 895;
     break L1182;
    }
    b = c[h >> 2] | 0;
    if ((b & 3 | 0) == 1) {
     j = 896;
     break L1182;
    }
    k = e + 4 | 0;
    l = b - 8 & -8;
    do {
     if ((k | 0) != (d | 0)) {
      if ((c[k >> 2] | 0) != (a + (l + 8) | 0)) {
       break;
      }
      m = (c[a + (l | 4) >> 2] & -8) + i | 0;
      c[h >> 2] = b & 1 | m | 2;
      n = a + (m - 4) | 0;
      c[n >> 2] = c[n >> 2] | 1;
      c[k >> 2] = a;
      f = k;
      break L1184;
     }
    } while (0);
    bc(g, i);
    f = k;
   }
  } while (0);
  if ((f | 0) == (d | 0)) {
   j = 898;
   break;
  } else {
   e = f;
  }
 }
 if ((j | 0) == 895) {
  au();
  return 0;
 } else if ((j | 0) == 896) {
  au();
  return 0;
 } else if ((j | 0) == 898) {
  return 0;
 }
 return 0;
}
function bo(b, c, d, e, f, g, h, j) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 k = i;
 i = i + 488 | 0;
 l = k | 0;
 m = k + 208 | 0;
 n = k + 424 | 0;
 o = k + 456 | 0;
 bs(l, b, c);
 cr(l, d, e);
 if ((j | 0) == 0) {
  i = k;
  return;
 }
 e = k + 416 | 0;
 d = m;
 p = l;
 l = n | 0;
 q = o | 0;
 r = 0;
 s = g >>> 0 < r >>> 0 | g >>> 0 == r >>> 0 & f >>> 0 < 2 >>> 0;
 r = 0;
 t = 0;
 do {
  r = r + 1 | 0;
  cd(e, r);
  bE(d | 0, p | 0, 208) | 0;
  cr(m, e, 4);
  bY(l, m);
  bE(q | 0, l | 0, 32) | 0;
  if (!s) {
   u = 0;
   v = 2;
   do {
    bs(m, b, c);
    cr(m, l, 32);
    bY(l, m);
    w = 0;
    do {
     x = o + w | 0;
     a[x] = a[x] ^ a[n + w | 0];
     w = w + 1 | 0;
    } while ((w | 0) < 32);
    v = cg(v, u, 1, 0) | 0;
    u = H;
   } while (!(u >>> 0 > g >>> 0 | u >>> 0 == g >>> 0 & v >>> 0 > f >>> 0));
  }
  v = j - t | 0;
  u = v >>> 0 > 32 ? 32 : v;
  v = h + t | 0;
  bE(v | 0, q | 0, u) | 0;
  t = r << 5;
 } while (t >>> 0 < j >>> 0);
 i = k;
 return;
}
function bq(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 g = b << 7;
 h = f + g | 0;
 bX(f, a, g);
 if ((c | 0) == 0 & (d | 0) == 0) {
  bX(a, f, g);
  return;
 }
 i = g;
 j = 0;
 k = 0;
 l = 0;
 do {
  m = bI(l, k, i, j) | 0;
  bX(e + m | 0, f, g);
  bt(f, h, b);
  l = cg(l, k, 1, 0) | 0;
  k = H;
 } while (k >>> 0 < d >>> 0 | k >>> 0 == d >>> 0 & l >>> 0 < c >>> 0);
 if ((c | 0) == 0 & (d | 0) == 0) {
  bX(a, f, g);
  return;
 }
 l = cg(c, d, -1, -1) | 0;
 k = H;
 j = g;
 i = 0;
 m = 0;
 n = 0;
 do {
  o = cl(f, b) | 0;
  p = bI(o & l, H & k, j, i) | 0;
  bU(f, e + p | 0, g);
  bt(f, h, b);
  n = cg(n, m, 1, 0) | 0;
  m = H;
 } while (m >>> 0 < d >>> 0 | m >>> 0 == d >>> 0 & n >>> 0 < c >>> 0);
 bX(a, f, g);
 return;
}
function br(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0;
 e = a + 32 | 0;
 f = a + 36 | 0;
 g = c[f >> 2] | 0;
 h = g >>> 3 & 63;
 i = aN(g | 0, d << 3 | 0) | 0;
 c[f >> 2] = i;
 if (H) {
  i = e | 0;
  c[i >> 2] = (c[i >> 2] | 0) + 1;
 }
 i = e | 0;
 c[i >> 2] = (c[i >> 2] | 0) + (d >>> 29);
 i = 64 - h | 0;
 e = a + 40 + h | 0;
 if (i >>> 0 > d >>> 0) {
  bE(e | 0, b | 0, d) | 0;
  return;
 }
 bE(e | 0, b | 0, i) | 0;
 e = a | 0;
 h = a + 40 | 0;
 a9(e, h);
 a = b + i | 0;
 b = d - i | 0;
 if (b >>> 0 > 63) {
  i = b;
  d = a;
  while (1) {
   a9(e, d);
   f = d + 64 | 0;
   g = i - 64 | 0;
   if (g >>> 0 > 63) {
    i = g;
    d = f;
   } else {
    j = g;
    k = f;
    break;
   }
  }
 } else {
  j = b;
  k = a;
 }
 bE(h | 0, k | 0, j) | 0;
 return;
}
function bu(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 do {
  if ((c[224] | 0) == 0) {
   d = ar(30) | 0;
   if ((d - 1 & d | 0) == 0) {
    c[226] = d;
    c[225] = d;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 if ((a | 0) == (-1 | 0)) {
  c[228] = b;
  e = 1;
  return e | 0;
 } else if ((a | 0) == (-2 | 0)) {
  if ((c[225] | 0) >>> 0 > b >>> 0) {
   e = 0;
   return e | 0;
  }
  if ((b - 1 & b | 0) != 0) {
   e = 0;
   return e | 0;
  }
  c[226] = b;
  e = 1;
  return e | 0;
 } else if ((a | 0) == (-3 | 0)) {
  c[227] = b;
  e = 1;
  return e | 0;
 } else {
  e = 0;
  return e | 0;
 }
 return 0;
}
function bs(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0;
 e = i;
 i = i + 96 | 0;
 f = e | 0;
 if (d >>> 0 > 64) {
  g = b | 0;
  bO(g);
  br(g, c, d);
  h = e + 64 | 0;
  ci(h, g);
  j = h;
  k = 32;
 } else {
  j = c;
  k = d;
 }
 d = b | 0;
 bO(d);
 c = f | 0;
 bC(c | 0, 54, 64);
 if ((k | 0) != 0) {
  h = 0;
  do {
   g = f + h | 0;
   a[g] = a[g] ^ a[j + h | 0];
   h = h + 1 | 0;
  } while (h >>> 0 < k >>> 0);
 }
 br(d, c, 64);
 d = b + 104 | 0;
 bO(d);
 bC(c | 0, 92, 64);
 if ((k | 0) == 0) {
  br(d, c, 64);
  i = e;
  return;
 } else {
  l = 0;
 }
 do {
  b = f + l | 0;
  a[b] = a[b] ^ a[j + l | 0];
  l = l + 1 | 0;
 } while (l >>> 0 < k >>> 0);
 br(d, c, 64);
 i = e;
 return;
}
function bt(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 d = i;
 i = i + 64 | 0;
 e = d | 0;
 f = c << 1;
 bX(e, a + ((c << 7) - 64) | 0, 64);
 if ((f | 0) != 0) {
  g = 0;
  do {
   h = g << 6;
   bU(e, a + h | 0, 64);
   bf(e);
   bX(b + h | 0, e, 64);
   g = g + 1 | 0;
  } while (g >>> 0 < f >>> 0);
 }
 if ((c | 0) == 0) {
  i = d;
  return;
 } else {
  j = 0;
 }
 do {
  bX(a + (j << 6) | 0, b + (j << 7) | 0, 64);
  j = j + 1 | 0;
 } while (j >>> 0 < c >>> 0);
 if ((c | 0) == 0) {
  i = d;
  return;
 } else {
  k = 0;
 }
 do {
  bX(a + (k + c << 6) | 0, b + (k << 7 | 64) | 0, 64);
  k = k + 1 | 0;
 } while (k >>> 0 < c >>> 0);
 i = d;
 return;
}
function bw(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 if ((a | 0) == 0) {
  d = a8(b) | 0;
  return d | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(aX() | 0) >> 2] = 12;
  d = 0;
  return d | 0;
 }
 if (b >>> 0 < 11) {
  e = 16;
 } else {
  e = b + 11 & -8;
 }
 f = be(a - 8 | 0, e) | 0;
 if ((f | 0) != 0) {
  d = f + 8 | 0;
  return d | 0;
 }
 f = a8(b) | 0;
 if ((f | 0) == 0) {
  d = 0;
  return d | 0;
 }
 e = c[a - 4 >> 2] | 0;
 g = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 e = g >>> 0 < b >>> 0 ? g : b;
 bE(f | 0, a | 0, e) | 0;
 bb(a);
 d = f;
 return d | 0;
}
function bv(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 f = i;
 i = i + 8 | 0;
 g = f | 0;
 h = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 j = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 k = e >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 l = ((e | 0) < 0 ? -1 : 0) >> 31 | ((e | 0) < 0 ? -1 : 0) << 1;
 m = ce(h ^ a, j ^ b, h, j) | 0;
 b = H;
 a = ce(k ^ d, l ^ e, k, l) | 0;
 bd(m, b, a, H, g) | 0;
 a = ce(c[g >> 2] ^ h, c[g + 4 >> 2] ^ j, h, j) | 0;
 j = H;
 i = f;
 return (H = j, a) | 0;
}
function by(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 do {
  if ((b | 0) == 8) {
   e = a8(d) | 0;
  } else {
   f = b >>> 2;
   if ((b & 3 | 0) != 0 | (f | 0) == 0) {
    g = 22;
    return g | 0;
   }
   if ((f + 1073741823 & f | 0) != 0) {
    g = 22;
    return g | 0;
   }
   if ((-64 - b | 0) >>> 0 < d >>> 0) {
    g = 12;
    return g | 0;
   } else {
    e = bm(b >>> 0 < 16 ? 16 : b, d) | 0;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 0) {
  g = 12;
  return g | 0;
 }
 c[a >> 2] = e;
 g = 0;
 return g | 0;
}
function bB(a) {
 a = a | 0;
 var b = 0, c = 0, e = 0, f = 0;
 b = d[a + 1 | 0] | 0;
 c = d[a + 2 | 0] | 0;
 e = d[a + 3 | 0] | 0;
 f = cg(b << 8 | 0 >>> 24 | (d[a] | 0) | (c << 16 | 0 >>> 16) | (e << 24 | 0 >>> 8) | (0 << 8 | 0 >>> 24), 0 << 8 | b >>> 24 | (0 << 16 | c >>> 16) | (0 << 24 | e >>> 8) | (d[a + 4 | 0] | 0) | ((d[a + 5 | 0] | 0) << 8 | 0 >>> 24), 0 << 16 | 0 >>> 16, (d[a + 6 | 0] | 0) << 16 | 0 >>> 16) | 0;
 e = cg(f, H, 0 << 24 | 0 >>> 8, (d[a + 7 | 0] | 0) << 24 | 0 >>> 8) | 0;
 return (H = H, e) | 0;
}
function bx(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 e = b >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 f = ((b | 0) < 0 ? -1 : 0) >> 31 | ((b | 0) < 0 ? -1 : 0) << 1;
 g = d >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 h = ((d | 0) < 0 ? -1 : 0) >> 31 | ((d | 0) < 0 ? -1 : 0) << 1;
 i = ce(e ^ a, f ^ b, e, f) | 0;
 b = H;
 a = g ^ e;
 e = h ^ f;
 f = ce((bd(i, b, ce(g ^ c, h ^ d, g, h) | 0, H, 0) | 0) ^ a, H ^ e, a, e) | 0;
 return (H = H, f) | 0;
}
function bE(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if ((e | 0) == 0) return f | 0;
   a[b] = a[d] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b] = a[d] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}
function bC(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  e = b & 3;
  g = d | d << 8 | d << 16 | d << 24;
  h = f & ~3;
  if (e) {
   e = b + 4 - e | 0;
   while ((b | 0) < (e | 0)) {
    a[b] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (h | 0)) {
   c[b >> 2] = g;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b] = d;
  b = b + 1 | 0;
 }
}
function bz(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = i;
 e = c[(aX() | 0) >> 2] | 0;
 f = c[o >> 2] | 0;
 g = c[r >> 2] | 0;
 av(f | 0, 448, (h = i, i = i + 8 | 0, c[h >> 2] = g, h) | 0) | 0;
 i = h;
 if ((a | 0) != 0) {
  aQ(f | 0, a | 0, b | 0) | 0;
  aE(488, 2, 1, f | 0) | 0;
 }
 b = at(e | 0) | 0;
 av(f | 0, 400, (h = i, i = i + 8 | 0, c[h >> 2] = b, h) | 0) | 0;
 i = h;
 i = d;
 return;
}
function bA(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[(aX() | 0) >> 2] | 0;
 f = c[o >> 2] | 0;
 g = c[r >> 2] | 0;
 av(f | 0, 504, (h = i, i = i + 8 | 0, c[h >> 2] = g, h) | 0) | 0;
 i = h;
 if ((b | 0) != 0) {
  aQ(f | 0, b | 0, d | 0) | 0;
  aE(496, 2, 1, f | 0) | 0;
 }
 d = at(e | 0) | 0;
 av(f | 0, 408, (h = i, i = i + 8 | 0, c[h >> 2] = d, h) | 0) | 0;
 i = h;
 aH(a | 0);
}
function bD(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 do {
  if ((a | 0) == 0) {
   d = 0;
  } else {
   e = ad(b, a) | 0;
   if ((b | a) >>> 0 <= 65535) {
    d = e;
    break;
   }
   d = ((e >>> 0) / (a >>> 0) | 0 | 0) == (b | 0) ? e : -1;
  }
 } while (0);
 b = a8(d) | 0;
 if ((b | 0) == 0) {
  return b | 0;
 }
 if ((c[b - 4 >> 2] & 3 | 0) == 0) {
  return b | 0;
 }
 bC(b | 0, 0, d | 0);
 return b | 0;
}
function bK(a) {
 a = a | 0;
 var b = 0;
 do {
  if ((c[224] | 0) == 0) {
   b = ar(30) | 0;
   if ((b - 1 & b | 0) == 0) {
    c[226] = b;
    c[225] = b;
    c[227] = -1;
    c[228] = -1;
    c[229] = 0;
    c[343] = 0;
    c[224] = (a_(0) | 0) & -16 ^ 1431655768;
    break;
   } else {
    au();
    return 0;
   }
  }
 } while (0);
 b = c[225] | 0;
 return b1(b, a - 1 + b & -b) | 0;
}
function bJ(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 if ((c[224] | 0) != 0) {
  b = c[225] | 0;
  d = b1(b, a) | 0;
  return d | 0;
 }
 e = ar(30) | 0;
 if ((e - 1 & e | 0) != 0) {
  au();
  return 0;
 }
 c[226] = e;
 c[225] = e;
 c[227] = -1;
 c[228] = -1;
 c[229] = 0;
 c[343] = 0;
 c[224] = (a_(0) | 0) & -16 ^ 1431655768;
 b = c[225] | 0;
 d = b1(b, a) | 0;
 return d | 0;
}
function bH(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = (a | 0) == 0 ? 1 : a;
 while (1) {
  d = a8(b) | 0;
  if ((d | 0) != 0) {
   e = 1152;
   break;
  }
  a = (F = c[352] | 0, c[352] = F + 0, F);
  if ((a | 0) == 0) {
   break;
  }
  a6[a & 1]();
 }
 if ((e | 0) == 1152) {
  return d | 0;
 }
 d = aJ(4) | 0;
 c[d >> 2] = 584;
 as(d | 0, 768, 8);
 return 0;
}
function bF(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0;
 d = i;
 e = c[o >> 2] | 0;
 f = c[r >> 2] | 0;
 av(e | 0, 392, (g = i, i = i + 8 | 0, c[g >> 2] = f, g) | 0) | 0;
 i = g;
 if ((a | 0) == 0) {
  h = aC(10, e | 0) | 0;
  i = d;
  return;
 }
 aQ(e | 0, a | 0, b | 0) | 0;
 h = aC(10, e | 0) | 0;
 i = d;
 return;
}
function bG(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = c[o >> 2] | 0;
 f = c[r >> 2] | 0;
 av(e | 0, 456, (g = i, i = i + 8 | 0, c[g >> 2] = f, g) | 0) | 0;
 i = g;
 if ((b | 0) == 0) {
  h = aC(10, e | 0) | 0;
  aH(a | 0);
 }
 aQ(e | 0, b | 0, d | 0) | 0;
 h = aC(10, e | 0) | 0;
 aH(a | 0);
}
function bN(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 c = a & 65535;
 d = b & 65535;
 e = ad(d, c) | 0;
 f = a >>> 16;
 a = (e >>> 16) + (ad(d, f) | 0) | 0;
 d = b >>> 16;
 b = ad(d, c) | 0;
 return (H = (a >>> 16) + (ad(d, f) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | e & 65535 | 0) | 0;
}
function bO(a) {
 a = a | 0;
 c[a + 36 >> 2] = 0;
 c[a + 32 >> 2] = 0;
 c[a >> 2] = 1779033703;
 c[a + 4 >> 2] = -1150833019;
 c[a + 8 >> 2] = 1013904242;
 c[a + 12 >> 2] = -1521486534;
 c[a + 16 >> 2] = 1359893119;
 c[a + 20 >> 2] = -1694144372;
 c[a + 24 >> 2] = 528734635;
 c[a + 28 >> 2] = 1541459225;
 return;
}
function bL(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if ((a | 0) == 0) {
  return 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(aX() | 0) >> 2] = 12;
  return 0;
 }
 if (b >>> 0 < 11) {
  d = 16;
 } else {
  d = b + 11 & -8;
 }
 b = a - 8 | 0;
 e = (be(b, d) | 0) == (b | 0);
 return (e ? a : 0) | 0;
}
function bS(b) {
 b = b | 0;
 var c = 0;
 c = a[n + (b >>> 24) | 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[n + (b >> 16 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[n + (b >> 8 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[n + (b & 255) | 0] | 0) + 24 | 0;
}
function bR(b) {
 b = b | 0;
 var c = 0;
 c = a[m + (b & 255) | 0] | 0;
 if ((c | 0) < 8) return c | 0;
 c = a[m + (b >> 8 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 8 | 0;
 c = a[m + (b >> 16 & 255) | 0] | 0;
 if ((c | 0) < 8) return c + 16 | 0;
 return (a[m + (b >>> 24) | 0] | 0) + 24 | 0;
}
function bW(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 do {
  if ((a | 0) == 0) {
   b = 0;
  } else {
   d = c[a - 4 >> 2] | 0;
   e = d & 3;
   if ((e | 0) == 1) {
    b = 0;
    break;
   }
   b = (d & -8) - ((e | 0) == 0 ? 8 : 4) | 0;
  }
 } while (0);
 return b | 0;
}
function bQ(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = d >>> 2;
 if ((e | 0) == 0) {
  return;
 } else {
  f = 0;
 }
 do {
  cd(a + (f << 2) | 0, c[b + (f << 2) >> 2] | 0);
  f = f + 1 | 0;
 } while (f >>> 0 < e >>> 0);
 return;
}
function bM(b) {
 b = b | 0;
 a[k] = a[b];
 a[k + 1 | 0] = a[b + 1 | 0];
 a[k + 2 | 0] = a[b + 2 | 0];
 a[k + 3 | 0] = a[b + 3 | 0];
 a[k + 4 | 0] = a[b + 4 | 0];
 a[k + 5 | 0] = a[b + 5 | 0];
 a[k + 6 | 0] = a[b + 6 | 0];
 a[k + 7 | 0] = a[b + 7 | 0];
}
function bU(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 if ((d | 0) == 0) {
  return;
 } else {
  e = 0;
 }
 do {
  f = b + e | 0;
  a[f] = a[f] ^ a[c + e | 0];
  e = e + 1 | 0;
 } while (e >>> 0 < d >>> 0);
 return;
}
function bV(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 b = i;
 i = i + 8 | 0;
 d = b | 0;
 bQ(d, a + 32 | 0, 8);
 e = (c[a + 36 >> 2] | 0) >>> 3 & 63;
 br(a, 816, (e >>> 0 < 56 ? 56 : 120) - e | 0);
 br(a, d, 8);
 i = b;
 return;
}
function bX(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((d | 0) == 0) {
  return;
 } else {
  e = 0;
 }
 do {
  a[b + e | 0] = a[c + e | 0] | 0;
  e = e + 1 | 0;
 } while (e >>> 0 < d >>> 0);
 return;
}
function bP(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 8 | 0;
 g = f | 0;
 bd(a, b, d, e, g) | 0;
 i = f;
 return (H = c[g + 4 >> 2] | 0, c[g >> 2] | 0) | 0;
}
function bI(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 a = c;
 c = bN(e, a) | 0;
 f = H;
 return (H = (ad(b, a) | 0) + (ad(d, e) | 0) + f | f & 0, c | 0 | 0) | 0;
}
function b_(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 f = e | 0;
 g = f;
 c[g >> 2] = d;
 c[g + 4 >> 2] = 0;
 bA(a, b, f | 0);
 i = e;
 return;
}
function bZ(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 e = i;
 i = i + 16 | 0;
 f = e | 0;
 g = f;
 c[g >> 2] = d;
 c[g + 4 >> 2] = 0;
 bG(a, b, f | 0);
 i = e;
 return;
}
function b$(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b >> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 H = (b | 0) < 0 ? -1 : 0;
 return b >> c - 32 | 0;
}
function ce(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = b - d >>> 0;
 e = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (H = e, a - c >>> 0 | 0) | 0;
}
function b7(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 H = a << c - 32;
 return 0;
}
function bY(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0;
 c = i;
 i = i + 32 | 0;
 d = c | 0;
 ci(d, b | 0);
 e = b + 104 | 0;
 br(e, d, 32);
 ci(a, e);
 i = c;
 return;
}
function b4(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 4 >> 2] = 0;
 bz(a, e | 0);
 i = d;
 return;
}
function b2(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 d = i;
 i = i + 16 | 0;
 e = d | 0;
 f = e;
 c[f >> 2] = b;
 c[f + 4 >> 2] = 0;
 bF(a, e | 0);
 i = d;
 return;
}
function b9(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  H = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 H = 0;
 return b >>> c - 32 | 0;
}
function bT(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = i;
 i = i + 8 | 0;
 f = e | 0;
 c[f >> 2] = b;
 b = bi(a, f, 3, d) | 0;
 i = e;
 return b | 0;
}
function b6(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0;
 d = 0;
 do {
  c[a + (d << 2) >> 2] = ck(b + (d << 2) | 0) | 0;
  d = d + 1 | 0;
 } while (d >>> 0 < 16);
 return;
}
function b1(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 if (a >>> 0 < 9) {
  c = a8(b) | 0;
  return c | 0;
 } else {
  c = bm(a, b) | 0;
  return c | 0;
 }
 return 0;
}
function cg(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = a + c >>> 0;
 return (H = b + d + (e >>> 0 < a >>> 0 | 0) >>> 0, e | 0) | 0;
}
function cd(b, c) {
 b = b | 0;
 c = c | 0;
 a[b + 3 | 0] = c & 255;
 a[b + 2 | 0] = c >>> 8 & 255;
 a[b + 1 | 0] = c >>> 16 & 255;
 a[b] = c >>> 24 & 255;
 return;
}
function cc(b, c) {
 b = b | 0;
 c = c | 0;
 a[b] = c & 255;
 a[b + 1 | 0] = c >>> 8 & 255;
 a[b + 2 | 0] = c >>> 16 & 255;
 a[b + 3 | 0] = c >>> 24 & 255;
 return;
}
function b8(a) {
 a = a | 0;
 var b = 0, d = 0;
 if ((a | 0) == -1) {
  b = 0;
 } else {
  d = c[226] | 0;
  b = a - 1 + d & -d;
 }
 c[342] = b;
 return b | 0;
}
function cb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 e = bd(a, b, c, d, 0) | 0;
 return (H = H, e) | 0;
}
function ck(a) {
 a = a | 0;
 return (d[a + 2 | 0] | 0) << 8 | (d[a + 3 | 0] | 0) | (d[a + 1 | 0] | 0) << 16 | (d[a] | 0) << 24 | 0;
}
function cj(a) {
 a = a | 0;
 return (d[a + 1 | 0] | 0) << 8 | (d[a] | 0) | (d[a + 2 | 0] | 0) << 16 | (d[a + 3 | 0] | 0) << 24 | 0;
}
function ca(b) {
 b = b | 0;
 a[k] = a[b];
 a[k + 1 | 0] = a[b + 1 | 0];
 a[k + 2 | 0] = a[b + 2 | 0];
 a[k + 3 | 0] = a[b + 3 | 0];
}
function b3(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return ba(a, b, c, d, e, 1) | 0;
}
function b0(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return ba(a, b, c, d, e, 5) | 0;
}
function cl(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0;
 c = bB(a + ((b << 7) - 64) | 0) | 0;
 return (H = H, c) | 0;
}
function ct(b) {
 b = b | 0;
 var c = 0;
 c = b;
 while (a[c] | 0) {
  c = c + 1 | 0;
 }
 return c - b | 0;
}
function cm(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 a5[a & 15](b | 0, c | 0, d | 0);
}
function ci(a, b) {
 a = a | 0;
 b = b | 0;
 bV(b);
 bQ(a, b | 0, 32);
 bC(b | 0, 0, 104);
 return;
}
function cn(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 7 & -8;
 return b | 0;
}
function cs(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return a7[a & 1](b | 0, c | 0) | 0;
}
function ch(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return ba(a, b, c, 0, 0, 0) | 0;
}
function cf(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return bi(a, b, 0, c) | 0;
}
function cw(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 a3[a & 15](b | 0, c | 0);
}
function cr(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 br(a | 0, b, c);
 return;
}
function cp(a, b) {
 a = a | 0;
 b = b | 0;
 if ((u | 0) == 0) {
  u = a;
  v = b;
 }
}
function b5() {
 c[190] = q + 8;
 c[192] = p + 8;
 c[196] = p + 8;
 c[200] = p + 8;
}
function cq() {
 var a = 0;
 a = aJ(4) | 0;
 c[a >> 2] = 584;
 as(a | 0, 768, 8);
}
function cB() {
 var a = 0;
 a = c[342] | 0;
 return ((a | 0) == 0 ? -1 : a) | 0;
}
function cv(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+bg(a, b));
}
function cu(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return +(+bg(a, b));
}
function cG(a) {
 a = a | 0;
 if ((a | 0) == 0) {
  return;
 }
 bb(a);
 return;
}
function cy(a, b) {
 a = a | 0;
 b = b | 0;
 return a4[a & 7](b | 0) | 0;
}
function co(a) {
 a = a | 0;
 return (F = c[352] | 0, c[352] = a, F) | 0;
}
function cR(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 ae(3);
}
function cz(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+bg(a, b));
}
function cA(a, b) {
 a = a | 0;
 b = b | 0;
 return +(+bg(a, b));
}
function cx() {
 return (F = c[352] | 0, c[352] = F + 0, F) | 0;
}
function cC(a, b) {
 a = a | 0;
 b = b | 0;
 a2[a & 15](b | 0);
}
function cT(a, b) {
 a = a | 0;
 b = b | 0;
 ae(5);
 return 0;
}
function cF(a, b) {
 a = a | 0;
 b = b | 0;
 return cU(a) | 0;
}
function cE(a, b) {
 a = a | 0;
 b = b | 0;
 return bH(a) | 0;
}
function cJ(a, b) {
 a = a | 0;
 b = b | 0;
 c4(a);
 return;
}
function cI(a, b) {
 a = a | 0;
 b = b | 0;
 cG(a);
 return;
}
function cL(a) {
 a = a | 0;
 c[a >> 2] = 584;
 return;
}
function cH(a) {
 a = a | 0;
 c[a >> 2] = 648;
 return;
}
function cD(a) {
 a = a | 0;
 c[a >> 2] = 616;
 return;
}
function c7(a, b) {
 a = a | 0;
 b = b | 0;
 ae(1);
}
function cV(a) {
 a = a | 0;
 return +(+bg(a, 0));
}
function da(a) {
 a = a | 0;
 ae(2);
 return 0;
}
function cU(a) {
 a = a | 0;
 return bH(a) | 0;
}
function cO(a) {
 a = a | 0;
 cG(a);
 return;
}
function cM(a) {
 a = a | 0;
 cG(a);
 return;
}
function cK(a) {
 a = a | 0;
 cG(a);
 return;
}
function c4(a) {
 a = a | 0;
 cG(a);
 return;
}
function cQ(a) {
 a = a | 0;
 a6[a & 1]();
}
function cS(a) {
 a = a | 0;
 return 352;
}
function cP(a) {
 a = a | 0;
 return 464;
}
function cN(a) {
 a = a | 0;
 return 368;
}
function c5(a) {
 a = a | 0;
 return;
}
function dc(a) {
 a = a | 0;
 ae(0);
}
function c_(a) {
 a = a | 0;
 M = a;
}
function cZ(a) {
 a = a | 0;
 N = a;
}
function cY(a) {
 a = a | 0;
 O = a;
}
function cX(a) {
 a = a | 0;
 P = a;
}
function cW(a) {
 a = a | 0;
 Q = a;
}
function c6(a) {
 a = a | 0;
 i = a;
}
function c3(a) {
 a = a | 0;
 H = a;
}
function c2(a) {
 a = a | 0;
 I = a;
}
function c1(a) {
 a = a | 0;
 J = a;
}
function c0(a) {
 a = a | 0;
 K = a;
}
function c$(a) {
 a = a | 0;
 L = a;
}
function c9() {
 return c[340] | 0;
}
function c8() {
 return c[341] | 0;
}
function db() {
 return i | 0;
}
function dd() {
 ae(4);
}
// EMSCRIPTEN_END_FUNCS
 var a2 = [ dc, dc, cD, dc, cH, dc, cK, dc, c5, dc, cL, dc, cO, dc, cM, dc ];
 var a3 = [ c7, c7, b4, c7, bz, c7, b2, c7, bF, c7, c7, c7, c7, c7, c7, c7 ];
 var a4 = [ da, da, cS, da, cN, da, cP, da ];
 var a5 = [ cR, cR, bG, cR, bA, cR, b_, cR, bZ, cR, cR, cR, cR, cR, cR, cR ];
 var a6 = [ dd, dd ];
 var a7 = [ cT, cT ];
 return {
  _crypto_scrypt: bn,
  _strlen: ct,
  _free: bb,
  _realloc: bw,
  _memset: bC,
  _malloc: a8,
  _memcpy: bE,
  _calloc: bD,
  runPostSets: b5,
  stackAlloc: cn,
  stackSave: db,
  stackRestore: c6,
  setThrew: cp,
  setTempRet0: c3,
  setTempRet1: c2,
  setTempRet2: c1,
  setTempRet3: c0,
  setTempRet4: c$,
  setTempRet5: c_,
  setTempRet6: cZ,
  setTempRet7: cY,
  setTempRet8: cX,
  setTempRet9: cW,
  dynCall_vi: cC,
  dynCall_vii: cw,
  dynCall_ii: cy,
  dynCall_viii: cm,
  dynCall_v: cQ,
  dynCall_iii: cs
 };
// EMSCRIPTEN_END_ASM
})({Math:Math, Int8Array:Int8Array, Int16Array:Int16Array, Int32Array:Int32Array, Uint8Array:Uint8Array, Uint16Array:Uint16Array, Uint32Array:Uint32Array, Float32Array:Float32Array, Float64Array:Float64Array}, {abort:va, assert:w, asmPrintInt:function(a, b) {
  t.print("int " + a + "," + b)
}, asmPrintFloat:function(a, b) {
  t.print("float " + a + "," + b)
}, min:Ia, invoke_vi:function(a, b) {
  try {
    t.dynCall_vi(a, b)
  }catch(c) {
    "number" !== typeof c && "longjmp" !== c && g(c), V.setThrew(1, 0)
  }
}, invoke_vii:function(a, b, c) {
  try {
    t.dynCall_vii(a, b, c)
  }catch(d) {
    "number" !== typeof d && "longjmp" !== d && g(d), V.setThrew(1, 0)
  }
}, invoke_ii:function(a, b) {
  try {
    return t.dynCall_ii(a, b)
  }catch(c) {
    "number" !== typeof c && "longjmp" !== c && g(c), V.setThrew(1, 0)
  }
}, invoke_viii:function(a, b, c, d) {
  try {
    t.dynCall_viii(a, b, c, d)
  }catch(e) {
    "number" !== typeof e && "longjmp" !== e && g(e), V.setThrew(1, 0)
  }
}, invoke_v:function(a) {
  try {
    t.dynCall_v(a)
  }catch(b) {
    "number" !== typeof b && "longjmp" !== b && g(b), V.setThrew(1, 0)
  }
}, invoke_iii:function(a, b, c) {
  try {
    return t.dynCall_iii(a, b, c)
  }catch(d) {
    "number" !== typeof d && "longjmp" !== d && g(d), V.setThrew(1, 0)
  }
}, _strncmp:function(a, b, c) {
  for(var d = 0;d < c;) {
    var e = J[a + d | 0], f = J[b + d | 0];
    if(e == f && 0 == e) {
      break
    }
    if(0 == e) {
      return-1
    }
    if(0 == f) {
      return 1
    }
    if(e == f) {
      d++
    }else {
      return e > f ? 1 : -1
    }
  }
  return 0
}, _llvm_va_end:q(), _sysconf:function(a) {
  switch(a) {
    case 30:
      return 4096;
    case 132:
    ;
    case 133:
    ;
    case 12:
    ;
    case 137:
    ;
    case 138:
    ;
    case 15:
    ;
    case 235:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
    ;
    case 19:
    ;
    case 20:
    ;
    case 149:
    ;
    case 13:
    ;
    case 10:
    ;
    case 236:
    ;
    case 153:
    ;
    case 9:
    ;
    case 21:
    ;
    case 22:
    ;
    case 159:
    ;
    case 154:
    ;
    case 14:
    ;
    case 77:
    ;
    case 78:
    ;
    case 139:
    ;
    case 80:
    ;
    case 81:
    ;
    case 79:
    ;
    case 82:
    ;
    case 68:
    ;
    case 67:
    ;
    case 164:
    ;
    case 11:
    ;
    case 29:
    ;
    case 47:
    ;
    case 48:
    ;
    case 95:
    ;
    case 52:
    ;
    case 51:
    ;
    case 46:
      return 200809;
    case 27:
    ;
    case 246:
    ;
    case 127:
    ;
    case 128:
    ;
    case 23:
    ;
    case 24:
    ;
    case 160:
    ;
    case 161:
    ;
    case 181:
    ;
    case 182:
    ;
    case 242:
    ;
    case 183:
    ;
    case 184:
    ;
    case 243:
    ;
    case 244:
    ;
    case 245:
    ;
    case 165:
    ;
    case 178:
    ;
    case 179:
    ;
    case 49:
    ;
    case 50:
    ;
    case 168:
    ;
    case 169:
    ;
    case 175:
    ;
    case 170:
    ;
    case 171:
    ;
    case 172:
    ;
    case 97:
    ;
    case 76:
    ;
    case 32:
    ;
    case 173:
    ;
    case 35:
      return-1;
    case 176:
    ;
    case 177:
    ;
    case 7:
    ;
    case 155:
    ;
    case 8:
    ;
    case 157:
    ;
    case 125:
    ;
    case 126:
    ;
    case 92:
    ;
    case 93:
    ;
    case 129:
    ;
    case 130:
    ;
    case 131:
    ;
    case 94:
    ;
    case 91:
      return 1;
    case 74:
    ;
    case 60:
    ;
    case 69:
    ;
    case 70:
    ;
    case 4:
      return 1024;
    case 31:
    ;
    case 42:
    ;
    case 72:
      return 32;
    case 87:
    ;
    case 26:
    ;
    case 33:
      return 2147483647;
    case 34:
    ;
    case 1:
      return 47839;
    case 38:
    ;
    case 36:
      return 99;
    case 43:
    ;
    case 37:
      return 2048;
    case 0:
      return 2097152;
    case 3:
      return 65536;
    case 28:
      return 32768;
    case 44:
      return 32767;
    case 75:
      return 16384;
    case 39:
      return 1E3;
    case 89:
      return 700;
    case 71:
      return 256;
    case 40:
      return 255;
    case 2:
      return 100;
    case 180:
      return 64;
    case 25:
      return 20;
    case 5:
      return 16;
    case 6:
      return 6;
    case 73:
      return 4;
    case 84:
      return 1
  }
  L(M.H);
  return-1
}, ___cxa_throw:Bc, _strerror:Jc, _abort:function() {
  t.abort()
}, _fprintf:wc, _llvm_eh_exception:U, ___cxa_free_exception:Cc, _fflush:q(), ___buildEnvironment:Gc, __reallyNegative:tc, _strchr:function(a, b) {
  a--;
  do {
    a++;
    var c = D[a];
    if(c == b) {
      return a
    }
  }while(c);
  return 0
}, _fputc:Lc, ___setErrNo:L, _fwrite:rc, _send:function(a, b, c) {
  return!S.wc(a) ? (L(M.Aa), -1) : qc(a, b, c)
}, _write:qc, _exit:function(a) {
  Kc(a)
}, ___cxa_find_matching_catch:function(a, b) {
  -1 == a && (a = E[U.I >> 2]);
  -1 == b && (b = E[U.I + 4 >> 2]);
  var c = Array.prototype.slice.call(arguments, 2);
  0 != b && !zc(b) && 0 == E[E[b >> 2] - 8 >> 2] && (a = E[a >> 2]);
  for(var d = 0;d < c.length;d++) {
    if(Ac(c[d], b, a)) {
      return(V.setTempRet0(c[d]), a) | 0
    }
  }
  return(V.setTempRet0(b), a) | 0
}, ___cxa_allocate_exception:function(a) {
  return Qa(a)
}, _isspace:function(a) {
  return 32 == a || 9 <= a && 13 >= a
}, __formatString:uc, ___resumeException:function(a) {
  0 == E[U.I >> 2] && (E[U.I >> 2] = a);
  g(a + " - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.")
}, _llvm_uadd_with_overflow_i32:function(a, b) {
  a >>>= 0;
  b >>>= 0;
  return(V.setTempRet0(4294967295 < a + b), a + b >>> 0) | 0
}, ___cxa_does_inherit:Ac, _getenv:Hc, _vfprintf:function(a, b, c) {
  return wc(a, b, E[c >> 2])
}, ___cxa_begin_catch:function(a) {
  yc.mb--;
  return a
}, __ZSt18uncaught_exceptionv:yc, _pwrite:function(a, b, c, d) {
  a = R[a];
  if(!a) {
    return L(M.Aa), -1
  }
  try {
    return jc(a, D, b, c, d)
  }catch(e) {
    return Pb(e), -1
  }
}, ___cxa_call_unexpected:function(a) {
  t.ka("Unexpected exception thrown, this is not properly supported - aborting");
  ya = l;
  g(a)
}, _sbrk:xc, _strerror_r:Ic, ___errno_location:function() {
  return sb
}, ___gxx_personality_v0:q(), ___cxa_is_number_type:zc, _time:function(a) {
  var b = Math.floor(Date.now() / 1E3);
  a && (E[a >> 2] = b);
  return b
}, __exit:Kc, ___cxa_end_catch:Ec, STACKTOP:u, STACK_MAX:Xa, tempDoublePtr:rb, ABORT:ya, cttz_i8:cd, ctlz_i8:bd, NaN:NaN, Infinity:Infinity, _stderr:qb, __ZTVN10__cxxabiv120__si_class_type_infoE:k, __ZTVN10__cxxabiv117__class_type_infoE:k, ___progname:k}, K);
t._crypto_scrypt = V._crypto_scrypt;
var sc = t._strlen = V._strlen, Dc = t._free = V._free;
t._realloc = V._realloc;
var ub = t._memset = V._memset, Qa = t._malloc = V._malloc, tb = t._memcpy = V._memcpy;
t._calloc = V._calloc;
var pb = t.runPostSets = V.runPostSets;
t.dynCall_vi = V.dynCall_vi;
t.dynCall_vii = V.dynCall_vii;
t.dynCall_ii = V.dynCall_ii;
t.dynCall_viii = V.dynCall_viii;
t.dynCall_v = V.dynCall_v;
t.dynCall_iii = V.dynCall_iii;
var qa = function(a) {
  return V.stackAlloc(a)
}, ja = function() {
  return V.stackSave()
}, ka = function(a) {
  V.stackRestore(a)
}, vc;
function X(a, b) {
  a != m && ("number" == typeof a ? this.M(a) : b == m && "string" != typeof a ? this.F(a, 256) : this.F(a, b))
}
function dd() {
  return new X(m)
}
function ed(a, b) {
  var c = fd[a.charCodeAt(b)];
  return c == m ? -1 : c
}
function gd(a) {
  var b = dd();
  b.aa(a);
  return b
}
function Y(a, b) {
  this.A = a | 0;
  this.C = b | 0
}
Y.ub = {};
Y.aa = function(a) {
  if(-128 <= a && 128 > a) {
    var b = Y.ub[a];
    if(b) {
      return b
    }
  }
  b = new Y(a | 0, 0 > a ? -1 : 0);
  -128 <= a && 128 > a && (Y.ub[a] = b);
  return b
};
Y.M = function(a) {
  return isNaN(a) || !isFinite(a) ? Y.ZERO : a <= -Y.wb ? Y.MIN_VALUE : a + 1 >= Y.wb ? Y.MAX_VALUE : 0 > a ? Y.M(-a).B() : new Y(a % Y.Y | 0, a / Y.Y | 0)
};
Y.W = function(a, b) {
  return new Y(a, b)
};
Y.F = function(a, b) {
  0 == a.length && g(Error("number format error: empty string"));
  var c = b || 10;
  (2 > c || 36 < c) && g(Error("radix out of range: " + c));
  if("-" == a.charAt(0)) {
    return Y.F(a.substring(1), c).B()
  }
  0 <= a.indexOf("-") && g(Error('number format error: interior "-" character: ' + a));
  for(var d = Y.M(Math.pow(c, 8)), e = Y.ZERO, f = 0;f < a.length;f += 8) {
    var h = Math.min(8, a.length - f), i = parseInt(a.substring(f, f + h), c);
    8 > h ? (h = Y.M(Math.pow(c, h)), e = e.multiply(h).add(Y.M(i))) : (e = e.multiply(d), e = e.add(Y.M(i)))
  }
  return e
};
Y.Va = 65536;
Y.Pe = 16777216;
Y.Y = Y.Va * Y.Va;
Y.Qe = Y.Y / 2;
Y.Re = Y.Y * Y.Va;
Y.lc = Y.Y * Y.Y;
Y.wb = Y.lc / 2;
Y.ZERO = Y.aa(0);
Y.ONE = Y.aa(1);
Y.vb = Y.aa(-1);
Y.MAX_VALUE = Y.W(-1, 2147483647);
Y.MIN_VALUE = Y.W(0, -2147483648);
Y.kc = Y.aa(16777216);
s = Y.prototype;
s.Pa = function() {
  return this.C * Y.Y + this.vc()
};
s.toString = function(a) {
  a = a || 10;
  (2 > a || 36 < a) && g(Error("radix out of range: " + a));
  if(this.ga()) {
    return"0"
  }
  if(this.J()) {
    if(this.L(Y.MIN_VALUE)) {
      var b = Y.M(a), c = this.ea(b), b = c.multiply(b).ya(this);
      return c.toString(a) + b.A.toString(a)
    }
    return"-" + this.B().toString(a)
  }
  for(var c = Y.M(Math.pow(a, 6)), b = this, d = "";;) {
    var e = b.ea(c), f = b.ya(e.multiply(c)).A.toString(a), b = e;
    if(b.ga()) {
      return f + d
    }
    for(;6 > f.length;) {
      f = "0" + f
    }
    d = "" + f + d
  }
};
s.vc = function() {
  return 0 <= this.A ? this.A : Y.Y + this.A
};
s.ga = function() {
  return 0 == this.C && 0 == this.A
};
s.J = function() {
  return 0 > this.C
};
s.Ob = function() {
  return 1 == (this.A & 1)
};
s.L = function(a) {
  return this.C == a.C && this.A == a.A
};
s.Qb = function() {
  return 0 > this.$a(Y.kc)
};
s.yc = function(a) {
  return 0 < this.$a(a)
};
s.zc = function(a) {
  return 0 <= this.$a(a)
};
s.$a = function(a) {
  if(this.L(a)) {
    return 0
  }
  var b = this.J(), c = a.J();
  return b && !c ? -1 : !b && c ? 1 : this.ya(a).J() ? -1 : 1
};
s.B = function() {
  return this.L(Y.MIN_VALUE) ? Y.MIN_VALUE : this.Jc().add(Y.ONE)
};
s.add = function(a) {
  var b = this.C >>> 16, c = this.C & 65535, d = this.A >>> 16, e = a.C >>> 16, f = a.C & 65535, h = a.A >>> 16, i;
  i = 0 + ((this.A & 65535) + (a.A & 65535));
  a = 0 + (i >>> 16);
  a += d + h;
  d = 0 + (a >>> 16);
  d += c + f;
  c = 0 + (d >>> 16);
  c = c + (b + e) & 65535;
  return Y.W((a & 65535) << 16 | i & 65535, c << 16 | d & 65535)
};
s.ya = function(a) {
  return this.add(a.B())
};
s.multiply = function(a) {
  if(this.ga() || a.ga()) {
    return Y.ZERO
  }
  if(this.L(Y.MIN_VALUE)) {
    return a.Ob() ? Y.MIN_VALUE : Y.ZERO
  }
  if(a.L(Y.MIN_VALUE)) {
    return this.Ob() ? Y.MIN_VALUE : Y.ZERO
  }
  if(this.J()) {
    return a.J() ? this.B().multiply(a.B()) : this.B().multiply(a).B()
  }
  if(a.J()) {
    return this.multiply(a.B()).B()
  }
  if(this.Qb() && a.Qb()) {
    return Y.M(this.Pa() * a.Pa())
  }
  var b = this.C >>> 16, c = this.C & 65535, d = this.A >>> 16, e = this.A & 65535, f = a.C >>> 16, h = a.C & 65535, i = a.A >>> 16, a = a.A & 65535, j, n, z, x;
  x = 0 + e * a;
  z = 0 + (x >>> 16);
  z += d * a;
  n = 0 + (z >>> 16);
  z = (z & 65535) + e * i;
  n += z >>> 16;
  z &= 65535;
  n += c * a;
  j = 0 + (n >>> 16);
  n = (n & 65535) + d * i;
  j += n >>> 16;
  n &= 65535;
  n += e * h;
  j += n >>> 16;
  n &= 65535;
  j = j + (b * a + c * i + d * h + e * f) & 65535;
  return Y.W(z << 16 | x & 65535, j << 16 | n)
};
s.ea = function(a) {
  a.ga() && g(Error("division by zero"));
  if(this.ga()) {
    return Y.ZERO
  }
  if(this.L(Y.MIN_VALUE)) {
    if(a.L(Y.ONE) || a.L(Y.vb)) {
      return Y.MIN_VALUE
    }
    if(a.L(Y.MIN_VALUE)) {
      return Y.ONE
    }
    var b = this.Rc().ea(a).shiftLeft(1);
    if(b.L(Y.ZERO)) {
      return a.J() ? Y.ONE : Y.vb
    }
    var c = this.ya(a.multiply(b));
    return b.add(c.ea(a))
  }
  if(a.L(Y.MIN_VALUE)) {
    return Y.ZERO
  }
  if(this.J()) {
    return a.J() ? this.B().ea(a.B()) : this.B().ea(a).B()
  }
  if(a.J()) {
    return this.ea(a.B()).B()
  }
  for(var d = Y.ZERO, c = this;c.zc(a);) {
    for(var b = Math.max(1, Math.floor(c.Pa() / a.Pa())), e = Math.ceil(Math.log(b) / Math.LN2), e = 48 >= e ? 1 : Math.pow(2, e - 48), f = Y.M(b), h = f.multiply(a);h.J() || h.yc(c);) {
      b -= e, f = Y.M(b), h = f.multiply(a)
    }
    f.ga() && (f = Y.ONE);
    d = d.add(f);
    c = c.ya(h)
  }
  return d
};
s.Jc = function() {
  return Y.W(~this.A, ~this.C)
};
s.shiftLeft = function(a) {
  a &= 63;
  if(0 == a) {
    return this
  }
  var b = this.A;
  return 32 > a ? Y.W(b << a, this.C << a | b >>> 32 - a) : Y.W(0, b << a - 32)
};
s.Rc = function() {
  var a;
  a = 1;
  if(0 == a) {
    return this
  }
  var b = this.C;
  return 32 > a ? Y.W(this.A >>> a | b << 32 - a, b >> a) : Y.W(b >> a - 32, 0 <= b ? 0 : -1)
};
s = X.prototype;
s.Xa = function(a, b, c, d) {
  for(var e = 0, f = 0;0 <= --d;) {
    var h = a * this[e++] + b[c] + f, f = Math.floor(h / 67108864);
    b[c++] = h & 67108863
  }
  return f
};
s.q = 26;
s.S = 67108863;
s.qa = 67108864;
s.jc = Math.pow(2, 52);
s.sb = 26;
s.tb = 0;
var fd = [], hd, Z;
hd = 48;
for(Z = 0;9 >= Z;++Z) {
  fd[hd++] = Z
}
hd = 97;
for(Z = 10;36 > Z;++Z) {
  fd[hd++] = Z
}
hd = 65;
for(Z = 10;36 > Z;++Z) {
  fd[hd++] = Z
}
s = X.prototype;
s.copyTo = function(a) {
  for(var b = this.e - 1;0 <= b;--b) {
    a[b] = this[b]
  }
  a.e = this.e;
  a.k = this.k
};
s.aa = function(a) {
  this.e = 1;
  this.k = 0 > a ? -1 : 0;
  0 < a ? this[0] = a : -1 > a ? this[0] = a + DV : this.e = 0
};
s.F = function(a, b) {
  var c;
  if(16 == b) {
    c = 4
  }else {
    if(8 == b) {
      c = 3
    }else {
      if(256 == b) {
        c = 8
      }else {
        if(2 == b) {
          c = 1
        }else {
          if(32 == b) {
            c = 5
          }else {
            if(4 == b) {
              c = 2
            }else {
              this.uc(a, b);
              return
            }
          }
        }
      }
    }
  }
  this.k = this.e = 0;
  for(var d = a.length, e = p, f = 0;0 <= --d;) {
    var h = 8 == c ? a[d] & 255 : ed(a, d);
    0 > h ? "-" == a.charAt(d) && (e = l) : (e = p, 0 == f ? this[this.e++] = h : f + c > this.q ? (this[this.e - 1] |= (h & (1 << this.q - f) - 1) << f, this[this.e++] = h >> this.q - f) : this[this.e - 1] |= h << f, f += c, f >= this.q && (f -= this.q))
  }
  8 == c && 0 != (a[0] & 128) && (this.k = -1, 0 < f && (this[this.e - 1] |= (1 << this.q - f) - 1 << f));
  this.Z();
  e && X.ZERO.R(this, this)
};
s.Z = function() {
  for(var a = this.k & this.S;0 < this.e && this[this.e - 1] == a;) {
    --this.e
  }
};
s.ab = function(a, b) {
  var c;
  for(c = this.e - 1;0 <= c;--c) {
    b[c + a] = this[c]
  }
  for(c = a - 1;0 <= c;--c) {
    b[c] = 0
  }
  b.e = this.e + a;
  b.k = this.k
};
s.rc = function(a, b) {
  for(var c = a;c < this.e;++c) {
    b[c - a] = this[c]
  }
  b.e = Math.max(this.e - a, 0);
  b.k = this.k
};
s.Pb = function(a, b) {
  var c = a % this.q, d = this.q - c, e = (1 << d) - 1, f = Math.floor(a / this.q), h = this.k << c & this.S, i;
  for(i = this.e - 1;0 <= i;--i) {
    b[i + f + 1] = this[i] >> d | h, h = (this[i] & e) << c
  }
  for(i = f - 1;0 <= i;--i) {
    b[i] = 0
  }
  b[f] = h;
  b.e = this.e + f + 1;
  b.k = this.k;
  b.Z()
};
s.Lc = function(a, b) {
  b.k = this.k;
  var c = Math.floor(a / this.q);
  if(c >= this.e) {
    b.e = 0
  }else {
    var d = a % this.q, e = this.q - d, f = (1 << d) - 1;
    b[0] = this[c] >> d;
    for(var h = c + 1;h < this.e;++h) {
      b[h - c - 1] |= (this[h] & f) << e, b[h - c] = this[h] >> d
    }
    0 < d && (b[this.e - c - 1] |= (this.k & f) << e);
    b.e = this.e - c;
    b.Z()
  }
};
s.R = function(a, b) {
  for(var c = 0, d = 0, e = Math.min(a.e, this.e);c < e;) {
    d += this[c] - a[c], b[c++] = d & this.S, d >>= this.q
  }
  if(a.e < this.e) {
    for(d -= a.k;c < this.e;) {
      d += this[c], b[c++] = d & this.S, d >>= this.q
    }
    d += this.k
  }else {
    for(d += this.k;c < a.e;) {
      d -= a[c], b[c++] = d & this.S, d >>= this.q
    }
    d -= a.k
  }
  b.k = 0 > d ? -1 : 0;
  -1 > d ? b[c++] = this.qa + d : 0 < d && (b[c++] = d);
  b.e = c;
  b.Z()
};
s.Hc = function(a) {
  var b = $.Yb, c = this.abs(), d = b.abs(), e = c.e;
  for(a.e = e + d.e;0 <= --e;) {
    a[e] = 0
  }
  for(e = 0;e < d.e;++e) {
    a[e + c.e] = c.Xa(d[e], a, e, c.e)
  }
  a.k = 0;
  a.Z();
  this.k != b.k && X.ZERO.R(a, a)
};
s.Gb = function(a, b, c) {
  var d = a.abs();
  if(!(0 >= d.e)) {
    var e = this.abs();
    if(e.e < d.e) {
      b != m && b.aa(0), c != m && this.copyTo(c)
    }else {
      c == m && (c = dd());
      var f = dd(), h = this.k, a = a.k, i = d[d.e - 1], j = 1, n;
      if(0 != (n = i >>> 16)) {
        i = n, j += 16
      }
      if(0 != (n = i >> 8)) {
        i = n, j += 8
      }
      if(0 != (n = i >> 4)) {
        i = n, j += 4
      }
      if(0 != (n = i >> 2)) {
        i = n, j += 2
      }
      0 != i >> 1 && (j += 1);
      i = this.q - j;
      0 < i ? (d.Pb(i, f), e.Pb(i, c)) : (d.copyTo(f), e.copyTo(c));
      d = f.e;
      e = f[d - 1];
      if(0 != e) {
        n = e * (1 << this.sb) + (1 < d ? f[d - 2] >> this.tb : 0);
        j = this.jc / n;
        n = (1 << this.sb) / n;
        var z = 1 << this.tb, x = c.e, v = x - d, A = b == m ? dd() : b;
        f.ab(v, A);
        0 <= c.Fa(A) && (c[c.e++] = 1, c.R(A, c));
        X.ONE.ab(d, A);
        for(A.R(f, f);f.e < d;) {
          f[f.e++] = 0
        }
        for(;0 <= --v;) {
          var G = c[--x] == e ? this.S : Math.floor(c[x] * j + (c[x - 1] + z) * n);
          if((c[x] += f.Xa(G, c, v, d)) < G) {
            f.ab(v, A);
            for(c.R(A, c);c[x] < --G;) {
              c.R(A, c)
            }
          }
        }
        b != m && (c.rc(d, b), h != a && X.ZERO.R(b, b));
        c.e = d;
        c.Z();
        0 < i && c.Lc(i, c);
        0 > h && X.ZERO.R(c, c)
      }
    }
  }
};
s.toString = function(a) {
  if(0 > this.k) {
    return"-" + this.B().toString(a)
  }
  if(16 == a) {
    a = 4
  }else {
    if(8 == a) {
      a = 3
    }else {
      if(2 == a) {
        a = 1
      }else {
        if(32 == a) {
          a = 5
        }else {
          if(4 == a) {
            a = 2
          }else {
            return this.Sc(a)
          }
        }
      }
    }
  }
  var b = (1 << a) - 1, c, d = p, e = "", f = this.e, h = this.q - f * this.q % a;
  if(0 < f--) {
    if(h < this.q && 0 < (c = this[f] >> h)) {
      d = l, e = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c)
    }
    for(;0 <= f;) {
      h < a ? (c = (this[f] & (1 << h) - 1) << a - h, c |= this[--f] >> (h += this.q - a)) : (c = this[f] >> (h -= a) & b, 0 >= h && (h += this.q, --f)), 0 < c && (d = l), d && (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c))
    }
  }
  return d ? e : "0"
};
s.B = function() {
  var a = dd();
  X.ZERO.R(this, a);
  return a
};
s.abs = function() {
  return 0 > this.k ? this.B() : this
};
s.Fa = function(a) {
  var b = this.k - a.k;
  if(0 != b) {
    return b
  }
  var c = this.e, b = c - a.e;
  if(0 != b) {
    return 0 > this.k ? -b : b
  }
  for(;0 <= --c;) {
    if(0 != (b = this[c] - a[c])) {
      return b
    }
  }
  return 0
};
X.ZERO = gd(0);
X.ONE = gd(1);
s = X.prototype;
s.uc = function(a, b) {
  this.aa(0);
  b == m && (b = 10);
  for(var c = this.Da(b), d = Math.pow(b, c), e = p, f = 0, h = 0, i = 0;i < a.length;++i) {
    var j = ed(a, i);
    0 > j ? "-" == a.charAt(i) && 0 == this.kb() && (e = l) : (h = b * h + j, ++f >= c && (this.Fb(d), this.Eb(h), h = f = 0))
  }
  0 < f && (this.Fb(Math.pow(b, f)), this.Eb(h));
  e && X.ZERO.R(this, this)
};
s.Da = function(a) {
  return Math.floor(Math.LN2 * this.q / Math.log(a))
};
s.kb = function() {
  return 0 > this.k ? -1 : 0 >= this.e || 1 == this.e && 0 >= this[0] ? 0 : 1
};
s.Fb = function(a) {
  this[this.e] = this.Xa(a - 1, this, 0, this.e);
  ++this.e;
  this.Z()
};
s.Eb = function(a) {
  var b = 0;
  if(0 != a) {
    for(;this.e <= b;) {
      this[this.e++] = 0
    }
    for(this[b] += a;this[b] >= this.qa;) {
      this[b] -= this.qa, ++b >= this.e && (this[this.e++] = 0), ++this[b]
    }
  }
};
s.Sc = function(a) {
  a == m && (a = 10);
  if(0 == this.kb() || 2 > a || 36 < a) {
    return"0"
  }
  var b = this.Da(a), b = Math.pow(a, b), c = gd(b), d = dd(), e = dd(), f = "";
  for(this.Gb(c, d, e);0 < d.kb();) {
    f = (b + e.Mb()).toString(a).substr(1) + f, d.Gb(c, d, e)
  }
  return e.Mb().toString(a) + f
};
s.Mb = function() {
  if(0 > this.k) {
    if(1 == this.e) {
      return this[0] - this.qa
    }
    if(0 == this.e) {
      return-1
    }
  }else {
    if(1 == this.e) {
      return this[0]
    }
    if(0 == this.e) {
      return 0
    }
  }
  return(this[1] & (1 << 32 - this.q) - 1) << this.q | this[0]
};
s.Wa = function(a, b) {
  for(var c = 0, d = 0, e = Math.min(a.e, this.e);c < e;) {
    d += this[c] + a[c], b[c++] = d & this.S, d >>= this.q
  }
  if(a.e < this.e) {
    for(d += a.k;c < this.e;) {
      d += this[c], b[c++] = d & this.S, d >>= this.q
    }
    d += this.k
  }else {
    for(d += this.k;c < a.e;) {
      d += a[c], b[c++] = d & this.S, d >>= this.q
    }
    d += a.k
  }
  b.k = 0 > d ? -1 : 0;
  0 < d ? b[c++] = d : -1 > d && (b[c++] = this.qa + d);
  b.e = c;
  b.Z()
};
var $ = {abs:function(a, b) {
  var c = new Y(a, b), c = c.J() ? c.B() : c;
  E[rb >> 2] = c.A;
  E[rb + 4 >> 2] = c.C
}, Hb:function() {
  $.sc || ($.sc = l, $.Yb = new X, $.Yb.F("4294967296", 10), $.lb = new X, $.lb.F("18446744073709551616", 10), $.xf = new X, $.yf = new X)
}, of:function(a, b) {
  var c = new X;
  c.F(b.toString(), 10);
  var d = new X;
  c.Hc(d);
  c = new X;
  c.F(a.toString(), 10);
  var e = new X;
  c.Wa(d, e);
  return e
}, stringify:function(a, b, c) {
  a = (new Y(a, b)).toString();
  c && "-" == a[0] && ($.Hb(), c = new X, c.F(a, 10), a = new X, $.lb.Wa(c, a), a = a.toString(10));
  return a
}, F:function(a, b, c, d, e) {
  $.Hb();
  var f = new X;
  f.F(a, b);
  a = new X;
  a.F(c, 10);
  c = new X;
  c.F(d, 10);
  e && 0 > f.Fa(X.ZERO) && (d = new X, f.Wa($.lb, d), f = d);
  d = p;
  0 > f.Fa(a) ? (f = a, d = l) : 0 < f.Fa(c) && (f = c, d = l);
  f = Y.F(f.toString());
  E[rb >> 2] = f.A;
  E[rb + 4 >> 2] = f.C;
  d && g("range error")
}};
vc = $;
function id(a) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + a + ")";
  this.status = a
}
id.prototype = Error();
var jd, kd = m, mb = function ld() {
  !t.calledRun && md && nd();
  t.calledRun || (mb = ld)
};
t.callMain = t.af = function(a) {
  function b() {
    for(var a = 0;3 > a;a++) {
      d.push(0)
    }
  }
  w(0 == kb, "cannot call main when async dependencies remain! (listen on __ATMAIN__)");
  w(0 == $a.length, "cannot call main when preRun functions remain to be called");
  a = a || [];
  da && kd !== m && t.ka("preload time: " + (Date.now() - kd) + " ms");
  eb || (eb = l, Za(ab));
  var c = a.length + 1, d = [I(B("/bin/this.program"), "i8", Na)];
  b();
  for(var e = 0;e < c - 1;e += 1) {
    d.push(I(B(a[e]), "i8", Na)), b()
  }
  d.push(0);
  d = I(d, "i32", Na);
  jd = u;
  try {
    var f = t._main(c, d, 0);
    t.noExitRuntime || od(f)
  }catch(h) {
    h instanceof id || ("SimulateInfiniteLoop" == h ? t.noExitRuntime = l : (h && ("object" === typeof h && h.stack) && t.ka("exception thrown: " + [h, h.stack]), g(h)))
  }finally {
  }
};
function nd(a) {
  function b() {
    eb || (eb = l, Za(ab));
    Za(bb);
    t.calledRun = l;
    t._main && md && t.callMain(a);
    if(t.postRun) {
      for("function" == typeof t.postRun && (t.postRun = [t.postRun]);t.postRun.length;) {
        gb(t.postRun.shift())
      }
    }
    Za(db)
  }
  a = a || t.arguments;
  kd === m && (kd = Date.now());
  if(0 < kb) {
    t.ka("run() called, but dependencies remain, so not running")
  }else {
    if(t.preRun) {
      for("function" == typeof t.preRun && (t.preRun = [t.preRun]);t.preRun.length;) {
        fb(t.preRun.shift())
      }
    }
    Za($a);
    0 < kb || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        t.setStatus("")
      }, 1);
      ya || b()
    }, 1)) : b())
  }
}
t.run = t.wf = nd;
function od(a) {
  ya = l;
  u = jd;
  Za(cb);
  g(new id(a))
}
t.exit = t.ef = od;
function va(a) {
  a && (t.print(a), t.ka(a));
  ya = l;
  g("abort() at " + Sa())
}
t.abort = t.abort = va;
if(t.preInit) {
  for("function" == typeof t.preInit && (t.preInit = [t.preInit]);0 < t.preInit.length;) {
    t.preInit.pop()()
  }
}
var md = l;
t.noInitialRun && (md = p);
nd();


  var scrypt = (function () {
    var exports = {};

    //---------------------------------------------------------------------------
    // Horrifying UTF-8 and hex codecs

    function encode_utf8(s) {
	return encode_latin1(unescape(encodeURIComponent(s)));
    }

    function encode_latin1(s) {
	var result = new Uint8Array(s.length);
	for (var i = 0; i < s.length; i++) {
	    var c = s.charCodeAt(i);
	    if ((c & 0xff) !== c) throw {message: "Cannot encode string in Latin1", str: s};
	    result[i] = (c & 0xff);
	}
	return result;
    }

    function decode_utf8(bs) {
	return decodeURIComponent(escape(decode_latin1(bs)));
    }

    function decode_latin1(bs) {
	var encoded = [];
	for (var i = 0; i < bs.length; i++) {
	    encoded.push(String.fromCharCode(bs[i]));
	}
	return encoded.join('');
    }

    function to_hex(bs) {
	var encoded = [];
	for (var i = 0; i < bs.length; i++) {
	    encoded.push("0123456789abcdef"[(bs[i] >> 4) & 15]);
	    encoded.push("0123456789abcdef"[bs[i] & 15]);
	}
	return encoded.join('');
    }

    //---------------------------------------------------------------------------

    function injectBytes(bs, leftPadding) {
	var p = leftPadding || 0;
	var address = scrypt_raw._malloc(bs.length + p);
	scrypt_raw.HEAPU8.set(bs, address + p);
	for (var i = address; i < address + p; i++) {
	    scrypt_raw.HEAPU8[i] = 0;
	}
	return address;
    }

    function check_injectBytes(function_name, what, thing, expected_length, leftPadding) {
	check_length(function_name, what, thing, expected_length);
	return injectBytes(thing, leftPadding);
    }

    function extractBytes(address, length) {
	var result = new Uint8Array(length);
	result.set(scrypt_raw.HEAPU8.subarray(address, address + length));
	return result;
    }

    //---------------------------------------------------------------------------

    function check(function_name, result) {
	if (result !== 0) {
	    throw {message: "scrypt_raw." + function_name + " signalled an error"};
	}
    }

    function check_length(function_name, what, thing, expected_length) {
	if (thing.length !== expected_length) {
	    throw {message: "scrypt." + function_name + " expected " +
	           expected_length + "-byte " + what + " but got length " + thing.length};
	}
    }

    function Target(length) {
	this.length = length;
	this.address = scrypt_raw._malloc(length);
    }

    Target.prototype.extractBytes = function (offset) {
	var result = extractBytes(this.address + (offset || 0), this.length - (offset || 0));
	scrypt_raw._free(this.address);
	this.address = null;
	return result;
    };

    function free_all(addresses) {
	for (var i = 0; i < addresses.length; i++) {
	    scrypt_raw._free(addresses[i]);
	}
    }

    //---------------------------------------------------------------------------

    function crypto_scrypt(passwd, salt, n, r, p, buflen) {
	var buf = new Target(buflen);
	var pa = injectBytes(passwd);
	var sa = injectBytes(salt);
	check("_crypto_scrypt",
	      scrypt_raw._crypto_scrypt(pa, passwd.length,
					sa, salt.length,
					n, 0, // 64 bits; zero upper half
					r,
					p,
					buf.address, buf.length));
	free_all([pa, sa]);
	return buf.extractBytes();
    }

    //---------------------------------------------------------------------------

    exports.encode_utf8 = encode_utf8;
    exports.encode_latin1 = encode_latin1;
    exports.decode_utf8 = decode_utf8;
    exports.decode_latin1 = decode_latin1;
    exports.to_hex = to_hex;

    exports.crypto_scrypt = crypto_scrypt;

    return exports;
})();


  return scrypt;
};

module.exports = factory();
module.exports.create = factory;
