(function () {
  var menu = document.getElementById("site-menu");
  var btn = document.querySelector('[popovertarget="site-menu"]');
  if (!menu || !btn) return;

  function setExpanded(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menu.addEventListener("toggle", function (event) {
    var open =
      typeof event.newState === "string"
        ? event.newState === "open"
        : menu.matches(":popover-open");
    setExpanded(open);
  });

  document.querySelectorAll("[data-close-menu]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (typeof menu.hidePopover === "function" && menu.matches(":popover-open")) {
        menu.hidePopover();
      }
    });
  });
})();