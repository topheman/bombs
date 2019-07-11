/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 * 
 * @dependency require.js - https://github.com/jrburke/requirejs/blob/master/LICENSE
 * @dependency Ball.js Copyright (C) 2012 Christophe Rosset <tophe@topheman.com> - https://github.com/topheman/Ball.js/blob/master/LICENSE
 * @dependency Vector2D.js http://jamieblog.org
 * @dependency zepto.min.js (any version of jquery) http://zeptojs.com/ (MIT LICENSE)
 * @dependency requestAnimFrame.js - http://notes.jetienne.com/2011/05/18/cancelRequestAnimFrame-for-paul-irish-requestAnimFrame.html
 * @dependency DeviceMotion and DeviceOrientation polyfill by Remy Sharp / leftlogic.com MIT http://rem.mit-license.org
 * 
 * @sounds (free of rights) https://github.com/topheman/bombs/blob/master/src/assets/audio/LICENSE
 */

var requirejs,require,define;!function(ba){function J(e){return"[object Function]"===N.call(e)}function K(e){return"[object Array]"===N.call(e)}function z(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function O(e,t){if(e){var i;for(i=e.length-1;-1<i&&(!e[i]||!t(e[i],i,e));i-=1);}}function t(e,t){return ha.call(e,t)}function m(e,i){return t(e,i)&&e[i]}function H(e,i){for(var n in e)if(t(e,n)&&i(e[n],n))break}function S(e,i,n,r){return i&&H(i,function(i,a){!n&&t(e,a)||(r&&"string"!=typeof i?(e[a]||(e[a]={}),S(e[a],i,n,r)):e[a]=i)}),e}function v(e,t){return function(){return t.apply(e,arguments)}}function ca(e){throw e}function da(e){if(!e)return e;var t=ba;return z(e.split("."),function(e){t=t[e]}),t}function B(e,t,i,n){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=n,i&&(t.originalError=i),t}function ia(e){function i(e,t,i){var n,r,a,o,s,u,c,d=t&&t.split("/");n=d;var f=j.map,p=f&&f["*"];if(e&&"."===e.charAt(0))if(t){for(n=m(j.pkgs,t)?d=[t]:d.slice(0,d.length-1),t=e=n.concat(e.split("/")),n=0;t[n];n+=1)if("."===(r=t[n]))t.splice(n,1),n-=1;else if(".."===r){if(1===n&&(".."===t[2]||".."===t[0]))break;0<n&&(t.splice(n-1,2),n-=2)}n=m(j.pkgs,t=e[0]),e=e.join("/"),n&&e===t+"/"+n.main&&(e=t)}else 0===e.indexOf("./")&&(e=e.substring(2));if(i&&f&&(d||p)){for(t=e.split("/"),n=t.length;0<n;n-=1){if(a=t.slice(0,n).join("/"),d)for(r=d.length;0<r;r-=1)if((i=m(f,d.slice(0,r).join("/")))&&(i=m(i,a))){o=i,s=n;break}if(o)break;!u&&p&&m(p,a)&&(u=m(p,a),c=n)}!o&&u&&(o=u,s=c),o&&(t.splice(0,s,o),e=t.join("/"))}return e}function n(e){A&&z(document.getElementsByTagName("script"),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName)return t.parentNode.removeChild(t),!0})}function r(e){var t=m(j.paths,e);if(t&&K(t)&&1<t.length)return n(e),t.shift(),q.require.undef(e),q.require([e]),!0}function a(e){var t,i=e?e.indexOf("!"):-1;return-1<i&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function o(e,t,n,r){var o,s,u=null,c=t?t.name:null,d=e,f=!0,p="";return e||(f=!1,e="_@r"+(O+=1)),e=a(e),u=e[0],e=e[1],u&&(u=i(u,c,r),s=m(C,u)),e&&(u?p=s&&s.normalize?s.normalize(e,function(e){return i(e,c,r)}):i(e,c,r):(p=i(e,c,r),e=a(p),u=e[0],p=e[1],n=!0,o=q.nameToUrl(p))),n=!u||s||n?"":"_unnormalized"+(F+=1),{prefix:u,name:p,parentMap:t,unnormalized:!!n,url:o,originalName:d,isDefine:f,id:(u?u+"!"+p:p)+n}}function s(e){var t=e.id,i=m(T,t);return i||(i=T[t]=new q.Module(e)),i}function u(e,i,n){var r=e.id,a=m(T,r);!t(C,r)||a&&!a.defineEmitComplete?(a=s(e),a.error&&"error"===i?n(a.error):a.on(i,n)):"defined"===i&&n(C[r])}function c(e,t){var i=e.requireModules,n=!1;t?t(e):(z(i,function(t){(t=m(T,t))&&(t.error=e,t.events.error&&(n=!0,t.emit("error",e)))}),n||h.onError(e))}function d(){U.length&&(ja.apply(N,[N.length-1,0].concat(U)),U=[])}function f(e){delete T[e],delete w[e]}function p(e,t,i){var n=e.map.id;e.error?e.emit("error",e.error):(t[n]=!0,z(e.depMaps,function(n,r){var a=n.id,o=m(T,a);o&&!e.depMatched[r]&&!i[a]&&(m(t,a)?(e.defineDep(r,C[a]),e.check()):p(o,t,i))}),i[n]=!0)}function l(){var e,t,i,a,o=(i=1e3*j.waitSeconds)&&q.startTime+i<(new Date).getTime(),s=[],u=[],d=!1,f=!0;if(!y){if(y=!0,H(w,function(i){if(e=i.map,t=e.id,i.enabled&&(e.isDefine||u.push(i),!i.error))if(!i.inited&&o)r(t)?d=a=!0:(s.push(t),n(t));else if(!i.inited&&i.fetched&&e.isDefine&&(d=!0,!e.prefix))return f=!1}),o&&s.length)return i=B("timeout","Load timeout for modules: "+s,null,s),i.contextName=q.contextName,c(i);f&&z(u,function(e){p(e,{},{})}),o&&!a||!d||!A&&!ea||M||(M=setTimeout(function(){M=0,l()},50)),y=!1}}function g(e){t(C,e[0])||s(o(e[0],null,!0)).init(e[1],e[2])}function x(e){var e=e.currentTarget||e.srcElement,t=q.onScriptLoad;return e.detachEvent&&!Z?e.detachEvent("onreadystatechange",t):e.removeEventListener("load",t,!1),t=q.onScriptError,(!e.detachEvent||Z)&&e.removeEventListener("error",t,!1),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function b(){var e;for(d();N.length;){if(e=N.shift(),null===e[0])return c(B("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));g(e)}}var y,E,q,k,M,j={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},T={},w={},L={},N=[],C={},D={},O=1,F=1;return k={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?e.exports:e.exports=C[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){var t=m(j.pkgs,e.map.id);return(t?m(j.config,e.map.id+"/"+t.main):m(j.config,e.map.id))||{}},exports:C[e.map.id]}}},E=function(e){this.events=m(L,e.id)||{},this.map=e,this.shim=m(j.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},E.prototype={init:function(e,t,i,n){n=n||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=v(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=n.ignore,n.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],v(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;D[e]||(D[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id;t=this.depExports;var n=this.exports,r=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(J(r)){if(this.events.error&&this.map.isDefine||h.onError!==ca)try{n=q.execCb(i,r,t,n)}catch(t){e=t}else n=q.execCb(i,r,t,n);if(this.map.isDefine&&((t=this.module)&&void 0!==t.exports&&t.exports!==this.exports?n=t.exports:void 0===n&&this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else n=r;this.exports=n,this.map.isDefine&&!this.ignore&&(C[i]=n,h.onResourceLoad)&&h.onResourceLoad(q,this.map,this.depMaps),f(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,n=e.id,r=o(e.prefix);this.depMaps.push(r),u(r,"defined",v(this,function(r){var a,d;d=this.map.name;var p=this.map.parentMap?this.map.parentMap.name:null,l=q.makeRequire(e.parentMap,{enableBuildCallback:!0});this.map.unnormalized?(r.normalize&&(d=r.normalize(d,function(e){return i(e,p,!0)})||""),r=o(e.prefix+"!"+d,this.map.parentMap),u(r,"defined",v(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),(d=m(T,r.id))&&(this.depMaps.push(r),this.events.error&&d.on("error",v(this,function(e){this.emit("error",e)})),d.enable())):(a=v(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),a.error=v(this,function(e){this.inited=!0,this.error=e,e.requireModules=[n],H(T,function(e){0===e.map.id.indexOf(n+"_unnormalized")&&f(e.map.id)}),c(e)}),a.fromText=v(this,function(i,r){var u=e.name,d=o(u),f=Q;r&&(i=r),f&&(Q=!1),s(d),t(j.config,n)&&(j.config[u]=j.config[n]);try{h.exec(i)}catch(e){return c(B("fromtexteval","fromText eval for "+n+" failed: "+e,e,[n]))}f&&(Q=!0),this.depMaps.push(d),q.completeLoad(u),l([u],a)}),r.load(e.name,l,a,j))})),q.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){w[this.map.id]=this,this.enabling=this.enabled=!0,z(this.depMaps,v(this,function(e,i){var n,r;if("string"==typeof e){if(e=o(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[i]=e,n=m(k,e.id))return void(this.depExports[i]=n(this));this.depCount+=1,u(e,"defined",v(this,function(e){this.defineDep(i,e),this.check()})),this.errback&&u(e,"error",v(this,this.errback))}n=e.id,r=T[n],!t(k,n)&&r&&!r.enabled&&q.enable(e,this)})),H(this.pluginMaps,v(this,function(e){var t=m(T,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){z(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},q={config:j,contextName:e,registry:T,defined:C,urlFetched:D,defQueue:N,Module:E,makeModuleMap:o,nextTick:h.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=j.pkgs,i=j.shim,n={paths:!0,config:!0,map:!0};H(e,function(e,t){n[t]?"map"===t?(j.map||(j.map={}),S(j[t],e,!0,!0)):S(j[t],e,!0):j[t]=e}),e.shim&&(H(e.shim,function(e,t){K(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),i[t]=e}),j.shim=i),e.packages&&(z(e.packages,function(e){e="string"==typeof e?{name:e}:e,t[e.name]={name:e.name,location:e.location||e.name,main:(e.main||"main").replace(ka,"").replace(fa,"")}}),j.pkgs=t),H(T,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=o(t))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(ba,arguments)),t||e.exports&&da(e.exports)}},makeRequire:function(n,r){function a(i,u,d){var f,p;return r.enableBuildCallback&&u&&J(u)&&(u.__requireJsBuild=!0),"string"==typeof i?J(u)?c(B("requireargs","Invalid require call"),d):n&&t(k,i)?k[i](T[n.id]):h.get?h.get(q,i,n,a):(f=o(i,n,!1,!0),f=f.id,t(C,f)?C[f]:c(B("notloaded",'Module name "'+f+'" has not been loaded yet for context: '+e+(n?"":". Use require([])")))):(b(),q.nextTick(function(){b(),p=s(o(null,n)),p.skipMap=r.skipMap,p.init(i,u,d,{enabled:!0}),l()}),a)}return r=r||{},S(a,{isBrowser:A,toUrl:function(e){var t,r=e.lastIndexOf("."),a=e.split("/")[0];return-1!==r&&("."!==a&&".."!==a||1<r)&&(t=e.substring(r,e.length),e=e.substring(0,r)),q.nameToUrl(i(e,n&&n.id,!0),t,!0)},defined:function(e){return t(C,o(e,n,!1,!0).id)},specified:function(e){return e=o(e,n,!1,!0).id,t(C,e)||t(T,e)}}),n||(a.undef=function(e){d();var t=o(e,n,!0),i=m(T,e);delete C[e],delete D[t.url],delete L[e],i&&(i.events.defined&&(L[e]=i.events),f(e))}),a},enable:function(e){m(T,e.id)&&s(e).enable()},completeLoad:function(e){var i,n,a=m(j.shim,e)||{},o=a.exports;for(d();N.length;){if(n=N.shift(),null===n[0]){if(n[0]=e,i)break;i=!0}else n[0]===e&&(i=!0);g(n)}if(n=m(T,e),!i&&!t(C,e)&&n&&!n.inited){if(j.enforceDefine&&(!o||!da(o)))return r(e)?void 0:c(B("nodefine","No define call for "+e,null,[e]));g([e,a.deps||[],a.exportsFn])}l()},nameToUrl:function(e,t,i){var n,r,a,o,s,u;if(h.jsExtRegExp.test(e))o=e+(t||"");else{for(n=j.paths,r=j.pkgs,o=e.split("/"),s=o.length;0<s;s-=1){if(u=o.slice(0,s).join("/"),a=m(r,u),u=m(n,u)){K(u)&&(u=u[0]),o.splice(0,s,u);break}if(a){e=e===a.name?a.location+"/"+a.main:a.location,o.splice(0,s,e);break}}o=o.join("/"),o+=t||(/\?/.test(o)||i?"":".js"),o=("/"===o.charAt(0)||o.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+o}return j.urlArgs?o+(-1===o.indexOf("?")?"?":"&")+j.urlArgs:o},load:function(e,t){h.load(q,e,t)},execCb:function(e,t,i,n){return t.apply(n,i)},onScriptLoad:function(e){("load"===e.type||la.test((e.currentTarget||e.srcElement).readyState))&&(R=null,e=x(e),q.completeLoad(e.id))},onScriptError:function(e){var t=x(e);if(!r(t.id))return c(B("scripterror","Script error for: "+t.id,e,[t.id]))}},q.require=q.makeRequire(),q}var h,x,y,E,L,F,R,M,s,ga,ma=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,na=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,fa=/\.js$/,ka=/^\.\//;x=Object.prototype;var N=x.toString,ha=x.hasOwnProperty,ja=Array.prototype.splice,A=!("undefined"==typeof window||!navigator||!window.document),ea=!A&&"undefined"!=typeof importScripts,la=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Z="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),G={},u={},U=[],Q=!1;if(void 0===define){if(void 0!==requirejs){if(J(requirejs))return;u=requirejs,requirejs=void 0}void 0!==require&&!J(require)&&(u=require,require=void 0),h=requirejs=function(e,t,i,n){var r,a="_";return!K(e)&&"string"!=typeof e&&(r=e,K(t)?(e=t,t=i,i=n):e=[]),r&&r.context&&(a=r.context),(n=m(G,a))||(n=G[a]=h.s.newContext(a)),r&&n.configure(r),n.require(e,t,i)},h.config=function(e){return h(e)},h.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=h),h.version="2.1.6",h.jsExtRegExp=/^\/|:|\?|\.js$/,h.isBrowser=A,x=h.s={contexts:G,newContext:ia},h({}),z(["toUrl","undef","defined","specified"],function(e){h[e]=function(){var t=G._;return t.require[e].apply(t,arguments)}}),A&&(y=x.head=document.getElementsByTagName("head")[0],E=document.getElementsByTagName("base")[0])&&(y=x.head=E.parentNode),h.onError=ca,h.load=function(e,t,i){var n,r=e&&e.config||{};if(A)return n=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),n.type=r.scriptType||"text/javascript",n.charset="utf-8",n.async=!0,n.setAttribute("data-requirecontext",e.contextName),n.setAttribute("data-requiremodule",t),!n.attachEvent||n.attachEvent.toString&&0>n.attachEvent.toString().indexOf("[native code")||Z?(n.addEventListener("load",e.onScriptLoad,!1),n.addEventListener("error",e.onScriptError,!1)):(Q=!0,n.attachEvent("onreadystatechange",e.onScriptLoad)),n.src=i,M=n,E?y.insertBefore(n,E):y.appendChild(n),M=null,n;if(ea)try{importScripts(i),e.completeLoad(t)}catch(n){e.onError(B("importscripts","importScripts failed for "+t+" at "+i,n,[t]))}},A&&O(document.getElementsByTagName("script"),function(e){if(y||(y=e.parentNode),L=e.getAttribute("data-main"))return s=L,u.baseUrl||(F=s.split("/"),s=F.pop(),ga=F.length?F.join("/")+"/":"./",u.baseUrl=ga),s=s.replace(fa,""),h.jsExtRegExp.test(s)&&(s=L),u.deps=u.deps?u.deps.concat(s):[s],!0}),define=function(e,t,i){var n,r;"string"!=typeof e&&(i=t,t=e,e=null),K(t)||(i=t,t=null),!t&&J(i)&&(t=[],i.length&&(i.toString().replace(ma,"").replace(na,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),Q&&((n=M)||(R&&"interactive"===R.readyState||O(document.getElementsByTagName("script"),function(e){if("interactive"===e.readyState)return R=e}),n=R),n&&(e||(e=n.getAttribute("data-requiremodule")),r=G[n.getAttribute("data-requirecontext")])),(r?r.defQueue:U).push([e,t,i])},define.amd={jQuery:!0},h.exec=function(b){return eval(b)},h(u)}}(this);
define('utils/browserDetect',{
    
    isMobileDevice : function(){
        return (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    },

    isIPhone : function(){
        return ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1));
    },

    isIPad : function(){
        return (navigator.platform.indexOf("iPad") !== -1);
    },

    isAndroidMobile : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("android") > -1 && ua.indexOf("mobile") > -1;
    },

    isAndroidTablet : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("android") > -1 && ua.indexOf("mobile") === -1;
    },

    isChrome : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("chrome") > -1;
    },

    isFirefox : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("firefox") > -1;
    }
        
});
/*!
 * Stage
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 * 
 * The canvas will automatically adapt width/height of the screen
 * 
 * Adds an event that displays your div#orientationlock when orientation changes to tell your mobile user to lock their device
 * 
 * Once it did all that, will call your callback
 *
 * Stage.js
 * 
 */

