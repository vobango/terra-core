const fs = require('fs');
const path = require('path');
/* eslint-disable-next-line import/no-extraneous-dependencies */
const toolkitWdio = require('terra-toolkit/config/wdio/wdio.conf.js');
const themeHelpers = require('terra-toolkit/lib/wdio/services/TerraCommands/theme-helpers');

const config = {
  ...toolkitWdio.config,
  baseScreenshotDir: './tests/wdio/theme/orion-fusion-theme/__snapshots__',
  before: function (suite) {
    themeHelpers.setTheme('orion-fusion-theme');
  }
};

exports.config = config;
