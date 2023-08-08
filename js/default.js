/*! js-cookie v3.0.5 | MIT */ ! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self, function() {
        var n = e.Cookies,
            o = e.Cookies = t();
        o.noConflict = function() {
            return e.Cookies = n, o
        }
    }())
}(this, (function() {
    "use strict";

    function e(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) e[o] = n[o]
        }
        return e
    }
    var t = function t(n, o) {
        function r(t, r, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var c = "";
                for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
                return document.cookie = t + "=" + n.write(r, t) + c
            }
        }
        return Object.create({
            set: r,
            get: function(e) {
                if ("undefined" != typeof document && (!arguments.length || e)) {
                    for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, r = 0; r < t.length; r++) {
                        var i = t[r].split("="),
                            c = i.slice(1).join("=");
                        try {
                            var u = decodeURIComponent(i[0]);
                            if (o[u] = n.read(c, u), e === u) break
                        } catch (e) {}
                    }
                    return e ? o[e] : o
                }
            },
            remove: function(t, n) {
                r(t, "", e({}, n, {
                    expires: -1
                }))
            },
            withAttributes: function(n) {
                return t(this.converter, e({}, this.attributes, n))
            },
            withConverter: function(n) {
                return t(e({}, this.converter, n), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(o)
            },
            converter: {
                value: Object.freeze(n)
            }
        })
    }({
        read: function(e) {
            return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });
    return t
}));
/*! JKM md5 | Credits: Joseph Myers */
function md5(n) {
    function e(n, r) {
        var t = f(n[0], e = n[1], o = n[2], u = n[3], r[0], 7, -680876936),
            u = f(u, t, e, o, r[1], 12, -389564586),
            o = f(o, u, t, e, r[2], 17, 606105819),
            e = f(e, o, u, t, r[3], 22, -1044525330),
            t = f(t, e, o, u, r[4], 7, -176418897),
            u = f(u, t, e, o, r[5], 12, 1200080426),
            o = f(o, u, t, e, r[6], 17, -1473231341),
            e = f(e, o, u, t, r[7], 22, -45705983);
        t = f(t, e, o, u, r[8], 7, 1770035416), u = f(u, t, e, o, r[9], 12, -1958414417), o = f(o, u, t, e, r[10], 17, -42063), e = f(e, o, u, t, r[11], 22, -1990404162), t = f(t, e, o, u, r[12], 7, 1804603682), u = f(u, t, e, o, r[13], 12, -40341101), o = f(o, u, t, e, r[14], 17, -1502002290), t = i(t, e = f(e, o, u, t, r[15], 22, 1236535329), o, u, r[1], 5, -165796510), u = i(u, t, e, o, r[6], 9, -1069501632), o = i(o, u, t, e, r[11], 14, 643717713), e = i(e, o, u, t, r[0], 20, -373897302), t = i(t, e, o, u, r[5], 5, -701558691), u = i(u, t, e, o, r[10], 9, 38016083), o = i(o, u, t, e, r[15], 14, -660478335), e = i(e, o, u, t, r[4], 20, -405537848), t = i(t, e, o, u, r[9], 5, 568446438), u = i(u, t, e, o, r[14], 9, -1019803690), o = i(o, u, t, e, r[3], 14, -187363961), e = i(e, o, u, t, r[8], 20, 1163531501), t = i(t, e, o, u, r[13], 5, -1444681467), u = i(u, t, e, o, r[2], 9, -51403784), o = i(o, u, t, e, r[7], 14, 1735328473), t = a(t, e = i(e, o, u, t, r[12], 20, -1926607734), o, u, r[5], 4, -378558), u = a(u, t, e, o, r[8], 11, -2022574463), o = a(o, u, t, e, r[11], 16, 1839030562), e = a(e, o, u, t, r[14], 23, -35309556), t = a(t, e, o, u, r[1], 4, -1530992060), u = a(u, t, e, o, r[4], 11, 1272893353), o = a(o, u, t, e, r[7], 16, -155497632), e = a(e, o, u, t, r[10], 23, -1094730640), t = a(t, e, o, u, r[13], 4, 681279174), u = a(u, t, e, o, r[0], 11, -358537222), o = a(o, u, t, e, r[3], 16, -722521979), e = a(e, o, u, t, r[6], 23, 76029189), t = a(t, e, o, u, r[9], 4, -640364487), u = a(u, t, e, o, r[12], 11, -421815835), o = a(o, u, t, e, r[15], 16, 530742520), t = h(t, e = a(e, o, u, t, r[2], 23, -995338651), o, u, r[0], 6, -198630844), u = h(u, t, e, o, r[7], 10, 1126891415), o = h(o, u, t, e, r[14], 15, -1416354905), e = h(e, o, u, t, r[5], 21, -57434055), t = h(t, e, o, u, r[12], 6, 1700485571), u = h(u, t, e, o, r[3], 10, -1894986606), o = h(o, u, t, e, r[10], 15, -1051523), e = h(e, o, u, t, r[1], 21, -2054922799), t = h(t, e, o, u, r[8], 6, 1873313359), u = h(u, t, e, o, r[15], 10, -30611744), o = h(o, u, t, e, r[6], 15, -1560198380), e = h(e, o, u, t, r[13], 21, 1309151649), t = h(t, e, o, u, r[4], 6, -145523070), u = h(u, t, e, o, r[11], 10, -1120210379), o = h(o, u, t, e, r[2], 15, 718787259), e = h(e, o, u, t, r[9], 21, -343485551), n[0] = v(t, n[0]), n[1] = v(e, n[1]), n[2] = v(o, n[2]), n[3] = v(u, n[3])
    }

    function c(n, r, t, u, o, e) {
        return r = v(v(r, n), v(u, e)), v(r << o | r >>> 32 - o, t)
    }

    function f(n, r, t, u, o, e, f) {
        return c(r & t | ~r & u, n, r, o, e, f)
    }

    function i(n, r, t, u, o, e, f) {
        return c(r & u | t & ~u, n, r, o, e, f)
    }

    function a(n, r, t, u, o, e, f) {
        return c(r ^ t ^ u, n, r, o, e, f)
    }

    function h(n, r, t, u, o, e, f) {
        return c(t ^ (r | ~u), n, r, o, e, f)
    }
    var u = "0123456789abcdef".split("");

    function r(n) {
        for (var r = function(n) {
                for (var r = n.length, t = [1732584193, -271733879, -1732584194, 271733878], u = 64; u <= n.length; u += 64) e(t, function(n) {
                    for (var r = [], t = 0; t < 64; t += 4) r[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
                    return r
                }(n.substring(u - 64, u)));
                n = n.substring(u - 64);
                for (var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], u = 0; u < n.length; u++) o[u >> 2] |= n.charCodeAt(u) << (u % 4 << 3);
                if (o[u >> 2] |= 128 << (u % 4 << 3), 55 < u)
                    for (e(t, o), u = 0; u < 16; u++) o[u] = 0;
                return o[14] = 8 * r, e(t, o), t
            }(n), t = 0; t < r.length; t++) r[t] = function(n) {
            for (var r = "", t = 0; t < 4; t++) r += u[n >> 8 * t + 4 & 15] + u[n >> 8 * t & 15];
            return r
        }(r[t]);
        return r.join("")
    }

    function v(n, r) {
        return n + r & 4294967295
    } {
        function v(n, r) {
            var t = (65535 & n) + (65535 & r);
            return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t
        }
        r("hello")
    }
    return r(n)
}
/*! https://github.com/taylorhakes/promise-polyfill | License: MIT */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, function() {
    "use strict";

    function e(e) {
        var t = this.constructor;
        return this.then(function(n) {
            return t.resolve(e()).then(function() {
                return n
            })
        }, function(n) {
            return t.resolve(e()).then(function() {
                return t.reject(n)
            })
        })
    }

    function t(e) {
        return new this(function(t, n) {
            function r(e, n) {
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var f = n.then;
                    if ("function" == typeof f) return void f.call(n, function(t) {
                        r(e, t)
                    }, function(n) {
                        o[e] = {
                            status: "rejected",
                            reason: n
                        }, 0 == --i && t(o)
                    })
                }
                o[e] = {
                    status: "fulfilled",
                    value: n
                }, 0 == --i && t(o)
            }
            if (!e || "undefined" == typeof e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var o = Array.prototype.slice.call(e);
            if (0 === o.length) return t([]);
            for (var i = o.length, f = 0; o.length > f; f++) r(f, o[f])
        })
    }

    function n(e, t) {
        this.name = "AggregateError", this.errors = e, this.message = t || ""
    }

    function r(e) {
        var t = this;
        return new t(function(r, o) {
            if (!e || "undefined" == typeof e.length) return o(new TypeError("Promise.any accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return o();
            for (var f = [], u = 0; i.length > u; u++) try {
                t.resolve(i[u]).then(r)["catch"](function(e) {
                    f.push(e), f.length === i.length && o(new n(f, "All promises were rejected"))
                })
            } catch (c) {
                o(c)
            }
        })
    }

    function o(e) {
        return !(!e || "undefined" == typeof e.length)
    }

    function i() {}

    function f(e) {
        if (!(this instanceof f)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], s(e, this)
    }

    function u(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, f._immediateFn(function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (o) {
                    return void a(t.promise, o)
                }
                c(t.promise, r)
            } else(1 === e._state ? c : a)(t.promise, e._value)
        })) : e._deferreds.push(t)
    }

    function c(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof f) return e._state = 3, e._value = t, void l(e);
                if ("function" == typeof n) return void s(function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }(n, t), e)
            }
            e._state = 1, e._value = t, l(e)
        } catch (r) {
            a(e, r)
        }
    }

    function a(e, t) {
        e._state = 2, e._value = t, l(e)
    }

    function l(e) {
        2 === e._state && 0 === e._deferreds.length && f._immediateFn(function() {
            e._handled || f._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; n > t; t++) u(e, e._deferreds[t]);
        e._deferreds = null
    }

    function s(e, t) {
        var n = !1;
        try {
            e(function(e) {
                n || (n = !0, c(t, e))
            }, function(e) {
                n || (n = !0, a(t, e))
            })
        } catch (r) {
            if (n) return;
            n = !0, a(t, r)
        }
    }
    n.prototype = Error.prototype;
    var d = setTimeout;
    f.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, f.prototype.then = function(e, t) {
        var n = new this.constructor(i);
        return u(this, new function(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }(e, t, n)), n
    }, f.prototype["finally"] = e, f.all = function(e) {
        return new f(function(t, n) {
            function r(e, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var u = o.then;
                        if ("function" == typeof u) return void u.call(o, function(t) {
                            r(e, t)
                        }, n)
                    }
                    i[e] = o, 0 == --f && t(i)
                } catch (c) {
                    n(c)
                }
            }
            if (!o(e)) return n(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return t([]);
            for (var f = i.length, u = 0; i.length > u; u++) r(u, i[u])
        })
    }, f.any = r, f.allSettled = t, f.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === f ? e : new f(function(t) {
            t(e)
        })
    }, f.reject = function(e) {
        return new f(function(t, n) {
            n(e)
        })
    }, f.race = function(e) {
        return new f(function(t, n) {
            if (!o(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, i = e.length; i > r; r++) f.resolve(e[r]).then(t, n)
        })
    }, f._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        d(e, 0)
    }, f._unhandledRejectionFn = function(e) {
        void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var p = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw Error("unable to locate global object")
    }();
    "function" != typeof p.Promise ? p.Promise = f : (p.Promise.prototype["finally"] || (p.Promise.prototype["finally"] = e), p.Promise.allSettled || (p.Promise.allSettled = t), p.Promise.any || (p.Promise.any = r))
});
/*! https://github.com/github/fetch | License: MIT */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.WHATWGFetch = {})
}(this, function(h) {
    "use strict";
    var e, r, u = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || "undefined" != typeof global && global || {},
        o = "URLSearchParams" in u,
        n = "Symbol" in u && "iterator" in Symbol,
        f = "FileReader" in u && "Blob" in u && function() {
            try {
                return new Blob, !0
            } catch (t) {
                return !1
            }
        }(),
        i = "FormData" in u,
        d = "ArrayBuffer" in u;

    function c(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
        return t.toLowerCase()
    }

    function y(t) {
        return "string" != typeof t ? String(t) : t
    }

    function t(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return n && (t[Symbol.iterator] = function() {
            return t
        }), t
    }

    function p(e) {
        this.map = {}, e instanceof p ? e.forEach(function(t, e) {
            this.append(e, t)
        }, this) : Array.isArray(e) ? e.forEach(function(t) {
            if (2 != t.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
            this.append(t[0], t[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }

    function s(t) {
        if (!t._noBody) return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
    }

    function a(r) {
        return new Promise(function(t, e) {
            r.onload = function() {
                t(r.result)
            }, r.onerror = function() {
                e(r.error)
            }
        })
    }

    function l(t) {
        var e = new FileReader,
            r = a(e);
        return e.readAsArrayBuffer(t), r
    }

    function b(t) {
        var e;
        return t.slice ? t.slice(0) : ((e = new Uint8Array(t.byteLength)).set(new Uint8Array(t)), e.buffer)
    }

    function m() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            var e;
            this.bodyUsed = this.bodyUsed, (this._bodyInit = t) ? "string" == typeof t ? this._bodyText = t : f && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : o && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : d && f && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = b(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : d && (ArrayBuffer.prototype.isPrototypeOf(t) || r(t)) ? this._bodyArrayBuffer = b(t) : this._bodyText = t = Object.prototype.toString.call(t) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, f && (this.blob = function() {
            var t = s(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }), this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) return s(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
            if (f) return this.blob().then(l);
            throw new Error("could not read as ArrayBuffer")
        }, this.text = function() {
            var t, e, r, o = s(this);
            if (o) return o;
            if (this._bodyBlob) return o = this._bodyBlob, e = a(t = new FileReader), r = (r = /charset=([A-Za-z0-9_-]+)/.exec(o.type)) ? r[1] : "utf-8", t.readAsText(o, r), e;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++) r[o] = String.fromCharCode(e[o]);
                return r.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, i && (this.formData = function() {
            return this.text().then(A)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    d && (e = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], r = ArrayBuffer.isView || function(t) {
        return t && -1 < e.indexOf(Object.prototype.toString.call(t))
    }), p.prototype.append = function(t, e) {
        t = c(t), e = y(e);
        var r = this.map[t];
        this.map[t] = r ? r + ", " + e : e
    }, p.prototype.delete = function(t) {
        delete this.map[c(t)]
    }, p.prototype.get = function(t) {
        return t = c(t), this.has(t) ? this.map[t] : null
    }, p.prototype.has = function(t) {
        return this.map.hasOwnProperty(c(t))
    }, p.prototype.set = function(t, e) {
        this.map[c(t)] = y(e)
    }, p.prototype.forEach = function(t, e) {
        for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
    }, p.prototype.keys = function() {
        var r = [];
        return this.forEach(function(t, e) {
            r.push(e)
        }), t(r)
    }, p.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), t(e)
    }, p.prototype.entries = function() {
        var r = [];
        return this.forEach(function(t, e) {
            r.push([e, t])
        }), t(r)
    }, n && (p.prototype[Symbol.iterator] = p.prototype.entries);
    var w = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];

    function E(t, e) {
        if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var r, o = (e = e || {}).body;
        if (t instanceof E) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = (r = (t = e.method || this.method || "GET").toUpperCase(), -1 < w.indexOf(r) ? r : t), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal || function() {
                if ("AbortController" in u) return (new AbortController).signal
            }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(o), "GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache || ((r = /([?&])_=[^&]*/).test(this.url) ? this.url = this.url.replace(r, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime())
    }

    function A(t) {
        var r = new FormData;
        return t.trim().split("&").forEach(function(t) {
            var e;
            t && (e = (t = t.split("=")).shift().replace(/\+/g, " "), t = t.join("=").replace(/\+/g, " "), r.append(decodeURIComponent(e), decodeURIComponent(t)))
        }), r
    }

    function g(t, e) {
        if (!(this instanceof g)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        if (e = e || {}, this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.status < 200 || 599 < this.status) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
        this.ok = 200 <= this.status && this.status < 300, this.statusText = void 0 === e.statusText ? "" : "" + e.statusText, this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
    }
    E.prototype.clone = function() {
        return new E(this, {
            body: this._bodyInit
        })
    }, m.call(E.prototype), m.call(g.prototype), g.prototype.clone = function() {
        return new g(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
        })
    }, g.error = function() {
        var t = new g(null, {
            status: 200,
            statusText: ""
        });
        return t.status = 0, t.type = "error", t
    };
    var T = [301, 302, 303, 307, 308];
    g.redirect = function(t, e) {
        if (-1 === T.indexOf(e)) throw new RangeError("Invalid status code");
        return new g(null, {
            status: e,
            headers: {
                location: t
            }
        })
    }, h.DOMException = u.DOMException;
    try {
        new h.DOMException
    } catch (t) {
        h.DOMException = function(t, e) {
            this.message = t, this.name = e, e = Error(t), this.stack = e.stack
        }, h.DOMException.prototype = Object.create(Error.prototype), h.DOMException.prototype.constructor = h.DOMException
    }

    function _(n, a) {
        return new Promise(function(i, t) {
            var e = new E(n, a);
            if (e.signal && e.signal.aborted) return t(new h.DOMException("Aborted", "AbortError"));
            var r, s = new XMLHttpRequest;

            function o() {
                s.abort()
            }
            s.onload = function() {
                var r, t = s.getAllResponseHeaders(),
                    e = s.getResponseHeader("set-cookie"),
                    o = (e && (t = t.replace(e, e.replace(/\r?\n/g, ", "))), {
                        status: s.status,
                        statusText: s.statusText,
                        headers: (e = t || "", r = new p, e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(t) {
                            return 0 === t.indexOf("\n") ? t.substr(1, t.length) : t
                        }).forEach(function(t) {
                            var e = (t = t.split(":")).shift().trim();
                            if (e) {
                                t = t.join(":").trim();
                                try {
                                    r.append(e, t)
                                } catch (t) {}
                            }
                        }), r)
                    }),
                    n = (o.url = "responseURL" in s ? s.responseURL : o.headers.get("X-Request-URL"), "response" in s ? s.response : s.responseText);
                setTimeout(function() {
                    i(new g(n, o))
                }, 0)
            }, s.onerror = function() {
                setTimeout(function() {
                    t(new TypeError("Network request failed"))
                }, 0)
            }, s.ontimeout = function() {
                setTimeout(function() {
                    t(new TypeError("Network request failed"))
                }, 0)
            }, s.onabort = function() {
                setTimeout(function() {
                    t(new h.DOMException("Aborted", "AbortError"))
                }, 0)
            }, s.open(e.method, function(e) {
                try {
                    return "" === e && u.location.href ? u.location.href : e
                } catch (t) {
                    return e
                }
            }(e.url), !0), "include" === e.credentials ? s.withCredentials = !0 : "omit" === e.credentials && (s.withCredentials = !1), "responseType" in s && (f ? s.responseType = "blob" : d && (s.responseType = "arraybuffer")), a && "object" == typeof a.headers && !(a.headers instanceof p || u.Headers && a.headers instanceof u.Headers) ? (r = [], Object.getOwnPropertyNames(a.headers).forEach(function(t) {
                r.push(c(t)), s.setRequestHeader(t, y(a.headers[t]))
            }), e.headers.forEach(function(t, e) {
                -1 === r.indexOf(e) && s.setRequestHeader(e, t)
            })) : e.headers.forEach(function(t, e) {
                s.setRequestHeader(e, t)
            }), e.signal && (e.signal.addEventListener("abort", o), s.onreadystatechange = function() {
                4 === s.readyState && e.signal.removeEventListener("abort", o)
            }), s.send(void 0 === e._bodyInit ? null : e._bodyInit)
        })
    }
    _.polyfill = !0, u.fetch || (u.fetch = _, u.Headers = p, u.Request = E, u.Response = g), h.Headers = p, h.Request = E, h.Response = g, h.fetch = _, Object.defineProperty(h, "__esModule", {
        value: !0
    })
});

/*! default.js */
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), Element.prototype.closest || (Element.prototype.closest = function(e) {
    for (var t = this, n = t.matches || t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector; t && 1 === t.nodeType;) {
        if (n.call(t, e)) return t;
        t = t.parentElement
    }
    return null
}), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this)
});
var Cookies = Cookies.withAttributes({
    expires: 90,
    sameSite: "strict",
    path: "/",
    secure: !0
});

