!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.dialogPolyfill=t())}(this,function(){"use strict";function e(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(e,o){return!(void 0===t[e]||t[e]===o)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1}function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function o(e){e&&e.blur&&e!==document.body&&e.blur()}function i(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function n(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function a(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,o=!1,i=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),n=function(n){if(n.target===e){var a="DOMNodeRemoved";o|=n.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,n)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}var r=window.CustomEvent;r&&"object"!=typeof r||(r=function(e,t){t=t||{};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),o},r.prototype=window.Event.prototype),a.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),l.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"],i=t.map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(i.join(", "))}o(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!l.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");e(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,l.needsCentering(this.dialog_)?(l.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new r("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var l={};if(l.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"},l.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],n=null;try{n=o.cssRules}catch(e){}if(n)for(var a=0;a<n.length;++a){var r=n[a],l=null;try{l=document.querySelectorAll(r.selectorText)}catch(e){}if(l&&i(l,e)){var s=r.style.getPropertyValue("top"),d=r.style.getPropertyValue("bottom");if(s&&"auto"!==s||d&&"auto"!==d)return!0}}}return!1},l.needsCentering=function(e){return!("absolute"!==window.getComputedStyle(e).position||"auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom||l.isInlinePositionSetByStylesheet(e))},l.forceRegisterDialog=function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new a(e)},l.registerDialog=function(e){e.showModal||l.forceRegisterDialog(e)},l.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var o=[];t.forEach(function(e){for(var t,i=0;t=e.removedNodes[i];++i)t instanceof Element&&("dialog"===t.localName&&o.push(t),o=o.concat(t.querySelectorAll("dialog")))}),o.length&&e(o)}))},l.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},l.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},l.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,o=0;e=this.pendingDialogStack[o];++o)e.updateZIndex(--t,--t),0===o&&(this.overlay.style.zIndex=--t);var i=this.pendingDialogStack[0];if(i){(i.dialog.parentNode||document.body).appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},l.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var o,i=0;o=this.pendingDialogStack[i];++i)if(o.dialog===e)return 0===i;e=e.parentElement}return!1},l.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),o(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():e.target!==document.documentElement&&document.documentElement.focus()),!1}},l.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new r("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&o.dialog.dispatchEvent(t)&&o.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},l.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},l.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},l.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},l.dm=new l.DialogManager,l.formSubmitter=null,l.useValue=null,void 0===window.HTMLDialogElement){var s=document.createElement("form");if(s.setAttribute("method","dialog"),"dialog"!==s.method){var d=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(d){var c=d.get;d.get=function(){return n(this)?"dialog":c.call(this)};var u=d.set;d.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):u.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",d)}}document.addEventListener("click",function(e){if(l.formSubmitter=null,l.useValue=null,!e.defaultPrevented){var o=e.target;if(o&&n(o.form)){if(!("submit"===o.type&&["button","input"].indexOf(o.localName)>-1)){if("input"!==o.localName||"image"!==o.type)return;l.useValue=e.offsetX+","+e.offsetY}t(o)&&(l.formSubmitter=o)}}},!1);var h=HTMLFormElement.prototype.submit,g=function(){if(!n(this))return h.call(this);var e=t(this);e&&e.close()};HTMLFormElement.prototype.submit=g,document.addEventListener("submit",function(e){var o=e.target;if(n(o)){e.preventDefault();var i=t(o);if(i){var a=l.formSubmitter;a&&a.form===o?i.close(l.useValue||a.value):i.close(),l.formSubmitter=null}}},!0)}return l});