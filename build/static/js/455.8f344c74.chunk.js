"use strict";(self.webpackChunkmantis_react_ts=self.webpackChunkmantis_react_ts||[]).push([[455],{70455:function(e,t,n){t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}r.default=e,n&&n.set(e,r);return r}(n(47313)),o=["placeholder","separator","isLastChild","ariaLabelOverride","shouldRender","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure","onSubmit"];function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}var m=function(e){return"object"===g(e)},O=function(e){p(n,e);var t=d(n);function n(e){var o;return s(this,n),b(h(o=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!m(e)&&!1!==e})).join(" ")})),b(h(o),"getType",(function(){var e=o.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),b(h(o),"getAriaLabel",(function(e,t){var n=o.props.ariaLabelOverride;return n||"".concat(0===e?"Please enter verification code. ":"").concat(t?"Digit":"Character"," ").concat(e+1)})),o.input=r.default.createRef(),o}return l(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,r=this.input.current;r&&t&&n&&r.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,a=e.isLastChild,s=(e.ariaLabelOverride,e.shouldRender),c=e.inputStyle,l=e.focus,p=e.isDisabled,f=e.hasErrored,d=e.errorStyle,y=e.focusStyle,h=e.disabledStyle,v=(e.shouldAutoFocus,e.isInputNum),b=e.index,g=e.value,O=e.className,I=(e.isInputSecure,e.onSubmit,i(e,o));return r.default.createElement("div",{className:O,style:{display:"flex",alignItems:"center"}},r.default.createElement("input",u({"aria-label":this.getAriaLabel(b,v),style:Object.assign({width:"1em",textAlign:"center",padding:0},m(c)&&c,l&&m(y)&&y,p&&m(h)&&h,f&&m(d)&&d),placeholder:t,className:this.getClasses(c,l&&y,p&&h,f&&d),type:this.getType(),ref:this.input,disabled:p,value:g||""},I)),!a&&s&&n)}}]),n}(r.PureComponent),I=function(e){p(n,e);var t=d(n);function n(){var e;s(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return b(h(e=t.call.apply(t,[this].concat(a))),"state",{activeInput:0}),b(h(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),b(h(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,r=t.numInputs;if("string"===typeof n){if(n.length===r)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),b(h(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),b(h(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),b(h(e),"focusInput",(function(t){var n=e.props.numInputs,r=Math.max(Math.min(n-1,t),0);e.setState({activeInput:r})})),b(h(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),b(h(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),b(h(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,r=e.getOtpValue();r[n]=t[0],e.handleOtpChange(r)})),b(h(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,r=e.props,o=r.numInputs;if(!r.isDisabled){for(var a=e.getOtpValue(),u=n,i=t.clipboardData.getData("text/plain"),s=(e.props.isInputNum?i.replace(/\D/g,""):i).slice(0,o-n).split(""),c=0;c<o;++c)c>=n&&s.length>0&&(a[c]=s.shift(),u++);e.setState({activeInput:u},(function(){e.focusInput(u),e.handleOtpChange(a)}))}})),b(h(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),b(h(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32===t.keyCode||" "===t.key||"Spacebar"===t.key||"Space"===t.key?t.preventDefault():13===t.keyCode||"Enter"===t.key?e.props.onSubmit():e.changeCodeAtFocus("")})),b(h(e),"handleOnInput",(function(t){var n=t.target.value;if(t.target.value)if(t.target.value&&t.target.value.length>1){t.preventDefault();for(var r=e.props.numInputs,o=e.state.activeInput,a=e.getOtpValue(),u=t.target.value.slice(0,r-o).split(""),i=0;i<r;++i)i>=o&&u.length>0&&(a[i]=u.shift());e.handleOtpChange(a),e.focusInput(e.props.numInputs)}else if(n&&n.trim().length>1)t.clipboardData={getData:function(){return n.trim()}},e.handleOnPaste(t);else if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var s=t.nativeEvent;null===s.data&&"deleteContentBackward"===s.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),b(h(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,o=n.id,a=n.autoComplete,i=n.numInputs,s=n.inputStyle,c=n.focusStyle,l=n.separator,p=n.separateAfter,f=void 0===p?1:p,d=n.isDisabled,y=n.disabledStyle,h=n.hasErrored,v=n.errorStyle,b=n.shouldAutoFocus,g=n.isInputNum,m=n.isInputSecure,I=n.className,S=n.inputProps,C=n.onSubmit,w=[],P=e.getOtpValue(),k=e.getPlaceholderValue(),j=e.props["data-cy"],D=e.props["data-testid"],A=e.props["custom-test-attr"],N=e.props["custom-test-id"],x=function(n){var p=void 0;p=(n+1)%parseInt(f)===0;var x={};A&&(x[A]=N&&"".concat(N,"-").concat(n));var E={};S&&(Array.isArray(S)?S[n]&&(E=S[n]):E=S),w.push(r.default.createElement(O,u({id:o&&"".concat(o,"-").concat(n),autoComplete:null!==a&&void 0!==a?a:"off",placeholder:k&&k[n],key:n,index:n,focus:t===n,value:P&&P[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:l,inputStyle:s,focusStyle:c,isLastChild:n===i-1,isDisabled:d,disabledStyle:y,hasErrored:h,errorStyle:v,shouldAutoFocus:b,isInputNum:g,isInputSecure:m,className:I,"data-cy":j&&"".concat(j,"-").concat(n),"data-testid":D&&"".concat(D,"-").concat(n),shouldRender:p,onSubmit:C},E,x)))},E=0;E<i;E++)x(E);return w})),e}return l(n,[{key:"componentDidUpdate",value:function(){var e=this.props.value,t=this.state.activeInput;""==e&&t>0&&this.setState({activeInput:0})}},{key:"render",value:function(){var e=this.props.containerStyle;return r.default.createElement("div",{style:Object.assign({display:"flex"},m(e)&&e),className:m(e)?"":e},this.renderInputs())}}]),n}(r.Component);b(I,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1,onSubmit:function(e){return console.log(e)}});var S=I;t.Z=S}}]);