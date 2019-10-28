(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1091:function(e,t,n){e.exports={"content-container-standard":"ContentContainerDocCommon-module__content-container-standard___3pWYi","content-container-fill":"ContentContainerDocCommon-module__content-container-fill___3b71W"}},1931:function(e,t,n){"use strict";n.r(t),t.default="# Terra Content Container\n\nThe Terra ContentContainer is a structural component for the purpose of arranging content with an optional header and/or footer.\n\nThe footer is not responsive to mobile keyboard positioning.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-content-container`\n  - `yarn add terra-content-container`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport ContentContainer from 'terra-content-container';\n\n<ContentContainer header={<h1 blurb />} footer={<h1 blurb />} fill>\n  {container}\n</ContentContainer>\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},1932:function(e){e.exports=JSON.parse('{"name":"terra-content-container","main":"lib/ContentContainer.js","version":"3.19.0","description":"The Terra ContentContainer is a structural component for the purpose of arranging content with a header.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-content-container","ContentContainer","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.20.0","terra-scroll":"^2.18.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},1933:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">header</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The header element to be placed within the header area of the container.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">footer</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The footer element to be placed within the footer area of the container.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The children to be placed within the main content area of the container.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">fill</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the container should expanded to fill its parent element.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">scrollRefCallback</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Ref callback for the scrollable area of the content container.</td></tr></tbody></table>'},1934:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Scroll from 'terra-scroll';\nimport styles from './ContentContainer.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The header element to be placed within the header area of the container.\n   */\n  header: PropTypes.node,\n  /**\n   * The footer element to be placed within the footer area of the container.\n   */\n  footer: PropTypes.node,\n  /**\n   * The children to be placed within the main content area of the container.\n   */\n  children: PropTypes.node,\n  /**\n   * Whether or not the container should expanded to fill its parent element.\n   */\n  fill: PropTypes.bool,\n  /**\n   * Ref callback for the scrollable area of the content container.\n   */\n  scrollRefCallback: PropTypes.func,\n};\n\nconst defaultProps = {\n  header: undefined,\n  footer: undefined,\n  children: undefined,\n  fill: false,\n  scrollRefCallback: undefined,\n};\n\nconst ContentContainer = ({\n  header,\n  footer,\n  children,\n  fill,\n  scrollRefCallback,\n  ...customProps\n}) => {\n  const contentLayoutClassNames = cx([\n    `content-container-${fill ? 'fill' : 'static'}`,\n    customProps.className,\n  ]);\n\n  return (\n    <div {...customProps} className={contentLayoutClassNames}>\n      {header && <div className={cx('header')}>{header}</div>}\n      <div className={cx('main')}>\n        <Scroll className={cx('normalizer')} refCallback={scrollRefCallback}>\n          {children}\n        </Scroll>\n      </div>\n      {footer && <div className={cx('footer')}>{footer}</div>}\n    </div>\n  );\n};\n\nContentContainer.propTypes = propTypes;\nContentContainer.defaultProps = defaultProps;\n\nexport default ContentContainer;\n"},1935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(46)),o=r(n(4)),l=r(n(1091));function r(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),u=a.default.createElement("p",{key:"1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),c=a.default.createElement("p",{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),d=a.default.createElement("p",{key:"3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),m=a.default.createElement("h3",null,"Display Header"),p=a.default.createElement("h3",null,"Display Footer"),f=function(){return a.default.createElement("div",{className:s("content-container-standard")},a.default.createElement(i.default,{header:m,footer:p},a.default.createElement("div",{key:"1"},u),a.default.createElement("div",{key:"2"},c),a.default.createElement("div",{key:"3"},d)))};t.default=f},1936:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport ContentContainer from \'terra-content-container\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ContentContainerDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst display1 = (\n  <p key="1">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\nconst display2 = (\n  <p key="2">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\nconst display3 = (\n  <p key="3">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\n\nconst contentheader = <h3>Display Header</h3>;\nconst contentfooter = <h3>Display Footer</h3>;\n\nconst container = () => (\n  <div className={cx(\'content-container-standard\')}>\n    <ContentContainer header={contentheader} footer={contentfooter}>\n      <div key="1">\n        {display1}\n      </div>\n      <div key="2">\n        {display2}\n      </div>\n      <div key="3">\n        {display3}\n      </div>\n    </ContentContainer>\n  </div>\n);\n\nexport default container;\n'},1937:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(46)),o=r(n(4)),l=r(n(1091));function r(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),u=a.default.createElement("p",{key:"1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),c=a.default.createElement("p",{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),d=a.default.createElement("p",{key:"3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),m=a.default.createElement("h3",null,"Display Header"),p=a.default.createElement("h3",null,"Display Footer"),f=function(){return a.default.createElement("div",{className:s("content-container-fill")},a.default.createElement(i.default,{header:m,footer:p,fill:!0},a.default.createElement("div",{key:"1"},u),a.default.createElement("div",{key:"2"},c),a.default.createElement("div",{key:"3"},d)))};t.default=f},1938:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport ContentContainer from \'terra-content-container\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ContentContainerDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst display1 = (\n  <p key="1">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\nconst display2 = (\n  <p key="2">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\nconst display3 = (\n  <p key="3">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\n\nconst contentheader = <h3>Display Header</h3>;\nconst contentfooter = <h3>Display Footer</h3>;\n\nconst container = () => (\n  <div className={cx(\'content-container-fill\')}>\n    <ContentContainer header={contentheader} footer={contentfooter} fill>\n      <div key="1">\n        {display1}\n      </div>\n      <div key="2">\n        {display2}\n      </div>\n      <div key="3">\n        {display3}\n      </div>\n    </ContentContainer>\n  </div>\n);\n\nexport default container;\n'},1939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(46)),o=r(n(4)),l=r(n(1091));function r(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),u=a.default.createElement("p",{key:"1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),c=a.default.createElement("p",{key:"2"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),d=a.default.createElement("p",{key:"3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam. Phasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis pharetra, augue felis aliquet nunc, non facilisis est velit vel elit."),m=a.default.createElement("h3",null,"Display Header"),p=a.default.createElement("h3",{id:"contentfooter"},"Children count is "),f=function(e){return document.getElementById("contentfooter").append(" ".concat(e.children.length))},g=function(){return a.default.createElement("div",{className:s("content-container-fill")},a.default.createElement(i.default,{header:m,footer:p,fill:!0,scrollRefCallback:f},a.default.createElement("div",{key:"1"},u),a.default.createElement("div",{key:"2"},c),a.default.createElement("div",{key:"3"},d)))};t.default=g},1940:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\n// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\nimport ContentContainer from \'terra-content-container/lib/ContentContainer\';\nimport classNames from \'classnames/bind\';\n\nimport styles from \'./ContentContainerDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst display1 = (\n  <p key="1">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\nconst display2 = (\n  <p key="2">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\nconst display3 = (\n  <p key="3">\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam lectus quis finibus feugiat. Nullam ut sagittis purus.\nPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat fringilla aliquam.\nPhasellus in eleifend odio. Nunc maximus sem vel odio lobortis, in accumsan arcu dapibus. Nunc consectetur, nunc in mattis\npharetra, augue felis aliquet nunc, non facilisis est velit vel elit.\n  </p>\n);\n\nconst contentheader = <h3>Display Header</h3>;\nconst contentfooter = <h3 id="contentfooter">Children count is </h3>;\n\nconst onContainerScroll = scrollRef => (\n  document.getElementById(\'contentfooter\').append(` ${scrollRef.children.length}`)\n);\n\nconst container = () => (\n  <div className={cx(\'content-container-fill\')}>\n    {\n      /**\n       * ScrollRefCallback is used to refer to the scrollable area of the content container DOM element.\n       */\n    }\n    <ContentContainer header={contentheader} footer={contentfooter} fill scrollRefCallback={onContainerScroll}>\n      <div key="1">\n        {display1}\n      </div>\n      <div key="2">\n        {display2}\n      </div>\n      <div key="3">\n        {display3}\n      </div>\n    </ContentContainer>\n  </div>\n);\n\nexport default container;\n'},2944:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(n(0)),i=g(n(799)),o=g(n(1931)),l=n(1932),r=g(n(1933)),s=g(n(1934)),u=g(n(1935)),c=g(n(1936)),d=g(n(1937)),m=g(n(1938)),p=g(n(1939)),f=g(n(1940));function g(e){return e&&e.__esModule?e:{default:e}}var b=function(){return a.default.createElement(i.default,{packageName:l.name,packageVersion:l.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Standard Container",example:a.default.createElement(u.default,null),source:c.default},{title:"Fill Container",example:a.default.createElement(d.default,null),source:m.default},{title:"Scroll Ref Container",example:a.default.createElement(p.default,null),source:f.default}],propsTables:[{componentName:"Content Container",componentSrc:s.default,componentProps:r.default}]})};t.default=b},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(4)),o=l(n(798));function l(e){return e&&e.__esModule?e:{default:e}}var r=i.default.bind(o.default),s=function(e){var t=e.packageName,n=e.packageUrl,i=e.packageVersion;return i?a.default.createElement("div",{className:r("badge-container")},a.default.createElement("a",{className:r("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},a.default.createElement("span",{className:r("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:r("badge-version")},"v".concat(i)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),i=d(n(2)),o=d(n(805)),l=d(n(804)),r=d(n(4)),s=d(n(797)),u=d(n(800)),c=d(n(803));function d(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.default.bind(c.default),g={children:i.default.node,packageName:i.default.string,packageUrl:i.default.string,packageVersion:i.default.string,readme:i.default.string,srcPath:i.default.string,examples:i.default.arrayOf(i.default.shape({title:i.default.string,description:i.default.node,example:i.default.element,source:i.default.string})),propsTables:i.default.arrayOf(i.default.shape({componentSrc:i.default.string,componentName:i.default.string,componentProps:i.default.string,propsResolution:i.default.string}))},b=function(e){var t,n=e.packageName,i=e.packageVersion,r=e.packageUrl,c=e.readme,d=e.srcPath,g=e.examples,b=e.propsTables,h=e.children,y=p(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;b&&(t=b);for(var _=0,N=0;N<v.length;N+=1)v[N].id=_,_+=1;if(t)for(var x=0;x<t.length;x+=1)t[x].id=_,_+=1;var q,E=f(["doc-template",y.className]);if(v.length>0){var k=v.length>1?"Examples":"Example";q=a.default.createElement("h1",{className:f("examples-header")},k)}var C=a.default.createElement(s.default,{packageName:n,packageUrl:r,packageVersion:i});return a.default.createElement("div",m({},y,{className:E}),a.default.createElement("div",{className:f("doc-card")},n&&C,c&&a.default.createElement(l.default,{src:c}),d&&a.default.createElement("a",{href:d},"View component source code")),q,v.map((function(e){return a.default.createElement(u.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&a.default.createElement("div",{className:f("doc-card")},h))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;t.default=h},800:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(n(0)),o=d(n(2)),l=d(n(806)),r=d(n(807)),s=d(n(4)),u=d(n(801)),c=d(n(802));function d(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",r.default);var v=s.default.bind(u.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},N={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var n,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(i=b(t).call(this,e))||"object"!==m(i)&&"function"!=typeof i?h(a):i).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,o=e.children,r=e.description,s=f(e,["title","example","exampleSrc","children","description"]),u=this.state,d=u.isExpanded,m={};return u.isBackgroundTransparent&&(m={backgroundColor:"rgba(0, 0, 0, 0)"}),i.default.createElement("div",p({},s,{className:v("template",s.className)}),t&&i.default.createElement("div",{className:v("header")},i.default.createElement("h2",{className:v("title")},t)),i.default.createElement("div",{className:v("content"),style:m},r&&i.default.createElement("div",{className:v("description")},r),n,o),a&&i.default.createElement("div",{className:v("footer")},i.default.createElement("div",{className:v("button-container")},i.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),i.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},i.default.createElement("span",{className:v("chevron-left")}),i.default.createElement("span",null,"Code"),i.default.createElement("span",{className:v("chevron-right")}))),i.default.createElement("div",{className:v("code",{"is-expanded":d}),"aria-hidden":!d},d?i.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),o&&g(n,o),t}(i.default.Component);x.propTypes=_,x.defaultProps=N;var q=x;t.default=q},801:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",i="#B2B2B2",o="#c5a5c5",l="#5a9bcf",r="#8dc891",s="#d7deea",u="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:i},"block-comment":{color:i},prolog:{color:i},doctype:{color:i},cdata:{color:i},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:r},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:r},keyword:{color:o},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},803:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=125-cfdb4817f7d4686310a2.js.map