function _el(e, t) {
    return (t = t || document).querySelector(e)
}

function _els(e, t) {
    return (t = t || document).querySelectorAll(e)
}

function _id(e, t) {
    return (t = t || document).getElementById(e)
}

function ico(e, t) {
    var n, o;
    switch (t = t || "", e) {
        case 0:
            o = "&#215;", n = "false";
            break;
        case 1:
            o = "&#10004;", n = "true";
            break;
        case 2:
            o = "?", n = "unknown";
            break;
        default:
            return ""
    }
    return '<span class="' + n + '">' + (t || o) + "</span> "
}

function flagBox(e, t, n, o, i, s) {
    function a(e, t) {
        var n = "",
            o = "";
        return e && (2 == e.length && e.match(/^[a-z]{2}$/) ? n = ' alt="' + (o = e.toUpperCase()) + '" title="' + o + '"' : 2 < e.length && (n = ' title="' + (o = (o = e.replace(/_/g, "")).charAt(0).toUpperCase() + o.slice(1)) + '"'), n += ' src="/img/flags/' + e + '.png"'), void 0 !== t && t && (n += t), '<img class="flag-icon"' + n + ">"
    }
    if ("object" != typeof e) c = a(e, o);
    else
        for (var c = "", r = 0; r < e.length; r++) c += a(e[r], o);
    return void 0 !== n && n ? t = '<a href="/ip/' + t + '" title="Get IP Address Details"' + (void 0 !== s && s ? " " + s : "") + ">" + t + "</a>" : void 0 !== i && i && (t = '<span title="This page is about that IP">' + t + "</span>"), '<span class="flag-container">' + c + '<span class="flag-text wball">' + t + "</span></span> "
}

