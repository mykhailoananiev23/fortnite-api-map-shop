!function() {
    const i = $(".item-video");
    if (i) {
        const o = document.createElement("div");
        o.style.position = "absolute",
        o.style.display = "none",
        o.style.pointerEvents = "none",
        o.innerHTML = '<svg width="32" height="32" viewBox="0 0 18 18"><path d="M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z" fill="#fff"></path></svg>',
        i.after(o),
        i.paused && (o.style.display = "block"),
        on(i, "click", ()=>{
            i.paused ? i.play() : i.pause()
        }
        ),
        on(i, "contextmenu", e=>{
            e.preventDefault(),
            remove($(".contextmenu"));
            const t = document.createElement("div");
            t.className = "contextmenu",
            t.style.top = e.clientY + "px",
            t.style.left = e.clientX + "px",
            t.oncontextmenu = e=>e.preventDefault();
            const n = document.createElement("div");
            if (n.className = "contextmenu-item",
            n.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M21.9 7.38v19.86l-6.73-6.73a.87.87 0 0 0-1.24 0l-1.73 1.73a.88.88 0 0 0 0 1.24l11.18 11.18c.34.35.9.35 1.24 0L35.8 23.48a.88.88 0 0 0 0-1.24l-1.73-1.73a.87.87 0 0 0-1.24 0l-6.73 6.73V7.38c0-.49-.4-.88-.87-.88h-2.45c-.49 0-.88.4-.88.88ZM10.88 37.13c-.49 0-.88.39-.88.87v2.63c0 .48.4.87.88.87h26.24c.49 0 .88-.4.88-.87V38c0-.48-.4-.87-.88-.87H10.89Z"></path></svg><div class="contextmenu-text">Download video</div>',
            n.onclick = ()=>{
                var e = i.src.replace("/items/", "/items-download/").replace("-sd", "");
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
            t.append(n),
            "share"in navigator) {
                const o = document.createElement("div");
                o.className = "contextmenu-item",
                o.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M2.18 7.17A2 2 0 0 1 4 6h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4L16.22 25 2.49 9.32a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 10H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 24.9Z"></path></svg><div class="contextmenu-text">Share</div>',
                o.onclick = ()=>{
                    navigator.share({
                        url: location.href,
                        title: $(".fn-detail-name").textContent
                    })
                }
                ,
                t.append(o)
            }
            const a = document.createElement("div");
            if (a.className = "contextmenu-item",
            a.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M10.21 19.4a1 1 0 0 1 1.42 0l2.33 2.34a1 1 0 0 1 0 1.41l-3.89 3.89a7.7 7.7 0 0 0 10.89 10.89l3.89-3.89a1 1 0 0 1 1.41 0l2.34 2.33a1 1 0 0 1 0 1.42l-3.9 3.89A13 13 0 0 1 6.33 23.29l3.9-3.89ZM34.04 24.85a1 1 0 0 0 0 1.41l2.34 2.34a1 1 0 0 0 1.4 0l3.9-3.9A13 13 0 0 0 23.29 6.33l-3.89 3.9a1 1 0 0 0 0 1.4l2.34 2.34a1 1 0 0 0 1.41 0l3.9-3.89a7.7 7.7 0 1 1 10.88 10.89l-3.89 3.89Z"></path><path d="M15.76 28.49a1 1 0 0 0 0 1.41l2.34 2.34a1 1 0 0 0 1.41 0L32.24 19.5a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.4 0L15.75 28.5Z"></path></svg><div class="contextmenu-text">Copy link</div>',
            a.onclick = ()=>copyToClipboard(location.href),
            t.append(a),
            "pictureInPictureEnabled"in document) {
                const l = document.createElement("div");
                l.className = "contextmenu-item",
                l.innerHTML = '<svg fill="currentColor" viewBox="0 0 48 48" width="1em" height="1em"><path d="M36 6H12a1 1 0 0 0-1 1v32a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1Z"></path><path d="M24 26a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v15a5 5 0 0 1-5 5H29a5 5 0 0 1-5-5V26Zm5-1a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V26a1 1 0 0 0-1-1H29Z"></path></svg><div class="contextmenu-text">Picture-in-picture</div>',
                l.onclick = ()=>document.pictureInPictureElement ? document.exitPictureInPicture() : i.requestPictureInPicture(),
                t.append(l)
            }
            document.body.append(t)
        }
        ),
        on(i, "pause", ()=>{
            a(),
            o.style.display = "block"
        }
        ),
        on(i, "play", ()=>{
            a(),
            o.style.display = "none"
        }
        );
        let t = null;
        if (!i.muted && window.matchMedia("(hover: hover)").matches) {
            t = document.createElement("div"),
            t.className = "volume-slider",
            t.innerHTML = '<input type="range" min="0" max="1" value="1" step="0.01"><svg viewBox="0 0 24 24" class="f"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
            const l = $("input", t)
              , c = $("svg", t);
            let e = 1;
            function n(e) {
                isNaN(e) || (l.value = e);
                e = l.value;
                i.volume = e,
                localStorage.fngg_item_volume = e,
                l.style.setProperty("--volume-slider-percent", 100 * e + "%"),
                0 != e || c.dataset.isMuted || (c.dataset.isMuted = 1,
                c.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>'),
                0 != e && c.dataset.isMuted && (delete c.dataset.isMuted,
                c.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>')
            }
            localStorage.fngg_item_volume && (i.volume = localStorage.fngg_item_volume,
            l.value = localStorage.fngg_item_volume),
            n(),
            l.oninput = n,
            c.onclick = ()=>{
                0 != l.value && (e = l.value),
                c.dataset.isMuted ? n(e) : n(0)
            }
            ,
            i.after(t)
        }
        function a() {
            o.style.top = i.offsetTop + i.offsetHeight - 46 + "px",
            o.style.left = i.offsetLeft + 11 + "px",
            t && (t.style.top = i.offsetTop + i.offsetHeight - 46 + "px",
            t.style.left = i.offsetLeft + i.offsetWidth - 46 + "px")
        }
        on(i, "loadedmetadata", a);
        let e;
        window.addEventListener("resize", ()=>{
            clearTimeout(e),
            e = setTimeout(a, 50)
        }
        ),
        on(i, "error", ()=>{
            i.src = i.src.replace(".mp4", "-sd.mp4")
        }
        )
    }
    const r = $("audio");
    if (r) {
        localStorage.fngg_volume && (r.volume = localStorage.fngg_volume),
        r.addEventListener("volumechange", function() {
            localStorage.fngg_volume = this.volume
        });
        const u = $(".audio-wave");
        let n = !1;
        u && r.addEventListener("play", ()=>{
            if (!n) {
                n = !0;
                try {
                    const e = new (window.AudioContext || window.webkitAudioContext);
                    if (!e || !e.createAnalyser || !e.createMediaElementSource)
                        return void (u.style.display = "none");
                    const o = e.createAnalyser()
                      , t = e.createMediaElementSource(r);
                    t.connect(o),
                    o.connect(e.destination),
                    o.fftSize = 256;
                    const l = o.frequencyBinCount
                      , i = new Uint8Array(l);
                    u.width = u.clientWidth,
                    u.height = u.clientHeight;
                    const c = u.getContext("2d")
                      , s = u.width
                      , d = u.height;
                    !function e() {
                        requestAnimationFrame(e),
                        o.getByteFrequencyData(i),
                        c.clearRect(0, 0, s, d);
                        var t, n = s / l * 2.5;
                        let a = 0;
                        for (let e = 0; e < l; e++)
                            t = i[e],
                            c.fillStyle = "rgb(" + (t + e / l * 250) + ",0,127)",
                            c.fillRect(a, d - t, n, t),
                            a += 1 + n
                    }()
                } catch (e) {
                    u.style.display = "none"
                }
            }
        }
        )
    }
}();
