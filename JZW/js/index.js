var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}, Zepto = function () {
    function t(t) {
        return null == t ? String(t) : U[W.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function n(t) {
        return null != t && t == t.window
    }

    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function i(e) {
        return "object" == t(e)
    }

    function o(t) {
        return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function a(t) {
        return "number" == typeof t.length
    }

    function s(t) {
        return P.call(t, function (t) {
            return null != t
        })
    }

    function u(t) {
        return t.length > 0 ? S.fn.concat.apply([], t) : t
    }

    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(t) {
        return t in Z ? Z[t] : Z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function f(t, e) {
        return "number" != typeof e || D[c(t)] ? e : e + "px"
    }

    function h(t) {
        var e, n;
        return L[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), L[t] = n), L[t]
    }

    function p(t) {
        return "children" in t ? $.call(t.children) : S.map(t.childNodes, function (t) {
            if (1 == t.nodeType) return t
        })
    }

    function d(t, e) {
        var n, r = t ? t.length : 0;
        for (n = 0; n < r; n++) this[n] = t[n];
        this.length = r, this.selector = e || ""
    }

    function m(t, e, n) {
        for (j in e) n && (o(e[j]) || Q(e[j])) ? (o(e[j]) && !o(t[j]) && (t[j] = {}), Q(e[j]) && !Q(t[j]) && (t[j] = []), m(t[j], e[j], n)) : e[j] !== E && (t[j] = e[j])
    }

    function v(t, e) {
        return null == e ? S(t) : S(t).filter(e)
    }

    function g(t, n, r, i) {
        return e(n) ? n.call(t, r, i) : n
    }

    function y(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function x(t, e) {
        var n = t.className || "", r = n && n.baseVal !== E;
        if (e === E) return r ? n.baseVal : n;
        r ? n.baseVal = e : t.className = e
    }

    function b(t) {
        try {
            return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? S.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function w(t, e) {
        e(t);
        for (var n = 0, r = t.childNodes.length; n < r; n++) w(t.childNodes[n], e)
    }

    var E, j, S, T, N, C, _ = [], O = _.concat, P = _.filter, $ = _.slice, A = window.document, L = {}, Z = {},
        D = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
        R = /^\s*<(\w+|!)[^>]*>/, M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, F = /^(?:body|html)$/i,
        q = /([A-Z])/g, z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        H = ["after", "prepend", "before", "append"], B = A.createElement("table"), V = A.createElement("tr"),
        I = {tr: A.createElement("tbody"), tbody: B, thead: B, tfoot: B, td: V, th: V, "*": A.createElement("div")},
        J = /complete|loaded|interactive/, X = /^[\w-]*$/, U = {}, W = U.toString, Y = {}, G = A.createElement("div"),
        K = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }, Q = Array.isArray || function (t) {
            return t instanceof Array
        };
    return Y.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r, i = t.parentNode, o = !i;
        return o && (i = G).appendChild(t), r = ~Y.qsa(i, e).indexOf(t), o && G.removeChild(t), r
    }, N = function (t) {
        return t.replace(/-+(.)?/g, function (t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, C = function (t) {
        return P.call(t, function (e, n) {
            return t.indexOf(e) == n
        })
    }, Y.fragment = function (t, e, n) {
        var r, i, a;
        return M.test(t) && (r = S(A.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(k, "<$1></$2>")), e === E && (e = R.test(t) && RegExp.$1), e in I || (e = "*"), (a = I[e]).innerHTML = "" + t, r = S.each($.call(a.childNodes), function () {
            a.removeChild(this)
        })), o(n) && (i = S(r), S.each(n, function (t, e) {
            z.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
        })), r
    }, Y.Z = function (t, e) {
        return new d(t, e)
    }, Y.isZ = function (t) {
        return t instanceof Y.Z
    }, Y.init = function (t, n) {
        var r;
        if (!t) return Y.Z();
        if ("string" == typeof t) if ("<" == (t = t.trim())[0] && R.test(t)) r = Y.fragment(t, RegExp.$1, n), t = null; else {
            if (n !== E) return S(n).find(t);
            r = Y.qsa(A, t)
        } else {
            if (e(t)) return S(A).ready(t);
            if (Y.isZ(t)) return t;
            if (Q(t)) r = s(t); else if (i(t)) r = [t], t = null; else if (R.test(t)) r = Y.fragment(t.trim(), RegExp.$1, n), t = null; else {
                if (n !== E) return S(n).find(t);
                r = Y.qsa(A, t)
            }
        }
        return Y.Z(r, t)
    }, S = function (t, e) {
        return Y.init(t, e)
    }, S.extend = function (t) {
        var e, n = $.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
            m(t, n, e)
        }), t
    }, Y.qsa = function (t, e) {
        var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, a = X.test(o);
        return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : $.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, S.contains = A.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e)
    } : function (t, e) {
        for (; e && (e = e.parentNode);) if (e === t) return !0;
        return !1
    }, S.type = t, S.isFunction = e, S.isWindow = n, S.isArray = Q, S.isPlainObject = o, S.isEmptyObject = function (t) {
        var e;
        for (e in t) return !1;
        return !0
    }, S.inArray = function (t, e, n) {
        return _.indexOf.call(e, t, n)
    }, S.camelCase = N, S.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, S.uuid = 0, S.support = {}, S.expr = {}, S.noop = function () {
    }, S.map = function (t, e) {
        var n, r, i, o = [];
        if (a(t)) for (r = 0; r < t.length; r++) null != (n = e(t[r], r)) && o.push(n); else for (i in t) null != (n = e(t[i], i)) && o.push(n);
        return u(o)
    }, S.each = function (t, e) {
        var n, r;
        if (a(t)) {
            for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t
        } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
        return t
    }, S.grep = function (t, e) {
        return P.call(t, e)
    }, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    }), S.fn = {
        constructor: Y.Z,
        length: 0,
        forEach: _.forEach,
        reduce: _.reduce,
        push: _.push,
        sort: _.sort,
        splice: _.splice,
        indexOf: _.indexOf,
        concat: function () {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = Y.isZ(e) ? e.toArray() : e;
            return O.apply(Y.isZ(this) ? this.toArray() : this, n)
        },
        map: function (t) {
            return S(S.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return S($.apply(this, arguments))
        },
        ready: function (t) {
            return J.test(A.readyState) && A.body ? t(S) : A.addEventListener("DOMContentLoaded", function () {
                t(S)
            }, !1), this
        },
        get: function (t) {
            return t === E ? $.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function () {
            return this.get()
        },
        size: function () {
            return this.length
        },
        remove: function () {
            return this.each(function () {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function (t) {
            return _.every.call(this, function (e, n) {
                return !1 !== t.call(e, n, e)
            }), this
        },
        filter: function (t) {
            return e(t) ? this.not(this.not(t)) : S(P.call(this, function (e) {
                return Y.matches(e, t)
            }))
        },
        add: function (t, e) {
            return S(C(this.concat(S(t, e))))
        },
        is: function (t) {
            return this.length > 0 && Y.matches(this[0], t)
        },
        not: function (t) {
            var n = [];
            if (e(t) && t.call !== E) this.each(function (e) {
                t.call(this, e) || n.push(this)
            }); else {
                var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? $.call(t) : S(t);
                this.forEach(function (t) {
                    r.indexOf(t) < 0 && n.push(t)
                })
            }
            return S(n)
        },
        has: function (t) {
            return this.filter(function () {
                return i(t) ? S.contains(this, t) : S(this).find(t).size()
            })
        },
        eq: function (t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function () {
            var t = this[0];
            return t && !i(t) ? t : S(t)
        },
        last: function () {
            var t = this[this.length - 1];
            return t && !i(t) ? t : S(t)
        },
        find: function (t) {
            var e = this;
            return t ? "object" == (void 0 === t ? "undefined" : _typeof(t)) ? S(t).filter(function () {
                var t = this;
                return _.some.call(e, function (e) {
                    return S.contains(e, t)
                })
            }) : 1 == this.length ? S(Y.qsa(this[0], t)) : this.map(function () {
                return Y.qsa(this, t)
            }) : S()
        },
        closest: function (t, e) {
            var n = this[0], i = !1;
            for ("object" == (void 0 === t ? "undefined" : _typeof(t)) && (i = S(t)); n && !(i ? i.indexOf(n) >= 0 : Y.matches(n, t));) n = n !== e && !r(n) && n.parentNode;
            return S(n)
        },
        parents: function (t) {
            for (var e = [], n = this; n.length > 0;) n = S.map(n, function (t) {
                if ((t = t.parentNode) && !r(t) && e.indexOf(t) < 0) return e.push(t), t
            });
            return v(e, t)
        },
        parent: function (t) {
            return v(C(this.pluck("parentNode")), t)
        },
        children: function (t) {
            return v(this.map(function () {
                return p(this)
            }), t)
        },
        contents: function () {
            return this.map(function () {
                return this.contentDocument || $.call(this.childNodes)
            })
        },
        siblings: function (t) {
            return v(this.map(function (t, e) {
                return P.call(p(e.parentNode), function (t) {
                    return t !== e
                })
            }), t)
        },
        empty: function () {
            return this.each(function () {
                this.innerHTML = ""
            })
        },
        pluck: function (t) {
            return S.map(this, function (e) {
                return e[t]
            })
        },
        show: function () {
            return this.each(function () {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function (t) {
            return this.before(t).remove()
        },
        wrap: function (t) {
            var n = e(t);
            if (this[0] && !n) var r = S(t).get(0), i = r.parentNode || this.length > 1;
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function (t) {
            if (this[0]) {
                S(this[0]).before(t = S(t));
                for (var e; (e = t.children()).length;) t = e.first();
                S(t).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            var n = e(t);
            return this.each(function (e) {
                var r = S(this), i = r.contents(), o = n ? t.call(this, e) : t;
                i.length ? i.wrapAll(o) : r.append(o)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                S(this).replaceWith(S(this).children())
            }), this
        },
        clone: function () {
            return this.map(function () {
                return this.cloneNode(!0)
            })
        },
        hide: function () {
            return this.css("display", "none")
        },
        toggle: function (t) {
            return this.each(function () {
                var e = S(this);
                (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function (t) {
            return S(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function (t) {
            return S(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = this.innerHTML;
                S(this).empty().append(g(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function (t) {
            return 0 in arguments ? this.each(function (e) {
                var n = g(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function (t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function (n) {
                if (1 === this.nodeType) if (i(t)) for (j in t) y(this, j, t[j]); else y(this, t, g(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E
        },
        removeAttr: function (t) {
            return this.each(function () {
                1 === this.nodeType && t.split(" ").forEach(function (t) {
                    y(this, t)
                }, this)
            })
        },
        prop: function (t, e) {
            return t = K[t] || t, 1 in arguments ? this.each(function (n) {
                this[t] = g(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function (t, e) {
            var n = "data-" + t.replace(q, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? b(r) : E
        },
        val: function (t) {
            return 0 in arguments ? this.each(function (e) {
                this.value = g(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function () {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function (t) {
            if (t) return this.each(function (e) {
                var n = S(this), r = g(this, t, e, n.offset()), i = n.offsetParent().offset(),
                    o = {top: r.top - i.top, left: r.left - i.left};
                "static" == n.css("position") && (o.position = "relative"), n.css(o)
            });
            if (!this.length) return null;
            if (!S.contains(A.documentElement, this[0])) return {top: 0, left: 0};
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function (e, n) {
            if (arguments.length < 2) {
                var r, i = this[0];
                if (!i) return;
                if (r = getComputedStyle(i, ""), "string" == typeof e) return i.style[N(e)] || r.getPropertyValue(e);
                if (Q(e)) {
                    var o = {};
                    return S.each(e, function (t, e) {
                        o[e] = i.style[N(e)] || r.getPropertyValue(e)
                    }), o
                }
            }
            var a = "";
            if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function () {
                this.style.removeProperty(c(e))
            }); else for (j in e) e[j] || 0 === e[j] ? a += c(j) + ":" + f(j, e[j]) + ";" : this.each(function () {
                this.style.removeProperty(c(j))
            });
            return this.each(function () {
                this.style.cssText += ";" + a
            })
        },
        index: function (t) {
            return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function (t) {
            return !!t && _.some.call(this, function (t) {
                return this.test(x(t))
            }, l(t))
        },
        addClass: function (t) {
            return t ? this.each(function (e) {
                if ("className" in this) {
                    T = [];
                    var n = x(this);
                    g(this, t, e, n).split(/\s+/g).forEach(function (t) {
                        S(this).hasClass(t) || T.push(t)
                    }, this), T.length && x(this, n + (n ? " " : "") + T.join(" "))
                }
            }) : this
        },
        removeClass: function (t) {
            return this.each(function (e) {
                if ("className" in this) {
                    if (t === E) return x(this, "");
                    T = x(this), g(this, t, e, T).split(/\s+/g).forEach(function (t) {
                        T = T.replace(l(t), " ")
                    }), x(this, T.trim())
                }
            })
        },
        toggleClass: function (t, e) {
            return t ? this.each(function (n) {
                var r = S(this);
                g(this, t, n, x(this)).split(/\s+/g).forEach(function (t) {
                    (e === E ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function (t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
                    this.scrollTop = t
                } : function () {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function (t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
                    this.scrollLeft = t
                } : function () {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function () {
            if (this.length) {
                var t = this[0], e = this.offsetParent(), n = this.offset(),
                    r = F.test(e[0].nodeName) ? {top: 0, left: 0} : e.offset();
                return n.top -= parseFloat(S(t).css("margin-top")) || 0, n.left -= parseFloat(S(t).css("margin-left")) || 0, r.top += parseFloat(S(e[0]).css("border-top-width")) || 0, r.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || A.body; t && !F.test(t.nodeName) && "static" == S(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    }, S.fn.detach = S.fn.remove, ["width", "height"].forEach(function (t) {
        var e = t.replace(/./, function (t) {
            return t[0].toUpperCase()
        });
        S.fn[t] = function (i) {
            var o, a = this[0];
            return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
                (a = S(this)).css(t, g(this, i, e, a[t]()))
            })
        }
    }), H.forEach(function (e, n) {
        var r = n % 2;
        S.fn[e] = function () {
            var e, i, o = S.map(arguments, function (n) {
                return e = t(n), "object" == e || "array" == e || null == n ? n : Y.fragment(n)
            }), a = this.length > 1;
            return o.length < 1 ? this : this.each(function (t, e) {
                i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var s = S.contains(A.documentElement, i);
                o.forEach(function (t) {
                    if (a) t = t.cloneNode(!0); else if (!i) return S(t).remove();
                    i.insertBefore(t, e), s && w(t, function (t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, S.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
            return S(t)[e](this), this
        }
    }), Y.Z.prototype = d.prototype = S.fn, Y.uniq = C, Y.deserializeValue = b, S.zepto = Y, S
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }

    function n(t, n, o, a) {
        if ((n = r(n)).ns) var s = i(n.ns);
        return (v[e(t)] || []).filter(function (t) {
            return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
        })
    }

    function r(t) {
        var e = ("" + t).split(".");
        return {e: e[0], ns: e.slice(1).sort().join(" ")}
    }

    function i(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }

    function o(t, e) {
        return t.del && !y && t.e in x || !!e
    }

    function a(t) {
        return b[t] || y && x[t] || t
    }

    function s(n, i, s, u, l, h, p) {
        var d = e(n), m = v[d] || (v[d] = []);
        i.split(/\s/).forEach(function (e) {
            if ("ready" == e) return t(document).ready(s);
            var i = r(e);
            i.fn = s, i.sel = l, i.e in b && (s = function (e) {
                var n = e.relatedTarget;
                if (!n || n !== this && !t.contains(this, n)) return i.fn.apply(this, arguments)
            }), i.del = h;
            var d = h || s;
            i.proxy = function (t) {
                if (!(t = c(t)).isImmediatePropagationStopped()) {
                    t.data = u;
                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return !1 === e && (t.preventDefault(), t.stopPropagation()), e
                }
            }, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
        })
    }

    function u(t, r, i, s, u) {
        var c = e(t);
        (r || "").split(/\s/).forEach(function (e) {
            n(t, e, i, s).forEach(function (e) {
                delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
            })
        })
    }

    function c(e, n) {
        return !n && e.isDefaultPrevented || (n || (n = e), t.each(S, function (t, r) {
            var i = n[t];
            e[t] = function () {
                return this[r] = w, i && i.apply(n, arguments)
            }, e[r] = E
        }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? !1 === n.returnValue : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = w)), e
    }

    function l(t) {
        var e, n = {originalEvent: t};
        for (e in t) j.test(e) || t[e] === f || (n[e] = t[e]);
        return c(n, t)
    }

    var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function (t) {
            return "string" == typeof t
        }, v = {}, g = {}, y = "onfocusin" in window, x = {focus: "focusin", blur: "focusout"},
        b = {mouseenter: "mouseover", mouseleave: "mouseout"};
    g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
        add: s,
        remove: u
    }, t.proxy = function (n, r) {
        var i = 2 in arguments && p.call(arguments, 2);
        if (d(n)) {
            var o = function () {
                return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
            };
            return o._zid = e(n), o
        }
        if (m(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
        throw new TypeError("expected function")
    }, t.fn.bind = function (t, e, n) {
        return this.on(t, e, n)
    }, t.fn.unbind = function (t, e) {
        return this.off(t, e)
    }, t.fn.one = function (t, e, n, r) {
        return this.on(t, e, n, r, 1)
    };
    var w = function () {
        return !0
    }, E = function () {
        return !1
    }, j = /^([A-Z]|returnValue$|layer[XY]$)/, S = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function (t, e, n) {
        return this.on(e, t, n)
    }, t.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n)
    }, t.fn.live = function (e, n) {
        return t(document.body).delegate(this.selector, e, n), this
    }, t.fn.die = function (e, n) {
        return t(document.body).undelegate(this.selector, e, n), this
    }, t.fn.on = function (e, n, r, i, o) {
        var a, c, h = this;
        return e && !m(e) ? (t.each(e, function (t, e) {
            h.on(t, n, r, e, o)
        }), h) : (m(n) || d(i) || !1 === i || (i = r, r = n, n = f), i !== f && !1 !== r || (i = r, r = f), !1 === i && (i = E), h.each(function (f, h) {
            o && (a = function (t) {
                return u(h, t.type, i), i.apply(this, arguments)
            }), n && (c = function (e) {
                var r, o = t(e.target).closest(n, h).get(0);
                if (o && o !== h) return r = t.extend(l(e), {
                    currentTarget: o,
                    liveFired: h
                }), (a || i).apply(o, [r].concat(p.call(arguments, 1)))
            }), s(h, e, i, r, n, c || a)
        }))
    }, t.fn.off = function (e, n, r) {
        var i = this;
        return e && !m(e) ? (t.each(e, function (t, e) {
            i.off(t, n, e)
        }), i) : (m(n) || d(r) || !1 === r || (r = n, n = f), !1 === r && (r = E), i.each(function () {
            u(this, e, r, n)
        }))
    }, t.fn.trigger = function (e, n) {
        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function () {
            e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }, t.fn.triggerHandler = function (e, r) {
        var i, o;
        return this.each(function (a, s) {
            (i = l(m(e) ? t.Event(e) : e))._args = r, i.target = s, t.each(n(s, e.type || e), function (t, e) {
                if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1
            })
        }), o
    }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        t.fn[e] = function (t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }), t.Event = function (t, e) {
        m(t) || (e = t, t = e.type);
        var n = document.createEvent(g[t] || "Events"), r = !0;
        if (e) for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
        return n.initEvent(t, r, !0), c(n)
    }
}(Zepto), function (t) {
    function e(e, n, r) {
        var i = t.Event(n);
        return t(e).trigger(i, r), !i.isDefaultPrevented()
    }

    function n(t, n, r, i) {
        if (t.global) return e(n || y, r, i)
    }

    function r(e) {
        e.global && 0 == t.active++ && n(e, null, "ajaxStart")
    }

    function i(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }

    function o(t, e) {
        var r = e.context;
        if (!1 === e.beforeSend.call(r, t, e) || !1 === n(e, r, "ajaxBeforeSend", [t, e])) return !1;
        n(e, r, "ajaxSend", [t, e])
    }

    function a(t, e, r, i) {
        var o = r.context;
        r.success.call(o, t, "success", e), i && i.resolveWith(o, [t, "success", e]), n(r, o, "ajaxSuccess", [e, r, t]), u("success", e, r)
    }

    function s(t, e, r, i, o) {
        var a = i.context;
        i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
    }

    function u(t, e, r) {
        var o = r.context;
        r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
    }

    function c() {
    }

    function l(t) {
        return t && (t = t.split(";", 2)[0]), t && (t == j ? "html" : t == E ? "json" : b.test(t) ? "script" : w.test(t) && "xml") || "text"
    }

    function f(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }

    function h(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
    }

    function p(e, n, r, i) {
        return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
            url: e,
            data: n,
            success: r,
            dataType: i
        }
    }

    function d(e, n, r, i) {
        var o, a = t.isArray(n), s = t.isPlainObject(n);
        t.each(n, function (n, u) {
            o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
        })
    }

    var m, v, g = 0, y = window.document, x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        b = /^(?:text|application)\/javascript/i, w = /^(?:text|application)\/xml/i, E = "application/json",
        j = "text/html", S = /^\s*$/, T = y.createElement("a");
    T.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, n) {
        if (!("type" in e)) return t.ajax(e);
        var r, i, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++g, l = y.createElement("script"),
            f = window[c], h = function (e) {
                t(l).triggerHandler("error", e || "abort")
            }, p = {abort: h};
        return n && n.promise(p), t(l).on("load error", function (o, u) {
            clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, r && t.isFunction(f) && f(r[0]), f = r = void 0
        }), !1 === o(p, e) ? (h("abort"), p) : (window[c] = function () {
            r = arguments
        }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function () {
            h("timeout")
        }, e.timeout)), p)
    }, t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function () {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: E,
            xml: "application/xml, text/xml",
            html: j,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    }, t.ajax = function (e) {
        var n, i = t.extend({}, e || {}), u = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings) void 0 === i[m] && (i[m] = t.ajaxSettings[m]);
        r(i), i.crossDomain || ((n = y.createElement("a")).href = i.url, n.href = n.href, i.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host), i.url || (i.url = window.location.toString()), h(i);
        var p = i.dataType, d = /\?.+=\?/.test(i.url);
        if (d && (p = "jsonp"), !1 !== i.cache && (e && !0 === e.cache || "script" != p && "jsonp" != p) || (i.url = f(i.url, "_=" + Date.now())), "jsonp" == p) return d || (i.url = f(i.url, i.jsonp ? i.jsonp + "=?" : !1 === i.jsonp ? "" : "callback=?")), t.ajaxJSONP(i, u);
        var g, x = i.accepts[p], b = {}, w = function (t, e) {
            b[t.toLowerCase()] = [t, e]
        }, E = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol, j = i.xhr(), N = j.setRequestHeader;
        if (u && u.promise(j), i.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", x || "*/*"), (x = i.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), j.overrideMimeType && j.overrideMimeType(x)), (i.contentType || !1 !== i.contentType && i.data && "GET" != i.type.toUpperCase()) && w("Content-Type", i.contentType || "application/x-www-form-urlencoded"), i.headers) for (v in i.headers) w(v, i.headers[v]);
        if (j.setRequestHeader = w, j.onreadystatechange = function () {
            if (4 == j.readyState) {
                j.onreadystatechange = c, clearTimeout(g);
                var e, n = !1;
                if (j.status >= 200 && j.status < 300 || 304 == j.status || 0 == j.status && "file:" == E) {
                    p = p || l(i.mimeType || j.getResponseHeader("content-type")), e = j.responseText;
                    try {
                        "script" == p ? (0, eval)(e) : "xml" == p ? e = j.responseXML : "json" == p && (e = S.test(e) ? null : t.parseJSON(e))
                    } catch (t) {
                        n = t
                    }
                    n ? s(n, "parsererror", j, i, u) : a(e, j, i, u)
                } else s(j.statusText || null, j.status ? "error" : "abort", j, i, u)
            }
        }, !1 === o(j, i)) return j.abort(), s(null, "abort", j, i, u), j;
        if (i.xhrFields) for (v in i.xhrFields) j[v] = i.xhrFields[v];
        var C = !("async" in i) || i.async;
        j.open(i.type, i.url, C, i.username, i.password);
        for (v in b) N.apply(j, b[v]);
        return i.timeout > 0 && (g = setTimeout(function () {
            j.onreadystatechange = c, j.abort(), s(null, "timeout", j, i, u)
        }, i.timeout)), j.send(i.data ? i.data : null), j
    }, t.get = function () {
        return t.ajax(p.apply(null, arguments))
    }, t.post = function () {
        var e = p.apply(null, arguments);
        return e.type = "POST", t.ajax(e)
    }, t.getJSON = function () {
        var e = p.apply(null, arguments);
        return e.dataType = "json", t.ajax(e)
    }, t.fn.load = function (e, n, r) {
        if (!this.length) return this;
        var i, o = this, a = e.split(/\s/), s = p(e, n, r), u = s.success;
        return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (e) {
            o.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e), u && u.apply(o, arguments)
        }, t.ajax(s), this
    };
    var N = encodeURIComponent;
    t.param = function (e, n) {
        var r = [];
        return r.add = function (e, n) {
            t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(N(e) + "=" + N(n))
        }, d(r, e, n), r.join("&").replace(/%20/g, "+")
    }
}(Zepto), function (t) {
    var e = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%!([\s\S]+?)%>/g, escape: /<%=([\s\S]+?)%>/g}, n = /(.)^/,
        r = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        i = /\\|'|\r|\n|\u2028|\u2029/g, o = function (t) {
            return "\\" + r[t]
        }, a = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"};
    t.keys = function (t) {
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e
    };
    t.escape = function (e) {
        var n = function (t) {
            return e[t]
        }, r = "(?:" + t.keys(e).join("|") + ")", i = RegExp(r), o = RegExp(r, "g");
        return function (t) {
            return t = null == t ? "" : "" + t, i.test(t) ? t.replace(o, n) : t
        }
    }(a);
    var s = function (r, a, s) {
        !a && s && (a = s), a = a || {}, a = t.extend(a, e);
        var u = RegExp([(a.escape || n).source, (a.interpolate || n).source, (a.evaluate || n).source].join("|") + "|$", "g"),
            c = 0, l = "__p+='";
        (r = r.replace(/<%@([\s\S]+?)%>/g, "@@$1@@")).replace(u, function (t, e, n, a, s) {
            return l += r.slice(c, s).replace(i, o), c = s + t.length, e ? l += "'+\n((__t=(" + e + "))==null?'':$.escape(__t))+\n'" : n ? l += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : a && (l += "';\n" + a + "\n__p+='"), t
        }), l = l.replace(/@@([\s\S]+?)@@/g, "<%@$1%>"), l += "';\n", a.variable || (l = "with(obj||{}){\n" + l + "}\n"), l = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + l + "return __p;\n";
        var f;
        try {
            f = new Function(a.variable || "obj", "$", l)
        } catch (t) {
            throw t.source = l, t
        }
        var h = function (e) {
            return f.call(this, e, t)
        }, p = a.variable || "obj";
        return h.source = "function(" + p + "){\n" + l + "}", h
    };
    t.tmpl = function (t, e) {
        return s(t)(e)
    }
}(Zepto), window.$ = Zepto;
!function (e) {
    var t, n, i = 480, a = e.getElementsByTagName("html")[0], m = window.devicePixelRatio,
        o = document.querySelector('meta[name="do-rem-meta-change"]'),
        c = document.querySelector('meta[name="viewport-fit-val"]'), r = o && "true" == o.content,
        l = c ? c.content : "cover";
    l && (l = "viewport-fit=" + l);
    var d = function () {
        var e = Math.min(a.offsetWidth, i);
        t != e && (a.style.fontSize = 100 / 750 * (t = e) + "px")
    }, s = function () {
        for (var t = document.getElementsByTagName("meta"), n = 0, i = t.length; n < i; n++) {
            var a = t[n].content;
            if (/^viewport$/i.test(t[n].name)) return l && a && (t[n].content = a.replace(/viewport-fit=[^=,]*/, l), !/viewport-fit/i.test(t[n].content) && (t[n].content += "," + l)), t[n]
        }
        var m = e.createElement("div"),
            o = '<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>';
        return l && (o += "," + l), m.innerHTML = o, (e.getElementsByTagName("head")[0] || e.body).appendChild(m.lastChild)
    };
    if (addEventListener("resize", function () {
        clearTimeout(n), n = setTimeout(d, 200)
    }, !1), r) {
        var u = s();
        if (m > 1) {
            var v = 1 / m - .01,
                f = "width=device-width,initial-scale=" + v + ",minimum-scale=" + v + ",maximum-scale=" + v + ",user-scalable=no";
            l && (f += "," + l), i = 480 * m, u.content = f
        }
    } else s();
    d()
}(document);

function setComboHash(e) {
    var t = e.length;
    if (!(t < 2)) {
        data.comboSyntax && (comboSyntax = data.comboSyntax), data.comboMaxLength && (comboMaxLength = data.comboMaxLength), data.comboSuffix && (comboSuffix = data.comboSuffix), comboExcludes = data.comboExcludes;
        for (var r = [], n = 0; n < t; n++) {
            var a = e[n];
            comboHash[a] || Module.get(a).status < FETCHING && !isExcluded(a) && !isComboUri(a) && r.push(a)
        }
        r.length > 1 && paths2hash(uris2paths(r))
    }
}

function setRequestUri(e) {
    e.requestUri = comboHash[e.uri] || e.uri
}

function uris2paths(e) {
    return meta2paths(uris2meta(e))
}

function uris2meta(e) {
    for (var t = {__KEYS: []}, r = 0, n = e.length; r < n; r++) for (var a = e[r].replace("://", "__").split("/"), o = t, s = 0, i = a.length; s < i; s++) {
        var u = a[s];
        o[u] || (o[u] = {__KEYS: []}, o.__KEYS.push(u)), o = o[u]
    }
    return t
}

function meta2paths(e) {
    for (var t = [], r = e.__KEYS, n = 0, a = r.length; n < a; n++) {
        for (var o = r[n], s = o, i = e[o], u = i.__KEYS; 1 === u.length;) s += "/" + u[0], u = (i = i[u[0]]).__KEYS;
        u.length && t.push([s.replace("__", "://"), meta2arr(i)])
    }
    return t
}

function meta2arr(e) {
    for (var t = [], r = e.__KEYS, n = 0, a = r.length; n < a; n++) {
        var o = r[n], s = meta2arr(e[o]), i = s.length;
        if (i) for (var u = 0; u < i; u++) t.push(o + "/" + s[u]); else t.push(o)
    }
    return t
}

function paths2hash(e) {
    for (var t = 0, r = e.length; t < r; t++) for (var n = e[t], a = n[0] + "/", o = files2group(n[1]), s = 0, i = o.length; s < i; s++) setHash(a, o[s]);
    return comboHash
}

function setHash(e, t) {
    for (var r = [], n = 0, a = t.length; n < a; n++) r[n] = t[n].replace(/\?.*$/, "");
    var o = e + comboSyntax[0] + r.join(comboSyntax[1]);
    comboSuffix && (o += comboSuffix);
    var s = o.length > comboMaxLength;
    if (t.length > 1 && s) {
        var i = splitFiles(t, comboMaxLength - (e + comboSyntax[0]).length);
        setHash(e, i[0]), setHash(e, i[1])
    } else {
        if (s) throw new Error("The combo url is too long: " + o);
        for (var n = 0, a = t.length; n < a; n++) comboHash[e + t[n]] = o
    }
}

function splitFiles(e, t) {
    for (var r = comboSyntax[1], n = e[0], a = 1, o = e.length; a < o; a++) if ((n += r + e[a]).length > t) return [e.splice(0, a), e]
}

function files2group(e) {
    for (var t = [], r = {}, n = 0, a = e.length; n < a; n++) {
        var o = e[n], s = getExt(o);
        s && (r[s] || (r[s] = [])).push(o)
    }
    for (var i in r) r.hasOwnProperty(i) && t.push(r[i]);
    return t
}

function getExt(e) {
    var t = e.lastIndexOf(".");
    return t >= 0 ? e.substring(t) : ""
}

function isExcluded(e) {
    if (comboExcludes) return comboExcludes.test ? comboExcludes.test(e) : comboExcludes(e)
}

function isComboUri(e) {
    var t = data.comboSyntax || ["??", ","], r = t[0], n = t[1];
    return r && e.indexOf(r) > 0 || n && e.indexOf(n) > 0
}

!function (e, t) {
    function r(e) {
        return function (t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        }
    }

    function n() {
        return A++
    }

    function a(e) {
        return e.match(O)[0]
    }

    function o(e) {
        for (e = e.replace(U, "/"); e.match(D);) e = e.replace(D, "/");
        return e
    }

    function s(e) {
        var t = e.length - 1, r = e.charAt(t);
        return "#" === r ? e.substring(0, t) : ".js" === e.substring(t - 2) || e.indexOf("?") > 0 || ".css" === e.substring(t - 3) || "/" === r ? e : e + ".js"
    }

    function i(e) {
        var t = x.alias;
        return t && y(t[e]) ? t[e] : e
    }

    function u(e) {
        var t, r = x.paths;
        return r && (t = e.match(R)) && y(r[t[1]]) && (e = r[t[1]] + t[2]), e
    }

    function c(e) {
        var t = x.vars;
        return t && e.indexOf("{") > -1 && (e = e.replace(I, function (e, r) {
            return y(t[r]) ? t[r] : e
        })), e
    }

    function l(e) {
        var t = x.map, r = e;
        if (t) for (var n = 0, a = t.length; n < a; n++) {
            var o = t[n];
            r = T(o) ? o(r) || r : r.replace(o[0], o[1])
        }
        return r
    }

    function f(e, t) {
        var r, n = e.charAt(0);
        if (M.test(e)) r = e; else if ("." === n) r = o((t ? a(t) : x.cwd) + e); else if ("/" === n) {
            var s = x.cwd.match(q);
            r = s ? s[0] + e.substring(1) : e
        } else r = x.base + e;
        return r
    }

    function h(e, t) {
        if (!e) return "";
        var r = f(e = s(e = c(e = u(e = i(e)))), t);
        return r = l(r)
    }

    function d(e, t, r) {
        var n = B.test(e), a = L.createElement(n ? "link" : "script");
        if (r) {
            var o = T(r) ? r(e) : r;
            o && (a.charset = o)
        }
        v(a, t, n), n ? (a.rel = "stylesheet", a.href = e) : (a.async = !0, a.src = e), w = a, Y ? K.insertBefore(a, Y) : K.appendChild(a), w = null
    }

    function v(e, t, r) {
        !r || !X && "onload" in e ? e.onload = e.onerror = e.onreadystatechange = function () {
            k.test(e.readyState) && (e.onload = e.onerror = e.onreadystatechange = null, r || x.debug || K.removeChild(e), e = null, t())
        } : setTimeout(function () {
            g(e, t)
        }, 1)
    }

    function g(e, t) {
        var r, n = e.sheet;
        if (X) n && (r = !0); else if (n) try {
            n.cssRules && (r = !0)
        } catch (e) {
            "NS_ERROR_DOM_SECURITY_ERR" === e.name && (r = !0)
        }
        setTimeout(function () {
            r ? t() : g(e, t)
        }, 20)
    }

    function p() {
        if (w) return w;
        if (j && "interactive" === j.readyState) return j;
        for (var e = K.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
            var r = e[t];
            if ("interactive" === r.readyState) return j = r
        }
    }

    function m(e) {
        var t = [];
        return e.replace(W, "").replace(P, function (e, r, n) {
            n && t.push(n)
        }), t
    }

    function b(e, t) {
        this.uri = e, this.dependencies = t || [], this.exports = null, this.status = 0, this._waitings = {}, this._remain = 0
    }

    if (!e.seajs) {
        var E = e.seajs = {version: "2.1.1"}, x = E.data = {}, _ = r("Object"), y = r("String"),
            S = Array.isArray || r("Array"), T = r("Function"), A = 0, C = x.events = {};
        E.on = function (e, t) {
            return (C[e] || (C[e] = [])).push(t), E
        }, E.off = function (e, t) {
            if (!e && !t) return C = x.events = {}, E;
            var r = C[e];
            if (r) if (t) for (var n = r.length - 1; n >= 0; n--) r[n] === t && r.splice(n, 1); else delete C[e];
            return E
        };
        var w, j, H, N = E.emit = function (e, t) {
                var r, n = C[e];
                if (n) for (n = n.slice(); r = n.shift();) r(t);
                return E
            }, O = /[^?#]*\//, U = /\/\.\//g, D = /\/[^/]+\/\.\.\//, R = /^([^/:]+)(\/.+)$/, I = /{([^{]+)}/g,
            M = /^\/\/.|:\//, q = /^.*?\/\/.*?\//, L = document, G = location, V = a(G.href),
            F = L.getElementsByTagName("script"), $ = a(function (e) {
                return e.hasAttribute ? e.src : e.getAttribute("src", 4)
            }(L.getElementById("seajsnode") || F[F.length - 1]) || V),
            K = L.getElementsByTagName("head")[0] || L.documentElement, Y = K.getElementsByTagName("base")[0],
            B = /\.css(?:\?|$)/i, k = /^(?:loaded|complete|undefined)$/,
            X = 1 * navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/, "$1") < 536,
            P = /"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,
            W = /\\\\/g, z = E.cache = {}, J = {}, Q = {}, Z = {},
            ee = b.STATUS = {FETCHING: 1, SAVED: 2, LOADING: 3, LOADED: 4, EXECUTING: 5, EXECUTED: 6};
        b.prototype.resolve = function () {
            for (var e = this, t = e.dependencies, r = [], n = 0, a = t.length; n < a; n++) r[n] = b.resolve(t[n], e.uri);
            return r
        }, b.prototype.load = function () {
            var e = this;
            if (!(e.status >= ee.LOADING)) {
                e.status = ee.LOADING;
                var t = e.resolve();
                N("load", t);
                for (var r, n = e._remain = t.length, a = 0; a < n; a++) (r = b.get(t[a])).status < ee.LOADED ? r._waitings[e.uri] = (r._waitings[e.uri] || 0) + 1 : e._remain--;
                if (0 !== e._remain) {
                    var o = {};
                    for (a = 0; a < n; a++) (r = z[t[a]]).status < ee.FETCHING ? r.fetch(o) : r.status === ee.SAVED && r.load();
                    for (var s in o) o.hasOwnProperty(s) && o[s]()
                } else e.onload()
            }
        }, b.prototype.onload = function () {
            var e = this;
            e.status = ee.LOADED, e.callback && e.callback();
            var t, r, n = e._waitings;
            for (t in n) n.hasOwnProperty(t) && ((r = z[t])._remain -= n[t], 0 === r._remain && r.onload());
            delete e._waitings, delete e._remain
        }, b.prototype.fetch = function (e) {
            function t() {
                d(o.requestUri, o.onRequest, o.charset)
            }

            function r() {
                delete J[s], Q[s] = !0, H && (b.save(a, H), H = null);
                var e, t = Z[s];
                for (delete Z[s]; e = t.shift();) e.load()
            }

            var n = this, a = n.uri;
            n.status = ee.FETCHING;
            var o = {uri: a};
            N("fetch", o);
            var s = o.requestUri || a;
            s && !Q[s] ? J[s] ? Z[s].push(n) : (J[s] = !0, Z[s] = [n], N("request", o = {
                uri: a,
                requestUri: s,
                onRequest: r,
                charset: x.charset
            }), o.requested || (e ? e[o.requestUri] = t : t())) : n.load()
        }, b.prototype.exec = function () {
            function e(t) {
                return b.get(e.resolve(t)).exec()
            }

            var t = this;
            if (t.status >= ee.EXECUTING) return t.exports;
            t.status = ee.EXECUTING;
            var r = t.uri;
            e.resolve = function (e) {
                return b.resolve(e, r)
            }, e.async = function (t, a) {
                return b.use(t, a, r + "_async_" + n()), e
            };
            var a = t.factory, o = T(a) ? a(e, t.exports = {}, t) : a;
            return void 0 === o && (o = t.exports), null !== o || B.test(r) || N("error", t), delete t.factory, t.exports = o, o && (_(o) || T(o)) && (o.__moduleid__ = t.id), t.status = ee.EXECUTED, N("exec", t), o
        }, b.resolve = function (e, t) {
            var r = {id: e, refUri: t};
            return N("resolve", r), r.uri || h(r.id, t)
        }, b.define = function (e, t, r) {
            var n = arguments.length;
            1 === n ? (r = e, e = void 0) : 2 === n && (r = t, S(e) ? (t = e, e = void 0) : t = void 0), !S(t) && T(r) && (t = m(r.toString()));
            var a = {id: e, uri: b.resolve(e), deps: t, factory: r};
            if (!a.uri && L.attachEvent) {
                var o = p();
                o && (a.uri = o.src)
            }
            N("define", a), a.uri ? b.save(a.uri, a) : H = a
        }, b.save = function (e, t) {
            var r = b.get(e);
            r.status < ee.SAVED && (r.id = t.id || e, r.dependencies = t.deps || [], r.factory = t.factory, r.status = ee.SAVED)
        }, b.get = function (e, t) {
            return z[e] || (z[e] = new b(e, t))
        }, b.use = function (t, r, n) {
            var a = b.get(n, S(t) ? t : [t]);
            a.callback = function () {
                for (var t = [], n = a.resolve(), o = 0, s = n.length; o < s; o++) t[o] = z[n[o]].exec();
                r && r.apply(e, t), delete a.callback
            }, a.load()
        }, b.preload = function (e) {
            var t = x.preload, r = t.length;
            r ? b.use(t, function () {
                t.splice(0, r), b.preload(e)
            }, x.cwd + "_preload_" + n()) : e()
        }, E.use = function (e, t) {
            return b.preload(function () {
                b.use(e, t, x.cwd + "_use_" + n())
            }), E
        }, b.define.cmd = {}, e.define = b.define, E.Module = b, x.fetchedList = Q, x.cid = n, E.resolve = h, E.require = function (e) {
            return (z[b.resolve(e)] || {}).exports
        };
        var te = /^(.+?\/)(\?\?)?(seajs\/)+/;
        x.base = ($.match(te) || ["", $])[1], x.dir = $, x.cwd = V, x.charset = "utf-8", x.preload = function () {
            var e = [], t = G.search.replace(/(seajs-\w+)(&|$)/g, "$1=1$2");
            return (t += " " + L.cookie).replace(/(seajs-\w+)=1/g, function (t, r) {
                e.push(r)
            }), e
        }(), E.config = function (e) {
            for (var t in e) {
                var r = e[t], n = x[t];
                if (n && _(n)) for (var a in r) n[a] = r[a]; else S(n) ? r = n.concat(r) : "base" === t && ("/" === r.slice(-1) || (r += "/"), r = f(r)), x[t] = r
            }
            return N("config", e), E
        }
    }
}(this);
var Module = seajs.Module, FETCHING = Module.STATUS.FETCHING, data = seajs.data, comboHash = data.comboHash = {},
    comboSyntax = ["??", ","], comboMaxLength = 2e3, comboExcludes, comboSuffix;
if (seajs.on("load", setComboHash), seajs.on("fetch", setRequestUri), data.test) {
    var test = seajs.test || (seajs.test = {});
    test.uris2paths = uris2paths, test.paths2hash = paths2hash
}
var script = function () {
        var e = document.getElementsByTagName("script");
        return e[e.length - 1]
    }(), defaultVersion = script.getAttribute("defaultCellVersion") || "0.0.2", cellReg = /(cell(ex)?-[\w-_\d]+)/,
    verReg = /@\d+\.\d+\.\d+/, cellModsVersionCaches = {};
window.seajs.config({
    base: "//g.alicdn.com/cell", map: [function (e) {
        if (e = e.replace("@ali/", ""), cellReg.test(e)) {
            var t;
            e = (e = e.replace(verReg, function (e) {
                return t = e.slice(1), ""
            })).replace(cellReg, function (e) {
                return t ? cellModsVersionCaches[e] = t : t = cellModsVersionCaches[e] || defaultVersion, e + "/" + t + "/seajs/index"
            })
        }
        return e
    }]
});
!function (c) {
    var d, k = c.Zepto, s = function () {
        }, a = 0, M = "", l = [], g = l.slice, p = null, t = c, n = document, r = k(n), e = JSON.stringify, I = "\x1e",
        i = "object", y = "prototype", _ = "params", V = "path", o = /[#?].*$/, f = /([^=&?\/#]+)=?([^&#?]*)/g,
        u = /(?!^)=|&/, T = function (t) {
            return (t || "mx_") + a++
        }, $ = T(), b = {
            rootId: T(), defaultView: $, error: function (t) {
                throw t
            }
        }, h = b.hasOwnProperty, x = function (t) {
            return typeof t == i ? t : n.getElementById(t)
        }, v = function (t) {
            return !t || typeof t != i
        }, m = function (t, e, n) {
            var r, i, o, a = 0;
            for (o in t) r = t[o], i = e[o], v(r) && i == r || (a = n[o] = 1), e[o] = r;
            return a
        }, w = function (t, e, n) {
            if (t = x(t), e = x(e), t && e && !(n = t == e)) try {
                n = e.contains ? e.contains(t) : 16 & e.compareDocumentPosition(t)
            } catch (t) {
            }
            return n
        }, A = Object.assign || function (t, e, n) {
            for (n in e) t[n] = e[n];
            return t
        }, U = function (t, e) {
            e && !U[t] && (U[t] = 1, k("head").append("<style>" + e + "</style>"))
        }, O = function (t, e, n, r, i, o) {
            for (e = e || l, N(t) || (t = [t]), N(e) || (e = [e]), r = 0; r < t.length; r++) {
                o = t[r];
                try {
                    i = o && o.apply(n, e)
                } catch (t) {
                    b.error(t)
                }
            }
            return i
        }, S = function (t, e) {
            return t && h.call(t, e)
        }, C = function (t, e, n) {
            var r, i;
            for (r in e) i = e[r], n[r] = (i + M).charAt(0) == I ? t.get(i) : i
        }, j = function (t, e) {
            return e.f - t.f || e.t - t.t
        }, L = function (t, e, n, r) {
            (r = this).c = [], r.b = 0 | e || 5, r.x = r.b + (t || 20), r.r = n
        };
    A(L[y], {
        get: function (t) {
            var e = this.c[I + t];
            return e && (e.f++, e.t = a++, e = e.v), e
        }, set: function (t, e) {
            var n = this.c, r = I + t, i = n[r], o = this.b;
            if (!i) {
                if (n.length >= this.x) for (n.sort(j); o--;) 0 < (i = n.pop()).f && this.del(i.o);
                i = {o: t}, n.push(i), n[r] = i
            }
            i.v = e, i.f = 1, i.t = a++
        }, del: function (t) {
            t = I + t;
            var e = this.c, n = e[t], r = this.r;
            n && (n.f = -1, n.v = M, delete e[t], r && O(r, n.o))
        }, has: function (t) {
            return S(this.c, I + t)
        }
    });
    var q, P = s, E = k.isFunction, H = function (t, e) {
        var n = b.views || s;
        if (t && t.prototype && t.prototype instanceof G.View) return e(t);
        if ($ == t) return e(Qt.extend());
        var r, i = [], o = 0, a = function () {
            o || e.apply(G, i)
        }, f = function (t, e) {
            var n = function (t) {
                i[e] || (o--, i[e] = t, a())
            };
            (t = t(n)) && t.then && t.then(n)
        };
        if (t) {
            N(t) || (t = [t]);
            for (var u = 0; u < t.length; u++) (r = n[t[u]]) ? (E(r) && !r.extend ? (o++, f(r, u)) : i[u] = r, a()) : c.seajs ? seajs.use(t, e) : c.require && (i[u] = require(t[u]), e && e.apply(p, i))
        } else e()
    }, R = function () {
    }, Z = function (t, e, n, r, i) {
        return R[y] = e[y], i = new R, A(i, n), A(t, r), (i.constructor = t)[y] = i, t
    }, B = k.isPlainObject, N = k.isArray, F = function (t, e, n) {
        k(t).html(e), r.triggerHandler({type: "htmlchange", target: t, vId: n})
    }, D = new L, z = function (t, e, n) {
        try {
            n = decodeURIComponent(n)
        } catch (t) {
        }
        q[e] = n
    }, J = function (t) {
        var e, n = D.get(t);
        return n || (q = {}, t == (e = t.replace(o, M)) && u.test(e) && (e = M), t.replace(e, M).replace(f, z), D.set(t, n = {
            a: e,
            b: q
        })), {path: n.a, params: A({}, n.b)}
    }, K = Object.keys || function (t, e, n) {
        for (n in e = [], t) S(t, n) && e.push(n);
        return e
    }, G = {
        config: function (t, e) {
            return e = b, t && (e = B(t) ? A(e, t) : e[t]), e
        }, boot: function (t) {
            A(b, t), H(b.exts, function () {
                rt().mountView(b.defaultView), Ht.on("changed", at)
            })
        }, toMap: function (t, e) {
            var n, r, i, o = {};
            if (t && (i = t.length)) for (n = 0; n < i; n++) r = t[n], o[e && r ? r[e] : r] = e ? r : 1 + (0 | o[r]);
            return o
        }, toTry: O, toUrl: function (t, e, n) {
            var r, i, o, a = [];
            for (i in e) r = e[i] + M, (!n || r || S(n, i)) && (r = encodeURIComponent(r), a.push(o = i + "=" + r));
            return o && (t += (t && (~t.indexOf("?") ? "&" : "?")) + a.join("&")), t
        }, parseUrl: J, mix: A, has: S, keys: K, inside: w, node: x, applyStyle: U, guid: T, Cache: L, use: H, define: P
    }, Q = {
        fire: function (t, e, n, r) {
            var i, o, a, f, u = this, c = u[I + t];
            if (e || (e = {}), e.type || (e.type = t), c) for (o = (i = c.length) - 1; i--;) (f = c[a = r ? i : o - i]).f ? (f.x = 1, O(f.f, e, u), f.x = M) : f.x || (c.splice(a, 1), o--);
            (c = u["on" + t]) && O(c, e, u), n && u.off(t)
        }, on: function (t, e) {
            var n = I + t;
            (this[n] || (this[n] = [])).push({f: e})
        }, off: function (t, e) {
            var n, r, i = I + t, o = this[i];
            if (e) {
                if (o) for (n = o.length; n--;) if ((r = o[n]).f == e) {
                    r.f = M;
                    break
                }
            } else delete this[i], delete this["on" + t]
        }
    };
    G.Event = Q;
    var W, X, Y, tt = k.trim, et = function (t, e, n) {
        t.$d || t.$h || t.$cc != t.$rc || (t.$cr || (t.$cr = 1, t.$ca = 0, t.fire("created")), e = t.id, (n = it[t.pId]) && !S(n.$r, e) && (n.$r[e] = 1, n.$rc++, et(n)))
    }, nt = function (t, e, n, r) {
        !t.$ca && t.$cr && (t.$cr = 0, t.$ca = 1, t.fire("alter", e), n = t.id, (r = it[t.pId]) && S(r.$r, n) && (r.$rc--, delete r.$r[n], nt(r, e)))
    }, rt = function (t, e) {
        return W || (d = n.body, t = b.rootId, x(t) || (d.id = t), W = new ft(t)), W
    }, it = {}, ot = function (t, e, n) {
        if (t && t.$g != Y && (n = t.$v) && 0 < n.$s) {
            qt(n, e) && n.render();
            for (var r = t.children(), i = r.length, o = 0; o < i;) ot(it[r[o++]], e)
        }
    }, at = function (t) {
        var e, n = rt();
        (e = t.view) ? n.mountView(e.to) : (Y = a++, ot(n, t.keys))
    }, ft = function (t, e, n) {
        var r, i;
        (n = this).id = t, n.$c = {}, n.$cc = 0, n.$rc = 0, n.$s = 1, n.$r = {}, n.$il = [], n.pId = e, i = n, S(it, r = t) || (it[r] = i, ft.fire("add", {vframe: i}), (r = x(r)) && (r.vframe = i))
    };
    A(ft, A({
        all: function () {
            return it
        }, get: function (t) {
            return it[t]
        }
    }, Q)), A(A(ft[y], Q), {
        mountView: function (t, e) {
            var n, r, i, o, a, f, u, c = this, s = c.id, p = x(s);
            if (!c.$a && p && (c.$a = 1, c.$t = p.innerHTML), c.unmountView(), c.$d = 0, p && t) {
                c.path = t, n = J(t), i = n.path, r = ++c.$s, o = n[_], f = c.pId, f = p.getAttribute("mx-datafrom") || f, (u = (u = (u = it[f]) && u.$v) && u.$u) && 0 < t.indexOf(I) && C(u, o, o);
                for (var $, d, l, h = p.attributes, v = function (t, e) {
                    return e.toUpperCase()
                }, m = /^[\w_\d]+$/, g = h.length; g--;) if (d = ($ = h[g]).name, l = $.value, 0 === d.indexOf("view-")) {
                    var y = d.slice(5).replace(/-(\w)/g, v);
                    if ("<%@" == l.slice(0, 3) && "%>" == l.slice(-2)) try {
                        var w = u.$data;
                        l = w[Ut(l, w)]
                    } catch (t) {
                        l = tt(l.slice(3, -2)), u && m.test(l) && (l = u.get(l))
                    }
                    o[y] = l
                }
                A(o, e), H(i, function (t) {
                    if (r == c.$s) {
                        if (!t) return b.error(Error("id:" + s + " cannot load:" + i));
                        a = Gt(t), i = new t({
                            owner: c,
                            id: s
                        }, o, a), c.$v = i, c.$g = Y, zt(i), i.init(o), i.render(), i.$t || (c.$a = 0, i.$p || i.endUpdate())
                    }
                })
            }
        }, unmountView: function () {
            var t, e, n = this, r = n.$v, i = n.id;
            n.$il = [], r && (X || (e = 1, X = {id: i}), n.$d = 1, n.unmountZone(0, 1), nt(n, X), (n.$v = 0) < r.$s && (r.$s = 0, r.fire("destroy", 0, 1, 1), Ft(r, 1), zt(r, 1)), r.$s--, r.owner = p, (t = x(i)) && n.$a && F(t, n.$t, i), e && (X = 0)), n.$s++
        }, mountVframe: function (t, e, n) {
            var r, i = this;
            return nt(i, {id: t}), (r = it[t]) || (S(i.$c, t) || (i.$cl = M, i.$cc++), i.$c[t] = t, r = new ft(t, i.id)), r.mountView(e, n), r
        }, mountZone: function (t, e) {
            var n, r, i, o = this, a = [];
            t = t || o.id;
            var f = k("#" + t + " [mx-view]");
            o.$h = 1;
            var u, c, s, p = {};
            for (n = 0; n < f.length; n++) if (i = (r = f[n]).id || (r.id = T()), !S(p, i)) for (r.$m || (r.$m = 1, a.push([i, r.getAttribute("mx-view")])), c = (u = k("#" + i + " [mx-view]")).length; c--;) p[i = (s = u[c]).id || (s.id = T())] = 1;
            for (; a.length;) a[i = (r = a.shift())[0]] ? b.error(Error("vf.id duplicate:" + i + " at " + o.path)) : o.mountVframe(a[i] = i, r[1], e);
            o.$h = 0, et(o)
        }, unmountVframe: function (t, e) {
            var n, r, i, o, a, f;
            t = t ? this.$c[t] : this.id, (n = it[t]) && (r = n.$cr, i = n.pId, n.unmountView(), a = r, (f = it[o = t]) && (delete it[o], ft.fire("remove", {
                vframe: f,
                fcc: a
            }), (o = x(o)) && (o.vframe = p)), n.id = n.pId = M, (n = it[i]) && S(n.$c, t) && (delete n.$c[t], n.$cl = M, n.$cc--, e || et(n)))
        }, unmountZone: function (t, e) {
            var n, r = this.$c;
            for (n in r) (!t || n != t && w(n, t)) && this.unmountVframe(n, 1);
            e || et(this)
        }, parent: function (t, e) {
            for (e = this, t = t >>> 0 || 1; e && t--;) e = it[e.pId];
            return e
        }, children: function (t) {
            return (t = this).$cl || (t.$cl = K(t.$c))
        }, invoke: function (t, e) {
            var n, r, i, o, a, f = this.$il;
            return (r = this.$v) && r.$p ? n = (i = r[t]) && O(i, e, r) : ((o = f[a = I + t]) && (o.r = e === o.a), o = {
                n: t,
                a: e,
                k: a
            }, f.push(o), f[a] = o), n
        }
    }), G.Vframe = ft, k.fn.invokeView = function () {
        var t, e = this.prop("vframe");
        return e && (t = e.invoke.apply(e, arguments)), t
    };
    var ut = k.find || k.zepto, ct = ut.matchesSelector || ut.matches, st = function (t, e) {
            e = t.data, t.eventTarget = e.e, O(e.f, t, e.v)
        }, pt = function (t, e, n, r, i) {
            i && (e += "." + i.i), r ? k(t).off(e, n) : k(t).on(e, i, n)
        }, $t = new L(30, 10), dt = /(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/, lt = {}, ht = {}, vt = function (t, e) {
            var n, r, i, o, a, f = [], u = t, c = t.getAttribute("mx-" + e), s = [];
            if (c && ((i = $t.get(c)) || ((i = {
                v: (i = c.match(dt) || l)[1],
                n: i[2],
                i: i[3]
            }).p = i.i && O(Function("return " + i.i), l, t), $t.set(c, i)), i = {
                r: c,
                v: i.v || t.getAttribute("mx-owner"),
                p: i.p,
                i: i.i,
                n: i.n
            }, f.push(i)), i && !i.v || ht[e]) {
                if (!(a = t.$v)) for (s.push(u); u != d && (u = u.parentNode);) {
                    if (it[r = u.id] || (r = u.$v)) {
                        a = r;
                        break
                    }
                    s.push(u)
                }
                if (a) {
                    for (; c = s.pop();) c.$v = a;
                    var p = i && !i.v;
                    do {
                        if ((n = it[a]) && (o = n.$v)) {
                            for (r in o.$so[e]) ct(t, r) && f.push({r: r, v: a, n: r});
                            if (p) if (i.v) {
                                var $ = A({}, i);
                                $.v = a, f.push($)
                            } else i.v = a;
                            if (o.$t) break
                        }
                    } while (n && (a = n.pId))
                }
            }
            return f
        }, mt = function (t) {
            for (var e, n, r, i, o, a, f, u, c = t.target, s = t.type, p = []; c != d;) {
                if ((n = vt(c, s)).length) for (p = []; e = n.shift();) {
                    if (!e.v) return b.error(Error("bad " + s + ":" + e.r));
                    if (f || (f = e.v), f != e.v && t.isPropagationStopped()) break;
                    (o = (i = it[e.v]) && i.$v) && (a = o[e.n + I + s]) && (t.eventTarget = c, u = e.p || {}, e.i && 0 < e.i.indexOf(I) && C(o.$u, u, u = {}), t[_] = u, O(a, t, o))
                }
                if ((r = c.$) && r[s] || t.isPropagationStopped()) break;
                p.push(c), c = c.parentNode || d
            }
            for (; c = p.pop();) (r = c.$ || (c.$ = {}))[s] = 1
        }, gt = /\d+\x1d/g, yt = /([\w\-]+)(?:="([\s\S]*?)")?/g,
        wt = {amp: "&", lt: "<", gt: ">", "#34": '"', "#39": "'", "#96": "`"}, bt = /&([^;]+);/g, xt = function (t, e) {
            return wt[e] || t
        }, kt = function (t, e, n, r, i, o, a) {
            var f, u, c = t.id || (t.id = T()), s = e.owner;
            if (i) {
                var p = Bt(Ut(n.attr, r), a), $ = {};
                p.replace(yt, function (t, e, n) {
                    $[e] = n
                });
                for (var d, l, h, v, m, g = n.attrs.length; g--;) l = (d = n.attrs[g]).n, m = d.f, d.v ? (f = 1, u = $[l]) : (v = S($, l), (d.p ? t[m || l] : t.getAttribute(l)) !== (h = d.b ? v : $[l] || M) && (d.p ? (d.q && h.replace(bt, xt), t[m || l] = h) : v ? t.setAttribute(l, h) : t.removeAttribute(l)))
            }
            var y, w, b, x = it[c];
            f && !o && x && (b = (w = J(u))[_], J(x[V])[V] == w[V] && (0 < u.indexOf(I) && C(e.$u, b, b), x[V] = u, (y = x.invoke("assign", b)) && x.invoke("render"))), y || (f && s.unmountVframe(c, u), o && e.setHTML(c, Ut(n.tmpl, r)), f && u && s.mountVframe(c, u))
        }, Mt = function (t, e, n) {
            var r, i = t.$i, o = it[i], a = o && o.$v;
            if (a && (r = a.tmpl)) {
                var f = r.html, u = r.subs;
                if (t.$rd && e) for (var c, s, p, $, d, l, h, v, m = u.length; m--;) {
                    if ($ = p = 0, d = 1, h = (s = u[m]).mask, c = s.pKeys) for (l = c.length; l--;) if (S(e, c[l])) {
                        d = 0;
                        break
                    }
                    if (d) {
                        for (d = 0, l = (c = s.keys).length; l--;) if (S(e, c[l])) {
                            if (d = 1, !h || p && $) {
                                p = s.tmpl, $ = s.attr;
                                break
                            }
                            v = h.charAt(l), p = p || 1 & v, $ = $ || 2 & v
                        }
                        if (d) {
                            var g = k(Bt(s.path, i));
                            for (l = 0; l < g.length;) kt(g[l++], a, s, n, $, p, i)
                        }
                    }
                } else {
                    if (!r[I]) {
                        r[I] = 1;
                        var y, w, b = {}, x = function (t) {
                            return b[t].tmpl
                        };
                        for (y = u.length; y--;) (w = u[y]).s && ((b[w.s] = w).tmpl = w.tmpl.replace(gt, x));
                        f = r.html = f.replace(gt, x)
                    }
                    t.$rd = 1, a.setHTML(t.$t, Ut(f, n))
                }
            }
        }, It = /\\|'/g, _t = /\r|\n/g, Vt = /<%([@=!])?([\s\S]*?)%>|$/g, Tt = function (i) {
            var o = 0, a = "$p+='";
            return i.replace(Vt, function (t, e, n, r) {
                return a += i.slice(o, r).replace(It, "\\$&").replace(_t, "\\n"), o = r + t.length, "@" == e ? a += "';$p+=$i(" + n + ");$p+='" : "=" == e ? a += "'+$e(" + n + ")+'" : "!" == e ? a += "'+$n(" + n + ")+'" : n && (a += "';" + n + ";$p+='"), t
            }), a = "var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&#34;','\\'':'&#39;','`':'&#96;'},$er=/[&<>\"'`]/g,$n=function(v){return v==null?'':''+v},$ef=function(m){return $em[m]},$e=function(v){return $n(v).replace($er,$ef)},$i=function(v,k,f){for(f=$$[$g];--f;)if($$[k=$g+f]===v)return k;$$[k=$g+$$[$g]++]=v;return k},$um={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$uf=function(m){return $um[m]},$uq=/[!')(*]/g,$eu=function(v){return encodeURIComponent($n(v)).replace($uq,$uf)},$qr=/[\\\\'\"]/g,$eq=function(v){return $n(v).replace($qr,'\\\\$&')};" + (a += "';") + "return $p", Function("$g", "$$", a)
        }, At = new L, Ut = function (t, e) {
            var n = At.get(t);
            return n || (n = Tt(t), At.set(t, n)), n.call(e, I, e)
        }, Ot = function (t) {
            this.$i = t, this.$t = t, this.$data = {"\x1e": 1}, this.$keys = {}
        };
    A(Ot.prototype, {
        to: function (t, e) {
            return (e = this).$t = t, e
        }, get: function (t) {
            var e = this.$data;
            return t && (e = e[t]), e
        }, gain: function (t) {
            for (var e = this.$data, n = t.split("."); e && n.length;) e = e[n.shift()];
            return e
        }, set: function (t) {
            var e = this.$data, n = this.$keys;
            return m(t, e, n), this
        }, digest: function (t) {
            var e = this;
            t && e.set(t), t = e.$data;
            var n = e.$keys;
            return e.$keys = {}, Mt(e, n, t), e
        }, snapshot: function () {
            return this.$ss = e(this.$data), this
        }, altered: function () {
            if (this.$ss) return this.$ss != e(this.$data)
        }
    });
    var St = {}, Ct = {}, jt = {}, Lt = 0, qt = function (t, e, n) {
        var r = t.$os;
        if (r) for (var i = r.length; i--;) {
            var o = r[i];
            if (n = S(e, o)) break
        }
        return n
    }, Pt = function (t) {
        t = (t + M).split(",");
        for (var e, n = 0; n < t.length; n++) e = t[n], S(Ct, e) ? Ct[e]++ : Ct[e] = 1;
        return t
    }, Et = function (t) {
        for (var e, n = 0; n < t.length; n++) e = t[n], S(Ct, e) && (--Ct[e] || (delete Ct[e], delete St[e]))
    }, Ht = A({
        get: function (t) {
            var e = t ? St[t] : St;
            return e
        }, set: function (t) {
            return Lt = m(t, St, jt) || Lt, this
        }, digest: function (t) {
            t && Ht.set(t), Lt && (this.fire("changed", {keys: jt}), Lt = 0, jt = {})
        }, diff: function () {
            return jt
        }, clean: function (t) {
            return {
                ctor: function () {
                    t = Pt(t), this.on("destroy", function () {
                        Et(t)
                    })
                }
            }
        }
    }, Q);
    G.State = Ht;
    var Rt = /^(\$?)([^<]+?)<([^>]+)>$/, Zt = /\x1f/g, Bt = function (t, e) {
        return (t + M).replace(Zt, e || this.id)
    }, Nt = function (t, e, n) {
        return t.$l ? n = t : ((n = function (t) {
            O(n.$l, t, this)
        }).$l = [t], n.$m = 1), n.$l = n.$l.concat(e.$l || e), n
    }, Ft = function (t, e) {
        var n, r, i = t.$r;
        for (n in i) r = i[n], (e || r.x) && Dt(i, n, 1)
    }, Dt = function (t, e, n, r) {
        var i, o, a = t[e];
        return a && a != r && ((i = (o = a.e).destroy) && n && O(i, l, o), delete t[e]), o
    }, zt = function (t, e) {
        var n, r, i, o, a, f, u, c = t.$eo, s = t.$so;
        for (n in c) o = s[i = n], a = e, void 0, f = 0 | lt[i], u = a ? -1 : 1, f && a !== f || pt(d, i, mt, a), lt[i] = f + u, o && (ht[i] = (0 | ht[i]) + u);
        for (n = (c = t.$el).length; n--;) r = c[n], pt(r.e, r.n, st, e, {i: t.id, v: t, f: r.f, e: r.e})
    }, Jt = [], Kt = {win: t, doc: n}, Gt = function (t) {
        if (!t[I]) {
            t[I] = [];
            var e, n, r, i, o, a, f, u, c, s = t[y], p = {}, $ = [], d = {}, l = {};
            if (u = 0, n = s.mixins) {
                for (c = n.length; u < c;) for (f in o = n[u++]) e = o[f], r = l[f], "ctor" != f ? (Rt.test(f) && (r ? e = Nt(r, e) : e.$m = 1), l[f] = e) : t[I].push(e);
                for (f in l) S(s, f) || (s[f] = l[f])
            }
            for (f in s) if (e = s[f], n = f.match(Rt)) for (a = n[1], r = n[2], i = n[3].split(","); u = i.pop();) {
                if (o = Kt[r], c = 1, a) {
                    if (o) {
                        $.push({f: e, e: o, n: u});
                        continue
                    }
                    c = 2, (o = d[u]) || (o = d[u] = {}), o[r] = 1
                }
                p[u] = p[u] | c, (o = s[u = r + I + u]) ? o.$m && (e.$m ? s[u] = Nt(o, e) : S(s, f) && (s[u] = e)) : s[u] = e
            }
            v = (h = s).render, h.render = function () {
                0 < (m = this).$s && (m.$s++, m.fire("rendercall"), Ft(m), O(v, g.call(arguments), m))
            }, s.$eo = p, s.$el = $, s.$so = d, s.$t = !!s.tmpl
        }
        var h, v, m;
        return t[I]
    }, Qt = function (t, e) {
        A(e = this, t), e.$r = {}, e.$s = 1, e.updater = e.$u = new Ot(e.id), O(Jt, t, e)
    }, Wt = Qt[y];
    A(Qt, {
        merge: function (t, e) {
            (e = t && t.ctor) && Jt.push(e), A(Wt, t)
        }, extend: function (t, e) {
            var r = this, n = (t = t || {}).ctor, i = [];
            n && i.push(n);
            var o = function (t, e, n) {
                r.call(this, t, e), O(i.concat(n), e, this)
            };
            return o.extend = r.extend, Z(o, r, t, e)
        }
    }), A(A(Wt, Q), {
        render: s, init: s, wrapEvent: Bt, beginUpdate: function (t, e) {
            0 < (e = this).$s && e.$p && (e.owner.unmountZone(t, 1), e.fire("prerender", {id: t}))
        }, endUpdate: function (t, e, n, r) {
            0 < (e = this).$s && (t = t || e.id, e.fire("rendered", {id: t}), r = e.$p, e.$p = 1, (n = e.owner).mountZone(t), r || setTimeout(e.wrapAsync(function () {
                !function (t, e, n) {
                    for (e = t.$il; e.length;) (n = e.shift()).r || t.invoke(n.n, n.a), delete e[n.k]
                }(n)
            }), 0))
        }, wrapAsync: function (t, e) {
            var n = this, r = n.$s;
            return function () {
                0 < r && r == n.$s && t && t.apply(e || n, arguments)
            }
        }, observeState: function (t) {
            this.$os = (t + M).split(",")
        }, capture: function (t, e, n, r, i) {
            return r = this.$r, e ? (Dt(r, t, 1, e), i = {e: e, x: n}, r[t] = i) : e = (i = r[t]) && i.e || e, e
        }, release: function (t, e) {
            return Dt(this.$r, t, e)
        }, setHTML: function (t, e) {
            var n, r = this.id;
            this.beginUpdate(t), 0 < this.$s && (n = x(t)) && F(n, Bt(e, r), r), this.endUpdate(t)
        }
    }), G.View = Qt;
    var Xt = function (t, e) {
        var n = this, r = t && t.ctor, i = function () {
            var t = arguments;
            n.apply(this, t), r && r.apply(this, t)
        };
        return i.extend = Xt, Z(i, n, t, e)
    };
    A(s[y], Q), s.extend = Xt;
    var Yt = Mt;
    Mt = function (t, e, n) {
        var r = it[t.$i], i = r && r.$v;
        if (i) {
            var o = i.tmpl;
            o && ("[object String]" !== Object.prototype.toString.call(o) ? Yt(t, e, n) : i.setHTML(i.id, k.tmpl(i.tmpl, n)))
        }
    };
    var te = G.View.extend;
    G.View.extend = function (t, e) {
        return e = A({
            create: function (t) {
                var e = t.el, n = t.owner || G.Vframe.get(G.config("rootId")), r = this.__moduleid__;
                if (r) return e = 0 === e.indexOf("#") ? e.slice(1) : e, n.mountVframe(e, r, t), k("#" + e);
                b.error("default create need lib-seajs > 0.0.4 and webpack support")
            }
        }, e), t = A({
            mtopRequest: function (t, e, n) {
                var r, i = "0.0";
                c.MM_UTIL && (i = MM_UTIL.getSpmAB(), r = MM_UTIL.getSearchObj(), k.isArray(r.spm) && (r.spm = r.spm[r.spm.length - 1]), r.spm), t.data || (t.data = {}), t.data.spm || (t.data.spm = i + "." + this.getSpmC()), c.pvid || (c.pvid = i + "_" + (new Date).getTime() + "_" + ("" + Math.random()).slice(2) + "_" + (MM_UTIL && MM_UTIL.cookie ? MM_UTIL.cookie.get("cna").slice(0, 5) : "")), t.data.app_pvid = c.pvid || "", t.data.ctm ? (-1 == t.data.ctm.indexOf("spm-url") && (t.data.ctm = t.data.ctm + ";spm-url:" + ((k.isArray(r.spm) ? r.spm[0] : r.spm) || "")), -1 == t.data.ctm.indexOf("page_url") && (t.data.ctm = t.data.ctm + ";page_url:" + encodeURIComponent(location.href))) : t.data.ctm = "spm-url:" + ((k.isArray(r.spm) ? r.spm[0] : r.spm) || "") + ";page_url:" + encodeURIComponent(location.href), c.MM_MTOP ? (this.optimusTmplConfig && (t.optimusTmplConfig = this.optimusTmplConfig), c.MM_MTOP.send(t, e, n)) : lib.mtop.request(t, e, n)
            }, getSpmC: function (t) {
                t = t || this.id;
                for (var e = document.getElementById(t), n = e.getAttribute("data-spm"), r = document.body; !n && e !== r;) n = (e = e.parentNode).getAttribute("data-spm");
                return n || "0"
            }
        }, t), te.call(this, t, e)
    }, navigator.userAgent.match(/iPhone|iPad|iPod/) && k("<style>[mx-click]{cursor:pointer;}</style>").appendTo("head"), G.Base = s, G.addView = function (t, e) {
        return (b.views = b.views || {})[e.__moduleid__ = t] = e
    }, c.Magix = G
}(window);
!function () {
    var e, a = window.MM_UTIL || window.Util || {};
    window.Util = window.MM_UTIL = a, a.cookie = (((e = function (n, e, t) {
        if (n) {
            if (null != e) document.cookie = n + "=" + e + (t && "Invalid Date" != (t = new Date(t)) ? ";expires=" + t.toGMTString() : ""); else if (e = "", new RegExp("^" + n + "=|; " + n + "=").test(document.cookie)) for (var i = document.cookie.split(";"), o = 0, r = i.length; o < r; o++) if (-1 != i[o].indexOf(n + "=")) return i[o].replace(n + "=", "").trim();
            return e
        }
    }).set = e).get = function (n) {
        return e(n)
    }, e.remove = function (n) {
        return e(n, "", new Date(0))
    }, e), a.isSupportSticky = function () {
        for (var n = ["", "-webkit-", "-ms-", "-moz-", "-o-"], e = "", t = 0; t < n.length; t++) e += "position:" + n[t] + "sticky;";
        var i = document.createElement("div"), o = document.body;
        i.style.cssText = "display:none;" + e, o.appendChild(i);
        var r = /sticky/i.test(window.getComputedStyle(i).position);
        return o.removeChild(i), i = null, r
    };

    function t(n) {
        return 10 <= n ? n : "0" + n
    }

    a.calPxFromRem = function (n) {
        if (!(n = parseFloat(n))) return null;
        var e = $("html").css("font-size");
        return n * (e = parseFloat(e) || 100)
    }, a.calRemFromPx = function (n) {
        n = $.extend({remBase: 100}, n);
        var e = parseInt(n.px);
        return isNaN(e) ? null : e / n.remBase
    }, a.calPxBaseRemFromPx = function (n) {
        var e = a.calRemFromPx(n), t = $("html").css("font-size");
        return e * (t = parseFloat(t) || 100)
    }, a.translateSize = function (n) {
        return n ? 0 < (n = "" + n).indexOf("%") ? n : (n = a.calRemFromPx({px: n}) || 0) + "rem" : ""
    }, a.addElPadding = function (n, e, t) {
        if (e = parseInt(e), !(!n || ["top", "right", "bottom", "left"].indexOf(n) < 0 || isNaN(e))) {
            a.isJDomExist(t) || (t = $("body"));
            var i = "padding-" + n, o = parseInt(t.css(i)) || 0, r = o + e;
            return t.css(i, r), {prev: o, cur: r}
        }
    }, a.getCssOptWithPrefix = function (n, e) {
        var t, i;
        n = n || {}, (!e || e.length < 1) && (e = ["webkit", "moz"]);
        var o = {};
        for (t in n) i = n[t], e.forEach(function (n, e) {
            o["-" + n + "-" + t] = i
        }), o[t] = i;
        return o
    }, a.animationend = function () {
        var n, e = document.createElement("fakeelement"), t = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd",
            msAnimation: "MSAnimationEnd",
            animation: "animationend"
        };
        for (n in t) if (void 0 !== e.style[n]) return t[n]
    }(), a.transitionend = function () {
        var n, e = document.createElement("fakeelement"), t = {
            WebkitTransition: "webkitTransitionEnd",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        };
        for (n in t) if (void 0 !== e.style[n]) return t[n]
    }();
    var i = {
        yyyy: function (n) {
            return n.getFullYear()
        }, mm: function (n) {
            return t(n.getMonth() + 1)
        }, dd: function (n) {
            return t(n.getDate())
        }, m: function (n) {
            return n.getMonth() + 1
        }, d: function (n) {
            return n.getDate()
        }, hh: function (n) {
            return t(n.getHours())
        }, MM: function (n) {
            return t(n.getMinutes())
        }, ss: function (n) {
            return t(n.getSeconds())
        }
    };

    function o(n) {
        return a.getDateFromStr(n, "yyyy-mm-dd hh:MM:ss")
    }

    a.formatDate = function (e, n) {
        return "string" != typeof n && (n = "yyyy-mm-dd"), n.replace(/\b(\w+)\b/g, function (n) {
            return i[n](e)
        }) || e.toString()
    }, a.getDateFromStr = function (n, e) {
        for (var t, i = {
            yyyy: "year",
            mm: "month",
            dd: "day",
            hh: "hour",
            MM: "minute",
            ss: "second"
        }, o = {
            year: void 0,
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0
        }, r = e.split(/\W/), a = n.split(/\W/), c = 0, l = r.length; c < l; c++) i[t = r[c]] && (o[i[t]] = a[c]);
        return o.month && (o.month = o.month - 1), o.year ? new Date(o.year, o.month, o.day, o.hour, o.minute, o.second) : new Error("year is required!")
    }, a._strToDate = o, a._strToDateMs = function (n) {
        var e = o(n);
        return e ? e.getTime() : null
    };
    var r = {
        pid: "mm-union-mtop",
        code: "1",
        msg: "",
        page: location.origin + location.pathname,
        title: document.title,
        rel: "",
        ua: navigator.userAgent,
        referrer: document.referrer,
        scr: window.screen.width + "x" + window.screen.height,
        last_pos: "",
        query: location.search.replace(/^\?/, ""),
        hash: location.hash.replace(/^\#!?/, "")
    };
    a.errorLog = function (n) {
        var e = new Image, t = $.extend({}, r, {
            spm_a: $("meta[name=data-spm]").attr("content") || $("meta[name=spm-id]").attr("content") || "0",
            spm_b: $("body").data("spm") || "0"
        }, n);
        e.src = "//gm.mmstat.com/fsp.1.1?" + a.joinParams(t)
    };
    for (var n, c, l = [/MX6.*UCBrowser/gi], u = window.navigator.userAgent, m = 0, d = l.length; m < d; m++) l[m].test(u) && (n = !0);
    if (n) c = 0; else if (c = window.localStorage && localStorage.getItem("webp")) c = parseInt(c, 10); else {
        var s = new Image;
        s.onload = function () {
            c = 1, window.localStorage && localStorage.setItem("webp", "1")
        }, s.onerror = function () {
            c = 0, window.localStorage && localStorage.setItem("webp", "0")
        }, s.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vuUAAA="
    }
    a.adaptImg = function (n, e, t) {
        var i = "";
        return (e || t) && (i += "_", e && (i += e), t && (i += "q" + t), i += ".jpg"), c && (i += "_.webp"), n + i
    }, a.noConflict = function () {
        return window.Util = void 0, window.MM_UTIL
    }, a.sendGoldLog = function (n) {
        window.goldlog && goldlog.record && goldlog.record.apply(window, n.split(","))
    }, a.isJDomExist = function (n) {
        return n && 0 < n.length
    }, a.getPvid = function () {
        if (!window.pvid) try {
            window.pvid = a.getSpmAB() + "_" + (new Date).getTime() + "_" + ("" + Math.random()).slice(2) + "_" + a.cookie.get("cna").slice(0, 5)
        } catch (n) {
            window.pvid = (new Date).getTime()
        }
        return window.pvid
    }, a.doShare = function (n, e, t) {
        if (!$.isEmptyObject(n)) if (e = "function" == typeof e ? e : null, t = "function" == typeof t ? t : null, window.WindVane && window.WindVane.isAvailable && window.lib && lib.env && lib.env.aliapp) if (n.url = n.url || location.href, "ET" != lib.env.aliapp.appname) {
            var i;
            if ("TM" == lib.env.aliapp.appname) return i = {
                "share-title": n.title,
                "share-intro": n.content,
                "mobile-image": n.images,
                "all-link": n.url
            }, void lib.windvane.call("TMShare", "doShare", i, function (n) {
                e && e()
            }, function (n) {
                t && t()
            });
            i = {
                title: n.title,
                text: n.content,
                image: n.images,
                url: n.url
            }, lib.windvane.call("TBSharedModule", "showSharedMenu", i, function (n) {
                e && e()
            }, function (n) {
                t && t()
            })
        } else lib.windvane.call("EtaoJsbridgeUtil", "share", n, function (n) {
            e && e()
        }, function (n) {
            t && t()
        }); else alert("\u8bf7\u4f7f\u7528\u6d4f\u89c8\u5668\u81ea\u5e26\u7684\u5206\u4eab\u529f\u80fd\uff01")
    }, a.getMillionStr = function (e) {
        var t;
        try {
            t = 1e4 <= e ? parseFloat((e / 1e4).toFixed(2)) + "\u4e07" : e
        } catch (n) {
            t = e
        }
        return t
    }, a.initCtl = function () {
        return new Promise(function (e) {
            if (a.ctl) return e();
            window.seajs.use("https://g.alicdn.com/sd/ctl/ctl.js", function () {
                var n = window.ctl.noConflict();
                n.config("h5"), n.ready(function () {
                    a.ctl = n, e()
                })
            })
        })
    }, function () {
        for (var r = 0, n = ["webkit", "moz"], e = 0; e < n.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[n[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n[e] + "CancelAnimationFrame"] || window[n[e] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (n, e) {
            var t = (new Date).getTime(), i = Math.max(0, 16.7 - (t - r)), o = window.setTimeout(function () {
                n(t + i)
            }, i);
            return r = t + i, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
            clearTimeout(n)
        })
    }(), a.scrollY = function (n, e, t) {
        var i = parseInt((e || 200) / 1e3 * 60, 10),
            o = document.scrollingElement ? document.scrollingElement : document.body, r = o.scrollTop, a = (n - r) / i,
            c = 0;
        requestAnimationFrame(function n() {
            r += a, o.scrollTop = r, ++c < i ? requestAnimationFrame(n) : "function" == typeof t && t()
        })
    }, a.jumpToModule = function (n, e, t) {
        var i = $(n);
        if (a.isJDomExist(i)) {
            var o = i.offset().top;
            0 < (o -= e = parseInt(e) || 0) && (t ? a.scrollY(o) : $(window).scrollTop(o))
        }
    }, a.jumpToModuleWhenOpen = function (n, e, t) {
        setTimeout(function () {
            a.jumpToModule(n, e, t)
        }, 500)
    }, a.getSpmAB = function () {
        return ($("meta[name=data-spm]").attr("content") || $("meta[name=spm-id]").attr("content") || "0") + "." + ($("body").attr("data-spm") || "0")
    }, a.parseParams = function (n) {
        var e = {};
        if (n) for (var t, i = 0, o = n.split(/&+/), r = o.length; i < r; i++) if (t = o[i]) {
            var a, c;
            try {
                a = decodeURIComponent(t.replace(/=.*/, "")), c = decodeURIComponent(t.replace(/(.*?=)|(.*)/, ""))
            } catch (n) {
                c = a = ""
            }
            (a || c) && (a in e ? ("string" == typeof e[a] && (e[a] = [e[a]]), e[a].push(c)) : e[a] = c)
        }
        return e.pid && $.isArray(e.pid) && (e.pid = e.pid[0]), e
    }, a.getSearchObj = function (n) {
        var e = a.parseParams(window.location.search.replace(/^\?+/, ""));
        return !e.pid && n && (e.pid = n), e
    }, a.searchObj = a.getSearchObj(), a.getPid = function () {
        var n = (a.searchObj.refpid || a.searchObj.pid || a.searchObj.ali_trackid || "").match(/mm_\d+_\d+_\d+/);
        if (n) return n[0]
    }, a.joinParams = function (n) {
        var t = [], e = function (n, e) {
            n = encodeURIComponent(n), e = encodeURIComponent(e);
            (n || e) && t.push(n + ("" == e ? "" : "=" + e))
        };
        for (var i in n) {
            var o = n[i];
            if (o && o.constructor == Array) for (var r = 0, a = o.length; r < a; r++) e(i, o[r]); else e(i, o)
        }
        return t.join("&")
    }, a.addQueryStr = function (n) {
        var e = (n = n || {}).data || {}, t = n.url || location.href,
            i = "boolean" != typeof n.ignoreEmpty || n.ignoreEmpty, o = t.match(/\?/);
        for (var r in e) {
            var a, c, l = e[r], u = new RegExp("[?&#]((" + r + "=)[^&#]*)[&#]?", "i");
            i && !l || (a = r + "=" + l, (c = t.match(u)) ? t = t.replace(c[1], a) : o ? t += "&" + a : (t += "?" + a, o = !0))
        }
        return t
    }, a.deleteQueryStr = function (n) {
        var e = (n = n || {}).data || [], o = n.url || location.href;
        return e.forEach(function (n, e) {
            if (n) {
                var t, i = new RegExp("[?&#](" + n + "=[^&#]*[&]?)", "i");
                (t = o.match(i)) && (o = o.replace(t[1], ""))
            }
        }), o
    }
}();
!function (a, b) {
    function c(a, b) {
        a = a.toString().split("."), b = b.toString().split(".");
        for (var c = 0; c < a.length || c < b.length; c++) {
            var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
            if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), d < e) return -1;
            if (d > e) return 1
        }
        return 0
    }

    var d = a.Promise, e = a.document, f = a.navigator.userAgent,
        g = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(f) || /Windows\sNT\s[\d\.]+/i.test(f),
        h = g && a.WindVane_Win_Private && a.WindVane_Win_Private.call, i = /iPhone|iPad|iPod/i.test(f),
        j = /Android/i.test(f), k = f.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/), l = Object.prototype.hasOwnProperty,
        m = b.windvane = a.WindVane || (a.WindVane = {}), n = (a.WindVane_Native, Math.floor(65536 * Math.random())),
        o = 1, p = [], q = 3, r = "hybrid", s = "wv_hybrid", t = "iframe_", u = "param_", v = "chunk_", w = 6e5,
        x = 6e5, y = 6e4;
    k = k ? (k[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";
    var z = {
        isAvailable: 1 === c(k, "0"), call: function (a, b, c, e, f, g) {
            var h, i;
            "number" == typeof arguments[arguments.length - 1] && (g = arguments[arguments.length - 1]), "function" != typeof e && (e = null), "function" != typeof f && (f = null), d && (i = {}, i.promise = new d(function (a, b) {
                i.resolve = a, i.reject = b
            })), h = A.getSid();
            var j = {success: e, failure: f, deferred: i};
            if (g > 0 && (j.timeout = setTimeout(function () {
                z.onFailure(h, {ret: "HY_TIMEOUT"})
            }, g)), A.registerCall(h, j), A.registerGC(h, g), z.isAvailable ? A.callMethod(a, b, c, h) : z.onFailure(h, {ret: "HY_NOT_IN_WINDVANE"}), i) return i.promise
        }, fireEvent: function (a, b, c) {
            var d = e.createEvent("HTMLEvents");
            d.initEvent(a, !1, !0), d.param = A.parseData(b || A.getData(c)), e.dispatchEvent(d)
        }, getParam: function (a) {
            return A.getParam(a)
        }, setData: function (a, b) {
            A.setData(a, b)
        }, onSuccess: function (a, b) {
            A.onComplete(a, b, "success")
        }, onFailure: function (a, b) {
            A.onComplete(a, b, "failure")
        }
    }, A = {
        params: {}, chunks: {}, calls: {}, getSid: function () {
            return (n + o++) % 65536 + ""
        }, buildParam: function (a) {
            return a && "object" == typeof a ? JSON.stringify(a) : a || ""
        }, getParam: function (a) {
            return this.params[u + a] || ""
        }, setParam: function (a, b) {
            this.params[u + a] = b
        }, parseData: function (a) {
            var b;
            if (a && "string" == typeof a) try {
                b = JSON.parse(a)
            } catch (a) {
                b = {ret: ["WV_ERR::PARAM_PARSE_ERROR"]}
            } else b = a || {};
            return b
        }, setData: function () {
            this.chunks[v + sid] = this.chunks[v + sid] || [], this.chunks[v + sid].push(chunk)
        }, getData: function (a) {
            return this.chunks[v + a] ? this.chunks[v + a].join("") : ""
        }, registerCall: function (a, b) {
            this.calls[a] = b
        }, unregisterCall: function (a) {
            var b = {};
            return this.calls[a] && (b = this.calls[a], delete this.calls[a]), b
        }, useIframe: function (a, b) {
            var c = t + a, d = p.pop();
            d || (d = e.createElement("iframe"), d.setAttribute("frameborder", "0"), d.style.cssText = "width:0;height:0;border:0;display:none;"), d.setAttribute("id", c), d.setAttribute("src", b), d.parentNode || setTimeout(function () {
                e.body.appendChild(d)
            }, 5)
        }, retrieveIframe: function (a) {
            var b = t + a, c = e.querySelector("#" + b);
            p.length >= q ? e.body.removeChild(c) : p.indexOf(c) < 0 && p.push(c)
        }, callMethod: function (b, c, d, e) {
            if (d = A.buildParam(d), g) h ? a.WindVane_Win_Private.call(b, c, e, d) : this.onComplete(e, {ret: "HY_NO_HANDLER_ON_WP"}, "failure"); else {
                var f = r + "://" + b + ":" + e + "/" + c + "?" + d;
                if (i) this.setParam(e, d), this.useIframe(e, f); else if (j) {
                    var k = s + ":";
                    window.prompt(f, k)
                } else this.onComplete(e, {ret: "HY_NOT_SUPPORT_DEVICE"}, "failure")
            }
        }, registerGC: function (a, b) {
            var c = this, d = Math.max(b || 0, w), e = Math.max(b || 0, y), f = Math.max(b || 0, x);
            setTimeout(function () {
                c.unregisterCall(a)
            }, d), i ? setTimeout(function () {
                c.params[u + a] && delete c.params[u + a]
            }, e) : j && setTimeout(function () {
                c.chunks[v + a] && delete c.chunks[v + a]
            }, f)
        }, onComplete: function (a, b, c) {
            var d = this.unregisterCall(a), e = d.success, f = d.failure, g = d.deferred, h = d.timeout;
            h && clearTimeout(h), b = b ? b : this.getData(a), b = this.parseData(b);
            var k = b.ret;
            "string" == typeof k && (b = b.value || b, b.ret || (b.ret = [k])), "success" === c ? (e && e(b), g && g.resolve(b)) : "failure" === c && (f && f(b), g && g.reject(b)), i ? (this.retrieveIframe(a), this.params[u + a] && delete this.params[u + a]) : j && this.chunks[v + a] && delete this.chunks[v + a]
        }
    };
    for (var B in z) l.call(m, B) || (m[B] = z[B])
}(window, window.lib || (window.lib = {}));
!function (a, b) {
    function c(a) {
        Object.defineProperty(this, "val", {value: a.toString(), enumerable: !0}), this.gt = function (a) {
            return c.compare(this, a) > 0
        }, this.gte = function (a) {
            return c.compare(this, a) >= 0
        }, this.lt = function (a) {
            return c.compare(this, a) < 0
        }, this.lte = function (a) {
            return c.compare(this, a) <= 0
        }, this.eq = function (a) {
            return 0 === c.compare(this, a)
        }
    }

    b.env = b.env || {}, c.prototype.toString = function () {
        return this.val
    }, c.prototype.valueOf = function () {
        for (var a = this.val.split("."), b = [], c = 0; c < a.length; c++) {
            var d = parseInt(a[c], 10);
            isNaN(d) && (d = 0);
            var e = d.toString();
            e.length < 5 && (e = Array(6 - e.length).join("0") + e), b.push(e), 1 === b.length && b.push(".")
        }
        return parseFloat(b.join(""))
    }, c.compare = function (a, b) {
        a = a.toString().split("."), b = b.toString().split(".");
        for (var c = 0; c < a.length || c < b.length; c++) {
            var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
            if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), e > d) return -1;
            if (d > e) return 1
        }
        return 0
    }, b.version = function (a) {
        return new c(a)
    }
}(window, window.lib || (window.lib = {})), function (a, b) {
    b.env = b.env || {};
    var c = a.location.search.replace(/^\?/, "");
    if (b.env.params = {}, c) for (var d = c.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=")[0], g = f + "=", h = d[e].split(g)[1];
        d[e] = d[e].split("=");
        try {
            b.env.params[d[e][0]] = decodeURIComponent(h)
        } catch (i) {
            b.env.params[d[e][0]] = h
        }
    }
}(window, window.lib || (window.lib = {})), function (a, b) {
    b.env = b.env || {};
    var c, d = a.navigator.userAgent;
    if (c = d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)) b.env.os = {
        name: "Windows Phone",
        isWindowsPhone: !0,
        version: c[1]
    }; else if (d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/))) b.env.os = {version: c[1]}, d.match(/Mobile\s+Safari/) ? (b.env.os.name = "Android", b.env.os.isAndroid = !0) : (b.env.os.name = "AndroidPad", b.env.os.isAndroidPad = !0); else if (c = d.match(/(iPhone|iPad|iPod)/)) {
        var e = c[1];
        (c = d.match(/OS ([\d_\.]+) like Mac OS X/)) && (b.env.os = {
            name: e,
            isIPhone: "iPhone" === e || "iPod" === e,
            isIPad: "iPad" === e,
            isIOS: !0,
            version: c[1].split("_").join(".")
        })
    }
    b.env.os || (b.env.os = {
        name: "unknown",
        version: "0.0.0"
    }), b.version && (b.env.os.version = b.version(b.env.os.version))
}(window, window.lib || (window.lib = {})), function (a, b) {
    b.env = b.env || {};
    var c, d = a.navigator.userAgent;
    (c = d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? b.env.browser = {
        name: "UC",
        isUC: !0,
        version: c[1]
    } : (c = d.match(/MQQBrowser\/([\d\.]+)/)) ? b.env.browser = {
        name: "QQ",
        isQQ: !0,
        version: c[1]
    } : (c = d.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? b.env.browser = {
        name: "Firefox",
        isFirefox: !0,
        version: c[1]
    } : (c = d.match(/MSIE\s([\d\.]+)/)) || (c = d.match(/IEMobile\/([\d\.]+)/)) ? (b.env.browser = {version: c[1]}, d.match(/IEMobile/) ? (b.env.browser.name = "IEMobile", b.env.browser.isIEMobile = !0) : (b.env.browser.name = "IE", b.env.browser.isIE = !0), d.match(/Android|iPhone/) && (b.env.browser.isIELikeWebkit = !0)) : (c = d.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (b.env.browser = {
        name: "Chrome",
        isChrome: !0,
        version: c[1]
    }, d.match(/Version\/[\d+\.]+\s*Chrome/) && (b.env.browser.name = "Chrome Webview", b.env.browser.isWebview = !0)) : d.match(/Safari/) && (c = d.match(/Android[\s\/]([\d\.]+)/)) ? b.env.browser = {
        name: "Android",
        isAndroid: !0,
        version: c[1]
    } : d.match(/iPhone|iPad|iPod/) && (d.match(/Safari/) && (c = d.match(/Version\/([\d\.]+)/)) ? b.env.browser = {
        name: "Safari",
        isSafari: !0,
        version: c[1]
    } : (c = d.match(/OS ([\d_\.]+) like Mac OS X/)) && (b.env.browser = {
        name: "iOS Webview",
        isWebview: !0,
        version: c[1].replace(/\_/g, ".")
    })), b.env.browser || (b.env.browser = {
        name: "unknown",
        version: "0.0.0"
    }), b.version && (b.env.browser.version = b.version(b.env.browser.version))
}(window, window.lib || (window.lib = {})), function (a, b) {
    b.env = b.env || {};
    var c = a.navigator.userAgent;
    c.match(/Weibo/i) ? b.env.thirdapp = {
        appname: "Weibo",
        isWeibo: !0
    } : c.match(/MicroMessenger/i) ? b.env.thirdapp = {appname: "Weixin", isWeixin: !0} : b.env.thirdapp = !1
}(window, window.lib || (window.lib = {})), function (a, b) {
    b.env = b.env || {};
    var c, d, e = a.navigator.userAgent;
    (d = e.match(/WindVane[\/\s]([\d\.\_]+)/)) && (c = d[1]);
    var f = !1, g = "", h = "", i = "", j = a._ua_popLayer || "", k = !1, l = "";
    (d = e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (f = !0, g = d[1], i = d[2], h = g.indexOf("-PD") > 0 ? b.env.os.isIOS ? "iPad" : b.env.os.isAndroid ? "AndroidPad" : b.env.os.name : b.env.os.name), !g && e.indexOf("TBIOS") > 0 && (g = "TB"), j && (d = j.match(/PopLayer\/([\d\.]+)/i)) && (k = !0, l = d[1]), f ? b.env.aliapp = {
        windvane: b.version(c || "0.0.0"),
        appname: g || "unkown",
        version: b.version(i || "0.0.0"),
        platform: h || b.env.os.name,
        poplayer: k || !1,
        poplayerVersion: b.version(l || "0.0.0")
    } : b.env.aliapp = !1, b.env.taobaoApp = b.env.aliapp
}(window, window.lib || (window.lib = {}));
!function (a, b, c) {
    function d(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(v.cookie);
        return b ? b[1] : c
    }

    function e(a) {
        return a.preventDefault(), !1
    }

    function f(b, c) {
        var d = this, f = a.dpr || 1, g = document.createElement("div"),
            h = document.documentElement.getBoundingClientRect(), i = Math.max(h.width, window.innerWidth) / f,
            j = Math.max(h.height, window.innerHeight) / f;
        g.style.cssText = ["-webkit-transform:scale(" + f + ") translateZ(0)", "-ms-transform:scale(" + f + ") translateZ(0)", "transform:scale(" + f + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + i + "px", "height:" + j + "px", "z-index:999999", "position:absolute", "left:0", "top:0px", "background:#FFF", "display:none"].join(";");
        var k = document.createElement("div");
        k.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), k.innerText = b;
        var l = document.createElement("a");
        l.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), l.innerText = "å…³é—­";
        var m = document.createElement("iframe");
        m.style.cssText = ["width:100%", "height:" + window.innerHeight / f + "px", "border:0", "overflow:hidden"].join(";"), k.appendChild(l), g.appendChild(k), g.appendChild(m), v.body.appendChild(g), m.src = c, l.addEventListener("click", function () {
            d.hide();
            var a = v.createEvent("HTMLEvents");
            a.initEvent("close", !1, !1), g.dispatchEvent(a)
        }, !1), this.addEventListener = function () {
            g.addEventListener.apply(g, arguments)
        }, this.removeEventListener = function () {
            g.removeEventListener.apply(g, arguments)
        }, this.show = function () {
            document.addEventListener("touchmove", e, !1), g.style.display = "block", window.scrollTo(0, 0)
        }, this.hide = function () {
            document.removeEventListener("touchmove", e), window.scrollTo(0, -h.top), v.body.removeChild(g)
        }
    }

    function g(a) {
        if (!a || "function" != typeof a || !b.mtop) {
            var d = this.getUserNick();
            return !!d
        }
        b.mtop.request({api: "mtop.user.getUserSimple", v: "1.0", data: {isSec: 0}, H5Request: !0}, function (d) {
            d.retType === b.mtop.RESPONSE_TYPE.SUCCESS ? a(!0, d) : d.retType === b.mtop.RESPONSE_TYPE.SESSION_EXPIRED ? a(!1, d) : a(c, d)
        })
    }

    function h(a) {
        var b;
        return u && (b = {}, b.promise = new u(function (a, c) {
            b.resolve = a, b.reject = c
        })), this.isLogin(function (c, d) {
            a && a(c, d), c === !0 ? b && b.resolve(d) : b && b.reject(d)
        }), b ? b.promise : void 0
    }

    function i(a) {
        if (!a || "function" != typeof a) {
            var b = "", e = d("_w_tb_nick"), f = d("_nk_") || d("snk"), g = d("sn");
            return e && e.length > 0 && "null" != e ? b = decodeURIComponent(e) : f && f.length > 0 && "null" != f ? b = unescape(unescape(f).replace(/\\u/g, "%u")) : g && g.length > 0 && "null" != g && (b = decodeURIComponent(g)), b = b.replace(/\</g, "&lt;").replace(/\>/g, "&gt;")
        }
        this.isLogin(function (b, d) {
            a(b === !0 && d && d.data && d.data.nick ? d.data.nick : b === !1 ? "" : c)
        })
    }

    function j(a) {
        var b;
        return u && (b = {}, b.promise = new u(function (a, c) {
            b.resolve = a, b.reject = c
        })), this.getUserNick(function (c) {
            a && a(c), c ? b && b.resolve(c) : b && b.reject()
        }), b ? b.promise : void 0
    }

    function k(a, c) {
        var d = "//" + G + "." + H.subDomain + "." + E + "/" + H[(a || "login") + "Name"];
        if (c) {
            var e = [];
            for (var f in c) e.push(f + "=" + encodeURIComponent(c[f]));
            d += "?" + e.join("&")
        }
        var g = b.login.config.loginUrlParams;
        if (g) {
            var h = [];
            for (var i in g) h.push(i + "=" + encodeURIComponent(g[i]));
            d += /\?/.test(d) ? "&" + h.join("&") : "?" + e.join("&")
        }
        return d
    }

    function l(a, b) {
        b ? location.replace(a) : location.href = a
    }

    function m(b, c, d) {
        function e(b) {
            j.removeEventListener("close", e), a.removeEventListener("message", g), d("CANCEL")
        }

        function g(b) {
            var c = b.data || {};
            c && "child" === c.type && c.content.indexOf("SUCCESS") > -1 ? (j.removeEventListener("close", e), a.removeEventListener("message", g), j.hide(), d("SUCCESS")) : d("FAILURE")
        }

        var h = location.protocol + "//h5." + H.subDomain + ".taobao.com/" + ("waptest" === H.subDomain ? "src" : "other") + "/" + b + "end.html?origin=" + encodeURIComponent(location.protocol + "//" + location.hostname),
            i = k(b, {ttid: "h5@iframe", redirectURL: h}), j = new f(c.title || "æ‚¨éœ€è¦ç™»å½•æ‰èƒ½ç»§ç»­è®¿é—®", i);
        j.addEventListener("close", e, !1), a.addEventListener("message", g, !1), j.show()
    }

    function n(b, c, d) {
        var e = k(b, {wvLoginCallback: "wvLoginCallback"});
        a.wvLoginCallback = function (b) {
            delete a.wvLoginCallback, d(b.indexOf(":SUCCESS") > -1 ? "SUCCESS" : b.indexOf(":CANCEL") > -1 ? "CANCEL" : "FAILURE")
        }, l(e)
    }

    function o(a, b, c) {
        if ("function" == typeof b ? (c = b, b = null) : "string" == typeof b && (b = {redirectUrl: b}), b = b || {}, c && A) n(a, b, c); else if (c && !z && "login" === a) m(a, b, c); else {
            var d = k(a, {redirectURL: b.redirectUrl || location.href});
            l(d, b.replace)
        }
    }

    function p(a, b, c) {
        var d;
        return u && (d = {}, d.promise = new u(function (a, b) {
            d.resolve = a, d.reject = b
        })), o(a, b, function (a) {
            c && c(a), "SUCCESS" === a ? d && d.resolve(a) : d && d.reject(a)
        }), d ? d.promise : void 0
    }

    function q(a) {
        o("login", a)
    }

    function r(a) {
        return p("login", a)
    }

    function s(a) {
        o("logout", a)
    }

    function t(a) {
        return p("logout", a)
    }

    var u = a.Promise, v = a.document, w = a.navigator.userAgent, x = location.hostname,
        y = (a.location.search, w.match(/WindVane[\/\s]([\d\.\_]+)/)), z = w.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i),
        A = !!(z && "TB" === z[1] && y && parseFloat(y[1]) > 5.2), B = ["taobao.net", "taobao.com"],
        C = new RegExp("([^.]*?)\\.?((?:" + B.join(")|(?:").replace(/\./g, "\\.") + "))", "i"), D = x.match(C) || [],
        E = function () {
            var a = D[2] || "taobao.com";
            return a.match(/\.?taobao\.net$/) ? "taobao.net" : "taobao.com"
        }(), F = function () {
            var a = E, b = D[1] || "m";
            return "taobao.net" === a && (b = "waptest"), "m" != b && "wapa" != b && "waptest" != b && (b = "m"), b
        }(), G = "login";
    b.login = b.login || {};
    var H = {loginName: "login.htm", logoutName: "logout.htm", subDomain: F};
    b.login.config = H, b.login.isLogin = g, b.login.isLoginAsync = h, b.login.getUserNick = i, b.login.getUserNickAsync = j, b.login.generateUrl = k, b.login.goLogin = q, b.login.goLoginAsync = r, b.login.goLogout = s, b.login.goLogoutAsync = t
}(window, window.lib || (window.lib = {}));
!function (a, b) {
    function c(a) {
        var b = {};
        Object.defineProperty(this, "params", {
            set: function (a) {
                if ("object" == typeof a) {
                    for (var c in b) delete b[c];
                    for (var c in a) b[c] = a[c]
                }
            }, get: function () {
                return b
            }, enumerable: !0
        }), Object.defineProperty(this, "search", {
            set: function (a) {
                if ("string" == typeof a) {
                    0 === a.indexOf("?") && (a = a.substr(1));
                    var c = a.split("&");
                    for (var d in b) delete b[d];
                    for (var e = 0; e < c.length; e++) {
                        var f = c[e].split("=");
                        if (f[0]) try {
                            b[decodeURIComponent(f[0])] = decodeURIComponent(f[1] || "")
                        } catch (g) {
                            b[f[0]] = f[1] || ""
                        }
                    }
                }
            }, get: function () {
                var a = [];
                for (var c in b) if (b[c]) try {
                    a.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[c]))
                } catch (d) {
                    a.push(c + "=" + b[c])
                } else try {
                    a.push(encodeURIComponent(c))
                } catch (d) {
                    a.push(c)
                }
                return a.length ? "?" + a.join("&") : ""
            }, enumerable: !0
        });
        var c;
        Object.defineProperty(this, "hash", {
            set: function (a) {
                a && a.indexOf("#") < 0 && (a = "#" + a), c = a || ""
            }, get: function () {
                return c
            }, enumerable: !0
        }), this.set = function (a) {
            a = a || "";
            var b;
            if (!(b = a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^?#]*))?(#[^#]*)?$", "i")))) throw new Error("Wrong uri scheme.");
            this.protocol = b[1] || location.protocol, this.username = b[2] || "", this.password = b[3] || "", this.hostname = this.host = b[4], this.port = b[5] || "", this.pathname = b[6] || "/", this.search = b[7] || "", this.hash = b[8] || "", this.origin = this.protocol + "//" + this.hostname
        }, this.toString = function () {
            var a = this.protocol + "//";
            return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"), a += this.host, this.port && "80" !== this.port && (a += ":" + this.port), this.pathname && (a += this.pathname), this.search && (a += this.search), this.hash && (a += this.hash), a
        }, a && this.set(a.toString())
    }

    b.httpurl = function (a) {
        return new c(a)
    }
}(window, window.lib || (window.lib = {}));
!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (a, b) {
        function c() {
        }

        var d = b.exports = {};
        d.nextTick = function () {
            var a = "undefined" != typeof window && window.setImmediate,
                b = "undefined" != typeof window && window.postMessage && window.addEventListener;
            if (a) return function (a) {
                return window.setImmediate(a)
            };
            if (b) {
                var c = [];
                return window.addEventListener("message", function (a) {
                    var b = a.source;
                    if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(), c.length > 0)) {
                        var d = c.shift();
                        d()
                    }
                }, !0), function (a) {
                    c.push(a), window.postMessage("process-tick", "*")
                }
            }
            return function (a) {
                setTimeout(a, 0)
            }
        }(), d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.binding = function () {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function () {
            throw new Error("process.chdir is not supported")
        }
    }, {}], 2: [function (a, b) {
        "use strict";

        function c(a) {
            function b(a) {
                return null === i ? void k.push(a) : void f(function () {
                    var b = i ? a.onFulfilled : a.onRejected;
                    if (null === b) return void (i ? a.resolve : a.reject)(j);
                    var c;
                    try {
                        c = b(j)
                    } catch (d) {
                        return void a.reject(d)
                    }
                    a.resolve(c)
                })
            }

            function c(a) {
                try {
                    if (a === l) throw new TypeError("A promise cannot be resolved with itself.");
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var b = a.then;
                        if ("function" == typeof b) return void e(b.bind(a), c, g)
                    }
                    i = !0, j = a, h()
                } catch (d) {
                    g(d)
                }
            }

            function g(a) {
                i = !1, j = a, h()
            }

            function h() {
                for (var a = 0, c = k.length; c > a; a++) b(k[a]);
                k = null
            }

            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof a) throw new TypeError("not a function");
            var i = null, j = null, k = [], l = this;
            this.then = function (a, c) {
                return new l.constructor(function (e, f) {
                    b(new d(a, c, e, f))
                })
            }, e(a, c, g)
        }

        function d(a, b, c, d) {
            this.onFulfilled = "function" == typeof a ? a : null, this.onRejected = "function" == typeof b ? b : null, this.resolve = c, this.reject = d
        }

        function e(a, b, c) {
            var d = !1;
            try {
                a(function (a) {
                    d || (d = !0, b(a))
                }, function (a) {
                    d || (d = !0, c(a))
                })
            } catch (e) {
                if (d) return;
                d = !0, c(e)
            }
        }

        var f = a("asap");
        b.exports = c
    }, {asap: 4}], 3: [function (a, b) {
        "use strict";

        function c(a) {
            this.then = function (b) {
                return "function" != typeof b ? this : new d(function (c, d) {
                    e(function () {
                        try {
                            c(b(a))
                        } catch (e) {
                            d(e)
                        }
                    })
                })
            }
        }

        var d = a("./core.js"), e = a("asap");
        b.exports = d, c.prototype = d.prototype;
        var f = new c(!0), g = new c(!1), h = new c(null), i = new c(void 0), j = new c(0), k = new c("");
        d.resolve = function (a) {
            if (a instanceof d) return a;
            if (null === a) return h;
            if (void 0 === a) return i;
            if (a === !0) return f;
            if (a === !1) return g;
            if (0 === a) return j;
            if ("" === a) return k;
            if ("object" == typeof a || "function" == typeof a) try {
                var b = a.then;
                if ("function" == typeof b) return new d(b.bind(a))
            } catch (e) {
                return new d(function (a, b) {
                    b(e)
                })
            }
            return new c(a)
        }, d.all = function (a) {
            var b = Array.prototype.slice.call(a);
            return new d(function (a, c) {
                function d(f, g) {
                    try {
                        if (g && ("object" == typeof g || "function" == typeof g)) {
                            var h = g.then;
                            if ("function" == typeof h) return void h.call(g, function (a) {
                                d(f, a)
                            }, c)
                        }
                        b[f] = g, 0 === --e && a(b)
                    } catch (i) {
                        c(i)
                    }
                }

                if (0 === b.length) return a([]);
                for (var e = b.length, f = 0; f < b.length; f++) d(f, b[f])
            })
        }, d.reject = function (a) {
            return new d(function (b, c) {
                c(a)
            })
        }, d.race = function (a) {
            return new d(function (b, c) {
                a.forEach(function (a) {
                    d.resolve(a).then(b, c)
                })
            })
        }, d.prototype["catch"] = function (a) {
            return this.then(null, a)
        }
    }, {"./core.js": 2, asap: 4}], 4: [function (a, b) {
        (function (a) {
            function c() {
                for (; e.next;) {
                    e = e.next;
                    var a = e.task;
                    e.task = void 0;
                    var b = e.domain;
                    b && (e.domain = void 0, b.enter());
                    try {
                        a()
                    } catch (d) {
                        if (i) throw b && b.exit(), setTimeout(c, 0), b && b.enter(), d;
                        setTimeout(function () {
                            throw d
                        }, 0)
                    }
                    b && b.exit()
                }
                g = !1
            }

            function d(b) {
                f = f.next = {task: b, domain: i && a.domain, next: null}, g || (g = !0, h())
            }

            var e = {task: void 0, next: null}, f = e, g = !1, h = void 0, i = !1;
            if ("undefined" != typeof a && a.nextTick) i = !0, h = function () {
                a.nextTick(c)
            }; else if ("function" == typeof setImmediate) h = "undefined" != typeof window ? setImmediate.bind(window, c) : function () {
                setImmediate(c)
            }; else if ("undefined" != typeof MessageChannel) {
                var j = new MessageChannel;
                j.port1.onmessage = c, h = function () {
                    j.port2.postMessage(0)
                }
            } else h = function () {
                setTimeout(c, 0)
            };
            b.exports = d
        }).call(this, a("_process"))
    }, {_process: 1}], 5: [function () {
        "function" != typeof Promise.prototype.done && (Promise.prototype.done = function () {
            var a = arguments.length ? this.then.apply(this, arguments) : this;
            a.then(null, function (a) {
                setTimeout(function () {
                    throw a
                }, 0)
            })
        })
    }, {}], 6: [function (a) {
        a("asap");
        "undefined" == typeof Promise && (Promise = a("./lib/core.js"), a("./lib/es6-extensions.js")), a("./polyfill-done.js")
    }, {"./lib/core.js": 2, "./lib/es6-extensions.js": 3, "./polyfill-done.js": 5, asap: 4}]
}, {}, [6]);
!function (a, b) {
    function c() {
        var a = {}, b = new p(function (b, c) {
            a.resolve = b, a.reject = c
        });
        return a.promise = b, a
    }

    function d(a, b) {
        for (var c in b) void 0 === a[c] && (a[c] = b[c]);
        return a
    }

    function e(a) {
        var b = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
        b.appendChild(a)
    }

    function f(a) {
        var b = [];
        for (var c in a) a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }

    function g(a) {
        try {
            return a.toLowerCase().indexOf("lazada") > -1 && ".com" !== a.substring(a.lastIndexOf(".")) ? (a.split(".") || []).length <= 3 ? a : a.split(".").slice(1).join(".") : a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1)
        } catch (b) {
            return a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1)
        }
    }

    function h(a) {
        function b(a, b) {
            return a << b | a >>> 32 - b
        }

        function c(a, b) {
            var c, d, e, f, g;
            return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
        }

        function d(a, b, c) {
            return a & b | ~a & c
        }

        function e(a, b, c) {
            return a & c | b & ~c
        }

        function f(a, b, c) {
            return a ^ b ^ c
        }

        function g(a, b, c) {
            return b ^ (a | ~c)
        }

        function h(a, e, f, g, h, i, j) {
            return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
        }

        function i(a, d, f, g, h, i, j) {
            return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
        }

        function j(a, d, e, g, h, i, j) {
            return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
        }

        function k(a, d, e, f, h, i, j) {
            return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
        }

        function l(a) {
            for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
            return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g
        }

        function m(a) {
            var b, c, d = "", e = "";
            for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
            return d
        }

        function n(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128))
            }
            return b
        }

        var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4,
            H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21;
        for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
        var O = m(t) + m(u) + m(v) + m(w);
        return O.toLowerCase()
    }

    function i(a) {
        return "[object Object]" == {}.toString.call(a)
    }

    function j(a, b, c) {
        var d = c || {};
        document.cookie = a.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d.domain ? ";domain=" + d.domain : "") + (d.path ? ";path=" + d.path : "") + (d.secure ? ";secure" : "") + (d.httponly ? ";HttpOnly" : "")
    }

    function k(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
        return b ? b[1] : void 0
    }

    function l(a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() - 864e5);
        var e = "/";
        document.cookie = a + "=;path=" + e + ";domain=." + b + ";expires=" + d.toGMTString(), document.cookie = a + "=;path=" + e + ";domain=." + c + "." + b + ";expires=" + d.toGMTString()
    }

    function m() {
        var b = a.location.hostname;
        if (!b) {
            var c = a.parent.location.hostname;
            c && ~c.indexOf("zebra.alibaba-inc.com") && (b = c)
        }
        var d = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"],
            e = new RegExp("([^.]*?)\\.?((?:" + d.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
            f = b.match(e) || [], g = f[2] || "taobao.com", h = f[1] || "m";
        "taobao.net" !== g || "x" !== h && "waptest" !== h && "daily" !== h ? "taobao.net" === g && "demo" === h ? h = "demo" : "alibaba-inc.com" === g && "zebra" === h ? h = "zebra" : "waptest" !== h && "wapa" !== h && "m" !== h && (h = "m") : h = "waptest";
        var i = "h5api";
        "taobao.net" === g && "waptest" === h && (i = "acs"), r.mainDomain = g, r.subDomain = h, r.prefix = i
    }

    function n() {
        var b = a.navigator.userAgent, c = b.match(/WindVane[\/\s]([\d\.\_]+)/);
        c && (r.WindVaneVersion = c[1]);
        var d = b.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
        d && (r.AliAppName = d[1], r.AliAppVersion = d[2])
    }

    function o(a) {
        this.id = "" + (new Date).getTime() + ++v, this.params = d(a || {}, {
            v: "*",
            data: {},
            type: "get",
            dataType: "jsonp"
        }), this.params.type = this.params.type.toLowerCase(), "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = s.slice(0)
    }

    var p = a.Promise, q = (p || {
        resolve: function () {
            return void 0
        }
    }).resolve();
    String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    });
    var r = {useJsonpResultType: !1, safariGoLogin: !0, useAlipayJSBridge: !1}, s = [],
        t = {ERROR: -1, SUCCESS: 0, TOKEN_EXPIRED: 1, SESSION_EXPIRED: 2};
    m(), n();
    var u = "AP" === r.AliAppName && parseFloat(r.AliAppVersion) >= 10.1;
    u && 10.1 === parseFloat(r.AliAppVersion) && parseInt(r.AliAppVersion.substr(5)) < 2 && (u = !1);
    var v = 0, w = "2.5.1";
    o.prototype.use = function (a) {
        if (!a) throw new Error("middleware is undefined");
        return this.middlewares.push(a), this
    }, o.prototype.__processRequestMethod = function (a) {
        var b = this.params, c = this.options;
        "get" === b.type && "jsonp" === b.dataType ? c.getJSONP = !0 : "get" === b.type && "originaljsonp" === b.dataType ? c.getOriginalJSONP = !0 : "get" === b.type && "json" === b.dataType ? c.getJSON = !0 : "post" === b.type && (c.postJSON = !0), a()
    }, o.prototype.__processRequestType = function (c) {
        var d = this, e = this.params, f = this.options;
        if (r.H5Request === !0 && (f.H5Request = !0), r.WindVaneRequest === !0 && (f.WindVaneRequest = !0), f.H5Request === !1 && f.WindVaneRequest === !0) {
            if (!u && (!b.windvane || parseFloat(f.WindVaneVersion) < 5.4)) throw new Error("WINDVANE_NOT_FOUND::ç¼ºå°‘WindVaneçŽ¯å¢ƒ");
            if (u && !a.AlipayJSBridge) throw new Error("ALIPAY_NOT_READY::æ”¯ä»˜å®é€šé“æœªå‡†å¤‡å¥½ï¼Œæ”¯ä»˜å®è¯·è§ https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z")
        } else if (f.H5Request === !0) f.WindVaneRequest = !1; else if ("undefined" == typeof f.WindVaneRequest && "undefined" == typeof f.H5Request && (b.windvane && parseFloat(f.WindVaneVersion) >= 5.4 ? (f.WindVaneRequest = !0, window.self !== window.top && (f.H5Request = !0)) : f.H5Request = !0, u)) if (f.WindVaneRequest = f.H5Request = void 0, a.AlipayJSBridge) if (i(e.data)) f.WindVaneRequest = !0; else try {
            i(JSON.parse(e.data)) ? f.WindVaneRequest = !0 : f.H5Request = !0
        } catch (g) {
            f.H5Request = !0
        } else f.H5Request = !0;
        var h = a.navigator.userAgent.toLowerCase();
        return h.indexOf("youku") > -1 && f.mainDomain.indexOf("youku.com") < 0 && (f.WindVaneRequest = !1, f.H5Request = !0), f.mainDomain.indexOf("youku.com") > -1 && h.indexOf("youku") < 0 && (f.WindVaneRequest = !1, f.H5Request = !0), c ? c().then(function () {
            var a = f.retJson.ret;
            if (a instanceof Array && (a = a.join(",")), f.WindVaneRequest === !0 && u && f.retJson.error || !a || a.indexOf("PARAM_PARSE_ERROR") > -1 || a.indexOf("HY_FAILED") > -1 || a.indexOf("HY_NO_HANDLER") > -1 || a.indexOf("HY_CLOSED") > -1 || a.indexOf("HY_EXCEPTION") > -1 || a.indexOf("HY_NO_PERMISSION") > -1) {
                if (!u || !isNaN(f.retJson.error) || -1 !== f.retJson.error.indexOf("FAIL_SYS_ACCESS_DENIED")) return u && i(e.data) && (e.data = JSON.stringify(e.data)), r.H5Request = !0, d.__sequence([d.__processRequestType, d.__processToken, d.__processRequestUrl, d.middlewares, d.__processRequest]);
                "undefined" == typeof f.retJson.api && "undefined" == typeof f.retJson.v && (f.retJson.api = e.api, f.retJson.v = e.v, f.retJson.ret = [f.retJson.error + "::" + f.retJson.errorMessage], f.retJson.data = {})
            }
        }) : void 0
    };
    var x = "_m_h5_c", y = "_m_h5_tk", z = "_m_h5_tk_enc";
    o.prototype.__getTokenFromAlipay = function () {
        var b = c(), d = this.options, e = (a.navigator.userAgent, !!location.protocol.match(/^https?\:$/));
        return d.useAlipayJSBridge === !0 && !e && u && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function (a) {
            a && a.token && (d.token = a.token), b.resolve()
        }, function () {
            b.resolve()
        }) : b.resolve(), b.promise
    }, o.prototype.__getTokenFromCookie = function () {
        var a = this.options;
        return a.CDR && k(x) ? a.token = k(x).split(";")[0] : a.token = a.token || k(y), a.token && (a.token = a.token.split("_")[0]), p.resolve()
    }, o.prototype.__waitWKWebViewCookie = function (b) {
        var c = this.options;
        c.waitWKWebViewCookieFn && c.H5Request && a.webkit && a.webkit.messageHandlers ? c.waitWKWebViewCookieFn(b) : b()
    }, o.prototype.__processToken = function (a) {
        var b = this, c = this.options;
        this.params;
        return c.token && delete c.token, c.WindVaneRequest !== !0 ? q.then(function () {
            return b.__getTokenFromAlipay()
        }).then(function () {
            return b.__getTokenFromCookie()
        }).then(a).then(function () {
            var a = c.retJson, d = a.ret;
            if (d instanceof Array && (d = d.join(",")), d.indexOf("TOKEN_EMPTY") > -1 || (c.CDR === !0 || c.syncCookieMode === !0) && d.indexOf("ILLEGAL_ACCESS") > -1 || d.indexOf("TOKEN_EXOIRED") > -1) {
                if (c.maxRetryTimes = c.maxRetryTimes || 5, c.failTimes = c.failTimes || 0, c.H5Request && ++c.failTimes < c.maxRetryTimes) {
                    var e = [b.__waitWKWebViewCookie, b.__processToken, b.__processRequestUrl, b.middlewares, b.__processRequest];
                    if (c.syncCookieMode === !0 && b.constructor.__cookieProcessorId !== b.id) if (b.constructor.__cookieProcessor) {
                        var f = function (a) {
                            var c = function () {
                                b.constructor.__cookieProcessor = null, b.constructor.__cookieProcessorId = null, a()
                            };
                            b.constructor.__cookieProcessor ? b.constructor.__cookieProcessor.then(c)["catch"](c) : a()
                        };
                        e = [f, b.__waitWKWebViewCookie, b.__processToken, b.__processRequestUrl, b.middlewares, b.__processRequest]
                    } else b.constructor.__cookieProcessor = b.__requestProcessor, b.constructor.__cookieProcessorId = b.id;
                    return b.__sequence(e)
                }
                c.maxRetryTimes > 0 && (l(x, c.pageDomain, "*"), l(y, c.mainDomain, c.subDomain), l(z, c.mainDomain, c.subDomain)), a.retType = t.TOKEN_EXPIRED
            }
        }) : void a()
    }, o.prototype.__processRequestUrl = function (b) {
        var c = this.params, d = this.options;
        if (d.hostSetting && d.hostSetting[a.location.hostname]) {
            var e = d.hostSetting[a.location.hostname];
            e.prefix && (d.prefix = e.prefix), e.subDomain && (d.subDomain = e.subDomain), e.mainDomain && (d.mainDomain = e.mainDomain)
        }
        if (d.H5Request === !0) {
            var f = "//" + (d.prefix ? d.prefix + "." : "") + (d.subDomain ? d.subDomain + "." : "") + d.mainDomain + "/h5/" + c.api.toLowerCase() + "/" + c.v.toLowerCase() + "/",
                g = c.appKey || ("waptest" === d.subDomain ? "4272" : "12574478"), i = (new Date).getTime(),
                j = h(d.token + "&" + i + "&" + g + "&" + c.data), k = {jsv: w, appKey: g, t: i, sign: j},
                l = {data: c.data, ua: c.ua};
            Object.keys(c).forEach(function (a) {
                "undefined" == typeof k[a] && "undefined" == typeof l[a] && "headers" !== a && "ext_headers" !== a && "ext_querys" !== a && (k[a] = c[a])
            }), c.ext_querys && Object.keys(c.ext_querys).forEach(function (a) {
                k[a] = c.ext_querys[a]
            }), d.getJSONP ? k.type = "jsonp" : d.getOriginalJSONP ? k.type = "originaljsonp" : (d.getJSON || d.postJSON) && (k.type = "originaljson"), "undefined" != typeof c.valueType && ("original" === c.valueType ? d.getJSONP || d.getOriginalJSONP ? k.type = "originaljsonp" : (d.getJSON || d.postJSON) && (k.type = "originaljson") : "string" === c.valueType && (d.getJSONP || d.getOriginalJSONP ? k.type = "jsonp" : (d.getJSON || d.postJSON) && (k.type = "json"))), d.useJsonpResultType === !0 && "originaljson" === k.type && delete k.type, d.dangerouslySetProtocol && (f = d.dangerouslySetProtocol + ":" + f), d.querystring = k, d.postdata = l, d.path = f
        }
        b()
    }, o.prototype.__processUnitPrefix = function (a) {
        a()
    };
    var A = 0;
    o.prototype.__requestJSONP = function (a) {
        function b(a) {
            if (k && clearTimeout(k), l.parentNode && l.parentNode.removeChild(l), "TIMEOUT" === a) window[j] = function () {
                window[j] = void 0;
                try {
                    delete window[j]
                } catch (a) {
                }
            }; else {
                window[j] = void 0;
                try {
                    delete window[j]
                } catch (b) {
                }
            }
        }

        var d = c(), g = this.params, h = this.options, i = g.timeout || 2e4,
            j = "mtopjsonp" + (g.jsonpIncPrefix || "") + ++A, k = setTimeout(function () {
                a(h.timeoutErrMsg || "TIMEOUT::æŽ¥å£è¶…æ—¶"), b("TIMEOUT")
            }, i);
        h.querystring.callback = j;
        var l = document.createElement("script");
        return l.src = h.path + "?" + f(h.querystring) + "&" + f(h.postdata), l.async = !0, l.onerror = function () {
            b("ABORT"), a(h.abortErrMsg || "ABORT::æŽ¥å£å¼‚å¸¸é€€å‡º")
        }, window[j] = function () {
            h.results = Array.prototype.slice.call(arguments), b(), d.resolve()
        }, e(l), d.promise
    }, o.prototype.__requestJSON = function (b) {
        function d(a) {
            l && clearTimeout(l), "TIMEOUT" === a && i.abort()
        }

        var e = c(), g = this.params, h = this.options, i = new a.XMLHttpRequest, j = g.timeout || 2e4,
            l = setTimeout(function () {
                b(h.timeoutErrMsg || "TIMEOUT::æŽ¥å£è¶…æ—¶"), d("TIMEOUT")
            }, j);
        h.CDR && k(x) && (h.querystring.c = decodeURIComponent(k(x))), i.onreadystatechange = function () {
            if (4 == i.readyState) {
                var a, c, f = i.status;
                if (f >= 200 && 300 > f || 304 == f) {
                    d(), a = i.responseText, c = i.getAllResponseHeaders() || "";
                    try {
                        a = /^\s*$/.test(a) ? {} : JSON.parse(a), a.responseHeaders = c, h.results = [a], e.resolve()
                    } catch (g) {
                        b("PARSE_JSON_ERROR::è§£æžJSONå¤±è´¥")
                    }
                } else d("ABORT"), b(h.abortErrMsg || "ABORT::æŽ¥å£å¼‚å¸¸é€€å‡º")
            }
        };
        var m, n, o = h.path + "?" + f(h.querystring);
        h.getJSON ? (m = "GET", o += "&" + f(h.postdata)) : h.postJSON && (m = "POST", n = f(h.postdata)), i.open(m, o, !0), i.withCredentials = !0, i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var p = g.ext_headers || g.headers;
        if (p) for (var q in p) i.setRequestHeader(q, p[q]);
        return i.send(n), e.promise
    }, o.prototype.__requestWindVane = function (a) {
        function d(a) {
            g.results = [a], e.resolve()
        }

        var e = c(), f = this.params, g = this.options, h = f.data, i = f.api, j = f.v, k = g.postJSON ? 1 : 0,
            l = g.getJSON || g.postJSON || g.getOriginalJSONP ? "originaljson" : "";
        "undefined" != typeof f.valueType && ("original" === f.valueType ? l = "originaljson" : "string" === f.valueType && (l = "")), g.useJsonpResultType === !0 && (l = "");
        var m, n, o = "https" === location.protocol ? 1 : 0, p = f.isSec || 0, q = f.sessionOption || "AutoLoginOnly",
            r = f.ecode || 0, s = f.ext_headers || {}, t = f.ext_querys || {};
        s.referer = location.href, n = "undefined" != typeof f.timer ? parseInt(f.timer) : "undefined" != typeof f.timeout ? parseInt(f.timeout) : 2e4, m = 2 * n, f.needLogin === !0 && "undefined" == typeof f.sessionOption && (q = "AutoLoginAndManualLogin"), "undefined" != typeof f.secType && "undefined" == typeof f.isSec && (p = f.secType);
        var u = {
            api: i,
            v: j,
            post: String(k),
            type: l,
            isHttps: String(o),
            ecode: String(r),
            isSec: String(p),
            param: JSON.parse(h),
            timer: n,
            sessionOption: q,
            ext_headers: s,
            ext_querys: t
        };
        return f.ttid && g.dangerouslySetWVTtid === !0 && (u.ttid = f.ttid), Object.assign && f.dangerouslySetWindvaneParams && Object.assign(u, f.dangerouslySetWindvaneParams), b.windvane.call("MtopWVPlugin", "send", u, d, d, m), e.promise
    }, o.prototype.__requestAlipay = function (b) {
        function d(a) {
            g.results = [a], e.resolve()
        }

        var e = c(), f = this.params, g = this.options,
            h = {apiName: f.api, apiVersion: f.v, needEcodeSign: "1" === String(f.ecode), usePost: !!g.postJSON};
        return i(f.data) || (f.data = JSON.parse(f.data)), h.data = f.data, f.ttid && g.dangerouslySetWVTtid === !0 && (h.ttid = f.ttid), (g.getJSON || g.postJSON || g.getOriginalJSONP) && (h.type = "originaljson"), "undefined" != typeof f.valueType && ("original" === f.valueType ? h.type = "originaljson" : "string" === f.valueType && delete h.type), g.useJsonpResultType === !0 && delete h.type, Object.assign && f.dangerouslySetAlipayParams && Object.assign(h, f.dangerouslySetAlipayParams), a.AlipayJSBridge.call("mtop", h, d), e.promise
    }, o.prototype.__processRequest = function (a, b) {
        var c = this;
        return q.then(function () {
            var a = c.options;
            if (a.H5Request && (a.getJSONP || a.getOriginalJSONP)) return c.__requestJSONP(b);
            if (a.H5Request && (a.getJSON || a.postJSON)) return c.__requestJSON(b);
            if (a.WindVaneRequest) return u ? c.__requestAlipay(b) : c.__requestWindVane(b);
            throw new Error("UNEXCEPT_REQUEST::é”™è¯¯çš„è¯·æ±‚ç±»åž‹")
        }).then(a).then(function () {
            var a = c.options, b = (c.params, a.results[0]), d = b && b.ret || [];
            b.ret = d, d instanceof Array && (d = d.join(","));
            var e = b.c;
            a.CDR && e && j(x, e, {
                domain: a.pageDomain,
                path: "/"
            }), d.indexOf("SUCCESS") > -1 ? b.retType = t.SUCCESS : b.retType = t.ERROR, a.retJson = b
        })
    }, o.prototype.__sequence = function (a) {
        function b(a) {
            if (a instanceof Array) a.forEach(b); else {
                var g, h = c(), i = c();
                e.push(function () {
                    return h = c(), g = a.call(d, function (a) {
                        return h.resolve(a), i.promise
                    }, function (a) {
                        return h.reject(a), i.promise
                    }), g && (g = g["catch"](function (a) {
                        h.reject(a)
                    })), h.promise
                }), f.push(function (a) {
                    return i.resolve(a), g
                })
            }
        }

        var d = this, e = [], f = [];
        a.forEach(b);
        for (var g, h = q; g = e.shift();) h = h.then(g);
        for (; g = f.pop();) h = h.then(g);
        return h
    };
    var B = function (a) {
        a()
    }, C = function (a) {
        a()
    };
    o.prototype.request = function (c) {
        var e = this;
        if (this.options = d(c || {}, r), !p) {
            var f = "å½“å‰æµè§ˆå™¨ä¸æ”¯æŒPromiseï¼Œè¯·åœ¨windowså¯¹è±¡ä¸ŠæŒ‚è½½Promiseå¯¹è±¡";
            throw b.mtop = {ERROR: f}, new Error(f)
        }
        var h = p.resolve([B, C]).then(function (a) {
            var b = a[0], c = a[1];
            return e.__sequence([b, e.__processRequestMethod, e.__processRequestType, e.__processToken, e.__processRequestUrl, e.middlewares, e.__processRequest, c])
        }).then(function () {
            var a = e.options.retJson;
            return a.retType !== t.SUCCESS ? p.reject(a) : e.options.successCallback ? void e.options.successCallback(a) : p.resolve(a)
        })["catch"](function (a) {
            var c;
            return a instanceof Error ? (console.error(a.stack), c = {
                ret: [a.message],
                stack: [a.stack],
                retJson: t.ERROR
            }) : c = "string" == typeof a ? {
                ret: [a],
                retJson: t.ERROR
            } : void 0 !== a ? a : e.options.retJson, b.mtop.errorListener && b.mtop.errorListener({
                api: e.params.api,
                v: e.params.v,
                retJson: c
            }), e.options.failureCallback ? void e.options.failureCallback(c) : p.reject(c)
        });
        return this.__processRequestType(), e.options.H5Request && (e.constructor.__firstProcessor || (e.constructor.__firstProcessor = h), B = function (a) {
            e.constructor.__firstProcessor.then(a)["catch"](a)
        }), ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (c.pageDomain = c.pageDomain || g(a.location.hostname), c.mainDomain !== c.pageDomain && (c.maxRetryTimes = 4, c.CDR = !0)), this.__requestProcessor = h, h
    }, b.mtop = function (a) {
        return new o(a)
    }, b.mtop.request = function (a, b, c) {
        var d = {
            H5Request: a.H5Request,
            WindVaneRequest: a.WindVaneRequest,
            LoginRequest: a.LoginRequest,
            AntiCreep: a.AntiCreep,
            AntiFlood: a.AntiFlood,
            successCallback: b,
            failureCallback: c || b
        };
        return new o(a).request(d)
    }, b.mtop.H5Request = function (a, b, c) {
        var d = {H5Request: !0, successCallback: b, failureCallback: c || b};
        return new o(a).request(d)
    }, b.mtop.middlewares = s, b.mtop.config = r, b.mtop.RESPONSE_TYPE = t, b.mtop.CLASS = o
}(window, window.lib || (window.lib = {})), function (a, b) {
    function c(a) {
        return a.preventDefault(), !1
    }

    function d(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
        return b ? b[1] : void 0
    }

    function e(b, d) {
        var e = this, f = a.dpr || 1, g = document.createElement("div"),
            h = document.documentElement.getBoundingClientRect(), i = Math.max(h.width, window.innerWidth) / f,
            j = Math.max(h.height, window.innerHeight) / f;
        g.style.cssText = ["-webkit-transform:scale(" + f + ") translateZ(0)", "-ms-transform:scale(" + f + ") translateZ(0)", "transform:scale(" + f + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + i + "px", "height:" + j + "px", "z-index:999999", "position:" + (i > 800 ? "fixed" : "absolute"), "left:0", "top:0px", "background:" + (i > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");
        var k = document.createElement("div");
        k.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), k.innerText = b;
        var l = document.createElement("a");
        l.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), l.innerText = "å…³é—­";
        var m = document.createElement("iframe");
        m.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), i > 800 && (k.style.cssText = ["width:370px", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:" + (i / 2 - 185) + "px", "top:40px", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), m.style.cssText = ["position:absolute", "top:92px", "left:" + (i / 2 - 185) + "px", "width:370px", "height:480px", "border:0", "background:#FFF", "overflow:hidden"].join(";")), k.appendChild(l), g.appendChild(k), g.appendChild(m), g.className = "J_MIDDLEWARE_FRAME_WIDGET", document.body.appendChild(g), m.src = d, l.addEventListener("click", function () {
            e.hide();
            var a = document.createEvent("HTMLEvents");
            a.initEvent("close", !1, !1), g.dispatchEvent(a)
        }, !1), this.addEventListener = function () {
            g.addEventListener.apply(g, arguments)
        }, this.removeEventListener = function () {
            g.removeEventListener.apply(g, arguments)
        }, this.show = function () {
            document.addEventListener("touchmove", c, !1), g.style.display = "block", window.scrollTo(0, 0)
        }, this.hide = function () {
            document.removeEventListener("touchmove", c), window.scrollTo(0, -h.top), g.parentNode && g.parentNode.removeChild(g)
        }
    }

    function f(a) {
        var c = this, d = this.options, e = this.params;
        return a().then(function () {
            var a = d.retJson, f = a.ret, g = navigator.userAgent.toLowerCase(),
                h = g.indexOf("safari") > -1 && g.indexOf("chrome") < 0 && g.indexOf("qqbrowser") < 0;
            if (f instanceof Array && (f = f.join(",")), (f.indexOf("SESSION_EXPIRED") > -1 || f.indexOf("SID_INVALID") > -1 || f.indexOf("AUTH_REJECT") > -1 || f.indexOf("NEED_LOGIN") > -1) && (a.retType = l.SESSION_EXPIRED, !d.WindVaneRequest && (k.LoginRequest === !0 || d.LoginRequest === !0 || e.needLogin === !0))) {
                if (!b.login) throw new Error("LOGIN_NOT_FOUND::ç¼ºå°‘lib.login");
                if (d.safariGoLogin !== !0 || !h || "taobao.com" === d.pageDomain) return b.login.goLoginAsync().then(function (a) {
                    return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])
                })["catch"](function (a) {
                    throw"CANCEL" === a ? new Error("LOGIN_CANCEL::ç”¨æˆ·å–æ¶ˆç™»å½•") : new Error("LOGIN_FAILURE::ç”¨æˆ·ç™»å½•å¤±è´¥")
                });
                b.login.goLogin()
            }
        })
    }

    function g(a) {
        var b = this.options;
        this.params;
        return b.H5Request !== !0 || k.AntiFlood !== !0 && b.AntiFlood !== !0 ? void a() : a().then(function () {
            var a = b.retJson, c = a.ret;
            c instanceof Array && (c = c.join(",")), c.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && a.data.url && (b.AntiFloodReferer ? location.href = a.data.url.replace(/(http_referer=).+/, "$1" + b.AntiFloodReferer) : location.href = a.data.url)
        })
    }

    function h(b) {
        var c = this, f = this.options, g = this.params;
        return f.AntiCreep !== !1 && (f.AntiCreep = !0), g.forceAntiCreep !== !0 && f.H5Request !== !0 || k.AntiCreep !== !0 && f.AntiCreep !== !0 ? void b() : b().then(function () {
            var b = f.retJson, h = b.ret;
            if (h instanceof Array && (h = h.join(",")), (h.indexOf("RGV587_ERROR::SM") > -1 || h.indexOf("ASSIST_FLAG") > -1) && b.data.url) {
                var j = "_m_h5_smt", k = d(j), l = !1;
                if (f.saveAntiCreepToken === !0 && k) {
                    k = JSON.parse(k);
                    for (var m in k) g[m] && (l = !0)
                }
                if (f.saveAntiCreepToken === !0 && k && !l) {
                    for (var m in k) g[m] = k[m];
                    return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])
                }
                return new i(function (d, h) {
                    function i() {
                        m.removeEventListener("close", i), a.removeEventListener("message", k), h("USER_INPUT_CANCEL::ç”¨æˆ·å–æ¶ˆè¾“å…¥")
                    }

                    function k(b) {
                        var e;
                        try {
                            e = JSON.parse(b.data) || {}
                        } catch (l) {
                        }
                        if (e && "child" === e.type) {
                            m.removeEventListener("close", i), a.removeEventListener("message", k), m.hide();
                            var n;
                            try {
                                n = JSON.parse(decodeURIComponent(e.content)), "string" == typeof n && (n = JSON.parse(n));
                                for (var o in n) g[o] = n[o];
                                f.saveAntiCreepToken === !0 ? (document.cookie = j + "=" + JSON.stringify(n) + ";", a.location.reload()) : c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]).then(d)
                            } catch (l) {
                                h("USER_INPUT_FAILURE::ç”¨æˆ·è¾“å…¥å¤±è´¥")
                            }
                        }
                    }

                    var l = b.data.url, m = new e("", l);
                    m.addEventListener("close", i, !1), a.addEventListener("message", k, !1), m.show()
                })
            }
        })
    }

    if (!b || !b.mtop || b.mtop.ERROR) throw new Error("Mtop åˆå§‹åŒ–å¤±è´¥ï¼");
    var i = a.Promise, j = b.mtop.CLASS, k = b.mtop.config, l = b.mtop.RESPONSE_TYPE;
    b.mtop.middlewares.push(f), b.mtop.loginRequest = function (a, b, c) {
        var d = {LoginRequest: !0, H5Request: !0, successCallback: b, failureCallback: c || b};
        return new j(a).request(d)
    }, b.mtop.antiFloodRequest = function (a, b, c) {
        var d = {AntiFlood: !0, successCallback: b, failureCallback: c || b};
        return new j(a).request(d)
    }, b.mtop.middlewares.push(g), b.mtop.antiCreepRequest = function (a, b, c) {
        var d = {AntiCreep: !0, successCallback: b, failureCallback: c || b};
        return new j(a).request(d)
    }, b.mtop.middlewares.push(h)
}(window, window.lib || (window.lib = {}));
!function (t) {
    function e(n) {
        if (a[n]) return a[n].exports;
        var o = a[n] = {i: n, l: !1, exports: {}};
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    var a = {};
    e.m = t, e.c = a, e.d = function (t, a, n) {
        e.o(t, a) || Object.defineProperty(t, a, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var a = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(a, "a", a), a
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 0)
}([function (t, e, a) {
    !function () {
        function t(t) {
            k || Util.errorLog($.extend({}, j, t))
        }

        function e(t) {
            return t.qieId ? "qieId_" + t.qieId : t.floorId ? "floorId_" + t.floorId : void 0
        }

        function n() {
            var t = "m";
            I && (t = "wapa"), T && (t = "waptest"), L = t, M ? (lib.mtop.config.prefix = "h5api", lib.mtop.config.mainDomain = "taobao.com") : D ? (lib.mtop.config.prefix = "h5api", lib.mtop.config.mainDomain = "tmall.com") : A ? (lib.mtop.config.prefix = "h5api", lib.mtop.config.mainDomain = "etao.com") : (lib.mtop.config.useJsonpResultType = !0, lib.mtop.config.prefix = "h5api", lib.mtop.config.mainDomain = "taobao.com"), lib.mtop.config.subDomain = t
        }

        function o() {
            return ++y
        }

        function i(t) {
            t = t || g, $('<iframe id="' + _ + '" src="' + t + '" style="display:none;width:0;height:0;"></iframe>').appendTo($("body"))
        }

        function r() {
            return !!window.postMessage
        }

        function s() {
            return (w.indexOf("localhost") > -1 || w.indexOf("daily-alp.alibaba.net") > -1 || w.indexOf("alp.alibaba.net") > -1 || w.indexOf("taobao.net") > -1 || w.indexOf("alp.alibaba-inc.com") > -1) && r()
        }

        function p(t) {
            if (t.api && U[t.api] && U[t.api].requiredParams && U[t.api].dirName) {
                var e = t.data;
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (t) {
                    e = {}
                }
                var a = new m({
                    api: t.api,
                    type: "mtop",
                    data: e,
                    dirName: U[t.api].dirName,
                    requiredParams: U[t.api].requiredParams,
                    version: t.v
                });
                return {url: a.getCDNAddress(), jsonpCallback: a.getJSONPCallback()}
            }
        }

        function c(e, a, n, o) {
            var i = p(e);
            i && i.url && i.jsonpCallback ? $.ajax({
                url: i.url,
                jsonpCallback: i.jsonpCallback,
                dataType: "jsonp",
                success: function (n) {
                    a && a(n);
                    try {
                        e.closeErrorLog || t({
                            msg: "get taishan data success:" + i.url,
                            c2: "taishan data: success",
                            code: 13
                        })
                    } catch (t) {
                    }
                },
                error: function (t) {
                    n && n(t), n || a && a(t)
                }
            }) : (n && n(o), n || a && a(o))
        }

        function f(t, e, a) {
            d || (d = document.getElementById(_).contentWindow);
            var n = {}, i = o();
            n.options = t, n.uid = i, n.subDomain = L, E[S + i] = e, E[C + i] = a, d.postMessage(JSON.stringify(n), "*")
        }

        function u(t, e, a) {
            b ? v ? f(t, e, a) : $("#" + _).on("load", function () {
                f(t, e, a)
            }) : (i(x ? O : g), b = !0, $(window).on("message", function (t) {
                var e = JSON.parse(t.data), a = e.uid;
                e.success ? E[S + a] && E[S + a](e.data) : E[C + a] && E[C + a](e.data)
            }), $("#" + _).on("load", function () {
                v = !0, f(t, e, a)
            }))
        }

        function l(a, n, o) {
            var i;
            if (s()) u(a, n, o); else if (q) c(a, n, o); else {
                M || A || D || (a.dataType = "json"), "mtop.alimama.union.xt.en.api.entry" == a.api && (i = e(a.data), a.data.pNum && i ? a.data.trackStatus || (a.data.trackStatus = N[i] || "") : N[i] = "");
                var r = a.mtopTrackDataConfig || window.MM_MTOP_TRACK_DATA_CONFIG;
                a.mtopTrackDataConfig && delete a.mtopTrackDataConfig, r && (a.data = h.track(r, a.data)), lib.mtop.request($.extend(!0, {}, a, {optimusTmplConfig: ""}), function (t) {
                    if (a && "mtop.alimama.union.xt.en.api.entry" == a.api && (t && t.data && i && (N[i] = t.data.trackStatus), i && a.optimusTmplConfig && t && t.data && t.data.recommend && t.data.recommend.resultList && t.data.recommend.resultList.length)) {
                        var e, o, r = t.data.recommend.resultList, s = r.length;
                        if (i.indexOf("floorId_") > -1 && (s = 1), a.optimusTmplConfig.xtEnDataConfig) for (var p = 0; p < s; p++) {
                            o = r[p];
                            for (e in a.optimusTmplConfig.xtEnDataConfig) a.optimusTmplConfig.xtEnDataConfig[e].isRequired && void 0 === o[e] && console && console.error && console.error(i + ",ç¼ºå°‘å­—æ®µ:" + e)
                        }
                    }
                    n && n(t)
                }, function (e) {
                    if (e && e.ret && e.ret[0] && (e.ret[0].indexOf("TOKEN_EMPTY") > -1 || e.ret[0].indexOf("TOKEN_EXOIRED") > -1 || e.ret[0].indexOf("SESSION_EXPIRED") > -1 || e.ret[0].indexOf("SID_INVALID") > -1 || e.ret[0].indexOf("AUTH_REJECT") > -1 || e.ret[0].indexOf("NEED_LOGIN") > -1 || e.ret[0].indexOf("RGV587_ERROR::SM") > -1 || e.ret[0].indexOf("FAIL_SYS_USER_VALIDATE") > -1 || e.ret[0].indexOf("ILLEGAL_ACCESS") > -1 || e.ret[0].indexOf("HY_FAILED") > -1 || e.ret[0].indexOf("HY_NO_HANDLER") > -1 || e.ret[0].indexOf("HY_CLOSED") > -1 || e.ret[0].indexOf("HY_EXCEPTION") > -1 || e.ret[0].indexOf("FAIL_BIZ_EXCEEDED_PAGE_NUM") > -1 || e.ret[0].indexOf("HY_NO_PERMISSION") > -1)) return o && o(e), o || n && n(e), void (e.ret[0].indexOf("ILLEGAL_ACCESS") > -1 && (a.closeErrorLog || t({
                        msg: "mtop error:" + e.ret[0] + "; api:" + a.api + ", v:" + a.v,
                        c2: "options:" + JSON.stringify(a) + ";data:" + JSON.stringify(e)
                    })));
                    var i;
                    try {
                        i = JSON.parse(a.data)
                    } catch (t) {
                        i = {}
                    }
                    if ("mtop.alimama.union.xt.en.api.entry" == a.api && i.pNum && i.pNum > 2) return o && o(e), void (o || n && n(e));
                    c(a, n, o, e);
                    var r = "";
                    e && e.ret && e.ret[0] && "string" == typeof e.ret[0] && (r = e.ret[0]), a.closeErrorLog || t({
                        msg: "mtop error:" + r + "; api:" + a.api + ", v:" + a.v,
                        c2: "options:" + JSON.stringify(a) + ";data:" + JSON.stringify(e)
                    })
                })
            }
        }

        var d, m = a(1), h = a(5), g = "https://mo.m.taobao.com/page_mtop",
            O = "http://localai.m.taobao.com:4009/mtop.html", y = 0, b = !1, v = !1, x = !1, _ = "MM_MTOP_IFRAME",
            S = "MM_MTOP_SUC_CB_", C = "MM_MTOP_FAIL_CB_", E = {}, N = {}, w = location.hostname,
            I = (location.protocol, !!(location.search.indexOf("systype=wapa") > -1)),
            T = !!(location.search.indexOf("systype=waptest") > -1), M = w.indexOf("taobao.com") > -1,
            A = w.indexOf("etao.com") > -1, D = w.indexOf("tmall.com") > -1, L = "m", P = function () {
                var t = document.getElementsByTagName("script");
                return t[t.length - 1]
            }(), k = !!P.getAttribute("data-closeclue"), R = P.getAttribute("data-cluepid"),
            J = P.getAttribute("data-cluecode"), j = {code: 11, pid: "mm-union-mtop"};
        R && (j.pid = R), J && (j.code = J);
        var q = !!(location.search.indexOf("istaishantest=1") > -1), U = $.extend({
            "mtop.alimama.union.xt.en.api.entry": {
                requiredParams: ["floorId", "pNum", "channel", "qieId", "qId", "p4pPid"],
                dirName: "xt-op-new"
            }
        }, window.MM_TS_PARAMS_CFG);
        n(), window.MM_MTOP = {iframeSend: u, send: l, setMtopConfig: n}
    }()
}, function (t, e, a) {
    t.exports = a(2)
}, function (t, e, a) {
    function n(t) {
        this.apiConfig = t, this.rules = o.parse(t)
    }

    var o = a(3), i = location.protocol + "//global.alicdn.com/";
    n.prototype = {
        getKey: function () {
            return this.rules && this.rules.key ? "TAI_LSKEY_" + this.apiConfig.type.toUpperCase() + "_" + this.rules.key : null
        }, getCDNAddress: function () {
            return this.rules ? i + this.rules.path + (this.rules.params ? "/" + this.rules.params : "") : null
        }, getJSONPCallback: function () {
            return this.rules.key || null
        }
    }, n.prototype.getJSONPCallbak = n.prototype.getJSONPCallback, t.exports = n
}, function (t, e, a) {
    function n(t) {
        var e;
        switch (t.type) {
            case"http":
                e = o(t);
                break;
            case"mtop":
                e = r(t);
                break;
            default:
                e = null
        }
        return e
    }

    function o(t) {
        var e = t.api, a = t.type, n = t.dirName || c, o = {};
        if (e) {
            var r = new p(e), f = r.host;
            "/" !== r.pathname && (f += r.pathname), f = n + "/" + a + "/" + f, o.path = f;
            var u = {};
            if (r.search.substr(1).replace(/(\w+)=(\w+)/gi, function (t, e, a) {
                u[e] = decodeURIComponent(a)
            }), t.data) for (var l in t.data) u[l] = t.data[l];
            var d = s(u, t.requiredParams);
            o.params = d || void 0, o.key = i(o) || void 0
        }
        return o
    }

    function i(t) {
        var e = t && t.path, a = t && t.params, n = e + "" + a, o = [];
        return n.split("").forEach(function (t) {
            t >= "0" && t <= "9" || t <= "z" && t >= "a" ? o.push(t) : t <= "Z" && t >= "A" && o.push(t.toLowerCase())
        }), o.join("")
    }

    function r(t) {
        var e = t.api, a = t.type, n = t.dirName || c, o = {};
        if (e) {
            o.path = n + "/" + a + "/" + t.api + "_" + (t.version || "1.0");
            var r = s(t.data, t.requiredParams);
            o.params = r || void 0, o.key = i(o) || void 0
        }
        return o
    }

    function s(t, e) {
        var a;
        if (t) {
            a = [];
            for (var n in t) t.hasOwnProperty(n) && (!e || e.indexOf(n) > -1) && void 0 != t[n] && "" != t[n] && a.push(n + "-" + t[n]);
            a.sort()
        } else a = [];
        return a.join("_")
    }

    var p = a(4), c = "default";
    t.exports = {parse: n}
}, function (t, e) {
    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    var n = function () {
            function t(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var n = e[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, a, n) {
                return a && t(e.prototype, a), n && t(e, n), e
            }
        }(),
        o = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"),
        i = function () {
            function t(e) {
                a(this, t), this.parse(e)
            }

            return n(t, [{
                key: "parse", value: function (t) {
                    var e = t.match(o) || [];
                    this.protocol = e[1] || "http:", this.username = e[2], this.password = e[3], this.hostname = e[4] || "", this.port = e[5] || "", this.pathname = e[6] || "/", this.search = e[7] ? "?" + e[7] : "", this.hash = e[8] || "", this.host = this.hostname + (this.port ? ":" + this.port : ""), this.origin = this.protocol + "//" + this.host, this.href = this.toString()
                }
            }]), t
        }();
    t.exports = i
}, function (t, e) {
    function a(t) {
        if (o[t]) return o[t];
        for (var e, a, s, p, c, f = t.split(","), u = [], l = 0, d = f.length; l < d; l++) e = f[l], a = e.split(":"), s = a[0].split("."), c = s[s.length - 1], a[1] ? r.test(a[1]) ? "function" == n(window[a[1].replace(r, "")]).toLowerCase() && (p = window[a[1].replace(r, "")]()) : p = 0 == a[1].indexOf("@") ? window[a[1].replace(/^@/, "")] : i[c] || a[1] : p = i[c], u.push([s, p]);
        return o[t] = u, u
    }

    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = {}, i = MM_UTIL.getSearchObj(), r = /\(\)$/;
    t.exports = {
        track: function (t, e) {
            e = e || {};
            for (var o, i, r, s, p, c, f = a(t), u = 0, l = f.length; u < l; u++) if (o = f[u], i = o[0], void 0 !== (r = o[1])) if (1 == i.length) e[i[0]] = r; else {
                e[i[0]] || (e[i[0]] = {});
                try {
                    "string" == typeof e[i[0]] && (e[i[0]] = JSON.parse(e[i[0]]))
                } catch (t) {
                    e[i[0]] = {}
                }
                if (s = e[i[0]] || {}, 2 == i.length) s[i[1]] = r; else {
                    for (p = 1, c = i.length - 1; p < c; p++) s = s[i[p]] || {};
                    s[i[i.length - 1]] = r
                }
                "object" == n(e[i[0]]) && (e[i[0]] = JSON.stringify(e[i[0]]))
            }
            return e
        }
    }
}]);
this.Tracker = function (t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {i: n, l: !1, exports: {}};
        return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    var r = {};
    return e.m = t, e.c = r, e.d = function (t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
    }, e.n = function (t) {
        var r = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 1)
}([function (t, e) {
    function r(t) {
        return "object" == typeof t && null !== t
    }

    var n = function (t) {
        return "[object Number]" === Object.prototype.toString.call(t)
    };
    e.isNumber = n, e.isNaN = function (t) {
        return n(t) && t !== +t
    }, e.isArray = function (t) {
        return Array.isArray ? Array.isArray(t) : -1 !== Object.prototype.toString.call(t).toUpperCase().indexOf("ARRAY")
    }, e.noop = function (t) {
        return t || ""
    }, e.extend = function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        return t
    }, e.shallowMerge = function (t, e, r) {
        for (var n in e) e.hasOwnProperty(n) && (r || void 0 === t[n]) && (t[n] = e[n])
    }, e.getSpm = function () {
        var t = "", r = "", n = window.goldlog || {}, i = n.spmAb || n.spm_ab;
        return i && e.isArray(i) && (t = i[0], i[1] && (r = i[1])), {a: t, b: r}
    }, e.unifyErrorMsg = function (t) {
        return /^script error\.?$/i.test(t) ? "Script error" : t
    }, e.getScreenSize = function () {
        return window.screen.width + "x" + window.screen.height
    }, e.generateIdentifier = function (t) {
        return [t.type, t.uid, t.page, t.msg || "", t.ajaxurl || ""].join("_")
    }, e.addEvent = function (t, e, r) {
        t.addEventListener ? t.addEventListener(e, r, !1) : t.attachEvent("on" + e, function () {
            return r.call(t, window.event)
        })
    }, e.isError = function (t) {
        var e = {}.toString.call(t);
        return r(t) && "[object Error]" === e || "[object Exception]" === e || t instanceof Error
    }
}, function (t, e, r) {
    (function (e) {
        function n(t) {
            if (!(this instanceof n)) return new n(t);
            t = t || {}, !0 === t.hotPatch && this._hotPatch(), !1 !== t.global && "object" == typeof d.__trackerOptions && o(t, d.__trackerOptions), this.global = null == t.global || !!t.global, this.pid = t.pid, this.sampleRate = t.sampleRate || 1, this.uidResolver = t.uidResolver || s, this.userOptions = t, this.requiredFields = t.requiredFields || [], this.releaseResolver = t.releaseResolver || s, this.uaParser = t.uaParser || s, this.beforeLog = t.beforeLog || null, this.msgWhitelist = t.msgWhitelist || t.msgWhiteList || w, this.urlWhitelist = t.urlWhitelist || t.urlWhiteList || E, this.oncePerSession = void 0 === t.oncePerSession || t.oncePerSession, this.consoleDisplay = t.consoleDisplay || !1, this.ignoreScriptError = t.ignoreScriptError || !1, this.ignoredQueries = t.ignoredQueries || [], this.global && (d.__trackerOptions = t), this._inited = !1, this._tracked = [], this._logWaitingQueue = [], this._plugins = t.plugins || [], this._pos = "0,0", this._trackMousePos()
        }

        var i = r(0), o = i.shallowMerge, s = i.noop, a = i.generateIdentifier, c = i.getScreenSize, u = i.addEvent,
            l = i.getSpm, h = i.isError, f = r(3), p = r(4), g = i.unifyErrorMsg,
            d = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
            _ = d.document, v = d.navigator, m = !1, y = d.Tracker, b = {JS_ERROR: 1}, w = null, E = null,
            R = +new Date, k = d.onerror;
        n.noConflict = function () {
            return d.Tracker === n && (d.Tracker = y), n
        }, n.prototype = {
            VERSION: "3.3.0", log: function (t, e) {
                "object" == typeof t ? e = t : "string" == typeof t && (e = e || {}, o(e, {
                    code: 1,
                    msg: t
                })), this._log(e)
            }, captureMessage: function (t, e) {
                return this.log(t, e)
            }, logError: function (t, e) {
                if (!h(t)) return this.log(t, e);
                if (e = e || {}, e.c1 || e.c2 || e.c3) return void this.warn("ä½¿ç”¨ tracker.logError() æ—¶ä¸å¯å†ä¼ å…¥ c1,c2,c3 å­—æ®µï¼Œè¯·æ±‚æœªå‘é€");
                var r = {}, n = p(t);
                r.msg = t.toString(), r.c1 = n[0], r.c2 = n[1], r.c3 = n[2], o(r, e), this._log(r)
            }, captureException: function (t, e) {
                return this.logError(t, e)
            }, logReq: function () {
                this.warn("logReq() æ–¹æ³•å·²ç»åºŸå¼ƒï¼Œè‹¥æœ‰éœ€è¦ï¼Œè¯·ä½¿ç”¨è‡ªå®šä¹‰æ‰“ç‚¹æ–¹å¼( `tracker.log()` )ç›‘æŽ§æŽ¥å£é”™è¯¯ã€‚")
            }, logPerf: function () {
                this.warn("logPerf() æ–¹æ³•å·²ç»åºŸå¼ƒï¼Œè‹¥æœ‰éœ€è¦ï¼Œè¯·ä½¿ç”¨è‡ªå®šä¹‰æ‰“ç‚¹æ–¹å¼( `tracker.log()` )ç›‘æŽ§æŽ¥å£é”™è¯¯ã€‚")
            }, config: function (t, e) {
                return "string" == typeof t ? (e = e || {}, e.pid = t) : e = t, o(this, e, !0), o(this.userOptions, e, !0), "object" == typeof d.__trackerOptions && o(d.__trackerOptions, e, !0), this._checkRequiredFields() && this._popWaitingQueue(), this
            }, onGlobalError: function () {
                if (!_) return this;
                var t = this;
                if (this.pid && !this._inited) {
                    if (d.onerror = function (e, r, n, i, o) {
                        t._handleError(e, r, n, i, o)
                    }, this._plugins.length) for (; this._plugins.length > 0;) {
                        var e = this._plugins.pop(), r = e[0], n = e[1];
                        r.apply(this, [this].concat(n))
                    }
                    this._inited = !0
                }
                return this
            }, install: function () {
                return this.onGlobalError()
            }, offGlobalError: function () {
                return _ ? (d.onerror = k, this._inited = !1, this._plugins = [], this._tracked = [], this) : this
            }, uninstall: function () {
                return this.offGlobalError()
            }, addPlugin: function (t) {
                if (!_) return this;
                var e = [].slice.call(arguments, 1);
                return "function" == typeof t && this._inited ? t.apply(this, [this].concat(e)) : this._plugins.push([t, e]), this
            }, _handleError: function (t, e, r, n, i) {
                if (k) try {
                    k.call(this, t, e, r, n, i)
                } catch (t) {
                }
                e = e || "-", r = r || "-", n = n || "-", t = g(t);
                var o = {msg: t, code: b.JS_ERROR};
                if (!this.ignoreScriptError || "Script error" !== t) {
                    if (null != i && (1 === this.sampleRate || Math.random() < .1)) {
                        var s = p(i);
                        o.c1 = s[0], o.c2 = s[1], o.c3 = s[2]
                    }
                    this._log(o)
                }
            }, _handleMouseDown: function (t) {
                var e = _ && _.documentElement, r = Math.round(t.pageY || t.clientY + _.body.scrollTop + e.scrollTop),
                    n = Math.round(t.pageX || t.clientX + _.body.scrollLeft + e.scrollLeft);
                n -= Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth) / 2, this._pos = String(n) + "," + String(r)
            }, _trackMousePos: function () {
                var t = this;
                _ && _.documentElement && u(_, "mousedown", function (e) {
                    t._handleMouseDown(e)
                })
            }, _postData: function (t) {
                var e = "//gm.mmstat.com/" + (t.base || "fsp.1.1"),
                    r = f.stringify(t, ["code", "base", "sampleRate", "oncePerSession"]);
                (new Image).src = e + "?" + r
            }, _log: function (t) {
                if (!_) return this;
                if (t = t || {}, t.type || t.code || (t.type = 1), !t.type && t.code && (t.type = t.code), !(t.type === b.JS_ERROR && Math.random() > (t.sampleRate || this.sampleRate) || null != t.sampleRate && Math.random() > t.sampleRate)) {
                    if (t = this._enhanceOpitons(t), !t.pid) return void this.warn("æœªé…ç½® pidï¼Œè¯·æ±‚æœªå‘é€");
                    for (var e = a(t), r = !1, n = 0; n < this._tracked.length; n++) if (this._tracked[n] === e) {
                        r = !0;
                        break
                    }
                    if (!((null == t.oncePerSession ? this.oncePerSession : t.oncePerSession) && r || this.msgWhitelist && null !== this.msgWhitelist.exec(t.msg) || this.urlWhitelist && null !== this.urlWhitelist.exec(t.page))) {
                        if ("function" == typeof this.beforeLog) {
                            var i;
                            try {
                                i = this.beforeLog(t)
                            } catch (t) {
                            }
                            if (!1 === i) return;
                            "object" == typeof i && (t = i)
                        }
                        if (this._tracked.push(e), this.consoleDisplay && "object" == typeof d && d.console && "function" == typeof d.console.log && d.console.log("[Tracker] %s", t.msg), !this._checkRequiredFields()) return void this._pushWaitingQueue(t);
                        this._postData(t)
                    }
                }
            }, _checkRequiredFields: function () {
                for (var t = 0; t < this.requiredFields.length; t++) {
                    var e = this.requiredFields[t];
                    if (void 0 === this.userOptions[e]) return !1
                }
                return !0
            }, _popWaitingQueue: function () {
                var t = this;
                if (this._logWaitingQueue && this._logWaitingQueue.length) for (var e = 0; e < this._logWaitingQueue.length; e++) {
                    var r = this._logWaitingQueue[e];
                    o(r, t._enhanceOpitonsByUser(t.userOptions), !0), t._postData(r)
                }
                this._logWaitingQueue = []
            }, _pushWaitingQueue: function (t) {
                this._logWaitingQueue.push(t)
            }, _enhanceOpitonsByUser: function (t) {
                return t.uid || (t.uid = this.uidResolver()), t.pid || (t.pid = this.pid), t.rel || (t.rel = this.releaseResolver()), t.ua || (t.ua = this.uaParser(v ? v.userAgent : "")), t
            }, _enhanceOpitons: function (t) {
                t = this._enhanceOpitonsByUser(t), t.page || (t.page = d.location.href.split("?")[0]), t.query || (t.query = f.stringify(f.parse(window.location.search), t.ignoredQueries)), t.hash || (t.hash = window.location.hash), t.title || (t.title = _.title), t.spm_a || (t.spm_a = l().a), t.spm_b || (t.spm_b = l().b), t.scr || (t.scr = c()), t.raw_ua = v ? v.userAgent : "", t.delay = parseFloat(((+new Date - R) / 1e3).toFixed(2)), t.tracker_ver = this.VERSION, t.patch_ver = this.PATCH_VERSION || "-";
                var e = _.referrer.split("?"), r = e[0],
                    n = 2 === e.length ? f.stringify(f.parse(e[1]), t.ignoredQueries) : "";
                return 2 === e.length && n.length > 0 ? t.referrer = r + "?" + n : t.referrer = r, t.last_pos = this._pos, t
            }, warn: function (t) {
                "object" == typeof d && d.console && "function" == typeof d.console.warn && d.console.warn("[Tracker] " + t)
            }, _hotPatch: function () {
                if (d && _) {
                    if (m && d.__trackerPatch) return;
                    m = !0;
                    var t = Math.random();
                    if (d.localStorage && d.localStorage.getItem) {
                        var e = d.localStorage.getItem("__tracker_patch__"), r = +new Date;
                        if (e && r - parseInt(e, 10) < 432e5) t = e; else {
                            t = r;
                            try {
                                d.localStorage.setItem("__tracker_patch__", r)
                            } catch (t) {
                            }
                        }
                    }
                    var n = _.createElement("script");
                    n.src = "//g.alicdn.com/fsp/tracker-patch/index.js?" + t, n.async = !0, n.crossOrigin = !0, n.id = "tracker-patch", (_.head || _.body).appendChild(n);
                    var i = this;
                    d.__trackerPatch = function () {
                        return i
                    }
                }
            }
        }, t.exports = n
    }).call(e, r(2))
}, function (t, e) {
    var r;
    r = function () {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function (t, e) {
    function r(t) {
        return "[object Array]" === {}.toString.call(t)
    }

    e.parse = function (t) {
        var e = {};
        if ("string" != typeof t) return e;
        if (t = (t || "").split("?")[1] || "", !(t = t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").replace(/^(\?|#|&)/, ""))) return e;
        for (var n = t.split("&"), i = 0; i < n.length; ++i) {
            var o = n[i], s = o.replace(/\+/g, " ").split("="), a = s.shift(), c = s.length > 0 ? s.join("=") : void 0;
            a = decodeURIComponent(a), c = void 0 === c ? null : decodeURIComponent(c), void 0 === e[a] ? e[a] = c : r(e[a]) ? e[a].push(c) : e[a] = [e[a], c]
        }
        return e
    }, e.stringify = function (t, e) {
        if (!t) return "";
        e = e || [];
        var r = [];
        for (var n in t) t.hasOwnProperty(n) && r.push(n);
        var i = [];
        r = r.sort();
        for (var o = 0; o < r.length; ++o) {
            n = r[o];
            var s = t[n];
            if (null != s) {
                for (var a = !1, c = 0; c < e.length; ++c) if (e[c] === n) {
                    a = !0;
                    break
                }
                a || i.push(encodeURIComponent(n) + "=" + encodeURIComponent(s))
            }
        }
        return i.join("&")
    }
}, function (t, e, r) {
    (function (e) {
        function r(t) {
            for (var e = ((t || {}).stack || "").split("\n"), r = ["", "", ""], a = {}, c = 0; c < e.length; c++) {
                var u = i, l = (e[c] || "").match(u);
                if (null === l && (u = o, l = (e[c] || "").match(u)), null === l && (u = s, l = (e[c] || "").match(u)), null !== l) {
                    var h = l[1], f = a[h];
                    void 0 === f && (a[h] = "#" + c + "#", f = a[h]), e[c] = e[c].replace(h, f)
                }
            }
            if (e.length > 0) {
                e.shift();
                var p = "";
                for (c = 0; p.length + (e[c] || "").length < n && c < e.length;) p += e[c] + "\n", c++;
                r[1] = p;
                for (var g = ""; g.length + (e[c] || "").length < n && c < e.length;) g += e[c] + "\n", c++;
                r[2] = g
            }
            var d = "";
            for (h in a) a.hasOwnProperty(h) && (d += h + "@" + a[h] + ";");
            return d = d.replace(/;$/, ""), r[0] = d, r
        }

        var n = 500,
            i = /^\s*at .*? ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::\d+)?(?::\d+)?\)?\s*$/i,
            o = /^\s*.*?(?:\(.*?\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::\d+)?(?::\d+)?\s*$/i,
            s = /^\s*at (?:(?:\[object object\])?.+ )?\(?((?:file|ms-appx|https?|blob):.*?):\d+(?::\d+)?\)?\s*$/i;
        "object" == typeof e && "test" === e.env.NODE_ENV && (i = /([^\()]+\.spec\.js)/i), t.exports = r
    }).call(e, r(5))
}, function (t, e) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === n || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function s() {
        d && p && (d = !1, p.length ? g = p.concat(g) : _ = -1, g.length && a())
    }

    function a() {
        if (!d) {
            var t = i(s);
            d = !0;
            for (var e = g.length; e;) {
                for (p = g, g = []; ++_ < e;) p && p[_].run();
                _ = -1, e = g.length
            }
            p = null, d = !1, o(t)
        }
    }

    function c(t, e) {
        this.fun = t, this.array = e
    }

    function u() {
    }

    var l, h, f = t.exports = {};
    !function () {
        try {
            l = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            l = r
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            h = n
        }
    }();
    var p, g = [], d = !1, _ = -1;
    f.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        g.push(new c(t, e)), 1 !== g.length || d || i(a)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (t) {
        return []
    }, f.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}]);
this.performanceTrackerPlugin = function (e) {
    function r(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }

    var t = {};
    return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, r.p = "", r(r.s = 10)
}({
    0: function (e, r) {
        function t(e) {
            return "object" == typeof e && null !== e
        }

        var n = function (e) {
            return "[object Number]" === Object.prototype.toString.call(e)
        };
        r.isNumber = n, r.isNaN = function (e) {
            return n(e) && e !== +e
        }, r.isArray = function (e) {
            return Array.isArray ? Array.isArray(e) : -1 !== Object.prototype.toString.call(e).toUpperCase().indexOf("ARRAY")
        }, r.noop = function (e) {
            return e || ""
        }, r.extend = function (e, r) {
            for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
            return e
        }, r.shallowMerge = function (e, r, t) {
            for (var n in r) r.hasOwnProperty(n) && (t || void 0 === e[n]) && (e[n] = r[n])
        }, r.getSpm = function () {
            var e = "", t = "", n = window.goldlog || {}, i = n.spmAb || n.spm_ab;
            return i && r.isArray(i) && (e = i[0], i[1] && (t = i[1])), {a: e, b: t}
        }, r.unifyErrorMsg = function (e) {
            return /^script error\.?$/i.test(e) ? "Script error" : e
        }, r.getScreenSize = function () {
            return window.screen.width + "x" + window.screen.height
        }, r.generateIdentifier = function (e) {
            return [e.type, e.uid, e.page, e.msg || "", e.ajaxurl || ""].join("_")
        }, r.addEvent = function (e, r, t) {
            e.addEventListener ? e.addEventListener(r, t, !1) : e.attachEvent("on" + r, function () {
                return t.call(e, window.event)
            })
        }, r.isError = function (e) {
            var r = {}.toString.call(e);
            return t(e) && "[object Error]" === r || "[object Exception]" === r || e instanceof Error
        }
    }, 10: function (e, r, t) {
        function n(e, r) {
            var t = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance;
            if (t && t.timing) {
                var n = t.setResourceTimingBufferSize || t.webkitSetResourceTimingBufferSize;
                n && n.call(t, 200);
                var a = {
                    sampleRate: .1,
                    isCalEntry: !1,
                    dirtyThreshold: 6e4,
                    scriptThreshold: 250,
                    cssThreshold: 250,
                    imgThreshold: 500
                };
                r && (void 0 !== r.scriptThreshold && i.isNumber(r.scriptThreshold) && r.scriptThreshold <= a.scriptThreshold && (r.scriptThreshold = a.scriptThreshold), void 0 !== r.cssThreshold && i.isNumber(r.cssThreshold) && r.cssThreshold <= a.cssThreshold && (r.cssThreshold = a.cssThreshold), void 0 !== r.imgThreshold && i.isNumber(r.imgThreshold) && r.imgThreshold <= a.imgThreshold && (r.imgThreshold = a.imgThreshold));
                var s = i.extend(a, r), c = {
                    scriptLog: function () {
                        var r = {code: 3};
                        return r.pid = e.pid, r.page = window.location.href.split("?")[0], r.sampleRate = s.sampleRate, r
                    }, scriptPageLog: function () {
                        var e = this.scriptLog();
                        this.needSend = !0;
                        var r = t.timing, n = r.navigationStart, i = this.collectPerformanceTiming(r);
                        for (var o in i) i.hasOwnProperty(o) && (e[o] = i[o]);
                        return e.firstPaintTime = this.collectFirstPaint(r, n), this.collectNetworkInformation() && (e.effectiveType = this.collectNetworkInformation()), e
                    }, scriptEntryLog: function () {
                        var e = this.scriptLog(), r = t.getEntriesByType("resource");
                        return e.entry = JSON.stringify(this.collectEntries(r)), e
                    }, collectPerformanceTiming: function (e) {
                        var r = {};
                        r.loadTime = e.loadEventEnd - e.fetchStart, r.domReadyTime = e.domComplete - e.domInteractive, r.readyStart = e.fetchStart - e.navigationStart, r.redirectTime = e.redirectEnd - e.redirectStart, r.appcacheTime = e.domainLookupStart - e.fetchStart, r.unloadEventTime = e.unloadEventEnd - e.unloadEventStart, r.lookupDomainTime = e.domainLookupEnd - e.domainLookupStart, r.connectTime = e.connectEnd - e.connectStart, r.requestTime = e.responseEnd - e.requestStart, r.initDomTreeTime = e.domInteractive - e.responseEnd, r.loadEventTime = e.loadEventEnd - e.loadEventStart, r.tillDomLookupEndTime = e.domainLookupEnd - e.navigationStart, r.tillResponseEndTime = e.responseEnd - e.navigationStart, r.tillDomReadyTime = e.domInteractive - e.navigationStart, r.totalTime = e.loadEventEnd - e.navigationStart;
                        for (var t in r) r.hasOwnProperty(t) && (!i.isNumber(r[t]) || i.isNaN(r[t]) || r[t] < 0 ? r[t] = -1 : r[t] >= s.dirtyThreshold ? r[t] = -2 : r[t] = parseFloat(r[t].toFixed(2)));
                        return r
                    }, collectFirstPaint: function (e, r) {
                        var t;
                        if (window.chrome && window.chrome.loadTimes ? t = 1e3 * window.chrome.loadTimes().firstPaintTime : i.isNumber(e.msFirstPaint) && (t = e.msFirstPaint), void 0 === t || !i.isNumber(t) || i.isNaN(t)) return -1;
                        var n;
                        return n = t >= r ? parseFloat((t - r).toFixed(2)) : -1, n >= s.dirtyThreshold && (n = -2), n
                    }, collectNetworkInformation: function () {
                        if (navigator.connection && navigator.connection.effectiveType) return navigator.connection.effectiveType
                    }, collectEntries: function (e) {
                        for (var r, t = {}, n = 0; n < e.length; n++) r = e[n].responseEnd - e[n].fetchStart, (0 === e[n].decodedBodySize || !i.isNumber(r) || i.isNaN(r) || "script" === e[n].initiatorType && r >= s.scriptThreshold || "css" === e[n].initiatorType && r >= s.cssThreshold || "img" === e[n].initiatorType && r >= s.imgThreshold) && (t[e[n].name] = {
                            size: e[n].decodedBodySize,
                            type: e[n].initiatorType,
                            loadTime: r
                        });
                        return t
                    }, checkDirtyIndexes: function (e) {
                        var r = !0;
                        for (var t in e) if (e.hasOwnProperty(t) && -2 === e[t]) {
                            r = !1;
                            break
                        }
                        return r
                    }, getPagePerformance: function () {
                        var r = this;
                        try {
                            var t = r.scriptPageLog();
                            t.base = o, s.isCalEntry && (t = i.extend(t, r.scriptEntryLog())), r.checkDirtyIndexes(t) && e.log(t)
                        } catch (r) {
                            e.logError(r, {pid: "fsp", code: 12, c4: e.pid})
                        }
                    }
                }, d = !1;
                window.addEventListener("load", function () {
                    d = !0
                }), window.addEventListener("beforeunload", function () {
                    d && c.getPagePerformance()
                })
            }
        }

        var i = t(0), o = "/fsp.1.3";
        e.exports = n
    }
});
!function (i) {
    var d = MM_UTIL.getSearchObj();

    function c(i) {
        for (var r, e = (i || "").split(";"), n = {}, t = 0, d = e.length; t < d; t++) (r = e[t].split(":"))[0] && (n[r[0]] = r[1]);
        return n
    }

    function u(i) {
        i = i || {};
        var r = [];
        for (var e in i) i.hasOwnProperty && i.hasOwnProperty(e) && void 0 !== i[e] && "traffic_flag" != e && r.push(e + ":" + i[e]);
        return r.join(";")
    }

    var r = c(d.union_lens), o = r.prepvid || "", a = {
        recoveryid: function () {
            return "lm" == r.traffic_flag ? this.pvid() : r.recoveryid ? r.recoveryid : this.pvid()
        }, pvid: function () {
            return MM_UTIL.getPvid()
        }, union_lens: function () {
            return r.recoveryid = this.recoveryid(), r.prepvid = this.pvid(), u(r)
        }
    };
    i.initTrack = function (i, r) {
        var p;
        var n = /\w+\(\)$/, t = /\(\)$/;
        p = i.split(",").map(function (i) {
            return i.split(":")
        }).filter(function (i) {
            return d.hasOwnProperty(i[0]) || -1 === "".indexOf(i[0])
        }).map(function (i) {
            if (i[1] && n.test(i[1])) {
                var r = i[1].replace(t, "");
                return "function" == typeof a[r] ? i[1] = a[r]() : "function" == typeof window[r] ? i[1] = window[r]() : i[1] = void 0, i
            }
            if (i[1] && 0 === i[1].indexOf("$")) {
                var e = i[1].slice(1);
                return i[1] = window[e], i
            }
            return i[1] && 0 === i[1].indexOf("@") ? i[1] = i[1].slice(1) : ("pid" !== i[0] || d.pid || d.refpid || d.ali_trackid || (d.pid = i[1]), "pid" === i[0] && (d.refpid ? d.pid = d.refpid : d.pid || d.ali_trackid ? (d.pid = d.pid || d.ali_trackid, d.pid = d.pid.match(/mm_\d+_\d+_\d+/), d.pid = d.pid && d.pid[0] || i[1]) : d.pid = i[1]), i[1] = d[i[0]] || i[1]), i
        }), MM_UTIL.trackFileds = p, $("body").on("click", "a", function (i) {
            var r, e, n = i.currentTarget, t = n.getAttribute("href");
            if (!n.getAttribute("notneedchange") && t && 0 !== t.indexOf("javascript")) {
                for (var d = new lib.httpurl(t), o = 0, a = p.length; o < a; o++) "union_lens" === MM_UTIL.trackFileds[o][0] ? (e = c(d.params.union_lens), r = c(MM_UTIL.trackFileds[o][1]), e.recoveryid = r.recoveryid, e.prepvid = r.prepvid, d.params.union_lens = u(e)) : void 0 !== p[o][1] && (d.params[p[o][0]] = p[o][1]);
                n.href = d.toString()
            }
        }), MM_UTIL.trackUrl = function (i) {
            for (var r, e, n = new lib.httpurl(i), t = 0, d = MM_UTIL.trackFileds.length; t < d; t++) "union_lens" === MM_UTIL.trackFileds[t][0] ? (e = c(n.params.union_lens), r = c(MM_UTIL.trackFileds[t][1]), e.recoveryid = r.recoveryid, e.prepvid = r.prepvid, n.params.union_lens = u(e)) : void 0 !== MM_UTIL.trackFileds[t][1] && (n.params[MM_UTIL.trackFileds[t][0]] = MM_UTIL.trackFileds[t][1]);
            return n.toString()
        }
    }, i.sendPV = function (i, r) {
        "string" == typeof i && (r = i, i = {});
        var e = window.goldlog_queue || (window.goldlog_queue = []),
            n = ($("body").attr("data-spm") || "").split("/")[1], t = {
                recoveryid: a.recoveryid(),
                timestamp: (new Date).getTime(),
                prePvid: o,
                selfPvid: a.pvid(),
                req_url: location.href,
                bucket_info: window.bucket_info
            };
        e.push({
            action: "goldlog.sendPV",
            arguments: [{page_id: n, is_auto: !1, checksum: r || "46836989"}, $.extend({}, t, i)]
        })
    }
}(window);
!function (t) {
    function n(t) {
        if (!(this instanceof n)) return new n(t);
        for (var i in t) this[i] = t[i];
        this._init()
    }

    n.prototype._init = function (t) {
        this.init && "function" == typeof this.init && this.init()
    }, n.prototype.render = function (t) {
        var i = this;
        if (i.tmpl) {
            if (!i.fixData) return $.tmpl(i.tmpl, t);
            if ("function" == typeof i.fixData) return $.tmpl(i.tmpl, i.fixData(t))
        }
    }, t.BaseItem || (t.BaseItem = n)
}(window);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
!function () {
    function t(e) {
        if (!(this instanceof t)) return new t(e);
        (this.opt = $.extend(!0, {
            attrIgnore: "data-lazy-ignore",
            attrSrc: "data-src",
            attrView: "data-mxview",
            attrDataRewrite: "data-rewrite",
            allowScrollCheck: !0,
            allowResizeCheck: !0,
            allowCollectOnInit: !0,
            allowCheckOnInit: !0,
            offset: "100 0 600 0",
            throttleWait: n,
            rewriteRules: a,
            rewriteParams: {quality: 75, webp: !0}
        }, e)).lazySelector = this.getLazySelector(), this.init()
    }

    var e = window.ETParams || {}, i = e.webpUsable;
    void 0 === i && function () {
        var t = navigator.userAgent || "";
        if (/Android|Chrome/.test(t)) {
            var r = new Image;
            r.onload = r.onerror = function () {
                i = e.webpUsable = !(!r.width || !r.height)
            }, r.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAgA0JaQAA3AA/vuUAAA="
        } else i = e.webpUsable = !1
    }();
    var r = function (t, e, i, r) {
        var n = $(t);
        if (i = i || this.offsetArr || [0, 0, 0, 0], r = r || n.offset(), "hidden" === n.css("visibility") || !r.width && !r.height) return !1;
        return r.left < e.scrollLeft + e.winWidth + i[1] && r.left + r.width > e.scrollLeft - i[3] && r.top < e.scrollTop + e.winHeight + i[2] && r.top + r.height > e.scrollTop - i[0]
    }, n = 20, a = [[/^(?:https?:|)\/\/(?:alp|ossgw|gjusp)\.alicdn\.com\//, function (t, e, r) {
        return t.replace(/^(.*?)(?:@([^\?#\.]*?|)(?:\.([^\?#]+?))|)([\?#].*|)$/, function (t, n, a, o, s) {
            var l, c, h, u, f = [], w = r.size ? (r.size + "").match(/\d+/g) : [],
                d = e.size ? (e.size + "").match(/\d+/g) : [];
            if (a) {
                var p;
                a.split("_").forEach(function (t, e) {
                    (p = t.match(/^(\d+)w$/)) ? l = p[1] : (p = t.match(/^(\d+)h$/)) ? c = p[1] : (p = t.match(/^(\d+)q$/i)) ? h = p[1] : (p = t.match(/^(\d+[xy]\-\d+)ic$/i)) ? u = p[1] : f.push(t)
                })
            }
            "width" in r ? l = r.width : w[0] > 0 ? l = w[0] : l || ("width" in e ? l = e.width : d[0] > 0 && (l = d[0])), l > 0 && l < 4096 && f.unshift(l + "w"), "height" in r ? c = r.height : w[1] > 0 ? c = w[1] : c || ("height" in e ? c = e.height : d[1] > 0 && (c = d[1])), c > 0 && c < 4096 && f.unshift(c + "h"), "quality" in r ? h = r.quality : !h && "quality" in e && (h = e.quality), h > 0 && h < 100 && f.unshift(h + "q"), "OSSCut" in r ? u = r.OSSCut : !u && "OSSCut" in e && (u = e.OSSCut), /^\d+[xy]\-\d+(ic|)$/.test(u) && f.unshift(u.replace("ic", "") + "ic");
            var g = o;
            return !1 === (!!i && ("webp" in r ? r.webp : e.webp)) ? ("OSSFormat" in r ? g = r.OSSFormat : !g && "OSSFormat" in e && (g = e.OSSFormat), g = g || n.replace(/^.*?([^\.]+|)$/, "$1"), g = /^(jpg|png|bmp|gif|src)$/i.test(g) ? "." + g.toLowerCase() : "") : g = ".webp", n + (f.length || g ? "@" + f.join("_") + g : "") + s
        })
    }], [/^(?:https?:|)\/\/[^\/]+\.(?:tbcdn|taobaocdn|alicdn)\.(?:com|cn)\//, function (t, e, r) {
        return t.replace(/^(.*?)(?:_(\d+x\d+[a-z]*?|sum|b|m|)(c[xy]\d+i\d+|)(?:[qQ](\d+)|)(?:\.jpg|)(_.webp|)|)([\?#].*|)$/, function (t, n, a, o, s, l, c) {
            var h = [], u = a;
            "size" in r ? u = r.size : "width" in r && "height" in r ? u = r.width + "x" + r.height : u || ("size" in e ? u = e.size : "width" in e && "height" in e && (u = e.width + "x" + e.height)), u && h.push(u);
            var f = o;
            "TFSCut" in r ? f = r.TFSCut : !f && "TFSCut" in e && (f = e.TFSCut), (f = /^(c[xy]|)(\d+i\d+)$/.exec(f)) && h.push((f[1] || "cy") + f[2]);
            var w = s;
            "quality" in r ? w = r.quality : !w && "quality" in e && (w = e.quality), w > 0 && w < 100 && h.push("q" + w);
            var d;
            return d = !!i && ("webp" in r ? r.webp : e.webp), n + (h.length ? "_" + h.join("") + ".jpg" : "") + (!1 !== d ? "_.webp" : "") + c
        })
    }]];
    $.extend(t.prototype, {
        init: function () {
            var t = this, e = this.opt;
            this.offsetArr = this.getOffsetArr(), this.collectedEls = [], this.$win = $(window), this.throttleCheck = function (t, e, i) {
                var r, n, a, o = null, s = 0;
                i || (i = {});
                var l = function () {
                    s = !1 === i.leading ? 0 : +new Date, o = null, a = t.apply(r, n), o || (r = n = null)
                };
                return function () {
                    var c = +new Date;
                    s || !1 !== i.leading || (s = c);
                    var h = e - (c - s);
                    return r = this, n = arguments, h <= 0 || h > e ? (o && (clearTimeout(o), o = null), s = c, a = t.apply(r, n), o || (r = n = null)) : o || !1 === i.trailing || (o = setTimeout(l, h)), a
                }
            }(function (e) {
                t.check()
            }, e.throttleWait || n), this.bindEvent(), e.allowCollectOnInit && this.collect(), e.allowCheckOnInit && this.check()
        }, getOffsetArr: function (t) {
            var e = [0, 0, 0, 0];
            if (!(t = t || this.opt.offset)) return e;
            var i = void 0 === t ? "undefined" : _typeof(t);
            if ("number" === i) e = [t, t, t, t]; else if ("string" === i) switch ((t = t.match(/-?\d+/g) || []).forEach(function (e, i) {
                t[i] = parseFloat(e) || 0
            }), t.length) {
                case 1:
                    e = [t[0], t[0], t[0], t[0]];
                    break;
                case 2:
                    e = [t[0], t[1], t[0], t[1]];
                    break;
                case 3:
                    e = t.concat(t[1]);
                    break;
                case 4:
                    e = t
            }
            return e
        }, getLazySelector: function () {
            var t = this.opt, e = [];
            return t.attrSrc && e.push("[" + t.attrSrc + "]"), t.attrView && e.push("[" + t.attrView + "]"), e.join(",")
        }, getRewriteURL: function (t, e) {
            var i = this.opt, r = i.rewriteRules || [], n = i.rewriteParams || {};
            return e = e || {}, !t || t.match(/\.gif([?#].*|\s*)$/) || $.isEmptyObject(n) && $.isEmptyObject(e) ? t : ($.each(r, function (i, r) {
                if (r[0].test(t)) return "function" == typeof r[1] && (t = r[1](t, n, e)), !1
            }), t)
        }, getViewRangeInfo: function (t) {
            var e = this.$win;
            return t = t || {}, {
                scrollTop: isNaN(parseInt(t.scrollTop)) ? e.scrollTop() : parseInt(t.scrollTop),
                scrollLeft: isNaN(parseInt(t.scrollLeft)) ? e.scrollLeft() : parseInt(t.scrollLeft),
                winWidth: isNaN(parseInt(t.winWidth)) ? e.width() : parseInt(t.winWidth),
                winHeight: isNaN(parseInt(t.winHeight)) ? e.height() : parseInt(t.winHeight)
            }
        }, isViewRange: r, hasAttrSrc: function (t) {
            var e = $(t), i = this.opt;
            return i.attrSrc && !!e.attr(i.attrSrc) || i.attrView && !!e.attr(i.attrView)
        }, onImgLoad: function (t) {
            t.addClass("img-loaded").triggerHandler("lazy:imgLoaded")
        }, onImgError: function (t) {
            t.addClass("lazy-error").triggerHandler("lazy:imgError")
        }, swapSrc: function (t, e) {
            var i, r, n = this, a = $(t), o = this.opt, s = e || o.attrSrc, l = a.attr(s);
            if (a.removeAttr(o.attrSrc), !l) return !0;
            try {
                r = window.eval("(" + a.attr(o.attrDataRewrite) + ")")
            } catch (t) {
            }
            return l = this.getRewriteURL(l, r), a.is("img") ? (a.on("load", function (t) {
                n.onImgLoad(a)
            }), a.on("error", function (t) {
                n.onImgError(a)
            }), a.attr("src", l)) : ((i = new Image).onload = function (t) {
                n.onImgLoad(a), i = null
            }, i.onerror = function (t) {
                n.onImgError(a), i = null
            }, i.src = l, a.css("background-image", "url(" + l + ")")), !0
        }, swapView: function (t, e) {
            if (!Magix) return !1;
            var i = $(t), r = this.opt, n = e || r.attrView, a = i.attr(n);
            if (i.removeAttr(r.attrView), !a) return !0;
            i.attr("mx-view-rendered", a);
            var o = i.attr("id");
            o || (o = Magix.guid("mx-"), i.attr("id", o));
            var s = i.attr("data-ownerid") || Magix.config("rootId"), l = Magix.Vframe.get(s);
            return a && l && l.mountVframe(o, a), !0
        }, swap: function (t) {
            var e = this.opt;
            if ("function" == typeof e.onDomLazy && !e.onDomLazy.call(this, t)) return !0;
            var i = !e.attrSrc || this.swapSrc(t), r = !e.attrView || this.swapView(t);
            return i && r
        }, check: function (t, e) {
            var i, r = this, n = $(t), a = this.opt, o = this.collectedEls, e = this.getViewRangeInfo(e);
            if (n.length > 0) (o = this.collectList(n)).forEach(function (t, n) {
                var o = (i = $(t)).attr(a.attrIgnore) || "";
                "1" !== o && "true" !== o.toLowerCase() && i.length > 0 && r.hasAttrSrc(i) && r.isViewRange(i, e) && r.swap(t)
            }), o = []; else {
                for (var s = 0, l = o.length; s < l; s++) {
                    var c = (i = $(o[s])).attr(a.attrIgnore) || "";
                    "1" !== c && "true" !== c.toLowerCase() && ((i.length < 1 || !this.hasAttrSrc(i) || this.isViewRange(i, e) && this.swap(i)) && (o.splice(s, 1), --l, --s))
                }
                this.collectedEls.length < 1 && this.unBindEvent()
            }
            return this
        }, swapAll: function (t) {
            var e = this, i = $(t);
            return i.length > 0 ? (this.collectList(i).forEach(function (t, i) {
                e.swap(t)
            }), []) : (this.collectedEls.forEach(function (t, i) {
                e.swap(t)
            }), this.collectedEls = [], this.unBindEvent()), i = null, this
        }, collectList: function (t, e, i) {
            var r = $(t), n = [];
            if (t && r.length < 1) return n;
            r.length < 1 && (r = $("body"));
            var a = this.opt, e = e || this.opt.lazySelector, o = r.find(e);
            r.is(e) && (o = r.add(o));
            var s, l, c;
            return o.each(function (t, e) {
                s = $(e), l = !1, a.attrIgnore && (c = s.attr(a.attrIgnore)) && ("1" === c || "true" === c.toLowerCase()) || i && "1" == s.attr("data-lazy-collect") || (a.attrSrc && (s.attr(a.attrSrc) ? l = !0 : s.removeAttr(a.attrSrc)), a.attrView && (s.attr(a.attrView) ? l = !0 : s.removeAttr(a.attrView)), l && (n.push(s), i && s.attr("data-lazy-collect", "1")))
            }), s = r = null, n
        }, collect: function (t, e, i) {
            var r = this.collectList(t, e, !0);
            return r.length < 1 ? this : (this.collectedEls = i ? r : this.collectedEls.concat(r), this.collectedEls.length > 0 && this.bindEvent(), this)
        }, bindEvent: function () {
            if (!this.hasBindEvent) {
                var t = this.opt, i = this.$win;
                t.allowScrollCheck && (window.addEventListener("scroll", this.throttleCheck, !!e.supportEventPassive && {passive: !0}), window.addEventListener("touchmove", this.throttleCheck, !!e.supportEventPassive && {passive: !0})), t.allowResizeCheck && i.on("resize", this.throttleCheck), this.hasBindEvent = !0
            }
        }, unBindEvent: function () {
            if (this.hasBindEvent && this.throttleCheck) {
                var t = this.opt, e = this.$win;
                t.allowScrollCheck && (window.removeEventListener("scroll", this.throttleCheck), window.removeEventListener("touchmove", this.throttleCheck)), t.allowResizeCheck && e.off("resize", this.throttleCheck), this.hasBindEvent = !1
            }
        }, setOffset: function (t) {
            this.opt.offset = t, this.offsetArr = this.getOffsetArr(t)
        }
    }), t.isViewRange = r, window.ET_LAZY = t
}();
!function () {
    var a = window.ET_LAZY || {}, n = window.ETParams || {}, i = $(window);
    !function () {
        var t = n.lazyOffset, l = parseInt(n.lazyQuality);
        l = isNaN(l) ? 75 : l, this.lazy = window.Glazy = a({
            offset: "",
            allowCheckOnInit: 0,
            allowCollectOnInit: 0,
            rewriteParams: {quality: l}
        }), t && i.on("load", function () {
            window.Glazy.setOffset(t)
        })
    }()
}();
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
!function (t, d) {
    var n = navigator.userAgent, s = 2 <= (window.devicePixelRatio ? window.devicePixelRatio : 1), m = "gw.alicdn.com",
        r = /_(\d+x\d+|cy\d+i\d+|sum|m|b)?(xz|xc)?(q\d+)?(s\d+)?(\.jpg)?(_\.webp)?$/i, p = "square", l = "widthFixed",
        f = "heightFixed", g = "xz", u = {
            widths: [110, 150, 170, 220, 240, 290, 450, 570, 580, 620, 790],
            heights: [170, 220, 340, 500],
            xzs: [72, 80, 88, 90, 100, 110, 120, 145, 160, 170, 180, 200, 230, 270, 290, 310, 360, 430, 460, 580, 640],
            square: [16, 20, 24, 30, 32, 36, 40, 48, 50, 60, 64, 70, 72, 80, 88, 90, 100, 110, 120, 125, 128, 145, 180, 190, 200, 200, 210, 220, 230, 240, 250, 270, 300, 310, 315, 320, 336, 360, 468, 490, 540, 560, 580, 600, 640, 720, 728, 760, 970],
            filterDomains: ["a.tbcdn.cn", "assets.alicdn.com", "wwc.taobaocdn.com", "wwc.alicdn.com", "cbu01.alicdn.com"],
            ossDomains: ["gjusp.alicdn.com", "ossgw.alicdn.com", "alp.alicdn.com", "ykimg.alicdn.com", "z.alicdn.com"]
        }, w = [/^img[1,2,3,4]\.tbcdn\.cn$/], y = {
            sharpen: "s150",
            retinaHighQ: "q50",
            retinaLowQ: "q30",
            highQ: "q90",
            lowQ: "q75",
            q: "q50",
            baseDpr: 2,
            diffGif: !0,
            fixHostList: []
        };
    if (t.cellPageData) {
        var e = t.cellPageData.get("libImgConfig", {});
        i(y, e), t.cellPageData.on("libImgConfig", function () {
            i(y, t.cellPageData.get("libImgConfig", {}))
        })
    }

    function i(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    var o, a, b = !1, c = "webp";
    !function () {
        try {
            var t = window.localStorage.getItem(c);
            t ? "1" == t && (b = !0) : (/AliApp\((TB)\/([\d\.]+)\)/i.test(n) || /AliApp\((TM)\/([\d\.]+)\)/i.test(n) || !/iPhone/i.test(n)) && ((e = document.createElement("img")).onload = function () {
                if (0 < e.width) {
                    b = !0;
                    try {
                        window.localStorage.setItem(c, "1")
                    } catch (t) {
                    }
                }
            }, e.src = "//gw.alicdn.com/mt/TB11KmBXwoQMeJjy0FoXXcShVXa-1-1.png_.webp")
        } catch (t) {
        }
        var e
    }();
    try {
        a = function () {
            "[object Array]" == Object.prototype.toString.call(y.q) && (y.q = s ? o ? "wifi" == o ? y.retinaHighQ : y.retinaLowQ : y.retinaHighQ : o ? "wifi" == o ? y.highQ : y.lowQ : y.highQ)
        }, null != navigator.userAgent.match(/WindVane/i) && window.WindVane ? WindVane.call("WVNetwork", "getNetworkType", {}, function (t) {
            t && t.type && (o = t.type.toLowerCase()), a && a()
        }, function (t) {
            a && a()
        }) : a && a()
    } catch (t) {
    }

    function v(t, e) {
        e = e || p;
        var n = u.square;
        if (!t || "string" != typeof t && "number" != typeof t) throw new Error("wrong size type");
        switch ("string" == typeof t && t.match(/^\d+x\d+$/) && (t = e == f ? t.split("x")[1] : t.split("x")[0]), e) {
            case l:
                n = u.widths;
                break;
            case f:
                n = u.heights;
                break;
            case g:
                n = u.xzs
        }
        var r = n[n.length - 1], i = n[0], o = 0, a = y.baseDpr;
        if (s || (t = parseInt(t / a)), r <= t) return r;
        if (t <= i) return i;
        for (var c = n.length; 0 <= c; c--) if (n[c] <= t) {
            n[c] == t ? o = t : c < n.length - 1 && (o = n[c + 1]);
            break
        }
        return o
    }

    function x(t) {
        var e, n, r = "", i = "", o = t.q || y.q;
        e = !1 === t.sharpen ? "" : t.sharpen || y.sharpen;
        var a = p;
        if (t && (void 0 !== t.size && (n = t.size), t.type && t.type.match(new RegExp("^(" + [p, l, f, g].join("|") + ")$")) && (a = t.type)), n) switch (r = v(n, a), a) {
            case p:
                r = r + "x" + r;
                break;
            case l:
                r += "x10000";
                break;
            case f:
                r = "10000x" + r;
                break;
            case g:
                r = r + "x" + r + "xz"
        }
        return i = "_" + r, i += o + e, i += ".jpg"
    }

    function h(t, e) {
        var n, r = e.q || y.q;
        return r && (t = t + "/quality,Q_" + r.replace(/^q/, "")), (n = !1 === e.sharpen ? "" : parseInt((e.sharpen || y.sharpen).replace(/^s/, ""), 10)) && (t = t + "/sharpen," + n), b && (t += "/format,webp"), t
    }

    function _(e, t) {
        if (!e) return "";
        if ("string" == typeof e) {
            try {
                var n = new d.httpurl(e)
            } catch (t) {
                return e
            }
            e = n
        }
        "string" == typeof (t = t || {}) && (t = {size: t});
        var r = t.type || p, i = t.size, o = "image";
        if (i) switch (i = i.split("x"), r) {
            case p:
            case l:
                o = o + "/resize,w_" + i[0];
                break;
            case f:
                o = o + "/resize,h_" + i[1] || i[0];
                break;
            case g:
                o = o + "/resize,m_fill,h_" + i[1] || i[0] + ",w_" + i[0]
        }
        return e.params["x-oss-process"] = h(o, t), e.protocol = "", e.toString()
    }

    function q(t) {
        if ("string" == typeof t) try {
            t = new d.httpurl(t)
        } catch (t) {
            return !1
        }
        return -1 != u.ossDomains.indexOf(t.host)
    }

    function D(t, e) {
        var n = t.match(r);
        return n ? n[1] || n[2] || n[3] || n[4] ? t.replace(r, e) : n[0].match(/_\.(jpg|png|gif|jpef)/) ? t + e : void 0 : t.match(/_\.webp$/g) ? t.replace(/_\.webp$/g, e) : t + e
    }

    var j = {
        getIndexCrop: function (e, t) {
            if (!e) return "";
            try {
                var n = new d.httpurl(e)
            } catch (t) {
                return e
            }
            if (t = t || {}, q(n)) {
                var r = "image";
                return r = r + "/indexcrop,y_" + (t.y || 100) + ",i_" + (t.index || 0), n.params["x-oss-process"] = h(r, t), n.protocol = "", n.toString()
            }
            var i = t.q || y.q,
                o = "_cy" + (t.y || 100) + "i" + (t.index || 0) + i + (!1 === t.sharpen ? "" : t.sharpen || y.sharpen) + ".jpg" + (b ? "_.webp" : ""),
                a = n.pathname;
            return n.pathname = D(a, o), n.protocol = "", n.toString()
        }, getOssNewUrl: _, getNewUrl: function (e, t) {
            if (!e || "string" != typeof e) return "";
            try {
                var n = new d.httpurl(e)
            } catch (t) {
                return console.log("[error]wrong img url:", e), e
            }
            var r = n.host, i = n.pathname;
            n.protocol;
            if (q(n)) return _(n, t);
            if (n.protocol = "", -1 != u.filterDomains.indexOf(r)) return /alicdn/.test(r) || (n.protocol = "http:"), n.toString();
            var o = r.match(/(.+\.(?:alicdn|taobaocdn|taobao|mmcdn)\.com)/);
            if (o && o[0] != m && (n.host = m), n.host != m) for (var a, c = w.concat(y.fixHostList), s = 0, p = c.length; s < p; s++) "string" == typeof (a = c[s]) ? a === n.host && (n.host = m) : a.test && a.test(n.hostname) && (n.host = m);
            if (t && t.isOriginal) return n.toString();
            var l = y.q, f = "_" + l + y.sharpen;
            f += ".jpg";
            var g, h = i.match(/-(\d+)-(\d+)\.(?:jpg|png|gif)/);
            h && (f = "_" + (g = v(760 < h[1] ? 760 : h[1])) + "x" + g + l + y.sharpen, f += ".jpg");
            return t && "string" == typeof t ? f = x({size: t}) : t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && 0 < Object.keys(t).length && (f = x(t)), /\.gif/.test(i) && y.diffGif || (/\.png/.test(i) && (f = f.replace(/(q\d+)(s\d+)/, "")), "_.jpg" === f && (f = ""), b && (f += "_.webp"), n.pathname = D(i, f), n.protocol = ""), n.toString()
        }, addFilterDomains: function (t) {
            u.filterDomains = u.filterDomains.concat(t)
        }, addOssDomains: function (t) {
            u.ossDomains = u.ossDomains.concat(t)
        }, hasFixed: function (t) {
            var e = new d.httpurl(t);
            return q(e) ? !!e.params["x-oss-process"] : !(!t.match(/_\.webp$/i) && !t.match(r))
        }, changeDefaultConfig: function (t) {
            i(y, t)
        }
    };
    d.img = j
}(window, window.lib || (window.lib = {}));