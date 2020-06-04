var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/utilities/sizing/example.jsx.js"]=function(e){function t(t){for(var a,s,o=t[0],r=t[1],d=t[2],u=0,m=[];u<o.length;u++)s=o[u],n[s]&&m.push(n[s][0]),n[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(i&&i(t);m.length;)m.shift()();return f.push.apply(f,d||[]),l()}function l(){for(var e,t=0;t<f.length;t++){for(var l=f[t],a=!0,o=1;o<l.length;o++){var r=l[o];0!==n[r]&&(a=!1)}a&&(f.splice(t--,1),e=s(s.s=l[0]))}return e}var a={},n={102:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},f=[];function s(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=a,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var i=r;return f.push([148,0]),l()}({0:function(e,t){e.exports=React},148:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var a,n=l(0),f=(a=n)&&a.__esModule?a:{default:a};var s=function(e){return f.default.createElement("div",{className:"slds-size_"+e.size},f.default.createElement("div",{className:"slds-box slds-box_x-small slds-text-align_center slds-m-around_x-small"},".slds-size_",e.size))};t.examples=[{id:"two-column",label:"2 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-2"}),f.default.createElement(s,{size:"1-of-2"}),f.default.createElement(s,{size:"2-of-2"}))},{id:"three-column",label:"3 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-3"}),f.default.createElement(s,{size:"1-of-3"}),f.default.createElement(s,{size:"1-of-3"}),f.default.createElement(s,{size:"1-of-3"}),f.default.createElement(s,{size:"2-of-3"}),f.default.createElement(s,{size:"3-of-3"}))},{id:"four-column",label:"4 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-4"}),f.default.createElement(s,{size:"1-of-4"}),f.default.createElement(s,{size:"1-of-4"}),f.default.createElement(s,{size:"1-of-4"}),f.default.createElement(s,{size:"1-of-4"}),f.default.createElement(s,{size:"3-of-4"}),f.default.createElement(s,{size:"2-of-4"}),f.default.createElement(s,{size:"2-of-4"}),f.default.createElement(s,{size:"4-of-4"}))},{id:"five-column",label:"5 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-5"}),f.default.createElement(s,{size:"1-of-5"}),f.default.createElement(s,{size:"1-of-5"}),f.default.createElement(s,{size:"1-of-5"}),f.default.createElement(s,{size:"1-of-5"}),f.default.createElement(s,{size:"1-of-5"}),f.default.createElement(s,{size:"4-of-5"}),f.default.createElement(s,{size:"2-of-5"}),f.default.createElement(s,{size:"3-of-5"}),f.default.createElement(s,{size:"5-of-5"}))},{id:"six-column",label:"6 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-6"}),f.default.createElement(s,{size:"1-of-6"}),f.default.createElement(s,{size:"1-of-6"}),f.default.createElement(s,{size:"1-of-6"}),f.default.createElement(s,{size:"1-of-6"}),f.default.createElement(s,{size:"1-of-6"}),f.default.createElement(s,{size:"2-of-6"}),f.default.createElement(s,{size:"4-of-6"}),f.default.createElement(s,{size:"3-of-6"}),f.default.createElement(s,{size:"3-of-6"}),f.default.createElement(s,{size:"6-of-6"}))},{id:"7-column",label:"7 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"1-of-7"}),f.default.createElement(s,{size:"2-of-7"}),f.default.createElement(s,{size:"5-of-7"}),f.default.createElement(s,{size:"3-of-7"}),f.default.createElement(s,{size:"4-of-7"}),f.default.createElement(s,{size:"7-of-7"}))},{id:"8-column",label:"8 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"1-of-8"}),f.default.createElement(s,{size:"2-of-8"}),f.default.createElement(s,{size:"6-of-8"}),f.default.createElement(s,{size:"3-of-8"}),f.default.createElement(s,{size:"5-of-8"}),f.default.createElement(s,{size:"4-of-8"}),f.default.createElement(s,{size:"4-of-8"}),f.default.createElement(s,{size:"8-of-8"}))},{id:"12-column",label:"12 Column Span",element:f.default.createElement("div",{className:"demo-only demo-only--sizing slds-grid slds-wrap"},f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"1-of-12"}),f.default.createElement(s,{size:"2-of-12"}),f.default.createElement(s,{size:"10-of-12"}),f.default.createElement(s,{size:"3-of-12"}),f.default.createElement(s,{size:"9-of-12"}),f.default.createElement(s,{size:"4-of-12"}),f.default.createElement(s,{size:"8-of-12"}),f.default.createElement(s,{size:"5-of-12"}),f.default.createElement(s,{size:"7-of-12"}),f.default.createElement(s,{size:"6-of-12"}),f.default.createElement(s,{size:"6-of-12"}),f.default.createElement(s,{size:"12-of-12"}))}]}});