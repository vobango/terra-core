(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{2793:function(e,t,n){"use strict";n.r(t),t.default="# Terra Tag\n\nThe tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text.\nIt can optionally display an icon along with the text.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-tag`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Component Features\n\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2794:function(e){e.exports=JSON.parse('{"name":"terra-tag","main":"lib/Tag.js","version":"2.24.0","description":"The tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text. It can optionally display an icon along with the text.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-tag","Tag","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","keycode-js":"^2.0.1","prop-types":"^15.5.8","terra-doc-template":"^2.20.0","terra-icon":"^3.22.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2795:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">href</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets the href. When set will render the component as an anchor tag.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">icon</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">An optional icon.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onClick</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when clicked.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onBlur</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when tag loses focus.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onFocus</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when tag gains focus.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onKeyUp</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Callback function triggered when key is released.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">text</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets the tag text.</td></tr></tbody></table>'},2796:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport * as KeyCode from 'keycode-js';\nimport styles from './Tag.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Sets the href. When set will render the component as an anchor tag.\n   */\n  href: PropTypes.string,\n  /**\n   * An optional icon.\n   */\n  icon: PropTypes.element,\n  /**\n   * Callback function triggered when clicked.\n   */\n  onClick: PropTypes.func,\n  /**\n   * Callback function triggered when tag loses focus.\n   */\n  onBlur: PropTypes.func,\n  /**\n   * Callback function triggered when tag gains focus.\n   */\n  onFocus: PropTypes.func,\n  /**\n   * Callback function triggered when key is released.\n   */\n  onKeyUp: PropTypes.func,\n  /**\n   * Sets the tag text.\n   */\n  text: PropTypes.string.isRequired,\n};\n\nclass Tag extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { focused: false };\n    this.handleKeyUp = this.handleKeyUp.bind(this);\n    this.handleOnBlur = this.handleOnBlur.bind(this);\n  }\n\n  handleOnBlur(event) {\n    this.setState({ focused: false });\n\n    if (this.props.onBlur) {\n      this.props.onBlur(event);\n    }\n  }\n\n  handleKeyUp(event) {\n    // Apply focus styles for keyboard navigation\n    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {\n      this.setState({ focused: true });\n    }\n\n    if (this.props.onKeyUp) {\n      this.props.onKeyUp(event);\n    }\n  }\n\n  render() {\n    const {\n      icon,\n      text,\n      href,\n      onClick,\n      onBlur,\n      onFocus,\n      onKeyUp,\n      ...customProps\n    } = this.props;\n\n    const tagClasses = cx([\n      'tag',\n      { 'is-focused': this.state.focused },\n      { 'is-interactive': href || onClick },\n      customProps.className,\n    ]);\n\n    const iconClass = cx('icon');\n\n    const tagIcon = icon ? <span className={iconClass}>{icon}</span> : null;\n    const isClickable = href || onClick;\n    const clickableComponent = href ? 'a' : 'button';\n    const ComponentType = isClickable ? clickableComponent : 'span';\n\n    return (\n      <ComponentType\n        {...customProps}\n        className={tagClasses}\n        onKeyUp={this.handleKeyUp}\n        onBlur={this.handleOnBlur}\n        onClick={onClick}\n        onFocus={onFocus}\n        href={href}\n      >\n        {tagIcon}\n        {text}\n      </ComponentType>\n    );\n  }\n}\n\nTag.propTypes = propTypes;\nexport default Tag;\n"},2797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(959)),r=l(n(870));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement("div",null,o.default.createElement(r.default,{text:"Default OnClick Tag",onClick:function(){return window.alert("Tag has been clicked!")}}),o.default.createElement(r.default,{icon:o.default.createElement(a.default,null),onClick:function(){return window.alert("Tag has been clicked!")},text:"Icon & Text OnClick Tag"}))};t.default=i},2798:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagDefault = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag text=\"Default OnClick Tag\" onClick={() => window.alert('Tag has been clicked!')} />\n    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text=\"Icon &amp; Text OnClick Tag\" />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagDefault;\n"},2799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(959)),r=l(n(870));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement("div",null,o.default.createElement(r.default,{href:"http://google.com",text:"HREF Tag"}),o.default.createElement(r.default,{icon:o.default.createElement(a.default,null),href:"http://google.com",text:"Icon & Text HREF Tag"}))};t.default=i},2800:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport IconTag from \'terra-icon/lib/icon/IconTag\';\nimport Tag from \'terra-tag\';\n\nconst HrefTag = () => (\n  <div>\n    <Tag href="http://google.com" text="HREF Tag" />\n    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />\n  </div>\n);\n\nexport default HrefTag;\n'},2801:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(959)),r=l(n(870));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return o.default.createElement("div",null,o.default.createElement(r.default,{text:"No OnClick/HREF Tag"}),o.default.createElement(r.default,{icon:o.default.createElement(a.default,null),text:"Icon & Text - No OnClick/HREF Tag"}))};t.default=i},2802:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagFallbacks = () => (\n  <div>\n    <Tag text=\"No OnClick/HREF Tag\" />\n    <Tag icon={<IconTag />} text=\"Icon &amp; Text - No OnClick/HREF Tag\" />\n  </div>\n);\n\nexport default TagFallbacks;\n"},3071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=g(n(0)),a=g(n(799)),r=g(n(2793)),l=n(2794),i=g(n(2795)),c=g(n(2796)),s=g(n(2797)),d=g(n(2798)),u=g(n(2799)),p=g(n(2800)),f=g(n(2801)),m=g(n(2802));function g(e){return e&&e.__esModule?e:{default:e}}var b=function(){return o.default.createElement(a.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Default Tag with onClick",example:o.default.createElement(s.default,null),source:d.default},{title:"Tag with href",example:o.default.createElement(u.default,null),source:p.default},{title:"Tag with no onClick or href",description:"These styles are provided for when this compoment is missing recomended elements for best practice use.",example:o.default.createElement(f.default,null),source:m.default}],propsTables:[{componentName:"Tag",componentSrc:c.default,componentProps:i.default}]})};t.default=b},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),a=l(n(4)),r=l(n(798));function l(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(r.default),c=function(e){var t=e.packageName,n=e.packageUrl,a=e.packageVersion;return a?o.default.createElement("div",{className:i("badge-container")},o.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(a)},o.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:i("badge-version")},"v".concat(a)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=c},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),a=u(n(2)),r=u(n(805)),l=u(n(804)),i=u(n(4)),c=u(n(797)),s=u(n(800)),d=u(n(803));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.default.bind(d.default),g={children:a.default.node,packageName:a.default.string,packageUrl:a.default.string,packageVersion:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,componentProps:a.default.string,propsResolution:a.default.string}))},b=function(e){var t,n=e.packageName,a=e.packageVersion,i=e.packageUrl,d=e.readme,u=e.srcPath,g=e.examples,b=e.propsTables,h=e.children,y=f(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=g;b&&(t=b);for(var v=0,T=0;T<_.length;T+=1)_[T].id=v,v+=1;if(t)for(var w=0;w<t.length;w+=1)t[w].id=v,v+=1;var k,x=m(["doc-template",y.className]);if(_.length>0){var E=_.length>1?"Examples":"Example";k=o.default.createElement("h1",{className:m("examples-header")},E)}var O=o.default.createElement(c.default,{packageName:n,packageUrl:i,packageVersion:a});return o.default.createElement("div",p({},y,{className:x}),o.default.createElement("div",{className:m("doc-card")},n&&O,d&&o.default.createElement(l.default,{src:d}),u&&o.default.createElement("a",{href:u},"View component source code")),k,_.map((function(e){return o.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:m("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:m("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&o.default.createElement("div",{className:m("doc-card")},h))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;t.default=h},800:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(2)),l=u(n(806)),i=u(n(807)),c=u(n(4)),s=u(n(801)),d=u(n(802));function u(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var _=c.default.bind(s.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},T={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=b(t).call(this,e))||"object"!==p(a)&&"function"!=typeof a?h(o):a).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,r=e.children,i=e.description,c=m(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,p={};return s.isBackgroundTransparent&&(p={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",f({},c,{className:_("template",c.className)}),t&&a.default.createElement("div",{className:_("header")},a.default.createElement("h2",{className:_("title")},t)),a.default.createElement("div",{className:_("content"),style:p},i&&a.default.createElement("div",{className:_("description")},i),n,r),o&&a.default.createElement("div",{className:_("footer")},a.default.createElement("div",{className:_("button-container")},a.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:_("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:_("chevron-right")}))),a.default.createElement("div",{className:_("code",{"is-expanded":u}),"aria-hidden":!u},u?a.default.createElement(l.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&g(n.prototype,o),r&&g(n,r),t}(a.default.Component);w.propTypes=v,w.defaultProps=T;var k=w;t.default=k},801:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",a="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",c="#d7deea",s="#FAC863",d={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:c},entity:{color:c,cursor:"help"},url:{color:c},".language-css .token.string":{color:c},".style .token.string":{color:c},variable:{color:c},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=d},803:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},870:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),l=d(n(4)),i=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=o?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n(15)),c=d(n(881));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=l.default.bind(c.default),_={href:r.default.string,icon:r.default.element,onClick:r.default.func,onBlur:r.default.func,onFocus:r.default.func,onKeyUp:r.default.func,text:r.default.string.isRequired},v=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(a=g(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?b(o):a).state={focused:!1},n.handleKeyUp=n.handleKeyUp.bind(b(n)),n.handleOnBlur=n.handleOnBlur.bind(b(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===i.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,r=e.onClick,l=(e.onBlur,e.onFocus),i=(e.onKeyUp,f(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),c=y(["tag",{"is-focused":this.state.focused},{"is-interactive":o||r},i.className]),s=y("icon"),d=t?a.default.createElement("span",{className:s},t):null,u=o||r?o?"a":"button":"span";return a.default.createElement(u,p({},i,{className:c,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:r,onFocus:l,href:o}),d,n)}}])&&m(n.prototype,o),r&&m(n,r),t}(a.default.Component);v.propTypes=_;var T=v;t.default=T},881:function(e,t,n){e.exports={tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}},959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),a=r(n(21));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return o.default.createElement(a.default,t,o.default.createElement("path",{d:"M23.5 1.5C22.6.7 21.9 0 21.9 0H0v21.9l1.5 1.5 23.8 23.8c.8.8 2.2.8 3.1 0l18.9-18.9c.8-.8.8-2.2 0-3.1L23.5 1.5zm-9.8 16.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}))};i.displayName="IconTag",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var c=i;t.default=c}}]);
//# sourceMappingURL=113-9b81675370d6a4cb203c.js.map