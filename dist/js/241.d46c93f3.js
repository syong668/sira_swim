(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[241],{434:function(t,e,i){i(1703),
/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,s){t.exports=s(i(3581),i(4130),i(6221),i(7317),i(1884))}(0,(function(t,e,i,s,n){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},o=a(t),l=a(e),r=a(i),c=a(s),d=a(n),h=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},f=t=>{const e=u(t);return e&&document.querySelector(e)?e:null},g=t=>{const e=u(t);return e?document.querySelector(e):null},_=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),m=t=>_(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,p=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],a=e[s],o=a&&_(a)?"element":h(a);if(!new RegExp(n).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}))},b=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},w=[],y=t=>{"loading"===document.readyState?(w.length||document.addEventListener("DOMContentLoaded",(()=>{w.forEach((t=>t()))})),w.push(t)):t()},A=t=>{y((()=>{const e=v();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}}))},k="collapse",C="bs.collapse",E=`.${C}`,x=".data-api",$={toggle:!0,parent:null},D={toggle:"boolean",parent:"(null|element)"},S=`show${E}`,N=`shown${E}`,L=`hide${E}`,M=`hidden${E}`,T=`click${E}${x}`,W="show",I="collapse",j="collapsing",z="collapsed",O=`:scope .${I} .${I}`,R="collapse-horizontal",q="width",B="height",F=".collapse.show, .collapse.collapsing",V='[data-bs-toggle="collapse"]';class U extends d.default{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const i=c.default.find(V);for(let s=0,n=i.length;s<n;s++){const t=i[s],e=f(t),n=c.default.find(e).filter((t=>t===this._element));null!==e&&n.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return $}static get NAME(){return k}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=c.default.find(O,this._config.parent);e=c.default.find(F,this._config.parent).filter((e=>!t.includes(e)))}const i=c.default.findOne(this._selector);if(e.length){const s=e.find((t=>i!==t));if(t=s?U.getInstance(s):null,t&&t._isTransitioning)return}const s=l.default.trigger(this._element,S);if(s.defaultPrevented)return;e.forEach((e=>{i!==e&&U.getOrCreateInstance(e,{toggle:!1}).hide(),t||o.default.set(e,C,null)}));const n=this._getDimension();this._element.classList.remove(I),this._element.classList.add(j),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(j),this._element.classList.add(I,W),this._element.style[n]="",l.default.trigger(this._element,N)},r=n[0].toUpperCase()+n.slice(1),d=`scroll${r}`;this._queueCallback(a,this._element,!0),this._element.style[n]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=l.default.trigger(this._element,L);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,b(this._element),this._element.classList.add(j),this._element.classList.remove(I,W);const i=this._triggerArray.length;for(let n=0;n<i;n++){const t=this._triggerArray[n],e=g(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(j),this._element.classList.add(I),l.default.trigger(this._element,M)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(W)}_getConfig(t){return t={...$,...r.default.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=m(t.parent),p(k,t,D),t}_getDimension(){return this._element.classList.contains(R)?q:B}_initializeChildren(){if(!this._config.parent)return;const t=c.default.find(O,this._config.parent);c.default.find(V,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=g(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(z):t.classList.add(z),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const i=U.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}return l.default.on(document,T,V,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=f(this),i=c.default.find(e);i.forEach((t=>{U.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),A(U),U}))},6221:function(t){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i()})(0,(function(){"use strict";function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const i={setDataAttribute(t,i,s){t.setAttribute(`data-bs-${e(i)}`,s)},removeDataAttribute(t,i){t.removeAttribute(`data-bs-${e(i)}`)},getDataAttributes(e){if(!e)return{};const i={};return Object.keys(e.dataset).filter((t=>t.startsWith("bs"))).forEach((s=>{let n=s.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),i[n]=t(e.dataset[s])})),i},getDataAttribute(i,s){return t(i.getAttribute(`data-bs-${e(s)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}};return i}))},4032:function(t,e,i){i(1703),
/*!
  * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,s){t.exports=s(i(7317),i(6221),i(4130),i(1884))}(0,(function(t,e,i,s){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=n(t),o=n(e),l=n(i),r=n(s),c=1e3,d="transitionend",h=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},f=t=>{const e=u(t);return e?document.querySelector(e):null},g=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(i))*c):0},_=t=>{t.dispatchEvent(new Event(d))},m=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),p=t=>m(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,b=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],a=e[s],o=a&&m(a)?"element":h(a);if(!new RegExp(n).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}))},v=t=>!(!m(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),w=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),y=t=>{t.offsetHeight},A=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},k=[],C=t=>{"loading"===document.readyState?(k.length||document.addEventListener("DOMContentLoaded",(()=>{k.forEach((t=>t()))})),k.push(t)):t()},E=t=>{C((()=>{const e=A();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}}))},x=t=>{"function"===typeof t&&t()},$=(t,e,i=!0)=>{if(!i)return void x(t);const s=5,n=g(e)+s;let a=!1;const o=({target:i})=>{i===e&&(a=!0,e.removeEventListener(d,o),x(t))};e.addEventListener(d,o),setTimeout((()=>{a||_(e)}),n)},D=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",S=".sticky-top";class N{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(D,"paddingRight",(e=>e+t)),this._setElementAttributes(S,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t)[e];t.style[e]=`${i(Number.parseFloat(n))}px`};this._applyManipulationCallback(t,n)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(D,"paddingRight"),this._resetElementAttributes(S,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&o.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=t=>{const i=o.default.getDataAttribute(t,e);"undefined"===typeof i?t.style.removeProperty(e):(o.default.removeDataAttribute(t,e),t.style[e]=i)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){m(t)?e(t):a.default.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const L={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},M={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},T="backdrop",W="fade",I="show",j=`mousedown.bs.${T}`;class z{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&y(this._getElement()),this._getElement().classList.add(I),this._emulateAnimation((()=>{x(t)}))):x(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(I),this._emulateAnimation((()=>{this.dispose(),x(t)}))):x(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(W),this._element=t}return this._element}_getConfig(t){return t={...L,..."object"===typeof t?t:{}},t.rootElement=p(t.rootElement),b(T,t,M),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),l.default.on(this._getElement(),j,(()=>{x(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(l.default.off(this._element,j),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){$(t,this._getElement(),this._config.isAnimated)}}const O={trapElement:null,autofocus:!0},R={trapElement:"element",autofocus:"boolean"},q="focustrap",B="bs.focustrap",F=`.${B}`,V=`focusin${F}`,U=`keydown.tab${F}`,P="Tab",Y="forward",H="backward";class Q{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),l.default.off(document,F),l.default.on(document,V,(t=>this._handleFocusin(t))),l.default.on(document,U,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,l.default.off(document,F))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const s=a.default.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===H?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===P&&(this._lastTabNavDirection=t.shiftKey?H:Y)}_getConfig(t){return t={...O,..."object"===typeof t?t:{}},b(q,t,R),t}}const Z=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;l.default.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),w(this))return;const n=f(this)||this.closest(`.${s}`),a=t.getOrCreateInstance(n);a[e]()}))},K="offcanvas",J="bs.offcanvas",X=`.${J}`,G=".data-api",tt=`load${X}${G}`,et="Escape",it={backdrop:!0,keyboard:!0,scroll:!1},st={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},nt="show",at="offcanvas-backdrop",ot=".offcanvas.show",lt=`show${X}`,rt=`shown${X}`,ct=`hide${X}`,dt=`hidden${X}`,ht=`click${X}${G}`,ut=`keydown.dismiss${X}`,ft='[data-bs-toggle="offcanvas"]';class gt extends r.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return K}static get Default(){return it}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=l.default.trigger(this._element,lt,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new N).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(nt);const i=()=>{this._config.scroll||this._focustrap.activate(),l.default.trigger(this._element,rt,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown)return;const t=l.default.trigger(this._element,ct);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(nt),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new N).reset(),l.default.trigger(this._element,dt)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...it,...o.default.getDataAttributes(this._element),..."object"===typeof t?t:{}},b(K,t,st),t}_initializeBackDrop(){return new z({className:at,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Q({trapElement:this._element})}_addEventListeners(){l.default.on(this._element,ut,(t=>{this._config.keyboard&&t.key===et&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=gt.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return l.default.on(document,ht,ft,(function(t){const e=f(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),w(this))return;l.default.one(e,dt,(()=>{v(this)&&this.focus()}));const i=a.default.findOne(ot);i&&i!==e&&gt.getInstance(i).hide();const s=gt.getOrCreateInstance(e);s.toggle(this)})),l.default.on(window,tt,(()=>a.default.find(ot).forEach((t=>gt.getOrCreateInstance(t).show())))),Z(gt),E(gt),gt}))},8241:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return ot}});var s=i(3396);function n(t,e,i,n,a,o){const l=(0,s.up)("navbar"),r=(0,s.up)("router-view"),c=(0,s.up)("frontfooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),((0,s.wg)(),(0,s.j4)(r,{key:t.$route.fullPath})),(0,s.Wm)(c)],64)}var a=i(5820),o=i(7139);const l={class:"navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm"},r={class:"container d-flex align-items-center"},c=(0,s._)("h1",{class:"fs-3 mb-0 text-primary"},"SIRA SWIM",-1),d=(0,s._)("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},u={class:"navbar-nav"},f=(0,s.Uk)("首頁"),g=(0,s.Uk)("關於我們"),_=(0,s.Uk)("所有產品"),m=(0,s.Uk)("試衣間預約"),p={class:"d-flxe d-lg-none"},b={class:"heart-cart ms-auto d-none d-lg-flex"},v=(0,s._)("i",{class:"bi bi-suit-heart-fill fs-5"},null,-1),w=(0,s._)("i",{class:"bi bi-cart-fill fs-5"},null,-1),y={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},A=(0,s._)("div",{class:"offcanvas-header"},[(0,s._)("h3",{class:"offcanvas-title",id:"offcanvasExampleLabel"},"已選購商品"),(0,s._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),k={class:"offcanvas-body"},C={key:0,class:"table table-borderless align-middle text-secondary"},E=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th"),(0,s._)("th")])],-1),x=["src","alt","onClick"],$=["onClick"],D=["onClick"],S=(0,s._)("i",{class:"bi bi-trash3-fill"},null,-1),N=[S],L={key:1},M={class:"text-center py-5"},T=(0,s._)("i",{class:"bi bi-cart3 text-secondary",style:{"font-size":"120px"}},null,-1),W=(0,s._)("p",null,"您的購物車尚未加入商品",-1),I={"data-bs-dismiss":"offcanvas"},j=(0,s.Uk)("來去逛逛"),z={key:0,class:"w-100 position-sticky bottom-0","data-bs-dismiss":"offcanvas","aria-label":"Close"},O=(0,s.Uk)("購物車結帳");function R(t,e,i,n,a,S){const R=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",l,[(0,s._)("div",r,[(0,s.Wm)(R,{class:"navbar-brand me-4",to:"/"},{default:(0,s.w5)((()=>[c])),_:1}),d,(0,s._)("div",h,[(0,s._)("div",u,[(0,s.Wm)(R,{class:"nav-link me-2",to:"/"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(R,{class:"nav-link me-2",to:"/about"},{default:(0,s.w5)((()=>[g])),_:1}),(0,s.Wm)(R,{class:"nav-link me-2",to:"/products"},{default:(0,s.w5)((()=>[_])),_:1}),(0,s.Wm)(R,{class:"nav-link me-2",to:"/reserve"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s._)("div",p,[(0,s.Wm)(R,{to:"/favorite",class:"nav-link me-2"},{default:(0,s.w5)((()=>[(0,s.Uk)("收藏清單["+(0,o.zw)(a.favoriteData.length)+"]",1)])),_:1}),(0,s.Wm)(R,{to:"/cart",class:"nav-link me-2"},{default:(0,s.w5)((()=>[(0,s.Uk)("購物車["+(0,o.zw)(S.qty)+"]",1)])),_:1})])])]),(0,s._)("div",b,[(0,s.Wm)(R,{to:"/favorite",class:"me-5",href:"#"},{default:(0,s.w5)((()=>[v,(0,s._)("span",null,(0,o.zw)(a.favoriteData.length),1)])),_:1}),(0,s.Wm)(R,{to:"/cart","data-bs-toggle":"offcanvas",href:"#offcanvasExample",role:"button","aria-controls":"offcanvasExample"},{default:(0,s.w5)((()=>[w,(0,s._)("span",null,(0,o.zw)(S.qty),1)])),_:1})])])]),(0,s._)("div",y,[A,(0,s._)("div",k,[0!==a.cart.length?((0,s.wg)(),(0,s.iD)("table",C,[E,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.cart,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{class:"border-bottom",key:e},[(0,s._)("td",null,[(0,s._)("img",{"data-bs-dismiss":"offcanvas",width:"80",class:"cursor-hover",src:t.product.imgLink,alt:t.product.title,onClick:e=>S.getProduct(t.product.id)},null,8,x)]),(0,s._)("td",null,[(0,s._)("h6",{"data-bs-dismiss":"offcanvas",class:"mb-3 fw-bold cursor-hover",onClick:e=>S.getProduct(t.product.id)},(0,o.zw)(t.product.title),9,$),(0,s._)("p",null,(0,o.zw)("SWIM"===t.product.category||"FITNESS"===t.product.category?"S * ":"")+(0,o.zw)(t.qty)+"件",1),(0,s._)("p",null,"單價: "+(0,o.zw)(t.product.price),1)]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-sm",onClick:e=>S.deleteCart(t)},N,8,D)])])))),128))])])):((0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("div",M,[T,W,(0,s._)("span",I,[(0,s.Wm)(R,{class:"btn btn-primary rounded-0",to:"/products"},{default:(0,s.w5)((()=>[j])),_:1})])])]))]),0!==a.cart.length?((0,s.wg)(),(0,s.iD)("div",z,[(0,s.Wm)(R,{to:"/cart",class:"text-light w-100 btn btn-lg btn-primary rounded-0"},{default:(0,s.w5)((()=>[O])),_:1})])):(0,s.kq)("",!0)])],64)}i(434),i(4032);var q={data(){return{cart:[],favoriteData:JSON.parse(localStorage.getItem("favorite"))||[]}},inject:["emitter"],computed:{qty(){let t=0;return this.cart.forEach((e=>{t+=e.qty})),t}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/bear-work/cart";this.$http.get(t).then((t=>{console.log(t.data.data.carts),this.cart=t.data.data.carts}))},getProduct(t){this.$router.push(`/product/${t}`)},deleteCart(t){const e=`https://vue3-course-api.hexschool.io/api/bear-work/cart/${t.id}`;this.$swal({title:"確定移除?",text:`【${t.product.title}】從購物車移除`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#8144AD",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消",reverseButtons:!0}).then((t=>{t.isConfirmed&&(this.isLoading=!0,this.$http.delete(e).then((t=>{console.log(t),this.getCart(),this.isLoading=!1,this.$swal("移除成功","","success"),this.emitter.emit("updateNavbarCart")})))}))}},created(){this.getCart()},mounted(){this.emitter.on("updateNavbarCart",(()=>{this.getCart()})),this.emitter.on("updateNavbarFavorite",(()=>{this.favoriteData=JSON.parse(localStorage.getItem("favorite"))||[]}))}},B=i(89);const F=(0,B.Z)(q,[["render",R]]);var V=F;const U=t=>((0,s.dD)("data-v-91cc85be"),t=t(),(0,s.Cn)(),t),P={class:"container d-flex flex-column align-items-center py-4 text-light"},Y=U((()=>(0,s._)("h2",null,"SIRA SWIM",-1))),H={class:"d-flex mb-3"},Q=U((()=>(0,s._)("a",{href:"https://github.com/syong668",target:"_blank"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--ri",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"})])],-1))),Z=U((()=>(0,s._)("a",{href:"https://github.com/syong668",target:"_blank"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--ion",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},[(0,s._)("path",{fill:"currentColor",d:"M448.5 112c0-26.233-21.267-47.5-47.5-47.5H112c-26.233 0-47.5 21.267-47.5 47.5v289c0 26.233 21.267 47.5 47.5 47.5h289c26.233 0 47.5-21.267 47.5-47.5V112zM257 175.833c44.182 0 80 35.816 80 80s-35.818 80-80 80-80-35.816-80-80 35.818-80 80-80zM416.5 160.5c0 8.836-7.163 16-16 16h-48c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16h48c8.837 0 16 7.164 16 16v48zm-15 256h-288c-8.822 0-17-8.178-17-17v-175h53.072c-3.008 10-4.572 20.647-4.572 31.583C145 286 156.65 314 177.805 335.154s49.279 32.741 79.195 32.741 58.041-11.681 79.195-32.835S369 286.016 369 256.099c0-10.936-1.563-21.599-4.572-31.599H416.5v175c0 8.822-6.178 17-15 17z"})])],-1))),K=U((()=>(0,s._)("a",{href:"https://github.com/syong668",target:"_blank"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"})])],-1))),J=U((()=>(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--ic",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"})],-1))),X=U((()=>(0,s._)("span",null,"© SIRA SWIM 2022 All Rights Reserved.",-1))),G=U((()=>(0,s._)("span",null,"僅個人作品練習，無商業用途",-1)));function tt(t,e){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("footer",null,[(0,s._)("div",P,[Y,(0,s._)("div",H,[Q,Z,K,(0,s.Wm)(i,{to:"/login",target:"_blank"},{default:(0,s.w5)((()=>[J])),_:1})]),X,G])])])}const et={},it=(0,B.Z)(et,[["render",tt],["__scopeId","data-v-91cc85be"]]);var st=it,nt={components:{navbar:V,frontfooter:st},provide(){return{emitter:a.Z}}};const at=(0,B.Z)(nt,[["render",n]]);var ot=at}}]);
//# sourceMappingURL=241.d46c93f3.js.map