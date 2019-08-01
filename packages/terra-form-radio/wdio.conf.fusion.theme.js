const fs = require('fs');
const path = require('path');
const wdioConf = require('../../node_modules/terra-toolkit/config/wdio/wdio.conf');
//const themeHelpers = require('terra-toolkit/lib/wdio/services/TerraCommands/theme-helpers');

const config = {
  ...wdioConf.config,
  specs: [path.join(__dirname, 'test*', 'wdio', '**', '*-spec.js')],
  baseScreenshotDir: './tests/wdio/__snapshots__',
  before: function () {
//    themeHelpers.setTheme('orion-fusion-theme');
    global.browser.execute(`document.documentElement.classList.add('${orion-fusion-theme}')`);
  }
};

exports.config = config;
