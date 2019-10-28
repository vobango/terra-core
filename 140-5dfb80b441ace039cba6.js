(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{2695:function(e,t,a){"use strict";a.r(t),t.default='# Terra Spacer\n\nThis component is used to provide margin and/or padding space between two components based on the given values.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-spacer`\n  - `yarn add terra-spacer`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Naming Convention\n\n| Spacing scale values   | Computed REM Value |\n| --------------------   | ------------------ |\n| none                   | 0                  |\n| small-2                | 0.2142857143rem    |\n| small-1                | 0.3571428571rem    |\n| small                  | 0.5rem             |\n| medium                 | 0.7142857143rem    |\n| large                  | 0.8571428571rem    |\n| large+1                | 1.0714285714rem    |\n| large+2                | 1.4285714286rem    |\n| large+3                | 2.1428571429rem    |\n| large+4                | 3.5714285714rem    |\n\n## Usage\n\n```jsx\nimport React from \'react\';\nimport Spacer from \'terra-spacer\';\n\n// Small spacing\n\n<Spacer marginTop="small" marginLeft="small-1" paddingTop="small-2">\n  <Image src="someImageSource" alt="example image" />\n<Spacer/>\n\n// Medium spacing\n\n<Spacer marginLeft="medium" marginRight="medium">\n  <Image src="someImageSource" alt="example image" />\n<Spacer/>\n\n// Large and very large spacing\n\n<Spacer paddingTop="large" paddingBottom="large+1" paddingLeft="large+2" marginLeft="large+4" marginRight="large+3">\n  <Image src="someImageSource" alt="example image" />\n<Spacer/>\n\n// Shorthand consumption\n\n<Spacer padding="large" margin="medium large+1 tiny">\n  <Image src="someImageSource" alt="example image" />\n</Spacer>\n\n<Spacer padding="large small" margin="medium large+1 tiny">\n  <Image src="someImageSource" alt="example image" />\n</Spacer>\n\n<Spacer padding="large medium small" margin="medium large+1 tiny">\n  <Image src="someImageSource" alt="example image" />\n</Spacer>\n\n<Spacer padding="large none large+1 large+2" margin="none large+3 none large+4">\n  <Image src="someImageSource" alt="example image" />\n<Spacer/>\n\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n'},2696:function(e){e.exports=JSON.parse('{"name":"terra-spacer","main":"lib/Spacer.js","version":"3.23.0","description":"This component is used to provide margin and/or padding space between two components based on the given values.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-spacer","Spacer","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-button":"^3.25.0","terra-doc-template":"^2.20.0","terra-image":"^3.19.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"}}')},2697:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Child Nodes.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">margin</td><td style="padding-bottom: 1.8rem">custom</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Sets margin in a syntax similar to the standard CSS spec <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin">https://developer.mozilla.org/en-US/docs/Web/CSS/margin</a>. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">marginTop</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets top margin. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">marginBottom</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets bottom margin. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">marginLeft</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets left margin One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">marginRight</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets right margin. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">padding</td><td style="padding-bottom: 1.8rem">custom</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Sets padding in a syntax similar to the standard CSS spec <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">https://developer.mozilla.org/en-US/docs/Web/CSS/padding</a>. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">paddingTop</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets top padding. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">paddingBottom</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets bottom padding. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">paddingLeft</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets left padding. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">paddingRight</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">SpacerSizes.NONE</td><td style="padding-bottom: 1.8rem">Sets right padding. One of &#39;none&#39;, &#39;small-2&#39;, &#39;small-1&#39;, &#39;small&#39;, &#39;medium&#39;, &#39;large&#39;, &#39;large+1&#39;, &#39;large+2&#39;, &#39;large+3&#39;, &#39;large+4&#39;.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInlineBlock</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Sets the display to be inline-block.</td></tr></tbody></table>'},2698:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './Spacer.module.scss';\nimport { mapShorthandToObject, shorthandValidator } from './_spacerShorthandUtils';\nimport { SpacerSizes, SpacerClassMappings } from './_spacerConstants';\n\nconst cx = classNames.bind(styles);\n\n/*\n  NOTE: this is needed in order to ensure that the types `marginTop`, `marginRight`, `paddingTop`, `paddingRight`, etc. are recognized by terra-props-table\n  as defined. Currently, simply putting `Object.values(SpacerSizes)` causes all other `marginX` and `paddingX` props to be recognized as `undefined`\n  in the PropsTable.\n*/\nconst arrayOfSpacerSizes = [...Object.values(SpacerSizes)];\n\nconst propTypes = {\n  /**\n   * Child Nodes.\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * Sets margin in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  margin: shorthandValidator,\n  /**\n   * Sets top margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  marginTop: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets bottom margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  marginBottom: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets left margin One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  marginLeft: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets right margin. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  marginRight: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets padding in a syntax similar to the standard CSS spec https://developer.mozilla.org/en-US/docs/Web/CSS/padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  padding: shorthandValidator,\n  /**\n   * Sets top padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  paddingTop: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets bottom padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  paddingBottom: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets left padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  paddingLeft: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets right padding. One of 'none', 'small-2', 'small-1', 'small', 'medium', 'large', 'large+1', 'large+2', 'large+3', 'large+4'.\n   */\n  paddingRight: PropTypes.oneOf(arrayOfSpacerSizes),\n  /**\n   * Sets the display to be inline-block.\n   */\n  isInlineBlock: PropTypes.bool,\n};\n\nconst defaultProps = {\n  margin: undefined,\n  marginTop: SpacerSizes.NONE,\n  marginBottom: SpacerSizes.NONE,\n  marginRight: SpacerSizes.NONE,\n  marginLeft: SpacerSizes.NONE,\n  padding: undefined,\n  paddingTop: SpacerSizes.NONE,\n  paddingBottom: SpacerSizes.NONE,\n  paddingLeft: SpacerSizes.NONE,\n  paddingRight: SpacerSizes.NONE,\n  isInlineBlock: false,\n};\n\nconst Spacer = ({\n  margin,\n  marginTop,\n  marginBottom,\n  marginLeft,\n  marginRight,\n  padding,\n  paddingTop,\n  paddingBottom,\n  paddingLeft,\n  paddingRight,\n  isInlineBlock,\n  children,\n  ...customProps\n}) => {\n  const marginShorthand = margin ? mapShorthandToObject('margin', margin) : {};\n  const paddingShorthand = padding ? mapShorthandToObject('padding', padding) : {};\n\n  const marginAttributes = {\n    marginTop,\n    marginRight,\n    marginBottom,\n    marginLeft,\n    ...marginShorthand,\n  };\n\n  const paddingAttributes = {\n    paddingTop,\n    paddingRight,\n    paddingBottom,\n    paddingLeft,\n    ...paddingShorthand,\n  };\n\n  const SpacerClassNames = cx([\n    `margin-top-${SpacerClassMappings[marginAttributes.marginTop]}`,\n    `margin-bottom-${SpacerClassMappings[marginAttributes.marginBottom]}`,\n    `margin-left-${SpacerClassMappings[marginAttributes.marginLeft]}`,\n    `margin-right-${SpacerClassMappings[marginAttributes.marginRight]}`,\n    `padding-top-${SpacerClassMappings[paddingAttributes.paddingTop]}`,\n    `padding-bottom-${SpacerClassMappings[paddingAttributes.paddingBottom]}`,\n    `padding-left-${SpacerClassMappings[paddingAttributes.paddingLeft]}`,\n    `padding-right-${SpacerClassMappings[paddingAttributes.paddingRight]}`,\n    { 'is-inline-block': isInlineBlock },\n    customProps.className,\n  ]);\n\n  return <div {...customProps} className={SpacerClassNames}>{children}</div>;\n};\n\nconst opts = {\n  Sizes: SpacerSizes,\n};\n\nSpacer.propTypes = propTypes;\nSpacer.defaultProps = defaultProps;\nSpacer.Opts = opts;\n\nexport default Spacer;\n"},2699:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(50)),o=l(a(265));function l(e){return e&&e.__esModule?e:{default:e}}a(2700);var d=function(){return n.default.createElement("div",null,n.default.createElement(o.default,{className:"spacerdemodefault",paddingTop:"large+4",paddingBottom:"large+4",paddingLeft:"large+4",paddingRight:"large+4",isInlineBlock:!0},n.default.createElement(r.default,{text:"Default"})),n.default.createElement(o.default,{className:"spacerdemoprimary",paddingTop:"large+2",paddingBottom:"large+2",paddingLeft:"large+2",paddingRight:"large+2",isInlineBlock:!0},n.default.createElement(r.default,{text:"Emphasis",variant:"emphasis"})))};t.default=d},2700:function(e,t,a){},2701:function(e,t,a){"use strict";a.r(t),t.default='import React from \'react\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport \'terra-spacer/lib/terra-dev-site/doc/example/Spacer.module.scss\';\n\nconst SpacerExample = () => (\n  <div>\n    <Spacer className="spacerdemodefault" paddingTop="large+4" paddingBottom="large+4" paddingLeft="large+4" paddingRight="large+4" isInlineBlock>\n      <Button text="Default" />\n    </Spacer>\n    <Spacer className="spacerdemoprimary" paddingTop="large+2" paddingBottom="large+2" paddingLeft="large+2" paddingRight="large+2" isInlineBlock>\n      <Button text="Emphasis" variant="emphasis" />\n    </Spacer>\n  </div>\n);\n\nexport default SpacerExample;\n'},3057:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(0)),r=m(a(799)),o=m(a(2695)),l=a(2696),d=m(a(2697)),i=m(a(2698)),s=m(a(2699)),p=m(a(2701));function m(e){return e&&e.__esModule?e:{default:e}}var g=function(){return n.default.createElement(r.default,{packageName:l.name,packageVersion:l.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Spacer",description:"Spacing default button with a padding value of large+4 and primary button with padding value of large+2",example:n.default.createElement(s.default,null),source:p.default}],propsTables:[{componentName:"Spacer",componentSrc:i.default,componentProps:d.default}]})};t.default=g},797:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(4)),o=l(a(798));function l(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(o.default),i=function(e){var t=e.packageName,a=e.packageUrl,r=e.packageVersion;return r?n.default.createElement("div",{className:d("badge-container")},n.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},n.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:d("badge-version")},"v".concat(r)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},798:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(0)),r=m(a(2)),o=m(a(805)),l=m(a(804)),d=m(a(4)),i=m(a(797)),s=m(a(800)),p=m(a(803));function m(e){return e&&e.__esModule?e:{default:e}}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=d.default.bind(p.default),f={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},b=function(e){var t,a=e.packageName,r=e.packageVersion,d=e.packageUrl,p=e.readme,m=e.srcPath,f=e.examples,b=e.propsTables,h=e.children,y=c(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),S=f;b&&(t=b);for(var _=0,v=0;v<S.length;v+=1)S[v].id=_,_+=1;if(t)for(var O=0;O<t.length;O+=1)t[O].id=_,_+=1;var E,T=u(["doc-template",y.className]);if(S.length>0){var N=S.length>1?"Examples":"Example";E=n.default.createElement("h1",{className:u("examples-header")},N)}var x=n.default.createElement(i.default,{packageName:a,packageUrl:d,packageVersion:r});return n.default.createElement("div",g({},y,{className:T}),n.default.createElement("div",{className:u("doc-card")},a&&x,p&&n.default.createElement(l.default,{src:p}),m&&n.default.createElement("a",{href:m},"View component source code")),E,S.map((function(e){return n.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),n.default.createElement("div",{className:u("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return n.default.createElement("div",{className:u("props-table-markdown"),key:e.id},n.default.createElement("h2",null,e.componentName," Props"),n.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return n.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&n.default.createElement("div",{className:u("doc-card")},h))};b.propTypes=f,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;t.default=h},800:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(a(0)),o=m(a(2)),l=m(a(806)),d=m(a(807)),i=m(a(4)),s=m(a(801)),p=m(a(802));function m(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",d.default);var S=i.default.bind(s.default),_={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},v={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},O=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=b(t).call(this,e))||"object"!==g(r)&&"function"!=typeof r?h(n):r).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(h(a)),a.handleCodeToggle=a.handleCodeToggle.bind(h(a)),a}var a,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),a=t,(n=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,n=e.exampleSrc,o=e.children,d=e.description,i=u(e,["title","example","exampleSrc","children","description"]),s=this.state,m=s.isExpanded,g={};return s.isBackgroundTransparent&&(g={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",c({},i,{className:S("template",i.className)}),t&&r.default.createElement("div",{className:S("header")},r.default.createElement("h2",{className:S("title")},t)),r.default.createElement("div",{className:S("content"),style:g},d&&r.default.createElement("div",{className:S("description")},d),a,o),n&&r.default.createElement("div",{className:S("footer")},r.default.createElement("div",{className:S("button-container")},r.default.createElement("button",{type:"button",className:S("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:S("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:S("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:S("chevron-right")}))),r.default.createElement("div",{className:S("code",{"is-expanded":m}),"aria-hidden":!m},m?r.default.createElement(l.default,{language:"jsx",style:p.default,customStyle:{margin:"0",borderRadius:"0"}},n):void 0)))}}])&&f(a.prototype,n),o&&f(a,o),t}(r.default.Component);O.propTypes=_,O.defaultProps=v;var E=O;t.default=E},801:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",r="#B2B2B2",o="#c5a5c5",l="#5a9bcf",d="#8dc891",i="#d7deea",s="#FAC863",p={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:o},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=p},803:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=140-5dfb80b441ace039cba6.js.map