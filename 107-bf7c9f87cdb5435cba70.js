(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{2481:function(e,t,n){"use strict";n.r(t),t.default='# Terra List\n\nThe Terra List is a structural component to vertically arrange content within list/list items.\n\nIf a list implementation contains selectable list options the role prop should be set to "listbox" for accesibility.\n\nTwo padding variants are provide for list item content, standard and compact. If different padding is desired use the defaulted style of \'none\' and set the padding on the list item\'s child content with your own css values, preferrably themeable variables.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-list`\n  - `yarn add terra-list`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from \'react\';\nimport List, { Item } from \'terra-list\';\n\n<List\n  dividerStyle="standard"\n  paddingStyle="standard"\n  role="listbox"\n>\n  <Item isSelectable key="section-1-item-1">\n    <p>List item text</p>\n  </Item>\n  <Item isSelectable key="section-1-item-2">\n    <p>List item text</p>\n  </Item>\n</List>\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n'},2482:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">[]</td><td style="padding-bottom: 1.8rem">The children list items passed to the component.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">dividerStyle</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'none\'</td><td style="padding-bottom: 1.8rem">Whether or not the list&#39;s child items should have a border color applied.\nOne of <code style="white-space: pre-wrap">&#39;none&#39;</code>, <code>&#39;standard&#39;</code>, <code>&#39;bottom-only&#39;</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">paddingStyle</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'none\'</td><td style="padding-bottom: 1.8rem">The padding styling to apply to the child list item content.\nOne of <code style="white-space: pre-wrap">&#39;none&#39;</code>, <code>&#39;standard&#39;</code>, <code>&#39;compact&#39;</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">refCallback</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function callback for the ref of the ul.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">role</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'none\'</td><td style="padding-bottom: 1.8rem">Accessibility role of the list, defaults to &#39;none&#39;. If creating a list with selectable items, pass &#39;listbox&#39;.</td></tr></tbody></table>'},2483:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './List.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The children list items passed to the component.\n   */\n  children: PropTypes.node,\n  /**\n   * Whether or not the list's child items should have a border color applied.\n   * One of `'none'`, `'standard'`, `'bottom-only'`.\n   */\n  dividerStyle: PropTypes.oneOf(['none', 'standard', 'bottom-only']),\n  /**\n   * The padding styling to apply to the child list item content.\n   * One of `'none'`, `'standard'`, `'compact'`.\n   */\n  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),\n  /**\n   * Function callback for the ref of the ul.\n   */\n  refCallback: PropTypes.func,\n  /**\n   * Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'.\n   */\n  role: PropTypes.string,\n};\n\nconst defaultProps = {\n  children: [],\n  dividerStyle: 'none',\n  paddingStyle: 'none',\n  role: 'none',\n};\n\nconst List = ({\n  children,\n  dividerStyle,\n  paddingStyle,\n  refCallback,\n  role,\n  ...customProps\n}) => {\n  const listClassNames = cx([\n    'list',\n    { 'padding-standard': paddingStyle === 'standard' },\n    { 'padding-compact': paddingStyle === 'compact' },\n    { 'divider-standard': dividerStyle === 'standard' },\n    { 'divider-bottom-only': dividerStyle === 'bottom-only' },\n    customProps.className,\n  ]);\n\n  const attrSpread = {};\n  if (role && role.length > 0 && role !== 'none') {\n    attrSpread.role = role;\n  }\n\n  return (\n    <ul {...customProps} {...attrSpread} className={listClassNames} ref={refCallback}>\n      {children}\n    </ul>\n  );\n};\n\nList.propTypes = propTypes;\nList.defaultProps = defaultProps;\n\nexport default List;\n"},2484:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(77)),l=c(n(816)),o=c(n(4)),d=c(n(852));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(d.default),m=function(){return a.default.createElement(r.default,null,a.default.createElement(r.Item,{key:"123"},a.default.createElement(l.default,{title:"Item 0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(l.default,{title:"Item 1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(l.default,{title:"Item 2",className:s("placeholder")})))};t.default=m},2485:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport styles from './ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ListExample = () => (\n  <List>\n    <Item key=\"123\">\n      <Placeholder title=\"Item 0\" className={cx('placeholder')} />\n    </Item>\n    <Item key=\"124\">\n      <Placeholder title=\"Item 1\" className={cx('placeholder')} />\n    </Item>\n    <Item key=\"125\">\n      <Placeholder title=\"Item 2\" className={cx('placeholder')} />\n    </Item>\n  </List>\n);\n\nexport default ListExample;\n"},2486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(77)),l=c(n(816)),o=c(n(4)),d=c(n(852));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(d.default),m=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.default,{dividerStyle:"standard"},a.default.createElement(r.Item,{key:"123"},a.default.createElement(l.default,{title:"Standard Divider Item 0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(l.default,{title:"Standard Divider Item 1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(l.default,{title:"Standard Divider Item 2",className:s("placeholder")}))),a.default.createElement("br",null),a.default.createElement(r.default,{dividerStyle:"bottom-only"},a.default.createElement(r.Item,{key:"123"},a.default.createElement(l.default,{title:"Bottom Divider Item 0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(l.default,{title:"Bottom Divider Item 1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(l.default,{title:"Bottom Divider Item 2",className:s("placeholder")}))))};t.default=m},2487:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListDividedExample = () => (\n  <React.Fragment>\n    <List dividerStyle="standard">\n      <Item key="123">\n        <Placeholder title="Standard Divider Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Standard Divider Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Standard Divider Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n    <br />\n    <List dividerStyle="bottom-only">\n      <Item key="123">\n        <Placeholder title="Bottom Divider Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Bottom Divider Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Bottom Divider Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n  </React.Fragment>\n);\n\nexport default ListDividedExample;\n'},2488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),r=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(77)),l=c(n(816)),o=c(n(4)),d=c(n(852));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(d.default),m=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.default,{paddingStyle:"standard"},a.default.createElement(r.Item,{key:"123"},a.default.createElement(l.default,{title:"Standard Padding Item 0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(l.default,{title:"Standard Padding Item 1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(l.default,{title:"Standard Padding Item 2",className:s("placeholder")}))),a.default.createElement("br",null),a.default.createElement(r.default,{paddingStyle:"compact"},a.default.createElement(r.Item,{key:"123"},a.default.createElement(l.default,{title:"Compact Padding Item 0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(l.default,{title:"Compact Padding Item 1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(l.default,{title:"Compact Padding Item 2",className:s("placeholder")}))))};t.default=m},2489:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListPaddedExample = () => (\n  <React.Fragment>\n    <List paddingStyle="standard">\n      <Item key="123">\n        <Placeholder title="Standard Padding Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Standard Padding Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Standard Padding Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n    <br />\n    <List paddingStyle="compact">\n      <Item key="123">\n        <Placeholder title="Compact Padding Item 0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Compact Padding Item 1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Compact Padding Item 2" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n  </React.Fragment>\n);\n\nexport default ListPaddedExample;\n'},3015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(n(0)),r=g(n(799)),l=g(n(2481)),o=n(847),d=g(n(2482)),i=g(n(2483)),c=g(n(2484)),s=g(n(2485)),m=g(n(2486)),p=g(n(2487)),u=g(n(2488)),f=g(n(2489));function g(e){return e&&e.__esModule?e:{default:e}}var h=function(){return a.default.createElement(r.default,{packageName:o.name,packageVersion:o.version,readme:l.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(o.name),examples:[{title:"Default List",example:a.default.createElement(c.default,null),source:s.default},{title:"Divided List",example:a.default.createElement(m.default,null),source:p.default},{title:"Padded List",example:a.default.createElement(u.default,null),source:f.default}],propsTables:[{componentName:"List",componentSrc:i.default,componentProps:d.default}]})};t.default=h},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(4)),l=o(n(798));function o(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(l.default),i=function(e){var t=e.packageName,n=e.packageUrl,r=e.packageVersion;return r?a.default.createElement("div",{className:d("badge-container")},a.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(r)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(2)),l=m(n(805)),o=m(n(804)),d=m(n(4)),i=m(n(797)),c=m(n(800)),s=m(n(803));function m(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=d.default.bind(s.default),g={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},h=function(e){var t,n=e.packageName,r=e.packageVersion,d=e.packageUrl,s=e.readme,m=e.srcPath,g=e.examples,h=e.propsTables,y=e.children,b=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;h&&(t=h);for(var _=0,E=0;E<v.length;E+=1)v[E].id=_,_+=1;if(t)for(var x=0;x<t.length;x+=1)t[x].id=_,_+=1;var k,P=f(["doc-template",b.className]);if(v.length>0){var w=v.length>1?"Examples":"Example";k=a.default.createElement("h1",{className:f("examples-header")},w)}var I=a.default.createElement(i.default,{packageName:n,packageUrl:d,packageVersion:r});return a.default.createElement("div",p({},b,{className:P}),a.default.createElement("div",{className:f("doc-card")},n&&I,s&&a.default.createElement(o.default,{src:s}),m&&a.default.createElement("a",{href:m},"View component source code")),k,v.map((function(e){return a.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(o.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(l.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),y&&a.default.createElement("div",{className:f("doc-card")},y))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var y=h;t.default=y},800:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(0)),l=m(n(2)),o=m(n(806)),d=m(n(807)),i=m(n(4)),c=m(n(801)),s=m(n(802));function m(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}o.default.registerLanguage("jsx",d.default);var v=i.default.bind(c.default),_={example:l.default.element,exampleSrc:l.default.string,title:l.default.string,description:l.default.node,children:l.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},x=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=h(t).call(this,e))||"object"!==p(r)&&"function"!=typeof r?y(a):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(y(n)),n.handleCodeToggle=n.handleCodeToggle.bind(y(n)),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,l=e.children,d=e.description,i=f(e,["title","example","exampleSrc","children","description"]),c=this.state,m=c.isExpanded,p={};return c.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",u({},i,{className:v("template",i.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:p},d&&r.default.createElement("div",{className:v("description")},d),n,l),a&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":m}),"aria-hidden":!m},m?r.default.createElement(o.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),l&&g(n,l),t}(r.default.Component);x.propTypes=_,x.defaultProps=E;var k=x;t.default=k},801:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",r="#B2B2B2",l="#c5a5c5",o="#5a9bcf",d="#8dc891",i="#d7deea",c="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:l},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:o},number:{color:o},"function-name":{color:o},constant:{color:o},symbol:{color:o},deleted:{color:o},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:l},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},803:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),l=d(n(4)),o=d(n(826));function d(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.default.bind(o.default),m={variant:r.default.oneOf(["light","dark"]),title:r.default.string},p=function(e){var t=e.variant,n=e.title,r=c(e,["variant","title"]),l=s(["placeholder",r.className]),o=s(["inner","is-".concat(t)]);return a.default.createElement("div",i({},r,{className:l}),a.default.createElement("div",{className:o},a.default.createElement("h2",null,n)))};p.propTypes=m,p.defaultProps={variant:"dark",title:""};var u=p;t.default=u},826:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},847:function(e){e.exports=JSON.parse('{"name":"terra-list","main":"lib/index.js","version":"4.21.0","description":"The Terra List is a structural component to arrange content within list/listitems.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-list","List","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","terra-doc-template":"^2.20.0","terra-icon":"^3.22.0","terra-mixins":"^1.33.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},852:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=107-bf7c9f87cdb5435cba70.js.map