var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/picklist/base/example.jsx.js"]=function(e){function t(t){for(var l,a,s=t[0],d=t[1],r=t[2],u=0,p=[];u<s.length;u++)a=s[u],o[a]&&p.push(o[a][0]),o[a]=0;for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(e[l]=d[l]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],l=!0,s=1;s<n.length;s++){var d=n[s];0!==o[d]&&(l=!1)}l&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var l={},o={131:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},i=[];function a(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=l,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var c=d;return i.push([182,0]),n()}({0:function(e,t){e.exports=React},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=void 0;var l,o=n(0),i=(l=o)&&l.__esModule?l:{default:l},a=n(12),s=n(14);var d=function(e){return i.default.createElement(a.Listbox,{"aria-label":e.heading?e.heading:null,className:"slds-dropdown slds-dropdown_fluid",vertical:!0},e.heading?i.default.createElement("li",{role:"presentation",className:"slds-listbox__item"},i.default.createElement("div",{className:"slds-media slds-listbox__option slds-listbox__option_plain",role:"presentation",id:"listbox-option-unique-id-00"},i.default.createElement("h3",{className:"slds-text-title_caps",role:"presentation"},e.heading))):null,i.default.createElement(a.ListboxItem,null,i.default.createElement(a.Option,{id:"listbox-option-unique-id-01",title:"Option A",focused:e.focused,selected:e.optionOneSelected})),i.default.createElement(a.ListboxItem,null,i.default.createElement(a.Option,{id:"listbox-option-unique-id-02",title:"Option B",selected:e.optionTwoSelected})),i.default.createElement(a.ListboxItem,null,i.default.createElement(a.Option,{id:"listbox-option-unique-id-03",title:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ",selected:e.optionThreeSelected})))};t.Context=function(e){return i.default.createElement("div",{style:{height:"14rem"}},e.children)};t.default=i.default.createElement(a.ComboboxContainer,{className:"slds-combobox-picklist",containerClassName:"slds-size_small",inputIcon:"right",inputIconRightSymbol:"down",listbox:i.default.createElement(d,null),readonly:!0});t.states=[{id:"focused",label:"Focused",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:i.default.createElement(d,null),readonly:!0}),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "},{id:"open-item-focused",label:"Open - Item Focused",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:i.default.createElement(d,{focused:!0}),"aria-activedescendant":"listbox-option-unique-id-01",readonly:!0})},{id:"open-option-selected",label:"Open - Option Selected",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:i.default.createElement(d,{optionOneSelected:!0}),readonly:!0})},{id:"open-options-selected",label:"Open - Options Selected",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:i.default.createElement(d,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0})},{id:"closed-option-selected",label:"Closed - Option Selected",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:i.default.createElement(d,{focused:!0,optionOneSelected:!0}),readonly:!0})},{id:"closed-options-selected",label:"Closed - Options Selected",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:i.default.createElement(d,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0},i.default.createElement(a.Listbox,{id:"listbox-selections-unique-id","aria-label":"Selected Options:",className:"slds-p-top_xxx-small",horizontal:!0},i.default.createElement(a.ListboxItem,null,i.default.createElement(s.ListboxPill,{label:"Option A",tabIndex:"0"})),i.default.createElement(a.ListboxItem,null,i.default.createElement(s.ListboxPill,{label:"Option B"}))))},{id:"group-heading",label:"Group heading label",element:i.default.createElement(a.ComboboxContainer,{containerClassName:"slds-size_small",isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:i.default.createElement(d,{optionOneSelected:!0,heading:"Recently Viewed"}),readonly:!0})}]}});