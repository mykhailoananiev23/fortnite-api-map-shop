function isNumber(number) {
    if (typeof number !== 'number') {
      return false;
    }
  
    if (!isFinite(number)) {
      return false;
    }
  
    return true;
  }

function $(e, t) {
    return (t || document).querySelector(e)
}
function $$(e, t) {
    return (t || document).querySelectorAll(e)
}
function on(e, t, o, n={}) {
    (e = "string" == typeof e ? $(e) : e) && (e.addEventListener ? e.addEventListener(t, o, n) : e.forEach && e.forEach(e=>e.addEventListener(t, o, n)))
}
function remove(e) {
    e && e.parentElement && e.parentElement.removeChild(e)
}
function vmRemove() {
    window.top.__vm_remove_category = window.top.__vm_remove_category || [],
    window.top.__vm_remove_category.push("richmedia_all"),
    window.top.__vm_remove = window.top.__vm_remove || [],
    window.ad1 && window.top.__vm_remove.push(window.ad1),
    window.ad2 && window.top.__vm_remove.push(window.ad2),
    window.ad3 && window.top.__vm_remove.push(window.ad3)
}
function vmAdd() {
    window.top.__vm_add = window.top.__vm_add || [],
    window.ad1 && window.top.__vm_add.push(window.ad1),
    window.ad2 && window.top.__vm_add.push(window.ad2),
    window.ad3 && window.top.__vm_add.push(window.ad3)
}
function closeModal(e=!1) {
    remove($(".contextmenu")),
    $("#item-details-ad") && (window.top.__vm_remove = window.top.__vm_remove || [],
    window.top.__vm_remove.push(modalAd),
    e || vmAdd()),
    $(".iframe-container") && (vmAdd(),
    window.adMap && window.top.__vm_add.push(window.adMap)),
    $$(".modal-wrap").forEach(function(e) {
        e.parentElement.removeChild(e)
    }),
    document.documentElement.classList.remove("overflow-hidden"),
    Url && history.replaceState(null, null, Url)
}
window.emojis = ["💩", "🤮", "😐", "😍", "🔥"],
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach),
window.addEventListener("popstate", function() {
    $(".modal-wrap") && !$(".modal-wrap").classList.contains("fullpage") && closeModal()
});
var modalAd = null;
async function modal(L, e, b="", x={}) {
    var sel_id = L;
    const hasFNGG = Items.some(item => item.name === L);
    if (hasFNGG) {
        fnggItem = Items.find(item => item.name === L);
        L = fnggItem.id;
    }
    closeModal(!0);
    var t = "";
    "img" === e ? t = '<img src="https://fortnite.gg' + L + '">' : "video" === e ? t = '<video loop autoplay playsinline src="' + L + '" onclick="this.paused ? this.play() : this.pause()"></video>' : "video-controls" === e ? t = '<video controls loop autoplay playsinline src="' + L + '"></video>' : "item" === e ? (t = "", b = "/cosmetics?id=" + L, window.ga && ga("send", "pageview", b)) : t = "yt" === e ? (ajax("/log", null, "event=yt." + L), vmRemove(), window.adMap && window.top.__vm_remove.push(window.adMap),'<div><div class="iframe-container"><iframe src="https://www.youtube.com/embed/' + L + (~L.indexOf("?") ? "&" : "?") + 'autoplay=1&rel=0&playsinline=1&modestbranding=1" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>') : "page" === e ? '<iframe style="width:100vw;height:100vh;" src="' + L + '"></iframe>' : "wiki" === e ? '<iframe style="width:80vw;height:80vh;border-radius:8px;" src="https://en.m.wikipedia.org/wiki/' + L + '"></iframe>' : "twitter" === e ? '<div id="twitter-container" style="width:540px;max-width:100%;"></div>' : L, b && history.pushState(null, null, b);
    var E = document.createElement("div");
    function o(e) {
        var t, o, n, a;
        x.hideItemArrows || !window.ItemsFiltered && !window.Items || (t = (window.ItemsFiltered || window.Items).findIndex(e=>e.id == L),
        o = (window.ItemsFiltered || window.Items)[t - 1],
        n = (window.ItemsFiltered || window.Items)[t + 1],
        -1 < t && o && (e += '<div class="close-modal modal-arrow-left" onclick="modal(' + o.id + ', \'item\')"><svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></div>'),
        -1 < t && n && (e += '<div class="close-modal modal-arrow-right" onclick="modal(' + n.id + ', \'item\')"><svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></div>')),
        E.insertAdjacentHTML("beforeend", e);
        const d = $(".item-video", E);
        if (d) {
            const g = document.createElement("div");
            g.style.position = "absolute",
            g.style.display = "none",
            g.style.pointerEvents = "none",
            g.innerHTML = '<svg width="32" height="32" viewBox="0 0 18 18"><path d="M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z" fill="#fff"></path></svg>',
            d.after(g),
            on(d, "click", ()=>{
                d.paused ? d.play() : d.pause()
            }
            ),
            on(d, "contextmenu", e=>{
                e.preventDefault(),
                remove($(".contextmenu"));
                const t = document.createElement("div");
                t.className = "contextmenu",
                t.style.top = e.clientY + "px",
                t.style.left = e.clientX + "px",
                t.oncontextmenu = e=>e.preventDefault();
                const o = document.createElement("div");
                if (o.className = "contextmenu-item",
                o.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M21.9 7.38v19.86l-6.73-6.73a.87.87 0 0 0-1.24 0l-1.73 1.73a.88.88 0 0 0 0 1.24l11.18 11.18c.34.35.9.35 1.24 0L35.8 23.48a.88.88 0 0 0 0-1.24l-1.73-1.73a.87.87 0 0 0-1.24 0l-6.73 6.73V7.38c0-.49-.4-.88-.87-.88h-2.45c-.49 0-.88.4-.88.88ZM10.88 37.13c-.49 0-.88.39-.88.87v2.63c0 .48.4.87.88.87h26.24c.49 0 .88-.4.88-.87V38c0-.48-.4-.87-.88-.87H10.89Z"></path></svg><div class="contextmenu-text">Download video</div>',
                o.onclick = ()=>{
                    var e = d.src.replace("/items/", "/items-download/").replace("-sd", "");
                    fetch(e).then(e=>e.blob()).then(e=>{
                        e = window.URL.createObjectURL(e);
                        const t = document.createElement("a");
                        t.style.display = "none",
                        t.href = e,
                        t.download = "Download.mp4",
                        document.body.appendChild(t),
                        t.click(),
                        window.URL.revokeObjectURL(e)
                    }
                    )
                }
                ,
                t.append(o),
                "share"in navigator) {
                    const a = document.createElement("div");
                    a.className = "contextmenu-item",
                    a.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M2.18 7.17A2 2 0 0 1 4 6h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4L16.22 25 2.49 9.32a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 10H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 24.9Z"></path></svg><div class="contextmenu-text">Share</div>',
                    a.onclick = ()=>{
                        navigator.share({
                            url: "https://fortnite.gg" + b,
                            title: $(".fn-detail-name").textContent
                        })
                    }
                    ,
                    t.append(a)
                }
                const n = document.createElement("div");
                if (n.className = "contextmenu-item",
                n.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M10.21 19.4a1 1 0 0 1 1.42 0l2.33 2.34a1 1 0 0 1 0 1.41l-3.89 3.89a7.7 7.7 0 0 0 10.89 10.89l3.89-3.89a1 1 0 0 1 1.41 0l2.34 2.33a1 1 0 0 1 0 1.42l-3.9 3.89A13 13 0 0 1 6.33 23.29l3.9-3.89ZM34.04 24.85a1 1 0 0 0 0 1.41l2.34 2.34a1 1 0 0 0 1.4 0l3.9-3.9A13 13 0 0 0 23.29 6.33l-3.89 3.9a1 1 0 0 0 0 1.4l2.34 2.34a1 1 0 0 0 1.41 0l3.9-3.89a7.7 7.7 0 1 1 10.88 10.89l-3.89 3.89Z"></path><path d="M15.76 28.49a1 1 0 0 0 0 1.41l2.34 2.34a1 1 0 0 0 1.41 0L32.24 19.5a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.4 0L15.75 28.5Z"></path></svg><div class="contextmenu-text">Copy link</div>',
                n.onclick = ()=>copyToClipboard("https://fortnite.gg" + b),
                t.append(n),
                "pictureInPictureEnabled"in document) {
                    const i = document.createElement("div");
                    i.className = "contextmenu-item",
                    i.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M36 6H12a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1Z"></path><path d="M24 26a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v15a5 5 0 0 1-5 5H29a5 5 0 0 1-5-5V26Zm5-1a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V26a1 1 0 0 0-1-1H29Z"></path></svg><div class="contextmenu-text">Picture-in-picture</div>',
                    i.onclick = ()=>document.pictureInPictureElement ? document.exitPictureInPicture() : d.requestPictureInPicture(),
                    t.append(i)
                }
                document.body.append(t)
            }
            ),
            on(d, "pause", ()=>{
                s(),
                g.style.display = "block"
            }
            ),
            on(d, "play", ()=>{
                s(),
                g.style.display = "none"
            }
            );
            let t = null;
            if (!d.muted && window.matchMedia("(hover: hover)").matches) {
                t = document.createElement("div"),
                t.className = "volume-slider",
                t.innerHTML = '<input type="range" min="0" max="1" value="1" step="0.01"><svg viewBox="0 0 24 24" class="f"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
                const f = $("input", t)
                  , h = $("svg", t);
                let e = 1;
                function i(e) {
                    isNaN(e) || (f.value = e);
                    e = f.value;
                    d.volume = e,
                    localStorage.fngg_item_volume = e,
                    f.style.setProperty("--volume-slider-percent", 100 * e + "%"),
                    0 != e || h.dataset.isMuted || (h.dataset.isMuted = 1,
                    h.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>'),
                    0 != e && h.dataset.isMuted && (delete h.dataset.isMuted,
                    h.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>')
                }
                localStorage.fngg_item_volume && (d.volume = localStorage.fngg_item_volume,
                f.value = localStorage.fngg_item_volume),
                i(),
                f.oninput = i,
                h.onclick = ()=>{
                    0 != f.value && (e = f.value),
                    h.dataset.isMuted ? i(e) : i(0)
                }
                ,
                d.after(t)
            }
            function s() {
                g.style.top = d.offsetTop + d.offsetHeight - 46 + "px",
                g.style.left = d.offsetLeft + 11 + "px",
                t && (t.style.top = d.offsetTop + d.offsetHeight - 46 + "px",
                t.style.left = d.offsetLeft + d.offsetWidth - 46 + "px")
            }
            on(d, "loadedmetadata", s);
            let e;
            window.addEventListener("resize", ()=>{
                clearTimeout(e),
                e = setTimeout(s, 50)
            }
            ),
            on(d, "error", ()=>{
                d.src.endsWith("-sd.mp4") || (d.src = d.src.replace(".mp4", "-sd.mp4"))
            }
            )
        }
        const r = $("audio", E);
        if (r) {
            localStorage.fngg_volume && (r.volume = localStorage.fngg_volume),
            r.addEventListener("volumechange", function() {
                localStorage.fngg_volume = this.volume
            });
            const y = $(".audio-wave", E);
            if (y)
                try {
                    var l = new (window.AudioContext || window.webkitAudioContext);
                    if (!l || !l.createAnalyser || !l.createMediaElementSource)
                        return void (y.style.display = "none");
                    var c = l.createAnalyser();
                    l.createMediaElementSource(r).connect(c),
                    c.connect(l.destination),
                    c.fftSize = 256;
                    var m = c.frequencyBinCount
                      , p = new Uint8Array(m);
                    y.width = y.clientWidth,
                    y.height = y.clientHeight;
                    var v = y.getContext("2d")
                      , u = y.width
                      , w = y.height;
                    !function e() {
                        requestAnimationFrame(e),
                        c.getByteFrequencyData(p),
                        v.clearRect(0, 0, u, w);
                        for (var t, o = u / m * 2.5, n = 0, a = 0; a < m; a++)
                            t = p[a],
                            v.fillStyle = "rgb(" + (t + a / m * 250) + ",0,127)",
                            v.fillRect(n, w - t, o, t),
                            n += 1 + o
                    }()
                } catch (e) {
                    y.style.display = "none"
                }
        }
        "share"in navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && ((a = document.createElement("div")).className = "item-share-btn",
        a.textContent = "Share",
        a.onclick = function() {
            navigator.share({
                url: "https://fortnite.gg" + b,
                title: $(".fn-detail-name").textContent
            })
        }
        ,
        $(".item-add-my", E).append(a)),
        $$(".vote-options", E).forEach(function(e) {
            var t = window.storedVotes[e.dataset.id];
            void 0 === t || (e = $('[data-vote="' + t + '"]', e)) && e.classList.add("active")
        }),
        $$(".vote-option", E).forEach(function(e) {
            e.addEventListener("click", voteClick)
        }),
        $$("[data-tooltip]", E).forEach(function(e) {
            initTooltip(e)
        }),
        $$(".fn-assets-header").forEach(function(e) {
            e.addEventListener("click", function() {
                this.classList.toggle("opened"),
                this.nextSibling.classList.toggle("opened")
            })
        }),
        $("#item-details-ad") && (window.top.__vm_add = window.top.__vm_add || [],
        a = function() {
            (modalAd = document.createElement("div")).setAttribute("class", "vm-placement"),
            modalAd.setAttribute("data-id", "5f773576da7a8f6d26edd3e2"),
            document.querySelector("#item-details-ad").appendChild(modalAd),
            window.top.__vm_add.push(modalAd)
        }
        ,
        "loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a))
    }
    return E.className = "modal-wrap",
    "item" === e && 840 < window.innerWidth && (E.style.padding = "0 40px"),
    E.onclick = function(e) {
        "modal-wrap" === e.target.className && closeModal()
    }
    ,
    E.innerHTML = (x.hideCloseBtn ? "" : '<div class="close-modal" onclick="closeModal()"><svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></div>') + t,
    document.body.insertBefore(E, document.body.firstChild),
    document.documentElement.classList.add("overflow-hidden"),
    "twitter" === e && twttr.widgets.createTweet(L, $("#twitter-container"), {
        theme: "dark",
        dnt: !0
    }),
    "item" === e && (vmRemove(),
    window.storedType || window.storedVotes || (window.storedType = "items",
    "/best-seasons" === location.pathname ? window.storedType = "seasons" : "/concept-royale" === location.pathname && (window.storedType = "crc"),
    window.storedVotes = {},
    localStorage["fngg_" + window.storedType + "_votes"] && (window.storedVotes = JSON.parse(localStorage["fngg_" + window.storedType + "_votes"]))),
    x.cache ? (t = ModalItemsCache.get(L)) ? o(t) : x.target && x.target.addEventListener("modalItemLoaded", ()=>o(ModalItemsCache.get(L))) : ajax("/item-details?id=" + sel_id + (Url.startsWith("/shop") ? "&shop" : "") + "&num_id=" + L, async function(e) {
        console.log(e.responseText)
        o(e.responseText);
    })),
    !1
}
function itemStyle(o, e, t, n) {
    const a = $(".item-video");
    if (a) {
        $$(".style-variant", o.parentNode).forEach(e=>e.classList.remove("active")),
        o.classList.add("active");
        const d = [];
        $$(".style-variant.active").forEach(e=>d.push(e.dataset.idx));
        var i = d.every(e=>"1" === e);
        let e = "https://fnggcdn.com/items/" + a.dataset.id + "/video-" + d.join("-") + ".mp4?" + a.dataset.v
          , t = "/cosmetics?id=" + a.dataset.id + "-" + d.join("-");
        i && (e = "https://fnggcdn.com/items/" + a.dataset.id + "/video.mp4?" + a.dataset.v,
        t = "/cosmetics?id=" + a.dataset.id),
        a.src = e;
        const s = $(".style-name", o.parentNode.previousSibling);
        s && (s.textContent = n),
        history.replaceState(null, null, t)
    }
}
function ajax(e, t, o) {
    var n = new XMLHttpRequest;
    return n.open(o ? "POST" : "GET", e),
    o && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
    t && (n.onload = function() {
        t(n)
    }
    ),
    n.send(o),
    n
}
function formatVotes(e) {
    return 1e6 <= e ? Math.round(e / 1e6 * 10) / 10 + "M" : 1e3 <= e ? Math.round(e / 1e3 * 10) / 10 + "K" : e
}
function voteClick() {
    var e = this.parentNode.dataset.id
      , a = Number(this.dataset.vote)
      , i = window.storedVotes[e];
    this.classList.contains("active") || (ajax("/vote-click", null, "id=" + e + "&vote=" + a + "&type=" + window.storedType),
    $$('.vote-options[data-id="' + e + '"]').forEach(function(e) {
        $$(".vote-option", e).forEach(function(e) {
            e.classList.remove("active");
            var t, o = e.dataset.vote;
            o == a && (e.classList.add("active"),
            t = Number($(".vote-count", e).textContent),
            isNaN(t) || ($(".vote-count", e).textContent = t + 1)),
            void 0 !== i && o == i && (t = Number($(".vote-count", e).textContent),
            isNaN(t) || ($(".vote-count", e).textContent = t - 1))
        });
        var t = Number(e.dataset.sum)
          , o = Number(e.dataset.total);
        void 0 !== i ? t += a - i : (t += a,
        o++);
        var n = 25 * (t / o);
        $(".bar-fire", e.parentNode).style.width = n + "%",
        $(".bar-shit", e.parentNode).style.width = 100 - n + "%",
        e.dataset.sum = t,
        e.dataset.total = o
    }),
    window.storedVotes[e] = a,
    localStorage["fngg_" + window.storedType + "_votes"] = JSON.stringify(window.storedVotes))
}
function getUrlParameter(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
    return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
}
function showMessage(e, t, o=4e3) {
    $$(".message").forEach(function(e) {
        remove(e)
    });
    var n = document.createElement("div");
    n.className = "message" + (t ? " " + t : ""),
    n.innerHTML = '<svg class="message-close" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" width="20" height="20"><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM7.17 5.76a1 1 0 0 0-1.41 1.41L8.59 10l-2.83 2.83a1 1 0 0 0 1.41 1.41L10 11.41l2.83 2.83a1 1 0 0 0 1.41-1.41L11.41 10l2.83-2.83a1 1 0 1 0-1.41-1.41L10 8.59z" fill-rule="evenodd" fill="#000"></path></svg>' + e,
    document.body.appendChild(n),
    setTimeout(function() {
        remove(n)
    }, o)
}
function setTooltip(e, t) {
    "undefined" != typeof orientation || navigator.userAgent.toLowerCase().includes("mobile") || (e.setAttribute("data-tooltip", t),
    remove(tooltip),
    e.onmouseenter || initTooltip(e))
}
function addTooltip(e) {
    var t, o, n;
    "undefined" != typeof orientation || navigator.userAgent.toLowerCase().includes("mobile") || (document.body.appendChild(tooltip),
    tooltip.textContent = e.getAttribute("data-tooltip"),
    t = e.getBoundingClientRect(),
    o = window.pageYOffset + t.top + t.height,
    n = 0,
    e.hasAttribute("data-tooltip-top") && (o -= t.height),
    n = e.hasAttribute("data-tooltip-left") ? window.pageXOffset + t.left : e.hasAttribute("data-tooltip-right") ? window.pageXOffset + t.right - tooltip.offsetWidth : window.pageXOffset + t.left + t.width / 2 - tooltip.offsetWidth / 2,
    tooltip.style.top = o + "px",
    tooltip.style.left = n + "px")
}
function initTooltip(e) {
    "undefined" != typeof orientation || navigator.userAgent.toLowerCase().includes("mobile") || (e.onmouseenter = function() {
        addTooltip(this)
    }
    ,
    e.onmouseleave = function() {
        remove(tooltip)
    }
    )
}
function selectLang(e) {
    var t = new Date;
    t.setDate(t.getDate() + 3650),
    document.cookie = "fngg_lang=" + e + "; expires=" + t,
    location.reload(!0)
}
function selectRegion(e) {
    var t = new Date;
    t.setDate(t.getDate() + 3650),
    document.cookie = "fngg_region=" + e + "; expires=" + t,
    location.reload(!0)
}
function selectPlatform(e) {
    var t = new Date;
    t.setDate(t.getDate() + 3650),
    document.cookie = "fngg_platform=" + e + "; expires=" + t,
    location.reload(!0)
}
function drawingsVote(t, e) {
    t.style.color || ajax("/drawings?vote=" + e, function(e) {
        200 === e.status && (t.style.color = "#2bde73",
        "You have already voted" === e.responseText ? showMessage(e.responseText, "ok") : (e = t.querySelector(".drawings-vote-count")).textContent = parseInt(e.textContent) + 1)
    })
}
function copyToClipboard(e) {
    var t = document.createElement("textarea");
    t.style.fontSize = "12pt",
    t.style.border = "0",
    t.style.padding = "0",
    t.style.margin = "0",
    t.style.position = "absolute",
    t.style.left = "-9999px";
    var o = window.pageYOffset || document.documentElement.scrollTop;
    t.style.top = o + "px",
    t.setAttribute("readonly", ""),
    t.value = e,
    document.body.appendChild(t),
    t.select(),
    t.setSelectionRange(0, t.value.length);
    t.value;
    document.execCommand("copy"),
    document.body.removeChild(t),
    showMessage("Code copied to clipboard", "ok")
}
ModalItemsCache = new Map;
let observer;
function lazyLoad(e, t) {
    (e = "string" == typeof e ? $(e) : e) && ("IntersectionObserver"in window ? (observer = observer || new IntersectionObserver(e=>{
        e.forEach(e=>{
            e.isIntersecting && (observer.unobserve(e.target),
            e.target.dispatchEvent(new Event("lazyload")))
        }
        )
    }
    ),
    observer.observe(e),
    e.addEventListener("lazyload", t, {
        once: !0
    })) : t())
}
var tooltip = document.createElement("div");
tooltip.className = "tooltip",
window.addEventListener("keydown", function(e) {
    "Escape" === e.key && closeModal(),
    "ArrowLeft" !== e.key && "a" !== e.key || !$(".modal-arrow-left") || $(".modal-arrow-left").click(),
    "ArrowRight" !== e.key && "d" !== e.key || !$(".modal-arrow-right") || $(".modal-arrow-right").click(),
    " " === e.key && $(".item-video") && ($(".item-video").paused ? $(".item-video").play() : $(".item-video").pause())
}, !0),
document.addEventListener("DOMContentLoaded", function() {
    on($$(".js-modal-item"), "click", function(e) {
        e.preventDefault(),
        modal(this.dataset.id, "item")
    }),
    $$(".select").forEach(function(e) {
        var t = $("select", e)
          , o = document.createElement("div");
        o.className = "select-selected",
        o.innerHTML = t.options[t.selectedIndex].innerHTML,
        o.addEventListener("click", function(e) {
            e.stopPropagation();
            e = this.parentNode.classList.contains("opened");
            $$(".select").forEach(function(e) {
                e.classList.remove("opened")
            }),
            this.parentNode.classList[e ? "remove" : "add"]("opened")
        }),
        e.appendChild(o);
        var n = document.createElement("div");
        n.className = "select-options";
        for (var a, i = 0; i < t.options.length; i++)
            t.options[i].disabled || ((a = document.createElement("div")).innerHTML = t.options[i].innerHTML,
            a.dataset.idx = t.options[i].index,
            t.selectedIndex === t.options[i].index && (a.className = "same-as-selected"),
            a.addEventListener("click", function() {
                var e = $("select", this.parentNode.parentNode);
                e.selectedIndex = this.dataset.idx,
                e.dispatchEvent(new Event("change")),
                this.parentNode.previousSibling.innerHTML = this.innerHTML,
                this.parentNode.previousSibling.click(),
                $$(".same-as-selected", this.parentNode).forEach(function(e) {
                    e.className = ""
                }),
                this.className = "same-as-selected"
            }),
            n.appendChild(a));
        e.appendChild(n)
    }),
    document.addEventListener("click", function(e) {
        var t, o, n, a, i, d, s;
        e.target && ("item-add-my-btn" === (t = e.target.className) && (s = e.target.dataset.type,
        a = e.target.dataset.id,
        IsLogged ? (ajax("/" + s, null, "add=" + a),
        showMessage(`Added to <a href="/${s}">your ${s}</a>`, "ok", 8e3),
        "wishlist" === s && (i = $(".wishlist-count")) && (d = Number(i.textContent.replace(/,/g, "")) + 1,
        i.textContent = d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
        (o = $('.item-icon[data-id="' + a + '"] .item-icon-img')) && (700 < (n = (n = o.getBoundingClientRect().top + 130) < 0 ? 0 : n) && (n = 700),
        o.classList.add("wishlist-translate-anim"),
        setTimeout(function() {
            o.classList.remove("wishlist-translate-anim")
        }, n)),
        e.target.className = "item-del-my-btn") : showMessage(`<a href="/account?goto=${s}&add=${a}">Sign in</a> to create your ` + s, "ok", 6e5)),
        "item-del-my-btn" === t && (ajax("/" + (s = e.target.dataset.type), null, "delete=" + (a = e.target.dataset.id)),
        showMessage('Removed from <a href="/' + s + '">your ' + s + "</a>", "ok"),
        "wishlist" === s && (i = $(".wishlist-count")) && 0 <= (d = Number(i.textContent.replace(/,/g, "")) - 1) && (i.textContent = d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")),
        window.IsMy && Url.startsWith("/" + s) && (remove($('.item-icon[data-id="' + a + '"]')),
        !window.Items || -1 < (s = Items.findIndex(e=>e.id == a)) && Items.splice(s, 1)),
        e.target.className = "item-add-my-btn")),
        remove($(".contextmenu")),
        $$(".select").forEach(function(e) {
            e.classList.remove("opened")
        })
    }),
    $(".vote-options") && (window.storedType = "items",
    "/best-seasons" === location.pathname ? window.storedType = "seasons" : "/concept-royale" === location.pathname ? window.storedType = "crc" : "/best-augments" === location.pathname && (window.storedType = "augments"),
    window.storedVotes = {},
    localStorage["fngg_" + window.storedType + "_votes"] && (window.storedVotes = JSON.parse(localStorage["fngg_" + window.storedType + "_votes"])),
    $$(".vote-options").forEach(function(e) {
        var t = window.storedVotes[e.dataset.id];
        void 0 === t || (e = $('[data-vote="' + t + '"]', e)) && e.classList.add("active")
    }),
    $$(".vote-option").forEach(function(e) {
        e.addEventListener("click", voteClick)
    })),
    $$(".fn-assets-header").forEach(function(e) {
        e.addEventListener("click", function() {
            this.classList.toggle("opened"),
            this.nextSibling.classList.toggle("opened")
        })
    });
    var e = "undefined" != typeof orientation || navigator.userAgent.toLowerCase().includes("mobile");
    e ? $$(".menu-item").forEach(function(e) {
        e.addEventListener("click", function() {
            $("body").classList.remove("menu-opened")
        })
    }) : ($$("[data-tooltip]").forEach(function(e) {
        initTooltip(e)
    }),
    document.addEventListener("click", function() {
        remove(tooltip)
    })),
    (new Image).src = "";
    var t = null
      , o = $("#logo");
    o && (o.addEventListener("mouseenter", function() {
        $("body").classList.add("menu-opened"),
        clearTimeout(t)
    }),
    o.addEventListener("mouseleave", function() {
        t = setTimeout(function() {
            $("body").classList.remove("menu-opened")
        }, 300)
    }),
    o.addEventListener("touchstart", function() {
        $("body").classList.toggle("menu-opened")
    }),
    e || (o.style.cursor = "pointer",
    o.addEventListener("click", function() {
        location.href = "/"
    })));
    var n, a, o = $("#menu");
    o && (o.addEventListener("mouseenter", function() {
        $("body").classList.add("menu-opened"),
        clearTimeout(t)
    }),
    o.addEventListener("mouseleave", function() {
        $("body").classList.remove("menu-opened")
    }),
    o.style.display = "block"),
    $$(".accordion-header").forEach(function(e) {
        e.addEventListener("click", function() {
            this.parentNode.classList.toggle("opened")
        })
    }),
    $(".lazy") && "IntersectionObserver"in window && (n = new IntersectionObserver(function(e, t) {
        e.forEach(function(e) {
            e.isIntersecting && ((e = e.target).src = e.dataset.src,
            e.classList.remove("lazy"),
            n.unobserve(e))
        })
    }
    ),
    $$(".lazy").forEach(function(e) {
        n.observe(e)
    })),
    $(".infinite-scroll") && "IntersectionObserver"in window && (a = new IntersectionObserver(function(e, t) {
        e.forEach(function(t) {
            var o;
            t.isIntersecting && ((o = t.target.parentElement).dataset.isLoading || (o.dataset.isLoading = !0,
            ajax(o.dataset.url + "&offset=" + o.dataset.offset, function(e) {
                delete o.dataset.isLoading,
                200 === e.status && ("" === (e = JSON.parse(e.responseText)).html ? (a.unobserve(t.target),
                remove(t.target)) : (o.dataset.offset = e.offset,
                t.target.insertAdjacentHTML("beforebegin", e.html)))
            })))
        })
    }
    ),
    $$(".infinite-scroll .loader").forEach(function(e) {
        a.observe(e)
    })),
    $(".lang-select.nav-item-wrap") && ($(".lang-select.nav-item-wrap").onclick = function() {
        this.classList.toggle("hover")
    }
    );
    o = $$(".nav-item-wrap:not(.lang-select)");
    on(o, "mouseenter", ()=>$("body").classList.add("header-opened")),
    on(o, "mouseleave", ()=>$("body").classList.remove("header-opened")),
    on(o, "touchstart", ()=>$("body").classList.toggle("header-opened"))
    // !0 === window.navigator.standalone ? navigator.sendBeacon("/log?e=pwa-ios") : window.matchMedia("(display-mode: standalone)").matches ? navigator.sendBeacon("/log?e=pwa-android") : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? navigator.sendBeacon("/log?e=mobile") : navigator.sendBeacon("/log?e=desktop")
})
// !IsLogged && "serviceWorker"in navigator && navigator.serviceWorker.register("/firebase-messaging-sw.js?2");
