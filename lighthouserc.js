module.exports = {
  ci: {
    collect: {
      settings: {
        blockedUrlPatterns: [
          '*googletagmanager.com*',
          '*snitcher.com*',
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'color-contrast': 'warn',
        'non-composited-animations': 'warn',
        'csp-xss': 'warn',
      },
    },
  },
};
