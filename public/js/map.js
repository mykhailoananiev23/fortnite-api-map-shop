!function() {
    function f(i, r) {
        (i.v || i.yt) && (i.tooltip = '<img class="yt-icon" src="/img/youtube.svg" loading="lazy" alt>' + i.tooltip);
        var n = null;
        i.icon && (n = {
            icon: L.icon({
                iconUrl: "https://fortnite.gg/icons/" + i.icon + ".png",
                iconSize: [40, 40],
                iconAnchor: i.anchor || [20, 20],
                tooltipAnchor: [20, 0]
            })
        });
        var e, o, l = [];
        i.tunnel || i.onewayTunnel ? i.coords.forEach(function(e) {
            var o = i.tunnel ? "#27b3ff" : "#fff";
            "string" == typeof i.tunnel && (o = i.tunnel),
            "string" == typeof i.onewayTunnel && (o = i.onewayTunnel);
            var t = L.polyline(e, {
                weight: 8,
                color: "#000"
            }).addTo(r);
            l.push(t);
            var a = L.polyline(e, {
                weight: 3,
                color: o
            }).addTo(r);
            l.push(a);
            var n, t = {
                radius: 5,
                weight: 2,
                color: "#000",
                fillColor: o,
                fillOpacity: 1
            }, a = L.circleMarker(e[0], t).addTo(r);
            l.push(a),
            i.tunnel ? (n = L.circleMarker(e[e.length - 1], t).addTo(r),
            l.push(n)) : (t = e[e.length - 1][0] - e[e.length - 2][0],
            n = e[e.length - 1][1] - e[e.length - 2][1],
            n = 360 - 57.295779513082 * Math.atan2(t, n),
            o = L.marker(e[e.length - 1], {
                icon: L.divIcon({
                    iconSize: [22, 22],
                    iconAnchor: [11, 11],
                    html: '<svg width="22" height="22" viewBox="0 0 24 24"><path transform="rotate(' + n + ' 12 12)" fill=' + o + ' stroke="#000" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M22 12l-20 12 5-12-5-12z"/></svg>'
                })
            }).addTo(r),
            l.push(o))
        }) : i.cube_path || (i.line ? i.coords.forEach(function(e) {
            var o = L.polyline(e, {
                weight: 8,
                color: "#ffcc7b"
            }).addTo(r);
            l.push(o);
            var t = L.polyline(e, {
                weight: 3,
                color: "#222"
            }).addTo(r);
            l.push(t);
            var a = {
                radius: 5,
                weight: 2,
                color: "#ffcc7b",
                fillColor: "#222",
                fillOpacity: 1
            }
              , n = L.circleMarker(e[0], a).addTo(r);
            l.push(n);
            a = L.circleMarker(e[1], a).addTo(r);
            l.push(a),
            o.bindTooltip(i.tooltip),
            t.bindTooltip(i.tooltip)
        }) : i.path ? i.coords.forEach(function(e) {
            var o = "#149bc7";
            "string" == typeof i.path && (o = i.path);
            var t = L.polyline(e, {
                weight: 8,
                color: "#000"
            }).addTo(r);
            l.push(t);
            var a = L.polyline(e, {
                weight: 3,
                color: o
            }).addTo(r);
            l.push(a);
            o = L.marker(e[0], n).addTo(r).bindTooltip(i.tooltip);
            l.push(o),
            i.icon2 && (n = {
                icon: L.icon({
                    iconUrl: "https://fortnite.gg/icons/" + i.icon2 + ".png",
                    iconSize: [40, 40],
                    iconAnchor: i.anchor || [20, 20],
                    tooltipAnchor: [20, 0]
                })
            });
            o = L.marker(e[1], n).addTo(r).bindTooltip(i.tooltip);
            l.push(o),
            e[2] && (e = L.marker(e[2], n).addTo(r).bindTooltip(i.tooltip),
            l.push(e)),
            t.bindTooltip(i.tooltip),
            a.bindTooltip(i.tooltip)
        }) : i.stream ? (e = L.polyline(i.coords, {
            weight: 8,
            color: "#000"
        }).addTo(r),
        l.push(e),
        o = L.polyline(i.coords, {
            weight: 3,
            color: "#f533dd"
        }).addTo(r),
        l.push(o),
        e.bindTooltip(i.tooltip),
        o.bindTooltip(i.tooltip)) : i.coords && i.coords.forEach(function(e) {
            var o = i.properties && i.properties.point_count ? i.properties.point_count : 0
              , t = {
                cluster: o,
                radius: 20,
                img: {
                    url: "https://fortnite.gg/icons/" + i.icon + ".png",
                    size: [40, 40]
                }
            };
            i.offset && (t.offset = i.offset);
            t = L.canvasMarker(e, t).addTo(r);
            o && t.on("mouseover", function() {
                if (i.properties && i.properties.cluster_id) {
                    map.hasLayer(m) && map.removeLayer(m);
                    var e, o = [];
                    for (e of i.clusterIdx.getLeaves(i.properties.cluster_id, 1 / 0))
                        o.push(e.coords || e);
                    m = L.polygon(hull(o, 1 / 0), {
                        color: "#fce51e",
                        interactive: !1
                    }).addTo(map)
                }
            }).on("mouseout", function() {
                map.hasLayer(m) && map.removeLayer(m)
            }),
            l.push(t),
            "?dev" === location.search && t.on("click", function(e) {
                copyToClipboard("[" + e.target._latlng.lat + "," + e.target._latlng.lng + "],")
            }),
            t.bindTooltip(i.tooltip),
            i.popup && t.bindPopup('<img src="/popups/' + i.popup + '.jpg" width="240" height="240">', {
                maxWidth: "auto"
            })
        })),
        l.forEach(function(e) {
            var o = '<div class="item" onclick="$(\'#' + i.htmlId + ' i\').click()"><svg viewBox="0 0 24 24"><path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/></svg> ' + L10N.Hide + "</div>";
            i.v ? o += '<div class="item" onclick="modal(' + i.v + ', \'perfect score\')"><svg viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> ' + L10N["Play Video"] + "</div>" : i.yt && (o += '<div class="item" onclick="modal(\'' + i.yt + '\', \'yt\')"><svg viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg> ' + L10N["Play Video"] + "</div>"),
            e.bindPopup(o)
        })
    }
    function w(g, h, u) {
        var v = document.createElement("div");
        return v.className = "subs" + (null === u ? " first" : ""),
        Object.keys(h).forEach(function(o) {
            var e, t, a, n, i, r, l, c, s, d = (null !== u ? u + "-" : "") + o, p = g + "-" + (null !== u ? u + "-" : "") + o, m = h[o];
            m.until && Date.parse(m.until) < Date.now() || m.since && Date.parse(m.since) > Date.now() || ((e = document.createElement("div")).id = p,
            e.className = "challenge switch" + (m.toggle ? " toggle closed" : "") + (b[g][d] ? " selected" : "") + (m.stage ? " stage" : ""),
            e.dataset.search = m.name.toLowerCase(),
            m.toggle && (e.innerHTML = '<div class="arrow"></div>',
            e.onclick = function() {
                this.classList.toggle("closed")
            }
            ),
            v.appendChild(e),
            i = document.createElement("span"),
            (r = document.createElement("i")).onclick = function(e) {
                !function(e, o, t) {
                    e.stopPropagation();
                    var a = o.id.indexOf("-")
                      , n = o.id.slice(0, a)
                      , i = o.id.slice(a + 1);
                    if (t = void 0 === t ? !o.classList.contains("selected") : t) {
                        o.classList.add("selected"),
                        b[n][i] = 1,
                        map.addLayer(k[n][i]),
                        o.classList.contains("stage") || o.nextSibling && $$(".challenge", o.nextSibling).forEach(function(e) {
                            e.classList.add("selected"),
                            i = e.id.slice(a + 1),
                            b[n][i] = 1,
                            map.addLayer(k[n][i])
                        });
                        for (var r = o.parentNode.previousSibling; r && r.classList.contains("switch"); )
                            r.classList.add("selected"),
                            r.id && (i = r.id.slice(a + 1),
                            b[n][i] = 1,
                            map.addLayer(k[n][i])),
                            r = r.parentNode.previousSibling
                    } else {
                        o.classList.remove("selected"),
                        delete b[n][i],
                        map.removeLayer(k[n][i]),
                        o.nextSibling && $$(".challenge", o.nextSibling).forEach(function(e) {
                            e.classList.remove("selected"),
                            i = e.id.slice(a + 1),
                            delete b[n][i],
                            map.removeLayer(k[n][i])
                        });
                        for (r = o.parentNode.previousSibling; r && r.classList.contains("switch") && !r.classList.contains("stage") && !$(".selected", r.nextSibling); )
                            r.classList.remove("selected"),
                            r.id && (i = r.id.slice(a + 1),
                            delete b[n][i],
                            map.removeLayer(k[n][i])),
                            r = r.parentNode.previousSibling
                    }
                    localStorage.fngg_selected = JSON.stringify(b),
                    _(),
                    logEvents && ajax("/log", null, "event=map.challenge." + (t ? "on" : "off") + "." + o.id)
                }(e, this.parentNode.parentNode)
            }
            ,
            i.appendChild(r),
            e.appendChild(i),
            r = document.createElement("span"),
            t = m.v || m.markers && m.markers[0].v,
            a = m.yt || m.markers && m.markers[0].yt,
            n = m.img || m.markers && m.markers[0].img,
            (t || a || n) && ((i = document.createElement("img")).className = "yt-icon",
            i.src = "/img/youtube.svg",
            i.loading = "lazy",
            i.alt = "",
            i.onclick = function() {
                n ? modal(n, "img") : t ? modal(t, "perfect score") : modal(a, "yt")
            }
            ,
            r.appendChild(i),
            e.appendChild(r)),
            r = document.createElement("span"),
            m.menu_icon && ((l = document.createElement("img")).src = "https://fortnite.gg/icons/" + m.menu_icon + ".png?1",
            l.loading = "lazy",
            l.alt = "",
            r.appendChild(l),
            e.appendChild(r)),
            (l = document.createElement("span")).innerHTML = m.name,
            m.stage && ((r = document.createElement("em")).textContent = "Stage " + m.stage,
            l.prepend(r)),
            e.appendChild(l),
            m.until && ((l = document.createElement("div")).className = "badge countdown",
            l.dataset.until = m.until,
            e.appendChild(l)),
            m.spawns && (c = [],
            m.spawns.forEach(function(e) {
                c = c.concat(window.Data.data.spawns.sub[e].markers)
            }),
            (m.v || m.yt) && c.forEach(function(e) {
                m.v && (e.v = m.v),
                m.yt && (e.yt = m.yt)
            }),
            m.markers ? m.markers = m.markers.concat(c) : m.markers = c),
            s = L.layerGroup(),
            m.markers && (m.cluster && m.markers.forEach(function(e) {
                var o = L.layerGroup().addTo(s)
                  , t = 5;
                if (e.coords[0] && 3 === e.coords[0].length) {
                    for (var t = 16, a = [], n = 0; n < e.coords.length; n++)
                        for (var i = 0; i < e.coords[n][0]; i++)
                            a.push([e.coords[n][1], e.coords[n][2]]);
                    e.coords = a
                }
                y.push(new Supercluster({
                    layerGroup: o,
                    icon: e.icon,
                    htmlId: p,
                    tooltip: m.name,
                    radius: 50,
                    extent: 256,
                    maxZoom: t
                }).load(e.coords))
            }),
            "poi" === o || "landmarks" === o ? m.markers.forEach(function(e) {
                L.canvasMarker(e.coords, {
                    text: e.name,
                    color: "#fff",
                    stroke: "landmarks" === o ? "#5756dc" : "#000",
                    radius: 100,
                    interactive: !1
                }).addTo(s)
            }) : m.cluster || m.markers.forEach(function(e) {
                e.tooltip = m.name,
                e.htmlId = p,
                f(e, s)
            })),
            k[g][d] = s,
            b[g][d] && map.addLayer(s),
            m.sub && v.appendChild(w(g, m.sub, d)))
        }),
        v
    }
    function e() {
        var l = document.createElement("div");
        l.className = "data-wrap";
        var e = document.createElement("div");
        e.style.position = "relative";
        var o = document.createElement("img");
        o.className = "search-clear",
        o.src = "/img/search-clear.svg",
        o.onclick = function() {
            t.value = "",
            $$(".switch").forEach(function(e) {
                e.style.display = ""
            }),
            $(".data-wrap").classList.remove("searching")
        }
        ,
        e.appendChild(o);
        var t = document.createElement("input");
        t.className = "input",
        t.placeholder = L10N.Search + "...",
        t.autocomplete = "off",
        t.style.marginBottom = "26px",
        t.addEventListener("input", function(e) {
            var o = e.target.value.trim().toLowerCase();
            o.length ? ($$(".switch").forEach(function(e) {
                ~e.dataset.search.indexOf(o) ? e.style.display = "block" : e.style.display = "none"
            }),
            $(".data-wrap").classList.add("searching")) : ($$(".switch").forEach(function(e) {
                e.style.display = ""
            }),
            $(".data-wrap").classList.remove("searching"))
        }),
        e.appendChild(t),
        l.appendChild(e),
        Object.keys(window.Data.data).forEach(function(a) {
            k[a] = {},
            b[a] = b[a] || {};
            var e, o, t, n, i, r = window.Data.data[a];
            r.sub && (r.until && Date.parse(r.until) < Date.now() || ((e = document.createElement("div")).className = "week-wrap" + (h[a] ? " opened" : ""),
            (o = document.createElement("div")).className = "week switch" + (b[a] && Object.keys(b[a]).length ? " selected" : ""),
            o.dataset.search = r.name.toLowerCase(),
            o.innerHTML = '<div class="arrow"></div>',
            o.onclick = function() {
                var e, o, t;
                e = this.parentNode,
                o = a,
                t = "open",
                e.classList.contains("opened") ? (t = "close",
                e.classList.remove("opened"),
                delete h[o]) : (e.classList.add("opened"),
                h[o] = 1),
                localStorage.fngg_opened = JSON.stringify(h),
                logEvents && ajax("/log", null, "event=map.week." + t + "." + o)
            }
            ,
            n = document.createElement("span"),
            (t = document.createElement("i")).onclick = function(e) {
                !function(e, o, t) {
                    e.stopPropagation();
                    var a, e = "on";
                    o.classList.contains("selected") ? (e = "off",
                    o.classList.remove("selected"),
                    b[t] = {},
                    Object.values(k[t]).forEach(function(e) {
                        map.removeLayer(e)
                    }),
                    $$(".challenge", o.parentNode).forEach(function(e) {
                        e.classList.remove("selected")
                    })) : (o.classList.add("selected"),
                    b[t] = {},
                    Object.values(k[t]).forEach(function(e) {
                        map.addLayer(e)
                    }),
                    a = t.length,
                    $$(".challenge", o.parentNode).forEach(function(e) {
                        e.classList.add("selected");
                        e = e.id.slice(a + 1);
                        b[t][e] = 1
                    })),
                    localStorage.fngg_selected = JSON.stringify(b),
                    _(),
                    logEvents && ajax("/log", null, "event=map.week." + e + "." + t)
                }(e, this.parentNode.parentNode, a)
            }
            ,
            n.appendChild(t),
            o.appendChild(n),
            t = document.createElement("span"),
            n = r.edited && Date.parse(r.edited) > localStorage.lastSeen,
            r.menu_icon ? t.innerHTML = '<span><img src="'+ 'https://fortnite.gg' +'/icons/' + r.menu_icon + '.png" loading="lazy" alt></span><span' + (r.color ? ' style="border-bottom: 2px solid ' + r.color + '"' : "") + ">" + r.name + "</span>" : t.innerHTML = r.name,
            o.appendChild(t),
            n && ((i = document.createElement("div")).className = "badge new",
            i.textContent = "New",
            o.appendChild(i)),
            r.until && ((i = document.createElement("div")).className = "badge countdown",
            i.dataset.until = r.until,
            o.appendChild(i)),
            r.badge && ((i = document.createElement("div")).className = "badge new",
            i.innerHTML = r.badge,
            o.appendChild(i)),
            e.appendChild(o),
            e.appendChild(w(a, r.sub, null)),
            l.appendChild(e)))
        }),
        $("#sidebar-top").appendChild(l)
    }
    function n(e, o) {
        e > window.innerWidth - 60 && (e = window.innerWidth - 60),
        d.style.left = p.style.left = s.style.width = e + "px",
        o && (a.style.left = e + "px")
    }
    function o(e) {
        i = !0;
        var a = (e.pageX || e.changedTouches[0].pageX) - r;
        document.addEventListener("mousemove", function(e) {
            i && n(r = (r = e.pageX - a) > window.innerWidth - 60 ? window.innerWidth - 60 : r)
        }),
        document.addEventListener("touchmove", function(e) {
            var o = e.changedTouches;
            if (i)
                for (var t = 0; t < o.length; t++)
                    n(r = (r = o[t].pageX - a) > window.innerWidth - 60 ? window.innerWidth - 60 : r)
        })
    }
    function t() {
        i && (i = !1,
        localStorage.resize = r,
        a.style.left = r + "px",
        map.invalidateSize())
    }
    function l(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
    }
    logEvents = !1,
    window.AdditionalSpawns && AdditionalSpawns.forEach(function(o) {
        Object.keys(o).forEach(function(e) {
            Data.data.spawns.sub[e].markers[0].coords = Data.data.spawns.sub[e].markers[0].coords.concat(o[e])
        })
    });
    var i = !1
      , r = localStorage.resize || 360
      , c = !1
      , a = $("#map")
      , s = ($("#message"),
    $("#sidebar"))
      , d = $("#resize-sidebar")
      , p = $("#toggle-sidebar")
      , y = []
      , m = null
      , g = document.createElement("div");
    g.className = "sidebar-right",
    L.Browser.mobile && document.body.classList.add("mobile"),
    localStorage.resize ? n(localStorage.resize, !0) : 0 < window.innerWidth && window.innerWidth < 390 && n(window.innerWidth, !0),
    localStorage.hideSidebar ? (document.body.classList.add("big"),
    setTooltip(p, L10N["Open sidebar"])) : setTooltip(p, L10N["Close sidebar"]),
    localStorage.removeItem("selected"),
    localStorage.removeItem("opened"),
    localStorage.removeItem("season"),
    localStorage.removeItem("completedPunchcards"),
    localStorage.removeItem("completedAchievements");
    var k = {}
      , b = {}
      , h = {};
    window.Selected ? b = window.Selected : localStorage.fngg_selected && (b = JSON.parse(localStorage.fngg_selected)),
    localStorage.fngg_opened && (h = JSON.parse(localStorage.fngg_opened)),
    localStorage.fngg_season != window.Data.season && (localStorage.fngg_season = window.Data.season,
    b = {
        poi: b.poi,
        spawns: b.spawns
    },
    h = {
        poi: h.poi,
        spawns: h.spawns
    },
    localStorage.fngg_selected = JSON.stringify(b),
    localStorage.fngg_opened = JSON.stringify(h)),
    localStorage.fngg_new_poi || (localStorage.fngg_new_poi = 1,
    b.poi = b.poi || {},
    b.poi.poi = 1,
    localStorage.fngg_selected = JSON.stringify(b)),
    map = L.map(a, {
        crs: L.CRS.Simple,
        center: [-128, 128],
        zoom: 1,
        minZoom: 0,
        maxZoom: 7,
        zoomSnap: 0,
        zoomControl: !1,
        attributionControl: !1,
        tap: !1,
        preferCanvas: !0,
        renderer: L.canvas({
            padding: L.Browser.mobile ? 0 : .5
        })
    }),
    L.Browser.mobile || L.control.zoom({
        position: "bottomright"
    }).addTo(map);
    var u, v, E, S, T, M, C, N, z, x, D = [[-256, 0], [0, 256]];
    map.fitBounds(D, {
        animate: !1
    }),
    L.tileLayer("https://fortnite.gg/maps/" + window.Data.map + "/{z}/{x}/{y}.jpg", {
        noWrap: !0,
        bounds: D
    }).addTo(map),
    window.AdditionalMaps && Object.keys(AdditionalMaps).forEach(function(e) {
        L.imageOverlay(e, AdditionalMaps[e]).addTo(map)
    });
    {
        function _() {
            y.forEach(function(o) {
                var t = o.getClusters(map);
                t && (t.layerGroup.clearLayers(),
                t.markers.forEach(function(e) {
                    e.clusterIdx = o,
                    e.icon = t.icon,
                    e.tooltip = t.tooltip,
                    e.htmlId = t.htmlId,
                    e.coords = [e.coords],
                    f(e, t.layerGroup)
                }))
            })
        }
        function I(e) {
            var o = e._leaflet_id;
            T[o] || (T[o] = L.layerGroup().addTo(map)),
            T[o].clearLayers();
            for (var t = e._latlngs, a = 0; a + 1 < t.length; a++) {
                var n = t[a + 1].lat - t[a].lat
                  , i = t[a + 1].lng - t[a].lng
                  , r = [t[a].lat + n / 2, t[a].lng + i / 2]
                  , i = 360 - 57.295779513082 * Math.atan2(n, i);
                new L.marker(r,{
                    icon: new L.divIcon({
                        className: "arrowIcon",
                        iconSize: [22, 22],
                        iconAnchor: [11, 11],
                        html: '<svg width="22" height="22" viewBox="0 0 24 24"><path transform="rotate(' + i + ' 12 12)" fill="#fff" stroke="#000" d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z"/></svg>'
                    })
                }).addTo(T[o]).options = {
                    drawtype: "arrow",
                    angle: i
                },
                T[o].options = {
                    drawtype: "arrows"
                }
            }
        }
        function O(e) {
            e = e._leaflet_id;
            T[e] && T[e].clearLayers()
        }
        function B(e) {
            if (!M)
                return e;
            var o = .8752;
            return e[0].map ? e.map(e=>[e[0] * o - 16, e[1] * o + 16]) : [e[0] * o - 16, e[1] * o + 16]
        }
        function A(i, r, e) {
            r.options.drawtype = i,
            S.addLayer(r),
            r.on("click", function(e) {
                var o = document.createElement("div")
                  , t = document.createElement("div");
                t.className = "item",
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg> ' + L10N.Edit,
                t.onclick = function() {
                    map.closePopup(n),
                    r.editing.enable(),
                    "polyline" === i && O(r),
                    map.on("click", function() {
                        "polyline" === i && I(r),
                        r.editing.disable()
                    })
                }
                ,
                o.appendChild(t);
                t = document.createElement("div");
                t.className = "item",
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/></svg> ' + L10N.Delete,
                t.onclick = function() {
                    map.closePopup(n),
                    "polyline" === i && O(r),
                    S.removeLayer(r)
                }
                ,
                o.appendChild(t);
                t = document.createElement("div");
                t.className = "item",
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 22c0 1.105-.896 2-2 2s-2-.895-2-2 .896-2 2-2 2 .895 2 2zm-12-8c0 1.104.895 2 2 2s2-.896 2-2-.895-2-2-2-2 .896-2 2zm4 4c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0-12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm12 12c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-.244-8.679l1.034 1.023-5.52 5.469c-1.017 1.005-1.626.132-2.941 1.023-.177.118-.362.164-.538.155-.437-.027-.806-.406-.776-.886.006-.159.064-.328.171-.499.79-1.257.021-1.914 1.013-2.892l5.491-5.439 1.031 1.024-2.915 2.879 2.188-.128 1.762-1.729zm1.025-5.293c-.036.849-.333 1.218-.719 1.195-.215-.014-.425-.149-.618-.32-.279-.247-.705-.23-.973.036-.289.293-.283.768.01 1.055l3.609 3.569c.292.287.761.286 1.047-.006.265-.27.276-.697.025-.979-.191-.212-.34-.443-.324-.684.021-.35.393-.616 1.185-.659 2.664-.146 3.977-1.699 3.977-3.545 0-2.124-1.666-3.69-3.688-3.69-1.869 0-3.416 1.32-3.531 4.028z"/></svg> ' + L10N["Change color"],
                t.onclick = function() {
                    var e = document.createElement("div");
                    new Picker({
                        parent: e,
                        color: r.options.color || "#fce51e",
                        popup: !1,
                        onChange: function(e) {
                            "circlemarker" === i ? r._icon.firstChild.style.color = e.rgbaString : r._icon ? r._icon.firstChild.style.fill = e.rgbaString : r.setStyle({
                                color: e.rgbaString
                            }),
                            r.options.color = e.rgbaString
                        }
                    }),
                    n.setContent(e)
                }
                ,
                o.appendChild(t),
                "marker" !== i && "circlemarker" !== i || ((a = document.createElement("div")).className = "item",
                a.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"/></svg> Change text',
                a.onclick = function() {
                    var e = prompt("Enter text: ");
                    e && ("marker" === i ? r.bindTooltip(l(e)) : "circlemarker" === i && r.setIcon(new L.divIcon({
                        className: "marker-text",
                        html: "<div" + (r.options.color ? ' style="color:' + r.options.color + '"' : "") + ">" + l(e) + "</div>",
                        iconSize: null
                    })),
                    r.options.tooltip = e),
                    map.closePopup(n)
                }
                ,
                o.appendChild(a));
                var a = {};
                "marker" === i && (a = {
                    offset: [0, -25]
                });
                var n = L.popup(a).setLatLng(e.latlng).setContent(o).openOn(map)
            }),
            "polyline" === i && I(r),
            "marker" === i && e && ((e = prompt("Enter marker text: ")) && (r.bindTooltip(l(e)),
            r.options.tooltip = e),
            r._icon.classList.remove("crosshair"))
        }
        ~location.search.indexOf("map=") ? (CanEdit && ((u = new L.Draw.Tooltip(map)).updateContent({
            text: "Click map to place your marker"
        }),
        map.on("mousemove", function(e) {
            u.updatePosition(e.latlng)
        })),
        v = L.layerGroup(),
        Players.forEach(function(a) {
            var n = L.marker(a.coords, {
                name: a.name,
                interactive: CanDelete,
                icon: L.divIcon({
                    className: "dropspot",
                    html: '<img src="' + a.avatar + '"><div>' + l(a.name) + "</div>",
                    iconAnchor: [12, 12],
                    iconSize: null
                })
            }).addTo(v);
            n.on("click", function(e) {
                var o = document.createElement("div");
                o.className = "item",
                o.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/></svg> ' + L10N.Delete,
                o.onclick = function() {
                    ajax(location.href, function(e) {
                        try {
                            var o = JSON.parse(e.responseText);
                            o.message ? showMessage(o.message) : o.success && (map.closePopup(t),
                            v.removeLayer(n))
                        } catch (e) {
                            showMessage(L10N["Connection error, please try again later."])
                        }
                    }, "delete=" + encodeURIComponent(a.name))
                }
                ;
                var t = L.popup().setLatLng(e.latlng).setContent(o).openOn(map)
            })
        }),
        map.addLayer(v),
        map.on("zoom", function() {
            E && clearTimeout(E)
        }),
        map.on("move", function() {
            E && clearTimeout(E)
        }),
        map.on("click", function(e) {
            CanEdit && (E && clearTimeout(E),
            E = setTimeout(function() {
                var t = Math.round(100 * e.latlng.lat) / 100
                  , a = Math.round(100 * e.latlng.lng) / 100;
                ajax(location.href, function(e) {
                    try {
                        u && u.dispose();
                        var o = JSON.parse(e.responseText);
                        o.message ? showMessage(o.message) : o.avatar && o.name && (v.eachLayer(function(e) {
                            e.options.name === o.name && v.removeLayer(e)
                        }),
                        L.marker([t, a], {
                            name: o.name,
                            interactive: CanDelete,
                            icon: L.divIcon({
                                className: "dropspot",
                                html: '<img src="' + o.avatar + '"><div>' + l(o.name) + "</div>",
                                iconAnchor: [12, 12],
                                iconSize: null
                            })
                        }).addTo(v))
                    } catch (e) {
                        showMessage(L10N["Connection error, please try again later."])
                    }
                }, "add=1&x=" + t + "&y=" + a)
            }, 300))
        }),
        $(".leaflet-container").style.cursor = "crosshair") : (e(),
        _(),
        map.on("zoomend", _),
        C = L.Control.extend({
            options: {
                position: "topright"
            },
            onAdd: function(a) {
                for (var n = L.layerGroup(), i = [], r = [], e = 0; e < 11; e++)
                    L.polyline([[25.6 * -e, 0], [25.6 * -e, 256]], {
                        color: "rgba(255,255,255,.5)",
                        weight: 1,
                        interactive: !1
                    }).addTo(n),
                    L.polyline([[0, 25.6 * e], [-256, 25.6 * e]], {
                        color: "rgba(255,255,255,.5)",
                        weight: 1,
                        interactive: !1
                    }).addTo(n);
                for (var o = a.getBounds().pad(-.02), e = 0; e < 10; e++)
                    i.push(L.marker([Math.min(o.getNorth(), 2), 25.6 * e + 12.8], {
                        color: "#fff",
                        icon: L.divIcon({
                            className: "marker-text",
                            html: '<div style="color:#fff">' + String.fromCharCode(e + 1 + 64) + "</div>",
                            iconSize: null
                        })
                    }).addTo(n)),
                    r.push(L.marker([25.6 * -e - 12.8, Math.max(o.getWest(), -5)], {
                        color: "#fff",
                        icon: L.divIcon({
                            className: "marker-text",
                            html: '<div style="color:#fff">' + (e + 1) + "</div>",
                            iconSize: null
                        })
                    }).addTo(n));
                a.on("viewreset move", function() {
                    if (localStorage.fngg_grid) {
                        var e, o = a.getBounds().pad(-.02);
                        for (e in i)
                            i[e].setLatLng([Math.min(o.getNorth(), 2), 25.6 * e + 12.8]);
                        for (e in r)
                            r[e].setLatLng([25.6 * -e - 12.8, Math.max(o.getWest(), -5)])
                    }
                }),
                localStorage.fngg_grid && a.addLayer(n);
                var t = document.createElement("div");
                t.className = "leaflet-bar leaflet-control",
                t.style.marginBottom = "15px",
                t.onclick = function(e) {
                    if (e.preventDefault(),
                    localStorage.fngg_grid)
                        a.removeLayer(n),
                        localStorage.removeItem("fngg_grid");
                    else {
                        var o, t = a.getBounds().pad(-.01);
                        for (o in i)
                            i[o].setLatLng([Math.min(t.getNorth(), 2), 25.6 * o + 12.8]);
                        for (o in r)
                            r[o].setLatLng([25.6 * -o - 12.8, Math.max(t.getWest(), -5)]);
                        a.addLayer(n),
                        localStorage.fngg_grid = 1
                    }
                }
                ;
                var l = document.createElement("a");
                return l.className = "leaflet-draw-open",
                l.href = "#",
                l.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/></svg>',
                t.appendChild(l),
                l.setAttribute("data-tooltip-right", ""),
                l.setAttribute("aria-label", "Show grid"),
                setTooltip(l, "Show grid"),
                t
            }
        }),
        map.addControl(new C),
        "/embed" !== location.pathname && (S = new L.FeatureGroup,
        map.addLayer(S),
        T = {},
        window.Drawing && (D = [[0, 256], [-256, 0]],
        Object.keys(Drawing).forEach(function(o) {
            Drawing[o].forEach && Drawing[o].forEach(function(e) {
                e.color || (e.color = "#fce51e"),
                "circle" === o || "marker" === o || "circlemarker" === o ? D = [[Math.min(D[0][0], e.latlng[0]), Math.min(D[0][1], e.latlng[1])], [Math.max(D[1][0], e.latlng[0]), Math.max(D[1][1], e.latlng[1])]] : e.latlng.forEach(function(e) {
                    D = [[Math.min(D[0][0], e[0]), Math.min(D[0][1], e[1])], [Math.max(D[1][0], e[0]), Math.max(D[1][1], e[1])]]
                })
            })
        }),
        map.fitBounds(D),
        M = !1,
        (C = new URLSearchParams(location.search).get("d")) && 4 === (C = C.split("/")).length && new Date(String(2e3 + Number(C[0])) + "-" + C[1].padStart(2, "0") + "-" + C[2].padStart(2, "0")) < new Date("2023-03-10") && (M = !0),
        Drawing.polyline && Drawing.polyline.forEach(function(e) {
            A("polyline", L.polyline(B(e.latlng), {
                color: e.color,
                weight: 4
            }), !1)
        }),
        Drawing.polygon && Drawing.polygon.forEach(function(e) {
            A("polygon", L.polygon(B(e.latlng), {
                color: e.color,
                fillOpacity: .4,
                weight: 4
            }), !1)
        }),
        Drawing.rectangle && Drawing.rectangle.forEach(function(e) {
            A("rectangle", L.rectangle(B(e.latlng), {
                color: e.color,
                fillOpacity: .4,
                weight: 4
            }), !1)
        }),
        Drawing.circle && Drawing.circle.forEach(function(e) {
            A("circle", L.circle(B(e.latlng), {
                radius: e.radius,
                color: e.color,
                fillOpacity: .4,
                weight: 4
            }), !1)
        }),
        Drawing.marker && Drawing.marker.forEach(function(e) {
            var o, t, a = L.marker(B(e.latlng), {
                color: e.color,
                icon: new L.divIcon({
                    iconSize: [30, 30],
                    iconAnchor: [15, 30],
                    tooltipAnchor: [15, -15],
                    html: '<svg width="30" height="30" viewBox="0 0 24 24" style="fill:' + e.color + ';stroke:#000"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>'
                })
            });
            e.tooltip && (a.options.tooltip = e.tooltip,
            o = l(e.tooltip),
            a.bindTooltip(o),
            c = !0,
            (t = document.createElement("div")).innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" style="fill:' + e.color + ';stroke:#000"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>' + o,
            t.onmouseover = function() {
                a._icon.classList.add("marker-hover")
            }
            ,
            t.onmouseout = function() {
                a._icon.classList.remove("marker-hover")
            }
            ,
            t.onclick = function() {
                map.setView(a._latlng, 6)
            }
            ,
            g.appendChild(t)),
            A("marker", a, !1)
        }),
        Drawing.circlemarker && Drawing.circlemarker.forEach(function(e) {
            var o;
            e.tooltip && ((o = L.marker(B(e.latlng), {
                color: e.color,
                icon: L.divIcon({
                    className: "marker-text",
                    html: '<div style="color:' + e.color + '">' + l(e.tooltip) + "</div>",
                    iconSize: null
                })
            })).options.tooltip = e.tooltip,
            A("circlemarker", o, !1))
        }),
        c && !L.Browser.mobile && (a.style.right = "190px",
        document.body.appendChild(g),
        (x = document.createElement("div")).className = "leaflet-bar leaflet-control",
        x.style.marginBottom = "20px",
        x.dataset.tooltipRight = !0,
        setTooltip(x, "Close"),
        x.innerHTML = '<a class="close-sidebar-right" href="#"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path></svg></a>',
        x.onclick = function(e) {
            e.preventDefault(),
            this.style.display = "none",
            g.style.display = "none",
            a.style.right = "0"
        }
        ,
        (z = $(".leaflet-top.leaflet-right")).insertBefore(x, z.firstChild))),
        x = L.Control.extend({
            options: {
                position: "topright"
            },
            onAdd: function(o) {
                var e = document.createElement("div");
                e.className = "leaflet-bar leaflet-control",
                e.onclick = function(e) {
                    e.preventDefault(),
                    o.addControl(new L.Control.Draw({
                        edit: !1
                    })),
                    o.addControl(new N),
                    this.style.display = "none"
                }
                ;
                var t = document.createElement("a");
                return t.className = "leaflet-draw-open",
                t.href = "#",
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>',
                e.appendChild(t),
                t.setAttribute("data-tooltip-right", ""),
                t.setAttribute("aria-label", L10N["Draw on map"]),
                setTooltip(t, L10N["Draw on map"]),
                e
            }
        }),
        N = L.Control.extend({
            options: {
                position: "topright"
            },
            onAdd: function(e) {
                function o(e) {
                    drawLayersExport = {
                        polyline: [],
                        polygon: [],
                        rectangle: [],
                        circle: [],
                        marker: [],
                        circlemarker: []
                    },
                    S.eachLayer(function(e) {
                        var o, t = {
                            color: e.options.color
                        }, a = e.options.drawtype;
                        "circle" === a ? (t.radius = Math.round(100 * e.getRadius()) / 100,
                        t.latlng = [Math.round(100 * e._latlng.lat) / 100, Math.round(100 * e._latlng.lng) / 100]) : "marker" === a || "circlemarker" === a ? (t.latlng = [Math.round(100 * e._latlng.lat) / 100, Math.round(100 * e._latlng.lng) / 100],
                        e.options.tooltip && (t.tooltip = e.options.tooltip)) : "polyline" !== a && "polygon" !== a && "rectangle" !== a || (o = [],
                        ("polyline" === a ? e._latlngs : e._latlngs[0]).forEach(function(e) {
                            o.push([Math.round(100 * e.lat) / 100, Math.round(100 * e.lng) / 100])
                        }),
                        t.latlng = o),
                        drawLayersExport[a].push(t)
                    });
                    for (var o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = o.length, a = "", n = 0; n < 8; n++)
                        a += o.charAt(Math.floor(Math.random() * t));
                    var i = new Date
                      , i = i.getFullYear().toString().slice(2) + "/" + (i.getMonth() + 1) + "/" + i.getDate();
                    e = e ? i + "/" + a : getUrlParameter("d");
                    i = new URLSearchParams(location.search);
                    i.set("d", e);
                    i = i.toString().replace(/%2F/g, "/");
                    copyToClipboard(location.origin + "/?" + i),
                    history.replaceState(null, null, location.origin + "/?" + i);
                    var r = new XMLHttpRequest;
                    r.open("POST", "/save-draw?d=" + e, !0),
                    r.onload = function() {
                        200 === r.status && "ok" !== r.responseText && showMessage(L10N["Connection error, please try again later."], "error")
                    }
                    ,
                    r.setRequestHeader("Content-Type", "application/json"),
                    r.send(JSON.stringify(drawLayersExport))
                }
                var t = document.createElement("div");
                t.className = "leaflet-bar leaflet-control",
                t.style.textAlign = "right";
                var a = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"/></svg>'
                  , n = document.createElement("a");
                n.className = "leaflet-draw-save",
                n.href = "#",
                n.innerHTML = a + " <span>Save" + (window.IsLogged ? "" : " (Sign In)") + "</span>",
                window.Drawing || (n.style.display = "none"),
                window.IsMy && window.IsLogged || (n.style.opacity = .5,
                n.style.pointerEvents = "none"),
                n.onclick = function(e) {
                    e.preventDefault(),
                    o(!1)
                }
                ;
                var i = document.createElement("a");
                return i.className = "leaflet-draw-save",
                i.href = "#",
                i.innerHTML = a + " <span>" + (window.Drawing ? "New " : "") + "Save</span>",
                i.onclick = function(e) {
                    e.preventDefault(),
                    o(!0),
                    $("span", i).textContent = "New Save",
                    n.style.display = "",
                    window.IsLogged && (n.style.opacity = 1,
                    n.style.pointerEvents = "auto")
                }
                ,
                t.append(n, document.createElement("br"), i),
                t
            }
        }),
        map.on("draw:created", function(e) {
            A(e.layerType, e.layer, !0)
        }),
        map.addControl(new x)))
    }
    $$(".countdown").forEach(function(n) {
        function e() {
            var e = i - Date.now()
              , o = (Math.floor(e / 1e3 % 60),
            Math.floor(e / 1e3 / 60 % 60))
              , t = Math.floor(e / 36e5 % 24)
              , a = Math.floor(e / 864e5);
            e < 6e4 ? n.parentElement.parentElement.style.display = "none" : (e = "⏱️ ",
            0 < a && (e += a + "d "),
            0 < t && (e += t + "h "),
            0 < o && (e += o + "m "),
            n.innerHTML = e)
        }
        var i = Date.parse(n.dataset.until);
        e(),
        setInterval(e, 6e4)
    }),
    d.addEventListener("mousedown", o),
    d.addEventListener("touchstart", o),
    document.addEventListener("mouseup", t),
    document.addEventListener("touchend", t),
    p.addEventListener("click", function() {
        document.body.classList.contains("big") ? (document.body.classList.remove("big"),
        localStorage.removeItem("hideSidebar"),
        setTooltip(this, L10N["Close sidebar"])) : (document.body.classList.add("big"),
        localStorage.hideSidebar = 1,
        setTooltip(this, L10N["Open sidebar"])),
        map.invalidateSize()
    }),
    on("#open-filters", "click", function() {
        document.body.classList.add("filters-opened")
    }),
    on("#close-filters", "click", function() {
        document.body.classList.remove("filters-opened")
    }),
    "?dev" === location.search && ($(".leaflet-container").style.cursor = "default",
    map.on("click", function(e) {
        copyToClipboard("[" + Math.round(100 * e.latlng.lat) / 100 + "," + Math.round(100 * e.latlng.lng) / 100 + "],")
    })),
    localStorage.lastSeen = Date.now(),
    "?xy" === location.search && (z = prompt("X: "),
    z = parseFloat(z) || 0,
    x = prompt("Y: "),
    x = [256 * -(1 - (z + 131250) / 262500), ((x = parseFloat(x) || 0) + 131250) / 262500 * 256],
    L.marker(x, {
        icon: new L.divIcon({
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            tooltipAnchor: [15, -15],
            html: '<svg width="30" height="30" viewBox="0 0 24 24" style="fill:#fce51e;stroke:#000"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>'
        })
    }).addTo(map),
    map.setView(x, 6))  
    // $(".menu-tos").style.display = "block"
}();


function testGoogleAPP(){
    alert("GP can access to function of tab")
}