define('game/Stage',['utils/browserDetect'],function(browserDetect){
    
    var Stage;
    
    Stage = {
        
        prepareStage : function(callback){

            var canvas = document.getElementById('myCanvas');
            var reScrolling = false;
            var resizing = false;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if(callback){
                callback.call({},canvas);
            }

            // reload if change from landscape to portrait
            $(window).bind('resize', function() {
                if(resizing && $(window).width()<$(window).height()){
                    // i know, setTimeout is bad, but firefox doesn't trigger reload without setTimeout ...
                    setTimeout(function(){window.location.reload();},0);
                }
                resizing = true;
            });

            //adressbar locking
            //scrollTop with firefox mobile is buggy
            if(browserDetect.isMobileDevice() && !browserDetect.isFirefox() && !browserDetect.isAndroidTablet() && !browserDetect.isIPad()){
                $(window).bind('scroll',function(){
                    if(reScrolling === false){
                        setTimeout(function(){window.scrollTo(0,1);reScrolling = false;}, 2000);
                        reScrolling = true;
                    }
                });
            }
            
        }
        
    };
    
    return Stage;
    
});
/* author: Jamie Nhu
 * email: duong_binhnhu@rocketmail.com
 * blog: http://jamieblog.org
 * date: 27th November 2011
 */
function Vector2D(x,y)
{
    this.x = x || 0;
    this.y = y || 0;//construct Vector2D with param x,y
    
    //set x value
    this.setX=function(x)
    {
        this.x=x;
    }

    //set y value
    this.setY=function(y)
    {
        this.y=y;
    }

    //magnitude
    this.getLength=function()
    {
        var length=Math.sqrt(this.x*this.x+this.y*this.y);
        return length;
    }

    //dot product
    this.dot=function(vector)
    {
        return this.x*vector.x+this.y*vector.y;
    }

    //add vector
    this.add=function(vector)
    {
        this.x+=vector.x;
        this.y+=vector.y;
        return this;
    }

    //subtract
    this.subtract=function(vector)
    {
        this.x-=vector.x;
        this.y-=vector.y;
        return this;
    }

    //normalize
    this.normalize=function()
    {
        this.x=this.x/this.getLength();
        this.y=this.y/this.getLength();
        return this;
    }

    //scale (multiply)
    this.scale=function(scale)
    {
        this.x*=scale;
        this.y*=scale;
        return this;
    }

    //has same direction
    this.hasSameDirection=function(vector)
    {
        if(this.isParralel(vector) && vector.x/this.x>0)
        {
            return true;
        }
        return false;
    }

    //check parallel
    this.isParallel=function(vector)
    {
        if(vector.x/this.x == vector.y/this.y)
        {
            return true;
        }
        return false;
    }

    //check perpendicular
    this.isPerpendicular=function(vector)
    {
        if(this.dot(vector)==0)
        {
            return true;
        }
        return false;
    }
    //equal
    this.isEqualTo=function(vector)
    {
        if(this.hasSameDirection(vector) && this.getLength()==vector.getLength())
        {
            return true;
        }
        return false;
    }

    //angle
    this.angleBetween = function(vector)
    {
        return Math.acos(this.dot(vector)/(this.getLength()*vector.getLength()));
    }

    // invert the vetor
    this.invert=function()
    {
        this.x*=-1;
        this.y*=-1;
        return this;
    }

    //to string
    this.toString=function()
    {
        return "Vector2d("+this.x+","+this.y+")";
    }
};
define("vendor/Vector2D", function(){});

/*!
 * 
 * Copyright 2012, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * 
 * You are free to use, modify and distribute this software under the conditions of the MIT license
 * https://github.com/topheman/Ball.js/blob/master/LICENSE
 *
 * Ball.js
 * Manages Ball physics and display on a flat area (collisions, gravity, bounces ...)
 * 
 * More explanations on http://labs.topheman.com/Ball/
 * 
 * @version 1.0
 * @dependency Vector2D.js
 */

/**
 * Ball public constructor
 * 
 * @param {Int} x
 * @param {Int} y
 * @param {Int} radius
 * @param {Number} mass
 * @param {Number} gravity
 * @param {Number} elasticity
 * @param {Number} friction
 * @param {String} color (hexa code)
 * @param {Number} lifeTime
 * @param options {Object} @optional
 *      .aging {Boolean} (true will activate aging mode - growing and shrinking balls at their construct and destruct)
 *      .borningRate {Int} number of frames to grow to radius (if aging = true, at the construct of the ball)
 *      .dyingRate {Int} number of frames to shrink from radius (when the  ball is dying or .toDeath() is triggered)
 *      .bouncingAlpha {Boolean} (true will activate alpha mode when the ball bounces against something)
 *      .bouncingColor {String}|{Boolean} (string color hexa code will activate the bounce color mode : the ball chnages color when bouncing against something)
 *      .bouncingRate {Int} number of frames the bounce effects will last
 *      .glowingColor {String}|{Boolean} (string color hexa code will allow to use glow() ant stopGlow() functions)
 *      .glowingRate {Int} (fps) number of frames the glowing effects will last
 *      .blinkingColor {String}|{Boolean} (string color hexa code will allow to use blink() ant stopBlink() functions)
 *      .blinkingRate {Int} (fps) number of frames the blinking effects will last
 *      .explodingAlpha {Boolean} (true will fade the ball when .explode() is triggered)
 *      .explodingColor {String} (string color hexa code)
 *      .explodingRadius {Int}
 *      .explodingRate {Int}
 * 
 */
function Ball(x,y,radius,mass,gravity,elasticity,friction,color,lifeTime,options){
    
    this.init(x,y,radius,mass,gravity,elasticity,friction,color,lifeTime,options);
    
}

Ball.prototype.init = function(x,y,radius,mass,gravity,elasticity,friction,color,lifeTime,options){    
    
    //const (needed here because of closure vs prototype)
    this.MIN_BOUNCING_ALPHA = 0.2;
    
    //default comportement
    this.x              = x;
    this.y              = y;
    this.velocityX      = 0;
    this.velocityY      = 0;
    this.radius         = radius;//realtime radius
    this._radius        = radius;//@private radius base for .age() .toDeath() methods
    this.mass           = mass || 1;
    this.gravity        = gravity || 1;
    this.elasticity     = elasticity || 0.98;
    this.friction       = friction || 0.8;
    this.color          = color.toLowerCase() || '#0000ff';//blue
    this._color         = color.toLowerCase() || '#0000ff';//@private
    this.alpha          = options ? (options.alpha ? (this.validateAlpha(options.alpha) == true ? options.alpha : 1) : 1) : 1;
    this._alpha         = this.alpha;//@private
    this._iterator      = 0;//internal iterator
    this.lifeTime       = lifeTime || Infinity;
    this.dead           = false;
    this.temporaryOutOfBounds = false;
    
    //aging comportement
    this.aging          = options ? (options.aging ? options.aging : false) : false;
    this.borningRate    = options ? (options.borningRate ? options.borningRate : 80) : 80;
    this.dyingRate      = options ? (options.dyingRate ? options.dyingRate : 60) : 60;
    this.dying          = false;
    
    //bounce comportement - can't be changed by getters after the construct
    this.bouncingColor          = (options ? (options.bouncingColor ? options.bouncingColor : this.color) : this.color).toLowerCase();
    this.bouncingAlpha          = options ? (options.bouncingAlpha ? options.bouncingAlpha : false) : false;
    this.bouncingRate           = options ? (options.bouncingRate ? options.bouncingRate : 60) : 60;
    this.bouncingInfos          = null;
    this.minBouncingAlpha       = this.alpha > 0.2 ? 0.2 : 0;
    
    //glow comportement
    this.glowingColor   = (options ? (options.glowingColor ? options.glowingColor : this.color) : this.color).toLowerCase();
    this.glowingRate    = options ? (options.glowingRate ? options.glowingRate : 40) : 40;
    this.glowingColorInfos = null;
    
    //blink comportement
    this.blinkingColor  = (options ? (options.blinkingColor ? options.blinkingColor : this.color) : this.color).toLowerCase();
    this.blinkingRate   = options ? (options.blinkingRate ? options.blinkingRate : 40) : 40;
    this.blinking       = false;
    
    //explode comportement - can be changed by setter only if not exploding
    this.explodingAlpha     = options ? (options.explodingAlpha ? options.explodingAlpha : false) : false;
    this.explodingRadius    = options ? (options.explodingRadius ? options.explodingRadius : 2*this.radius) : 2*this.radius;
    this.explodingColor     = (options ? (options.explodingColor ? options.explodingColor : this.color) : this.color).toLowerCase();
    this.explodingRate      = options ? (options.explodingRate ? options.explodingRate : 60) : 60;
    this.explodingInfos     = null;
    
    if(this.bouncingColor != this.color && this.validateColorCode(this.bouncingColor) == false)
        console.warn("[WARN]Hexa code expected for bouncingColor. You gave : "+this.bouncingColor);
    if(this.glowingColor != this.color && this.validateColorCode(this.glowingColor) == false)
        console.warn("[WARN]Hexa code expected for glowingColor. You gave : "+this.glowingColor);
    if(this.explodingColor != this.color && this.validateColorCode(this.explodingColor) == false)
        console.warn("[WARN]Hexa code expected for explodingColor. You gave : "+this.explodingColor);    
    if(this.explodingRadius < this.radius)
        console.warn("[WARN]explodingRadius < radius, expect error with .explode()");
       
    //html renderer
    this.htmlClassAttribute = options ? (options.htmlClassName ? ' class="'+options.htmlClassName+'"' : '') : '';
    
    //at the end of the construct, if aging is on, the ball borns
    if(this.aging == true)
        this.born();
    
}

/********** Public setters and getters (use these functions rather than direct access to properties)  ***********/

/**
 * @return {Int}
 */
Ball.prototype.getX = function(){return this.x;}

/**
 * @param {Int} x
 * @return {Ball}
 */
Ball.prototype.setX = function(x){this.x = x;return this;}

/**
 * @return {Int}
 */
Ball.prototype.getY = function(){return this.y;}

/**
 * @param {Int} y
 * @return {Ball}
 */
Ball.prototype.setY = function(y){this.y = y;return this;}

/**
 * @return {Number}
 */
Ball.prototype.getVelocityX = function(){return this.velocityX;}

/**
 * @param {Number} velocityX
 * @return {Ball}
 */
Ball.prototype.setVelocityX = function(velocityX){this.velocityX = velocityX;return this;}

/**
 * @return {Number}
 */
Ball.prototype.getVelocityY = function(){return this.velocityY;}

/**
 * @param {Number} velocityY
 * @return {Ball}
 */
Ball.prototype.setVelocityY = function(velocityY){this.velocityY = velocityY;return this;}

/**
 * @return {Int}
 */
