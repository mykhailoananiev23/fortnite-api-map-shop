ItemsFiltered = [],
function() {
    function t(e) {
        return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
    function n(e=!0) {
        var t = document.createDocumentFragment();
        if (0 === (v = !e ? 0 : v)) {
            var i = 0
              , a = 0
              , n = 0;
            ItemsFiltered = [];
            var s = {};
            for (o of Items)
                if (!window.ThisItems || -1 !== ThisItems.indexOf(o.id)) {
                    if ("/cosmetics" === location.pathname) {
                        if (localStorage.fngg_hide_wishlisted && window.WishlistItems && WishlistItems.includes(o.id))
                            continue;
                        if (localStorage.fngg_hide_owned && window.LockerItems && LockerItems.includes(o.id))
                            continue
                    }
                    if (p.length)
                        if (!p.every(e=>-1 !== _[o.id].indexOf(e)))
                            continue;
                    k.type && k.type !== o.type || k.source.length && !k.source.includes(o.source) || k.rarity.length && !k.rarity.includes(o.rarity) || y.season.length && !y.season.includes(o.season.toString()) || k.tag.length && !o.t || k.tag.length && !k.tag.some(e=>o.t.includes(e)) || (o.p && ("/wishlist" !== location.pathname && !y.type && o.type === L.type.bundle || (a += o.p)),
                    o.$ && (o.c ? s[o.c] || (s[o.c] = !0,
                    n += o.$) : n += o.$),
                    ItemsFiltered.push(o),
                    i++)
                }
            m && (m.textContent = i.toLocaleString()),
            g && (g.textContent = i.toLocaleString()),
            f && (f.textContent = a.toLocaleString()),
            u && (n ? (u.innerHTML = " &nbsp;+&nbsp; <b>$" + (Math.round(100 * n) / 100).toLocaleString() + "</b>",
            u.style.display = "") : u.style.display = "none")
        }
        for (var o, c = 0; c < w; ) {
            if (!(o = ItemsFiltered[v]))
                break;
            v++;
            var l = document.createElement("a");
            l.href = "/cosmetics?id=" + o.name,
            l.className = "item-icon",
            l.dataset.id = o.name,
            l.addEventListener("click", function(e) {
                e.preventDefault(),
                e.target && ("item-add-my-btn" === e.target.className || "item-del-my-btn" === e.target.className) || modal(this.dataset.id, "item")
            }),
            l.innerHTML = '<div class="item-icon-img' + (o.s ? " plus" : "") + '"><img src="https://fortnite.gg/img/items/' + o.id + "/icon.jpg?" + o.img + '" alt="Fortnite ' + o.name.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") + '"></div><div class="item-icon-name">' + o.name + "</div>";
            var r = document.createElement("div");
            r.className = "item-add-my",
            l.appendChild(r);
            var d = document.createElement("div");
            d.className = "item-" + (window.WishlistItems && WishlistItems.includes(o.id) ? "del" : "add") + "-my-btn",
            d.dataset.type = "wishlist",
            d.dataset.id = o.id,
            d.textContent = "Wishlist",
            r.appendChild(d);
            d = document.createElement("div");
            d.className = "item-" + (window.LockerItems && LockerItems.includes(o.id) ? "del" : "add") + "-my-btn",
            d.dataset.type = "locker",
            d.dataset.id = o.id,
            d.textContent = "Locker",
            r.appendChild(d),
            t.appendChild(l),
            c++
        }
        if (!e)
            for (; h.firstChild; )
                h.removeChild(h.lastChild);
        h.appendChild(t)
    }
    $("#change-privacy") && ($("#change-privacy").onchange = function() {
        ajax(location.pathname, null, "privacy=" + this.value),
        $("#share-link") && ($("#share-link").style.display = "me" === this.value ? "none" : "")
    }
    );
    var h = $("#items");
    if (!h)
        return;
    var i = Number(localStorage.fngg_gridsize) || 8;
    function e(e) {
        13 < (i = (i += e) < 6 ? 6 : i) && (i = 13),
        document.body.style.setProperty("--gridsize", i),
        localStorage.fngg_gridsize = i,
        $(".gridsize-value").textContent = 14 - i,
        w = a(),
        window.pageYOffset + 2 * window.innerHeight >= document.body.offsetHeight && n()
    }
    function a() {
        var e = parseFloat(getComputedStyle(h).getPropertyValue("grid-template-columns"))
          , t = e * (260 / 210);
        return Math.round(h.offsetWidth / e) * Math.ceil(window.innerHeight / t)
    }
    localStorage.fngg_gridsize && document.body.style.setProperty("--gridsize", i),
    $(".gridsize-value") && ($(".gridsize-value").textContent = 14 - i,
    $(".gridsize-plus").onclick = function() {
        e(1)
    }
    ,
    $(".gridsize-minus").onclick = function() {
        e(-1)
    }
    ),
    $("#show-name") && (localStorage.fngg_show_name && ($("#show-name").checked = !0,
    $("#show-name").parentNode.classList.add("active"),
    h.classList.add("show-name")),
    $("#show-name").addEventListener("change", function() {
        this.parentNode.classList.toggle("active"),
        h.classList.toggle("show-name"),
        this.checked ? localStorage.fngg_show_name = 1 : localStorage.removeItem("fngg_show_name")
    })),
    $("#hide-wishlisted") && (localStorage.fngg_hide_wishlisted && ($("#hide-wishlisted").checked = !0,
    $("#hide-wishlisted").parentNode.classList.add("active"),
    h.classList.add("hide-wishlisted")),
    $("#hide-wishlisted").addEventListener("change", function() {
        this.parentNode.classList.toggle("active"),
        h.classList.toggle("hide-wishlisted"),
        this.checked ? localStorage.fngg_hide_wishlisted = 1 : localStorage.removeItem("fngg_hide_wishlisted"),
        n(!1)
    })),
    $("#hide-owned") && (localStorage.fngg_hide_owned && ($("#hide-owned").checked = !0,
    $("#hide-owned").parentNode.classList.add("active"),
    h.classList.add("hide-owned")),
    $("#hide-owned").addEventListener("change", function() {
        this.parentNode.classList.toggle("active"),
        h.classList.toggle("hide-owned"),
        this.checked ? localStorage.fngg_hide_owned = 1 : localStorage.removeItem("fngg_hide_owned"),
        n(!1)
    }));
    var s, m = $("#cosmetics-count"), g = $("#js-locker-count"), f = $("#js-locker-price"), u = $("#js-locker-price-usd"), o = $("#locker-search"), c = $(".search-wrap"), p = [], v = 0, w = a() || 9 * (Math.ceil(window.innerHeight / 150) + 1), l = !1, y = {
        type: "",
        source: [],
        rarity: [],
        season: [],
        tag: [],
        sort: ""
    }, k = {}, L = {
        type: {
            outfit: 1,
            emote: 6,
            pickaxe: 3,
            backpack: 2,
            glider: 4,
            wrap: 7,
            loadingscreen: 12,
            music: 13,
            contrail: 5,
            spray: 9,
            emoji: 10,
            toy: 11,
            banner: 16,
            bundle: 14
        },
        source: {
            shop: 1,
            battlepass: 3,
            crew: 4,
            challenges: 5,
            exclusives: 6,
            packs: 7
        },
        rarity: {
            dark: 1,
            dc: 2,
            frozen: 3,
            gaming: 4,
            icon: 5,
            lava: 6,
            marvel: 7,
            shadow: 8,
            slurp: 9,
            starwars: 10,
            legendary: 13,
            epic: 14,
            rare: 15,
            uncommon: 16,
            common: 17
        },
        tag: {
            styles: 1,
            reactive: 2,
            traversal: 3,
            builtin: 4,
            synced: 5,
            animated: 6
        }
    }, r = {
        newest: function(e, t) {
            return t.added - e.added
        },
        oldest: function(e, t) {
            return e.added - t.added
        },
        series: function(e, t) {
            return e.rarity - t.rarity || e.name.localeCompare(t.name)
        },
        rarity: function(e, t) {
            return t.r - e.r || e.rarity - t.rarity || e.name.localeCompare(t.name)
        },
        style: function(e, t) {
            return e.z || (e.z = 0),
            t.z || (t.z = 0),
            t.z - e.z
        },
        "shop-most-recent": function(e, t) {
            return e.l || (e.l = 0),
            t.l || (t.l = 0),
            t.l - e.l
        },
        "shop-longest-wait": function(e, t) {
            return e.l || (e.l = 0),
            t.l || (t.l = 0),
            e.l === t.l ? 0 : 0 === e.l ? 1 : 0 === t.l ? -1 : e.l - t.l
        },
        "a-z": function(e, t) {
            return e.name.localeCompare(t.name)
        },
        "z-a": function(e, t) {
            return t.name.localeCompare(e.name)
        }
    }, d = new URLSearchParams(location.search);
    function E(e) {
        var t;
        "sort" === e.dataset.key ? (y.sort = e.dataset.val,
        $("#selected-sort").textContent = ": " + e.textContent) : ((t = document.createElement("div")).className = "filter-active",
        t.dataset.key = e.dataset.key,
        t.dataset.val = e.dataset.val,
        e.dataset.chapter ? t.textContent = "C" + e.dataset.chapter + " " + e.textContent : t.textContent = e.textContent,
        t.onclick = function() {
            remove(this),
            C()
        }
        ,
        $(".filters-active") && $(".filters-active").append(t))
    }
    function C(e=!0) {
        y.source = [],
        y.rarity = [],
        y.season = [],
        y.tag = [],
        l = !1,
        $$(".filter-active").forEach(function(e) {
            e.dataset.key in y && (y[e.dataset.key].push(e.dataset.val),
            l = !0)
        });
        for (var [t,i] of Object.entries(y))
            L[t] && (i.map ? k[t] = i.map(e=>L[t][e]) : k[t] = L[t][i]);
        var a;
        $(".filters-active-wrap") && ($(".filters-active-wrap").style.display = l ? "flex" : "none"),
        $(".cosmetics-title-all") && ($(".cosmetics-title-all").style.display = l || o.value ? "none" : ""),
        y.sort.length && y.sort in r ? Items.sort(r[y.sort]) : window.ThisItems && Items.sort((e,t)=>ThisItems.indexOf(e.id) - ThisItems.indexOf(t.id)),
        n(!1),
        e && (a = d.has("id") ? "&id=" + d.get("id") : "",
        d.has("items") && (a += "&items=" + d.get("items")),
        d.has("ak47") && (a += "&ak47=" + d.get("ak47")),
        Object.entries(y).forEach(function([e,t]) {
            0 !== t.length && (a += "&" + e + "=" + (t.join ? t.join(",") : t))
        }),
        e = location.pathname + (a ? "?" + a.substring(1) : ""),
        Url = e,
        history.replaceState(null, null, e),
        window.ga && ga("send", "pageview", e),
        vmRemove(),
        vmAdd())
    }
    d.forEach(function(e, i) {
        "type" === i && (y.type = e),
        e = e.includes(",") ? e.split(",") : [e],
        $$(".filter-select-btn").forEach(function(t) {
            e.forEach(function(e) {
                t.dataset.key === i && t.dataset.val === e && E(t)
            })
        })
    }),
    C(!1),
    $$(".filter-select").forEach(function(n) {
        n.addEventListener("click", function(e) {
            e.stopPropagation();
            var t, i, a = this.classList.contains("opened");
            $$(".filter-select").forEach(function(e) {
                e.classList.remove("opened")
            }),
            this.classList[a ? "remove" : "add"]("opened"),
            a || (i = this.getBoundingClientRect(),
            e = (t = $(".filter-select-inner", n)).getBoundingClientRect(),
            a = $(".locker-cats-wrap").getBoundingClientRect(),
            t.style.top = this.offsetTop + this.offsetHeight + "px",
            (i = (i = i.left + i.width / 2 - e.width / 2) < a.left ? a.left : i) + e.width > a.right && (i = a.right - e.width),
            t.style.left = i + "px")
        })
    }),
    $$(".filter-select-inner").forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.stopPropagation()
        })
    }),
    document.addEventListener("click", function() {
        $$(".filter-select").forEach(function(e) {
            e.classList.remove("opened")
        })
    }),
    $$(".filter-select-btn").forEach(function(e) {
        e.addEventListener("click", function() {
            $$(".filter-select").forEach(function(e) {
                e.classList.remove("opened")
            });
            var t = !1
              , i = this;
            $$(".filter-active").forEach(function(e) {
                e.dataset.key === i.dataset.key && e.dataset.val === i.dataset.val && (t = !0)
            }),
            t || (E(this),
            C())
        })
    }),
    $$(".locker-cat").forEach(function(e) {
        e.addEventListener("click", function() {
            $(".locker-cat.active") && $(".locker-cat.active").classList.remove("active"),
            this.classList.add("active"),
            y.type = this.dataset.val;
            var t = $(".locker-cat-name", this).textContent;
            $$(".cosmetics-subtitle").forEach(function(e) {
                e.textContent = "" === y.type ? e.dataset.default : t
            }),
            C()
        })
    }),
    $(".filters-clear") && $(".filters-clear").addEventListener("click", function() {
        $$(".filter-active").forEach(function(e) {
            remove(e)
        }),
        C()
    }),
    o && ((s = document.createElement("img")).className = "search-clear",
    s.src = "/img/search-clear.svg",
    s.onclick = function() {
        p = [],
        o.value = "",
        c.classList.remove("searching"),
        n(!1),
        $(".cosmetics-title-all") && ($(".cosmetics-title-all").style.display = l || o.value ? "none" : "")
    }
    ,
    c.appendChild(s),
    o.addEventListener("input", function(e) {
        p = [],
        t(e.target.value).split(" ").forEach(function(e) {
            (e = e.trim().toLowerCase()) && p.push(e)
        }),
        n(!1),
        $(".cosmetics-title-all") && ($(".cosmetics-title-all").style.display = l || o.value ? "none" : ""),
        e.target.value ? c.classList.add("searching") : c.classList.remove("searching")
    }));
    let b = !1;
    window.addEventListener("scroll", function() {
        b || (b = !0,
        setTimeout(function() {
            window.pageYOffset + 2 * window.innerHeight >= document.body.offsetHeight && n(),
            b = !1
        }, 100))
    }, {
        capture: !0,
        passive: !0
    });
    let S;
    window.addEventListener("resize", function() {
        clearTimeout(S),
        S = setTimeout(function() {
            w = a(),
            window.pageYOffset + 2 * window.innerHeight >= document.body.offsetHeight && n()
        }, 100)
    }),
    window.shopVotes = {},
    localStorage.fngg_items_votes && (window.shopVotes = JSON.parse(localStorage.fngg_items_votes));
    const _ = {};
    for (const I of Items)
        _[I.id] = I.name.toLowerCase(),
        457 === I.id && (_[I.id] += " yonder"),
        5882 === I.id && (_[I.id] += " peely"),
        416 === I.id && (_[I.id] += " batman"),
        void 0 !== I.set && (_[I.id] += " " + Sets[I.set]),
        _[I.id] = t(_[I.id]);
    if ("undefined" != typeof SearchTags)
        for (const z in SearchTags)
            for (const N of SearchTags[z])
                _[N] && (_[N] += " " + z);
    const x = $(".back-to-top");
    window.addEventListener("scroll", ()=>{
        x.style.opacity = 200 < window.scrollY ? "1" : "0",
        x.style.visibility = 200 < window.scrollY ? "visible" : "hidden"
    }
    , {
        passive: !0
    }),
    x.onclick = ()=>{
        window.scrollTo(0, 0)
    }
}();
