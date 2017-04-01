let pattern = "*://*.fakku.net/*/style.css?*";
let engine = chrome || browser;

function redirect(req) {
  return { redirectUrl: engine.extension.getURL('fakkuDark_style.css') };
}

engine.webRequest.onBeforeRequest.addListener(
  redirect,
  {
    urls: [pattern],
    types: ["stylesheet"]
  },
  ["blocking"]
);