Ball.prototype.getRadius = function(){return this.radius;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {Int} radius
 * @return {Ball}
 */
Ball.prototype.setRadius = function(radius){
    //if allready exploding no effect
    if(this.isExploding())
        return this;
    //this public method update both the public and private radius
    this.radius = radius;
    this._radius = radius;
    return this;
}

/**
 * @return {Number}
 */
Ball.prototype.getMass = function(){return this.mass;}

/**
 * @param {Number} mass
 * @return {Ball}
 */
Ball.prototype.setMass = function(mass){this.mass = mass;return this;}

/**
 * @return {Number}
 */
Ball.prototype.getGravity = function(){return this.gravity;}

/**
 * @param {Number} gravity
 * @return {Ball}
 */
Ball.prototype.setGravity = function(gravity){this.gravity = gravity;return this;}

/**
 * @return {Number}
 */
Ball.prototype.getElasticity = function(){return this.elasticity;}

/**
 * @param {Number} elasticity
 * @return {Ball}
 */
Ball.prototype.setElasticity = function(elasticity){this.elasticity = elasticity;return this;}

/**
 * @return {Number}
 */
Ball.prototype.getFriction = function(){return this.friction;}

/**
 * @param {Number} friction
 * @return {Ball}
 */
Ball.prototype.setFriction = function(friction){this.friction = friction;return this;}

/**
 * @return {String}
 */
Ball.prototype.getColor = function(){return this.color;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {String} color
 * @return {Ball}
 */
Ball.prototype.setColor = function(color){
    //if allready exploding no effect
    if(this.isExploding())
        return this;
    if(this.validateColorCode(color)){
        this.color = color.toLowerCase();
        this._color = color.toLowerCase();
    }
    //if ball is glowing, restart glowing to have the correct base color
    if(this.isGlowing()){
        this.startGlowing();
    }
    return this;
}

/**
 * @return {Number}
 */
Ball.prototype.getAlpha = function(){return this.alpha;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {Number} alpha
 * @return {Ball}
 */
Ball.prototype.setAlpha = function(alpha){
    //if allready exploding no effect
    if(this.isExploding())
        return this;
    if(this.validateAlpha(alpha)){
        this.alpha = alpha;
        this._alpha = alpha;
    }
    return this;
}

/**
 * @return {Int}
 */
Ball.prototype.getLifeTime = function(){return this.lifeTime;}

/**
 * @param {Number} lifeTime
 * @return {Ball}
 */
Ball.prototype.setLifeTime = function(lifeTime){this.lifeTime = lifeTime;return this;}

/**
 * @return {Boolean}
 */
Ball.prototype.isDead = function(){return this.dead;}

/**
 * @return {Boolean}
 */
Ball.prototype.isDying = function(){return this.dying;}

/**
 * @return {String}
 */
Ball.prototype.getBouncingColor = function(){return this.bouncingColor;}

/**
 * @return {String}
 */
Ball.prototype.getGlowingColor = function(){return this.glowingColor;}

/**
 * @param {String} glowingColor
 * @return {Ball}
 */
Ball.prototype.setGlowingColor = function(glowingColor){
    if(this.validateColorCode(glowingColor))
        this.glowingColor = glowingColor.toLowerCase();
    //if ball is glowing, restart glowing to have the correct glowing color
    if(this.isGlowing()){
        this.startGlowing();
    }
    return this;
}

/**
 * @return {Int}
 */
Ball.prototype.getGlowingRate = function(){return this.glowingRate;}

/**
 * @param {Int} glowingRate
 * @return {Ball}
 */
Ball.prototype.setGlowingRate = function(glowingRate){
    this.glowingRate = glowingRate;
    //if ball is glowing, restart glowing to have the correct glowing rate
    if(this.isGlowing()){
        this.startGlowing();
    }
    return this;
}

/**
 * @return {String}
 */
Ball.prototype.getBlinkingColor = function(){return this.blinkingColor;}

/**
 * @param {String} blinkingColor
 * @return {Ball}
 */
Ball.prototype.setBlinkingColor = function(blinkingColor){
    this.blinkingColor = blinkingColor.toLowerCase();
    //if ball is blinking, restart blinking to have the correct blinking color
    if(this.isBlinking()){
        this.startBlinking();
    }
    return this;
}

/**
 * @return {Int}
 */
Ball.prototype.getDyingRate = function(){return this.dyingRate;}

/**
 * @warn won't be effective if ball already dying
 * @param {Int} dyingRate
 * @return {Ball}
 */
Ball.prototype.setDyingRate = function(dyingRate){
    //doesn't change if already dying
    if(this.isDying() == false){
        this.dyingRate = dyingRate;
    }
    return this;
}

/**
 * @return {Int}
 */
Ball.prototype.getBlinkingRate = function(){return this.blinkingRate;}

/**
 * @param {Int} blinkingRate
 * @return {Ball}
 */
Ball.prototype.setBlinkingRate = function(blinkingRate){
    this.blinkingRate = blinkingRate;
    //if ball is bling, restart glowing to have the correct blinking rate
    if(this.isBlinking()){
        this.startBlinking();
    }
    return this;
}

/**
 * @return {Boolean}
 */
Ball.prototype.getExplodingAlpha = function(){return this.explodingAlpha;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {Boolean} explodingAlpha
 * @return {Ball}
 */
Ball.prototype.setExplodingAlpha = function(explodingAlpha){
    if(this.isExploding() == false && this.validateAlpha(explodingAlpha))
        this.explodingAlpha = explodingAlpha;
    return this;
}

/**
 * @return {Int}
 */
Ball.prototype.getExplodingRadius = function(){return this.explodingRadius;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {Int} explodingRadius
 * @return {Ball}
 */
Ball.prototype.setExplodingRadius = function(explodingRadius){
    if(this.isExploding() == false)
        this.explodingRadius = explodingRadius;
    return this;
}

/**
 * @return {Int}
 */
Ball.prototype.getExplodingRate = function(){return this.explodingRate;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {Int} explodingRate
 * @return {Ball}
 */
Ball.prototype.setExplodingRate = function(explodingRate){
    if(this.isExploding() == false)
        this.explodingRate = explodingRate;
    return this;
}

/**
 * @return {String}
 */
Ball.prototype.getExplodingColor = function(){return this.explodingColor;}

/**
 * @warn won't be effective if .explode() has already been triggered;
 * @param {String} explodingColor
 * @return {Ball}
 */
Ball.prototype.setExplodingColor = function(explodingColor){
    if(this.isExploding() == false && this.validateColorCode(explodingColor))
        this.explodingRate = explodingColor;
    return this;
}

/**
 * Returns true if glowing
 * @return {Boolean}
 */
Ball.prototype.isGlowing = function(){return this.glowingColorInfos != null ? true : false;}

/**
 * Returns true if is changing color on bounce
 * @return {Boolean}
 */
Ball.prototype.isBouncing = function(){return this.bouncingInfos != null ? (this._iterator <= this.bouncingInfos.iteratorEnd ? true : false) : false;}

/**
 * Returns true if blinking
 * @return {Boolean}
 */
Ball.prototype.isBlinking = function(){return this.blinking;}

/**
 * Returns true if exploding
 * @return {Boolean}
 */
Ball.prototype.isExploding = function(){return this.explodingInfos != null ? (this._iterator <= this.explodingInfos.iteratorEnd ? true : false) : false;}

/********** End of public setters and getters **********/

/**
 * @private
 * Inits bouncingInfos (prepares the bouncing duration, used for the modulation of the color and the alpha on move)
 */
Ball.prototype.initBouncingInfos = function(){
    this.bouncingInfos = {
        iteratorStart: this._iterator,
        iteratorEnd: this._iterator + this.bouncingRate
    }
}

/**
 * Updates the alpha (used for globalAlpha in canvas rendering)
 * This function is automatically called on ball vs ball collisions, you can also call it from outside if you want.
 */
Ball.prototype.updateAlphaOnCollision = function(){
    if(this.bouncingAlpha == true){
        this.initBouncingInfos();
        this.alpha = this.minBouncingAlpha;
    }
}

/**
 * Updates the alpha (used for globalAlpha in canvas rendering)
 * This function is automatically called on ball move, you can also call it from outside if you want.
 */
Ball.prototype.updateAlphaOnMove = function(){

    if(this.isExploding() && this.explodingAlpha == true){
        this.alpha = this.alpha - (this._alpha)/this.bouncingRate;
        if(this.alpha < 0) this.alpha = 0;
    }
    else if(this.isBouncing()){
        if(this.bouncingAlpha == true && this.alpha <= this._alpha){
            this.alpha = this.alpha + (this._alpha-this.minBouncingAlpha)/this.bouncingRate;
        }
    }
    //fallback to return the original _alpha
    else if(this.alpha != this._alpha){
        this.alpha = this._alpha;
    }
    
}

/**
 * Updates the color (used in canvas rendering)
 * This function is automatically called on ball vs ball collisions, you can also call it from outside if you want.
 */
Ball.prototype.updateColorOnCollision = function(){
    if(this.bouncingColor != this._color){
        this.initBouncingInfos();
        this.color = this.bouncingColor;
    }
}

/**
 * Updates the color
 * This function is automatically called on ball move, you can also call it from outside if you want.
 */
Ball.prototype.updateColorOnMove = function(){
    if(this.isExploding() && this._color != this.explodingColor){
        this.color = this.computeColor(this._iterator, this._color, this.explodingColor, this.explodingInfos.iteratorStart, this.explodingInfos.iteratorEnd);
    }
    else if(this.isBouncing() && this._color != this.bouncingColor){
        this.color = this.computeColor(this._iterator, this.bouncingColor, this._color, this.bouncingInfos.iteratorStart, this.bouncingInfos.iteratorEnd);
    }
    else if(this.isGlowing()){
        this.computeAndSetGlowingColor();
    }
    else if(this.isBlinking()){
        this.computeAndSetBlinkingColor();
    }
}

Ball.prototype.updateRadiusOnMove = function(){
    
    if(this.isExploding() && this.explodingRadius > this._radius){
        this.radius = this.radius + (this.radius < this.explodingRadius ? (this.explodingRadius - this._radius)/this.explodingRate : 0);
            //fallback if this.radius grows up to original radius
            if(this.radius > this.explodingRadius)
                this.radius = this.explodingRadius;
    }
    else{
        //if aging mode On and still growing up (and not grown up), continue to grow up
        if(this.aging == true && this.dead == false && this.dying == false && this.radius < this._radius && this.dying == false){
            this.radius = this.radius + (this.radius < this._radius ? this._radius/this.borningRate : 0);
            //fallback if this.radius grows up to original radius
            if(this.radius > this._radius)
                this.radius = this._radius;
        }
        //if dying shrink down
        if(this.dead == false && this.dying == true && this.lifeTime <= this.dyingRate){
            this.radius = this.radius - (this.radius > 0 ? this._radius/this.dyingRate : 0);
            //fallback if this.radius shrinks down to 0
            if(this.radius < 0)
                this.radius = 0;
        }
    }
}

/**
 * If glowingColor enabled in options, starts glowing the ball
 * If the ball is glowing will do nothing
 * @warn does nothing if already exploding
 * 
 * @return {Ball}
 */
Ball.prototype.glow = function(){
    if(this.isGlowing())
        return this;
    else
        return this.startGlowing();
}

/**
 * Stops glowing the ball
 * 
 * @return {Ball}
 */
Ball.prototype.stopGlow = function(){
    if(this.isGlowing()){
        return this.stopGlowing();
    }
    else
        return this;
}

/**
 * @private use glow() (don't bother with initating glowing)
 * If glowingColor enabled in options, will start glowing the ball
 * @warn does nothing if already exploding
 * 
 * @return {Ball}
 */
Ball.prototype.startGlowing = function(){
    //does nothing if already exploding
    if(this.isExploding())
        return this;
    //stop blinking before start glowing
    if(this.isBlinking())
        this.stopBlinking();
    //if the original color and the glowingColor are the same -> no glowing
    if(this.glowingColor == this._color)
        return this;
    //reset the color to origninal color (in case we are glowing and the color is changing)
    this.color = this._color;
    this.computeAndSetGlowingColor();
    return this;
}

/**
 * @private use stopGlow()
 * Stops glowing the ball
 * 
 * @return {Ball}
 */
Ball.prototype.stopGlowing = function(){
    //if the original color and the glowingColor are the same -> no glowing
    if(this.glowingColor == this._color)
        return this;
    this.glowingColorInfos  = null;
    this.color              = this._color;//reset default color
    return this;
}

/**
 * If blinkingColor enabled in options, starts blinking the ball
 * If the ball is blinking will do nothing
 * @warn does nothing if already exploding
 * 
 * @return {Ball}
 */
Ball.prototype.blink = function(){
    if(this.isBlinking())
        return this;
    else
        return this.startBlinking();
}

/**
 * Stops blinking the ball
 * 
 * @return {Ball}
 */
Ball.prototype.stopBlink = function(){
    if(this.isBlinking()){
        return this.stopBlinking();
    }
    else
        return this;
}

/**
 * @private use blink() (don't bother with initating blinking)
 * If blinkingColor enabled in options, will start blinking the ball
 * @warn does nothing if already exploding
 * 
 * @return {Ball}
 */
Ball.prototype.startBlinking = function(){
    //does nothing if already exploding
    if(this.isExploding())
        return this;
    //stop glowing before start blinking
    if(this.isGlowing())
        this.stopGlowing();
    //if the original color and the glowingColor are the same -> no glowing
    if(this.blinkingColor == this._color)
        return this;
    //reset the color to origninal color (in case we are glowing and the color is changing)
    this.blinking = true;
    this.color = this._color;
    return this;
}

/**
 * @private use stopBlink()
 * Stops blinking the ball
 * 
 * @return {Ball}
 */
Ball.prototype.stopBlinking = function(){
    //if the original color and the glowingColor are the same -> no glowing
    if(this.blinkingColor == this._color)
        return this;
    this.blinking           = false;
    this.color              = this._color;//reset default color
    return this;
}

Ball.prototype.explode = function(){
    //override dying
    this.dying = false;
    //default radius / color / alpha
    this.radius = this._radius;
    this.color = this._color;
    this.alpha = this._alpha;
    
    this.lifeTime = this.explodingRate;
    
    this.explodingInfos = {
        iteratorStart: this._iterator,
        iteratorEnd: this._iterator + this.explodingRate
    }
}

/**
 * @private
 * 
 * Compute the color if glowing is enabled (switches iterators)
 */
Ball.prototype.computeAndSetGlowingColor = function(){
    //new iteration each time this._color or this.glowingColor is reached by this.color
    if(this.color == this._color){
        this.glowingColorInfos = {
            iteratorStart   : this._iterator,
            iteratorEnd     : this._iterator + this.glowingRate,
            state           : 'up'
        };
    }
    else if(this.color == this.glowingColor){
        this.glowingColorInfos = {
            iteratorStart   : this._iterator,
            iteratorEnd     : this._iterator + this.glowingRate,
            state           : 'down'
        };        
    }
    
    var colorFrom, colorTo;
    if(this.glowingColorInfos.state == 'up'){
        colorFrom   = this._color;
        colorTo     = this.glowingColor;
    }
    else{
        colorFrom   = this.glowingColor;
        colorTo     = this._color;
    }

    this.color = this.computeColor(this._iterator+1, colorFrom, colorTo, this.glowingColorInfos.iteratorStart, this.glowingColorInfos.iteratorEnd);
}

/**
 * @private
 * 
 * Prepares the ball for blinking
 */
Ball.prototype.computeAndSetBlinkingColor = function(){
    if(this._iterator%this.blinkingRate == 0 && this.color == this._color){
        this.color = this.blinkingColor;
    }
    else if(this._iterator%this.blinkingRate == 0 && this.color == this.blinkingColor){
        this.color = this._color;
    }
}

/**
 * @param {Number} dx
 * @param {Number} dy
 * @return {Ball}
 * 
 * Moves the ball according to the gravity / friction initialized at its construct and its velocity at the moment
 * 
 * Warning : if you call move() twice or more inside an iteration (setTimeout, setInterval, requestAnimationFrame ...) your ball
 * will age quicker because this._iterator is incremented here
 */
Ball.prototype.move = function(dx,dy){
    this._iterator++;
    dx = dx || 0;
    dy = dy || 0;
    this.x = this.x + this.gravity * this.velocityX;
    this.y = this.y + this.gravity * this.velocityY;
    this.velocityX = this.friction * (this.velocityX + dx);
    this.velocityY = this.friction * (this.velocityY + dy);
    this.updateRadiusOnMove();
    this.updateAlphaOnMove();
    this.updateColorOnMove();
    this.age();
    return this;
}

/**
 * @private
 *
 * Initialize the ball in case this.aging == true
 */
Ball.prototype.born = function(){
    this.radius = 1;
    this.dying  = false;
    this.dead   = false;
}

/**
 * Flags the ball as dead
 * @note May do other things in the future
 * 
 * @return {Ball}
 */
Ball.prototype.die = function(){
    this.dead = true;
    return this;
}

/**
 * Flags the ball as dying, will activate the aging process then die
 * 
 * @return {Ball}
 */
Ball.prototype.toDeath = function(){
    this.dying = true;
    this.lifeTime = this.dyingRate;
    return this;
}

/**
 * @private (please use aging:true in options at construct)
 * Decreases the lifeTime of the ball.
 * 
 * Called on .move()
 */
Ball.prototype.age = function(){
//    console.info(this.lifeTime);
    //decrease the lifeTime
    this.lifeTime--;
    
    //if aging is on, flags as dying when the moment comes
    if(this.lifeTime <= this.dyingRate)
        this.dying = true;
    
    //if too old, die
    if(this.lifeTime < 1)
        this.die();
    
}
    
/**
 * @param {Ball} ball
 * @return {Boolean}
 * 
 * Detects a collision between this and an other ball
 * 
 * http://stackoverflow.com/questions/345838/ball-to-ball-collision-detection-and-handling
 */
Ball.prototype.checkBallCollision = function(ball){
    
    var xd = this.x - ball.x;
    var yd = this.y - ball.y;

    var sumRadius = this.radius + ball.radius;
    var sqrRadius = sumRadius * sumRadius;

    var distSqr = (xd * xd) + (yd * yd);

    if (distSqr <= sqrRadius)
    {
        return true;
    }

    return false;
    
}

/**
 * @param {Ball} ball
 * @param {Function} callback @optional
 * 
 * Resolves a collision between this and an other ball
 *
 * http://www.cademia.org/frontend/doc/cib/util/geo/Vector2D.html
 * http://jamieblog.org/vector2d-for-javascript/
 */
Ball.prototype.resolveBallCollision = function(ball,callback){
    
    var RESTITUTION = 0.85;

    //get the mtd
    var delta = this.getVector2D(ball);
    var d = delta.getLength();
    // minimum translation distance to push balls apart after intersecting
    var mtd = delta.scale(((this.radius + ball.radius)-d)/d);
    

    // resolve intersection --
    // inverse mass quantities (tophe note :  inverted ball and this)
    var im1 = 1/this.mass;
    var im2 = 1/ball.mass;

    // impact speed
    var vectorVelocity = new Vector2D(this.velocityX - ball.velocityX, this.velocityY - ball.velocityY);
    var vn = vectorVelocity.dot(mtd.normalize());

    // sphere intersecting but moving away from each other already
    if (vn > 0)
        return;

    // collision impulse
    var i = (-(1 + RESTITUTION) * vn) / (im1 + im2);
    var impulse = mtd.scale(i);

    // change in momentum
    var ims1 = impulse.scale(im1);
    var ims2 = impulse.scale(im2);

    this.velocityX = (this.velocityX + ims1.x) * this.elasticity;
    this.velocityY = (this.velocityY + ims1.y) * this.elasticity;
    ball.velocityX = (ball.velocityX - ims2.x) * this.elasticity;
    ball.velocityY = (ball.velocityY - ims2.y) * this.elasticity;
    
    //update alpha on bounce
    this.updateAlphaOnCollision();
    ball.updateAlphaOnCollision();
    
    //update color on bounce
    this.updateColorOnCollision();
    ball.updateColorOnCollision();
    
    if(callback)
        callback.call({});
    
}

/**
 * @param {Int} stageWidth
 * @param {Int} stageHeight
 * @param {Function} callback @optional
 * 
 * Manages the collisions of this with the borders of the stage stageWidth/stageHeight
 */
Ball.prototype.manageStageBorderCollision = function(stageWidth,stageHeight,callback){
    var collision = false;
    //left border
    if(this.x - this.radius < 0){
        this.velocityX = -this.velocityX * this.elasticity;
        this.x = this.radius;
        collision = true;
    }
    //right border
    if(this.x + this.radius > stageWidth){
        this.velocityX = -this.velocityX * this.elasticity;
        this.x = stageWidth - this.radius;
        collision = true;
    }
    //top border
    if(this.y - this.radius < 0){
        this.velocityY = -this.velocityY * this.elasticity;
        this.y = this.radius;
        collision = true;
    }
    //bottom border
    if(this.y + this.radius > stageHeight){
        this.velocityY = -this.velocityY * this.elasticity;
        this.y = stageHeight - this.radius;
        collision = true;
    }
    
    if(collision){
//        this.updateAlphaOnCollision();
//        this.updateColorOnCollision();
        if(callback)
            callback.call({});
    }
}

/**
 * @param {Int} stageWidth
 * @param {Int} stageHeight
 * 
 * @return {Boolean}
 * 
 * Checks if this is out of the stage stageWidth/stageHeight
 */
Ball.prototype.checkOutOfBounds = function(stageWidth,stageHeight){
    var GAP = 40;
    if(this.x - this.radius < -GAP || this.x + this.radius > stageWidth + GAP || this.y - this.radius < -GAP || this.y + this.radius > stageHeight + GAP)
        return true;
    else
        return false;
}

/**
 * @param {Int} stageWidth
 * @param {Int} stageHeight
 * @param {Int} level @optional
 * 
 * @return {Ball}
 * 
 * Randomly positions and prepares the velocity of a ball, inside stageWidth/stageHeight
 */
Ball.prototype.setRandomPositionAndSpeedInBounds = function(stageWidth,stageHeight,level){
    this.x = this.random()*stageWidth;
    this.y = this.random()*stageHeight;
    this.velocityX = this.random()*10;
    this.velocityY = this.random()*10;
    return this;
}

/**
 * @param {Int} stageWidth
 * @param {Int} stageHeight
 * @param {Int} level @optional
 * 
 * @return {Ball}
 * 
 * Randomly positions and prepares the velocity of a ball, outside stageWidth/stageHeight
 * The velocity of the ball will be set so that it will enter the stage
 * The ball is flagged "temporaryOutOfBounds"
 */
Ball.prototype.setRandomPositionAndSpeedOutOfBounds = function(stageWidth,stageHeight,level){
    var GAP = 40;
    
    if(this.random() > 0.5){
        this.x = -GAP;
        this.velocityX = this.random()*10;
    }
    else{
        this.x = stageWidth + GAP;
        this.velocityX = -this.random()*10;
    }
    
    if(this.random() > 0.5){
        this.y = -GAP;
        this.velocityY = this.random()*10;
    }
    else{
        this.y = stageHeight + GAP;
        this.velocityY = -this.random()*10;
    }
    this.temporaryOutOfBounds = true;
    
    return this;
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
Ball.prototype.draw = function(ctx){
    if(this.alpha < 1){
        ctx.globalAlpha = this.alpha;
    }
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    if(this.alpha < 1){
        ctx.globalAlpha = 1;
    }
}

/**
 * Returns the innerHtml if you don't use canvas
 * Feel free to copy the line below and use it as your needs
 * @return {String}
 */
Ball.prototype.renderHtml = function(){
    return '<div'+this.htmlClassAttribute+' style="top:'+(this.getY()-this.getRadius())+'px;left:'+(this.getX()-this.getRadius())+'px;background:'+this.getColor()+';width:'+this.getRadius()*2+'px;height:'+this.getRadius()*2+'px;border-radius:'+this.getRadius()+'px;opacity:'+this.getAlpha()+'"></div>';
}

/**
 * @param {Ball}
 * @return {Number}
 */
Ball.prototype.computeDistance = function(ball){
    return Math.sqrt( Math.pow(this.x - ball.x,2) + Math.pow(this.y - ball.y,2) );
}

/**
 * @param {Ball}
 * @return {Vector2D}
 */
Ball.prototype.getVector2D = function(ball){
    return new Vector2D(this.x - ball.x, this.y - ball.y);
}

/**
 * @param {Int} currentIndex (current iterator index of the loop)
 * @param {String} colorStart (hexa)
 * @param {String} colorEnd (hexa)
 * @param {Int} indexMin (iterator of the loop from where you started)
 * @param {Int} indexMax (iterator of the loop you intend to reach)
 * 
 * @return {String} (color in hexa)
 * 
 * http://refactormycode.com/codes/254-hex-color-between-two-colors
 */
Ball.prototype.computeColor = function(currentIndex, colorStart, colorEnd, indexMin, indexMax) {
    var n = (currentIndex - indexMin) / (indexMax - indexMin);
    var s = parseInt(colorStart.replace("#", ""), 16);
    var e = parseInt(colorEnd.replace("#", ""), 16);

    var r = this.round(((e >> 16) - (s >> 16)) * n) + (s >> 16);
    var g = this.round((((e >> 8) & 0xFF) - ((s >> 8) & 0xFF)) * n) + ((s >> 8) & 0xFF);
    var b = this.round(((e & 0xFF) - (s & 0xFF)) * n) + (s & 0xFF);
    b |= (r << 16) | (g << 8);

    return "#" + ("000000" + b.toString(16)).slice(-6);
}

/**
 * @param {String} colorCode
 * @return {Boolean}
 * 
 * Checks Hexa Color code (example : #FF00FF)
 */
Ball.prototype.validateColorCode = function(colorCode){
    var regColorcode = /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/;
    return regColorcode.test(colorCode);
}

/*
 * @param {Number} alpha
 * @return {Boolean}
 */
Ball.prototype.validateAlpha = function(alpha){
    if(!isNaN(alpha) && alpha >= 0 && alpha <= 1)
        return true;
    else
        return false;
}

/**
 * Alias Math.random (optimize global access)
 * @return {Number}
 */
Ball.prototype.random = function(){
    return Math.random();
}

/**
 * Alias Math.round (optimize global access)
 * @return {Int}
 */
Ball.prototype.round = function(number){
    return Math.round(number);
};
define("vendor/Ball", ["vendor/Vector2D"], function(){});

/*!
 * Used on
 * http://squares.topheman.com/
 * http://bombs.topheman.com/
 *
 * Copyright 2012, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 *
 * HighScoresManager.js
 * Manages high scores, uses localStorage if enabled, fallback to memory if not
 * Can be extended in the futur to client/server AJAX, WebServices or whatever to share highScores between players
 */

/**
 * @param {Int} highScoresNumber (Number of highscores you wish to manage)
 * @param {Object} options
 *      .localStorageKeyName
 */

define('game/HighScoresManager',[],function(){
    
    var HighScoresManager;
    
    HighScoresManager = function (highScoresNumber,options){

        //private constantes
        var LOCAL_STORAGE_KEY_NAME = options ? (options.localStorageKeyName ? options.localStorageKeyName : 'tophemanHighScores' ) : 'tophemanHighScores';

        //private attributes
        var _highScores;
        var _highScoresNumber = highScoresNumber;

        //code executed in the constructor
        _highScores = _reloadHighScores();
        //end of constructor

        //public functions
        this.getHighScores = function(){
            return _highScores;
        };

        /**
         * Returns the id in the _highScores array of the score you just added if it goes into the top high scores
         * If not, returns null
         * @return {Int}|null
         */
        this.addHighScore = function(score, level){
            return _addHighScore(score, level);
        };

        //private functions

        /**
         * @example http://diveintohtml5.info/detect.html
         * @return {Boolean}
         */
        function _isLocalStorageEnabled(){
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch(e){
                return false;
            }
        }

        /**
         * If localStorage enabled, tries to retrieve high scores (if no highScores in localStorage, returns empty array)
         * If no localStorage support, return empty array
         */
        function _reloadHighScores(){
            if(_isLocalStorageEnabled()){
                var scoresStored = window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME) !== null ? JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME)) : null;
                if(scoresStored !== null)
                    return scoresStored;
                else
                    return [];
            }
            else{
                return [];
            }
        }

        /**
         * If localStorage enabled, saves highScores to local storage
         * If no localStorage support, does nothing ...
         */
        function _saveHighScores(){
            if(_isLocalStorageEnabled()){
                window.localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(_highScores));
            }
        }

        /**
         * @return {Array}
         */
        function _sortHighScores(){
            _highScores.sort(function(a,b){return b.score-a.score;});
        }

        /**
         * Returns true if the score is high enough to enter in the top high scores
         * @param {Int} score
         * @return {Boolean}
         */
        function _isScoreEnoughHigh(score){
            _sortHighScores();
            //the first entry is always ok
            if(_highScores.length === 0 || !_highScores[_highScoresNumber-1])
                return true;
            if(score > _highScores[_highScoresNumber-1].score)
                return true;
            else
                return false;
        }

        /**
         * @param {Int} score
         * @param {Int} level
         * @return {Int}|null
         */
        function _addHighScore(score,level){
//            console.info('_addHighScore',score,level);
            //if the score is high enough to enter in the top we push it to _highScores
            if(_isScoreEnoughHigh(score)){
//                console.info('if _isEnoughHigh');
                _highScores.push({score:score,level:level});
                _sortHighScores();
                //if there are too many highScores in the top, we remove the last one
                if(_highScores.length > _highScoresNumber)
                    _highScores.splice(_highScoresNumber,1);
                //now, we save the high score
                _saveHighScores();
                //find the new id of the score just added
                for(var i=0;i<_highScores.length;i++){
//                    console.info('i',i,_highScores[i]);
                    if(_highScores[i].score === score)
                        return i;
                }
            }
            else
                return null;
        }

    };
    
    return HighScoresManager;
    
});
/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function E(a){return a==null?String(a):y[z.call(a)]||"object"}function F(a){return E(a)=="function"}function G(a){return a!=null&&a==a.window}function H(a){return a!=null&&a.nodeType==a.DOCUMENT_NODE}function I(a){return E(a)=="object"}function J(a){return I(a)&&!G(a)&&a.__proto__==Object.prototype}function K(a){return a instanceof Array}function L(a){return typeof a.length=="number"}function M(a){return g.call(a,function(a){return a!=null})}function N(a){return a.length>0?c.fn.concat.apply([],a):a}function O(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(a){return a in j?j[a]:j[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a,b){return typeof b=="number"&&!l[O(a)]?b+"px":b}function R(a){var b,c;return i[a]||(b=h.createElement(a),h.body.appendChild(b),c=k(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),i[a]=c),i[a]}function S(a){return"children"in a?f.call(a.children):c.map(a.childNodes,function(a){if(a.nodeType==1)return a})}function T(c,d,e){for(b in d)e&&(J(d[b])||K(d[b]))?(J(d[b])&&!J(c[b])&&(c[b]={}),K(d[b])&&!K(c[b])&&(c[b]=[]),T(c[b],d[b],e)):d[b]!==a&&(c[b]=d[b])}function U(b,d){return d===a?c(b):c(b).filter(d)}function V(a,b,c,d){return F(b)?b.call(a,c,d):b}function W(a,b,c){c==null?a.removeAttribute(b):a.setAttribute(b,c)}function X(b,c){var d=b.className,e=d&&d.baseVal!==a;if(c===a)return e?d.baseVal:d;e?d.baseVal=c:b.className=c}function Y(a){var b;try{return a?a=="true"||(a=="false"?!1:a=="null"?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?c.parseJSON(a):a:b):a}catch(d){return a}}function Z(a,b){b(a);for(var c in a.childNodes)Z(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=e.filter,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,n=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,o=/^(?:body|html)$/i,p=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],r=h.createElement("table"),s=h.createElement("tr"),t={tr:h.createElement("tbody"),tbody:r,thead:r,tfoot:r,td:s,th:s,"*":h.createElement("div")},u=/complete|loaded|interactive/,v=/^\.([\w-]+)$/,w=/^#([\w-]*)$/,x=/^[\w-]+$/,y={},z=y.toString,A={},B,C,D=h.createElement("div");return A.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=D).appendChild(a),d=~A.qsa(e,b).indexOf(a),f&&D.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return g.call(a,function(b,c){return a.indexOf(b)==c})},A.fragment=function(b,d,e){b.replace&&(b=b.replace(n,"<$1></$2>")),d===a&&(d=m.test(b)&&RegExp.$1),d in t||(d="*");var g,h,i=t[d];return i.innerHTML=""+b,h=c.each(f.call(i.childNodes),function(){i.removeChild(this)}),J(e)&&(g=c(h),c.each(e,function(a,b){p.indexOf(a)>-1?g[a](b):g.attr(a,b)})),h},A.Z=function(a,b){return a=a||[],a.__proto__=c.fn,a.selector=b||"",a},A.isZ=function(a){return a instanceof A.Z},A.init=function(b,d){if(!b)return A.Z();if(F(b))return c(h).ready(b);if(A.isZ(b))return b;var e;if(K(b))e=M(b);else if(I(b))e=[J(b)?c.extend({},b):b],b=null;else if(m.test(b))e=A.fragment(b.trim(),RegExp.$1,d),b=null;else{if(d!==a)return c(d).find(b);e=A.qsa(h,b)}return A.Z(e,b)},c=function(a,b){return A.init(a,b)},c.extend=function(a){var b,c=f.call(arguments,1);return typeof a=="boolean"&&(b=a,a=c.shift()),c.forEach(function(c){T(a,c,b)}),a},A.qsa=function(a,b){var c;return H(a)&&w.test(b)?(c=a.getElementById(RegExp.$1))?[c]:[]:a.nodeType!==1&&a.nodeType!==9?[]:f.call(v.test(b)?a.getElementsByClassName(RegExp.$1):x.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.contains=function(a,b){return a!==b&&a.contains(b)},c.type=E,c.isFunction=F,c.isWindow=G,c.isArray=K,c.isPlainObject=J,c.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.camelCase=B,c.trim=function(a){return a.trim()},c.uuid=0,c.support={},c.expr={},c.map=function(a,b){var c,d=[],e,f;if(L(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return N(d)},c.each=function(a,b){var c,d;if(L(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.grep=function(a,b){return g.call(a,b)},window.JSON&&(c.parseJSON=JSON.parse),c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){y["[object "+b+"]"]=b.toLowerCase()}),c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,indexOf:e.indexOf,concat:e.concat,map:function(a){return c(c.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return u.test(h.readyState)?a(c):h.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b>=0?b:b+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return F(a)?this.not(this.not(a)):c(g.call(this,function(b){return A.matches(b,a)}))},add:function(a,b){return c(C(this.concat(c(a,b))))},is:function(a){return this.length>0&&A.matches(this[0],a)},not:function(b){var d=[];if(F(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):L(b)&&F(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},has:function(a){return this.filter(function(){return I(a)?c.contains(this,a):c(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!I(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!I(a)?a:c(a)},find:function(a){var b,d=this;return typeof a=="object"?b=c(a).filter(function(){var a=this;return e.some.call(d,function(b){return c.contains(b,a)})}):this.length==1?b=c(A.qsa(this[0],a)):b=this.map(function(){return A.qsa(this,a)}),b},closest:function(a,b){var d=this[0],e=!1;typeof a=="object"&&(e=c(a));while(d&&!(e?e.indexOf(d)>=0:A.matches(d,a)))d=d!==b&&!H(d)&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&!H(a)&&b.indexOf(a)<0)return b.push(a),a});return U(b,a)},parent:function(a){return U(C(this.pluck("parentNode")),a)},children:function(a){return U(this.map(function(){return S(this)}),a)},contents:function(){return this.map(function(){return f.call(this.childNodes)})},siblings:function(a){return U(this.map(function(a,b){return g.call(S(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return c.map(this,function(b){return b[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),k(this,"").getPropertyValue("display")=="none"&&(this.style.display=R(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=F(a);if(this[0]&&!b)var d=c(a).get(0),e=d.parentNode||this.length>1;return this.each(function(f){c(this).wrapAll(b?a.call(this,f):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){c(this[0]).before(a=c(a));var b;while((b=a.children()).length)a=b.first();c(a).append(this)}return this},wrapInner:function(a){var b=F(a);return this.each(function(d){var e=c(this),f=e.contents(),g=b?a.call(this,d):a;f.length?f.wrapAll(g):e.append(g)})},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(b){return this.each(function(){var d=c(this);(b===a?d.css("display")=="none":b)?d.show():d.hide()})},prev:function(a){return c(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return c(this.pluck("nextElementSibling")).filter(a||"*")},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(V(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(I(c))for(b in c)W(this,b,c[b]);else W(this,c,V(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&W(this,a)})},prop:function(b,c){return c===a?this[0]&&this[0][b]:this.each(function(a){this[b]=V(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+O(b),c);return d!==null?Y(d):a},val:function(b){return b===a?this[0]&&(this[0].multiple?c(this[0]).find("option").filter(function(a){return this.selected}).pluck("value"):this[0].value):this.each(function(a){this.value=V(this,b,a,this.value)})},offset:function(a){if(a)return this.each(function(b){var d=c(this),e=V(this,a,b,d.offset()),f=d.offsetParent().offset(),g={top:e.top-f.top,left:e.left-f.left};d.css("position")=="static"&&(g.position="relative"),d.css(g)});if(this.length==0)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,c){if(arguments.length<2&&typeof a=="string")return this[0]&&(this[0].style[B(a)]||k(this[0],"").getPropertyValue(a));var d="";if(E(a)=="string")!c&&c!==0?this.each(function(){this.style.removeProperty(O(a))}):d=O(a)+":"+Q(a,c);else for(b in a)!a[b]&&a[b]!==0?this.each(function(){this.style.removeProperty(O(b))}):d+=O(b)+":"+Q(b,a[b])+";";return this.each(function(){this.style.cssText+=";"+d})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return e.some.call(this,function(a){return this.test(X(a))},P(a))},addClass:function(a){return this.each(function(b){d=[];var e=X(this),f=V(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&X(this,e+(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return X(this,"");d=X(this),V(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(P(a)," ")}),X(this,d.trim())})},toggleClass:function(b,d){return this.each(function(e){var f=c(this),g=V(this,b,e,X(this));g.split(/\s+/g).forEach(function(b){(d===a?!f.hasClass(b):d)?f.addClass(b):f.removeClass(b)})})},scrollTop:function(){if(!this.length)return;return"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY},position:function(){if(!this.length)return;var a=this[0],b=this.offsetParent(),d=this.offset(),e=o.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(c(a).css("margin-top"))||0,d.left-=parseFloat(c(a).css("margin-left"))||0,e.top+=parseFloat(c(b[0]).css("border-top-width"))||0,e.left+=parseFloat(c(b[0]).css("border-left-width"))||0,{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||h.body;while(a&&!o.test(a.nodeName)&&c(a).css("position")=="static")a=a.offsetParent;return a})}},c.fn.detach=c.fn.remove,["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=this[0],g=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?G(f)?f["inner"+g]:H(f)?f.documentElement["offset"+g]:(e=this.offset())&&e[b]:this.each(function(a){f=c(this),f.css(b,V(this,d,a,f[b]()))})}}),q.forEach(function(a,b){var d=b%2;c.fn[a]=function(){var a,e=c.map(arguments,function(b){return a=E(b),a=="object"||a=="array"||b==null?b:A.fragment(b)}),f,g=this.length>1;return e.length<1?this:this.each(function(a,h){f=d?h:h.parentNode,h=b==0?h.nextSibling:b==1?h.firstChild:b==2?h:null,e.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!f)return c(a).remove();Z(f.insertBefore(a,h),function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&!a.src&&window.eval.call(window,a.innerHTML)})})})},c.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),A.Z.prototype=c.fn,A.uniq=C,A.deserializeValue=Y,c.zepto=A,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/),m=a.match(/(BB10).*Version\/([\d.]+)/),n=a.match(/(RIM\sTablet\sOS)\s([\d.]+)/),o=a.match(/PlayBook/),p=a.match(/Chrome\/([\d.]+)/)||a.match(/CriOS\/([\d.]+)/),q=a.match(/Firefox\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),m&&(b.bb10=!0,b.version=m[2]),n&&(b.rimtabletos=!0,b.version=n[2]),o&&(c.playbook=!0),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0),p&&(c.chrome=!0,c.version=p[1]),q&&(c.firefox=!0,c.version=q[1]),b.tablet=!!(f||o||e&&!a.match(/Mobile/)||q&&a.match(/Tablet/)),b.phone=!b.tablet&&!!(e||g||h||l||m||p&&a.match(/Android/)||p&&a.match(/CriOS\/([\d.]+)/)||q&&a.match(/Mobile/))}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a){function g(a){return a._zid||(a._zid=d++)}function h(a,b,d,e){b=i(b);if(b.ns)var f=j(b.ns);return(c[g(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||f.test(a.ns))&&(!d||g(a.fn)===g(d))&&(!e||a.sel==e)})}function i(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function j(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function k(b,c,d){a.type(b)!="string"?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function l(a,b){return a.del&&(a.e=="focus"||a.e=="blur")||!!b}function m(a){return f[a]||a}function n(b,d,e,h,j,n){var o=g(b),p=c[o]||(c[o]=[]);k(d,e,function(c,d){var e=i(c);e.fn=d,e.sel=h,e.e in f&&(d=function(b){var c=b.relatedTarget;if(!c||c!==this&&!a.contains(this,c))return e.fn.apply(this,arguments)}),e.del=j&&j(d,c);var g=e.del||d;e.proxy=function(a){var c=g.apply(b,[a].concat(a.data));return c===!1&&(a.preventDefault(),a.stopPropagation()),c},e.i=p.length,p.push(e),b.addEventListener(m(e.e),e.proxy,l(e,n))})}function o(a,b,d,e,f){var i=g(a);k(b||"",d,function(b,d){h(a,b,d,e).forEach(function(b){delete c[i][b.i],a.removeEventListener(m(b.e),b.proxy,l(b,f))})})}function t(b){var c,d={originalEvent:b};for(c in b)!r.test(c)&&b[c]!==undefined&&(d[c]=b[c]);return a.each(s,function(a,c){d[a]=function(){return this[c]=p,b[a].apply(b,arguments)},d[c]=q}),d}function u(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={},f={mouseenter:"mouseover",mouseleave:"mouseout"};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:n,remove:o},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=g(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){n(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){o(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){n(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return o(d,b,a),c}})})};var p=function(){return!0},q=function(){return!1},r=/^([A-Z]|layer[XY]$)/,s={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){return this.each(function(e,f){n(f,c,d,b,function(c){return function(d){var e,g=a(d.target).closest(b,f).get(0);if(g)return e=a.extend(t(d),{currentTarget:g,liveFired:f}),c.apply(g,[e].concat([].slice.call(arguments,1)))}})})},a.fn.undelegate=function(a,b,c){return this.each(function(){o(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return!c||a.isFunction(c)?this.bind(b,c||d):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return!c||a.isFunction(c)?this.unbind(b,c||d):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){if(typeof b=="string"||a.isPlainObject(b))b=a.Event(b);return u(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,g){d=t(typeof b=="string"?a.Event(b):b),d.data=c,d.target=g,a.each(h(g,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){typeof a!="string"&&(b=a,a=b.type);var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c.isDefaultPrevented=function(){return this.defaultPrevented},c}}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a=a.split(";",2)[0]),a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){a.processData&&a.data&&$.type(a.data)!="string"&&(a.data=$.param(a.data,a.traditional)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function parseArguments(a,b,c,d){var e=!$.isFunction(b);return{url:a,data:e?b:undefined,success:e?$.isFunction(c)?c:undefined:b,dataType:e?d||c:c}}function serialize(a,b,c,d){var e,f=$.isArray(b);$.each(b,function(b,g){e=$.type(g),d&&(b=c?d:d+"["+(f?"":b)+"]"),!d&&f?a.add(g.name,g.value):e=="array"||!c&&e=="object"?serialize(a,g,c,b):a.add(b,g)})}var jsonpID=0,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){if("type"in a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){clearTimeout(g),$(c).remove(),delete window[b]},e=function(c){d();if(!c||c=="timeout")window[b]=empty;ajaxError(null,c||"abort",f,a)},f={abort:e},g;return ajaxBeforeSend(f,a)===!1?(e("abort"),!1):(window[b]=function(b){d(),ajaxSuccess(b,f,a)},c.onerror=function(){e("error")},c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(g=setTimeout(function(){e("timeout")},a.timeout)),f)}return $.ajax(a)},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host),settings.url||(settings.url=window.location.toString()),serializeData(settings),settings.cache===!1&&(settings.url=appendQuery(settings.url,"_="+Date.now()));var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=settings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.contentType!==!1&&settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){xhr.onreadystatechange=empty,clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:$.parseJSON(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,xhr.status?"error":"abort",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b,c,d){return $.ajax(parseArguments.apply(null,arguments))},$.post=function(a,b,c,d){var e=parseArguments.apply(null,arguments);return e.type="POST",$.ajax(e)},$.getJSON=function(a,b,c){var d=parseArguments.apply(null,arguments);return d.dataType="json",$.ajax(d)},$.fn.load=function(a,b,c){if(!this.length)return this;var d=this,e=a.split(/\s/),f,g=parseArguments(a,b,c),h=g.success;return e.length>1&&(g.url=e[0],f=e[1]),g.success=function(a){d.html(f?$("<div>").html(a.replace(rscript,"")).find(f):a),h&&h.apply(d,arguments)},$.ajax(g),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a,b){function s(a){return t(a.replace(/([a-z])([A-Z])/,"$1-$2"))}function t(a){return a.toLowerCase()}function u(a){return d?d+a:t(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k,l,m,n,o,p,q,r={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+t(a)+"-",d=e,!1}),k=c+"transform",r[l=c+"transition-property"]=r[m=c+"transition-duration"]=r[n=c+"transition-timing-function"]=r[o=c+"animation-name"]=r[p=c+"animation-duration"]=r[q=c+"animation-timing-function"]="",a.fx={off:d===b&&i.style.transitionProperty===b,speeds:{_default:400,fast:200,slow:600},cssPrefix:c,transitionEnd:u("TransitionEnd"),animationEnd:u("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isPlainObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c=(typeof c=="number"?c:a.fx.speeds[c]||a.fx.speeds._default)/1e3),this.anim(b,c,d,e)},a.fn.anim=function(c,d,e,f){var g,h={},i,t="",u=this,v,w=a.fx.transitionEnd;d===b&&(d=.4),a.fx.off&&(d=0);if(typeof c=="string")h[o]=c,h[p]=d+"s",h[q]=e||"linear",w=a.fx.animationEnd;else{i=[];for(g in c)j.test(g)?t+=g+"("+c[g]+") ":(h[g]=c[g],i.push(s(g)));t&&(h[k]=t,i.push(k)),d>0&&typeof c=="object"&&(h[l]=i.join(", "),h[m]=d+"s",h[n]=e||"linear")}return v=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(w,v)}a(this).css(r),f&&f.call(this)},d>0&&this.bind(w,v),this.size()&&this.get(0).clientLeft,this.css(h),d<=0&&setTimeout(function(){u.each(function(){v.call(this)})},0),this},i=null}(Zepto);
define("jQuery", function(){});

/**
 * 
 * Copyright (C) 2013-2014 Christophe Rosset <tophe@topheman.com> - https://github.com/topheman/sensorsChecker.js
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

/**
 * Mostly all recent browsers expose an api for deviceorientation and devicemotion events.
 * That doesn't mean the device you're on has sensors (accelerometer+gyroscope) to feed them.
 * So to check if the device has sensors, you can't rely on simple feature detection like
 * "ondeviceorientation" in window or "ondevicemotion" in window
 * 
 * This module will let you check if there is really an accelerometer+gyroscope to rely on.
 */

(function (sensorsChecker){
    
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('utils/sensorsChecker',sensorsChecker);
    } else {
        // Browser globals
        window.sensorsChecker = sensorsChecker();
    }
    
})(function(){
    
    var sensorsChecker,
        eventsMap = {
            "devicemotion" : {
                "event" : "DeviceMotionEvent",
                "handler" : function(e){
                    if(e.acceleration && e.acceleration.x !== null && e.acceleration.y !== null && eventsMap.devicemotion.support === false){
                        eventsMap.devicemotion.support = true;
                    }
                },
                support : false
            },
            "deviceorientation" : {
                "event" : "DeviceOrientationEvent",
                "handler" : function(e){
                    if(e.beta !== null && e.gamma !== null && eventsMap.deviceorientation.support === false){
                        eventsMap.deviceorientation.support = true;
                    }
                },
                support : false
            }
        },
        DEFAULT_DELAY = 500;
    
    sensorsChecker = {
        
        /**
         * 
         * @param {String} event "devicemotion"|"deviceorientation"
         * @param {Function} success
         * @param {Function} failure
         * @params {options} options @optional
         * @config {Number} delay
         * @config {RegExp} userAgentCheck
         */
        check: function(event, success, failure, options){
            
            options = options ? options : {};
            options.delay = options.delay ? options.delay : DEFAULT_DELAY;
            
            if(!eventsMap[event]){
                throw new Error("Only devicemotion or deviceorientation events supported");
            }
            if(typeof success !== "function"){
                throw new Error("success callback missing");
            }
            if(typeof failure !== "function"){
                throw new Error("success callback missing");
            }
            
            if(window[eventsMap[event].event]){
                if(options && options.userAgentCheck && options.userAgentCheck instanceof RegExp && options.userAgentCheck.test(window.navigator.userAgent)){
                    success();
                }
                else{
                    window.addEventListener(event, eventsMap[event].handler, false);
                    setTimeout(function(){
                        window.removeEventListener(event, eventsMap[event].handler);
                        if(eventsMap[event].support === true){
                            success();
                        }
                        else{
                            failure();
                        }
                    },options.delay);
                }
            }
            else{
                failure();
            }
            
        },
        
        checkDevicemotion: function(success, failure, options){
            this.check('devicemotion',success, failure, options);
        },
        
        checkDeviceorientation: function(success, failure, options){
            this.check('deviceorientation',success, failure, options);
        }
        
    };
    
    return sensorsChecker;
    
});
/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 *
 * GameManager.js
 * Bootstrap of TophemanBombs game that manages
 * - player inputs (accelerometer)
 * - loops
 * - collisions
 * - screen refresh
 * - sounds
 * - ...
 */

define ('game/GameManager',['game/Stage','vendor/Ball','game/HighScoresManager','jQuery','utils/browserDetect', 'utils/sensorsChecker'],function(Stage,undefined,HighScoresManager,undefined,browserDetect,sensorsChecker){
    
    var GameManager;

    GameManager = function(){
        
        //phonegap (previous version of the game)
        this.appLaunched    = false; //to know if the app has been lauched (is already constructed)
        this.appPaused      = false;

        //game const vars
        var GLOBAL_COLOR            = '#900000';
        var WELCOME_SCREEN_DURATION = 4000;
        var HIGH_SCORES_TOP_NUMBER  = 10;
        var HIGH_SCORES_MANAGER_KEY = 'tophemanBallScores';

        //default vars for level difficulty
        var LEVEL_START                         = 0;
        var DEFAULT_TIME_REMAINING              = 30*1000;//ms
        var DEFAULT_BOMB_BONUS_PER_RING         = 1;
        var DEFAULT_ENEMY_NUMBER_TO_KILL        = 2;
        var ENEMY_NUMBER_INCREASE_LEVEL_RATIO   = 1;
        var MAX_ENEMIES_ON_SCREEN_DEFAULT       = 2;
        var PLAYER_DEFAULT_LIVE_NUMBER          = 3;
        var DEFAULT_SCORE_MALUS_PER_COLLISION   = 1;
        var DEFAULT_SCORE_BONUS_PER_BOMB        = 4;
        var DEFAULT_SCORE_BONUS_PER_ENEMY       = 2;
        
        var canvasRatioForEntities = 1; //will be changed according to the size of the canvas

        //every sizes such as radiuses are defined according to an iphone screen, they are changed by canvasRatioForEntities

        var PLAYER_RADIUS           = 15;
        var PLAYER_MASS             = 1.3;
        var PLAYER_COLOR            = '#0000FF';//blue
        var PLAYER_GRAVITY          = 1;
        var PLAYER_ELASTICITY       = 0.98;
        var PLAYER_FRICTION         = 0.94;
        var PLAYER_LIFETIME         = Infinity;
        var PLAYER_BOUNCING_COLOR   = '#000060';
        var PLAYER_BOUNCING_RATE    = 20;
        var PLAYER_GLOWING_COLOR    = '#9922DD';
        var PLAYER_GLOWING_RATE     = 40;
        var PLAYER_EXPLODING_RADIUS = 80;
        var PLAYER_EXPLODING_RATE   = 40;
        var PLAYER_OPTIONS          = {aging:true,bouncingColor:PLAYER_BOUNCING_COLOR,bouncingRate:PLAYER_BOUNCING_RATE,glowingColor:PLAYER_GLOWING_COLOR,glowingRate:PLAYER_GLOWING_RATE,explodingRadius:PLAYER_EXPLODING_RADIUS,explodingRate:PLAYER_EXPLODING_RATE,explodingAlpha:true};

        var ENEMY_RADIUS            = 10;
        var ENEMY_MASS              = 0.9;
        var ENEMY_COLOR             = '#FF0000';//red
        var ENEMY_GRAVITY           = PLAYER_GRAVITY;//0.6;
        var ENEMY_ELASTICITY        = PLAYER_ELASTICITY;
        var ENEMY_FRICTION          = 0.999;//0.999999
        var ENEMY_LIFETIME          = Infinity;
        var ENEMY_BOUNCING_COLOR    = '#690000';
        var ENEMY_BOUNCING_RATE     = 20;
        var ENEMY_GLOWING_COLOR     = '#9922DD';
        var ENEMY_GLOWING_RATE      = 40;
        var ENEMY_EXPLODING_COLOR   = 'FFFFFF';
        var ENEMY_EXPLODING_RATE    = 20;
        var ENEMY_EXPLODING_RADIUS  = 80;
        var ENEMY_OPTIONS           = {aging:true,bouncingColor:ENEMY_BOUNCING_COLOR,bouncingRate:ENEMY_BOUNCING_RATE,glowingColor:ENEMY_GLOWING_COLOR,glowingRate:ENEMY_GLOWING_RATE,explodingColor:ENEMY_EXPLODING_COLOR,explodingRadius:ENEMY_EXPLODING_RADIUS,explodingRate:ENEMY_EXPLODING_RATE};

        var RING_RADIUS             = 10;
        var RING_MASS               = 0.9;
        var RING_COLOR              = '#3ADF00';
        var RING_GRAVITY            = PLAYER_GRAVITY;
        var RING_ELASTICITY         = PLAYER_ELASTICITY;
        var RING_FRICTION           = 0.99;
        var RING_LIFETIME           = 200;
        var RING_GLOWING_COLOR      = '#21610B';
        var RING_GLOWING_RATE       = 40;
        var RING_OPTIONS            = {aging:true,glowingColor:RING_GLOWING_COLOR,glowingRate:RING_GLOWING_RATE};

        var BOMB_RADIUS             = 10;
        var BOMB_MASS               = 1;
        var BOMB_COLOR              = '#000000';//red
        var BOMB_GRAVITY            = PLAYER_GRAVITY;//0.6;
        var BOMB_ELASTICITY         = PLAYER_ELASTICITY;
        var BOMB_FRICTION           = 1;
        var BOMB_LIFETIME           = Infinity;
        var BOMB_BLINKING_COLOR     = '#B404AE';
        var BOMB_BLINKING_RATE      = 15;
        var BOMB_EXPLODING_COLOR    = '#CFFFFF';
        var BOMB_EXPLODING_RATE     = 30;
        var BOMB_EXPLODING_RADIUS   = 100;
        var BOMB_OPTIONS            = {blinkingColor:BOMB_BLINKING_COLOR,blinkingRate:BOMB_BLINKING_RATE,explodingColor:BOMB_EXPLODING_COLOR,explodingRadius:BOMB_EXPLODING_RADIUS,explodingRate:BOMB_EXPLODING_RATE};
        var BOMB_ARMING_TIME        = 0.5;//number of seconds between the bomb is dropped and it's armed
        var BOMB_EXPLODING_TIME     = 3;//number of seconds between the bomb is armed and it explodes

        var TOUCH_RADIUS            = 30;
        var TOUCH_MASS              = 1;
        var TOUCH_COLOR             = '#FF8000';
        var TOUCH_GRAVITY           = PLAYER_GRAVITY;
        var TOUCH_ELASTICITY        = PLAYER_ELASTICITY;
        var TOUCH_FRICTION          = 1;
        var TOUCH_LIFETIME          = Infinity;
        var TOUCH_EXPLODING_RADIUS  = 45;
        var TOUCH_EXPLODING_COLOR   = '#FFC284';
        var TOUCH_EXPLODING_RATE    = 15;
        var TOUCH_OPTIONS           = {explodingColor:TOUCH_EXPLODING_COLOR,explodingRate:TOUCH_EXPLODING_RATE,explodingRadius:TOUCH_EXPLODING_RADIUS};

        //game vars
        var width                   = null;
        var height                  = null;
        var canvas                  = null;
        var ctx                     = null;
        var level                   = 0;
        var score                   = 0;
        var highScoresManager       = null;
        var iterator                = 0;
        var looping                 = false;
        var inputX                  = 0;
        var inputY                  = 0;
        var pauseAllowed            = false;
        var landScapeModeOn         = browserDetect.isMobileDevice() ? true : false;
        var timeRemaining           = null;
        var currentTimeStamp,lastTimeStamp;
        var flashMessages           = [];
        var tmpHighScoreRank        = null;

        //game/player vars
        var playerBombsAvailable    = null;
        var playerFireCoordinates   = false;
        var playerLives             = PLAYER_DEFAULT_LIVE_NUMBER;

        //game/level vars/attributes
        var player     = null;
        var enemies    = [];
        var rings      = [];
        var bombs      = [];
        var touchs     = [];

        var maxEnemiesOnScreen              = null;
        var numberOfEnemiesLastingToKill    = null;
        var numberOfEnemiesLastingToAdd     = null;
        var numberOfEnemiesOnThisLevel      = null;
        var bombsBonusPerRing               = null;//number of bombs aquired per rings
        var scoreMalusPerCollision          = null;//number of points substract
        var scoreBonusPerBomb               = null;
        var scoreBonusPerEnemy              = null;

        //device
        var DEVICEMOTION_INPUT_RATIO        = 0.2;
        var html5DeviceMotionSupport        = false;
        var html5DeviceOrientationSupport   = false;

        //sounds (initialized in initSounds)
        var ACTIVATE_SOUND_EFFECTS      = true;
        var SOUND_BALL_COLLISION_FILE   = "./assets/audio/bounce-ball.wav";
        var SOUND_BORDER_COLLISION_FILE = "./assets/audio/bounce-rail.wav";
        var SOUND_EXPLOSION_FILE        = "./assets/audio/explosion.wav";
        var html5SoundSupport           = false;
        var sounds                      = {};

        //screens
        var SCREEN_LEVEL_DURATION       = 2500;
        var SCREEN_FLASH_RATE           = 150;
        var screenOn                    = null;//which screen is on if not playing (intro, highscores, game over ...) used in the WelcomeScreenListeners
        var welcomeScreensTimer         = null;//used for setTimeouts (to be able to clear the timer if canceled)
        var flagTimeRunningOut          = false;
        var flagBombsRunningOut         = false;
        var images                      = {};

        this.init = function(){

            //scrollTop with firefox mobile is buggy
            if(browserDetect.isMobileDevice() && !browserDetect.isFirefox() && !browserDetect.isAndroidTablet() && !browserDetect.isIPad()){
                window.scrollTo(0, /Android/.test(navigator.userAgent) ? 1 : 0);
            }

            var self = this;
            self.initDialog();
            Stage.prepareStage(async function(stageCanvas){
                accelerometerOK = await self.initMotionListeners();
                //initialize GameManager canvas var from this closure
                canvas = stageCanvas;
                //initialize width/height vars from this closure
                width   = canvas.width;
                height  = canvas.height;
                self.setCanvasRatioForEntities(canvas);
                ctx = canvas.getContext("2d");
                highScoresManager = new HighScoresManager(HIGH_SCORES_TOP_NUMBER,{localStorageKeyName:HIGH_SCORES_MANAGER_KEY});
                self.initOrientationCss();
                self.initSounds();
                // self.initKeyboardListeners();
                self.initWelcomeScreens('welcome');
                if (!accelerometerOK) {
                    self.dialog.openModal(`
                        <p><strong>No accelerometer</strong> was detected on your device.</p>
                        <p>Please activate <strong>"Motion and Orientation"</strong> feature in\nSettings > Safari or Settings > Chrome</p>
                        <p style="text-align:center;"><button onclick="document.querySelector('dialog').close()">OK</button></p>
                    `);
                }
            });
            this.appLaunched = true;
        };
        
        this.setCanvasRatioForEntities = function(canvas){
            
            canvasRatioForEntities = canvas.height/320;
            PLAYER_RADIUS = parseInt(PLAYER_RADIUS*canvasRatioForEntities);
            PLAYER_EXPLODING_RADIUS = parseInt(PLAYER_EXPLODING_RADIUS*canvasRatioForEntities);
            PLAYER_OPTIONS.explodingRadius = parseInt(PLAYER_OPTIONS.explodingRadius*canvasRatioForEntities);
            ENEMY_RADIUS = parseInt(ENEMY_RADIUS*canvasRatioForEntities);
            ENEMY_EXPLODING_RADIUS = parseInt(ENEMY_EXPLODING_RADIUS*canvasRatioForEntities);
            ENEMY_OPTIONS.explodingRadius = parseInt(ENEMY_OPTIONS.explodingRadius*canvasRatioForEntities);
            BOMB_RADIUS = parseInt(BOMB_RADIUS*canvasRatioForEntities);
            BOMB_EXPLODING_RADIUS = parseInt(BOMB_EXPLODING_RADIUS*canvasRatioForEntities);
            BOMB_OPTIONS.explodingRadius = parseInt(BOMB_OPTIONS.explodingRadius*canvasRatioForEntities);
            TOUCH_RADIUS = parseInt(TOUCH_RADIUS*canvasRatioForEntities);
            TOUCH_EXPLODING_RADIUS = parseInt(TOUCH_EXPLODING_RADIUS*canvasRatioForEntities);
            TOUCH_OPTIONS.explodingRadius = parseInt(TOUCH_OPTIONS.explodingRadius*canvasRatioForEntities);
            RING_RADIUS = RING_RADIUS*canvasRatioForEntities;
            
        };

        /**
         * Expose pause function to sleep the app
         */
        this.pause = function(){
            if(this.appLaunched === true && looping === true){
                this.toggleLoop();
            }
            //fallback if it was on a screen display
            this.stopLoop();
            this.appPaused = true;
        };

        /**
         * Expose resume function to wake up the app
         */
        this.resume = function(){
            this.appPaused = false;
        };

        this.initDialog = function() {
            this.dialog = makeDialog();
        }

        this.initOrientationCss = function(){
            if(browserDetect.isMobileDevice()){
                $('#orientationlock').bind('touchmove',function(e){e.preventDefault();});
            }
        };

        this.initSounds = function(){
            var a = document.createElement('audio');
            html5SoundSupport       = !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, '')) && ACTIVATE_SOUND_EFFECTS;
            if(html5SoundSupport === true){
                sounds['soundBallCollision'] = new Audio(SOUND_BALL_COLLISION_FILE);
                sounds['soundBorderCollision'] = new Audio(SOUND_BORDER_COLLISION_FILE);
                sounds['soundExplosion'] = new Audio(SOUND_EXPLOSION_FILE);
            }
        };

        this.initMotionListeners = function(){

            return new Promise((res, rej) => {
                sensorsChecker.checkDeviceorientation(function() {
                    return res(true)
                }, function() {
                    return res(false)
                })
            }).then(accelerometerOK => {
                if(window.DeviceOrientationEvent){
                    html5DeviceOrientationSupport = accelerometerOK;
                    var deviceOrientationCallback;
                    // not a mobile or a firefox tablet (a chrome tablet)
                    if(window.orientation === 0){
                    // alert('debug infos : Android device or window.DeviceMotionEvent missing\n\nwindow.orientation : '+window.orientation);
                        deviceOrientationCallback = function(e){
                            inputX = e.gamma/20;
                            inputY = e.beta/20;
                        };
                    }
                    // not a firefox tablet (a mobile)
                    else{
                    // alert('debug infos : Android device or window.DeviceMotionEvent missing\n\nwindow.orientation : '+window.orientation);
                        deviceOrientationCallback = function(e){
                            inputX = e.beta/20;
                            inputY = -e.gamma/20;
                        };
                    }
                    window.addEventListener('deviceorientation',deviceOrientationCallback,false);
                    return accelerometerOK;
                }
                else if (window.DeviceMotionEvent) {
                    html5DeviceMotionSupport = accelerometerOK;
                    //mac or desktop with emulator
                    // alert('debug infos : iOS or desktop emulator');
                    window.addEventListener('devicemotion', function(e){
                        inputX = e.accelerationIncludingGravity.x*DEVICEMOTION_INPUT_RATIO;
                        inputY = -e.accelerationIncludingGravity.y*DEVICEMOTION_INPUT_RATIO;
                    },false);
                    return accelerometerOK;
                }
            })
        };
        
//        this.initKeyboardListeners = function(){
//            
//            $(window).keydown(function(e){
//                console.info(e);
//            });
//            
//        };

        /**
         * Creates getCoordinatesFromEvent function that will manage click/touchstart/touchend events and return an object coordinates
         */
        var getCoordinatesFromEvent;
        
        if(browserDetect.isMobileDevice()){
            getCoordinatesFromEvent = function(e){
                return {
                    x:e.touches[0].pageX,
                    y:e.touches[0].pageY
                };
            };
        }
        else{
            getCoordinatesFromEvent = function(e){
                return {
                    x:e.pageX,
                    y:e.pageY
                };
            };
        }

        /**
        * @param {Object} coordinates {x:{Int},y:{Int}}
        * @param {Object} topLeftDot {x:{Int},y:{Int}}
        * @param {Object} bottomRightDot {x:{Int},y:{Int}}
        * @return {Boolean}
        */
        function clickIsInside(coordinates,topLeftDot,bottomRightDot){
            if(coordinates.x > topLeftDot.x && coordinates.x < bottomRightDot.x && coordinates.y > topLeftDot.y && coordinates.y < bottomRightDot.y) {
                return true;
            }
            else {
                return false;
            }
        }

        /**
         * Adds the mouse / touch listeners for the game part
         */
        this.addGameScreenListeners = function(){
            screenOn = null;
            var self = this;
            var eventTargeted = browserDetect.isMobileDevice() ? 'touchstart touchend' : 'click';
            $('canvas').bind(eventTargeted,function(e){
                //on pauseScreen click restart button
                if(looping === false && hasClickedRestartButton(getCoordinatesFromEvent(e))){
    //                setTimeout(function(){self.initWelcomeScreens('home');},300);//setTimeout to avoid multitap
                    self.initWelcomeScreens('home');
                }
                //on pauseScreen click any other place -> resume
                else if(looping === false){
                    self.toggleLoop();
                }
                //on loop click pause button -> pause the loop
                else if(looping === true && hasClickedPauseButton(getCoordinatesFromEvent(e))){
                    self.toggleLoop();
                }
                //player fires
                else{
                    self.playerFires(getCoordinatesFromEvent(e));
                }
            });

            //prevents moving the viewport in mobile browser mode
            if(browserDetect.isMobileDevice()){
                $('canvas').bind('touchmove',function(e){e.preventDefault();});
            }

            /**
             * @param {Object} coordinates {x:{Int},y:{Int}}
             * @return {Boolean}
             */
            function hasClickedRestartButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:width-60,y:0},{x:width,y:60}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-60,y:height-60},{x:width,y:height}) ) );
            }

            /**
             * @param {Object} coordinates {x:{Int},y:{Int}}
             * @return {Boolean}
             */
            function hasClickedPauseButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:0},{x:23,y:30}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-23,y:0},{x:width,y:30}) ) );
            }

        };

        /**
         * Removes the mouse / touch listeners added previously for the game part
         */
        this.removeGameScreenListeners = function(){
            var eventTargeted = browserDetect.isMobileDevice() ? 'touchstart touchend' : 'click';
            $('canvas').unbind(eventTargeted);

            if(browserDetect.isMobileDevice()){
                $('canvas').unbind('touchmove',function(e){e.preventDefault();});
            }
        };

        this.addWelcomeScreenListeners = function(){
            var self = this;
            var eventTargeted = browserDetect.isMobileDevice() ? 'click' : 'click';
            $('canvas').bind(eventTargeted,function(e){
                switch(screenOn){
                    case 'welcome':
                        clearTimeout(welcomeScreensTimer);//cancels the automatic display
                        self.initWelcomeScreens('home');
                        break;
                    case 'home':
                        if(hasClickedPlayButton({x:e.pageX,y:e.pageY})){
                            self.initGame();
                            self.nextLevel();
                        }
                        if(hasClickedHighScoresButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('highScores');
                        }
                        if(hasClickedInstructionsButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('instructions1');
                        }
                        if(hasClickedCreditsButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('credits');
                        }
                        break;
                    case 'gameOver':
                        self.initWelcomeScreens('highScores');
                        break;
                    case 'highScores':
                        self.initWelcomeScreens('home');
                        break;
                    case 'credits':
                        if(hasClickedCreditsBackButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('home');
                        }
                        if(hasClickedBallTophemanComButton({x:e.pageX,y:e.pageY})){
                            window.open('http://bombs.topheman.com', '_blank');
                        }
                        if(hasClickedTwitterButton({x:e.pageX,y:e.pageY})){
                            window.open('http://twitter.com/topheman', '_blank');
                        }
                        if(hasClickedBlogButton({x:e.pageX,y:e.pageY})){
                            window.open('http://blog.topheman.com', '_blank');
                        }
                        break;
                    case 'instructions1':
                        self.initWelcomeScreens('instructions2');
                        break;
                    case 'instructions2':
                        self.initWelcomeScreens('instructions3');
                        break;
                    case 'instructions3':
                        self.initWelcomeScreens('instructions4');
                        break;
                    case 'instructions4':
                        self.initWelcomeScreens('instructions5');
                        break;
                    case 'instructions5':
                        self.initWelcomeScreens('home');
                        break;
                }
            });

            //prevents moving the viewport in mobile browser mode
            if(browserDetect.isMobileDevice())
                $('canvas').bind('touchmove',function(e){e.preventDefault();});

            function hasClickedPlayButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:60},{x:width,y:height/2-100+50}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)+100-50,y:0},{x:width-60,y:height}) ) );
            }

            function hasClickedHighScoresButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2-10-40},{x:width,y:height/2-10+40}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)+10-40,y:0},{x:width-(width/2)+10+40,y:height}) ) );
            }

            function hasClickedInstructionsButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+70-30},{x:width,y:height/2+70+30}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-70-30,y:0},{x:width-(width/2)-70+30,y:height}) ) );
            }

            function hasClickedCreditsButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+130-20},{x:width,y:height}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:0,y:0},{x:width-(width/2)-130+20,y:height}) ) );
            }

            function hasClickedCreditsBackButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:0},{x:width,y:height/2-16}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)+16,y:0},{x:width,y:height}) ) );
            }

            function hasClickedBallTophemanComButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2-16},{x:width,y:height/2+16}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-16,y:0},{x:width-(width/2)+16,y:height}) ) );
            }

            function hasClickedTwitterButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+90},{x:width,y:height/2+90+28}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-90-28,y:0},{x:width-(width/2)-90,y:height}) ) );
            }

            function hasClickedBlogButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+120},{x:width,y:height/2+120+28}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-120-28,y:0},{x:width-(width/2)-120,y:height}) ) );
            }
        };

        this.removeWelcomeScreenListeners = function(){
            var eventTargeted = browserDetect.isMobileDevice() ? 'click' : 'click';
            $('canvas').unbind(eventTargeted);

            if(browserDetect.isMobileDevice()){
                $('canvas').unbind('touchmove',function(e){e.preventDefault();});
            }      
        };

        /**
         * @param {String} screen Which screen init | default : home
         */
        this.initWelcomeScreens = function(screen){
            screen = screen || 'home';
            //remove any previous screen listeners if we were not on a welcomeScreen
            if(screenOn === null){
                this.removeGameScreenListeners();
                this.addWelcomeScreenListeners();
            }

            //launch the selected welcome screen
            welcomeScreensDrawingFunction[screen]();

            //then, once the welcome screen passed, the "play" button should initGame and launch the first level as this!
    //        this.initGame();
    //        this.nextLevel();
        };

        //init game
        this.initGame = function(){
            //init some Global game
            level           = LEVEL_START;
            score           = 0;
            iterator        = 0;
            playerLives     = PLAYER_DEFAULT_LIVE_NUMBER;
            playerBombsAvailable  = 0;
            pauseAllowed    = false;
            looping         = false;
            player          = null;
            enemies.length  = 0;
            rings.length    = 0;
            bombs.length    = 0;
            touchs.length   = 0;
            tmpHighScoreRank = null;//reinit previous highScoreRank
            if(screenOn !== null){
                this.removeWelcomeScreenListeners();
            }
            //this.removeGameScreenListeners();
            this.addGameScreenListeners();
        };

        /**
         * Prepares the next level and lauch the loop
         * 
         * @param {Boolean} sameLevel If flag to true - will stay on the same level (to use when restarting a level after loosing a life)
         */
        this.nextLevel = function(sameLevel){
            var self = this;
            if(sameLevel !== true)
                level++;
            this.prepareLevel(level,sameLevel);
            playInfosMessage(drawLevelScreen,SCREEN_LEVEL_DURATION,function(){
                pauseAllowed = true;
                self.startLoop();
                $(canvas).removeClass('pause');
                $(canvas).addClass('loop');
            });
        };

        this.prepareLevel = function(level,sameLevel){
            this.preparePlayer(level);
            this.prepareEnemies(level);
            this.prepareRings(level);
            this.prepareBombs(level);
            flashMessages.length = 0;
            iterator             = 0;
            //init floating level vars according to difficulty
            scoreMalusPerCollision      = DEFAULT_SCORE_MALUS_PER_COLLISION;
            scoreBonusPerBomb           = DEFAULT_SCORE_BONUS_PER_BOMB;
            scoreBonusPerEnemy          = DEFAULT_SCORE_BONUS_PER_ENEMY;
            maxEnemiesOnScreen          = getMaxEnemiesOnScreen();
            bombsBonusPerRing           = DEFAULT_BOMB_BONUS_PER_RING;
            numberOfEnemiesOnThisLevel  = getNumberOfEnemiesOnThisLevel();
            playerBombsAvailable        = getBombsAvailable(numberOfEnemiesOnThisLevel);
            timeRemaining               = getTimeRemaining(numberOfEnemiesOnThisLevel,maxEnemiesOnScreen);
            flagTimeRunningOut          = false;
            flagBombsRunningOut         = false;
            //if we restart the level after loosing it, don't reset the enemies counter
            if(sameLevel !== true)
                numberOfEnemiesLastingToKill = numberOfEnemiesOnThisLevel;
            numberOfEnemiesLastingToAdd = numberOfEnemiesLastingToKill;

            function getNumberOfEnemiesOnThisLevel(){
                return DEFAULT_ENEMY_NUMBER_TO_KILL + (level-1)*ENEMY_NUMBER_INCREASE_LEVEL_RATIO;
            }

            function getMaxEnemiesOnScreen(){
                return Math.ceil(MAX_ENEMIES_ON_SCREEN_DEFAULT+level/5);
            }

            function getTimeRemaining(numberOfEnemiesOnThisLevel,maxEnemiesOnScreen){
                return DEFAULT_TIME_REMAINING*Math.pow(numberOfEnemiesOnThisLevel/maxEnemiesOnScreen,0.7);
            }

            function getBombsAvailable(numberOfEnemiesOnThisLevel){
                return level === 1 ? numberOfEnemiesOnThisLevel*2 : Math.ceil(Math.pow(numberOfEnemiesOnThisLevel*2,0.6));
            }
        };

        this.preparePlayer = function(level){
            player = new Ball(200,200,PLAYER_RADIUS,PLAYER_MASS,PLAYER_GRAVITY,PLAYER_ELASTICITY,PLAYER_FRICTION,PLAYER_COLOR,PLAYER_LIFETIME,PLAYER_OPTIONS);
            playerFireCoordinates = false;
        };

        this.prepareEnemies = function(level){
            enemies.length = 0;
        };

        this.prepareRings = function(level){
            rings.length = 0;
        };

        this.prepareBombs = function(level){
            bombs.length      = 0;
            touchs.length     = 0;
        };

        /**
         * Adds an enemy if there are still enemies to kill and yet, not too much enemies on the screen
         */
        this.addEnemy = function(flag,level){
            var enemy;
            //numberOfEnemiesOnThisLevel
            if((numberOfEnemiesLastingToAdd > 0 && numberOfEnemiesLastingToKill >= numberOfEnemiesLastingToAdd && enemies.length < maxEnemiesOnScreen) || flag === true){
                enemy = new Ball(200,200,ENEMY_RADIUS,ENEMY_MASS,ENEMY_GRAVITY,ENEMY_ELASTICITY,ENEMY_FRICTION,ENEMY_COLOR,ENEMY_LIFETIME,ENEMY_OPTIONS);
                enemy.setRandomPositionAndSpeedInBounds(width, height, level);
                enemies.push(enemy);
                numberOfEnemiesLastingToAdd--;
            }
        };

        this.addRing = function(enemy){
            var ring;
            ring = new Ball(enemy.getX(),enemy.getY(),RING_RADIUS,RING_MASS,RING_GRAVITY,RING_ELASTICITY,RING_FRICTION,RING_COLOR,RING_LIFETIME,RING_OPTIONS);
            ring.setVelocityX(Math.random()).setVelocityX(Math.random());
            ring.glow();
            rings.push(ring);
        };

        this.addBomb = function(player){
            //add bomb
            var bomb;
            bomb = new Ball(player.getX(), player.getY(), BOMB_RADIUS, BOMB_MASS, BOMB_GRAVITY, BOMB_ELASTICITY, BOMB_FRICTION, BOMB_COLOR, BOMB_LIFETIME, BOMB_OPTIONS);
            bomb.armingTime = (new Date()).getTime() + BOMB_ARMING_TIME*1000;
            bomb.explodingTime = (new Date()).getTime() + (BOMB_ARMING_TIME+BOMB_EXPLODING_TIME)*1000;
            bomb.armed = false;
            bombs.push(bomb);
            playerBombsAvailable--;
            //reset playerFireCoordinates
            playerFireCoordinates = false;

            //add touch at the same place of the bomb
            this.addTouch(player);
        };

        this.addTouch = function(coordinates){
            var touch;
            touch = new Ball(coordinates.x,coordinates.y,TOUCH_RADIUS,TOUCH_MASS,TOUCH_GRAVITY,TOUCH_ELASTICITY,TOUCH_FRICTION,TOUCH_COLOR,TOUCH_LIFETIME,TOUCH_OPTIONS);
            touch.explode();
            touchs.push(touch);
            //reset playerFireCoordinates
            playerFireCoordinates = false;
        };

        this.gameOver = function(){
            tmpHighScoreRank = highScoresManager.addHighScore(score, level);
            this.initWelcomeScreens('gameOver');
        };

        /**
         * If level timeouts, display timeout screen and reload the level (if player has lives left), if not game over
         */
        this.manageTimeOut = function(){
            var self = this;
            if(timeRemaining <= 0){
                timeRemaining = 0;//adjust timeRemaining
                this.stopLoop();
                pauseAllowed = false;
                if(level > 1)
                    playerLives--;
                playInfosMessage(drawTimeOutScreen,SCREEN_LEVEL_DURATION,function(){
                    self.managePlayerDies();
                });
            }
        };

        /**
         * If no more bombs after the last bomb has exploded and there is no enemy exploding, reload the level (if player has lives left), if not game over
         */
        this.manageBombsOut = function(){
            var self = this;
            var i,enemyStillExploding = false;
            if(playerBombsAvailable === 0 && bombs.length === 0 && rings.length === 0){
                for(i=0;i<enemies.length;i++){
                    if(enemies[i].isExploding() === true)
                        enemyStillExploding = true;
                }
                if(enemyStillExploding === false){
                    this.stopLoop();
                    pauseAllowed = false;
                    if(level > 1)
                        playerLives--;
                    playInfosMessage(drawBombsOutScreen,SCREEN_LEVEL_DURATION,function(){
                        self.managePlayerDies();
                    });
                }
            }
        };

        /**
         * If level timeouts, display timeout screen and reload the level (if player has lives left), if not game over
         */
        this.managePlayerExploded = function(){
            var self = this;
            if(player.isDead()){
                this.stopLoop();
                pauseAllowed = false;
                if(level > 1)
                    playerLives--;
                playInfosMessage(drawPlayerExplodedScreen,SCREEN_LEVEL_DURATION,function(){
                    self.managePlayerDies();
                });
            }
        };

        /**
         * If the player has killed all enemies, goes to the next level
         */
        this.manageLevelFinished = function(){
            var self = this;
            if(numberOfEnemiesLastingToKill === 0){
                this.stopLoop();
                pauseAllowed = false;
                var bombsBonus = playerBombsAvailable*scoreBonusPerBomb;
                score = score + bombsBonus;
                playInfosMessage(function(){drawBombsBonusScreen(bombsBonus);},SCREEN_LEVEL_DURATION,function(){
                    self.nextLevel();
                });
            }
        };

        this.managePlayerDies = function(){
            if(playerLives === 0){
                this.gameOver();
            }
            else{
                //restart same level
                this.nextLevel(true);
            }
        };

        /**
         * @param {Function} drawingFunction
         * @param {Int} duration
         * 
         * Adds a drawing callback - drawinbg function 1rst parameter must be line height
         */
        function addFlashMessage(drawingFunction,duration){
            var flashMessageInfos = {};
            flashMessageInfos.display = duration || SCREEN_FLASH_RATE;
            flashMessageInfos.callback = drawingFunction;
            flashMessages.push(flashMessageInfos);
        }

        function playInfosMessage(drawingFunction,duration,callback){
            drawingFunction();
            setTimeout(callback,duration);
        }

        this.playerFires = function(coordinates){
            playerFireCoordinates = coordinates;
        };


        this.startLoop = function(){
            //prevent double loops in parallele
            if(looping === false){
                looping = true;
                if(this.appPaused === true){//prevent starting the app in background after quit on level screen
                    clearAllContext();
                    this.toggleLoop();
                }
                else
                    this.loop();
            }

        };

        this.stopLoop = function(){
            //prevent double stop loop
            if(looping === true){
                looping = false;
                currentTimeStamp = null;
            }

        };

        this.toggleLoop = function(){
            if(pauseAllowed === false)
                return;
            if(looping === true){
                this.stopLoop();
                $(canvas).removeClass('loop');
                $(canvas).addClass('pause');
                drawPauseScreen();
            }
            else{
                $(canvas).removeClass('pause');
                $(canvas).addClass('loop');
                this.startLoop();
            }
        };

        /**
         * Create the loop function called in the requestAnimationFrame only once to optimize garbage collection
         */
        this.loopCallbackFunction = (function(self){
            return function(){
                self.loop();
            };
        })(this);

        this.loop = function(){
            //manages start/stop/pause/resume loop
            var self = this;
            var i,j;//array iterators
            if(looping === true)
                window.requestAnimationFrame(this.loopCallbackFunction);
            else
                return;//if we're not looping, we don't call the next loop AND we don't execute this loop

            iterator++;
            lastTimeStamp = currentTimeStamp || (new Date()).getTime();//timeStamp of last loop
            currentTimeStamp = (new Date()).getTime();//timeStamp of current loop
            timeRemaining = timeRemaining - (currentTimeStamp - lastTimeStamp);//update timeRemaining

            //if timeRemaining == 10 let the user know
            if(flagTimeRunningOut === false && (timeRemaining/1000).toFixed(0) === 10){
                addFlashMessage(drawTimeRunningOutMessage);
                flagTimeRunningOut = true;
            }

            //@todo put in a separate method ?
            if(flagBombsRunningOut === false && playerBombsAvailable === 1){
                addFlashMessage(drawBombsRunningOutMessage);
                flagBombsRunningOut = true;
            }
            else if(playerBombsAvailable > 1 && flagBombsRunningOut === true){
                flagBombsRunningOut = false;
            }

            //help messages on level 1
            if(level === 1){
                if(iterator === 1)
                    addFlashMessage(drawTiltPhoneNotificationMessage,SCREEN_FLASH_RATE*2);
                if(iterator === 1+SCREEN_FLASH_RATE*2.5)
                    addFlashMessage(drawTapScreenNotificationMessage,SCREEN_FLASH_RATE*2);
                if(iterator === 1+SCREEN_FLASH_RATE*5)
                    addFlashMessage(drawGrabDotsNotificationMessage,SCREEN_FLASH_RATE*2);
            }

            //check state of bombs / arm them / trigger their explosion
            if(bombs.length > 0)
                for(i=0;i<bombs.length;i++){
                    if(bombs[i].armed === false && currentTimeStamp > bombs[i].armingTime){
                        armBomb(bombs[i]);
                    }
                    else if(bombs[i].armed === true && bombs[i].isExploding() === false && currentTimeStamp > bombs[i].explodingTime){
                        explodeBomb(bombs[i]);
                    }
                }

            //remove dead touchs
            if(touchs.length > 0)
                for(i=touchs.length-1;i>=0;i--){
                    if(touchs[i].isDead() === true)
                        touchs.splice(i,1);
                }

            //remove dead bombs
            if(bombs.length > 0)
                for(i=bombs.length-1;i>=0;i--){
                    if(bombs[i].isDead() === true)
                        bombs.splice(i,1);
                }

            //remove dead enemies
            if(enemies.length > 0)
                for(i=enemies.length-1;i>=0;i--){
                    if(enemies[i].isDead() === true){
                        this.addRing(enemies[i]);//a ring appears when an enemy dies
                        numberOfEnemiesLastingToKill--;//update the number of ennemies still to kill
                        enemies.splice(i,1);
                    }
                }

            //remove dead rings
            if(rings.length > 0)
                for(i=rings.length-1;i>=0;i--){
                    if(rings[i].isDead() === true)
                        rings.splice(i,1);
                }

            //player adds bombs/touchs
            if(playerBombsAvailable > 0 && playerFireCoordinates !== false)
                this.addBomb(player);
            else if(playerFireCoordinates !== false)
                this.addTouch(playerFireCoordinates);

            //add enemies
            this.addEnemy();

            //move touchs (in order to explode them)
            for(i=0;i<touchs.length;i++){
                touchs[i].move();
            }

            //move bombs (in order to explode them)
            for(i=0;i<bombs.length;i++){
                bombs[i].move();
            }

            //move player
            if(player.isExploding() === false)
                player.move(inputX,inputY);
            else
                player.move();

            //move enemies
            for(i=0;i<enemies.length;i++){
                enemies[i].move();
            }

            //move rings randomly
            for(i=0;i<rings.length;i++){
                if(iterator%60 === 0)
                    rings[i].move((Math.random()-0.5)*5,(Math.random()-0.5)*5);
                else
                    rings[i].move();
            }

            //check for collisions ->

            //player vs borders
            if(player.isExploding() === false){
                player.manageStageBorderCollision(width, height,playSoundBorderCollision);
            }

            //player vs enemies
            for(i=0;i<enemies.length;i++){
                if(player.isExploding() === false && player.checkBallCollision(enemies[i]) === true){
                    if(enemies[i].isExploding() === true){
                        explodePlayer(player);
                        break;
                    }
                    else{
    //                    if(player.isBouncing() == false){
    //                        addFlashMessage(drawEnemyCollisionMessage);
    //                        score = score - scoreMalusPerCollision;
    //                        if(score < 0) score = 0;
    //                    }
                        player.resolveBallCollision(enemies[i]);
                        playSoundBallCollision();
                    }
                }
            }

            //enemies vs borders
            for(i=0;i<enemies.length;i++){
                if(enemies[i].isExploding() === false)
                    enemies[i].manageStageBorderCollision(width, height,playSoundBorderCollision);
            }

            //rings vs borders
            for(i=0;i<rings.length;i++){
                rings[i].manageStageBorderCollision(width, height,playSoundBorderCollision);
            }

            //enemies vs enemies
            if(enemies.length > 1){
                for(i=0;i<enemies.length;i++){
                    for(j=i+1;j<enemies.length;j++){
                        if(enemies[i].isExploding() === false && enemies[j].isExploding() === false && enemies[i].checkBallCollision(enemies[j]) === true){
                            enemies[i].resolveBallCollision(enemies[j],playSoundBallCollision);
                        }
                    }
                }
            }

            //player vs rings
            if(rings.length > 0){
                for(i=rings.length-1;i>=0;i--){
                    if(player.checkBallCollision(rings[i])){
                        //remove the ring
                        rings.splice(i,1);
                        playerBombsAvailable = playerBombsAvailable + bombsBonusPerRing;
                        addFlashMessage(drawRingCollisionMessage);
                    }
                }
            }

            //player vs bombs
            if(bombs.length > 0 && player.isExploding() === false){
                for(i=0;i<bombs.length;i++){
                    if(player.isExploding() === false && bombs[i].isExploding() === true && player.checkBallCollision(bombs[i])){
                        explodePlayer(player);
                        break;
                    }
                }
            }

            //bombs vs enemies
            if(bombs.length > 0){
                for(i=0;i<bombs.length;i++){
                    for(j=0;j<enemies.length;j++){
                        if(bombs[i].armed === true && bombs[i].isDead() === false && bombs[i].checkBallCollision(enemies[j])){
                            if(bombs[i].isExploding() === false)
                                explodeBomb(bombs[i]);
                            if(enemies[j].isExploding() === false){
                                explodeEnemy(enemies[j]);
                                score = score + scoreBonusPerEnemy;
                            }
                        }
                    }
                }
            }

            //draw

            //clear canvas
            clearAllContext();

            //draw touchs
            for(i=0;i<touchs.length;i++){
                touchs[i].draw(ctx);
            }

            //draw rings
            for(i=0;i<rings.length;i++){
                rings[i].draw(ctx);
            }

            //draw player
            player.draw(ctx);

            //draw bombs
            for(i=0;i<bombs.length;i++){
                bombs[i].draw(ctx);
            }

            //draw enemies
            for(i=0;i<enemies.length;i++){
                enemies[i].draw(ctx);
            }

            //staticDraws
            drawPauseButton();
            drawPlayerInfosTop();
            drawPlayerInfosBottom();

            //drawing flash messages if exist
            drawFlashMessages();

            //manage the duration of the flashMessages
            if(flashMessages.length > 0)
                for(i=0;i<flashMessages.length;i++){
                    flashMessages[i].display--;
                }

            //remove the expired flashMessages
            if(flashMessages.length > 0)
                for(i=flashMessages.length-1;i>=0;i--){
                    if(flashMessages[i].display < 0)
                        flashMessages.splice(i,1);
                }

            //tests
            this.manageLevelFinished();
            this.manageTimeOut();
            this.manageBombsOut();
            this.managePlayerExploded();

        };

        /**
         * @param {Ball} bomb
         */
        function armBomb(bomb){
            bomb.blink();
            bomb.armed = true;
        }

        /**
         * @param {Ball} bomb
         */
        function explodeBomb(bomb){
            bomb.explode();
        }

        /**
         * @param {Ball} enemy
         */
        function explodeEnemy(enemy){
            enemy.setVelocityX(0).setVelocityY(0).explode();
            playSoundExplosion();
        }

        /**
         * @param {Ball} player
         */
        function explodePlayer(player){
            player.setVelocityX(0).setVelocityY(0).explode();
            playSoundExplosion();
        }

        function playSound(soundId,volume,time){
            if(html5SoundSupport === true){
                try{
                    sounds[soundId].currentTime   = time || 0;
                    sounds[soundId].volume        = volume || 1;
                    sounds[soundId].play();
                }
                catch(e){
    //                console.info('html5 sound.play error ',e);
                }
            }
        }

        function playSoundBallCollision(){
            playSound('soundBallCollision');
        }

        function playSoundBorderCollision(){
            playSound('soundBorderCollision',0.1);
        }

        function playSoundExplosion(){
            playSound('soundExplosion');
        }

        function clearAllContext(){
            ctx.clearRect ( 0 , 0 , width , height );
        }

        function drawTopRightCorner(character){
            ctx.font        = 'bold italic 60px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            if(isLandScapeModeOn()) {
                flipCanvas();
                ctx.fillText(character,height-60,50);//↶
                flipBackCanvas();
            }
            else{
                ctx.fillText(character,width-60,50);//↶
            }
        }

        function drawPauseScreen(){
            var textMessageWidth = 253;
            ctx.font        = 'bold italic 60px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            drawCenteredText('PAUSED', 60, textMessageWidth);
            drawCenteredText('\u2192', 60, 50,0,50);//→
            drawTopRightCorner('\u21b6');
        }

        function drawLevelScreen(){
            var textMessageWidth = 253;
            clearAllContext();
            drawCenteredText('Level : '+level, 60, textMessageWidth);
            drawCenteredText(numberOfEnemiesLastingToKill+' enemies / '+(timeRemaining/1000).toFixed(0)+' seconds / '+playerBombsAvailable+' bombs', 20, 350,0,80);
        }

        function drawPlayerInfosTop(){
            ctx.font        = 'bold italic 15px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            var textMessageHeight = 15, hearts = '';
            var text = 'Bombs : '+playerBombsAvailable+' - Time : '+((timeRemaining/100)/10).toFixed(1)+'s - Enemies : '+(numberOfEnemiesOnThisLevel-numberOfEnemiesLastingToKill)+'/'+numberOfEnemiesOnThisLevel;
            for(var i=0; i<playerLives;i++)
                hearts = hearts+' \u2665';
            text = text + (hearts !== '' ? ' - '+hearts : '');
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText(text,30,5+textMessageHeight);
                flipBackCanvas();
            }
            else{
                ctx.fillText(text,30,5+textMessageHeight);
            }
        }

        function drawPlayerInfosBottom(){
            ctx.font        = 'bold italic 15px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            var textMessageHeight = 15;
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText('Level : '+level+' - Score : '+score,5,width-textMessageHeight/2);
                flipBackCanvas();
            }
            else{
                ctx.fillText('Level : '+level+' - Score : '+score,5,height-textMessageHeight/2);
            }
        }

        function drawPauseButton(){
            ctx.font        = 'bold italic 15px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            var textMessageHeight = 15;
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText('||',5,5+textMessageHeight);
                flipBackCanvas();
            }
            else{
                ctx.fillText('||',5,5+textMessageHeight);
            }
        }

        /**
         * Filps canvas orientation
         * 
         * After, use drawCenteredText
         */
        function flipCanvas(){
            ctx.save();
            ctx.translate(width,0);
            ctx.rotate(90 * Math.PI / 180);
        }

        /**
         * Restores the canvas orientation
         */
        function flipBackCanvas(){
            ctx.restore();
        }

        /**
         * Draws text accounting the orientation of canvas
         * 
         * @param {String} text
         * @param {Int} fontSize
         * @param {Int} textBlockWidth
         * @param {Int} dx
         * @param {Int} dy
         * @param {String} color
         */
        function drawCenteredText(text,fontSize,textBlockWidth,dx,dy,color){
            dx = dx || 0;
            dy = dy || 0;
            color = color || GLOBAL_COLOR;
            if(isLandScapeModeOn()) flipCanvas();
            ctx.font        = 'bold italic '+fontSize+'px Arial,sans-serif';
            ctx.fillStyle 	= color;
            ctx.fillText(text,((isLandScapeModeOn() ? height : width)- textBlockWidth)/2 + dx,((isLandScapeModeOn() ? width : height) + fontSize)/2 + dy);
            if(isLandScapeModeOn()) flipBackCanvas();
        }

        function drawTiltPhoneNotificationMessage(dy){
            drawCenteredText('TILT YOUR PHONE',28,250,0,dy-16,PLAYER_COLOR);
            drawCenteredText('TO MANAGE THE PLAYER',28,350,0,dy+16,PLAYER_COLOR);
        }

        function drawTapScreenNotificationMessage(dy){
            var message = 'TAP SCREEN TO DROP BOMBS';
            drawCenteredText(message,24,370,0,dy,BOMB_COLOR);
        }

        function drawGrabDotsNotificationMessage(dy){
            drawCenteredText('GRAB THE GREEN DOTS',28,350,0,dy-16,RING_COLOR);
            drawCenteredText('TO GET MORE BOMBS',28,320,0,dy+16,RING_COLOR);
        }

        function drawEnemyCollisionMessage(dy){
            drawCenteredText('-'+scoreMalusPerCollision+'pt'+(scoreMalusPerCollision > 1 ? 's' : ''),50,60,0,dy);
        }

        function drawRingCollisionMessage(dy){
            drawCenteredText('+'+bombsBonusPerRing+' bomb'+(bombsBonusPerRing > 1 ? 's' : ''),50,230,0,dy);
        }

        function drawTimeRunningOutMessage(dy){
            drawCenteredText('10 seconds left !',35,230,0,dy);
        }

        function drawBombsRunningOutMessage(dy){
            drawCenteredText('Only 1 bomb left !',35,300,0,dy);
        }

        function drawTimeOutScreen(){
            clearAllContext();
            drawCenteredText('Time OUT ...',50,260);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawBombsOutScreen(){
            clearAllContext();
            drawCenteredText('No more bombs left ...',30,320);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawPlayerExplodedScreen(){
            clearAllContext();
            drawCenteredText('Be careful with the bombs !',20,270);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawBombsBonusScreen(bombsBonus){
            clearAllContext();
            drawCenteredText('Bombs bonus : '+bombsBonus+'pts',30,290);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawFlashMessages(){
            var lineHeight = 70;
            if(flashMessages.length > 0){
                ctx.save();
                for(var i=0;i<flashMessages.length;i++){
                    ctx.globalAlpha = flashMessages[i].display/SCREEN_FLASH_RATE;
                    flashMessages[i].callback.call({},lineHeight*i - flashMessages.length*lineHeight/2 + lineHeight/2);
                }
                ctx.restore();
            }
        }

        function drawInstructionPageNumber(pageNumber,pageTotal){
            ctx.font        = 'bold italic 20px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText(pageNumber+'/'+pageTotal,5,5+20);
                flipBackCanvas();
            }
            else{
                ctx.fillText(pageNumber+'/'+pageTotal,5,5+20);
            }
        }

        function preloadImages(){
            images['bandeau'] = new Image();
            if(isWideScreen()){
                images['bandeau'].src = './assets/img/topheman-bombs-bandeau.png';
            }
            else{
                images['bandeau'].src = './assets/img/topheman-bombs-bandeau-min.png';
            }
            //add the onload function after
        }

        var welcomeScreensDrawingFunction = {
            'welcome': function(){
                preloadImages();
                screenOn = 'welcome';
                clearAllContext();
                if(isLandScapeModeOn()){
                    images['bandeau'].onload = function(){
                        flipCanvas();
                        ctx.drawImage(images['bandeau'],height/2-parseFloat(images['bandeau'].naturalWidth)/2,width/2-parseFloat(images['bandeau'].naturalHeight)/2);
                        flipBackCanvas();
                    };
                }
                else{
                    images['bandeau'].onload = function(){
                        ctx.drawImage(images['bandeau'],width/2-parseFloat(images['bandeau'].naturalWidth)/2,height/2-parseFloat(images['bandeau'].naturalHeight)/2);
                    };
                }
                welcomeScreensTimer = setTimeout(function(){welcomeScreensDrawingFunction['home']();},WELCOME_SCREEN_DURATION);
            },
            'home': function(){
                //if already on home, don't draw page (caused by clicking vs setTimeout)
                if(screenOn === 'home')
                    return;
                screenOn = 'home';
                clearAllContext();
                drawCenteredText('Play',60,120,0,-100);
                drawCenteredText('Your HighScores',35,280,0,-10);
                drawCenteredText('Instructions',30,170,0,70);
                drawCenteredText('Credits',20,70,0,130);
            },
            'gameOver': function(){
                screenOn = 'gameOver';
                clearAllContext();
                drawCenteredText('Game Over',50,300,0,-60);
                drawCenteredText('Level '+level,50,250,0,0);
                drawCenteredText('Score '+score,50,250,0,60);
            },
            'highScores': function(){
                var highScores = highScoresManager.getHighScores();
                var fontSize = 20, lineHeight = 25, top = -160+40/2, color = GLOBAL_COLOR;
                screenOn = 'highScores';
                clearAllContext();
                drawCenteredText('Your HighScores',35,320,0,top);
                if(highScores.length > 0){
                    for(var i=0;i<highScores.length;i++){
                        if(i === tmpHighScoreRank)
                            color = 'black';
                        else
                            color = GLOBAL_COLOR;
                        drawCenteredText(i+1+' - Level '+highScores[i].level+' / '+highScores[i].score+' pts',fontSize,230,0,top+20+(i+1)*lineHeight,color);
                    }
                }
                drawTopRightCorner('\u21b6');
            },
            'instructions1': function(){
                screenOn = 'instructions1';
                clearAllContext();
                drawInstructionPageNumber(1, 5);
                drawCenteredText('Tilt your phone to lead the blue dot',20,330,0,0,PLAYER_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions2': function(){
                screenOn = 'instructions2';
                clearAllContext();
                drawInstructionPageNumber(2, 5);
                drawCenteredText('At level start, you will be told :',20,330,0,-50,GLOBAL_COLOR);
                drawCenteredText('- How many enemies you\'ll have',20,330,0,-25,ENEMY_COLOR);
                drawCenteredText('   to kill to finish the level',20,330,0,0,ENEMY_COLOR);
                drawCenteredText('- How many bombs you\'ll have',20,330,0,25,BOMB_COLOR);
                drawCenteredText('   to kill them',20,330,0,50,BOMB_COLOR);
                drawCenteredText('- How much time you\'ll have',20,330,0,75,GLOBAL_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions3': function(){
                screenOn = 'instructions3';
                clearAllContext();
                drawInstructionPageNumber(3, 5);
                drawCenteredText('Tap the screen to drop bombs',22,330,0,0,BOMB_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions4': function(){
                screenOn = 'instructions4';
                clearAllContext();
                drawInstructionPageNumber(4, 5);
                drawCenteredText('Grab the green dots to get more bombs',20,370,0,0,RING_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions5': function(){
                screenOn = 'instructions5';
                clearAllContext();
                drawInstructionPageNumber(5, 5);
                drawCenteredText('You\'ll get a bonus for each bomb',20,330,0,0,RING_COLOR);
                drawCenteredText('you didn\'t use',20,330,0,25,RING_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'credits': function(){
                screenOn = 'credits';
                clearAllContext();
                if(isLandScapeModeOn()){
                    flipCanvas();
                    ctx.drawImage(images['bandeau'],height/2-parseFloat(images['bandeau'].naturalWidth)/2,width/2-parseFloat(images['bandeau'].naturalHeight)-16);
                    flipBackCanvas();
                }
                else{
                    ctx.drawImage(images['bandeau'],width/2-parseFloat(images['bandeau'].naturalWidth)/2,height/2-parseFloat(images['bandeau'].naturalHeight)-16);
                }
                drawCenteredText('bombs.topheman.com',16,190,0,0,'blue');
                drawCenteredText('Made by',16,110,0,30,GLOBAL_COLOR);
                drawCenteredText('Christophe Rosset (Topheman)',20,330,0,60,GLOBAL_COLOR);
                drawCenteredText('twitter.com/topheman',16,210,0,100,'blue');
                drawCenteredText('blog.topheman.com',16,190,0,130,'blue');
                drawTopRightCorner('\u21b6');
            }
        };

        /**
         * @return {Boolean}
         */
        function isLandScapeModeOn(){
    //        return true;//@todo retirer
            return landScapeModeOn;
        }

        /**
         * @return {Boolean}
         */
        function isWideScreen(){
    //        return true;//todo retirer
            return width > 500;
        }

    };

    return GameManager;
    
});
/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 * 
 * @dependency require.js - https://github.com/jrburke/requirejs/blob/master/LICENSE
 * @dependency Ball.js Copyright (C) 2012 Christophe Rosset <tophe@topheman.com> - https://github.com/topheman/Ball.js/blob/master/LICENSE
 * @dependency Vector2D.js http://jamieblog.org
 * @dependency zepto.min.js (any version of jquery) http://zeptojs.com/ (MIT LICENSE)
 * @dependency requestAnimFrame.js - http://notes.jetienne.com/2011/05/18/cancelRequestAnimFrame-for-paul-irish-requestAnimFrame.html
 * @dependency DeviceMotion and DeviceOrientation polyfill by Remy Sharp / leftlogic.com MIT http://rem.mit-license.org
 * 
 * @sounds (free of rights) https://github.com/topheman/bombs/blob/master/src/assets/audio/LICENSE
 */


define('game/bootstrap',['game/GameManager'],function(GameManager){

    var game;

    game = {

        init : function(){
            game = new GameManager();
            game.init();
        },
        
        pause : function(){
            game.pause();
        },
        
        resume : function(){
            game.resume();
        }

    };
    
    return game;
    
});
