/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const fs = require('fs');
const glob = require('glob');

// This assumes the current date. For testing this can be hard coded to something like October 3, 2019.
// Might investigate taking a date as an argument.
const today = new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' });
const logs = glob.sync('./packages/*/CHANGELOG.md');

let markdown = `# Release Notes ${today}\n\n`;

logs.forEach((path) => {
  const changelog = fs.readFileSync(path, 'utf8');

  if (changelog.indexOf(today) === -1) {
    return;
  }

  const packageName = path.split('/')[2];
  const lines = changelog.split('\n');

  const heading = lines.findIndex((line) => line.indexOf(today) > -1);
  const version = lines[heading].split(' -')[0];

  const entries = [];
  let currentLine = heading + 2;

  while (currentLine < lines.length && !(lines[currentLine][0] || '').match(/^[0-9]/)) {
    entries.push(lines[currentLine]);
    currentLine += 1;
  }

  markdown += `## ${packageName} v${version} \n${entries.join('\n')}`;
});

// eslint-disable-next-line no-console
console.log(markdown);
