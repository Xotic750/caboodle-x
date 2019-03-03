/**
 * @file Manages the root configuration settings for webpack.
 * @module webpack/root/configuration
 * @see {@link https://webpack.js.org/} for further information.
 */

const path = require('path');
const childProcess = require('child_process');
const {BannerPlugin, EnvironmentPlugin} = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const semver = require('semver');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const utils = require('./Libs/utils');
const PACKAGE = require('./package.json');

const getGlobal = function() {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
};

const filename = 'caboodle-x';
const library = 'Caboodle';
const dist = path.resolve(__dirname, 'dist');

/**
 * The ENVIRONMENT value.
 * @type {string}
 */
const ENVIRONMENT = utils.IS_PRODUCTION ? utils.PRODUCTION : utils.DEVELOPMENT;

/**
 * The default exclude regex.
 * @type {RegExp}
 */
const DEFAULT_EXCLUDE_RX = /node_modules/;

/**
 * Shared (.js & .vue) babel-loader options.
 * @type {!Object}
 * @see {@link https://github.com/babel/babel-loader}
 */
const babelLoader = {
  exclude: DEFAULT_EXCLUDE_RX,
  loader: 'babel-loader',
};

module.exports = function generateConfig(env) {
  /**
   * The date as of now.
   * @type {string}
   */
  const NOW = new Date().toISOString();

  /**
   * The reference created by git describe --dirty`
   * @type {string}
   * @see {@link https://git-scm.com/docs/git-describe}
   */
  const DESCRIBE = childProcess
    .spawnSync('git', ['describe', '--dirty'])
    .stdout.toString()
    .trim();

  const base = {
    /**
     * This option controls if and how source maps are generated.
     *
     * nosources-source-map - A SourceMap is created without the sourcesContent in it.
     * It can be used to map stack traces on the client without exposing all of the
     * source code. You can deploy the Source Map file to the web-server.
     *
     * eval-source-map - Each module is executed with eval() and a SourceMap is added as
     * a DataUrl to the eval(). Initially it is slow, but it provides fast rebuild speed
     * and yields real files. Line numbers are correctly mapped since it gets mapped to
     * the original code. It yields the best quality SourceMaps for development.
     *
     * source-map - A full SourceMap is emitted as a separate file. It adds a reference
     * comment to the bundle so development tools know where to find it.
     *
     * @type {string}
     * @see {@link https://webpack.js.org/configuration/devtool/}
     */
    devtool: 'source-map',

    /**
     * Define the entry points for the application.
     * @type {Array.<string>}
     * @see {@link https://webpack.js.org/concepts/entry-points/}
     */
    entry: [path.join(__dirname, './index.js')],

    mode: ENVIRONMENT,

    module: {
      /**
       * In modular programming, developers break programs up into discrete chunks of functionality
       * called a module. Each module has a smaller surface area than a full program, making verification,
       * debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation
       * boundaries, so that each module has a coherent design and a clear purpose within the overall
       * application.
       *
       * webpack supports modules written in a variety of languages and preprocessors, via loaders.
       * Loaders describe to webpack how to process non-JavaScript modules and include these dependencies
       * into your bundles.
       *
       * @type {Array.<!Object>}
       * @see {@link https://webpack.js.org/configuration/module/#module-rules}
       */
      rules: [
        /**
         * Shared (.js & .vue) eslint-loader options.
         * @type {!Object}
         * @see {@link https://github.com/MoOx/eslint-loader}
         */
        {
          enforce: 'pre',
          exclude: DEFAULT_EXCLUDE_RX,
          loader: 'eslint-loader',
          options: {
            emitError: true,
            emitWarning: true,
            failOnError: utils.IS_PRODUCTION,
            failOnWarning: utils.IS_PRODUCTION,
            // currently disabled as not working in <= v2.1.1
            fix:
              !utils.IS_PRODUCTION &&
              semver.satisfies(semver.coerce(utils.getStringOption(PACKAGE, 'devDependencies.eslint-loader')), '>2.1.1'),
            formatter: eslintFriendlyFormatter,
            quiet: utils.IS_PRODUCTION,
          },
          // json does not work because of ESM import
          test: /\.js$/,
        },

        /**
         * Extract sourceMappingURL comments from modules and offer it to webpack
         * @see {@link https://github.com/webpack-contrib/source-map-loader}
         */
        {
          enforce: 'pre',
          loader: 'source-map-loader',
          test: /\.js$/,
        },

        /**
         * This package allows transpiling JavaScript files using Babel and webpack.
         * @type {!Object}
         * @see {@link https://webpack.js.org/loaders/babel-loader/}
         */
        {
          ...babelLoader,
          test: /\.js$/,
        },
      ],
    },

    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    node: {
      child_process: 'empty',
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      // prevent webpack from injecting useless setImmediate polyfill.
      setImmediate: false,
      tls: 'empty',
    },

    /**
     * Configuring the output configuration options tells webpack how to write the compiled
     * files to disk.
     * @type {!Object}
     * @see {@link https://webpack.js.org/configuration/output/}
     */
    output: {
      // https://github.com/webpack/webpack/issues/6525
      globalObject: `(${getGlobal.toString()}())`,
      library,
      libraryTarget: 'umd',
      path: dist,
    },

    /**
     * Plugins are the backbone of webpack. Webpack itself is built on the same plugin system
     * that you use in your webpack configuration!
     *
     * A webpack plugin is a JavaScript object that has an apply property. This apply property
     * is called by the webpack compiler, giving access to the entire compilation lifecycle.
     *
     */
    plugins: [
      /**
       * Use the shorthand version.
       * @type {!Object}
       * @see {@link https://webpack.js.org/plugins/environment-plugin/}
       */
      new EnvironmentPlugin({
        NODE_ENV: ENVIRONMENT,
      }),

      /**
       * Adds a banner to the top of each generated chunk.
       * @type {!Object}
       * @see {@link https://webpack.js.org/plugins/banner-`plugin/}
       */
      new BannerPlugin({
        banner: `/*!\n${JSON.stringify(
          {
            copyrite: utils.getStringOption(PACKAGE, 'copyright'),
            date: NOW,
            describe: DESCRIBE,
            description: utils.getStringOption(PACKAGE, 'description'),
            file: '[file]',
            hash: '[hash]',
            license: utils.getStringOption(PACKAGE, 'license'),
            version: utils.getStringOption(PACKAGE, 'version'),
          },
          null,
          2,
        )}\n*/`,
        raw: true,
      }),
    ],

    /**
     * These options change how modules are resolved.
     * @type {!Object}
     * @see {@link https://webpack.js.org/configuration/resolve/}
     */
    resolve: {
      /**
       * Create aliases to import or require certain modules more easily.
       * @type {!Object}
       * @see {@link https://webpack.js.org/configuration/resolve/#resolve-alias}
       */
      alias: {},
      extensions: ['.js', '.json'],
    },
  };

  const packed = merge(base, {
    optimization: {
      minimize: false,
    },

    output: {
      filename: `${filename}.js`,
    },
  });

  const minified = merge(base, {
    output: {
      filename: `${filename}.min.js`,
    },

    /**
     * Webpack plugin and CLI utility that represents bundle content as convenient
     * interactive zoomable treemap.
     *
     * @see {@link https://github.com/webpack-contrib/webpack-bundle-analyzer}
     */
    plugins: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          ecma: 5,
        },
      }),

      ...(env && env.report ? [new BundleAnalyzerPlugin()] : []),
    ],
  });

  return [packed, minified];
};
