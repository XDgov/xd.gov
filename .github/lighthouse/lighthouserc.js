// note that some settings in the lighthouserc.js are permanent since they apply to the deployed site but not the dev instance. For example, the gem 'jekyll-sitemap' creates a robots.txt file for SEO when the site is deployed, but the local build does not have this file.

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
        "service-worker": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "unsized-images": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "uses-optimized-images": "off",
        "uses-responsive-images": "off"
      }
    }
  }
}
