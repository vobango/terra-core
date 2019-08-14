const path = require('path');
const wdioConf = require('../../node_modules/terra-toolkit/config/wdio/wdio.conf');

wdioConf.config.specs = [path.join(__dirname, 'test*', 'wdio', '**', '*-spec.js')];

const theme = process.env.THEME;

//if (theme) {
  ////fwdioConf.config.visualRegression.compare
  //wdioConf.config.baseScreenshotDir = `${__dirname}/tests/wdio/theme/${theme}`;
//}

exports.config = wdioConf.config;
