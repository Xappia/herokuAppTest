var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/list-builder/base/example.jsx.js"]=function(e){function t(t){for(var a,r,n=t[0],c=t[1],o=t[2],u=0,m=[];u<n.length;u++)r=n[u],d[r]&&m.push(d[r][0]),d[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(i&&i(t);m.length;)m.shift()();return s.push.apply(s,o||[]),l()}function l(){for(var e,t=0;t<s.length;t++){for(var l=s[t],a=!0,n=1;n<l.length;n++){var c=l[n];0!==d[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},d={68:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},s=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var n=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var i=c;return s.push([119,0]),l()}({0:function(e,t){e.exports=React},119:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var a=m(l(0)),d=l(15),s=l(138),r=l(12),n=l(32),c=l(28),o=l(14),i=m(l(1)),u=m(l(4));function m(e){return e&&e.__esModule?e:{default:e}}var f=["Name","Product Code","List Price","Product Family"],p=[{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"},{name:"Analytics",productCode:"ANTLY",listPrice:"5000.00",productFamily:"Analytics Product"}],b=function(e){return a.default.createElement(r.Listbox,{className:"slds-dropdown slds-dropdown_fluid",vertical:!0},a.default.createElement(r.ListboxItem,null,a.default.createElement(r.EntityOption,{id:"listbox-option-unique-id-01",entityTitle:"Acme",entityMeta:!0,focused:e.focused})),a.default.createElement(r.ListboxItem,null,a.default.createElement(r.EntityOption,{id:"listbox-option-unique-id-02",entityTitle:"Salesforce.com, Inc.",entityMeta:!0})))},E=function(e){return a.default.createElement("div",{className:"slds-p-vertical_x-small slds-p-horizontal_large slds-shrink-none slds-theme_shade"},a.default.createElement(r.ComboboxContainer,{autocomplete:!0,hideLabel:!0,inputIcon:"right",inputIconRightSymbol:"search",listbox:a.default.createElement(b,null)}),e.selectedFilters?e.selectedFilters:null,a.default.createElement("div",{className:"slds-text-title slds-m-top_x-small","aria-live":"polite"},e.itemsSelected||"0"," Item(s) Selected"))},h=function(e){return a.default.createElement("div",{className:"slds-scrollable slds-grow"},a.default.createElement("table",{role:"grid",className:"slds-table slds-table_fixed-layout slds-table_bordered slds-table_resizable-cols slds-no-row-hover slds-scrollable_none"},a.default.createElement("thead",null,a.default.createElement("tr",{className:"slds-line-height_reset"},a.default.createElement("th",{scope:"col",style:{width:"3.75rem"}}),u.default.times(f.length,function(e){return a.default.createElement(n.Th,{key:e,columnName:f[e],"aria-label":f[e]})}))),a.default.createElement("tbody",null,e.children)))},y=function(e){var t="Select item "+e.index;return a.default.createElement("tr",{className:(0,i.default)("slds-hint-parent",e.className),"aria-selected":e.checked},a.default.createElement("td",{role:"gridcell",tabIndex:1===e.index?"0":"-1",className:"slds-text-align_right",style:{width:"3.75rem"}},a.default.createElement(s.CheckboxAddButton,{label:t,checked:e.checked,tabIndex:"-1"})),a.default.createElement("th",{scope:"row"},a.default.createElement("div",{className:"slds-truncate",title:e.name},e.name)),a.default.createElement("td",{role:"gridcell"},a.default.createElement("div",{className:"slds-truncate",title:e.productCode},e.productCode)),a.default.createElement("td",{role:"gridcell"},a.default.createElement("div",{className:"slds-truncate",title:e.listPrice},e.listPrice)),a.default.createElement("td",{role:"gridcell"},a.default.createElement("div",{className:"slds-truncate",title:e.productFamily},e.productFamily)))};t.default=a.default.createElement("div",{className:"demo-only",style:{height:"640px"}},a.default.createElement(d.Modal,{className:"slds-modal_large slds-list-builder","aria-labelledby":"id-of-modalheader-h2"},a.default.createElement(d.ModalHeader,null,a.default.createElement("h2",{id:"id-of-modalheader-h2",className:"slds-text-heading_medium"},"Add Products"),a.default.createElement("p",{className:"slds-m-top_x-small"},"Pricebook: Salesforce Products")),a.default.createElement(d.ModalContent,{className:"slds-grid slds-grow"},a.default.createElement("div",{className:"slds-grid slds-grid_vertical"},a.default.createElement(E,null),a.default.createElement(h,null,u.default.times(p.length,function(e){return a.default.createElement(y,{key:e,index:e+1,name:p[e].name,productCode:p[e].productCode,listPrice:p[e].listPrice,productFamily:p[e].productFamily})})))),a.default.createElement(d.ModalFooter,null,a.default.createElement("button",{className:"slds-button slds-button_neutral"},"Cancel"),a.default.createElement("button",{className:"slds-button slds-button_brand"},"Next"))),a.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}));t.states=[{id:"items-selected",label:"Items selected",element:a.default.createElement("div",{className:"demo-only",style:{height:"640px"}},a.default.createElement(d.Modal,{className:"slds-modal_large","aria-labelledby":"id-of-modalheader-h2"},a.default.createElement(d.ModalHeader,null,a.default.createElement("h2",{id:"id-of-modalheader-h2",className:"slds-text-heading_medium"},"Add Products"),a.default.createElement("p",{className:"slds-m-top_x-small"},"Pricebook: Salesforce Products")),a.default.createElement(d.ModalContent,{className:"slds-grid slds-nowrap"},a.default.createElement("div",{className:"slds-col slds-grid slds-grid_vertical slds-nowrap"},a.default.createElement(E,{selectedFilters:a.default.createElement(function(e){return a.default.createElement(c.PillContainer,{className:"slds-pill_container_bare"},a.default.createElement(o.ListboxPills,null,a.default.createElement(o.ListboxPillsItem,null,a.default.createElement(o.ListboxPill,{label:"Analytics",tabIndex:"0"}))))},null),itemsSelected:"1"}),a.default.createElement(h,null,u.default.times(p.length,function(e){return a.default.createElement(y,{key:e,index:e+1,checked:0===e||null,name:p[e].name,productCode:p[e].productCode,listPrice:p[e].listPrice,productFamily:p[e].productFamily})})))),a.default.createElement(d.ModalFooter,null,a.default.createElement("button",{className:"slds-button slds-button_neutral"},"Cancel"),a.default.createElement("button",{className:"slds-button slds-button_brand"},"Next"))),a.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))},{id:"filtered",label:"Filtered Results",element:a.default.createElement("div",{className:"demo-only",style:{height:"640px"}},a.default.createElement(d.Modal,{className:"slds-modal_large","aria-labelledby":"id-of-modalheader-h2"},a.default.createElement(d.ModalHeader,null,a.default.createElement("h2",{id:"id-of-modalheader-h2",className:"slds-text-heading_medium"},"Add Products"),a.default.createElement("p",{className:"slds-m-top_x-small"},"Pricebook: Salesforce Products")),a.default.createElement(d.ModalContent,{className:"slds-grid slds-grow"},a.default.createElement("div",{className:"slds-grid slds-grid_vertical"},a.default.createElement(E,{selectedFilters:a.default.createElement(function(e){return a.default.createElement(c.PillContainer,{className:"slds-pill_container_bare"},a.default.createElement(o.ListboxPills,null,a.default.createElement(o.ListboxPillsItem,null,a.default.createElement(o.ListboxPill,{label:"Option A",tabIndex:"0"})),a.default.createElement(o.ListboxPillsItem,null,a.default.createElement(o.ListboxPill,{label:"Option B"}))))},null),itemsSelected:"2"}),a.default.createElement(h,null,a.default.createElement(y,{index:1,name:p[0].name,productCode:p[0].productCode,listPrice:p[0].listPrice,productFamily:p[0].productFamily})))),a.default.createElement(d.ModalFooter,null,a.default.createElement("button",{className:"slds-button slds-button_neutral"},"Cancel"),a.default.createElement("button",{className:"slds-button slds-button_brand"},"Next"))),a.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))}]}});