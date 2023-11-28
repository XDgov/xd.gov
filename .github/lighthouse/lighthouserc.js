module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    assertions: {
      'bf-cache': 'off',
      'canonical': 'off',
      'csp-xss': 'off',
      'image-size-responsive': 'off',
      'maskable-icon': 'off',
      'robots-txt': 'off',
      'service-worker': 'off',
      'splash-screen': 'off',
      'themed-omnibox': 'off',
      'unsized-images': 'off',
      'unused-css-rules': 'off',
      'unused-javascript': 'off',
      'uses-optimized-images': 'off',
      'uses-responsive-images': 'off',
      'heading-order': 'off',
      'link-text': 'off',
    },
  },
};
