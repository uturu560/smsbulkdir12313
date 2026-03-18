(function () {
  var STORAGE_KEY = "sms-directory-theme";

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    // Always default to light mode on first visit
    return "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.textContent = theme === "dark" ? "\u263C" : "\u263E"; // sun / moon
    }
  }

  function toggle() {
    var current = document.documentElement.getAttribute("data-theme") || "light";
    var next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  }

  apply(getPreferred());
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (btn) btn.addEventListener("click", toggle);

    // Click popunder: once per page visit, on every page except quiz.html
    // First click triggers the popunder, then no more for this page load
    if (!(typeof location !== "undefined" && location.pathname && location.pathname.indexOf("quiz.html") !== -1)) {
      var popunderFired = false;
      function runPopunder() {
        if (popunderFired) return;
        popunderFired = true;
        try {
          var parent = [document.documentElement, document.body].filter(Boolean).pop();
          if (parent) {
            var s = parent.appendChild(document.createElement("script"));
            s.dataset.zone = "10744417";
            s.src = "https://al5sm.com/tag.min.js";
          }
        } catch (e) {}
        document.removeEventListener("click", runPopunder, true);
      }
      document.addEventListener("click", runPopunder, true);
    }

    // No-affiliate CTA: first click that day goes to direct link; same day again goes to platform (same window)
    var POPUNDER_URL = "https://omg10.com/4/10744312";
    var POPUNDER_DATE_KEY = "sms-directory-omg10-date";
    var ctaLink = document.querySelector("#cta a[href^='http']");
    if (ctaLink) {
      var href = (ctaLink.getAttribute("href") || "").toLowerCase();
      var isAffiliate =
        href.indexOf("ebulksms.com/signup") !== -1 ||
        href.indexOf("nigeriabulksms.com/register") !== -1 ||
        href.indexOf("multitexter.com/signup") !== -1;
      if (!isAffiliate) {
        ctaLink.addEventListener("click", function (e) {
          e.preventDefault();
          var today = new Date().toISOString().slice(0, 10);
          var stored = null;
          try { stored = localStorage.getItem(POPUNDER_DATE_KEY); } catch (err) {}
          if (stored === today) {
            window.location.href = ctaLink.href;
          } else {
            try { localStorage.setItem(POPUNDER_DATE_KEY, today); } catch (err) {}
            window.location.href = POPUNDER_URL;
          }
        });
      }
    }

    // Vignette banner fallback for users who denied push notifications
    // Only on pages other than index.html and quiz.html
    (function () {
      var path = location.pathname;
      var isIndex = path === "/" || path.endsWith("/") || path.endsWith("index.html");
      var isQuiz = path.endsWith("quiz.html");
      if (!isIndex && !isQuiz) {
        if (typeof Notification !== "undefined" && Notification.permission === "denied") {
          var parent = [document.documentElement, document.body].filter(Boolean).pop();
          if (parent) {
            var s = parent.appendChild(document.createElement("script"));
            s.dataset.zone = "10748420";
            s.src = "https://gizokraijaw.net/vignette.min.js";
          }
        }
      }
    })();

    var relatedGrid = document.querySelector(".related-grid");
    if (relatedGrid && !relatedGrid.closest(".related-scroll-wrap")) {
      var wrap = document.createElement("div");
      wrap.className = "related-scroll-wrap";
      var track = document.createElement("div");
      track.className = "related-scroll-track";
      relatedGrid.parentNode.insertBefore(wrap, relatedGrid);
      wrap.appendChild(track);
      track.appendChild(relatedGrid);
      track.appendChild(relatedGrid.cloneNode(true));
    }
  });
})();