function date_format(e) {
    var t = new Date;
    return t.getFullYear() + e[0] + ("0" + (t.getMonth() + 1)).slice(-2) + e[1] + ("0" + t.getDate()).slice(-2) + e[2] + ("0" + t.getHours()).slice(-2) + e[3] + ("0" + t.getMinutes()).slice(-2) + e[4] + ("0" + t.getSeconds()).slice(-2)
}

function sectionClick(e) {
    var t;
    return !!location.hash.length && (/^#[A-Za-z][0-9a-zA-Z-_+]+$/.test(location.hash) ? void((t = _el(location.hash)) && t.classList.contains("section") && (e && t.click(), t.scrollIntoView())) : (history.replaceState(null, null, window.location.pathname), !1))
}
window.fetch = window.fetchTM = function(a) {
    return function(e, i, s) {
        return s = void 0 !== s ? s : 3e4, new Promise(function(t, n) {
            var o = setTimeout(function() {
                n(new Error("Request timed out"))
            }, s);
            a(e, i).then(function(e) {
                clearTimeout(o), t(e)
            }).catch(function(e) {
                clearTimeout(o), n(e)
            })
        })
    }
}(window.fetch), document.addEventListener("DOMContentLoaded", function() {
    var i = _el("#content"),
        e = (window.onunload = function() {
            document.activeElement && document.activeElement.blur()
        }, _el("#bdo"));

    function o(e) {
        e.length && _el(e).classList.contains("nohistory") || (e.length || (e = window.location.pathname), history.replaceState(null, null, e))
    }
    e && e.addEventListener("mouseover", function e() {
        var t = this.textContent.split("").reverse().join(""),
            n = document.createElement("a");
        n.href = "mailto:" + t, n.textContent = t, this.textContent = "", this.appendChild(n), this.removeEventListener("mouseover", e)
    });
    var t = _els(".section");

    function r() {
        var e = _el("body");
        e.classList.contains("wide") ? (e.classList.remove("wide"), Cookies.remove("bl_pin")) : (e.classList.add("wide"), Cookies.set("bl_pin", 1))
    }
    if (t.forEach(function(e) {
            e.classList.contains("section-enabled") || e.nextElementSibling.classList.toggle("none"), e.nextElementSibling.classList.remove("noscript"), e.addEventListener("click", function(e) {
                e.preventDefault(), this.classList.toggle("section-enabled"), this.nextElementSibling.classList.toggle("none");
                var n, e = _el("a", this);
                this.classList.contains("section-enabled") ? (e.title = "Click to collapse", o("#" + this.getAttribute("id"))) : (e.title = "Click to expand", o(""), n = this.getAttribute("id"), t.forEach(function(e) {
                    var t = e.getAttribute("id");
                    if (t !== n && e.classList.contains("section-enabled")) return o("#" + t), !1
                }))
            })
        }), window.addEventListener("hashchange", function() {
            sectionClick(!0)
        }), sectionClick(!0), _el("#nav-pin").addEventListener("click", function(e) {
            e.preventDefault();
            var t = _el("#logo a"),
                n = _el("#bg-hand"),
                o = document.body;
            i.classList.add("transition-marginLeft"), t.classList.add("transition-marginLeft"), i.addEventListener("transitionend", function e() {
                i.classList.remove("transition-marginLeft"), t.classList.remove("transition-marginLeft"), i.removeEventListener("transitionend", e)
            }), n.classList.add("transition-opacity"), n.addEventListener("transitionrun", function e() {
                n.classList.contains("fixed") || n.classList.add("fixed"), n.removeEventListener("transitionrun", e)
            }), n.addEventListener("transitionend", function e() {
                !n.classList.contains("fixed") && o.classList.contains("wide") ? n.classList.add("fixed") : n.classList.contains("fixed") && !o.classList.contains("wide") && n.classList.remove("fixed"), n.classList.remove("transition-opacity"), n.removeEventListener("transitionend", e)
            }), r()
        }), _el("#nav-pin-submit").addEventListener("mouseleave", function() {
            this === document.activeElement && this.blur()
        }), void 0 !== window.matchMedia) {
        var n = window.matchMedia("(max-width:640px)");
        try {
            n.addEventListener("change", s)
        } catch (e) {
            n.addListener(s)
        }
    }

    function s(e) {
        function t() {
            s.checked ? (window.onbeforeunload = function() {}, document.body.classList.add("menu-body-noscroll")) : (window.onbeforeunload = null, document.body.classList.remove("menu-body-noscroll"))
        }

        function n() {
            s.checked = !1, t()
        }

        function o(e) {
            "focus" === e.type ? i.classList.add("nav-menu-focused") : i.classList.remove("nav-menu-focused")
        }
        var i = _el("#nav-menu"),
            s = _el("#nav-menu input"),
            a = _els("#nav-hover a, #nav-hover span"),
            c = _els(".ico-more, .nav-dark, .nav-close");
        e.matches ? (document.body.classList.contains("wide") && r(), s.addEventListener("change", t), c.forEach(function(e) {
            e.addEventListener("click", n)
        }), a.forEach(function(e) {
            e.removeEventListener("focus", o), e.removeEventListener("focusout", o)
        })) : (n(), a.forEach(function(e) {
            e.addEventListener("focus", o), e.addEventListener("focusout", o)
        }), s.removeEventListener("change", t), c.forEach(function(e) {
            e.removeEventListener("click", n)
        }))
    }
    s(n);
    var a = _el("#comments");

    function c() {
        a.classList.add("comments-locked"), a.textContent = a.textContent, window.remark_config = {
            host: "https://remark42.browserleaks.com",
            site_id: "browserleaks",
            no_footer: !0,
            show_rss_subscription: !1
        };
        for (var e = window.remark_config.components || ["embed"], t = document, n = 0; n < e.length; n++) {
            var o = t.createElement("script"),
                i = ".js",
                s = t.head || t.body;
            "noModule" in o ? (o.type = "module", i = ".mjs") : (o.async = !0, o.defer = !0), o.src = window.remark_config.host + "/web/" + e[n] + i, s.appendChild(o)
        }
    }
    a && (Cookies.get("bl_comments") ? window.onload = function() {
        c()
    } : location.hash && /^#remark42__comment-.+$/.test(location.hash) ? c() : a.addEventListener("click", function e() {
        a.removeEventListener("click", e), c()
    }));
    var l = _el("#lookup-input"),
        d = _el("#lookup-submit"),
        u = (l.addEventListener("keypress", function(e) {
            13 === e.which && (d.click(), e.preventDefault())
        }), d.addEventListener("click", function(e) {
            e.preventDefault();
            var t = l.value.trim().toLowerCase();
            "" !== t && (t = "/" + t), e.ctrlKey || e.metaKey ? (window.open("/ip" + t, "_blank"), this.blur()) : window.location.href = "/ip" + t
        }), 0),
        f = _el(".responsive-search-form"),
        v = _el(".responsive-search-icon"),
        h = _el(".responsive-search-input"),
        m = _el(".responsive-search-submit");
    _el(".responsive-search").addEventListener("click", function() {
        var e = _el("#nav-menu-input");
        if (e && e.checked && e.click(), 0 === u) u = 1, f.classList.remove("n"), v.style.filter = "invert(64.5%)", h.focus();
        else if (1 === u) {
            u = 0;
            e = h.value.trim();
            if (e.length) return window.location.href = "/ip/" + e, !1;
            f.classList.add("n"), v.style.filter = "invert(0)"
        }
        i.addEventListener("click", function() {
            u = 0, f.classList.add("n"), v.style.filter = "invert(0)"
        }, {
            once: !0
        })
    }), h.addEventListener("keypress", function(e) {
        if (13 === e.which) return m.click(), !1
    }), m.addEventListener("click", function(e) {
        e.preventDefault();
        e = h.value.trim();
        return "" !== e && (window.location.href = "/ip/" + e), !1
    });
    try {
        "/" != location.pathname && "/settings" != location.pathname && (_el("#content header").innerHTML += '<div data-html2canvas-ignore id="screenshot" class="svg-photo" title="Take a screenshot of the entire page"></div>');
        var p = _el("#screenshot"),
            L = !1;
        p.addEventListener("click", function() {
            var e;
            L || (this.classList.add("screenshot-load"), L = !0, "function" == typeof(e = document.createElement("audio")).play && (e.src = "/" + "res" + "/" + "screenshot" + "." + "mp3?v=49879122", e.play()), setTimeout(function() {
                var e;
                "function" != typeof html2canvas ? ((e = document.createElement("script")).src = "/" + "js" + "/" + "screenshot" + "." + "js?v=49939282", e.onload = function() {
                    w()
                }, document.head.appendChild(e)) : w()
            }, 1))
        })
    } catch (e) {}

    function w() {
        _els("p,iframe[sandbox],.section,.section+div,.leaflet-control-container,.leaflet-popup-tip-container").forEach(function(e) {
            e.setAttribute("data-html2canvas-ignore", "")
        }), html2canvas(i, {
            logging: !1,
            useCORS: !0,
            scrollX: 0,
            scrollY: -window.scrollY,
            onclone: function(e) {
                _els("a, span.href, span.dot", e).forEach(function(e) {
                    e.style.color = "inherit", e.style.textDecoration = "none", e.style.border = "none"
                }), _els(".leaflet-popup-content-wrapper", e).forEach(function(e) {
                    e.style.boxShadow = "none", e.style.border = "1px #999 solid"
                }), _els("#dns-list, #js-voices div, .tor-exit-policy", e).forEach(function(e) {
                    e.classList.value = ""
                }), _els(".rtc-form", e).forEach(function(e) {
                    e.textContent = e.textContent, e.classList.remove("rtc-form")
                }), _els("#content", e).forEach(function(e) {
                    e.style.padding = "26px 10px 5px", e.innerHTML += '<div class="screenshot-label">https://browserleaks.com' + location.pathname + " - " + date_format("// ::") + "</div>"
                })
            }
        }).then(function(e) {
            e.toBlob(function(e) {
                var t = "browserleaks-" + location.pathname.slice(1).replace(/[\.-]/g, "").replace(/\//g, "-") + "-" + date_format("_____") + ".png";
                saveAs(e, t), setTimeout(function() {
                    L = !1, p.classList.remove("screenshot-load")
                }, 200)
            })
        })
    }
    window.chrome && document.addEventListener("copy", function(e) {
        e.preventDefault();
        var t = _els(".upper");
        t.forEach(function(e) {
            e.style.textTransform = "none"
        }), e.clipboardData.setData("text/plain", window.getSelection().toString()), requestAnimationFrame(function e() {
            t.forEach(function(e) {
                e.style.textTransform = "uppercase"
            }), requestAnimationFrame(e)
        })
    })
});