var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/welcome-mat/docs.mdx.js"]=function(e){function t(t){for(var a,r,i=t[0],s=t[1],c=t[2],d=0,f=[];d<i.length;d++)r=i[d],n[r]&&f.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),l()}function l(){for(var e,t=0;t<o.length;t++){for(var l=o[t],a=!0,i=1;i<l.length;i++){var s=l[i];0!==n[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},n={10:0},o=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;return o.push([140,0]),l()}({0:function(e,t){e.exports=React},135:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=u(l(0)),o=u(l(1)),r=u(l(12)),i=l(24),s=l(17),c=l(18);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.complete,l=e.total,a=e.labelId,r=t/l*100,u=100===r,d=u?n.default.createElement("p",null,"Cha-ching! You earned the badge."):n.default.createElement("p",null,t,"/",l," units completed");return n.default.createElement(n.default.Fragment,null,n.default.createElement("h2",{id:a,className:"slds-welcome-mat__info-title"},"The Lightning Experience is here!"),n.default.createElement("p",{className:"slds-welcome-mat__info-description slds-text-longform"},"Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes."),n.default.createElement("div",{className:(0,o.default)("slds-welcome-mat__info-progress",{"slds-welcome-mat__info-progress_complete":u})},n.default.createElement("div",{className:"slds-welcome-mat__info-badge-container"},n.default.createElement("img",{className:"slds-welcome-mat__info-badge",src:"/assets/images/welcome-mat/trailhead_badge@2x.png",width:"50",height:"50",alt:""}),n.default.createElement(c.ActionIcon,{title:"Completed",assistiveText:"Completed",className:"slds-welcome-mat__icon-check slds-icon_xx-small",symbol:"check"})),n.default.createElement("p",null,n.default.createElement("strong",null,"Lightning Explorer")),d),u?n.default.createElement(s.Button,{isBrand:!0},"View on your Trailblazer Profile"):n.default.createElement(i.ProgressBar,{value:r,className:"slds-progress-bar_circular"}))}}]),t}();d.propTypes={complete:r.default.number.isRequired,total:r.default.number.isRequired,labelId:r.default.string.isRequired},d.defaultProps={complete:0,total:5,labelId:"welcome-mat-label-1"},t.default=d},136:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.Context=void 0;var a=r(l(0)),n=r(l(44)),o=r(l(135));r(l(29));function r(e){return e&&e.__esModule?e:{default:e}}var i=[];n.default.defaultProps.tiles.forEach(function(e){i.push(Object.assign({},e,{completed:!0}))});t.Context=function(e){return a.default.createElement("div",{className:"demo-only",style:{height:"800px"}},e.children,a.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))};t.default=a.default.createElement(n.default,{content:function(e){var t=e.complete,l=e.total,n=e.labelId;return a.default.createElement(o.default,{complete:t,total:l,labelId:n})}});t.examples=[{id:"trailhead-complete",label:"Trailhead Complete",element:a.default.createElement(n.default,{tiles:i,content:function(e){var t=e.complete,l=e.total,n=e.labelId;return a.default.createElement(o.default,{complete:t,total:l,labelId:n})}})}]},137:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VisualPickerMediaObject=void 0;var a=r(l(0)),n=(r(l(2)),r(l(1))),o=l(11);function r(e){return e&&e.__esModule?e:{default:e}}var i=t.VisualPickerMediaObject=function(e){var t=e.symbol||"knowledge_base",l=e.icon||a.default.createElement(o.UtilityIcon,{className:"slds-icon-text-default",symbol:t});return a.default.createElement("a",{href:"javascript:void(0);",className:(0,n.default)("slds-box slds-box_link slds-box_x-small slds-media",e.className)},a.default.createElement("div",{className:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"},l),a.default.createElement("div",{className:"slds-media__body slds-border_left slds-p-around_small"},e.children))};t.default=a.default.createElement("div",{className:"demo-only",style:{width:"24rem"}},a.default.createElement(i,{symbol:"knowledge_base"},a.default.createElement("h2",{className:"slds-truncate slds-text-heading_small",title:"Share the knowledge"},"Share the knowledge"),a.default.createElement("p",{className:"slds-m-top_small"},"Harness your team's collective know-how with our powerful knowledge base")))},138:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=u(l(0)),o=u(l(1)),r=u(l(12)),i=l(137),s=l(11),c=l(18);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"render",value:function(){var e=this.props.tile,t=e.completed,l=(0,o.default)("slds-welcome-mat__tile",{"slds-welcome-mat__tile_complete":t});return n.default.createElement(i.VisualPickerMediaObject,{symbol:e.symbol,className:l,icon:n.default.createElement("div",{className:"slds-welcome-mat__tile-icon-container"},n.default.createElement(s.UtilityIcon,{className:"slds-icon-text-default",symbol:e.symbol,title:!1,assistiveText:!1}),n.default.createElement(c.ActionIcon,{title:"Completed",assistiveText:"Completed",className:"slds-welcome-mat__icon-check",symbol:"check"}))},n.default.createElement("h3",{className:"slds-welcome-mat__tile-title"},e.title),n.default.createElement("p",{className:"slds-welcome-mat__tile-description"},e.description))}}]),t}();d.propTypes={tile:r.default.object.isRequired},d.defaultProps={tile:{symbol:"animal_and_nature",title:"Welcome to Salesforce!",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor.",completed:!1}},t.default=d},139:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.Context=void 0;var a=i(l(0)),n=l(44),o=i(n),r=i(l(29));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,l=Array(e.length);t<e.length;t++)l[t]=e[t];return l}return Array.from(e)}var c=(0,n.sampleTiles)(),u=[Object.assign({},c[0],{completed:!0}),Object.assign({},c[1],{completed:!0})].concat(s(c.slice(2))),d=[].concat(s(u)).concat(c.slice(2));t.Context=function(e){return a.default.createElement("div",{className:"demo-only",style:{height:"800px"}},e.children,a.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))};t.default=a.default.createElement(o.default,null);t.examples=[{id:"with-completed-tiles",label:"With Completed Tiles",element:a.default.createElement(o.default,{tiles:u})},{id:"with-overflowing-tiles",label:"With Overflowing Tiles",element:a.default.createElement(o.default,{tiles:d})},{id:"with-overflowing-tiles-and-long-description",label:"With Overflowing Tiles and Long Description",element:a.default.createElement(o.default,{tiles:d,content:function(e){var t=e.complete,l=e.total,n=e.labelId;return a.default.createElement(r.default,{complete:t,total:l,labelId:n,description:a.default.createElement(a.default.Fragment,null,a.default.createElement("p",null,"Integer nibh libero, pulvinar sed libero et, rhoncus convallis purus. Sed faucibus nibh vel arcu vestibulum, nec commodo sapien tincidunt. In dignissim faucibus ipsum, nec placerat dui pulvinar a mi nec lectus feugiat vel arcu rhoncus convallis, nibh libero."),a.default.createElement("p",null,"Sed vestibulum dui ac diam suscipit vehicula. Nam vestibulum mi nec lectus feugiat euismod. Phasellus in suscipit est."),a.default.createElement("p",null,"Morbi facilisis aliquet dapibus. Morbi ac leo viverra, cursus nibh eget, ultrices mauris. Integer pharetra, lorem ac hendrerit vulputate, sem elit luctus metus, sit amet vehicula justo ex at sem."))})}})}]},140:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),n=(f(a),l(6)),o=f(n),r=l(139),i=f(r),s=l(136),c=f(s),u=f(l(7)),d=f(l(5));function f(e){return e&&e.__esModule?e:{default:e}}var m=n.factories.code,p=n.factories.h2,h=n.factories.li,b=n.factories.p,_=n.factories.ul,y=t.getElement=function(){return(0,a.createElement)(o.default,{},(0,a.createElement)("div",{className:"doc lead"},"A Welcome Mat provides a series of unordered items a user can click to learn about a thematic topic."),(0,a.createElement)(u.default,{title:"Welcome Mat Base"},(0,a.createElement)(d.default,null,(0,a.createElement)(r.Context,null,i.default))),p({id:"Overview"},"Overview"),_({},h({},"Welcome Mat tiles may trigger walkthroughs, modals, videos, or navigate users to specific URLs."),h({},"The Welcome Mat consists of two sections, the informational left pane and the actionable right pane."),h({},"The left pane should be used to educate users as to the theme of the content displayed in the right pane."),h({},"Icon choices, colors, and tile content can be customized to fit your experience.")),p({id:"With-Completed-Steps"},"With Completed Steps"),b({},"As users complete items in the list, the list updates to show as completed."),b({},"As tiles are completed, they move to the bottom of the list, and get a modifier class of ",m({},"slds-welcome-mat__tile_complete"),"."),(0,a.createElement)(u.default,{title:"Welcome Mat Partially Completed Steps"},(0,a.createElement)(d.default,null,(0,a.createElement)(r.Context,null,r.examples[0].element))),p({id:"Trailhead-Connected"},"Trailhead Connected"),b({},"The Trailhead Connected variant should only be used when users can achieve a badge in Trailhead for completing all steps in the current Welcome Mat."),b({},"Only Trailhead connected mats may have the Trailhead font for the header."),(0,a.createElement)(u.default,{title:"Welcome Mat Trailhead"},(0,a.createElement)(d.default,null,(0,a.createElement)(r.Context,null,c.default))),p({id:"Trailhead-Connected-Complete"},"Trailhead Connected - Complete"),b({},"When all tiles on a Trailhead Connected Welcome Mat are completed, users should be presented with a message and link to view their new badge on their Trailblazer profile page."),b({},"When a class of ",m({},"slds-welcome-mat__info-progress_complete")," is added to the ",m({},".slds-welcome-mat__info-progress")," element, the complete check mark will appear with the Trailhead badge."),b({},"Additionally, the progress indicator should be replaced with a button to view the badge on the user's Trailblazer profile page."),(0,a.createElement)(u.default,{title:"Welcome Mat Trailhead Complete"},(0,a.createElement)(d.default,null,(0,a.createElement)(r.Context,null,s.examples[0].element))))};t.getContents=function(){return(0,n.createTableOfContents)(y())}},29:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=i(l(0)),o=i(l(12)),r=l(24);function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.complete,l=e.total,a=e.labelId,o=e.description,i=t/l*100;return n.default.createElement(n.default.Fragment,null,n.default.createElement("h2",{id:a,className:"slds-welcome-mat__info-title"},"The Lightning Experience is here!"),n.default.createElement("div",{className:"slds-welcome-mat__info-description slds-text-longform"},o),n.default.createElement("div",{className:"slds-welcome-mat__info-progress"},n.default.createElement("p",null,n.default.createElement("strong",null,t,"/",l," units completed"))),n.default.createElement(r.ProgressBar,{value:i,className:"slds-progress-bar_circular"}))}}]),t}();s.propTypes={complete:o.default.number.isRequired,total:o.default.number.isRequired,labelId:o.default.string.isRequired,description:o.default.element.isRequired},s.defaultProps={complete:0,total:5,labelId:"welcome-mat-label-1",description:n.default.createElement("p",null,"Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes.")},t.default=s},4:function(e,t){e.exports=JSBeautify},44:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sampleTiles=void 0;var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),n=l(0),o=d(n),r=d(l(12)),i=(d(l(1)),d(l(9))),s=l(32),c=d(l(138)),u=d(l(29));function d(e){return e&&e.__esModule?e:{default:e}}var f=t.sampleTiles=function(){return[{symbol:"animal_and_nature",title:"Welcome to Salesforce!",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet."},{symbol:"call",title:"Learn About OpenCTI",description:"Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet."},{symbol:"upload",title:"Power Up the Utility Bar",description:"Tap into case history or share notes with fellow agents—it all happens on the utility bar."},{symbol:"magicwand",title:"Customize your view",description:"Tailor your cases to your team's workflow with custom list views."},{symbol:"knowledge_base",title:"Share the Knowledge",description:"Harness your team's collective know-how with our powerful knowledge base."}]},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),a(t,[{key:"renderTiles",value:function(e){return this.props.tiles.filter(function(t){return(t.completed||!1)===e}).map(function(e,t){return o.default.createElement(c.default,{key:t,tile:e})})}},{key:"completeTileCount",value:function(){return this.props.tiles.filter(function(e){return!0===e.completed}).length}},{key:"totalTileCount",value:function(){return this.props.tiles.length}},{key:"render",value:function(){var e=this.props.content,t=i.default.uniqueId("welcome-mat-"),l=t+"-label",a=t+"-content";return o.default.createElement(s.Modal,{className:"slds-welcome-mat","aria-labelledby":l,"aria-describedby":a},o.default.createElement(s.ModalHeader,{className:"slds-modal__header_empty"}),o.default.createElement(s.ModalContent,{className:"slds-welcome-mat__content slds-grid","aria-describedby":a},o.default.createElement("div",{className:"slds-welcome-mat__info slds-size_1-of-2"},o.default.createElement("div",{className:"slds-welcome-mat__info-content"},e({complete:this.completeTileCount(),total:this.totalTileCount(),labelId:l}))),o.default.createElement("div",{className:"slds-welcome-mat__tiles slds-size_1-of-2 slds-p-around_medium"},this.renderTiles(!0),this.renderTiles(!1))))}}]),t}();m.propTypes={tiles:r.default.arrayOf(r.default.shape({symbol:r.default.string.isRequired,title:r.default.string.isRequired,description:r.default.string.isRequired,completed:r.default.bool})).isRequired,content:r.default.func.isRequired},m.defaultProps={tiles:f(),content:function(e){var t=e.complete,l=e.total,a=e.labelId;return o.default.createElement(u.default,{complete:t,total:l,labelId:a})}},t.default=m}});