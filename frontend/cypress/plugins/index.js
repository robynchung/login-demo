const webpack = require("@cypress/webpack-preprocessor");

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = on => {
  const options = webpack.defaultOptions;
  options.webpackOptions.module.rules[0].use[0].options.presets = [options.webpackOptions.module.rules[0].use[0].options.presets];
  on("file:preprocessor", webpack(options));
};
