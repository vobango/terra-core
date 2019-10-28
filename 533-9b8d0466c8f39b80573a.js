(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{3423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(815));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement(o.default,{tiny:r.default.createElement("div",null,"Tiny"),small:r.default.createElement("div",null,"Small"),medium:r.default.createElement("div",null,"Medium"),large:r.default.createElement("div",null,"Large"),huge:r.default.createElement("div",null,"Huge"),enormous:r.default.createElement("div",null,"Enormous")})};t.default=a},815:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var o=s(n(0)),i=s(n(2)),a=s(n(128)),l=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n(167));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var h={children:i.default.node,onChange:i.default.func,onResize:i.default.func,tiny:i.default.element,small:i.default.element,medium:i.default.element,large:i.default.element,huge:i.default.element,enormous:i.default.element,responsiveTo:i.default.oneOf(["window","parent"])},y=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(r=c(t).call(this))||"object"!==f(r)&&"function"!=typeof r?p(n):r).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.container?(this.resizeObserver=new a.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,o=t.tiny,i=t.small,a=t.medium,u=t.large,s=t.huge,f=t.enormous;r&&r(e);var d,c=(0,l.activeBreakpointForSize)(e);n&&c!==this.breakpoint&&n(c),this.breakpoint=c,(o||i||a||u||s||f)&&(d=e>=l.default.enormous&&f?"enormous":e>=l.default.huge&&s?"huge":e>=l.default.large&&u?"large":e>=l.default.medium&&a?"medium":e>=l.default.small&&i?"small":"tiny",this.state.element!==d&&this.setState({element:d}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:o.default.createElement(o.default.Fragment,null,"parent"===n&&!this.container&&o.default.createElement("div",{ref:this.setContainer}),t)}}])&&d(n.prototype,r),i&&d(n,i),t}(o.default.Component);y.propTypes=h,y.defaultProps={responsiveTo:"parent"};var v=y;t.default=v}}]);
//# sourceMappingURL=533-9b8d0466c8f39b80573a.js.map