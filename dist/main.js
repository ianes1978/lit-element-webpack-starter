!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const n="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${o}`);class l{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,l=-1,p=0;const{strings:h,values:{length:m}}=t;for(;p<m;){const t=r.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)c(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=h[p],s=d.exec(e)[2],n=s.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const i=r.split(a);this.parts.push({type:"attribute",index:l,name:s,strings:i}),p+=i.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const n=t.parentNode,r=e.split(a),i=r.length-1;for(let e=0;e<i;e++){let s,i=r[e];if(""===i)s=u();else{const t=d.exec(i);null!==t&&c(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(i)}n.insertBefore(s,t),this.parts.push({type:"node",index:++l})}""===r[i]?(n.insertBefore(u(),t),s.push(t)):t.data=r[i],p+=i}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&l!==o||(l++,e.insertBefore(u(),t)),o=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(s.push(t),l--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else r.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const c=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:s},parts:n}=t,r=document.createTreeWalker(s,133,null,!1);let i=y(n),o=n[i],a=-1,l=0;const c=[];let p=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==o&&o.index===a;)o.index=null!==p?-1:o.index-l,i=y(n,i),o=n[i]}c.forEach(t=>t.parentNode.removeChild(t))}const m=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},y=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=new WeakMap,f=t=>"function"==typeof t&&_.has(t),g={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class S{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,l=r.nextNode();for(;o<s.length;)if(i=s[o],p(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=` ${i} `;class w{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const a=d.exec(t);e+=null===a?t+(s?v:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>null===t||!("object"==typeof t||"function"==typeof t),P=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class N{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let n=0;n<e;n++){s+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(x(t)||!P(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===g||x(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=g,t(this)}this.value!==g&&this.committer.commit()}}class A{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}const t=this.__pendingValue;t!==g&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):P(t)?this.__commitIterable(t):t===b?(this.value=b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof S&&this.value.template===e)this.value.update(t.values);else{const s=new S(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const r of t)s=e[n],void 0===s&&(s=new A(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(r),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=g}}class E extends N{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new V(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class V extends C{}let O=!1;(()=>{try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class U{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=g,t(this)}if(this.__pendingValue===g)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=g}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function k(t){let e=B.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},B.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new l(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const B=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,n){const r=e[0];if("."===r){return new E(t,e.slice(1),s).parts}return"@"===r?[new U(t,e.slice(1),n.eventContext)]:"?"===r?[new T(t,e.slice(1),s)]:new N(t,e,s).parts}handleTextExpression(t){return new A(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(t,...e)=>new w(t,e,"html",$),H=(t,e)=>`${t}--${e}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),L=!1);const W=t=>e=>{const s=H(e.type,t);let n=B.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},B.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(i);if(r=n.keyString.get(o),void 0===r){const s=e.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,t),r=new l(e,s),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},q=["html","svg"],I=new Set,F=(t,e,s)=>{I.add(t);const n=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{q.forEach(e=>{const s=B.get(H(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),h(t,s)})})})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:r}=t;if(null==s)return void n.appendChild(e);const i=document.createTreeWalker(n,133,null,!1);let o=y(r),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===s&&(a=m(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=y(r,o);return}o=y(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:D};class G extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=D){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||z,r="function"==typeof n?n:n.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||z.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const n=this.constructor,r=n._attributeNameForProperty(t,s);if(void 0!==r){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const n=this.constructor,r=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new X(s,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class tt extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),n=[];s.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}tt.finalized=!0,tt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,i=R.has(e),o=L&&11===e.nodeType&&!!e.host,a=o&&!I.has(n),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=R.get(e);void 0===n&&(r(e,e.firstChild),R.set(e,n=new A(Object.assign({templateFactory:k},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:W(n)},s)),a){const t=R.get(l);R.delete(l);const s=t.value instanceof S?t.value.template:void 0;F(n,l,s),r(e,e.firstChild),e.appendChild(l),R.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};customElements.define("first-component",class extends tt{static get properties(){return{myString:{type:String},myArray:{type:Array},myBool:{type:Boolean}}}constructor(){super(),this.myString="Hello World",this.myArray=["an","array","of","test","data"],this.myBool=!0}render(){return j`
      <p>${this.myString}</p>
      <ul>
        ${this.myArray.map(t=>j`<li>${t}</li>`)}
      </ul>
      ${this.myBool?j`<p>Render some HTML if myBool is true</p>`:j`<p>Render some other HTML if myBool is false</p>`}
    `}});let et=Object.values(document.styleSheets).reduce((t,e)=>[...t,...Object.values(e.cssRules)],[]).map(t=>t.cssText).join("\n");et=et.replace(/html {/g,":host {"),et=et.replace(/@import/g,"/@import");const st=Y([et]);customElements.define("bs-component",class extends tt{static get styles(){return[st,Y`
      `]}static get properties(){return{myString:{type:String},myArray:{type:Array},myBool:{type:Boolean}}}constructor(){super(),this.myString="Hello World",this.myArray=["an","array","of","test","data"],this.myBool=!0}render(){return j`
    <h3>Webcomponent with external style (Bootstrap)</h3>
      <div class="card" >
        <div class="card-body">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <ul>
        ${this.myArray.map(t=>j`<li>${t}</li>`)}
      </ul>
      ${this.myBool?j`<p>Render some HTML if myBool is true</p>`:j`<p>Render some other HTML if myBool is false</p>`}
  </div>
</div>

     
    `}});customElements.define("css-component",class extends tt{static get styles(){return[st,Y`
      .btn-secondary{
        background-color: violet
      }
   
      `]}static get properties(){return{myString:{type:String},myArray:{type:Array},myBool:{type:Boolean}}}constructor(){super(),this.myString="Hello World",this.myArray=["an","array","of","test","data"],this.myBool=!0}render(){return j`
    <h3>Webcomponent with external style (Bootstrap)</h3>
      <div class="card" >
        <div class="card-body">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-secondary">Secondary (style scoped)</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <ul>
        ${this.myArray.map(t=>j`<li>${t}</li>`)}
      </ul>
      ${this.myBool?j`<p>Render some HTML if myBool is true</p>`:j`<p>Render some other HTML if myBool is false</p>`}
  </div>
</div>

     
    `}});customElements.define("my-app",class extends tt{static get properties(){return{}}constructor(){super()}render(){return j`
      <first-component></first-component>

      <bs-component></bs-component>

      <css-component></css-component>
    `}})}]);