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
        'non-composited-animations': 'warn',
        'csp-xss': 'warn',
      },
    },
  },
};
