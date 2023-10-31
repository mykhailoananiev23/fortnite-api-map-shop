!(function () {
  function e() {
    for (
      var e = new Date(),
        t = 23 - e.getUTCHours(),
        o = 59 - e.getUTCMinutes(),
        n = 59 - e.getUTCSeconds(),
        a = document.querySelectorAll(".shop-countdown"),
        i = 0;
      i < a.length;
      i++
    ) {
      var d = "";
      a[i].dataset.full
        ? (0 < t && (d += t + ":"),
          (d += (o < 10 && 0 < t ? "0" : "") + o + ":"),
          (d += (n < 10 ? "0" : "") + n))
        : (0 < t && (d += t + " hour" + (1 < t ? "s " : " ")),
          (0 < o || 0 < t) && (d += o + " minute" + (1 < o ? "s" : ""))),
        (a[i].textContent = d),
        0 == t &&
          0 == o &&
          0 == n &&
          setTimeout(function () {
            location.reload(!0);
          }, 6e4);
    }
  }
  function t(e) {
    var t = 1e3 * Number(e.dataset.ts) - new Date(),
      o = (Math.floor((t / 1e3) % 60), Math.floor((t / 1e3 / 60) % 60)),
      n = Math.floor((t / 36e5) % 24),
      a = Math.floor(t / 864e5);
    t < 6e4
      ? (e.parentNode.parentNode.style.display = "none")
      : ((t = ""),
        0 < a && (t += a + "d "),
        0 < n && (t += n + "h "),
        0 < o && (t += o + "m "),
        (e.textContent = t));
  }
  function generatorDate() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var newdate = year + "/" + month + "/" + day;
    $('.today-info').textContent = newdate
  }
  $("#hide-votes") && (localStorage.fngg_hide_votes && ($("#hide-votes").checked = !1,
  $("#hide-votes").parentNode.classList.remove("active"),
  document.body.classList.add("hide-votes")),
  $("#hide-votes").addEventListener("change", function() {
      this.parentNode.classList.toggle("active"),
      document.body.classList.toggle("hide-votes"),
      this.checked ? localStorage.removeItem("fngg_hide_votes") : localStorage.fngg_hide_votes = 1
  })),
  document.addEventListener("DOMContentLoaded", function () {
      generatorDate(),
      e(),
      setInterval(e, 1e3),
      document.querySelectorAll(".js-bundle-countdown").forEach(function (e) {
        t(e);
        setInterval(function () {
          t(e);
        }, 60000); // 60000 milliseconds = 60 seconds = 1 minute
      }),
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && document.body.classList.add("no-anim")
      document.querySelectorAll(".shop-slider").forEach(function(t) {
        var o, n, a, i = t.dataset.imgs, d = t.dataset.format, s = t.dataset.v, c = t.dataset.alt;
        function l() {
            i < ++n && (n = 1);
            var e = document.createElement("img");
            e.className = "img img-cf",
            e.src = "/img/items/" + o + "/shop" + (1 === n ? "" : "-" + n) + "." + (d || "jpg") + (s ? "?" + s : ""),
            e.alt = c,
            t.appendChild(e),
            a.push(e)
        }
        i && (o = t.dataset.id,
        n = 1,
        a = [],
        l(),
        setInterval(function() {
            var e = t.getBoundingClientRect();
            0 <= e.top && 0 <= e.left && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth) && (a[a.length - 1].classList.add("shop-anim"),
            l(),
            3 < a.length && remove(a.shift()))
        }, 2100))
    })
  });
})();
