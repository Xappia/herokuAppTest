var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/button-icons/bordered-transparent-container/example.jsx.js"]=function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],d=0,f=[];d<l.length;d++)o=l[d],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(i&&i(t);f.length;)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={71:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var i=u;return s.push([121,0]),n()}({0:function(e,t){e.exports=React},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=t.Context=void 0;var r=s(n(0)),a=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return r.default.createElement("div",{style:{padding:"0.5rem",backgroundColor:"#f4f6f9"}},e.children)};t.default=r.default.createElement(a.default,{theme:"transparent",symbol:"search"});t.states=[{id:"disabled",label:"Disabled",element:r.default.createElement(a.default,{theme:"transparent",symbol:"search",disabled:!0})}],t.examples=[{id:"hint-hover",label:"Hint on hover",element:r.default.createElement("div",{className:"slds-hint-parent"},r.default.createElement(a.default,{theme:"transparent",iconClassName:"slds-button__icon_hint"}))}]}});