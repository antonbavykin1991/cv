'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      './app/index.html',
      './app/templates/**/*.hbs',
      './app/components/**/*.hbs',
    ],
    safelist: ['dark'],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/.]+/g) || [],
  },
};

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('tailwindcss')('./app/tailwind.config.js'),
          ...(isProduction ? [purgeCSS] : []),
        ],
      },
    },
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    splitAtRoutes: ['index', 'skills', 'history', 'contacts'],
    packagerOptions: {
      // publicAssetURL: isProduction
      //   ? 'https://antonbavykin1991.github.io/cv/'
      //   : '/',
    },
  });
};
