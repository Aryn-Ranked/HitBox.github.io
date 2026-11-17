// Static build on GitHub Pages: 404.html sends a direct visit of a dynamic page (/matchs/42/)
// to its shell page with the real address in `?__p=`. Put that address back in the address bar
// before the app starts, so it reads the right match / profile / tournament.
(function () {
  try {
    var query = new URLSearchParams(location.search);
    var wanted = query.get("__p");
    // Only same-site absolute paths: never an external address.
    if (wanted && wanted.charAt(0) === "/" && wanted.charAt(1) !== "/" && wanted.charAt(1) !== "\\") {
      history.replaceState(null, "", wanted);
    }
  } catch (e) {
    // nothing to restore: the page shows its generic state
  }
})();
