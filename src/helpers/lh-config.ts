export default {
  settings: {
    output: 'json',
    maxWaitForFcp: 30000,
    maxWaitForLoad: 45000,
    formFactor: 'mobile',
    throttling: {
      rttMs: 150,
      throughputKbps: 1638.4,
      requestLatencyMs: 562.5,
      downloadThroughputKbps: 1474.5600000000002,
      uploadThroughputKbps: 675,
      cpuSlowdownMultiplier: 4,
    },
    throttlingMethod: 'simulate',
    screenEmulation: {
      mobile: true,
      width: 360,
      height: 640,
      deviceScaleFactor: 2.625,
      disabled: false,
    },
    emulatedUserAgent:
      'Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse',
    auditMode: false,
    gatherMode: false,
    disableStorageReset: false,
    debugNavigation: false,
    channel: 'node',
    budgets: null,
    locale: 'en-US',
    blockedUrlPatterns: null,
    additionalTraceCategories: null,
    extraHeaders: null,
    precomputedLanternData: null,
    onlyAudits: null,
    onlyCategories: null,
    skipAudits: null,
  },
  artifacts: [
    {
      id: 'DevtoolsLog',
      gatherer: 'devtools-log',
    },
    {
      id: 'Trace',
      gatherer: 'trace',
    },
    {
      id: 'Accessibility',
      gatherer: 'accessibility',
    },
    {
      id: 'AnchorElements',
      gatherer: 'anchor-elements',
    },
    {
      id: 'CacheContents',
      gatherer: 'cache-contents',
    },
    {
      id: 'ConsoleMessages',
      gatherer: 'console-messages',
    },
    {
      id: 'CSSUsage',
      gatherer: 'css-usage',
    },
    {
      id: 'Doctype',
      gatherer: 'dobetterweb/doctype',
    },
    {
      id: 'DOMStats',
      gatherer: 'dobetterweb/domstats',
    },
    {
      id: 'EmbeddedContent',
      gatherer: 'seo/embedded-content',
    },
    {
      id: 'FontSize',
      gatherer: 'seo/font-size',
    },
    {
      id: 'Inputs',
      gatherer: 'inputs',
    },
    {
      id: 'GlobalListeners',
      gatherer: 'global-listeners',
    },
    {
      id: 'IFrameElements',
      gatherer: 'iframe-elements',
    },
    {
      id: 'ImageElements',
      gatherer: 'image-elements',
    },
    {
      id: 'InstallabilityErrors',
      gatherer: 'installability-errors',
    },
    {
      id: 'InspectorIssues',
      gatherer: 'inspector-issues',
    },
    {
      id: 'JsUsage',
      gatherer: 'js-usage',
    },
    {
      id: 'LinkElements',
      gatherer: 'link-elements',
    },
    {
      id: 'MainDocumentContent',
      gatherer: 'main-document-content',
    },
    {
      id: 'MetaElements',
      gatherer: 'meta-elements',
    },
    {
      id: 'NetworkUserAgent',
      gatherer: 'network-user-agent',
    },
    {
      id: 'OptimizedImages',
      gatherer: 'dobetterweb/optimized-images',
    },
    {
      id: 'PasswordInputsWithPreventedPaste',
      gatherer: 'dobetterweb/password-inputs-with-prevented-paste',
    },
    {
      id: 'ResponseCompression',
      gatherer: 'dobetterweb/response-compression',
    },
    {
      id: 'RobotsTxt',
      gatherer: 'seo/robots-txt',
    },
    {
      id: 'ServiceWorker',
      gatherer: 'service-worker',
    },
    {
      id: 'ScriptElements',
      gatherer: 'script-elements',
    },
    {
      id: 'Scripts',
      gatherer: 'scripts',
    },
    {
      id: 'SourceMaps',
      gatherer: 'source-maps',
    },
    {
      id: 'Stacks',
      gatherer: 'stacks',
    },
    {
      id: 'TagsBlockingFirstPaint',
      gatherer: 'dobetterweb/tags-blocking-first-paint',
    },
    {
      id: 'TapTargets',
      gatherer: 'seo/tap-targets',
    },
    {
      id: 'TraceElements',
      gatherer: 'trace-elements',
    },
    {
      id: 'ViewportDimensions',
      gatherer: 'viewport-dimensions',
    },
    {
      id: 'WebAppManifest',
      gatherer: 'web-app-manifest',
    },
    {
      id: 'devtoolsLogs',
      gatherer: 'devtools-log-compat',
    },
    {
      id: 'traces',
      gatherer: 'trace-compat',
    },
    {
      id: 'FullPageScreenshot',
      gatherer: 'full-page-screenshot',
    },
  ],
  navigations: [
    {
      id: 'default',
      pauseAfterFcpMs: 1000,
      pauseAfterLoadMs: 1000,
      networkQuietThresholdMs: 1000,
      cpuQuietThresholdMs: 1000,
      artifacts: [
        'DevtoolsLog',
        'Trace',
        'Accessibility',
        'AnchorElements',
        'CacheContents',
        'ConsoleMessages',
        'CSSUsage',
        'Doctype',
        'DOMStats',
        'EmbeddedContent',
        'FontSize',
        'Inputs',
        'GlobalListeners',
        'IFrameElements',
        'ImageElements',
        'InstallabilityErrors',
        'InspectorIssues',
        'JsUsage',
        'LinkElements',
        'MainDocumentContent',
        'MetaElements',
        'NetworkUserAgent',
        'OptimizedImages',
        'PasswordInputsWithPreventedPaste',
        'ResponseCompression',
        'RobotsTxt',
        'ServiceWorker',
        'ScriptElements',
        'Scripts',
        'SourceMaps',
        'Stacks',
        'TagsBlockingFirstPaint',
        'TapTargets',
        'TraceElements',
        'ViewportDimensions',
        'WebAppManifest',
        'devtoolsLogs',
        'traces',
        'FullPageScreenshot',
      ],
    },
  ],
  audits: [
    'is-on-https',
    'service-worker',
    'viewport',
    'metrics/first-contentful-paint',
    'metrics/largest-contentful-paint',
    'metrics/first-meaningful-paint',
    'metrics/speed-index',
    'screenshot-thumbnails',
    'final-screenshot',
    'metrics/total-blocking-time',
    'metrics/max-potential-fid',
    'metrics/cumulative-layout-shift',
    'metrics/experimental-interaction-to-next-paint',
    'errors-in-console',
    'server-response-time',
    'metrics/interactive',
    'user-timings',
    'critical-request-chains',
    'redirects',
    'installable-manifest',
    'splash-screen',
    'themed-omnibox',
    'maskable-icon',
    'content-width',
    'image-aspect-ratio',
    'image-size-responsive',
    'preload-fonts',
    'deprecations',
    'mainthread-work-breakdown',
    'bootup-time',
    'uses-rel-preload',
    'uses-rel-preconnect',
    'font-display',
    'diagnostics',
    'network-requests',
    'network-rtt',
    'network-server-latency',
    'main-thread-tasks',
    'metrics',
    'performance-budget',
    'timing-budget',
    'resource-summary',
    'third-party-summary',
    'third-party-facades',
    'largest-contentful-paint-element',
    'lcp-lazy-loaded',
    'layout-shift-elements',
    'long-tasks',
    'no-unload-listeners',
    'non-composited-animations',
    'unsized-images',
    'valid-source-maps',
    'preload-lcp-image',
    'csp-xss',
    'full-page-screenshot',
    'script-treemap-data',
    'manual/pwa-cross-browser',
    'manual/pwa-page-transitions',
    'manual/pwa-each-page-has-url',
    'accessibility/accesskeys',
    'accessibility/aria-allowed-attr',
    'accessibility/aria-command-name',
    'accessibility/aria-hidden-body',
    'accessibility/aria-hidden-focus',
    'accessibility/aria-input-field-name',
    'accessibility/aria-meter-name',
    'accessibility/aria-progressbar-name',
    'accessibility/aria-required-attr',
    'accessibility/aria-required-children',
    'accessibility/aria-required-parent',
    'accessibility/aria-roles',
    'accessibility/aria-toggle-field-name',
    'accessibility/aria-tooltip-name',
    'accessibility/aria-treeitem-name',
    'accessibility/aria-valid-attr-value',
    'accessibility/aria-valid-attr',
    'accessibility/button-name',
    'accessibility/bypass',
    'accessibility/color-contrast',
    'accessibility/definition-list',
    'accessibility/dlitem',
    'accessibility/document-title',
    'accessibility/duplicate-id-active',
    'accessibility/duplicate-id-aria',
    'accessibility/form-field-multiple-labels',
    'accessibility/frame-title',
    'accessibility/heading-order',
    'accessibility/html-has-lang',
    'accessibility/html-lang-valid',
    'accessibility/image-alt',
    'accessibility/input-image-alt',
    'accessibility/label',
    'accessibility/link-name',
    'accessibility/list',
    'accessibility/listitem',
    'accessibility/meta-refresh',
    'accessibility/meta-viewport',
    'accessibility/object-alt',
    'accessibility/tabindex',
    'accessibility/td-headers-attr',
    'accessibility/th-has-data-cells',
    'accessibility/valid-lang',
    'accessibility/video-caption',
    'accessibility/manual/custom-controls-labels',
    'accessibility/manual/custom-controls-roles',
    'accessibility/manual/focus-traps',
    'accessibility/manual/focusable-controls',
    'accessibility/manual/interactive-element-affordance',
    'accessibility/manual/logical-tab-order',
    'accessibility/manual/managed-focus',
    'accessibility/manual/offscreen-content-hidden',
    'accessibility/manual/use-landmarks',
    'accessibility/manual/visual-order-follows-dom',
    'byte-efficiency/uses-long-cache-ttl',
    'byte-efficiency/total-byte-weight',
    'byte-efficiency/offscreen-images',
    'byte-efficiency/render-blocking-resources',
    'byte-efficiency/unminified-css',
    'byte-efficiency/unminified-javascript',
    'byte-efficiency/unused-css-rules',
    'byte-efficiency/unused-javascript',
    'byte-efficiency/modern-image-formats',
    'byte-efficiency/uses-optimized-images',
    'byte-efficiency/uses-text-compression',
    'byte-efficiency/uses-responsive-images',
    'byte-efficiency/efficient-animated-content',
    'byte-efficiency/duplicated-javascript',
    'byte-efficiency/legacy-javascript',
    'byte-efficiency/uses-responsive-images-snapshot',
    'dobetterweb/doctype',
    'dobetterweb/charset',
    'dobetterweb/dom-size',
    'dobetterweb/geolocation-on-start',
    'dobetterweb/inspector-issues',
    'dobetterweb/no-document-write',
    'dobetterweb/no-vulnerable-libraries',
    'dobetterweb/js-libraries',
    'dobetterweb/notification-on-start',
    'dobetterweb/password-inputs-can-be-pasted-into',
    'dobetterweb/uses-http2',
    'dobetterweb/uses-passive-event-listeners',
    'seo/meta-description',
    'seo/http-status-code',
    'seo/font-size',
    'seo/link-text',
    'seo/crawlable-anchors',
    'seo/is-crawlable',
    'seo/robots-txt',
    'seo/tap-targets',
    'seo/hreflang',
    'seo/plugins',
    'seo/canonical',
    'seo/manual/structured-data',
    'work-during-interaction',
  ],
  groups: {
    metrics: {
      title: {
        i18nId: 'core/config/default-config.js | metricGroupTitle',
        formattedDefault: 'Metrics',
      },
    },
    'load-opportunities': {
      title: {
        i18nId: 'core/config/default-config.js | loadOpportunitiesGroupTitle',
        formattedDefault: 'Opportunities',
      },
      description: {
        i18nId:
          'core/config/default-config.js | loadOpportunitiesGroupDescription',
        formattedDefault:
          "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
      },
    },
    budgets: {
      title: {
        i18nId: 'core/config/default-config.js | budgetsGroupTitle',
        formattedDefault: 'Budgets',
      },
      description: {
        i18nId: 'core/config/default-config.js | budgetsGroupDescription',
        formattedDefault:
          'Performance budgets set standards for the performance of your site.',
      },
    },
    diagnostics: {
      title: {
        i18nId: 'core/config/default-config.js | diagnosticsGroupTitle',
        formattedDefault: 'Diagnostics',
      },
      description: {
        i18nId: 'core/config/default-config.js | diagnosticsGroupDescription',
        formattedDefault:
          "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score.",
      },
    },
    'pwa-installable': {
      title: {
        i18nId: 'core/config/default-config.js | pwaInstallableGroupTitle',
        formattedDefault: 'Installable',
      },
    },
    'pwa-optimized': {
      title: {
        i18nId: 'core/config/default-config.js | pwaOptimizedGroupTitle',
        formattedDefault: 'PWA Optimized',
      },
    },
    'a11y-best-practices': {
      title: {
        i18nId: 'core/config/default-config.js | a11yBestPracticesGroupTitle',
        formattedDefault: 'Best practices',
      },
      description: {
        i18nId:
          'core/config/default-config.js | a11yBestPracticesGroupDescription',
        formattedDefault:
          'These items highlight common accessibility best practices.',
      },
    },
    'a11y-color-contrast': {
      title: {
        i18nId: 'core/config/default-config.js | a11yColorContrastGroupTitle',
        formattedDefault: 'Contrast',
      },
      description: {
        i18nId:
          'core/config/default-config.js | a11yColorContrastGroupDescription',
        formattedDefault:
          'These are opportunities to improve the legibility of your content.',
      },
    },
    'a11y-names-labels': {
      title: {
        i18nId: 'core/config/default-config.js | a11yNamesLabelsGroupTitle',
        formattedDefault: 'Names and labels',
      },
      description: {
        i18nId:
          'core/config/default-config.js | a11yNamesLabelsGroupDescription',
        formattedDefault:
          'These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader.',
      },
    },
    'a11y-navigation': {
      title: {
        i18nId: 'core/config/default-config.js | a11yNavigationGroupTitle',
        formattedDefault: 'Navigation',
      },
      description: {
        i18nId:
          'core/config/default-config.js | a11yNavigationGroupDescription',
        formattedDefault:
          'These are opportunities to improve keyboard navigation in your application.',
      },
    },
    'a11y-aria': {
      title: {
        i18nId: 'core/config/default-config.js | a11yAriaGroupTitle',
        formattedDefault: 'ARIA',
      },
      description: {
        i18nId: 'core/config/default-config.js | a11yAriaGroupDescription',
        formattedDefault:
          'These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader.',
      },
    },
    'a11y-language': {
      title: {
        i18nId: 'core/config/default-config.js | a11yLanguageGroupTitle',
        formattedDefault: 'Internationalization and localization',
      },
      description: {
        i18nId: 'core/config/default-config.js | a11yLanguageGroupDescription',
        formattedDefault:
          'These are opportunities to improve the interpretation of your content by users in different locales.',
      },
    },
    'a11y-audio-video': {
      title: {
        i18nId: 'core/config/default-config.js | a11yAudioVideoGroupTitle',
        formattedDefault: 'Audio and video',
      },
      description: {
        i18nId:
          'core/config/default-config.js | a11yAudioVideoGroupDescription',
        formattedDefault:
          'These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments.',
      },
    },
    'a11y-tables-lists': {
      title: {
        i18nId:
          'core/config/default-config.js | a11yTablesListsVideoGroupTitle',
        formattedDefault: 'Tables and lists',
      },
      description: {
        i18nId:
          'core/config/default-config.js | a11yTablesListsVideoGroupDescription',
        formattedDefault:
          'These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader.',
      },
    },
    'seo-mobile': {
      title: {
        i18nId: 'core/config/default-config.js | seoMobileGroupTitle',
        formattedDefault: 'Mobile Friendly',
      },
      description: {
        i18nId: 'core/config/default-config.js | seoMobileGroupDescription',
        formattedDefault:
          'Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).',
      },
    },
    'seo-content': {
      title: {
        i18nId: 'core/config/default-config.js | seoContentGroupTitle',
        formattedDefault: 'Content Best Practices',
      },
      description: {
        i18nId: 'core/config/default-config.js | seoContentGroupDescription',
        formattedDefault:
          'Format your HTML in a way that enables crawlers to better understand your app’s content.',
      },
    },
    'seo-crawl': {
      title: {
        i18nId: 'core/config/default-config.js | seoCrawlingGroupTitle',
        formattedDefault: 'Crawling and Indexing',
      },
      description: {
        i18nId: 'core/config/default-config.js | seoCrawlingGroupDescription',
        formattedDefault:
          'To appear in search results, crawlers need access to your app.',
      },
    },
    'best-practices-trust-safety': {
      title: {
        i18nId:
          'core/config/default-config.js | bestPracticesTrustSafetyGroupTitle',
        formattedDefault: 'Trust and Safety',
      },
    },
    'best-practices-ux': {
      title: {
        i18nId: 'core/config/default-config.js | bestPracticesUXGroupTitle',
        formattedDefault: 'User Experience',
      },
    },
    'best-practices-browser-compat': {
      title: {
        i18nId:
          'core/config/default-config.js | bestPracticesBrowserCompatGroupTitle',
        formattedDefault: 'Browser Compatibility',
      },
    },
    'best-practices-general': {
      title: {
        i18nId:
          'core/config/default-config.js | bestPracticesGeneralGroupTitle',
        formattedDefault: 'General',
      },
    },
    hidden: {
      title: '',
    },
  },
  categories: {
    performance: {
      title: {
        i18nId: 'core/config/default-config.js | performanceCategoryTitle',
        formattedDefault: 'Performance',
      },
      supportedModes: ['navigation', 'timespan', 'snapshot'],
      auditRefs: [
        {
          id: 'first-contentful-paint',
          weight: 10,
          group: 'metrics',
          acronym: 'FCP',
          relevantAudits: [
            'server-response-time',
            'render-blocking-resources',
            'redirects',
            'critical-request-chains',
            'uses-text-compression',
            'uses-rel-preconnect',
            'uses-rel-preload',
            'font-display',
            'unminified-javascript',
            'unminified-css',
            'unused-css-rules',
          ],
        },
        {
          id: 'interactive',
          weight: 10,
          group: 'metrics',
          acronym: 'TTI',
        },
        {
          id: 'speed-index',
          weight: 10,
          group: 'metrics',
          acronym: 'SI',
        },
        {
          id: 'total-blocking-time',
          weight: 30,
          group: 'metrics',
          acronym: 'TBT',
          relevantAudits: [
            'long-tasks',
            'third-party-summary',
            'third-party-facades',
            'bootup-time',
            'mainthread-work-breakdown',
            'dom-size',
            'duplicated-javascript',
            'legacy-javascript',
            'viewport',
          ],
        },
        {
          id: 'largest-contentful-paint',
          weight: 25,
          group: 'metrics',
          acronym: 'LCP',
          relevantAudits: [
            'server-response-time',
            'render-blocking-resources',
            'redirects',
            'critical-request-chains',
            'uses-text-compression',
            'uses-rel-preconnect',
            'uses-rel-preload',
            'font-display',
            'unminified-javascript',
            'unminified-css',
            'unused-css-rules',
            'largest-contentful-paint-element',
            'preload-lcp-image',
            'unused-javascript',
            'efficient-animated-content',
            'total-byte-weight',
          ],
        },
        {
          id: 'cumulative-layout-shift',
          weight: 15,
          group: 'metrics',
          acronym: 'CLS',
          relevantAudits: [
            'layout-shift-elements',
            'non-composited-animations',
            'unsized-images',
          ],
        },
        {
          id: 'experimental-interaction-to-next-paint',
          weight: 0,
          group: 'metrics',
          acronym: 'INP',
          relevantAudits: ['work-during-interaction'],
        },
        {
          id: 'max-potential-fid',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'first-meaningful-paint',
          weight: 0,
          acronym: 'FMP',
          group: 'hidden',
        },
        {
          id: 'render-blocking-resources',
          weight: 0,
        },
        {
          id: 'uses-responsive-images',
          weight: 0,
        },
        {
          id: 'offscreen-images',
          weight: 0,
        },
        {
          id: 'unminified-css',
          weight: 0,
        },
        {
          id: 'unminified-javascript',
          weight: 0,
        },
        {
          id: 'unused-css-rules',
          weight: 0,
        },
        {
          id: 'unused-javascript',
          weight: 0,
        },
        {
          id: 'uses-optimized-images',
          weight: 0,
        },
        {
          id: 'modern-image-formats',
          weight: 0,
        },
        {
          id: 'uses-text-compression',
          weight: 0,
        },
        {
          id: 'uses-rel-preconnect',
          weight: 0,
        },
        {
          id: 'server-response-time',
          weight: 0,
        },
        {
          id: 'redirects',
          weight: 0,
        },
        {
          id: 'uses-rel-preload',
          weight: 0,
        },
        {
          id: 'uses-http2',
          weight: 0,
        },
        {
          id: 'efficient-animated-content',
          weight: 0,
        },
        {
          id: 'duplicated-javascript',
          weight: 0,
        },
        {
          id: 'legacy-javascript',
          weight: 0,
        },
        {
          id: 'preload-lcp-image',
          weight: 0,
        },
        {
          id: 'total-byte-weight',
          weight: 0,
        },
        {
          id: 'uses-long-cache-ttl',
          weight: 0,
        },
        {
          id: 'dom-size',
          weight: 0,
        },
        {
          id: 'critical-request-chains',
          weight: 0,
        },
        {
          id: 'user-timings',
          weight: 0,
        },
        {
          id: 'bootup-time',
          weight: 0,
        },
        {
          id: 'mainthread-work-breakdown',
          weight: 0,
        },
        {
          id: 'font-display',
          weight: 0,
        },
        {
          id: 'resource-summary',
          weight: 0,
        },
        {
          id: 'third-party-summary',
          weight: 0,
        },
        {
          id: 'third-party-facades',
          weight: 0,
        },
        {
          id: 'largest-contentful-paint-element',
          weight: 0,
        },
        {
          id: 'lcp-lazy-loaded',
          weight: 0,
        },
        {
          id: 'layout-shift-elements',
          weight: 0,
        },
        {
          id: 'uses-passive-event-listeners',
          weight: 0,
        },
        {
          id: 'no-document-write',
          weight: 0,
        },
        {
          id: 'long-tasks',
          weight: 0,
        },
        {
          id: 'non-composited-animations',
          weight: 0,
        },
        {
          id: 'unsized-images',
          weight: 0,
        },
        {
          id: 'viewport',
          weight: 0,
        },
        {
          id: 'no-unload-listeners',
          weight: 0,
        },
        {
          id: 'uses-responsive-images-snapshot',
          weight: 0,
        },
        {
          id: 'work-during-interaction',
          weight: 0,
        },
        {
          id: 'performance-budget',
          weight: 0,
          group: 'budgets',
        },
        {
          id: 'timing-budget',
          weight: 0,
          group: 'budgets',
        },
        {
          id: 'network-requests',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'network-rtt',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'network-server-latency',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'main-thread-tasks',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'diagnostics',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'metrics',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'screenshot-thumbnails',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'final-screenshot',
          weight: 0,
          group: 'hidden',
        },
        {
          id: 'script-treemap-data',
          weight: 0,
          group: 'hidden',
        },
      ],
    },
    accessibility: {
      title: {
        i18nId: 'core/config/default-config.js | a11yCategoryTitle',
        formattedDefault: 'Accessibility',
      },
      description: {
        i18nId: 'core/config/default-config.js | a11yCategoryDescription',
        formattedDefault:
          'These checks highlight opportunities to [improve the accessibility of your web app](https://web.dev/lighthouse-accessibility/). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.',
      },
      manualDescription: {
        i18nId: 'core/config/default-config.js | a11yCategoryManualDescription',
        formattedDefault:
          'These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/how-to-review/).',
      },
      supportedModes: ['navigation', 'snapshot'],
      auditRefs: [
        {
          id: 'accesskeys',
          weight: 3,
          group: 'a11y-navigation',
        },
        {
          id: 'aria-allowed-attr',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-command-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-hidden-body',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-hidden-focus',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-input-field-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-meter-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-progressbar-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-required-attr',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-required-children',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-required-parent',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-roles',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-toggle-field-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-tooltip-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-treeitem-name',
          weight: 3,
          group: 'a11y-aria',
        },
        {
          id: 'aria-valid-attr-value',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-valid-attr',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'button-name',
          weight: 10,
          group: 'a11y-names-labels',
        },
        {
          id: 'bypass',
          weight: 3,
          group: 'a11y-navigation',
        },
        {
          id: 'color-contrast',
          weight: 3,
          group: 'a11y-color-contrast',
        },
        {
          id: 'definition-list',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'dlitem',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'document-title',
          weight: 3,
          group: 'a11y-names-labels',
        },
        {
          id: 'duplicate-id-active',
          weight: 3,
          group: 'a11y-navigation',
        },
        {
          id: 'duplicate-id-aria',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'form-field-multiple-labels',
          weight: 2,
          group: 'a11y-names-labels',
        },
        {
          id: 'frame-title',
          weight: 3,
          group: 'a11y-names-labels',
        },
        {
          id: 'heading-order',
          weight: 2,
          group: 'a11y-navigation',
        },
        {
          id: 'html-has-lang',
          weight: 3,
          group: 'a11y-language',
        },
        {
          id: 'html-lang-valid',
          weight: 3,
          group: 'a11y-language',
        },
        {
          id: 'image-alt',
          weight: 10,
          group: 'a11y-names-labels',
        },
        {
          id: 'input-image-alt',
          weight: 10,
          group: 'a11y-names-labels',
        },
        {
          id: 'label',
          weight: 10,
          group: 'a11y-names-labels',
        },
        {
          id: 'link-name',
          weight: 3,
          group: 'a11y-names-labels',
        },
        {
          id: 'list',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'listitem',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'meta-refresh',
          weight: 10,
          group: 'a11y-best-practices',
        },
        {
          id: 'meta-viewport',
          weight: 10,
          group: 'a11y-best-practices',
        },
        {
          id: 'object-alt',
          weight: 3,
          group: 'a11y-names-labels',
        },
        {
          id: 'tabindex',
          weight: 3,
          group: 'a11y-navigation',
        },
        {
          id: 'td-headers-attr',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'th-has-data-cells',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'valid-lang',
          weight: 3,
          group: 'a11y-language',
        },
        {
          id: 'video-caption',
          weight: 10,
          group: 'a11y-audio-video',
        },
        {
          id: 'logical-tab-order',
          weight: 0,
        },
        {
          id: 'focusable-controls',
          weight: 0,
        },
        {
          id: 'interactive-element-affordance',
          weight: 0,
        },
        {
          id: 'managed-focus',
          weight: 0,
        },
        {
          id: 'focus-traps',
          weight: 0,
        },
        {
          id: 'custom-controls-labels',
          weight: 0,
        },
        {
          id: 'custom-controls-roles',
          weight: 0,
        },
        {
          id: 'visual-order-follows-dom',
          weight: 0,
        },
        {
          id: 'offscreen-content-hidden',
          weight: 0,
        },
        {
          id: 'use-landmarks',
          weight: 0,
        },
      ],
    },
    'best-practices': {
      title: {
        i18nId: 'core/config/default-config.js | bestPracticesCategoryTitle',
        formattedDefault: 'Best Practices',
      },
      supportedModes: ['navigation', 'timespan', 'snapshot'],
      auditRefs: [
        {
          id: 'is-on-https',
          weight: 1,
          group: 'best-practices-trust-safety',
        },
        {
          id: 'geolocation-on-start',
          weight: 1,
          group: 'best-practices-trust-safety',
        },
        {
          id: 'notification-on-start',
          weight: 1,
          group: 'best-practices-trust-safety',
        },
        {
          id: 'no-vulnerable-libraries',
          weight: 1,
          group: 'best-practices-trust-safety',
        },
        {
          id: 'csp-xss',
          weight: 0,
          group: 'best-practices-trust-safety',
        },
        {
          id: 'password-inputs-can-be-pasted-into',
          weight: 1,
          group: 'best-practices-ux',
        },
        {
          id: 'image-aspect-ratio',
          weight: 1,
          group: 'best-practices-ux',
        },
        {
          id: 'image-size-responsive',
          weight: 1,
          group: 'best-practices-ux',
        },
        {
          id: 'preload-fonts',
          weight: 1,
          group: 'best-practices-ux',
        },
        {
          id: 'doctype',
          weight: 1,
          group: 'best-practices-browser-compat',
        },
        {
          id: 'charset',
          weight: 1,
          group: 'best-practices-browser-compat',
        },
        {
          id: 'js-libraries',
          weight: 0,
          group: 'best-practices-general',
        },
        {
          id: 'deprecations',
          weight: 1,
          group: 'best-practices-general',
        },
        {
          id: 'errors-in-console',
          weight: 1,
          group: 'best-practices-general',
        },
        {
          id: 'valid-source-maps',
          weight: 0,
          group: 'best-practices-general',
        },
        {
          id: 'inspector-issues',
          weight: 1,
          group: 'best-practices-general',
        },
      ],
    },
    seo: {
      title: {
        i18nId: 'core/config/default-config.js | seoCategoryTitle',
        formattedDefault: 'SEO',
      },
      description: {
        i18nId: 'core/config/default-config.js | seoCategoryDescription',
        formattedDefault:
          'These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/learn-web-vitals/). [Learn more](https://support.google.com/webmasters/answer/35769).',
      },
      manualDescription: {
        i18nId: 'core/config/default-config.js | seoCategoryManualDescription',
        formattedDefault:
          'Run these additional validators on your site to check additional SEO best practices.',
      },
      supportedModes: ['navigation', 'snapshot'],
      auditRefs: [
        {
          id: 'viewport',
          weight: 1,
          group: 'seo-mobile',
        },
        {
          id: 'document-title',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'meta-description',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'http-status-code',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'link-text',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'crawlable-anchors',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'is-crawlable',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'robots-txt',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'image-alt',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'hreflang',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'canonical',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'font-size',
          weight: 1,
          group: 'seo-mobile',
        },
        {
          id: 'plugins',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'tap-targets',
          weight: 1,
          group: 'seo-mobile',
        },
        {
          id: 'structured-data',
          weight: 0,
        },
      ],
    },
    pwa: {
      title: {
        i18nId: 'core/config/default-config.js | pwaCategoryTitle',
        formattedDefault: 'PWA',
      },
      description: {
        i18nId: 'core/config/default-config.js | pwaCategoryDescription',
        formattedDefault:
          'These checks validate the aspects of a Progressive Web App. [Learn more](https://web.dev/pwa-checklist/).',
      },
      manualDescription: {
        i18nId: 'core/config/default-config.js | pwaCategoryManualDescription',
        formattedDefault:
          "These checks are required by the baseline [PWA Checklist](https://web.dev/pwa-checklist/) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
      },
      supportedModes: ['navigation'],
      auditRefs: [
        {
          id: 'installable-manifest',
          weight: 2,
          group: 'pwa-installable',
        },
        {
          id: 'service-worker',
          weight: 1,
          group: 'pwa-optimized',
        },
        {
          id: 'splash-screen',
          weight: 1,
          group: 'pwa-optimized',
        },
        {
          id: 'themed-omnibox',
          weight: 1,
          group: 'pwa-optimized',
        },
        {
          id: 'content-width',
          weight: 1,
          group: 'pwa-optimized',
        },
        {
          id: 'viewport',
          weight: 2,
          group: 'pwa-optimized',
        },
        {
          id: 'maskable-icon',
          weight: 1,
          group: 'pwa-optimized',
        },
        {
          id: 'pwa-cross-browser',
          weight: 0,
        },
        {
          id: 'pwa-page-transitions',
          weight: 0,
        },
        {
          id: 'pwa-each-page-has-url',
          weight: 0,
        },
      ],
    },
  },
};
