(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{2468:function(e,t,n){"use strict";n.r(t),t.default="# Terra Image\n\nThe terra-image component provides styling for visual imagery.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-image`\n  - `yarn add terra-image`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Image from 'terra-image';\n\nimport placeholderSrc from './mock/valid/path/placeholder.png';\nimport invalidImageSrc from './mock/invalid/path/image.png';\nimport validImageSrc from './mock/valid/path/image.png';\n\nconst placeholderNode = (<img src={placeholderSrc} alt=\"placeholder image\" />);\n\n// Providing an invalid or unresolvable path with cause the placeholder node to be displayed.\n<Image src={invalidImageSrc} placeholder={placeholderNode} alt=\"invalid image\" />\n\n// Providing a valid path will cause the src image to be displayed.\n<Image src={validImageSrc} placeholder={placeholderNode} alt=\"valid image\" />\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n"},2469:function(e){e.exports=JSON.parse('{"name":"terra-image","main":"lib/Image.js","version":"3.19.0","description":"The terra-image component provides styling for visual imagery.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-image","Image","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js"},"peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","object-fit-images":"^3.2.4","prop-types":"^15.5.8","terra-doc-template":"^2.20.0"}}')},2470:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">src</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The source string for the image which will be loaded and displayed.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">variant</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'default\'</td><td style="padding-bottom: 1.8rem">Sets the style of the image from the following values; <code style="white-space: pre-wrap">default</code>, <code>rounded</code>, <code>circle</code>, <code>thumbnail</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isFluid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Sets the fluid behavior of the image, which is <code style="white-space: pre-wrap">nonfluid</code> by default.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">alt</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\' \'</td><td style="padding-bottom: 1.8rem">The text content that specifies an alternative text for an image.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">placeholder</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">A React element which will be displayed during loading and in case of src load failure.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">height</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets the height of the image.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">width</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Sets the width of the image.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onLoad</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function to be executed when the image load is successful.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onError</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Function to be executed when the image load errors.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">fit</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'fill\'</td><td style="padding-bottom: 1.8rem">Sets the <code style="white-space: pre-wrap">object-fit</code> style of the image from the following values; <code>cover</code>, <code>contain</code>, <code>fill</code>, <code>scale-down</code>, <code>none</code>.</td></tr></tbody></table>'},2471:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport objectFitImages from 'object-fit-images'; // Added polyfill for IE.\nimport classNames from 'classnames/bind';\nimport styles from './Image.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ImageVariant = {\n  DEFAULT: 'default',\n  ROUNDED: 'rounded',\n  CIRCLE: 'circle',\n  THUMBNAIL: 'thumbnail',\n};\n\nconst FitTypes = {\n  COVER: 'cover',\n  SCALEDOWN: 'scale-down',\n  FILL: 'fill',\n  CONTAIN: 'contain',\n  NONE: 'none',\n};\n\nconst propTypes = {\n  /**\n   * The source string for the image which will be loaded and displayed.\n   */\n  src: PropTypes.string.isRequired,\n  /**\n   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`.\n   */\n  variant: PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),\n  /**\n   * Sets the fluid behavior of the image, which is `nonfluid` by default.\n   */\n  isFluid: PropTypes.bool,\n  /**\n   * The text content that specifies an alternative text for an image.\n   */\n  alt: PropTypes.string.isRequired,\n  /**\n   * A React element which will be displayed during loading and in case of src load failure.\n   */\n  placeholder: PropTypes.element,\n  /**\n   * Sets the height of the image.\n   */\n  height: PropTypes.string,\n  /**\n   * Sets the width of the image.\n   */\n  width: PropTypes.string,\n  /**\n   * Function to be executed when the image load is successful.\n   */\n  onLoad: PropTypes.func,\n  /**\n   * Function to be executed when the image load errors.\n   */\n  onError: PropTypes.func,\n  /**\n  * Sets the `object-fit` style of the image from the following values; `cover`, `contain`, `fill`, `scale-down`, `none`.\n  */\n  fit: PropTypes.oneOf(Object.values(FitTypes)),\n};\n\n/* eslint-disable react/default-props-match-prop-types */\nconst defaultProps = {\n  variant: 'default',\n  isFluid: false,\n  alt: ' ',\n  fit: 'fill',\n};\n/* eslint-enable react/default-props-match-prop-types */\n\nclass Image extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.ImageRef = React.createRef();\n\n    this.state = {\n      isLoading: true,\n      isError: false,\n      prevPropsSrc: props.src,\n    };\n\n    this.handleOnLoad = this.handleOnLoad.bind(this);\n    this.handleOnError = this.handleOnError.bind(this);\n  }\n\n  static getDerivedStateFromProps(nextProps, prevState) {\n    if (nextProps.src !== prevState.prevPropsSrc) {\n      return {\n        isLoading: true,\n        isError: false,\n        prevPropsSrc: nextProps.src,\n      };\n    }\n\n    return null;\n  }\n\n  handleOnLoad() {\n    this.setState({ isLoading: false });\n    const { onLoad } = this.props;\n\n    if (onLoad !== undefined) {\n      onLoad();\n    }\n  }\n\n  handleOnError() {\n    this.setState({ isLoading: false, isError: true });\n    const { onError } = this.props;\n\n    if (onError !== undefined) {\n      onError();\n    }\n  }\n\n  createImage(customProps, imageClasses) {\n    const {\n      src, alt, height, width,\n    } = this.props;\n    return (\n      <img\n        {...customProps}\n        src={src}\n        alt={alt}\n        height={height}\n        width={width}\n        onLoad={this.handleOnLoad}\n        onError={this.handleOnError}\n        className={imageClasses}\n        ref={this.ImageRef}\n      />\n    );\n  }\n\n  render() {\n    const {\n      src, variant, isFluid, alt, placeholder, height, width, onLoad, onError, fit, ...customProps\n    } = this.props;\n\n    const imageClasses = cx([\n      'image',\n      fit,\n      variant,\n      customProps.className,\n      { fluid: isFluid },\n    ]);\n    delete customProps.className;\n    if (!this.state.isLoading) {\n      objectFitImages(this.ImageRef.current);\n    }\n    if (placeholder) {\n      if (this.state.isLoading) {\n        return (\n          <div>\n            <div className={cx('hidden')}>{this.createImage(customProps, imageClasses)}</div>\n            <div>{placeholder}</div>\n          </div>\n        );\n      }\n\n      return this.state.isError ? placeholder : this.createImage(customProps, imageClasses);\n    }\n\n    return this.createImage(customProps, imageClasses);\n  }\n}\n\nImage.propTypes = propTypes;\nImage.defaultProps = defaultProps;\n\nexport default Image;\nexport { ImageVariant, FitTypes };\n"},2472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(169)),r=i(n(924)),l=i(n(2473));function i(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement("h2",null,"Default"),a.default.createElement(o.default,{src:r.default,alt:"default image"}),a.default.createElement("br",null),a.default.createElement("h2",null,"Circle"),a.default.createElement(o.default,{src:r.default,alt:"circle image",variant:"circle"}),a.default.createElement("br",null),a.default.createElement("h2",null,"Rounded"),a.default.createElement(o.default,{src:r.default,alt:"rounded image",variant:"rounded"}),a.default.createElement("br",null),a.default.createElement("h2",null,"Thumbnail"),a.default.createElement(o.default,{src:r.default,alt:"thumbnail image",variant:"thumbnail"}),a.default.createElement("br",null),a.default.createElement("h2",null,"Fluid"),a.default.createElement(o.default,{src:l.default,alt:"fluid image",isFluid:!0}),a.default.createElement("br",null),a.default.createElement("h2",null,"Placeholder"),a.default.createElement("h3",null,"Invalid src prop (placeholder will show)"),a.default.createElement(o.default,{src:"/mock/failure/route",alt:"invalid src attribute image",placeholder:a.default.createElement(o.default,{src:l.default,alt:"placeholder image"})}),a.default.createElement("h3",null,"Valid src prop (src will show)"),a.default.createElement(o.default,{src:r.default,alt:"src image",placeholder:a.default.createElement(o.default,{src:l.default,alt:"placeholder image"})}))};t.default=d},2473:function(e,t,n){e.exports=n.p+"2d50003b6b587b1e3ce153b0e06feafa.png"},2474:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Image from \'terra-image\';\nimport placeholderPic150x150 from \'../../assets/150x150.jpg\';\nimport placeholderPic1000x200 from \'../../assets/1000x200.png\';\n\nconst ImageDefault = () => (\n  <div>\n    <h2>Default</h2>\n    <Image src={placeholderPic150x150} alt="default image" />\n    <br />\n    <h2>Circle</h2>\n    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />\n    <br />\n    <h2>Rounded</h2>\n    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />\n    <br />\n    <h2>Thumbnail</h2>\n    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />\n    <br />\n    <h2>Fluid</h2>\n    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />\n    <br />\n    <h2>Placeholder</h2>\n    <h3>Invalid src prop (placeholder will show)</h3>\n    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}\n    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n    <h3>Valid src prop (src will show)</h3>\n    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />\n  </div>\n);\n\nexport default ImageDefault;\n'},2475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(2)),r=c(n(4)),l=c(n(169)),i=c(n(2476)),d=c(n(2477)),s=c(n(2478));function c(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var u=r.default.bind(d.default),m={fit:o.default.string,variant:o.default.string},f=function(e){var t=p({},e);return a.default.createElement("div",{className:u("image-container")},a.default.createElement(l.default,{alt:"Toggle fit image",className:u("image"),src:s.default,fit:t.fit,variant:t.variant}))};f.propTypes=m;var g=(0,i.default)(f);t.default=g},2476:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(0))&&o.__esModule?o:{default:o};function l(e){return(l="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){return function(t){function n(e){var t,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,(t=!(o=s(n).call(this,e))||"object"!==l(o)&&"function"!=typeof o?c(a):o).handleOnSelect=t.handleOnSelect.bind(c(t)),t.state={fitType:"fill",variantType:"default"},t}var a,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,t),a=n,(o=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(e,i({fit:this.state.fitType,variant:this.state.variantType},this.props)),r.default.createElement("p",null,r.default.createElement("label",{htmlFor:"fitType"},"Select a Fit Type:")),r.default.createElement("select",{id:"fitType",name:"fitType",value:this.state.fitType,onChange:this.handleOnSelect},r.default.createElement("option",{value:"fill"},"fill"),r.default.createElement("option",{value:"cover"},"cover"),r.default.createElement("option",{value:"contain"},"contain"),r.default.createElement("option",{value:"scale-down"},"scale-down"),r.default.createElement("option",{value:"none"},"none")),r.default.createElement("p",null,r.default.createElement("label",{htmlFor:"variantType"},"Select a Variant Type:")),r.default.createElement("select",{id:"variantType",name:"variantType",value:this.state.variantType,onChange:this.handleOnSelect},r.default.createElement("option",{value:"default"},"default"),r.default.createElement("option",{value:"circle"},"circle"),r.default.createElement("option",{value:"rounded"},"rounded"),r.default.createElement("option",{value:"thumbnail"},"thumbnail")))}}])&&d(a.prototype,o),u&&d(a,u),n}(r.default.Component)};t.default=u},2477:function(e,t,n){e.exports={"image-container":"ImageFitTypes__image-container___2dH5k",image:"ImageFitTypes__image___FZ8ad"}},2478:function(e,t,n){e.exports=n.p+"40415849cc161edd3bafb6a6a5c973b2.jpg"},2479:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport Image from 'terra-image';\nimport FitTypesWrapper from 'terra-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';\nimport styles from './ImageFitTypes.scss';\nimport exampleImage from '../../assets/170x251.jpg';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = { fit: PropTypes.string, variant: PropTypes.string };\n\nconst ImageFitTypes = ({\n  ...props\n}) => (\n  <div className={cx('image-container')}>\n    <Image alt=\"Toggle fit image\" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />\n  </div>\n);\n\nImageFitTypes.propTypes = propTypes;\nexport default FitTypesWrapper(ImageFitTypes);\n"},3013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),o=m(n(799)),r=m(n(2468)),l=n(2469),i=m(n(2470)),d=m(n(2471)),s=m(n(2472)),c=m(n(2474)),p=m(n(2475)),u=m(n(2479));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(){return a.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{title:"Default Image",example:a.default.createElement(s.default,null),source:c.default},{title:"Toggle Image Fit",example:a.default.createElement(p.default,null),source:u.default}],propsTables:[{componentName:"Image",componentSrc:d.default,componentProps:i.default}]})};t.default=f},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(4)),r=l(n(798));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(r.default),d=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:i("badge-container")},a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},798:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),o=p(n(2)),r=p(n(805)),l=p(n(804)),i=p(n(4)),d=p(n(797)),s=p(n(800)),c=p(n(803));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=i.default.bind(c.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var t,n=e.packageName,o=e.packageVersion,i=e.packageUrl,c=e.readme,p=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;h&&(t=h);for(var _=0,E=0;E<v.length;E+=1)v[E].id=_,_+=1;if(t)for(var w=0;w<t.length;w+=1)t[w].id=_,_+=1;var T,x=f(["doc-template",y.className]);if(v.length>0){var S=v.length>1?"Examples":"Example";T=a.default.createElement("h1",{className:f("examples-header")},S)}var P=a.default.createElement(d.default,{packageName:n,packageUrl:i,packageVersion:o});return a.default.createElement("div",u({},y,{className:x}),a.default.createElement("div",{className:f("doc-card")},n&&P,c&&a.default.createElement(l.default,{src:c}),p&&a.default.createElement("a",{href:p},"View component source code")),T,v.map((function(e){return a.default.createElement(s.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&a.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},800:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(2)),l=p(n(806)),i=p(n(807)),d=p(n(4)),s=p(n(801)),c=p(n(802));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var v=d.default.bind(s.default),_={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=h(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?b(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(b(n)),n.handleCodeToggle=n.handleCodeToggle.bind(b(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,r=e.children,i=e.description,d=f(e,["title","example","exampleSrc","children","description"]),s=this.state,p=s.isExpanded,u={};return s.isBackgroundTransparent&&(u={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},d,{className:v("template",d.className)}),t&&o.default.createElement("div",{className:v("header")},o.default.createElement("h2",{className:v("title")},t)),o.default.createElement("div",{className:v("content"),style:u},i&&o.default.createElement("div",{className:v("description")},i),n,r),a&&o.default.createElement("div",{className:v("footer")},o.default.createElement("div",{className:v("button-container")},o.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:v("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:v("chevron-right")}))),o.default.createElement("div",{className:v("code",{"is-expanded":p}),"aria-hidden":!p},p?o.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(n.prototype,a),r&&g(n,r),t}(o.default.Component);w.propTypes=_,w.defaultProps=E;var T=w;t.default=T},801:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",d="#d7deea",s="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:s},"class-name":{color:s},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},803:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},924:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"}}]);
//# sourceMappingURL=114-5320e55a72cbe05216f9.js.map