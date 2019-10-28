(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{2599:function(e,t,n){"use strict";n.r(t),t.default="# Terra Responsive Element\n\nThe Responsive Element provides a way to conditionally render components during breakpoint or resize changes.\n\nThe Responsive Element can be set to be responsive to the parent of the component or the window. By default, event listeners will be bound to the immediate parent of the component and invoke the onChange and onResize callback functions as a result of resize changes to the bound target.\n\n## Additional Notes\n\nThe Responsive Element observes the total width of the bound container. Padding and borders are included in the calculation to determine the available width. Margins are not included. For breakpoint accuracy it is not recommended to set padding on the parent container when responsiveTo is set to parent. For more details on how box-sizing affects the dom box model see: <https://css-tricks.com/almanac/properties/b/box-sizing/>\n\nFor consistency, breakpoint ranges are inherited from [terra-breakpoints](https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about).\n\nFor the uncontrolled version of this component it is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found.\n\n## Getting Started\n\n* Install with [npmjs](https://www.npmjs.com):\n  * `npm install terra-responsive-element`\n  * `yarn add terra-responsive-element`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2600:function(e){e.exports=JSON.parse('{"name":"terra-responsive-element","main":"lib/ResponsiveElement.js","version":"5.10.0","description":"The terra-responsive-element conditionally renders components based on viewport size","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-responsive-element","ResponsiveElement","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","resize-observer-polyfill":"^1.4.1","terra-breakpoints":"^2.19.0","terra-doc-template":"^2.20.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2601:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Child nodes.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">A callback function invoked when the breakpoint size changes. onChange(<string>breakpoint)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onResize</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">A callback function invoked when the responsive target resizes. onResize(<number>width)</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">tiny</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An element to be displayed at tiny breakpoints.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">small</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An element to be displayed at small breakpoints.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">medium</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An element to be displayed at medium breakpoints.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">large</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An element to be displayed at large breakpoints.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">huge</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An element to be displayed at huge breakpoints.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">enormous</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An element to be displayed at enormous breakpoints.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">responsiveTo</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'parent\'</td><td style="padding-bottom: 1.8rem">The viewport the element will be responsive to. One of <code style="white-space: pre-wrap">window</code> or <code>parent</code>.</td></tr></tbody></table>'},2602:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport ResizeObserver from 'resize-observer-polyfill';\nimport breakpoints, { activeBreakpointForSize } from 'terra-breakpoints';\n\nconst DependentViewport = {\n  WINDOW: 'window',\n  PARENT: 'parent',\n};\n\nconst propTypes = {\n  /**\n   * Child nodes.\n   */\n  children: PropTypes.node,\n  /**\n   * A callback function invoked when the breakpoint size changes. onChange(<string>breakpoint)\n   */\n  onChange: PropTypes.func,\n  /**\n   * A callback function invoked when the responsive target resizes. onResize(<number>width)\n   */\n  onResize: PropTypes.func,\n  /**\n   * An element to be displayed at tiny breakpoints.\n   */\n  tiny: PropTypes.element,\n  /**\n   * An element to be displayed at small breakpoints.\n   */\n  small: PropTypes.element,\n  /**\n   * An element to be displayed at medium breakpoints.\n   */\n  medium: PropTypes.element,\n  /**\n   * An element to be displayed at large breakpoints.\n   */\n  large: PropTypes.element,\n  /**\n   * An element to be displayed at huge breakpoints.\n   */\n  huge: PropTypes.element,\n  /**\n   * An element to be displayed at enormous breakpoints.\n   */\n  enormous: PropTypes.element,\n  /**\n   * The viewport the element will be responsive to. One of `window` or `parent`.\n   */\n  responsiveTo: PropTypes.oneOf(['window', 'parent']),\n};\n\nconst defaultProps = {\n  responsiveTo: 'parent',\n};\n\nclass ResponsiveElement extends React.Component {\n  constructor() {\n    super();\n    this.state = { element: null };\n    this.setContainer = this.setContainer.bind(this);\n    this.handleResize = this.handleResize.bind(this);\n    this.handleWindowResize = this.handleWindowResize.bind(this);\n    this.animationFrameID = null;\n  }\n\n  componentDidMount() {\n    if (this.container) {\n      this.resizeObserver = new ResizeObserver((entries) => {\n        this.animationFrameID = window.requestAnimationFrame(() => {\n          this.animationFrameID = null;\n          this.handleResize(entries[0].target.getBoundingClientRect().width);\n        });\n      });\n      this.resizeObserver.observe(this.container);\n    } else {\n      this.handleResize(window.innerWidth);\n      window.addEventListener('resize', this.handleWindowResize);\n    }\n  }\n\n  componentWillUnmount() {\n    if (this.container) {\n      window.cancelAnimationFrame(this.animationFrameID);\n      this.resizeObserver.disconnect(this.container);\n      this.container = null;\n    } else {\n      window.removeEventListener('resize', this.handleWindowResize);\n    }\n  }\n\n  setContainer(node) {\n    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount\n    this.container = this.props.responsiveTo === 'parent' ? node.parentNode : null;\n  }\n\n  handleResize(width) {\n    const {\n      onChange,\n      onResize,\n      tiny,\n      small,\n      medium,\n      large,\n      huge,\n      enormous,\n    } = this.props;\n\n    if (onResize) {\n      onResize(width);\n    }\n\n    const activeBreakpoint = activeBreakpointForSize(width);\n    if (onChange && activeBreakpoint !== this.breakpoint) {\n      onChange(activeBreakpoint);\n    }\n\n    this.breakpoint = activeBreakpoint;\n\n    // Only update the state if an uncontrolled component exists.\n    if (tiny || small || medium || large || huge || enormous) {\n      let element;\n      if (width >= breakpoints.enormous && enormous) {\n        element = 'enormous';\n      } else if (width >= breakpoints.huge && huge) {\n        element = 'huge';\n      } else if (width >= breakpoints.large && large) {\n        element = 'large';\n      } else if (width >= breakpoints.medium && medium) {\n        element = 'medium';\n      } else if (width >= breakpoints.small && small) {\n        element = 'small';\n      } else {\n        element = 'tiny';\n      }\n\n      if (this.state.element !== element) {\n        this.setState({ element });\n      }\n    }\n  }\n\n  handleWindowResize() {\n    this.handleResize(window.innerWidth);\n  }\n\n  render() {\n    const { children, responsiveTo } = this.props;\n\n    if (this.state.element) {\n      return this.props[this.state.element] || null;\n    }\n\n    return (\n      <React.Fragment>\n        {responsiveTo === 'parent' && !this.container && <div ref={this.setContainer} />}\n        {children}\n      </React.Fragment>\n    );\n  }\n}\n\nResponsiveElement.propTypes = propTypes;\nResponsiveElement.defaultProps = defaultProps;\n\nexport default ResponsiveElement;\nexport { DependentViewport };\n"},2603:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(0)),r=l(n(816)),a=l(n(815));function l(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(){var e=s((0,o.useState)(""),2),t=e[0],n=e[1];return o.default.createElement(a.default,{onChange:function(e){return n(e)}},o.default.createElement(r.default,{title:t}))};t.default=d},2604:function(e,t,n){"use strict";n.r(t),t.default="import React, { useState } from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst BreakpointExample = () => {\n  const [breakpoint, setBreakpoint] = useState('');\n\n  return (\n    <ResponsiveElement onChange={value => setBreakpoint(value)}>\n      <Placeholder title={breakpoint} />\n    </ResponsiveElement>\n  );\n};\n\nexport default BreakpointExample;\n"},2605:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t=i();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(0)),r=l(n(816)),a=l(n(815));function l(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(){var e=s((0,o.useState)(""),2),t=e[0],n=e[1];return o.default.createElement(a.default,{onResize:function(e){return n(e)}},o.default.createElement(r.default,{title:t}))};t.default=d},2606:function(e,t,n){"use strict";n.r(t),t.default="import React, { useState } from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst ResizeExample = () => {\n  const [width, setWidth] = useState('');\n\n  return (\n    <ResponsiveElement onResize={value => setWidth(value)}>\n      <Placeholder title={width} />\n    </ResponsiveElement>\n  );\n};\n\nexport default ResizeExample;\n"},2607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(816)),a=l(n(815));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement(a.default,{tiny:o.default.createElement(r.default,{title:"tiny"}),small:o.default.createElement(r.default,{title:"small"}),medium:o.default.createElement(r.default,{title:"medium"}),large:o.default.createElement(r.default,{title:"large"}),huge:o.default.createElement(r.default,{title:"huge"}),enormous:o.default.createElement(r.default,{title:"enormous"})})};t.default=i},2608:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport ResponsiveElement from \'terra-responsive-element\';\n\nconst UncontrolledExample = () => (\n  <ResponsiveElement\n    tiny={<Placeholder title="tiny" />}\n    small={<Placeholder title="small" />}\n    medium={<Placeholder title="medium" />}\n    large={<Placeholder title="large" />}\n    huge={<Placeholder title="huge" />}\n    enormous={<Placeholder title="enormous" />}\n  />\n);\n\nexport default UncontrolledExample;\n'},3042:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=h(n(0)),r=h(n(799)),a=h(n(2599)),l=n(2600),i=h(n(2601)),s=h(n(2602)),d=h(n(2603)),c=h(n(2604)),p=h(n(2605)),u=h(n(2606)),m=h(n(2607)),f=h(n(2608));function h(e){return e&&e.__esModule?e:{default:e}}var b=function(){return o.default.createElement(r.default,{packageName:l.name,packageVersion:l.version,readme:a.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-responsive-element",propsTables:[{componentName:"Responsive Element",componentSrc:s.default,componentProps:i.default}],examples:[{title:"Responsive Breakpoints",description:"An example demonstrating the callback events during a breakpoint change.",example:o.default.createElement(d.default,null),source:c.default},{title:"Responsive Resizing",description:"An example demonstrating the callback events during a resize.",example:o.default.createElement(p.default,null),source:u.default},{title:"Uncontrolled Example",description:"An example of an uncontrolled implementation of the ResponsiveElement.",example:o.default.createElement(m.default,null),source:f.default}]})};t.default=b},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(4)),a=l(n(798));function l(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(a.default),s=function(e){var t=e.packageName,n=e.packageUrl,r=e.packageVersion;return r?o.default.createElement("div",{className:i("badge-container")},o.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(r)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(2)),a=p(n(805)),l=p(n(804)),i=p(n(4)),s=p(n(797)),d=p(n(800)),c=p(n(803));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=i.default.bind(c.default),h={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},b=function(e){var t,n=e.packageName,r=e.packageVersion,i=e.packageUrl,c=e.readme,p=e.srcPath,h=e.examples,b=e.propsTables,g=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=h;b&&(t=b);for(var w=0,_=0;_<v.length;_+=1)v[_].id=w,w+=1;if(t)for(var k=0;k<t.length;k+=1)t[k].id=w,w+=1;var E,O=f(["doc-template",y.className]);if(v.length>0){var P=v.length>1?"Examples":"Example";E=o.default.createElement("h1",{className:f("examples-header")},P)}var x=o.default.createElement(s.default,{packageName:n,packageUrl:i,packageVersion:r});return o.default.createElement("div",u({},y,{className:O}),o.default.createElement("div",{className:f("doc-card")},n&&x,c&&o.default.createElement(l.default,{src:c}),p&&o.default.createElement("a",{href:p},"View component source code")),E,v.map((function(e){return o.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(a.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),g&&o.default.createElement("div",{className:f("doc-card")},g))};b.propTypes=h,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=b;t.default=g},800:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(2)),l=p(n(806)),i=p(n(807)),s=p(n(4)),d=p(n(801)),c=p(n(802));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var v=s.default.bind(d.default),w={example:a.default.element,exampleSrc:a.default.string,title:a.default.string,description:a.default.node,children:a.default.element},_={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=b(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?g(o):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(g(n)),n.handleCodeToggle=n.handleCodeToggle.bind(g(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,a=e.children,i=e.description,s=f(e,["title","example","exampleSrc","children","description"]),d=this.state,p=d.isExpanded,u={};return d.isBackgroundTransparent&&(u={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",m({},s,{className:v("template",s.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:u},i&&r.default.createElement("div",{className:v("description")},i),n,a),o&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":p}),"aria-hidden":!p},p?r.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&h(n.prototype,o),a&&h(n,a),t}(r.default.Component);k.propTypes=w,k.defaultProps=_;var E=k;t.default=E},801:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",r="#B2B2B2",a="#c5a5c5",l="#5a9bcf",i="#8dc891",s="#d7deea",d="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:a},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:i},keyword:{color:a},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},803:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},815:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var r=d(n(0)),a=d(n(2)),l=d(n(128)),i=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(167));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var h={children:a.default.node,onChange:a.default.func,onResize:a.default.func,tiny:a.default.element,small:a.default.element,medium:a.default.element,large:a.default.element,huge:a.default.element,enormous:a.default.element,responsiveTo:a.default.oneOf(["window","parent"])},b=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=u(t).call(this))||"object"!==c(o)&&"function"!=typeof o?m(n):o).state={element:null},e.setContainer=e.setContainer.bind(m(e)),e.handleResize=e.handleResize.bind(m(e)),e.handleWindowResize=e.handleWindowResize.bind(m(e)),e.animationFrameID=null,e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;this.container?(this.resizeObserver=new l.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,o=t.onResize,r=t.tiny,a=t.small,l=t.medium,s=t.large,d=t.huge,c=t.enormous;o&&o(e);var p,u=(0,i.activeBreakpointForSize)(e);n&&u!==this.breakpoint&&n(u),this.breakpoint=u,(r||a||l||s||d||c)&&(p=e>=i.default.enormous&&c?"enormous":e>=i.default.huge&&d?"huge":e>=i.default.large&&s?"large":e>=i.default.medium&&l?"medium":e>=i.default.small&&a?"small":"tiny",this.state.element!==p&&this.setState({element:p}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:r.default.createElement(r.default.Fragment,null,"parent"===n&&!this.container&&r.default.createElement("div",{ref:this.setContainer}),t)}}])&&p(n.prototype,o),a&&p(n,a),t}(r.default.Component);b.propTypes=h,b.defaultProps={responsiveTo:"parent"};var g=b;t.default=g},816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(2)),a=i(n(4)),l=i(n(826));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.default.bind(l.default),p={variant:r.default.oneOf(["light","dark"]),title:r.default.string},u=function(e){var t=e.variant,n=e.title,r=d(e,["variant","title"]),a=c(["placeholder",r.className]),l=c(["inner","is-".concat(t)]);return o.default.createElement("div",s({},r,{className:a}),o.default.createElement("div",{className:l},o.default.createElement("h2",null,n)))};u.propTypes=p,u.defaultProps={variant:"dark",title:""};var m=u;t.default=m},826:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}}}]);
//# sourceMappingURL=110-0457036e29eec5bd71c9.js.map