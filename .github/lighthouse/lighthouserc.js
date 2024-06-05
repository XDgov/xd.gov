module.exports = {
  "ci": {
    "collect": {
      "staticDistDir": "./_site"
    },
    "upload": {
      "target": "temporary-public-storage"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "bf-cache": "off",
        "canonical": "off",
        "color-contrast": "off",
        "content-width": "off",
        "csp-xss": "off",
        "heading-order": "off",
        "image-size-responsive": "off",
        "link-text": "off",
        "maskable-icon": "off",
        "offscreen-images": "off",
        "service-worker": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "unsized-images": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "uses-optimized-images": "off",
        "uses-rel-preconnect": "off", // can't use with GSA DAP script
        "uses-responsive-images": "off",
        "uses-text-compression": "off"
      }
    }
  }
}
