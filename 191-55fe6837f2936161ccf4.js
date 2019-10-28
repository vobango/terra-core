(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{2368:function(e,r,t){"use strict";t.r(r),r.default="# Terra Form Textarea Upgrade Guide\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-form-textarea-focus-animation-background | --terra-form-textarea-background-image |\n| --terra-form-textarea-focus-background-start | --terra-form-textarea-background-size |\n| --terra-form-textarea-focus-keyboard-animation-size | --terra-form-textarea-focus-background-size |\n| --terra-form-textarea-focus-keyboard-border-color | --terra-form-textarea-focus-border-color |\n| --terra-form-textarea-focus-keyboard-border-style | --terra-form-textarea-focus-border-style |\n| --terra-form-textarea-focus-keyboard-border-width | --terra-form-textarea-focus-border-width |\n| --terra-form-textarea-focus-keyboard-opacity | --terra-form-textarea-focus-opacity |\n| --terra-form-textarea-focus-keyboard-box-shadow-ltr | --terra-form-textarea-focus-ltr-box-shadow |\n| --terra-form-textarea-focus-keyboard-box-shadow-rtl | --terra-form-textarea-focus-rtl-box-shadow |\n| --terra-form-textarea-error-focus-animation-background | --terra-form-textarea-error-background-image |\n| --terra-form-textarea-error-focus-keyboard-animation-size | --terra-form-textarea-error-focus-background-size |\n| --terra-form-textarea-error-focus-keyboard-border-color | --terra-form-textarea-error-focus-border-color |\n| --terra-form-textarea-error-focus-keyboard-border-style | --terra-form-textarea-error-focus-border-style |\n| --terra-form-textarea-error-focus-keyboard-border-width | --terra-form-textarea-error-focus-border-width |\n| --terra-form-textarea-error-focus-keyboard-opacity | --terra-form-textarea-error-focus-opacity |\n| --terra-form-textarea-error-focus-keyboard-box-shadow-ltr | --terra-form-textarea-error-focus-ltr-box-shadow |\n| --terra-form-textarea-error-focus-keyboard-box-shadow-rtl | --terra-form-textarea-error-focus-rtl-box-shadow |\n\n#### Added\n* --terra-form-textarea-hover-background-color\n* --terra-form-textarea-hover-color\n* --terra-form-textarea-focus-background-color\n* --terra-form-textarea-focus-color\n* --terra-form-textarea-error-background-color\n* --terra-form-textarea-error-hover-background-color\n* --terra-form-textarea-error-hover-color\n* --terra-form-textarea-error-focus-background-color\n* --terra-form-textarea-error-focus-color\n\n#### Removed\n* --terra-form-textarea-cursor\n"},2996:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=l(t(0)),o=l(t(799)),n=l(t(2368));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement(o.default,{packageName:"terra-form-textarea",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-textarea",readme:n.default})};r.default=c},797:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=l(t(0)),o=l(t(4)),n=l(t(798));function l(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(n.default),d=function(e){var r=e.packageName,t=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:t||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},a.default.createElement("span",{className:c("badge-name")},t?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(r)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(r),alt:"NPM version"}))};r.default=d},798:function(e,r,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},799:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=f(t(0)),o=f(t(2)),n=f(t(805)),l=f(t(804)),c=f(t(4)),d=f(t(797)),u=f(t(800)),s=f(t(803));function f(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function m(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=c.default.bind(s.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},b=function(e){var r,t=e.packageName,o=e.packageVersion,c=e.packageUrl,s=e.readme,f=e.srcPath,g=e.examples,b=e.propsTables,_=e.children,h=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;b&&(r=b);for(var x=0,v=0;v<y.length;v+=1)y[v].id=x,x+=1;if(r)for(var k=0;k<r.length;k+=1)r[k].id=x,x+=1;var E,w=p(["doc-template",h.className]);if(y.length>0){var T=y.length>1?"Examples":"Example";E=a.default.createElement("h1",{className:p("examples-header")},T)}var O=a.default.createElement(d.default,{packageName:t,packageUrl:c,packageVersion:o});return a.default.createElement("div",i({},h,{className:w}),a.default.createElement("div",{className:p("doc-card")},t&&O,s&&a.default.createElement(l.default,{src:s}),f&&a.default.createElement("a",{href:f},"View component source code")),E,y.map((function(e){return a.default.createElement(u.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:p("doc-card")},b[0]&&b[0].componentProps?r.map((function(e){return a.default.createElement("div",{className:p("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):r.map((function(e){return a.default.createElement(n.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),_&&a.default.createElement("div",{className:p("doc-card")},_))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var _=b;r.default=_},800:function(e,r,t){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=f(t(0)),n=f(t(2)),l=f(t(806)),c=f(t(807)),d=f(t(4)),u=f(t(801)),s=f(t(802));function f(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function g(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,r){return(h=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}l.default.registerLanguage("jsx",c.default);var y=d.default.bind(u.default),x={example:n.default.element,exampleSrc:n.default.string,title:n.default.string,description:n.default.node,children:n.default.element},v={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){function r(e){var t,a,o;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),a=this,(t=!(o=b(r).call(this,e))||"object"!==i(o)&&"function"!=typeof o?_(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(_(t)),t.handleCodeToggle=t.handleCodeToggle.bind(_(t)),t}var t,a,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&h(e,r)}(r,e),t=r,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,r=e.title,t=e.example,a=e.exampleSrc,n=e.children,c=e.description,d=p(e,["title","example","exampleSrc","children","description"]),u=this.state,f=u.isExpanded,i={};return u.isBackgroundTransparent&&(i={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},d,{className:y("template",d.className)}),r&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},r)),o.default.createElement("div",{className:y("content"),style:i},c&&o.default.createElement("div",{className:y("description")},c),t,n),a&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":f}),"aria-hidden":!f},f?o.default.createElement(l.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&g(t.prototype,a),n&&g(t,n),r}(o.default.Component);k.propTypes=x,k.defaultProps=v;var E=k;r.default=E},801:function(e,r,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},802:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a="#D8DEE9",o="#B2B2B2",n="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",u="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:n},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:n},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};r.default=s},803:function(e,r,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=191-55fe6837f2936161ccf4.js.map