(function () {
  var STORAGE_KEY = "sms-directory-theme";

  function getPreferred() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
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
