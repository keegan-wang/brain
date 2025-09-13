(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Im={exports:{}},Ul={},Um={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Qv=Symbol.for("react.portal"),qv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Zv=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),e_=Symbol.for("react.context"),t_=Symbol.for("react.forward_ref"),n_=Symbol.for("react.suspense"),i_=Symbol.for("react.memo"),r_=Symbol.for("react.lazy"),_h=Symbol.iterator;function s_(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,km={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bm(){}Bm.prototype=Ns.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}var Kd=qd.prototype=new Bm;Kd.constructor=qd;Om(Kd,Ns.prototype);Kd.isPureReactComponent=!0;var xh=Array.isArray,zm=Object.prototype.hasOwnProperty,Zd={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)zm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Fa,type:t,key:s,ref:a,props:r,_owner:Zd.current}}function a_(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function o_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o_(""+t.key):e.toString(36)}function Bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Fa:case Qv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,xh(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),Bo(r,e,n,"",function(c){return c})):r!=null&&(Jd(r)&&(r=a_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",xh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+rc(s,o);a+=Bo(s,e,n,l,r)}else if(l=s_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+rc(s,o++),a+=Bo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function l_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},zo={transition:null},c_={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:zo,ReactCurrentOwner:Zd};function Gm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ns;je.Fragment=qv;je.Profiler=Zv;je.PureComponent=qd;je.StrictMode=Kv;je.Suspense=n_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;je.act=Gm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)zm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Fa,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:e_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Jv,_context:t},t.Consumer=t};je.createElement=Vm;je.createFactory=function(t){var e=Vm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:t_,render:t}};je.isValidElement=Jd;je.lazy=function(t){return{$$typeof:r_,_payload:{_status:-1,_result:t},_init:l_}};je.memo=function(t,e){return{$$typeof:i_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};je.unstable_act=Gm;je.useCallback=function(t,e){return Qt.current.useCallback(t,e)};je.useContext=function(t){return Qt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Qt.current.useEffect(t,e)};je.useId=function(){return Qt.current.useId()};je.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Qt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};je.useRef=function(t){return Qt.current.useRef(t)};je.useState=function(t){return Qt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Qt.current.useTransition()};je.version="18.3.1";Um.exports=je;var V=Um.exports;const u_=Yv(V);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_=V,f_=Symbol.for("react.element"),h_=Symbol.for("react.fragment"),p_=Object.prototype.hasOwnProperty,m_=d_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g_={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)p_.call(e,i)&&!g_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:f_,type:t,key:s,ref:a,props:r,_owner:m_.current}}Ul.Fragment=h_;Ul.jsx=Wm;Ul.jsxs=Wm;Im.exports=Ul;var A=Im.exports,uu={},jm={exports:{}},gn={},Xm={exports:{}},$m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,Y){var K=D.length;D.push(Y);e:for(;0<K;){var se=K-1>>>1,ve=D[se];if(0<r(ve,Y))D[se]=Y,D[K]=ve,K=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],K=D.pop();if(K!==Y){D[0]=K;e:for(var se=0,ve=D.length,We=ve>>>1;se<We;){var ze=2*(se+1)-1,He=D[ze],q=ze+1,ee=D[q];if(0>r(He,K))q<ve&&0>r(ee,He)?(D[se]=ee,D[q]=K,se=q):(D[se]=He,D[ze]=K,se=ze);else if(q<ve&&0>r(ee,K))D[se]=ee,D[q]=K,se=q;else break e}}return Y}function r(D,Y){var K=D.sortIndex-Y.sortIndex;return K!==0?K:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=D)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(D){if(x=!1,g(D),!_)if(n(l)!==null)_=!0,B(T);else{var Y=n(c);Y!==null&&$(y,Y.startTime-D)}}function T(D,Y){_=!1,x&&(x=!1,u(P),P=-1),p=!0;var K=h;try{for(g(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||D&&!L());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var ve=se(f.expirationTime<=Y);Y=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(l)&&i(l),g(Y)}else i(l);f=n(l)}if(f!==null)var We=!0;else{var ze=n(c);ze!==null&&$(y,ze.startTime-Y),We=!1}return We}finally{f=null,h=K,p=!1}}var C=!1,R=null,P=-1,E=5,M=-1;function L(){return!(t.unstable_now()-M<E)}function O(){if(R!==null){var D=t.unstable_now();M=D;var Y=!0;try{Y=R(!0,D)}finally{Y?z():(C=!1,R=null)}}else C=!1}var z;if(typeof v=="function")z=function(){v(O)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,I=X.port2;X.port1.onmessage=O,z=function(){I.postMessage(null)}}else z=function(){m(O,0)};function B(D){R=D,C||(C=!0,z())}function $(D,Y){P=m(function(){D(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,B(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var K=h;h=Y;try{return D()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=h;h=D;try{return Y()}finally{h=K}},t.unstable_scheduleCallback=function(D,Y,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,D){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=K+ve,D={id:d++,callback:Y,priorityLevel:D,startTime:K,expirationTime:ve,sortIndex:-1},K>se?(D.sortIndex=K,e(c,D),n(l)===null&&D===n(c)&&(x?(u(P),P=-1):x=!0,$(y,K-se))):(D.sortIndex=ve,e(l,D),_||p||(_=!0,B(T))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var Y=h;return function(){var K=h;h=Y;try{return D.apply(this,arguments)}finally{h=K}}}})($m);Xm.exports=$m;var v_=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __=V,mn=v_;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ym=new Set,ha={};function Ir(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ha[t]=e,t=0;t<e.length;t++)Ym.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,x_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Mh={};function y_(t){return du.call(Mh,t)?!0:du.call(Sh,t)?!1:x_.test(t)?Mh[t]=!0:(Sh[t]=!0,!1)}function S_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M_(t,e,n,i){if(e===null||typeof e>"u"||S_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ef=/[\-:]([a-z])/g;function tf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ef,tf);Ft[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ef,tf);Ft[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ef,tf);Ft[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function nf(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M_(e,n,r,i)&&(n=null),i||r===null?y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=__.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Jr=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),Ii=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),Eh=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,sc;function Js(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function E_(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jr:return"Fragment";case Zr:return"Portal";case fu:return"Profiler";case rf:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Qm:return(t._context.displayName||"Context")+".Provider";case sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Ii:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function w_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T_(t){var e=Zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=T_(t))}function Jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(t,e){e=e.checked,e!=null&&nf(t,"checked",e,!1)}function vu(t,e){eg(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_u(t,e.type,n):e.hasOwnProperty("defaultValue")&&_u(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _u(t,e,n){(e!=="number"||sl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ea(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function tg(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var to,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=to.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A_=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){A_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var C_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(t,e){if(e){if(C_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wu=null,fs=null,hs=null;function Rh(t){if(t=Ba(t)){if(typeof wu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=zl(e),wu(t.stateNode,t.type,e))}}function ag(t){fs?hs?hs.push(t):hs=[t]:fs=t}function og(){if(fs){var t=fs,e=hs;if(hs=fs=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function lg(t,e){return t(e)}function cg(){}var lc=!1;function ug(t,e,n){if(lc)return t(e,n);lc=!0;try{return lg(t,e,n)}finally{lc=!1,(fs!==null||hs!==null)&&(cg(),og())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Tu=!1;if(xi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Tu=!1}function R_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var sa=!1,al=null,ol=!1,Au=null,b_={onError:function(t){sa=!0,al=t}};function P_(t,e,n,i,r,s,a,o,l){sa=!1,al=null,R_.apply(b_,arguments)}function N_(t,e,n,i,r,s,a,o,l){if(P_.apply(this,arguments),sa){if(sa){var c=al;sa=!1,al=null}else throw Error(ne(198));ol||(ol=!0,Au=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bh(t){if(Ur(t)!==t)throw Error(ne(188))}function L_(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bh(r),t;if(s===i)return bh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function fg(t){return t=L_(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var pg=mn.unstable_scheduleCallback,Ph=mn.unstable_cancelCallback,D_=mn.unstable_shouldYield,I_=mn.unstable_requestPaint,Et=mn.unstable_now,U_=mn.unstable_getCurrentPriorityLevel,lf=mn.unstable_ImmediatePriority,mg=mn.unstable_UserBlockingPriority,ll=mn.unstable_NormalPriority,F_=mn.unstable_LowPriority,gg=mn.unstable_IdlePriority,Fl=null,Kn=null;function O_(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:z_,k_=Math.log,B_=Math.LN2;function z_(t){return t>>>=0,t===0?32:31-(k_(t)/B_|0)|0}var no=64,io=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ta(o):(s&=a,s!==0&&(i=ta(s)))}else a=n&~r,a!==0?i=ta(a):s!==0&&(i=ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function H_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=H_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=no;return no<<=1,!(no&4194240)&&(no=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function G_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,uf,yg,Sg,Mg,Ru=!1,ro=[],Vi=null,Gi=null,Wi=null,ga=new Map,va=new Map,Fi=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ba(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function j_(t,e,n,i,r){switch(e){case"focusin":return Vi=Hs(Vi,t,e,n,i,r),!0;case"dragenter":return Gi=Hs(Gi,t,e,n,i,r),!0;case"mouseover":return Wi=Hs(Wi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Hs(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,Hs(va.get(s)||null,t,e,n,i,r)),!0}return!1}function Eg(t){var e=yr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=dg(n),e!==null){t.blockedOn=e,Mg(t.priority,function(){yg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ho(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Eu=i,n.target.dispatchEvent(i),Eu=null}else return e=Ba(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function Lh(t,e,n){Ho(t)&&n.delete(e)}function X_(){Ru=!1,Vi!==null&&Ho(Vi)&&(Vi=null),Gi!==null&&Ho(Gi)&&(Gi=null),Wi!==null&&Ho(Wi)&&(Wi=null),ga.forEach(Lh),va.forEach(Lh)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ru||(Ru=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,X_)))}function _a(t){function e(r){return Vs(r,t)}if(0<ro.length){Vs(ro[0],t);for(var n=1;n<ro.length;n++){var i=ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&Vs(Vi,t),Gi!==null&&Vs(Gi,t),Wi!==null&&Vs(Wi,t),ga.forEach(e),va.forEach(e),n=0;n<Fi.length;n++)i=Fi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Fi.length&&(n=Fi[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&Fi.shift()}var ps=wi.ReactCurrentBatchConfig,ul=!0;function $_(t,e,n,i){var r=et,s=ps.transition;ps.transition=null;try{et=1,df(t,e,n,i)}finally{et=r,ps.transition=s}}function Y_(t,e,n,i){var r=et,s=ps.transition;ps.transition=null;try{et=4,df(t,e,n,i)}finally{et=r,ps.transition=s}}function df(t,e,n,i){if(ul){var r=bu(t,e,n,i);if(r===null)xc(t,e,i,dl,n),Nh(t,i);else if(j_(r,t,e,n,i))i.stopPropagation();else if(Nh(t,i),e&4&&-1<W_.indexOf(t)){for(;r!==null;){var s=Ba(r);if(s!==null&&xg(s),s=bu(t,e,n,i),s===null&&xc(t,e,i,dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var dl=null;function bu(t,e,n,i){if(dl=null,t=of(i),t=yr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dl=t,null}function wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U_()){case lf:return 1;case mg:return 4;case ll:case F_:return 16;case gg:return 536870912;default:return 16}default:return 16}}var zi=null,ff=null,Vo=null;function Tg(){if(Vo)return Vo;var t,e=ff,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vo=r.slice(t,1<i?1-i:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function Dh(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?so:Dh,this.isPropagationStopped=Dh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=vn(Ls),ka=vt({},Ls,{view:0,detail:0}),Q_=vn(ka),uc,dc,Gs,Ol=vt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(uc=t.screenX-Gs.screenX,dc=t.screenY-Gs.screenY):dc=uc=0,Gs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Ih=vn(Ol),q_=vt({},Ol,{dataTransfer:0}),K_=vn(q_),Z_=vt({},ka,{relatedTarget:0}),fc=vn(Z_),J_=vt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=vn(J_),tx=vt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=vn(tx),ix=vt({},Ls,{data:0}),Uh=vn(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ax[t])?!!e[t]:!1}function pf(){return ox}var lx=vt({},ka,{key:function(t){if(t.key){var e=rx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cx=vn(lx),ux=vt({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=vn(ux),dx=vt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),fx=vn(dx),hx=vt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=vn(hx),mx=vt({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=vn(mx),vx=[9,13,27,32],mf=xi&&"CompositionEvent"in window,aa=null;xi&&"documentMode"in document&&(aa=document.documentMode);var _x=xi&&"TextEvent"in window&&!aa,Ag=xi&&(!mf||aa&&8<aa&&11>=aa),Oh=" ",kh=!1;function Cg(t,e){switch(t){case"keyup":return vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function xx(t,e){switch(t){case"compositionend":return Rg(e);case"keypress":return e.which!==32?null:(kh=!0,Oh);case"textInput":return t=e.data,t===Oh&&kh?null:t;default:return null}}function yx(t,e){if(es)return t==="compositionend"||!mf&&Cg(t,e)?(t=Tg(),Vo=ff=zi=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ag&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function bg(t,e,n,i){ag(i),e=fl(e,"onChange"),0<e.length&&(n=new hf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oa=null,xa=null;function Mx(t){zg(t,0)}function kl(t){var e=is(t);if(Jm(e))return t}function Ex(t,e){if(t==="change")return e}var Pg=!1;if(xi){var hc;if(xi){var pc="oninput"in document;if(!pc){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),pc=typeof zh.oninput=="function"}hc=pc}else hc=!1;Pg=hc&&(!document.documentMode||9<document.documentMode)}function Hh(){oa&&(oa.detachEvent("onpropertychange",Ng),xa=oa=null)}function Ng(t){if(t.propertyName==="value"&&kl(xa)){var e=[];bg(e,xa,t,of(t)),ug(Mx,e)}}function wx(t,e,n){t==="focusin"?(Hh(),oa=e,xa=n,oa.attachEvent("onpropertychange",Ng)):t==="focusout"&&Hh()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(xa)}function Ax(t,e){if(t==="click")return kl(e)}function Cx(t,e){if(t==="input"||t==="change")return kl(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Rx;function ya(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gh(t,e){var n=Vh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function Lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dg(){for(var t=window,e=sl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bx(t){var e=Dg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lg(n.ownerDocument.documentElement,n)){if(i!==null&&gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gh(n,s);var a=Gh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Px=xi&&"documentMode"in document&&11>=document.documentMode,ts=null,Pu=null,la=null,Nu=!1;function Wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||ts==null||ts!==sl(i)||(i=ts,"selectionStart"in i&&gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&ya(la,i)||(la=i,i=fl(Pu,"onSelect"),0<i.length&&(e=new hf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},mc={},Ig={};xi&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Bl(t){if(mc[t])return mc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return mc[t]=e[n];return t}var Ug=Bl("animationend"),Fg=Bl("animationiteration"),Og=Bl("animationstart"),kg=Bl("transitionend"),Bg=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){Bg.set(t,e),Ir(e,[t])}for(var gc=0;gc<jh.length;gc++){var vc=jh[gc],Nx=vc.toLowerCase(),Lx=vc[0].toUpperCase()+vc.slice(1);nr(Nx,"on"+Lx)}nr(Ug,"onAnimationEnd");nr(Fg,"onAnimationIteration");nr(Og,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(kg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,o,c),s=l}}}if(ol)throw t=Au,ol=!1,Au=null,t}function ot(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(Hg(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),Hg(n,t,i,e)}var oo="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[oo]){t[oo]=!0,Ym.forEach(function(n){n!=="selectionchange"&&(Dx.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oo]||(e[oo]=!0,_c("selectionchange",!1,e))}}function Hg(t,e,n,i){switch(wg(e)){case 1:var r=$_;break;case 4:r=Y_;break;default:r=df}n=r.bind(null,e,n,t),r=void 0,!Tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=yr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}ug(function(){var c=s,d=of(n),f=[];e:{var h=Bg.get(t);if(h!==void 0){var p=hf,_=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":p=cx;break;case"focusin":_="focus",p=fc;break;case"focusout":_="blur",p=fc;break;case"beforeblur":case"afterblur":p=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fx;break;case Ug:case Fg:case Og:p=ex;break;case kg:p=px;break;case"scroll":p=Q_;break;case"wheel":p=gx;break;case"copy":case"cut":case"paste":p=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fh}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=ma(v,u),y!=null&&x.push(Ma(v,y,g)))),m)break;v=v.return}0<x.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Eu&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[yi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?yr(_):null,_!==null&&(m=Ur(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=Ih,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Fh,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:is(p),g=_==null?h:is(_),h=new x(y,v+"leave",p,n,d),h.target=m,h.relatedTarget=g,y=null,yr(d)===c&&(x=new x(u,v+"enter",_,n,d),x.target=g,x.relatedTarget=m,y=x),m=y,p&&_)t:{for(x=p,u=_,v=0,g=x;g;g=Or(g))v++;for(g=0,y=u;y;y=Or(y))g++;for(;0<v-g;)x=Or(x),v--;for(;0<g-v;)u=Or(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=Or(x),u=Or(u)}x=null}else x=null;p!==null&&$h(f,h,p,x,!1),_!==null&&m!==null&&$h(f,m,_,x,!0)}}e:{if(h=c?is(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=Ex;else if(Bh(h))if(Pg)T=Cx;else{T=Tx;var C=wx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Ax);if(T&&(T=T(t,c))){bg(f,T,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&_u(h,"number",h.value)}switch(C=c?is(c):window,t){case"focusin":(Bh(C)||C.contentEditable==="true")&&(ts=C,Pu=c,la=null);break;case"focusout":la=Pu=ts=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Wh(f,n,d);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":Wh(f,n,d)}var R;if(mf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else es?Cg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ag&&n.locale!=="ko"&&(es||P!=="onCompositionStart"?P==="onCompositionEnd"&&es&&(R=Tg()):(zi=d,ff="value"in zi?zi.value:zi.textContent,es=!0)),C=fl(c,P),0<C.length&&(P=new Uh(P,t,null,n,d),f.push({event:P,listeners:C}),R?P.data=R:(R=Rg(n),R!==null&&(P.data=R)))),(R=_x?xx(t,n):yx(t,n))&&(c=fl(c,"onBeforeInput"),0<c.length&&(d=new Uh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}zg(f,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Ma(t,s,r)),s=ma(t,e),s!=null&&i.push(Ma(t,s,r))),t=t.return}return i}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ma(n,s),l!=null&&a.unshift(Ma(n,l,o))):r||(l=ma(n,s),l!=null&&a.push(Ma(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ix=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Ux,"")}function lo(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(ne(425))}function hl(){}var Lu=null,Du=null;function Iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,Ox=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(t){return Qh.resolve(null).then(t).catch(kx)}:Uu;function kx(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ds,Ea="__reactProps$"+Ds,yi="__reactContainer$"+Ds,Fu="__reactEvents$"+Ds,Bx="__reactListeners$"+Ds,zx="__reactHandles$"+Ds;function yr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qh(t);t!==null;){if(n=t[$n])return n;t=qh(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[$n]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function zl(t){return t[Ea]||null}var Ou=[],rs=-1;function ir(t){return{current:t}}function lt(t){0>rs||(t.current=Ou[rs],Ou[rs]=null,rs--)}function st(t,e){rs++,Ou[rs]=t.current,t.current=e}var Ji={},Wt=ir(Ji),tn=ir(!1),Cr=Ji;function ys(t,e){var n=t.type.contextTypes;if(!n)return Ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function pl(){lt(tn),lt(Wt)}function Kh(t,e,n){if(Wt.current!==Ji)throw Error(ne(168));st(Wt,e),st(tn,n)}function Vg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,w_(t)||"Unknown",r));return vt({},n,i)}function ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Cr=Wt.current,st(Wt,t),st(tn,tn.current),!0}function Zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Vg(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,lt(tn),lt(Wt),st(Wt,t)):lt(tn),st(tn,n)}var fi=null,Hl=!1,Sc=!1;function Gg(t){fi===null?fi=[t]:fi.push(t)}function Hx(t){Hl=!0,Gg(t)}function rr(){if(!Sc&&fi!==null){Sc=!0;var t=0,e=et;try{var n=fi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Hl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),pg(lf,rr),r}finally{et=e,Sc=!1}}return null}var ss=[],as=0,gl=null,vl=0,Mn=[],En=0,Rr=null,hi=1,pi="";function pr(t,e){ss[as++]=vl,ss[as++]=gl,gl=t,vl=e}function Wg(t,e,n){Mn[En++]=hi,Mn[En++]=pi,Mn[En++]=Rr,Rr=t;var i=hi;t=pi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,hi=1<<32-Bn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function vf(t){t.return!==null&&(pr(t,1),Wg(t,1,0))}function _f(t){for(;t===gl;)gl=ss[--as],ss[as]=null,vl=ss[--as],ss[as]=null;for(;t===Rr;)Rr=Mn[--En],Mn[En]=null,pi=Mn[--En],Mn[En]=null,hi=Mn[--En],Mn[En]=null}var hn=null,fn=null,dt=!1,Un=null;function jg(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,fn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,fn=null,!0):!1;default:return!1}}function ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(dt){var e=fn;if(e){var n=e;if(!Jh(t,e)){if(ku(t))throw Error(ne(418));e=ji(n.nextSibling);var i=hn;e&&Jh(t,e)?jg(i,n):(t.flags=t.flags&-4097|2,dt=!1,hn=t)}}else{if(ku(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,hn=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function co(t){if(t!==hn)return!1;if(!dt)return ep(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Iu(t.type,t.memoizedProps)),e&&(e=fn)){if(ku(t))throw Xg(),Error(ne(418));for(;e;)jg(t,e),e=ji(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=hn?ji(t.stateNode.nextSibling):null;return!0}function Xg(){for(var t=fn;t;)t=ji(t.nextSibling)}function Ss(){fn=hn=null,dt=!1}function xf(t){Un===null?Un=[t]:Un.push(t)}var Vx=wi.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function uo(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function $g(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Qi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,y){return v===null||v.tag!==6?(v=Rc(g,u.mode,y),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,y){var T=g.type;return T===Jr?d(u,v,g.props.children,y,g.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ii&&tp(T)===v.type)?(y=r(v,g.props),y.ref=Ws(u,v,g),y.return=u,y):(y=qo(g.type,g.key,g.props,null,u.mode,y),y.ref=Ws(u,v,g),y.return=u,y)}function c(u,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=bc(g,u.mode,y),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,y,T){return v===null||v.tag!==7?(v=Ar(g,u.mode,y,T),v.return=u,v):(v=r(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Rc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ja:return g=qo(v.type,v.key,v.props,null,u.mode,g),g.ref=Ws(u,null,v),g.return=u,g;case Zr:return v=bc(v,u.mode,g),v.return=u,v;case Ii:var y=v._init;return f(u,y(v._payload),g)}if(ea(v)||Bs(v))return v=Ar(v,u.mode,g,null),v.return=u,v;uo(u,v)}return null}function h(u,v,g,y){var T=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:o(u,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ja:return g.key===T?l(u,v,g,y):null;case Zr:return g.key===T?c(u,v,g,y):null;case Ii:return T=g._init,h(u,v,T(g._payload),y)}if(ea(g)||Bs(g))return T!==null?null:d(u,v,g,y,null);uo(u,g)}return null}function p(u,v,g,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,o(v,u,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return u=u.get(y.key===null?g:y.key)||null,l(v,u,y,T);case Zr:return u=u.get(y.key===null?g:y.key)||null,c(v,u,y,T);case Ii:var C=y._init;return p(u,v,g,C(y._payload),T)}if(ea(y)||Bs(y))return u=u.get(g)||null,d(v,u,y,T,null);uo(v,y)}return null}function _(u,v,g,y){for(var T=null,C=null,R=v,P=v=0,E=null;R!==null&&P<g.length;P++){R.index>P?(E=R,R=null):E=R.sibling;var M=h(u,R,g[P],y);if(M===null){R===null&&(R=E);break}t&&R&&M.alternate===null&&e(u,R),v=s(M,v,P),C===null?T=M:C.sibling=M,C=M,R=E}if(P===g.length)return n(u,R),dt&&pr(u,P),T;if(R===null){for(;P<g.length;P++)R=f(u,g[P],y),R!==null&&(v=s(R,v,P),C===null?T=R:C.sibling=R,C=R);return dt&&pr(u,P),T}for(R=i(u,R);P<g.length;P++)E=p(R,u,P,g[P],y),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?P:E.key),v=s(E,v,P),C===null?T=E:C.sibling=E,C=E);return t&&R.forEach(function(L){return e(u,L)}),dt&&pr(u,P),T}function x(u,v,g,y){var T=Bs(g);if(typeof T!="function")throw Error(ne(150));if(g=T.call(g),g==null)throw Error(ne(151));for(var C=T=null,R=v,P=v=0,E=null,M=g.next();R!==null&&!M.done;P++,M=g.next()){R.index>P?(E=R,R=null):E=R.sibling;var L=h(u,R,M.value,y);if(L===null){R===null&&(R=E);break}t&&R&&L.alternate===null&&e(u,R),v=s(L,v,P),C===null?T=L:C.sibling=L,C=L,R=E}if(M.done)return n(u,R),dt&&pr(u,P),T;if(R===null){for(;!M.done;P++,M=g.next())M=f(u,M.value,y),M!==null&&(v=s(M,v,P),C===null?T=M:C.sibling=M,C=M);return dt&&pr(u,P),T}for(R=i(u,R);!M.done;P++,M=g.next())M=p(R,u,P,M.value,y),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?P:M.key),v=s(M,v,P),C===null?T=M:C.sibling=M,C=M);return t&&R.forEach(function(O){return e(u,O)}),dt&&pr(u,P),T}function m(u,v,g,y){if(typeof g=="object"&&g!==null&&g.type===Jr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ja:e:{for(var T=g.key,C=v;C!==null;){if(C.key===T){if(T=g.type,T===Jr){if(C.tag===7){n(u,C.sibling),v=r(C,g.props.children),v.return=u,u=v;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ii&&tp(T)===C.type){n(u,C.sibling),v=r(C,g.props),v.ref=Ws(u,C,g),v.return=u,u=v;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===Jr?(v=Ar(g.props.children,u.mode,y,g.key),v.return=u,u=v):(y=qo(g.type,g.key,g.props,null,u.mode,y),y.ref=Ws(u,v,g),y.return=u,u=y)}return a(u);case Zr:e:{for(C=g.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=bc(g,u.mode,y),v.return=u,u=v}return a(u);case Ii:return C=g._init,m(u,v,C(g._payload),y)}if(ea(g))return _(u,v,g,y);if(Bs(g))return x(u,v,g,y);uo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Rc(g,u.mode,y),v.return=u,u=v),a(u)):n(u,v)}return m}var Ms=$g(!0),Yg=$g(!1),_l=ir(null),xl=null,os=null,yf=null;function Sf(){yf=os=xl=null}function Mf(t){var e=_l.current;lt(_l),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){xl=t,yf=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(yf!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(xl===null)throw Error(ne(308));os=t,xl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var Sr=null;function Ef(t){Sr===null?Sr=[t]:Sr.push(t)}function Qg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ef(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function Wo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,i){var r=t.updateQueue;Ui=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=vt({},f,h);break e;case 2:Ui=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=a,t.lanes=a,t.memoizedState=f}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var za={},Zn=ir(za),wa=ir(za),Ta=ir(za);function Mr(t){if(t===za)throw Error(ne(174));return t}function Tf(t,e){switch(st(Ta,e),st(wa,t),st(Zn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}lt(Zn),st(Zn,e)}function Es(){lt(Zn),lt(wa),lt(Ta)}function Kg(t){Mr(Ta.current);var e=Mr(Zn.current),n=yu(e,t.type);e!==n&&(st(wa,t),st(Zn,n))}function Af(t){wa.current===t&&(lt(Zn),lt(wa))}var pt=ir(0);function Sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function Cf(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var jo=wi.ReactCurrentDispatcher,Ec=wi.ReactCurrentBatchConfig,br=0,mt=null,At=null,Lt=null,Ml=!1,ca=!1,Aa=0,Gx=0;function kt(){throw Error(ne(321))}function Rf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function bf(t,e,n,i,r,s){if(br=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?$x:Yx,t=n(i,r),ca){s=0;do{if(ca=!1,Aa=0,25<=s)throw Error(ne(301));s+=1,Lt=At=null,e.updateQueue=null,jo.current=Qx,t=n(i,r)}while(ca)}if(jo.current=El,e=At!==null&&At.next!==null,br=0,Lt=At=mt=null,Ml=!1,e)throw Error(ne(300));return t}function Pf(){var t=Aa!==0;return Aa=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Rn(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ne(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Ca(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,mt.lanes|=d,Pr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Zg(){}function Jg(t,e){var n=mt,i=Rn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Nf(n0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ra(9,t0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));br&30||e0(n,e,r)}return r}function e0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function t0(t,e,n,i){e.value=n,e.getSnapshot=i,i0(e)&&r0(t)}function n0(t,e,n){return n(function(){i0(e)&&r0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function r0(t){var e=Si(t,1);e!==null&&zn(e,t,1,-1)}function rp(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,mt,t),[e.memoizedState,t]}function Ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function s0(){return Rn().memoizedState}function Xo(t,e,n,i){var r=jn();mt.flags|=t,r.memoizedState=Ra(1|e,n,void 0,i===void 0?null:i)}function Vl(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&Rf(i,a.deps)){r.memoizedState=Ra(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ra(1|e,n,s,i)}function sp(t,e){return Xo(8390656,8,t,e)}function Nf(t,e){return Vl(2048,8,t,e)}function a0(t,e){return Vl(4,2,t,e)}function o0(t,e){return Vl(4,4,t,e)}function l0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,l0.bind(null,e,t),n)}function Lf(){}function u0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function f0(t,e,n){return br&21?(Vn(n,e)||(n=vg(),mt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function Wx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{et=n,Ec.transition=i}}function h0(){return Rn().memoizedState}function jx(t,e,n){var i=Yi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},p0(t))m0(e,n);else if(n=Qg(t,e,n,i),n!==null){var r=Yt();zn(n,t,i,r),g0(n,e,i)}}function Xx(t,e,n){var i=Yi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(p0(t))m0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,Ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qg(t,e,r,i),n!==null&&(r=Yt(),zn(n,t,i,r),g0(n,e,i))}}function p0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function m0(t,e){ca=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function g0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,cf(t,n)}}var El={readContext:Cn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},$x={readContext:Cn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,l0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Lf,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=Wx.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=jn();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));br&30||e0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(n0.bind(null,i,s,t),[t]),i.flags|=2048,Ra(9,t0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Dt.identifierPrefix;if(dt){var n=pi,i=hi;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yx={readContext:Cn,useCallback:u0,useContext:Cn,useEffect:Nf,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:o0,useMemo:d0,useReducer:wc,useRef:s0,useState:function(){return wc(Ca)},useDebugValue:Lf,useDeferredValue:function(t){var e=Rn();return f0(e,At.memoizedState,t)},useTransition:function(){var t=wc(Ca)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Jg,useId:h0,unstable_isNewReconciler:!1},Qx={readContext:Cn,useCallback:u0,useContext:Cn,useEffect:Nf,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:o0,useMemo:d0,useReducer:Tc,useRef:s0,useState:function(){return Tc(Ca)},useDebugValue:Lf,useDeferredValue:function(t){var e=Rn();return At===null?e.memoizedState=t:f0(e,At.memoizedState,t)},useTransition:function(){var t=Tc(Ca)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Zg,useSyncExternalStore:Jg,useId:h0,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Yi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(zn(e,t,r,i),Wo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Yi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xi(t,s,r),e!==null&&(zn(e,t,r,i),Wo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Yi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Xi(t,r,i),e!==null&&(zn(e,t,i,n),Wo(e,t,i))}};function ap(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ya(n,i)||!ya(r,s):!0}function v0(t,e,n){var i=!1,r=Ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=nn(e)?Cr:Wt.current,i=e.contextTypes,s=(i=i!=null)?ys(t,r):Ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Gl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=nn(e)?Cr:Wt.current,r.context=ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gl.enqueueReplaceState(r,r.state,null),yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Tl||(Tl=!0,Ju=i),Gu(t,e)},n}function x0(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&($i===null?$i=new Set([this]):$i.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uy.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Xi(n,e,1))),n.lanes|=1),t)}var Kx=wi.ReactCurrentOwner,en=!1;function $t(t,e,n,i){e.child=t===null?Yg(e,null,n,i):Ms(e,t.child,n,i)}function dp(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=bf(t,e,n,i,s,r),n=Pf(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(dt&&n&&vf(e),e.flags|=1,$t(t,e,i,r),e.child)}function fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y0(t,e,s,i,r)):(t=qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(a,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function y0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ya(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Wu(t,e,n,i,r)}function S0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(cs,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(cs,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(cs,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(cs,dn),dn|=i;return $t(t,e,r,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,i,r){var s=nn(n)?Cr:Wt.current;return s=ys(e,s),ms(e,r),n=bf(t,e,n,i,s,r),i=Pf(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(dt&&i&&vf(e),e.flags|=1,$t(t,e,n,r),e.child)}function hp(t,e,n,i,r){if(nn(n)){var s=!0;ml(e)}else s=!1;if(ms(e,r),e.stateNode===null)$o(t,e),v0(e,n,i),Vu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?Cr:Wt.current,c=ys(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&op(e,a,i,c),Ui=!1;var h=e.memoizedState;a.state=h,yl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||tn.current||Ui?(typeof d=="function"&&(Hu(e,n,d,i),l=e.memoizedState),(o=Ui||ap(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Dn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=nn(n)?Cr:Wt.current,l=ys(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&op(e,a,i,l),Ui=!1,h=e.memoizedState,a.state=h,yl(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||tn.current||Ui?(typeof p=="function"&&(Hu(e,n,p,i),_=e.memoizedState),(c=Ui||ap(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ju(t,e,n,i,s,r)}function ju(t,e,n,i,r,s){M0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zh(e,n,!1),Mi(t,e,s);i=e.stateNode,Kx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,o,s)):$t(t,e,o,s),e.memoizedState=i.state,r&&Zh(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),Tf(t,e.containerInfo)}function pp(t,e,n,i,r){return Ss(),xf(r),e.flags|=256,$t(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function w0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(pt,r&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xl(a,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$u(n),e.memoizedState=Xu,t):Df(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Zx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Qi(o,s):(s=Ar(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?$u(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Df(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,i){return i!==null&&xf(i),Ms(e,t.child,null,n),t=Df(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ac(Error(ne(422))),fo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,t.child,null,a),e.child.memoizedState=$u(a),e.memoizedState=Xu,s);if(!(e.mode&1))return fo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Ac(s,i,void 0),fo(t,e,a,i)}if(o=(a&t.childLanes)!==0,en||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),zn(i,t,r,-1))}return Bf(),i=Ac(Error(ne(421))),fo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=dy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=ji(r.nextSibling),hn=e,dt=!0,Un=null,t!==null&&(Mn[En++]=hi,Mn[En++]=pi,Mn[En++]=Rr,hi=t.id,pi=t.overflow,Rr=e),e=Df(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zu(t.return,e,n)}function Cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function T0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jx(t,e,n){switch(e.tag){case 3:E0(e),Ss();break;case 5:Kg(e);break;case 1:nn(e.type)&&ml(e);break;case 4:Tf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(_l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?w0(t,e,n):(st(pt,pt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return T0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return Mi(t,e,n)}var A0,Yu,C0,R0;A0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};C0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(Zn.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=xu(t,r),i=xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hl)}Su(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};R0=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ey(t,e,n){var i=e.pendingProps;switch(_f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return nn(e.type)&&pl(),Bt(e),null;case 3:return i=e.stateNode,Es(),lt(tn),lt(Wt),Cf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(nd(Un),Un=null))),Yu(t,e),Bt(e),null;case 5:Af(e);var r=Mr(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)C0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Bt(e),null}if(t=Mr(Zn.current),co(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Ea]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)ot(na[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":wh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Ah(i,s),ot("invalid",i)}Su(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&lo(i.textContent,o,t),r=["children",""+o]):ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":eo(i),Th(i,s,!0);break;case"textarea":eo(i),Ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ng(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Ea]=i,A0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Mu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)ot(na[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":wh(t,i),r=gu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Ah(t,i),r=xu(t,i),ot("invalid",t);break;default:r=i}Su(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?sg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&nf(t,s,l,a))}switch(n){case"input":eo(t),Th(t,i,!1);break;case"textarea":eo(t),Ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)R0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Mr(Ta.current),Mr(Zn.current),co(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Bt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&fn!==null&&e.mode&1&&!(e.flags&128))Xg(),Ss(),e.flags|=98560,s=!1;else if(s=co(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[$n]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Un!==null&&(nd(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):Bf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Es(),Yu(t,e),t===null&&Sa(e.stateNode.containerInfo),Bt(e),null;case 10:return Mf(e.type._context),Bt(e),null;case 17:return nn(e.type)&&pl(),Bt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Sl(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ts&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Bt(e),null}else 2*Et()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=pt.current,st(pt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return kf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ty(t,e){switch(_f(e),e.tag){case 1:return nn(e.type)&&pl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),lt(tn),lt(Wt),Cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Af(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return Es(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return kf(),null;case 24:return null;default:return null}}var ho=!1,Vt=!1,ny=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function Qu(t,e,n){try{n()}catch(i){xt(t,e,i)}}var gp=!1;function iy(t,e){if(Lu=ul,t=Dg(),gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:t,selectionRange:n},ul=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){xt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=gp,gp=!1,_}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qu(e,n,s)}r=r.next}while(r!==i)}}function Wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ea],delete e[Fu],delete e[Bx],delete e[zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P0(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var It=null,In=!1;function Ci(t,e,n){for(n=n.child;n!==null;)N0(t,e,n),n=n.sibling}function N0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Vt||ls(n,e);case 6:var i=It,r=In;It=null,Ci(t,e,n),It=i,In=r,It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),_a(t)):yc(It,n.stateNode));break;case 4:i=It,r=In,It=n.stateNode.containerInfo,In=!0,Ci(t,e,n),It=i,In=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qu(n,e,a),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!Vt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){xt(n,e,o)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ci(t,e,n),Vt=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function _p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ny),e.forEach(function(i){var r=fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:It=o.stateNode,In=!1;break e;case 3:It=o.stateNode.containerInfo,In=!0;break e;case 4:It=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(It===null)throw Error(ne(160));N0(s,a,r),It=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L0(e,t),e=e.sibling}function L0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Wn(t),i&4){try{ua(3,t,t.return),Wl(3,t)}catch(x){xt(t,t.return,x)}try{ua(5,t,t.return)}catch(x){xt(t,t.return,x)}}break;case 1:bn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(bn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(x){xt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&eg(r,s),Mu(o,a);var c=Mu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?sg(r,f):d==="dangerouslySetInnerHTML"?ig(r,f):d==="children"?pa(r,f):nf(r,d,f,c)}switch(o){case"input":vu(r,s);break;case"textarea":tg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ea]=s}catch(x){xt(t,t.return,x)}}break;case 6:if(bn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){xt(t,t.return,x)}}break;case 3:if(bn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(x){xt(t,t.return,x)}break;case 4:bn(e,t),Wn(t);break;case 13:bn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ff=Et())),i&4&&_p(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,bn(e,t),Vt=c):bn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:ua(4,h,h.return);break;case 1:ls(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){xt(i,n,x)}}break;case 5:ls(h,h.return);break;case 22:if(h.memoizedState!==null){yp(f);continue}}p!==null?(p.return=h,pe=p):yp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=rg("display",a))}catch(x){xt(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){xt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bn(e,t),Wn(t),i&4&&_p(t);break;case 21:break;default:bn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=vp(t);Zu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=vp(t);Ku(t,o,a);break;default:throw Error(ne(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ry(t,e,n){pe=t,D0(t)}function D0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ho;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Vt;o=ho;var c=Vt;if(ho=a,(Vt=l)&&!c)for(pe=r;pe!==null;)a=pe,l=a.child,a.tag===22&&a.memoizedState!==null?Sp(r):l!==null?(l.return=a,pe=l):Sp(r);for(;s!==null;)pe=s,D0(s),s=s.sibling;pe=r,ho=o,Vt=c}xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):xp(t)}}function xp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Wl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&_a(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&qu(e)}catch(h){xt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function yp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Sp(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Wl(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{qu(e)}catch(l){xt(e,s,l)}break;case 5:var a=e.return;try{qu(e)}catch(l){xt(e,a,l)}}}catch(l){xt(e,e.return,l)}if(e===t){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var sy=Math.ceil,wl=wi.ReactCurrentDispatcher,If=wi.ReactCurrentOwner,An=wi.ReactCurrentBatchConfig,Qe=0,Dt=null,Tt=null,Ut=0,dn=0,cs=ir(0),Ct=0,ba=null,Pr=0,jl=0,Uf=0,da=null,Jt=null,Ff=0,Ts=1/0,di=null,Tl=!1,Ju=null,$i=null,po=!1,Hi=null,Al=0,fa=0,ed=null,Yo=-1,Qo=0;function Yt(){return Qe&6?Et():Yo!==-1?Yo:Yo=Et()}function Yi(t){return t.mode&1?Qe&2&&Ut!==0?Ut&-Ut:Vx.transition!==null?(Qo===0&&(Qo=vg()),Qo):(t=et,t!==0||(t=window.event,t=t===void 0?16:wg(t.type)),t):1}function zn(t,e,n,i){if(50<fa)throw fa=0,ed=null,Error(ne(185));Oa(t,n,i),(!(Qe&2)||t!==Dt)&&(t===Dt&&(!(Qe&2)&&(jl|=n),Ct===4&&Oi(t,Ut)),rn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ts=Et()+500,Hl&&rr()))}function rn(t,e){var n=t.callbackNode;V_(t,e);var i=cl(t,t===Dt?Ut:0);if(i===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?Hx(Mp.bind(null,t)):Gg(Mp.bind(null,t)),Ox(function(){!(Qe&6)&&rr()}),n=null;else{switch(_g(i)){case 1:n=lf;break;case 4:n=mg;break;case 16:n=ll;break;case 536870912:n=gg;break;default:n=ll}n=H0(n,I0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I0(t,e){if(Yo=-1,Qo=0,Qe&6)throw Error(ne(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=cl(t,t===Dt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Cl(t,i);else{e=i;var r=Qe;Qe|=2;var s=F0();(Dt!==t||Ut!==e)&&(di=null,Ts=Et()+500,Tr(t,e));do try{ly();break}catch(o){U0(t,o)}while(!0);Sf(),wl.current=s,Qe=r,Tt!==null?e=0:(Dt=null,Ut=0,e=Ct)}if(e!==0){if(e===2&&(r=Cu(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=ba,Tr(t,0),Oi(t,i),rn(t,Et()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ay(r)&&(e=Cl(t,i),e===2&&(s=Cu(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=ba,Tr(t,0),Oi(t,i),rn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:mr(t,Jt,di);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=Ff+500-Et(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(mr.bind(null,t,Jt,di),e);break}mr(t,Jt,di);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sy(i/1960))-i,10<i){t.timeoutHandle=Uu(mr.bind(null,t,Jt,di),i);break}mr(t,Jt,di);break;case 5:mr(t,Jt,di);break;default:throw Error(ne(329))}}}return rn(t,Et()),t.callbackNode===n?I0.bind(null,t):null}function td(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Tr(t,e).flags|=256),t=Cl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&nd(e)),t}function nd(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function ay(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Uf,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(Qe&6)throw Error(ne(327));gs();var e=cl(t,0);if(!(e&1))return rn(t,Et()),null;var n=Cl(t,e);if(t.tag!==0&&n===2){var i=Cu(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=ba,Tr(t,0),Oi(t,e),rn(t,Et()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,Jt,di),rn(t,Et()),null}function Of(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ts=Et()+500,Hl&&rr())}}function Nr(t){Hi!==null&&Hi.tag===0&&!(Qe&6)&&gs();var e=Qe;Qe|=1;var n=An.transition,i=et;try{if(An.transition=null,et=1,t)return t()}finally{et=i,An.transition=n,Qe=e,!(Qe&6)&&rr()}}function kf(){dn=cs.current,lt(cs)}function Tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(_f(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pl();break;case 3:Es(),lt(tn),lt(Wt),Cf();break;case 5:Af(i);break;case 4:Es();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:Mf(i.type._context);break;case 22:case 23:kf()}n=n.return}if(Dt=t,Tt=t=Qi(t.current,null),Ut=dn=e,Ct=0,ba=null,Uf=jl=Pr=0,Jt=da=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Sr=null}return t}function U0(t,e){do{var n=Tt;try{if(Sf(),jo.current=El,Ml){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ml=!1}if(br=0,Lt=At=mt=null,ca=!1,Aa=0,If.current=null,n===null||n.return===null){Ct=1,ba=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ut,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=cp(a);if(p!==null){p.flags&=-257,up(p,a,o,s,e),p.mode&1&&lp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){lp(s,c,e),Bf();break e}l=Error(ne(426))}}else if(dt&&o.mode&1){var m=cp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),up(m,a,o,s,e),xf(ws(l,o));break e}}s=l=ws(l,o),Ct!==4&&(Ct=2),da===null?da=[s]:da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=_0(s,l,e);np(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($i===null||!$i.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=x0(s,o,e);np(s,y);break e}}s=s.return}while(s!==null)}k0(n)}catch(T){e=T,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function F0(){var t=wl.current;return wl.current=El,t===null?El:t}function Bf(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Pr&268435455)&&!(jl&268435455)||Oi(Dt,Ut)}function Cl(t,e){var n=Qe;Qe|=2;var i=F0();(Dt!==t||Ut!==e)&&(di=null,Tr(t,e));do try{oy();break}catch(r){U0(t,r)}while(!0);if(Sf(),Qe=n,wl.current=i,Tt!==null)throw Error(ne(261));return Dt=null,Ut=0,Ct}function oy(){for(;Tt!==null;)O0(Tt)}function ly(){for(;Tt!==null&&!D_();)O0(Tt)}function O0(t){var e=z0(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?k0(t):Tt=e,If.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ty(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=ey(n,e,dn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function mr(t,e,n){var i=et,r=An.transition;try{An.transition=null,et=1,cy(t,e,n,i)}finally{An.transition=r,et=i}return null}function cy(t,e,n,i){do gs();while(Hi!==null);if(Qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(G_(t,s),t===Dt&&(Tt=Dt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,H0(ll,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var a=et;et=1;var o=Qe;Qe|=4,If.current=null,iy(t,n),L0(n,t),bx(Du),ul=!!Lu,Du=Lu=null,t.current=n,ry(n),I_(),Qe=o,et=a,An.transition=s}else t.current=n;if(po&&(po=!1,Hi=t,Al=r),s=t.pendingLanes,s===0&&($i=null),O_(n.stateNode),rn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Tl)throw Tl=!1,t=Ju,Ju=null,t;return Al&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===ed?fa++:(fa=0,ed=t):fa=0,rr(),null}function gs(){if(Hi!==null){var t=_g(Al),e=An.transition,n=et;try{if(An.transition=null,et=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Al=0,Qe&6)throw Error(ne(331));var r=Qe;for(Qe|=4,pe=t.current;pe!==null;){var s=pe,a=s.child;if(pe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:ua(8,d,s)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,p=d.return;if(b0(d),d===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,pe=a;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var v=t.current;for(pe=v;pe!==null;){a=pe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,pe=g;else e:for(a=v;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Wl(9,o)}}catch(T){xt(o,o.return,T)}if(o===a){pe=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,pe=y;break e}pe=o.return}}if(Qe=r,rr(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Fl,t)}catch{}i=!0}return i}finally{et=n,An.transition=e}}return!1}function Ep(t,e,n){e=ws(n,e),e=_0(t,e,1),t=Xi(t,e,1),e=Yt(),t!==null&&(Oa(t,1,e),rn(t,e))}function xt(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($i===null||!$i.has(i))){t=ws(n,t),t=x0(e,t,1),e=Xi(e,t,1),t=Yt(),e!==null&&(Oa(e,1,t),rn(e,t));break}}e=e.return}}function uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ut&n)===n&&(Ct===4||Ct===3&&(Ut&130023424)===Ut&&500>Et()-Ff?Tr(t,0):Uf|=n),rn(t,e)}function B0(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=Yt();t=Si(t,e),t!==null&&(Oa(t,e,n),rn(t,n))}function dy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B0(t,n)}function fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),B0(t,n)}var z0;z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,Jx(t,e,n);en=!!(t.flags&131072)}else en=!1,dt&&e.flags&1048576&&Wg(e,vl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$o(t,e),t=e.pendingProps;var r=ys(e,Wt.current);ms(e,n),r=bf(null,e,i,t,r,n);var s=Pf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wf(e),r.updater=Gl,e.stateNode=r,r._reactInternals=e,Vu(e,i,t,n),e=ju(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&vf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($o(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=py(i),t=Dn(i,t),r){case 0:e=Wu(null,e,i,t,n);break e;case 1:e=hp(null,e,i,t,n);break e;case 11:e=dp(null,e,i,t,n);break e;case 14:e=fp(null,e,i,Dn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),hp(t,e,i,r,n);case 3:e:{if(E0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),yl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ne(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(ne(424)),e),e=pp(t,e,i,n,r);break e}else for(fn=ji(e.stateNode.containerInfo.firstChild),hn=e,dt=!0,Un=null,n=Yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),i===r){e=Mi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Kg(e),t===null&&Bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Iu(i,r)?a=null:s!==null&&Iu(i,s)&&(e.flags|=32),M0(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return w0(t,e,n);case 4:return Tf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),dp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(_l,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!tn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=Cn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),fp(t,e,i,r,n);case 15:return y0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),$o(t,e),e.tag=1,nn(i)?(t=!0,ml(e)):t=!1,ms(e,n),v0(e,i,r),Vu(e,i,r,n),ju(null,e,i,!0,t,n);case 19:return T0(t,e,n);case 22:return S0(t,e,n)}throw Error(ne(156,e.tag))};function H0(t,e){return pg(t,e)}function hy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new hy(t,e,n,i)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function py(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sf)return 11;if(t===af)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Jr:return Ar(n.children,r,s,e);case rf:a=8,r|=8;break;case fu:return t=Tn(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Tn(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Tn(19,n,e,r),t.elementType=pu,t.lanes=s,t;case Km:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qm:a=10;break e;case qm:a=9;break e;case sf:a=11;break e;case af:a=14;break e;case Ii:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function my(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hf(t,e,n,i,r,s,a,o,l){return t=new my(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(s),t}function gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function V0(t){if(!t)return Ji;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(nn(n))return Vg(t,n,e)}return e}function G0(t,e,n,i,r,s,a,o,l){return t=Hf(n,i,!0,t,r,s,a,o,l),t.context=V0(null),n=t.current,i=Yt(),r=Yi(n),s=gi(i,r),s.callback=e??null,Xi(n,s,r),t.current.lanes=r,Oa(t,r,i),rn(t,i),t}function $l(t,e,n,i){var r=e.current,s=Yt(),a=Yi(r);return n=V0(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Xi(r,e,a),t!==null&&(zn(t,r,a,s),Wo(t,r,a)),a}function Rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function vy(){return null}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gf(t){this._internalRoot=t}Yl.prototype.render=Gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));$l(t,e,null,null)};Yl.prototype.unmount=Gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){$l(null,t,null,null)}),e[yi]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fi.length&&e!==0&&e<Fi[n].priority;n++);Fi.splice(n,0,t),n===0&&Eg(t)}};function Wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function _y(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Rl(a);s.call(c)}}var a=G0(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[yi]=a.current,Sa(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Rl(l);o.call(c)}}var l=Hf(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[yi]=l.current,Sa(t.nodeType===8?t.parentNode:t),Nr(function(){$l(e,l,n,i)}),l}function ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Rl(a);o.call(l)}}$l(e,a,t,r)}else a=_y(n,e,t,r,i);return Rl(a)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(cf(e,n|1),rn(e,Et()),!(Qe&6)&&(Ts=Et()+500,rr()))}break;case 13:Nr(function(){var i=Si(t,1);if(i!==null){var r=Yt();zn(i,t,1,r)}}),Vf(t,1)}};uf=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=Yt();zn(e,t,134217728,n)}Vf(t,134217728)}};yg=function(t){if(t.tag===13){var e=Yi(t),n=Si(t,e);if(n!==null){var i=Yt();zn(n,t,e,i)}Vf(t,e)}};Sg=function(){return et};Mg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};wu=function(t,e,n){switch(e){case"input":if(vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(ne(90));Jm(i),vu(i,r)}}}break;case"textarea":tg(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};lg=Of;cg=Nr;var xy={usingClientEntryPoint:!1,Events:[Ba,is,zl,ag,og,Of]},Xs={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yy={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Fl=mo.inject(yy),Kn=mo}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wf(e))throw Error(ne(200));return gy(t,e,null,n)};gn.createRoot=function(t,e){if(!Wf(t))throw Error(ne(299));var n=!1,i="",r=W0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hf(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,Sa(t.nodeType===8?t.parentNode:t),new Gf(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=fg(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return Nr(t)};gn.hydrate=function(t,e,n){if(!Ql(e))throw Error(ne(200));return ql(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Wf(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=W0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=G0(e,null,t,1,n??null,r,!1,s,a),t[yi]=e.current,Sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yl(e)};gn.render=function(t,e,n){if(!Ql(e))throw Error(ne(200));return ql(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(ne(40));return t._reactRootContainer?(Nr(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};gn.unstable_batchedUpdates=Of;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return ql(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),jm.exports=gn;var Sy=jm.exports,Ap=Sy;uu.createRoot=Ap.createRoot,uu.hydrateRoot=Ap.hydrateRoot;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cp="popstate";function My(t={}){function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return id("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Pa(r)}return wy(e,n,null,t)}function gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ei(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ey(){return Math.random().toString(36).substring(2,10)}function Rp(t,e){return{usr:t.state,key:t.key,idx:e}}function id(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Is(e):e,state:n,key:e&&e.key||i||Ey()}}function Pa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function wy(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,c=d();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function d(){return(a.state||{idx:null}).idx}function f(){o="POP";let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:x.location,delta:u})}function h(m,u){o="PUSH";let v=id(x.location,m,u);c=d()+1;let g=Rp(v,c),y=x.createHref(v);try{a.pushState(g,"",y)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(y)}s&&l&&l({action:o,location:x.location,delta:1})}function p(m,u){o="REPLACE";let v=id(x.location,m,u);c=d();let g=Rp(v,c),y=x.createHref(v);a.replaceState(g,"",y),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){return Ty(m)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Cp,f),l=m,()=>{r.removeEventListener(Cp,f),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let u=_(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:p,go(m){return a.go(m)}};return x}function Ty(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),gt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Pa(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function X0(t,e,n="/"){return Ay(t,e,n,!1)}function Ay(t,e,n,i){let r=typeof e=="string"?Is(e):e,s=Ei(r.pathname||"/",n);if(s==null)return null;let a=$0(t);Cy(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=ky(s);o=Fy(a[l],c,i)}return o}function $0(t,e=[],n=[],i="",r=!1){let s=(a,o,l=r,c)=>{let d={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(i)&&l)return;gt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length)}let f=vi([i,d.relativePath]),h=n.concat(d);a.children&&a.children.length>0&&(gt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),$0(a.children,e,h,f,l)),!(a.path==null&&!a.index)&&e.push({path:f,score:Iy(f,a.index),routesMeta:h})};return t.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let c of Y0(a.path))s(a,o,!0,c)}),e}function Y0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Y0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Cy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Uy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var Ry=/^:[\w-]+$/,by=3,Py=2,Ny=1,Ly=10,Dy=-2,bp=t=>t==="*";function Iy(t,e){let n=t.split("/"),i=n.length;return n.some(bp)&&(i+=Dy),e&&(i+=Py),n.filter(r=>!bp(r)).reduce((r,s)=>r+(Ry.test(s)?by:s===""?Ny:Ly),i)}function Uy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Fy(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=bl({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=bl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:vi([s,f.pathname]),pathnameBase:Vy(vi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=vi([s,f.pathnameBase]))}return a}function bl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Oy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,{paramName:d,isOptional:f},h)=>{if(d==="*"){let _=o[h]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[h];return f&&!p?c[d]=void 0:c[d]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function Oy(t,e=!1,n=!0){ei(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function ky(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ei(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ei(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function By(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:zy(n,e):e,search:Gy(i),hash:Wy(r)}}function zy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Pc(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Q0(t){let e=Hy(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function q0(t,e,n,i=!1){let r;typeof t=="string"?r=Is(t):(r={...t},gt(!r.pathname||!r.pathname.includes("?"),Pc("?","pathname","search",r)),gt(!r.pathname||!r.pathname.includes("#"),Pc("#","pathname","hash",r)),gt(!r.search||!r.search.includes("#"),Pc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=By(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}var vi=t=>t.join("/").replace(/\/\/+/g,"/"),Vy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Gy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Wy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var K0=["POST","PUT","PATCH","DELETE"];new Set(K0);var Xy=["GET",...K0];new Set(Xy);var Us=V.createContext(null);Us.displayName="DataRouter";var Kl=V.createContext(null);Kl.displayName="DataRouterState";V.createContext(!1);var Z0=V.createContext({isTransitioning:!1});Z0.displayName="ViewTransition";var $y=V.createContext(new Map);$y.displayName="Fetchers";var Yy=V.createContext(null);Yy.displayName="Await";var ii=V.createContext(null);ii.displayName="Navigation";var Ha=V.createContext(null);Ha.displayName="Location";var Ti=V.createContext({outlet:null,matches:[],isDataRoute:!1});Ti.displayName="Route";var jf=V.createContext(null);jf.displayName="RouteError";function Qy(t,{relative:e}={}){gt(Va(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=V.useContext(ii),{hash:r,pathname:s,search:a}=Ga(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:vi([n,s])),i.createHref({pathname:o,search:a,hash:r})}function Va(){return V.useContext(Ha)!=null}function sr(){return gt(Va(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(Ha).location}var J0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ev(t){V.useContext(ii).static||V.useLayoutEffect(t)}function qy(){let{isDataRoute:t}=V.useContext(Ti);return t?cS():Ky()}function Ky(){gt(Va(),"useNavigate() may be used only in the context of a <Router> component.");let t=V.useContext(Us),{basename:e,navigator:n}=V.useContext(ii),{matches:i}=V.useContext(Ti),{pathname:r}=sr(),s=JSON.stringify(Q0(i)),a=V.useRef(!1);return ev(()=>{a.current=!0}),V.useCallback((l,c={})=>{if(ei(a.current,J0),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=q0(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vi([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,n,s,r,t])}V.createContext(null);function Ga(t,{relative:e}={}){let{matches:n}=V.useContext(Ti),{pathname:i}=sr(),r=JSON.stringify(Q0(n));return V.useMemo(()=>q0(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function Zy(t,e){return tv(t,e)}function tv(t,e,n,i,r){var v;gt(Va(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=V.useContext(ii),{matches:a}=V.useContext(Ti),o=a[a.length-1],l=o?o.params:{},c=o?o.pathname:"/",d=o?o.pathnameBase:"/",f=o&&o.route;{let g=f&&f.path||"";nv(c,!f||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=sr(),p;if(e){let g=typeof e=="string"?Is(e):e;gt(d==="/"||((v=g.pathname)==null?void 0:v.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${g.pathname}" was given in the \`location\` prop.`),p=g}else p=h;let _=p.pathname||"/",x=_;if(d!=="/"){let g=d.replace(/^\//,"").split("/");x="/"+_.replace(/^\//,"").split("/").slice(g.length).join("/")}let m=X0(t,{pathname:x});ei(f||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),ei(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let u=iS(m&&m.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:vi([d,s.encodeLocation?s.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?d:vi([d,s.encodeLocation?s.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,n,i,r);return e&&u?V.createElement(Ha.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...p},navigationType:"POP"}},u):u}function Jy(){let t=lS(),e=jy(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:s},"ErrorBoundary")," or"," ",V.createElement("code",{style:s},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:r},n):null,a)}var eS=V.createElement(Jy,null),tS=class extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.unstable_onError?this.props.unstable_onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?V.createElement(Ti.Provider,{value:this.props.routeContext},V.createElement(jf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nS({routeContext:t,match:e,children:n}){let i=V.useContext(Us);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(Ti.Provider,{value:t},n)}function iS(t,e=[],n=null,i=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=n==null?void 0:n.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);gt(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,c+1))}let o=!1,l=-1;if(n)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=c),d.route.id){let{loaderData:f,errors:h}=n,p=d.route.loader&&!f.hasOwnProperty(d.route.id)&&(!h||h[d.route.id]===void 0);if(d.route.lazy||p){o=!0,l>=0?s=s.slice(0,l+1):s=[s[0]];break}}}return s.reduceRight((c,d,f)=>{let h,p=!1,_=null,x=null;n&&(h=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||eS,o&&(l<0&&f===0?(nv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,x=null):l===f&&(p=!0,x=d.route.hydrateFallbackElement||null)));let m=e.concat(s.slice(0,f+1)),u=()=>{let v;return h?v=_:p?v=x:d.route.Component?v=V.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,V.createElement(nS,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?V.createElement(tS,{location:n.location,revalidation:n.revalidation,component:_,error:h,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0},unstable_onError:i}):u()},null)}function Xf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rS(t){let e=V.useContext(Us);return gt(e,Xf(t)),e}function sS(t){let e=V.useContext(Kl);return gt(e,Xf(t)),e}function aS(t){let e=V.useContext(Ti);return gt(e,Xf(t)),e}function $f(t){let e=aS(t),n=e.matches[e.matches.length-1];return gt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function oS(){return $f("useRouteId")}function lS(){var i;let t=V.useContext(jf),e=sS("useRouteError"),n=$f("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function cS(){let{router:t}=rS("useNavigate"),e=$f("useNavigate"),n=V.useRef(!1);return ev(()=>{n.current=!0}),V.useCallback(async(r,s={})=>{ei(n.current,J0),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Pp={};function nv(t,e,n){!e&&!Pp[t]&&(Pp[t]=!0,ei(!1,n))}V.memo(uS);function uS({routes:t,future:e,state:n,unstable_onError:i}){return tv(t,void 0,n,i,e)}function Ko(t){gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dS({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){gt(!Va(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),o=V.useMemo(()=>({basename:a,navigator:r,static:s,future:{}}),[a,r,s]);typeof n=="string"&&(n=Is(n));let{pathname:l="/",search:c="",hash:d="",state:f=null,key:h="default"}=n,p=V.useMemo(()=>{let _=Ei(l,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:h},navigationType:i}},[a,l,c,d,f,h,i]);return ei(p!=null,`<Router basename="${a}"> is not able to match the URL "${l}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:V.createElement(ii.Provider,{value:o},V.createElement(Ha.Provider,{children:e,value:p}))}function fS({children:t,location:e}){return Zy(rd(t),e)}function rd(t,e=[]){let n=[];return V.Children.forEach(t,(i,r)=>{if(!V.isValidElement(i))return;let s=[...e,r];if(i.type===V.Fragment){n.push.apply(n,rd(i.props.children,s));return}gt(i.type===Ko,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=rd(i.props.children,s)),n.push(a)}),n}var Zo="get",Jo="application/x-www-form-urlencoded";function Zl(t){return t!=null&&typeof t.tagName=="string"}function hS(t){return Zl(t)&&t.tagName.toLowerCase()==="button"}function pS(t){return Zl(t)&&t.tagName.toLowerCase()==="form"}function mS(t){return Zl(t)&&t.tagName.toLowerCase()==="input"}function gS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vS(t,e){return t.button===0&&(!e||e==="_self")&&!gS(t)}var go=null;function _S(){if(go===null)try{new FormData(document.createElement("form"),0),go=!1}catch{go=!0}return go}var xS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nc(t){return t!=null&&!xS.has(t)?(ei(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jo}"`),null):t}function yS(t,e){let n,i,r,s,a;if(pS(t)){let o=t.getAttribute("action");i=o?Ei(o,e):null,n=t.getAttribute("method")||Zo,r=Nc(t.getAttribute("enctype"))||Jo,s=new FormData(t)}else if(hS(t)||mS(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?Ei(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Zo,r=Nc(t.getAttribute("formenctype"))||Nc(o.getAttribute("enctype"))||Jo,s=new FormData(o,t),!_S()){let{name:c,type:d,value:f}=t;if(d==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,f)}}else{if(Zl(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Zo,i=null,r=Jo,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Yf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function SS(t,e,n){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i.pathname==="/"?i.pathname=`_root.${n}`:e&&Ei(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function MS(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ES(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function wS(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await MS(s,n);return a.links?a.links():[]}return[]}));return RS(i.flat(1).filter(ES).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Np(t,e,n,i,r,s){let a=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var d;return n[c].pathname!==l.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>a(l,c)||o(l,c)):s==="data"?e.filter((l,c)=>{var f;let d=i.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(a(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function TS(t,e,{includeHydrateFallback:n}={}){return AS(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function AS(t){return[...new Set(t)]}function CS(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function RS(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(CS(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function iv(){let t=V.useContext(Us);return Yf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function bS(){let t=V.useContext(Kl);return Yf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Qf=V.createContext(void 0);Qf.displayName="FrameworkContext";function rv(){let t=V.useContext(Qf);return Yf(t,"You must render this element inside a <HydratedRouter> element"),t}function PS(t,e){let n=V.useContext(Qf),[i,r]=V.useState(!1),[s,a]=V.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=e,h=V.useRef(null);V.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let x=u=>{u.forEach(v=>{a(v.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return h.current&&m.observe(h.current),()=>{m.disconnect()}}},[t]),V.useEffect(()=>{if(i){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:$s(o,p),onBlur:$s(l,_),onMouseEnter:$s(c,p),onMouseLeave:$s(d,_),onTouchStart:$s(f,p)}]:[!1,h,{}]}function $s(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function NS({page:t,...e}){let{router:n}=iv(),i=V.useMemo(()=>X0(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?V.createElement(DS,{page:t,matches:i,...e}):null}function LS(t){let{manifest:e,routeModules:n}=rv(),[i,r]=V.useState([]);return V.useEffect(()=>{let s=!1;return wS(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function DS({page:t,matches:e,...n}){let i=sr(),{manifest:r,routeModules:s}=rv(),{basename:a}=iv(),{loaderData:o,matches:l}=bS(),c=V.useMemo(()=>Np(t,e,l,r,i,"data"),[t,e,l,r,i]),d=V.useMemo(()=>Np(t,e,l,r,i,"assets"),[t,e,l,r,i]),f=V.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let _=new Set,x=!1;if(e.forEach(u=>{var g;let v=r.routes[u.route.id];!v||!v.hasLoader||(!c.some(y=>y.route.id===u.route.id)&&u.route.id in o&&((g=s[u.route.id])!=null&&g.shouldRevalidate)||v.hasClientLoader?x=!0:_.add(u.route.id))}),_.size===0)return[];let m=SS(t,a,"data");return x&&_.size>0&&m.searchParams.set("_routes",e.filter(u=>_.has(u.route.id)).map(u=>u.route.id).join(",")),[m.pathname+m.search]},[a,o,i,r,c,e,t,s]),h=V.useMemo(()=>TS(d,r),[d,r]),p=LS(d);return V.createElement(V.Fragment,null,f.map(_=>V.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),h.map(_=>V.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),p.map(({key:_,link:x})=>V.createElement("link",{key:_,nonce:n.nonce,...x})))}function IS(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var sv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sv&&(window.__reactRouterVersion="7.9.1")}catch{}function US({basename:t,children:e,window:n}){let i=V.useRef();i.current==null&&(i.current=My({window:n,v5Compat:!0}));let r=i.current,[s,a]=V.useState({action:r.action,location:r.location}),o=V.useCallback(l=>{V.startTransition(()=>a(l))},[a]);return V.useLayoutEffect(()=>r.listen(o),[r,o]),V.createElement(dS,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qf=V.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f,...h},p){let{basename:_}=V.useContext(ii),x=typeof c=="string"&&av.test(c),m,u=!1;if(typeof c=="string"&&x&&(m=c,sv))try{let E=new URL(window.location.href),M=c.startsWith("//")?new URL(E.protocol+c):new URL(c),L=Ei(M.pathname,_);M.origin===E.origin&&L!=null?c=L+M.search+M.hash:u=!0}catch{ei(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Qy(c,{relative:r}),[g,y,T]=PS(i,h),C=BS(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function R(E){e&&e(E),E.defaultPrevented||C(E)}let P=V.createElement("a",{...h,...T,href:m||v,onClick:u||s?e:R,ref:IS(p,y),target:l,"data-discover":!x&&n==="render"?"true":void 0});return g&&!x?V.createElement(V.Fragment,null,P,V.createElement(NS,{page:v})):P});qf.displayName="Link";var FS=V.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...c},d){let f=Ga(a,{relative:c.relative}),h=sr(),p=V.useContext(Kl),{navigator:_,basename:x}=V.useContext(ii),m=p!=null&&WS(f)&&o===!0,u=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=h.pathname,g=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),g=g?g.toLowerCase():null,u=u.toLowerCase()),g&&x&&(g=Ei(g,x)||g);const y=u!=="/"&&u.endsWith("/")?u.length-1:u.length;let T=v===u||!r&&v.startsWith(u)&&v.charAt(y)==="/",C=g!=null&&(g===u||!r&&g.startsWith(u)&&g.charAt(u.length)==="/"),R={isActive:T,isPending:C,isTransitioning:m},P=T?e:void 0,E;typeof i=="function"?E=i(R):E=[i,T?"active":null,C?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(R):s;return V.createElement(qf,{...c,"aria-current":P,className:E,ref:d,style:M,to:a,viewTransition:o},typeof l=="function"?l(R):l)});FS.displayName="NavLink";var OS=V.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=Zo,action:o,onSubmit:l,relative:c,preventScrollReset:d,viewTransition:f,...h},p)=>{let _=VS(),x=GS(o,{relative:c}),m=a.toLowerCase()==="get"?"get":"post",u=typeof o=="string"&&av.test(o),v=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let y=g.nativeEvent.submitter,T=(y==null?void 0:y.getAttribute("formmethod"))||a;_(y||g.currentTarget,{fetcherKey:e,method:T,navigate:n,replace:r,state:s,relative:c,preventScrollReset:d,viewTransition:f})};return V.createElement("form",{ref:p,method:m,action:x,onSubmit:i?l:v,...h,"data-discover":!u&&t==="render"?"true":void 0})});OS.displayName="Form";function kS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ov(t){let e=V.useContext(Us);return gt(e,kS(t)),e}function BS(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:a}={}){let o=qy(),l=sr(),c=Ga(t,{relative:s});return V.useCallback(d=>{if(vS(d,e)){d.preventDefault();let f=n!==void 0?n:Pa(l)===Pa(c);o(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:a})}},[l,o,c,n,i,e,t,r,s,a])}var zS=0,HS=()=>`__${String(++zS)}__`;function VS(){let{router:t}=ov("useSubmit"),{basename:e}=V.useContext(ii),n=oS();return V.useCallback(async(i,r={})=>{let{action:s,method:a,encType:o,formData:l,body:c}=yS(i,e);if(r.navigate===!1){let d=r.fetcherKey||HS();await t.fetch(d,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||a,formEncType:r.encType||o,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||a,formEncType:r.encType||o,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function GS(t,{relative:e}={}){let{basename:n}=V.useContext(ii),i=V.useContext(Ti);gt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...Ga(t||".",{relative:e})},a=sr();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(d=>d==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let d=o.toString();s.search=d?`?${d}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:vi([n,s.pathname])),Pa(s)}function WS(t,{relative:e}={}){let n=V.useContext(Z0);gt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ov("useViewTransitionState"),r=Ga(t,{relative:e});if(!n.isTransitioning)return!1;let s=Ei(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Ei(n.nextLocation.pathname,i)||n.nextLocation.pathname;return bl(r.pathname,a)!=null||bl(r.pathname,s)!=null}function jS({data:t,color:e,height:n=40}){var h,p;const i=Math.max(...t.map(_=>_.value)),r=Math.min(...t.map(_=>_.value)),s=i-r||1,o=(_=>{if(_.length===0)return"";if(_.length===1){const v=(i-_[0].value)/s*100;return`M 50,${v} L 50,${v}`}const x=_.map((u,v)=>({x:v/(_.length-1)*100,y:(i-u.value)/s*100}));let m=`M ${x[0].x},${x[0].y}`;for(let u=1;u<x.length;u++){const v=x[u-1],g=x[u];if(u===1){const y=v.x+(g.x-v.x)*.5,T=v.y;m+=` Q ${y},${T} ${g.x},${g.y}`}else{const y=v.x+(g.x-v.x)*.3,T=v.y,C=v.x+(g.x-v.x)*.7,R=g.y;m+=` C ${y},${T} ${C},${R} ${g.x},${g.y}`}}return m})(t),l=t.map((_,x)=>{const m=x/(t.length-1)*100,u=(i-_.value)/s*100;return`${m},${u}`}).join(" "),c=((h=t[t.length-1])==null?void 0:h.value)||0,d=((p=t[t.length-2])==null?void 0:p.value)||0,f=c-d;return A.jsxs("div",{className:"relative",children:[A.jsxs("svg",{width:"100%",height:n,viewBox:"0 0 100 100",className:"w-full",preserveAspectRatio:"none",children:[A.jsx("defs",{children:A.jsxs("linearGradient",{id:`gradient-${e.replace("#","")}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[A.jsx("stop",{offset:"0%",style:{stopColor:e,stopOpacity:.3}}),A.jsx("stop",{offset:"100%",style:{stopColor:e,stopOpacity:.05}})]})}),A.jsx("polygon",{points:`0,100 ${l} 100,100`,fill:`url(#gradient-${e.replace("#","")})`}),A.jsx("path",{d:o,fill:"none",stroke:e,strokeWidth:"2",vectorEffect:"non-scaling-stroke"}),t.length>0&&A.jsx("circle",{cx:"100",cy:(i-c)/s*100,r:"2",fill:e,vectorEffect:"non-scaling-stroke"})]}),A.jsxs("div",{className:"absolute top-0 right-0 text-xs",children:[A.jsx("span",{className:"text-white font-medium",children:c}),f!==0&&A.jsx("span",{className:`ml-1 ${f>0?"text-green-400":"text-red-400"}`,children:f>0?"↗":"↘"})]})]})}function XS({region:t,usageData:e}){var o;const n=((o=e[e.length-1])==null?void 0:o.value)||0,i=e.length>0?Math.round(e.reduce((l,c)=>l+c.value,0)/e.length):0,r=e.length>0?Math.max(...e.map(l=>l.value)):0,a=(l=>l<30?{label:"Low",color:"text-red-400"}:l<60?{label:"Moderate",color:"text-yellow-400"}:{label:"High",color:"text-green-400"})(n);return A.jsxs("div",{className:"card hover:shadow-glow-teal transition-all duration-300 group",children:[A.jsxs("div",{className:"flex items-start justify-between mb-3",children:[A.jsxs("div",{className:"flex-1",children:[A.jsx("h3",{className:"font-semibold text-white mb-1 group-hover:text-accent-teal transition-colors",children:t.name}),A.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[A.jsx("span",{className:`font-medium ${a.color}`,children:a.label}),A.jsxs("span",{className:"text-dark-100",children:[n,"% current"]})]})]}),A.jsx("div",{className:"w-3 h-3 rounded-full opacity-80",style:{backgroundColor:t.color}})]}),A.jsx("div",{className:"mb-4",children:A.jsx(jS,{data:e,color:t.color,height:50})}),A.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4 text-sm",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-dark-100",children:"7-day avg"}),A.jsxs("div",{className:"font-medium text-white",children:[i,"%"]})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-dark-100",children:"Peak"}),A.jsxs("div",{className:"font-medium text-white",children:[r,"%"]})]})]}),A.jsx("div",{className:"mb-4",children:A.jsx("p",{className:"text-sm text-dark-100 leading-relaxed",children:t.description})}),A.jsxs("div",{className:"mb-4",children:[A.jsx("h4",{className:"text-xs font-medium text-accent-teal mb-2 uppercase tracking-wide",children:"Key Functions"}),A.jsx("div",{className:"flex flex-wrap gap-1",children:t.functions.map(l=>A.jsx("span",{className:"text-xs bg-dark-850/60 text-dark-100 px-2 py-1 rounded-full",children:l},l))})]}),A.jsxs("div",{children:[A.jsx("h4",{className:"text-xs font-medium text-accent-pink mb-2 uppercase tracking-wide",children:"How to Activate"}),A.jsx("div",{className:"space-y-1",children:t.activation.slice(0,3).map(l=>A.jsxs("div",{className:"text-xs text-dark-100 flex items-center",children:[A.jsx("span",{className:"w-1 h-1 bg-accent-pink rounded-full mr-2 flex-shrink-0"}),l]},l))})]})]})}const $S={frontal_lobe:{name:"Frontal Lobe",path:"M 200 200 Q 300 150 450 180 Q 600 210 650 300 Q 700 400 680 500 Q 660 600 600 650 Q 540 700 450 680 Q 360 660 300 620 Q 240 580 220 520 Q 200 460 210 400 Q 220 340 240 280 Q 220 240 200 200 Z",center:[425,440]},parietal_lobe:{name:"Parietal Lobe",path:"M 650 300 Q 750 250 900 280 Q 1050 310 1100 400 Q 1150 490 1130 580 Q 1110 670 1050 720 Q 990 770 900 750 Q 810 730 750 690 Q 690 650 670 590 Q 650 530 660 470 Q 670 410 680 350 Q 665 325 650 300 Z",center:[825,525]},temporal_lobe:{name:"Temporal Lobe",path:"M 150 400 Q 200 350 280 380 Q 360 410 400 480 Q 440 550 420 620 Q 400 690 360 740 Q 320 790 260 800 Q 200 810 150 790 Q 100 770 80 720 Q 60 670 70 620 Q 80 570 100 520 Q 125 470 150 400 Z",center:[260,600]},occipital_lobe:{name:"Occipital Lobe",path:"M 1100 400 Q 1150 350 1200 380 Q 1250 410 1270 470 Q 1290 530 1280 590 Q 1270 650 1240 700 Q 1210 750 1160 770 Q 1110 790 1070 770 Q 1030 750 1010 700 Q 990 650 1000 590 Q 1010 530 1030 470 Q 1065 435 1100 400 Z",center:[1140,585]},insula:{name:"Insula",path:"M 500 500 Q 530 480 560 500 Q 590 520 595 550 Q 600 580 590 610 Q 580 640 560 650 Q 540 660 520 650 Q 500 640 495 610 Q 490 580 500 550 Q 495 525 500 500 Z",center:[545,575]},thalamus:{name:"Thalamus",path:"M 600 550 Q 620 540 640 550 Q 660 560 665 580 Q 670 600 660 620 Q 650 640 640 645 Q 630 650 620 645 Q 610 640 605 620 Q 600 600 605 580 Q 600 565 600 550 Z",center:[632,597]},hippocampus:{name:"Hippocampus",path:"M 450 650 Q 480 640 510 660 Q 540 680 545 710 Q 550 740 540 770 Q 530 800 510 810 Q 490 820 470 810 Q 450 800 445 770 Q 440 740 450 710 Q 445 680 450 650 Z",center:[497,735]},amygdala:{name:"Amygdala",path:"M 400 620 Q 420 610 440 620 Q 460 630 465 650 Q 470 670 460 690 Q 450 710 440 715 Q 430 720 420 715 Q 410 710 405 690 Q 400 670 405 650 Q 400 635 400 620 Z",center:[432,667]},caudate_nucleus:{name:"Caudate Nucleus",path:"M 550 450 Q 580 440 610 460 Q 640 480 645 510 Q 650 540 640 570 Q 630 600 610 610 Q 590 620 570 610 Q 550 600 545 570 Q 540 540 550 510 Q 545 480 550 450 Z",center:[595,535]},putamen:{name:"Putamen",path:"M 580 520 Q 600 510 620 520 Q 640 530 645 550 Q 650 570 640 590 Q 630 610 620 615 Q 610 620 600 615 Q 590 610 585 590 Q 580 570 585 550 Q 580 535 580 520 Z",center:[615,567]},globus_pallidus:{name:"Globus Pallidus",path:"M 610 560 Q 625 555 635 565 Q 645 575 642 585 Q 639 595 635 600 Q 631 605 625 605 Q 619 605 615 600 Q 611 595 614 585 Q 617 575 620 565 Q 615 562 610 560 Z",center:[627,582]},nucleus_accumbens:{name:"Nucleus Accumbens",path:"M 570 600 Q 580 595 590 600 Q 600 605 598 615 Q 596 625 590 630 Q 584 635 577 635 Q 570 635 566 630 Q 562 625 566 615 Q 570 605 570 600 Z",center:[582,617]},brainstem:{name:"Brainstem",path:"M 620 750 Q 640 740 660 760 Q 680 780 675 810 Q 670 840 660 870 Q 650 900 630 910 Q 610 920 600 910 Q 590 900 585 870 Q 580 840 590 810 Q 600 780 620 760 Q 610 755 620 750 Z",center:[630,835]},cerebellum:{name:"Cerebellum",path:"M 800 800 Q 880 790 960 810 Q 1040 830 1060 880 Q 1080 930 1060 980 Q 1040 1030 990 1050 Q 940 1070 890 1065 Q 840 1060 800 1040 Q 760 1020 750 980 Q 740 940 760 900 Q 780 860 800 820 Q 800 810 800 800 Z",center:[905,935]},default_mode_network_DMN:{name:"Default Mode Network",path:"M 350 300 Q 400 290 450 310 Q 500 330 520 370 Q 540 410 530 450 Q 520 490 490 510 Q 460 530 420 525 Q 380 520 350 500 Q 320 480 315 450 Q 310 420 325 390 Q 340 360 350 330 Q 345 315 350 300 Z",center:[425,415]},dorsal_attention_network_DAN:{name:"Dorsal Attention Network",path:"M 500 250 Q 600 240 700 260 Q 800 280 850 330 Q 900 380 890 430 Q 880 480 840 510 Q 800 540 750 535 Q 700 530 650 515 Q 600 500 570 480 Q 540 460 545 430 Q 550 400 570 370 Q 535 310 500 250 Z",center:[695,395]},ventral_attention_network_VAN:{name:"Ventral Attention Network",path:"M 650 550 Q 750 540 850 560 Q 950 580 970 630 Q 990 680 970 730 Q 950 780 910 810 Q 870 840 820 835 Q 770 830 720 815 Q 670 800 650 780 Q 630 760 635 730 Q 640 700 660 670 Q 655 610 650 550 Z",center:[810,695]},frontoparietal_control_network_FPCN:{name:"Frontoparietal Control Network",path:"M 400 350 Q 500 340 600 360 Q 700 380 750 430 Q 800 480 790 530 Q 780 580 740 610 Q 700 640 650 635 Q 600 630 550 615 Q 500 600 470 580 Q 440 560 445 530 Q 450 500 470 470 Q 435 410 400 350 Z",center:[595,495]},salience_network:{name:"Salience Network",path:"M 450 550 Q 500 540 550 560 Q 600 580 610 620 Q 620 660 600 700 Q 580 740 550 755 Q 520 770 490 765 Q 460 760 440 740 Q 420 720 425 700 Q 430 680 450 660 Q 435 605 450 550 Z",center:[515,657]}};function YS(t){return t===0?"transparent":t<20?"#3b82f6":t<40?"#06b6d4":t<60?"#10b981":t<80?"#f59e0b":"#ef4444"}function QS(t){return t===0?0:Math.max(.5,Math.min(.85,t/100+.3))}function Kf({scores:t}){const e=V.useMemo(()=>Object.entries($S).map(([n,i])=>{const r=t[n]||0;return{regionId:n,name:i.name,path:i.path,center:i.center,color:YS(r),opacity:QS(r),activity:r}}),[t]);return A.jsxs("div",{className:"w-full max-w-md mx-auto",children:[A.jsxs("svg",{viewBox:"0 0 1280 1090",className:"w-full h-auto",style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.3))"},children:[A.jsx("g",{transform:"translate(0.000000,1090.000000) scale(0.100000,-0.100000)",fill:"#ffffff",stroke:"none",children:A.jsx("path",{d:`M6335 10893 c-81 -7 -252 -35 -323 -53 -69 -17 -78 -17 -165 -2 -71
13 -155 17 -362 17 -235 -1 -286 -4 -395 -23 -156 -28 -297 -63 -425 -107 -95
-32 -104 -33 -180 -25 -131 15 -442 12 -572 -5 -488 -64 -911 -248 -1278 -556
l-81 -67 -80 5 c-103 7 -196 -9 -300 -52 -243 -101 -521 -321 -834 -660 -164
-177 -431 -429 -523 -492 -133 -92 -241 -207 -345 -368 -56 -86 -160 -302
-197 -410 -16 -44 -61 -141 -102 -216 -41 -75 -90 -181 -110 -235 -32 -88 -36
-112 -41 -220 -5 -137 6 -185 59 -269 l31 -48 -41 -87 c-77 -162 -89 -326 -38
-510 62 -220 159 -387 386 -661 29 -36 41 -62 50 -110 27 -139 98 -306 182
-430 255 -375 763 -656 1423 -784 72 -14 134 -29 137 -33 3 -4 14 -27 23 -51
22 -58 65 -118 136 -194 54 -59 58 -66 69 -134 6 -39 15 -83 21 -98 5 -14 10
-70 10 -123 0 -90 3 -103 34 -169 60 -126 176 -233 401 -373 55 -34 159 -106
230 -160 305 -230 613 -381 940 -461 219 -53 296 -60 726 -62 387 -2 397 -1
574 26 99 15 248 41 330 57 83 17 159 30 171 30 15 0 26 -13 43 -54 34 -82
139 -262 203 -346 80 -106 218 -249 322 -333 79 -64 97 -85 159 -187 225 -369
592 -1044 681 -1255 94 -220 144 -303 250 -413 77 -81 167 -139 263 -171 75
-25 120 -26 235 -5 135 25 170 64 169 188 0 91 -23 173 -122 454 -118 331
-136 402 -106 402 6 0 50 -9 97 -21 237 -56 327 -69 496 -69 91 0 229 -7 307
-16 228 -26 425 -15 662 34 351 74 507 119 693 201 380 168 677 466 732 736
10 47 22 70 56 108 59 66 90 135 110 247 18 97 16 124 -23 288 -5 21 -3 22 73
22 399 2 698 89 945 274 418 315 656 917 676 1711 6 239 -16 729 -43 965 -54
470 -161 811 -322 1026 -49 65 -66 99 -97 194 -103 316 -287 601 -462 716 -45
30 -87 63 -93 74 -5 10 -10 45 -10 77 0 187 -97 466 -228 654 -120 172 -320
367 -485 474 -40 26 -94 61 -121 78 -42 28 -52 41 -71 94 -34 94 -80 164 -190
287 -56 61 -133 154 -171 206 -89 120 -136 174 -248 279 -322 303 -824 550
-1401 691 -102 24 -230 65 -320 100 -328 129 -587 180 -925 185 l-205 3 -95
45 c-179 86 -391 145 -601 167 -89 9 -285 11 -374 3z`})}),e.map(({regionId:n,name:i,path:r,color:s,opacity:a,activity:o,center:l})=>A.jsx("g",{children:o>0&&A.jsxs(A.Fragment,{children:[A.jsx("path",{d:r,fill:s,opacity:a,stroke:s,strokeWidth:"1",className:"transition-all duration-500 hover:stroke-white hover:stroke-width-3",children:A.jsx("title",{children:`${i}: ${o}%`})}),o>50&&A.jsx("path",{d:r,fill:"none",stroke:s,strokeWidth:"2",opacity:"0.7",className:"animate-pulse"}),o>40&&A.jsxs("text",{x:l[0],y:l[1],fontSize:"12",fill:"white",textAnchor:"middle",className:"select-none font-bold",style:{textShadow:"1px 1px 2px rgba(0,0,0,0.9)",filter:"drop-shadow(1px 1px 1px rgba(0,0,0,0.8))"},children:[o,"%"]})]})},n)),A.jsx("text",{x:"425",y:"380",fontSize:"14",fill:"#9CA3AF",textAnchor:"middle",className:"select-none font-medium",children:"Frontal"}),A.jsx("text",{x:"825",y:"465",fontSize:"14",fill:"#9CA3AF",textAnchor:"middle",className:"select-none font-medium",children:"Parietal"}),A.jsx("text",{x:"260",y:"540",fontSize:"14",fill:"#9CA3AF",textAnchor:"middle",className:"select-none font-medium",children:"Temporal"}),A.jsx("text",{x:"1140",y:"525",fontSize:"14",fill:"#9CA3AF",textAnchor:"middle",className:"select-none font-medium",children:"Occipital"}),A.jsx("text",{x:"905",y:"875",fontSize:"14",fill:"#9CA3AF",textAnchor:"middle",className:"select-none font-medium",children:"Cerebellum"})]}),A.jsx("div",{className:"mt-4 flex justify-center",children:A.jsxs("div",{className:"flex items-center space-x-4 text-xs",children:[A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("div",{className:"w-3 h-3 rounded bg-blue-500"}),A.jsx("span",{className:"text-gray-300",children:"Low Activity"})]}),A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("div",{className:"w-3 h-3 rounded bg-green-500"}),A.jsx("span",{className:"text-gray-300",children:"Medium"})]}),A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("div",{className:"w-3 h-3 rounded bg-red-500"}),A.jsx("span",{className:"text-gray-300",children:"High Activity"})]})]})}),Object.values(t).every(n=>n===0)&&A.jsx("div",{className:"mt-2 text-center text-gray-500 text-xs",children:"Process activities to see brain regions light up"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="180",qS=0,Lp=1,KS=2,lv=1,cv=2,ui=3,er=0,sn=1,Yn=2,qi=0,vs=1,Dp=2,Ip=3,Up=4,ZS=5,_r=100,JS=101,eM=102,tM=103,nM=104,iM=200,rM=201,sM=202,aM=203,sd=204,ad=205,oM=206,lM=207,cM=208,uM=209,dM=210,fM=211,hM=212,pM=213,mM=214,od=0,ld=1,cd=2,As=3,ud=4,dd=5,fd=6,hd=7,Jf=0,gM=1,vM=2,Ki=0,_M=1,xM=2,yM=3,SM=4,MM=5,EM=6,wM=7,uv=300,Cs=301,Rs=302,pd=303,md=304,Jl=306,gd=1e3,Er=1001,vd=1002,Hn=1003,TM=1004,vo=1005,Qn=1006,Lc=1007,wr=1008,ti=1009,dv=1010,fv=1011,Na=1012,eh=1013,Lr=1014,mi=1015,Wa=1016,th=1017,nh=1018,La=1020,hv=35902,pv=35899,mv=1021,gv=1022,On=1023,Da=1026,Ia=1027,vv=1028,ih=1029,_v=1030,rh=1031,sh=1033,el=33776,tl=33777,nl=33778,il=33779,_d=35840,xd=35841,yd=35842,Sd=35843,Md=36196,Ed=37492,wd=37496,Td=37808,Ad=37809,Cd=37810,Rd=37811,bd=37812,Pd=37813,Nd=37814,Ld=37815,Dd=37816,Id=37817,Ud=37818,Fd=37819,Od=37820,kd=37821,Bd=36492,zd=36494,Hd=36495,Vd=36283,Gd=36284,Wd=36285,jd=36286,AM=3200,CM=3201,xv=0,RM=1,ki="",Sn="srgb",bs="srgb-linear",Pl="linear",nt="srgb",kr=7680,Fp=519,bM=512,PM=513,NM=514,yv=515,LM=516,DM=517,IM=518,UM=519,Op=35044,kp="300 es",qn=2e3,Nl=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,Xd=180/Math.PI;function ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function FM(t,e){return(t%e+e)%e}function Ic(t,e,n){return(1-n)*t+n*e}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||c!==p||d!==_){let m=1-o;const u=l*h+c*p+d*_+f*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const T=Math.sqrt(g),C=Math.atan2(T,u*v);m=Math.sin(m*C)/T,o=Math.sin(o*C)/T}const y=o*v;if(l=l*m+h*y,c=c*m+p*y,d=d*m+_*y,f=f*m+x*y,m===1-o){const T=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=T,c*=T,d*=T,f*=T}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-o*p,e[n+2]=c*_+d*p+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new G,Bp=new Xa;class Be{constructor(e,n,i,r,s,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],m=r[3],u=r[6],v=r[1],g=r[4],y=r[7],T=r[2],C=r[5],R=r[8];return s[0]=a*x+o*v+l*T,s[3]=a*m+o*g+l*C,s[6]=a*u+o*y+l*R,s[1]=c*x+d*v+f*T,s[4]=c*m+d*g+f*C,s[7]=c*u+d*y+f*R,s[2]=h*x+p*v+_*T,s[5]=h*m+p*g+_*C,s[8]=h*u+p*y+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,p=c*s-a*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Fc.makeScale(e,n)),this}rotate(e){return this.premultiply(Fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new Be;function Sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OM(){const t=Ll("canvas");return t.style.display="block",t}const zp={};function Ua(t){t in zp||(zp[t]=!0,console.warn(t))}function kM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Hp=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vp=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BM(){const t={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Pl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ua("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ua("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bs]:{primaries:e,whitePoint:i,transfer:Pl,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Hp,fromXYZ:Vp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),t}const Ke=BM();function _i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class zM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=Ll("canvas")),Br.width=e.width,Br.height=e.height;const r=Br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_i(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_i(n[i]/255)*255):n[i]=_i(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HM=0;class ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;const kc=new G;class an extends Fs{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Er,r=Er,s=Qn,a=wr,o=On,l=ti,c=an.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=ja(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=uv;an.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,T=(u+1)/2,C=(d+h)/4,R=(f+x)/4,P=(_+m)/4;return g>y&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=R/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-x)/v,this.z=(h-d)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GM extends Fs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new an(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ah(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends GM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mv extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WM extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),xo.subVectors(this.max,Qs),zr.subVectors(e.a,Qs),Hr.subVectors(e.b,Qs),Vr.subVectors(e.c,Qs),Ri.subVectors(Hr,zr),bi.subVectors(Vr,Hr),lr.subVectors(zr,Vr);let n=[0,-Ri.z,Ri.y,0,-bi.z,bi.y,0,-lr.z,lr.y,Ri.z,0,-Ri.x,bi.z,0,-bi.x,lr.z,0,-lr.x,-Ri.y,Ri.x,0,-bi.y,bi.x,0,-lr.y,lr.x,0];return!Bc(n,zr,Hr,Vr,xo)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,zr,Hr,Vr,xo))?!1:(yo.crossVectors(Ri,bi),n=[yo.x,yo.y,yo.z],Bc(n,zr,Hr,Vr,xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new G,new G,new G,new G,new G,new G,new G,new G],Pn=new G,_o=new $a,zr=new G,Hr=new G,Vr=new G,Ri=new G,bi=new G,lr=new G,Qs=new G,xo=new G,yo=new G,cr=new G;function Bc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){cr.fromArray(t,s);const o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=n.dot(cr),d=i.dot(cr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const jM=new $a,qs=new G,zc=new G;class oh{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(zc)),this.expandByPoint(qs.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ai=new G,Hc=new G,So=new G,Pi=new G,Vc=new G,Mo=new G,Gc=new G;class Ev{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Hc.copy(e).add(n).multiplyScalar(.5),So.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Hc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(So),o=Pi.dot(this.direction),l=-Pi.dot(So),c=Pi.lengthSq(),d=Math.abs(1-a*a);let f,h,p,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hc).addScaledVector(So,h),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){Vc.subVectors(n,e),Mo.subVectors(i,e),Gc.crossVectors(Vc,Mo);let a=this.direction.dot(Gc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(Mo.crossVectors(Pi,Mo));if(l<0)return null;const c=o*this.direction.dot(Vc.cross(Pi));if(c<0||l+c>a)return null;const d=-o*Pi.dot(Gc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,a,o,l,c,d,f,h,p,_,x,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,p,_,x,m)}set(e,n,i,r,s,a,o,l,c,d,f,h,p,_,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,p=a*f,_=o*d,x=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,x=c*f;n[0]=h+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,x=c*f;n[0]=h-x*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*d,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*f,_=o*d,x=o*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=x-h*f,n[8]=_*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=a*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XM,e,$M)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ni.crossVectors(i,cn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ni.crossVectors(i,cn)),Ni.normalize(),Eo.crossVectors(cn,Ni),r[0]=Ni.x,r[4]=Eo.x,r[8]=cn.x,r[1]=Ni.y,r[5]=Eo.y,r[9]=cn.y,r[2]=Ni.z,r[6]=Eo.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],u=i[14],v=i[3],g=i[7],y=i[11],T=i[15],C=r[0],R=r[4],P=r[8],E=r[12],M=r[1],L=r[5],O=r[9],z=r[13],X=r[2],I=r[6],B=r[10],$=r[14],D=r[3],Y=r[7],K=r[11],se=r[15];return s[0]=a*C+o*M+l*X+c*D,s[4]=a*R+o*L+l*I+c*Y,s[8]=a*P+o*O+l*B+c*K,s[12]=a*E+o*z+l*$+c*se,s[1]=d*C+f*M+h*X+p*D,s[5]=d*R+f*L+h*I+p*Y,s[9]=d*P+f*O+h*B+p*K,s[13]=d*E+f*z+h*$+p*se,s[2]=_*C+x*M+m*X+u*D,s[6]=_*R+x*L+m*I+u*Y,s[10]=_*P+x*O+m*B+u*K,s[14]=_*E+x*z+m*$+u*se,s[3]=v*C+g*M+y*X+T*D,s[7]=v*R+g*L+y*I+T*Y,s[11]=v*P+g*O+y*B+T*K,s[15]=v*E+g*z+y*$+T*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+x*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*d-s*l*d)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],u=e[15],v=f*m*c-x*h*c+x*l*p-o*m*p-f*l*u+o*h*u,g=_*h*c-d*m*c-_*l*p+a*m*p+d*l*u-a*h*u,y=d*x*c-_*f*c+_*o*p-a*x*p-d*o*u+a*f*u,T=_*f*l-d*x*l-_*o*h+a*x*h+d*o*m-a*f*m,C=n*v+i*g+r*y+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=v*R,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*u-i*h*u)*R,e[2]=(o*m*s-x*l*s+x*r*c-i*m*c-o*r*u+i*l*u)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=g*R,e[5]=(d*m*s-_*h*s+_*r*p-n*m*p-d*r*u+n*h*u)*R,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*R,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=y*R,e[9]=(_*f*s-d*x*s-_*i*p+n*x*p+d*i*u-n*f*u)*R,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*R,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*p-n*o*p)*R,e[12]=T*R,e[13]=(d*x*r-_*f*r+_*i*h-n*x*h-d*i*m+n*f*m)*R,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*m-n*o*m)*R,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,p=s*d,_=s*f,x=a*d,m=a*f,u=o*f,v=l*c,g=l*d,y=l*f,T=i.x,C=i.y,R=i.z;return r[0]=(1-(x+u))*T,r[1]=(p+y)*T,r[2]=(_-g)*T,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+u))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(_+g)*R,r[9]=(m-v)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const a=Gr.set(r[4],r[5],r[6]).length(),o=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/a,f=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=qn,l=!1){const c=this.elements,d=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===qn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Nl)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=qn,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===qn)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Nl)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new G,Nn=new St,XM=new G(0,0,0),$M=new G(1,1,1),Ni=new G,Eo=new G,cn=new G,Gp=new St,Wp=new Xa;class ni{constructor(e=0,n=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YM=0;const jp=new G,Wr=new Xa,oi=new St,wo=new G,Ks=new G,QM=new G,qM=new Xa,Xp=new G(1,0,0),$p=new G(0,1,0),Yp=new G(0,0,1),Qp={type:"added"},KM={type:"removed"},jr={type:"childadded",child:null},Wc={type:"childremoved",child:null};class Gt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new G,n=new ni,i=new Xa,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Be}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ks,wo,this.up):oi.lookAt(wo,Ks,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(oi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(KM),Wc.child=e,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,QM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new G(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new G,li=new G,jc=new G,ci=new G,Xr=new G,$r=new G,qp=new G,Xc=new G,$c=new G,Yc=new G,Qc=new yt,qc=new yt,Kc=new yt;class Fn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),li.subVectors(i,n),jc.subVectors(e,n);const a=Ln.dot(Ln),o=Ln.dot(li),l=Ln.dot(jc),c=li.dot(li),d=li.dot(jc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qc.setScalar(0),qc.setScalar(0),Kc.setScalar(0),Qc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qc,s.x),a.addScaledVector(qc,s.y),a.addScaledVector(Kc,s.z),a}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),li.subVectors(e,n),Ln.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Ln.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),$r.subVectors(s,i),Xc.subVectors(e,i);const l=Xr.dot(Xc),c=$r.dot(Xc);if(l<=0&&c<=0)return n.copy(i);$c.subVectors(e,r);const d=Xr.dot($c),f=$r.dot($c);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Xr,a);Yc.subVectors(e,s);const p=Xr.dot(Yc),_=$r.dot(Yc);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector($r,o);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return qp.subVectors(s,r),o=(f-d)/(f-d+(p-_)),n.copy(r).addScaledVector(qp,o);const u=1/(m+x+h);return a=x*u,o=h*u,n.copy(i).addScaledVector(Xr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},To={h:0,s:0,l:0};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ue{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=FM(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Zc(a,s,e+1/3),this.g=Zc(a,s,e),this.b=Zc(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Ke.workingToColorSpace(Ht.copy(this),e),Math.round($e(Ht.r*255,0,255))*65536+Math.round($e(Ht.g*255,0,255))*256+Math.round($e(Ht.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Sn){Ke.workingToColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(To);const i=Ic(Li.h,To.h,n),r=Ic(Li.s,To.s,n),s=Ic(Li.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ue;Ue.NAMES=wv;let ZM=0;class Ya extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=vs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=ad,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends Ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new G,Ao=new Ze;let JM=0;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}}class Tv extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Av extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eE=0;const yn=new St,Jc=new Gt,Yr=new G,un=new $a,Zs=new $a,Nt=new G;class Ai extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Av:Tv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(un.min,Zs.min),un.expandByPoint(Nt),Nt.addVectors(un.max,Zs.max),un.expandByPoint(Nt)):(un.expandByPoint(Zs.min),un.expandByPoint(Zs.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),Nt.add(Yr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new G,l[P]=new G;const c=new G,d=new G,f=new G,h=new Ze,p=new Ze,_=new Ze,x=new G,m=new G;function u(P,E,M){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(L),o[P].add(x),o[E].add(x),o[M].add(x),l[P].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const M=v[P],L=M.start,O=M.count;for(let z=L,X=L+O;z<X;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const g=new G,y=new G,T=new G,C=new G;function R(P){T.fromBufferAttribute(r,P),C.copy(T);const E=o[P];g.copy(E),g.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(C,E);const L=y.dot(l[P])<0?-1:1;a.setXYZW(P,g.x,g.y,g.z,L)}for(let P=0,E=v.length;P<E;++P){const M=v[P],L=M.start,O=M.count;for(let z=L,X=L+O;z<X;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Jn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new St,ur=new Ev,Co=new oh,Zp=new G,Ro=new G,bo=new G,Po=new G,eu=new G,No=new G,Jp=new G,Lo=new G;class kn extends Gt{constructor(e=new Ai,n=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(eu.fromBufferAttribute(f,e),a?No.addScaledVector(eu,d):No.addScaledVector(eu.sub(n),d))}n.add(No)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Co.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Co,Zp)===null||ur.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Kp),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const m=h[_],u=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=g;y<T;y+=3){const C=o.getX(y),R=o.getX(y+1),P=o.getX(y+2);r=Do(this,u,e,i,c,d,f,C,R,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const v=o.getX(m),g=o.getX(m+1),y=o.getX(m+2);r=Do(this,a,e,i,c,d,f,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const m=h[_],u=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=g;y<T;y+=3){const C=y,R=y+1,P=y+2;r=Do(this,u,e,i,c,d,f,C,R,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const v=m,g=m+1,y=m+2;r=Do(this,a,e,i,c,d,f,v,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function tE(t,e,n,i,r,s,a,o){let l;if(e.side===sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===er,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Lo);return c<n.near||c>n.far?null:{distance:c,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ro),t.getVertexPosition(l,bo),t.getVertexPosition(c,Po);const d=tE(t,e,n,i,Ro,bo,Po,Jp);if(d){const f=new G;Fn.getBarycoord(Jp,Ro,bo,Po,f),r&&(d.uv=Fn.getInterpolatedAttribute(r,o,l,c,f,new Ze)),s&&(d.uv1=Fn.getInterpolatedAttribute(s,o,l,c,f,new Ze)),a&&(d.normal=Fn.getInterpolatedAttribute(a,o,l,c,f,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Fn.getNormal(Ro,bo,Po,h.normal),d.face=h,d.barycoord=f}return d}class Qa extends Ai{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(f,2));function _(x,m,u,v,g,y,T,C,R,P,E){const M=y/R,L=T/P,O=y/2,z=T/2,X=C/2,I=R+1,B=P+1;let $=0,D=0;const Y=new G;for(let K=0;K<B;K++){const se=K*L-z;for(let ve=0;ve<I;ve++){const We=ve*M-O;Y[x]=We*v,Y[m]=se*g,Y[u]=X,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(ve/R),f.push(1-K/P),$+=1}}for(let K=0;K<P;K++)for(let se=0;se<R;se++){const ve=h+se+I*K,We=h+se+I*(K+1),ze=h+(se+1)+I*(K+1),He=h+(se+1)+I*K;l.push(ve,We,He),l.push(We,ze,He),D+=6}o.addGroup(p,D,E),p+=D,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function nE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const iE={clone:Ps,merge:Xt};var rE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=nE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Rv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new G,em=new Ze,tm=new Ze;class wn extends Rv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,qr=1;class aE extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Qr,qr,e,n);r.layers=this.layers,this.add(r);const s=new wn(Qr,qr,e,n);s.layers=this.layers,this.add(s);const a=new wn(Qr,qr,e,n);a.layers=this.layers,this.add(a);const o=new wn(Qr,qr,e,n);o.layers=this.layers,this.add(o);const l=new wn(Qr,qr,e,n);l.layers=this.layers,this.add(l);const c=new wn(Qr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class bv extends an{constructor(e=[],n=Cs,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oE extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qa(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:qi});s.uniforms.tEquirect.value=n;const a=new kn(r,s),o=n.minFilter;return n.minFilter===wr&&(n.minFilter=Qn),new aE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Io extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Io;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cE extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nu=new G,uE=new G,dE=new Be;class gr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nu.subVectors(i,n).cross(uE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dE.getNormalMatrix(e),r=this.coplanarPoint(nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new oh,fE=new Ze(.5,.5),Uo=new G;class ch{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],f=s[5],h=s[6],p=s[7],_=s[8],x=s[9],m=s[10],u=s[11],v=s[12],g=s[13],y=s[14],T=s[15];if(r[0].setComponents(c-a,p-d,u-_,T-v).normalize(),r[1].setComponents(c+a,p+d,u+_,T+v).normalize(),r[2].setComponents(c+o,p+f,u+x,T+g).normalize(),r[3].setComponents(c-o,p-f,u-x,T-g).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(c-l,p-h,u-m,T-y).normalize();else if(r[4].setComponents(c-l,p-h,u-m,T-y).normalize(),n===qn)r[5].setComponents(c+l,p+h,u+m,T+y).normalize();else if(n===Nl)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const n=fE.distanceTo(e.center);return dr.radius=.7071067811865476+n,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Uo.x=r.normal.x>0?e.max.x:e.min.x,Uo.y=r.normal.y>0?e.max.y:e.min.y,Uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends an{constructor(e,n,i=Lr,r,s,a,o=Hn,l=Hn,c,d=Da,f=1){if(d!==Da&&d!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ah(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nv extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uh extends Ai{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],d=n/2,f=Math.PI/2*e,h=n,p=2*f+h,_=i*2+s,x=r+1,m=new G,u=new G;for(let v=0;v<=_;v++){let g=0,y=0,T=0,C=0;if(v<=i){const E=v/i,M=E*Math.PI/2;y=-d-e*Math.cos(M),T=e*Math.sin(M),C=-e*Math.cos(M),g=E*f}else if(v<=i+s){const E=(v-i)/s;y=-d+E*n,T=e,C=0,g=f+E*h}else{const E=(v-i-s)/i,M=E*Math.PI/2;y=d+e*Math.sin(M),T=e*Math.cos(M),C=e*Math.sin(M),g=f+h+E*f}const R=Math.max(0,Math.min(1,g/p));let P=0;v===0?P=.5/r:v===_&&(P=-.5/r);for(let E=0;E<=r;E++){const M=E/r,L=M*Math.PI*2,O=Math.sin(L),z=Math.cos(L);u.x=-T*z,u.y=y,u.z=T*O,o.push(u.x,u.y,u.z),m.set(-T*z,C,T*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+P,R)}if(v>0){const E=(v-1)*x;for(let M=0;M<r;M++){const L=E+M,O=E+M+1,z=v*x+M,X=v*x+M+1;a.push(L,O,z),a.push(O,X,z)}}}this.setIndex(a),this.setAttribute("position",new pn(o,3)),this.setAttribute("normal",new pn(l,3)),this.setAttribute("uv",new pn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ec extends Ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,p=[],_=[],x=[],m=[];for(let u=0;u<d;u++){const v=u*h-a;for(let g=0;g<c;g++){const y=g*f-s;_.push(y,-v,0),x.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,y=v+c*(u+1),T=v+1+c*(u+1),C=v+1+c*u;p.push(g,y,C),p.push(y,T,C)}this.setIndex(p),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bi extends Ai{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new G,h=new G,p=[],_=[],x=[],m=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let y=0;u===0&&a===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let T=0;T<=n;T++){const C=T/n;f.x=-e*Math.cos(r+C*s)*Math.sin(a+g*o),f.y=e*Math.cos(a+g*o),f.z=e*Math.sin(r+C*s)*Math.sin(a+g*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+y,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],y=d[u][v],T=d[u+1][v],C=d[u+1][v+1];(u!==0||a>0)&&p.push(g,y,C),(u!==i-1||l<Math.PI)&&p.push(y,T,C)}this.setIndex(p),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $d extends Ya{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xv,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hE extends Ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pE extends Ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lv extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const iu=new St,nm=new G,im=new G;class mE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(nm),im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(im),n.updateMatrixWorld(),iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dv extends Rv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class gE extends mE{constructor(){super(new Dv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rm extends Lv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new gE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vE extends Lv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _E extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const sm=new St;class xE{constructor(e,n,i=0,r=1/0){this.ray=new Ev(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sm),this}intersectObject(e,n=!0,i=[]){return Yd(e,this,i,n),i.sort(am),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yd(e[r],this,i,n);return i.sort(am),i}}function am(t,e){return t.distance-e.distance}function Yd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Yd(s[a],e,n,!0)}}function om(t,e,n,i){const r=yE(i);switch(n){case mv:return t*e;case vv:return t*e/r.components*r.byteLength;case ih:return t*e/r.components*r.byteLength;case _v:return t*e*2/r.components*r.byteLength;case rh:return t*e*2/r.components*r.byteLength;case gv:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case sh:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(t,16)*Math.max(e,8)/4;case _d:case yd:return Math.max(t,8)*Math.max(e,8)/2;case Md:case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bd:case zd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Vd:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yE(t){switch(t){case ti:case dv:return{byteLength:1,components:1};case Na:case fv:case Wa:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Lr:case eh:case mi:return{byteLength:4,components:1};case hv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SE(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ME=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZE="gl_FragColor = linearToOutputTexel( gl_FragColor );",JE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,y1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,S1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,j1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ew=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:ME,alphahash_pars_fragment:EE,alphamap_fragment:wE,alphamap_pars_fragment:TE,alphatest_fragment:AE,alphatest_pars_fragment:CE,aomap_fragment:RE,aomap_pars_fragment:bE,batching_pars_vertex:PE,batching_vertex:NE,begin_vertex:LE,beginnormal_vertex:DE,bsdfs:IE,iridescence_fragment:UE,bumpmap_pars_fragment:FE,clipping_planes_fragment:OE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:zE,color_fragment:HE,color_pars_fragment:VE,color_pars_vertex:GE,color_vertex:WE,common:jE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:$E,displacementmap_pars_vertex:YE,displacementmap_vertex:QE,emissivemap_fragment:qE,emissivemap_pars_fragment:KE,colorspace_fragment:ZE,colorspace_pars_fragment:JE,envmap_fragment:e1,envmap_common_pars_fragment:t1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:r1,fog_vertex:s1,fog_pars_vertex:a1,fog_fragment:o1,fog_pars_fragment:l1,gradientmap_pars_fragment:c1,lightmap_pars_fragment:u1,lights_lambert_fragment:d1,lights_lambert_pars_fragment:f1,lights_pars_begin:h1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:v1,lights_phong_pars_fragment:_1,lights_physical_fragment:x1,lights_physical_pars_fragment:y1,lights_fragment_begin:S1,lights_fragment_maps:M1,lights_fragment_end:E1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:A1,logdepthbuf_vertex:C1,map_fragment:R1,map_pars_fragment:b1,map_particle_fragment:P1,map_particle_pars_fragment:N1,metalnessmap_fragment:L1,metalnessmap_pars_fragment:D1,morphinstance_vertex:I1,morphcolor_vertex:U1,morphnormal_vertex:F1,morphtarget_pars_vertex:O1,morphtarget_vertex:k1,normal_fragment_begin:B1,normal_fragment_maps:z1,normal_pars_fragment:H1,normal_pars_vertex:V1,normal_vertex:G1,normalmap_pars_fragment:W1,clearcoat_normal_fragment_begin:j1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:Y1,opaque_fragment:Q1,packing:q1,premultiplied_alpha_fragment:K1,project_vertex:Z1,dithering_fragment:J1,dithering_pars_fragment:ew,roughnessmap_fragment:tw,roughnessmap_pars_fragment:nw,shadowmap_pars_fragment:iw,shadowmap_pars_vertex:rw,shadowmap_vertex:sw,shadowmask_pars_fragment:aw,skinbase_vertex:ow,skinning_pars_vertex:lw,skinning_vertex:cw,skinnormal_vertex:uw,specularmap_fragment:dw,specularmap_pars_fragment:fw,tonemapping_fragment:hw,tonemapping_pars_fragment:pw,transmission_fragment:mw,transmission_pars_fragment:gw,uv_pars_fragment:vw,uv_pars_vertex:_w,uv_vertex:xw,worldpos_vertex:yw,background_vert:Sw,background_frag:Mw,backgroundCube_vert:Ew,backgroundCube_frag:ww,cube_vert:Tw,cube_frag:Aw,depth_vert:Cw,depth_frag:Rw,distanceRGBA_vert:bw,distanceRGBA_frag:Pw,equirect_vert:Nw,equirect_frag:Lw,linedashed_vert:Dw,linedashed_frag:Iw,meshbasic_vert:Uw,meshbasic_frag:Fw,meshlambert_vert:Ow,meshlambert_frag:kw,meshmatcap_vert:Bw,meshmatcap_frag:zw,meshnormal_vert:Hw,meshnormal_frag:Vw,meshphong_vert:Gw,meshphong_frag:Ww,meshphysical_vert:jw,meshphysical_frag:Xw,meshtoon_vert:$w,meshtoon_frag:Yw,points_vert:Qw,points_frag:qw,shadow_vert:Kw,shadow_frag:Zw,sprite_vert:Jw,sprite_frag:eT},ue={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Xn={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Xn.physical={uniforms:Xt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Fo={r:0,b:0,g:0},fr=new ni,tT=new St;function nT(t,e,n,i,r,s,a){const o=new Ue(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function _(g){let y=g.isScene===!0?g.background:null;return y&&y.isTexture&&(y=(g.backgroundBlurriness>0?n:e).get(y)),y}function x(g){let y=!1;const T=_(g);T===null?u(o,l):T&&T.isColor&&(u(T,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,y){const T=_(y);T&&(T.isCubeTexture||T.mapping===Jl)?(d===void 0&&(d=new kn(new Qa(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Ps(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),fr.copy(y.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(fr)),d.material.toneMapped=Ke.getTransfer(T.colorSpace)!==nt,(f!==T||h!==T.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=T,h=T.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new kn(new ec(2,2),new tr({name:"BackgroundMaterial",uniforms:Ps(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,y){g.getRGB(Fo,Cv(t)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,y,a)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:x,addToRenderList:m,dispose:v}}function iT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,L,O,z,X){let I=!1;const B=f(z,O,L);s!==B&&(s=B,c(s.object)),I=p(M,z,O,X),I&&_(M,z,O,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,y(M,L,O,z),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,L,O){const z=O.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let I=X[L.id];I===void 0&&(I={},X[L.id]=I);let B=I[z];return B===void 0&&(B=h(l()),I[z]=B),B}function h(M){const L=[],O=[],z=[];for(let X=0;X<n;X++)L[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,L,O,z){const X=s.attributes,I=L.attributes;let B=0;const $=O.getAttributes();for(const D in $)if($[D].location>=0){const K=X[D];let se=I[D];if(se===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;B++}return s.attributesNum!==B||s.index!==z}function _(M,L,O,z){const X={},I=L.attributes;let B=0;const $=O.getAttributes();for(const D in $)if($[D].location>=0){let K=I[D];K===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),X[D]=se,B++}s.attributes=X,s.attributesNum=B,s.index=z}function x(){const M=s.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){const O=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;O[M]=1,z[M]===0&&(t.enableVertexAttribArray(M),z[M]=1),X[M]!==L&&(t.vertexAttribDivisor(M,L),X[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==M[O]&&(t.disableVertexAttribArray(O),L[O]=0)}function g(M,L,O,z,X,I,B){B===!0?t.vertexAttribIPointer(M,L,O,X,I):t.vertexAttribPointer(M,L,O,z,X,I)}function y(M,L,O,z){x();const X=z.attributes,I=O.getAttributes(),B=L.defaultAttributeValues;for(const $ in I){const D=I[$];if(D.location>=0){let Y=X[$];if(Y===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const K=Y.normalized,se=Y.itemSize,ve=e.get(Y);if(ve===void 0)continue;const We=ve.buffer,ze=ve.type,He=ve.bytesPerElement,q=ze===t.INT||ze===t.UNSIGNED_INT||Y.gpuType===eh;if(Y.isInterleavedBufferAttribute){const ee=Y.data,_e=ee.stride,Ie=Y.offset;if(ee.isInstancedInterleavedBuffer){for(let Ce=0;Ce<D.locationSize;Ce++)u(D.location+Ce,ee.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ce=0;Ce<D.locationSize;Ce++)m(D.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ce=0;Ce<D.locationSize;Ce++)g(D.location+Ce,se/D.locationSize,ze,K,_e*He,(Ie+se/D.locationSize*Ce)*He,q)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<D.locationSize;ee++)u(D.location+ee,Y.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<D.locationSize;ee++)m(D.location+ee);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ee=0;ee<D.locationSize;ee++)g(D.location+ee,se/D.locationSize,ze,K,se*He,se/D.locationSize*ee*He,q)}}else if(B!==void 0){const K=B[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(D.location,K);break;case 3:t.vertexAttrib3fv(D.location,K);break;case 4:t.vertexAttrib4fv(D.location,K);break;default:t.vertexAttrib1fv(D.location,K)}}}}v()}function T(){P();for(const M in i){const L=i[M];for(const O in L){const z=L[O];for(const X in z)d(z[X].object),delete z[X];delete L[O]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const O in L){const z=L[O];for(const X in z)d(z[X].object),delete z[X];delete L[O]}delete i[M.id]}function R(M){for(const L in i){const O=i[L];if(O[M.id]===void 0)continue;const z=O[M.id];for(const X in z)d(z[X].object),delete z[X];delete O[M.id]}}function P(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function rT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x]*h[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==On&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ti&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mi&&!P)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:T,maxSamples:C}}function aT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new gr,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,g=v*4;let y=u.clippingState||null;l.value=y,y=d(_,h,g,p);for(let T=0;T!==g;++T)y[T]=n[T];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const u=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,y=p;g!==x;++g,y+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function oT(t){let e=new WeakMap;function n(a,o){return o===pd?a.mapping=Cs:o===md&&(a.mapping=Rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===pd||o===md)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new oE(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const us=4,lm=[.125,.215,.35,.446,.526,.582],xr=20,ru=new Dv,cm=new Ue;let su=null,au=0,ou=0,lu=!1;const vr=(1+Math.sqrt(5))/2,Kr=1/vr,um=[new G(-vr,Kr,0),new G(vr,Kr,0),new G(-Kr,0,vr),new G(Kr,0,vr),new G(0,vr,-Kr),new G(0,vr,Kr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],lT=new G;class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=lT}=s;su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,au,ou),this._renderer.xr.enabled=lu,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Cs||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Wa,format:On,colorSpace:bs,depthBuffer:!1},r=fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(s)),this._blurMaterial=uT(s,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,ru)}_sceneToCubeUV(e,n,i,r,s){const l=new wn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(cm),f.toneMapping=Ki,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new Dl({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new kn(new Qa,x);let u=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,u=!0):(x.color.copy(cm),u=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[g],s.y,s.z)):y===1?(l.up.set(0,0,c[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[g],s.z)):(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[g]));const T=this._cubeSize;Oo(r,y*T,g>2?T:0,T,T),f.setRenderTarget(r),u&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Cs||e.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new kn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Oo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=um[(r-s-1)%um.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new kn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),x=s/_,m=isFinite(s)?1+Math.floor(d*x):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const u=[];let v=0;for(let R=0;R<xr;++R){const P=R/x,E=Math.exp(-P*P/2);u.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const y=this._sizeLods[r],T=3*y*(r>g-us?r-g+us:0),C=4*(this._cubeSize-y);Oo(n,T,C,3*y,2*y),l.setRenderTarget(n),l.render(f,ru)}}function cT(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+lm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-us?l=lm[a-t+us-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,x=3,m=2,u=1,v=new Float32Array(x*_*p),g=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,P=C>2?0:-1,E=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(E,x*_*C),g.set(h,m*_*C);const M=[C,C,C,C,C,C];y.set(M,u*_*C)}const T=new Ai;T.setAttribute("position",new Jn(v,x)),T.setAttribute("uv",new Jn(g,m)),T.setAttribute("faceIndex",new Jn(y,u)),e.push(T),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fm(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uT(t,e,n){const i=new Float32Array(xr),r=new G(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hm(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function pm(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pd||l===md,d=l===Cs||l===Rs;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new dm(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ua("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let g=0,y=v.length;g<y;g+=3){const T=v[g+0],C=v[g+1],R=v[g+2];h.push(T,C,C,R,R,T)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const T=g+0,C=g+1,R=g+2;h.push(T,C,C,R,R,T)}}else return;const m=new(Sv(h)?Av:Tv)(h,1);m.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function pT(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*a,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let u=0;for(let v=0;v<_;v++)u+=p[v]*x[v];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function mT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gT(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let T=o.attributes.position.count*y,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*C*4*f),P=new Mv(R,T,C,f);P.type=mi,P.needsUpdate=!0;const E=y*4;for(let L=0;L<f;L++){const O=u[L],z=v[L],X=g[L],I=T*C*4*L;for(let B=0;B<O.count;B++){const $=B*E;_===!0&&(r.fromBufferAttribute(O,B),R[I+$+0]=r.x,R[I+$+1]=r.y,R[I+$+2]=r.z,R[I+$+3]=0),x===!0&&(r.fromBufferAttribute(z,B),R[I+$+4]=r.x,R[I+$+5]=r.y,R[I+$+6]=r.z,R[I+$+7]=0),m===!0&&(r.fromBufferAttribute(X,B),R[I+$+8]=r.x,R[I+$+9]=r.y,R[I+$+10]=r.z,R[I+$+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Ze(T,C)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function vT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Uv=new an,mm=new Pv(1,1),Fv=new Mv,Ov=new WM,kv=new bv,gm=[],vm=[],_m=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;ym.set(i),t.uniformMatrix2fv(this.addr,!1,ym),bt(n,i)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),bt(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),bt(n,i)}}function TT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function DT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mm.compareFunction=yv,s=mm):s=Uv,n.setTexture2D(e||s,r)}function IT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ov,r)}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kv,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fv,r)}function OT(t){switch(t){case 5126:return _T;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return wT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return bT;case 36294:return PT;case 36295:return NT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return FT}}function kT(t,e){t.uniform1fv(this.addr,e)}function BT(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function zT(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function HT(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function VT(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GT(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WT(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jT(t,e){t.uniform1iv(this.addr,e)}function XT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function YT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function qT(t,e){t.uniform2uiv(this.addr,e)}function KT(t,e){t.uniform3uiv(this.addr,e)}function ZT(t,e){t.uniform4uiv(this.addr,e)}function JT(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Uv,s[a])}function eA(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ov,s[a])}function tA(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||kv,s[a])}function nA(t,e,n){const i=this.cache,r=e.length,s=tc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Fv,s[a])}function iA(t){switch(t){case 5126:return kT;case 35664:return BT;case 35665:return zT;case 35666:return HT;case 35674:return VT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return jT;case 35667:case 35671:return XT;case 35668:case 35672:return $T;case 35669:case 35673:return YT;case 5125:return QT;case 36294:return qT;case 36295:return KT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return nA}}class rA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=OT(n.type)}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iA(n.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function oA(t,e,n){const i=t.name,r=i.length;for(cu.lastIndex=0;;){const s=cu.exec(i),a=cu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sm(n,c===void 0?new rA(o,t,e):new sA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new aA(o),Sm(n,f)),n=f}}}class rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);oA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lA=37297;let cA=0;function uA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Em=new Be;function dA(t){Ke._getMatrix(Em,Ke.workingColorSpace,t);const e=`mat3( ${Em.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Pl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+uA(t.getShaderSource(e),o)}else return s}function fA(t,e){const n=dA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function hA(t,e){let n;switch(e){case _M:n="Linear";break;case xM:n="Reinhard";break;case yM:n="Cineon";break;case SM:n="ACESFilmic";break;case EM:n="AgX";break;case wM:n="Neutral";break;case MM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ko=new G;function pA(){Ke.getLuminanceCoefficients(ko);const t=ko.x.toFixed(4),e=ko.y.toFixed(4),n=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function gA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ia(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(t){return t.replace(_A,yA)}const xA=new Map;function yA(t,e){let n=Ge[e];if(n===void 0){const i=xA.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(SA,MA)}function MA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function wA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Cs:case Rs:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function AA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jf:e="ENVMAP_BLENDING_MULTIPLY";break;case gM:e="ENVMAP_BLENDING_MIX";break;case vM:e="ENVMAP_BLENDING_ADD";break}return e}function CA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=EA(n),c=wA(n),d=TA(n),f=AA(n),h=CA(n),p=mA(n),_=gA(s),x=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ia).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ia).join(`
`),u.length>0&&(u+=`
`)):(m=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),u=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ki?hA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,fA("linearToOutputTexel",n.outputColorSpace),pA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),a=Qd(a),a=Tm(a,n),a=Am(a,n),o=Qd(o),o=Tm(o,n),o=Am(o,n),a=Cm(a),o=Cm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+m+a,y=v+u+o,T=Mm(r,r.VERTEX_SHADER,g),C=Mm(r,r.FRAGMENT_SHADER,y);r.attachShader(x,T),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(L){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",z=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(C)||"",I=O.trim(),B=z.trim(),$=X.trim();let D=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,T,C);else{const K=wm(r,T,"vertex"),se=wm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+K+`
`+se)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||$==="")&&(Y=!1);Y&&(L.diagnostics={runnable:D,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(T),r.deleteShader(C),P=new rl(r,x),E=vA(r,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,lA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}let bA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function LA(t,e,n,i,r,s,a){const o=new lh,l=new PA,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,O,z){const X=O.fog,I=z.geometry,B=E.isMeshStandardMaterial?O.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||B),D=$&&$.mapping===Jl?$.image.height:null,Y=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=K!==void 0?K.length:0;let ve=0;I.morphAttributes.position!==void 0&&(ve=1),I.morphAttributes.normal!==void 0&&(ve=2),I.morphAttributes.color!==void 0&&(ve=3);let We,ze,He,q;if(Y){const Je=Xn[Y];We=Je.vertexShader,ze=Je.fragmentShader}else We=E.vertexShader,ze=E.fragmentShader,l.update(E),He=l.getVertexShaderID(E),q=l.getFragmentShaderID(E);const ee=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,Ye=!!E.map,Ot=!!E.matcap,N=!!$,ct=!!E.aoMap,Oe=!!E.lightMap,Le=!!E.bumpMap,Se=!!E.normalMap,ut=!!E.displacementMap,Me=!!E.emissiveMap,Ve=!!E.metalnessMap,Pt=!!E.roughnessMap,Mt=E.anisotropy>0,b=E.clearcoat>0,S=E.dispersion>0,H=E.iridescence>0,Z=E.sheen>0,te=E.transmission>0,Q=Mt&&!!E.anisotropyMap,Ae=b&&!!E.clearcoatMap,le=b&&!!E.clearcoatNormalMap,Ee=b&&!!E.clearcoatRoughnessMap,we=H&&!!E.iridescenceMap,ae=H&&!!E.iridescenceThicknessMap,he=Z&&!!E.sheenColorMap,Ne=Z&&!!E.sheenRoughnessMap,Te=!!E.specularMap,de=!!E.specularColorMap,ke=!!E.specularIntensityMap,U=te&&!!E.transmissionMap,oe=te&&!!E.thicknessMap,ce=!!E.gradientMap,ge=!!E.alphaMap,ie=E.alphaTest>0,J=!!E.alphaHash,ye=!!E.extensions;let Fe=Ki;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const rt={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:ze,defines:E.defines,customVertexShaderID:He,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:bs,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Ot,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:D,aoMap:ct,lightMap:Oe,bumpMap:Le,normalMap:Se,displacementMap:h&&ut,emissiveMap:Me,normalMapObjectSpace:Se&&E.normalMapType===RM,normalMapTangentSpace:Se&&E.normalMapType===xv,metalnessMap:Ve,roughnessMap:Pt,anisotropy:Mt,anisotropyMap:Q,clearcoat:b,clearcoatMap:Ae,clearcoatNormalMap:le,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:H,iridescenceMap:we,iridescenceThicknessMap:ae,sheen:Z,sheenColorMap:he,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:de,specularIntensityMap:ke,transmission:te,transmissionMap:U,thicknessMap:oe,gradientMap:ce,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:ie,alphaHash:J,combine:E.combine,mapUv:Ye&&x(E.map.channel),aoMapUv:ct&&x(E.aoMap.channel),lightMapUv:Oe&&x(E.lightMap.channel),bumpMapUv:Le&&x(E.bumpMap.channel),normalMapUv:Se&&x(E.normalMap.channel),displacementMapUv:ut&&x(E.displacementMap.channel),emissiveMapUv:Me&&x(E.emissiveMap.channel),metalnessMapUv:Ve&&x(E.metalnessMap.channel),roughnessMapUv:Pt&&x(E.roughnessMap.channel),anisotropyMapUv:Q&&x(E.anisotropyMap.channel),clearcoatMapUv:Ae&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(E.sheenRoughnessMap.channel),specularMapUv:Te&&x(E.specularMap.channel),specularColorMapUv:de&&x(E.specularColorMap.channel),specularIntensityMapUv:ke&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:oe&&x(E.thicknessMap.channel),alphaMapUv:ge&&x(E.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Se||Mt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!I.attributes.uv&&(Ye||ge),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&Ke.getTransfer(E.map.colorSpace)===nt,decodeVideoTextureEmissive:Me&&E.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(E.emissiveMap.colorSpace)===nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yn,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&E.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(M,E),g(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function g(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const M=_[E.type];let L;if(M){const O=Xn[M];L=iE.clone(O.uniforms)}else L=E.uniforms;return L}function T(E,M){let L;for(let O=0,z=d.length;O<z;O++){const X=d[O];if(X.cacheKey===M){L=X,++L.usedTimes;break}}return L===void 0&&(L=new RA(t,M,E,s),d.push(L)),L}function C(E){if(--E.usedTimes===0){const M=d.indexOf(E);d[M]=d[d.length-1],d.pop(),E.destroy()}}function R(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:R,programs:d,dispose:P}}function DA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function IA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,_,x,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function o(f,h,p,_,x,m){const u=a(f,h,p,_,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,_,x,m){const u=a(f,h,p,_,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||IA),i.length>1&&i.sort(h||bm),r.length>1&&r.sort(h||bm)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function UA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Pm,t.set(i,[a])):r>=s.length?(a=new Pm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function FA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Ue};break;case"SpotLight":n={position:new G,direction:new G,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kA=0;function BA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zA(t){const e=new FA,n=OA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new St,a=new St;function o(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,v=0,g=0,y=0,T=0,C=0,R=0;c.sort(BA);for(let E=0,M=c.length;E<M;E++){const L=c[E],O=L.color,z=L.intensity,X=L.distance,I=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*z,f+=O.g*z,h+=O.b*z;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],z);R++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,D=n.get(L);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=B,p++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(O).multiplyScalar(z),B.distance=X,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[x]=B;const $=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[x]=$.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=I,y++}x++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(O).multiplyScalar(z),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=B,m++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const $=L.shadow,D=n.get(L);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[_]=D,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=L.shadow.matrix,g++}i.point[_]=B,_++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(z),B.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[u]=B,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==v||P.numPointShadows!==g||P.numSpotShadows!==y||P.numSpotMaps!==T||P.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=v,P.numPointShadows=g,P.numSpotShadows=y,P.numSpotMaps=T,P.numLightProbes=R,i.version=kA++)}function l(c,d){let f=0,h=0,p=0,_=0,x=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(g.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Nm(t){const e=new zA(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function HA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nm(t),e.set(r,[o])):s>=a.length?(o=new Nm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WA(t,e,n){let i=new ch;const r=new Ze,s=new Ze,a=new yt,o=new hE({depthPacking:CM}),l=new pE,c={},d=n.maxTextureSize,f={[er]:sn,[sn]:er,[Yn]:Yn},h=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:VA,fragmentShader:GA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ai;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new kn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let u=this.type;this.render=function(C,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),O=t.state;O.setBlending(qi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=u!==ui&&this.type===ui,X=u===ui&&this.type!==ui;for(let I=0,B=C.length;I<B;I++){const $=C[I],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||z===!0||X===!0){const se=this.type!==ui?{minFilter:Hn,magFilter:Hn}:{};D.map!==null&&D.map.dispose(),D.map=new Dr(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const K=D.getViewportCount();for(let se=0;se<K;se++){const ve=D.getViewport(se);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),O.viewport(a),D.updateMatrices($,se),i=D.getFrustum(),y(R,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ui&&v(D,P),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,M,L)};function v(C,R){const P=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Dr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,P,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,P,p,x,null)}function g(C,R,P,E){let M=null;const L=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=M.uuid,z=R.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let I=X[z];I===void 0&&(I=M.clone(),X[z]=I,R.addEventListener("dispose",T)),M=I}if(M.visible=R.visible,M.wireframe=R.wireframe,E===ui?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=t.properties.get(M);O.light=P}return M}function y(C,R,P,E,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const z=e.update(C),X=C.material;if(Array.isArray(X)){const I=z.groups;for(let B=0,$=I.length;B<$;B++){const D=I[B],Y=X[D.materialIndex];if(Y&&Y.visible){const K=g(C,Y,E,M);C.onBeforeShadow(t,C,R,P,z,K,D),t.renderBufferDirect(P,null,z,K,C,D),C.onAfterShadow(t,C,R,P,z,K,D)}}}else if(X.visible){const I=g(C,X,E,M);C.onBeforeShadow(t,C,R,P,z,I,null),t.renderBufferDirect(P,null,z,I,C,null),C.onAfterShadow(t,C,R,P,z,I,null)}}const O=C.children;for(let z=0,X=O.length;z<X;z++)y(O[z],R,P,E,M)}function T(C){C.target.removeEventListener("dispose",T);for(const P in c){const E=c[P],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const jA={[od]:ld,[cd]:fd,[ud]:hd,[As]:dd,[ld]:od,[fd]:cd,[hd]:ud,[dd]:As};function XA(t,e){function n(){let U=!1;const oe=new yt;let ce=null;const ge=new yt(0,0,0,0);return{setMask:function(ie){ce!==ie&&!U&&(t.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){U=ie},setClear:function(ie,J,ye,Fe,rt){rt===!0&&(ie*=Fe,J*=Fe,ye*=Fe),oe.set(ie,J,ye,Fe),ge.equals(oe)===!1&&(t.clearColor(ie,J,ye,Fe),ge.copy(oe))},reset:function(){U=!1,ce=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,oe=!1,ce=null,ge=null,ie=null;return{setReversed:function(J){if(oe!==J){const ye=e.get("EXT_clip_control");J?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),oe=J;const Fe=ie;ie=null,this.setClear(Fe)}},getReversed:function(){return oe},setTest:function(J){J?ee(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(J){ce!==J&&!U&&(t.depthMask(J),ce=J)},setFunc:function(J){if(oe&&(J=jA[J]),ge!==J){switch(J){case od:t.depthFunc(t.NEVER);break;case ld:t.depthFunc(t.ALWAYS);break;case cd:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case ud:t.depthFunc(t.EQUAL);break;case dd:t.depthFunc(t.GEQUAL);break;case fd:t.depthFunc(t.GREATER);break;case hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=J}},setLocked:function(J){U=J},setClear:function(J){ie!==J&&(oe&&(J=1-J),t.clearDepth(J),ie=J)},reset:function(){U=!1,ce=null,ge=null,ie=null,oe=!1}}}function r(){let U=!1,oe=null,ce=null,ge=null,ie=null,J=null,ye=null,Fe=null,rt=null;return{setTest:function(Je){U||(Je?ee(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!U&&(t.stencilMask(Je),oe=Je)},setFunc:function(Je,ri,Gn){(ce!==Je||ge!==ri||ie!==Gn)&&(t.stencilFunc(Je,ri,Gn),ce=Je,ge=ri,ie=Gn)},setOp:function(Je,ri,Gn){(J!==Je||ye!==ri||Fe!==Gn)&&(t.stencilOp(Je,ri,Gn),J=Je,ye=ri,Fe=Gn)},setLocked:function(Je){U=Je},setClear:function(Je){rt!==Je&&(t.clearStencil(Je),rt=Je)},reset:function(){U=!1,oe=null,ce=null,ge=null,ie=null,J=null,ye=null,Fe=null,rt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,u=null,v=null,g=null,y=null,T=null,C=null,R=new Ue(0,0,0),P=0,E=!1,M=null,L=null,O=null,z=null,X=null;const I=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),B=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),B=$>=2);let Y=null,K={};const se=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),We=new yt().fromArray(se),ze=new yt().fromArray(ve);function He(U,oe,ce,ge){const ie=new Uint8Array(4),J=t.createTexture();t.bindTexture(U,J),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<ce;ye++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(oe+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return J}const q={};q[t.TEXTURE_2D]=He(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=He(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=He(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=He(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(As),Le(!1),Se(Lp),ee(t.CULL_FACE),ct(qi);function ee(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function _e(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Ie(U,oe){return f[U]!==oe?(t.bindFramebuffer(U,oe),f[U]=oe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ce(U,oe){let ce=p,ge=!1;if(U){ce=h.get(oe),ce===void 0&&(ce=[],h.set(oe,ce));const ie=U.textures;if(ce.length!==ie.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let J=0,ye=ie.length;J<ye;J++)ce[J]=t.COLOR_ATTACHMENT0+J;ce.length=ie.length,ge=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ce)}function Ye(U){return _!==U?(t.useProgram(U),_=U,!0):!1}const Ot={[_r]:t.FUNC_ADD,[JS]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};Ot[tM]=t.MIN,Ot[nM]=t.MAX;const N={[iM]:t.ZERO,[rM]:t.ONE,[sM]:t.SRC_COLOR,[sd]:t.SRC_ALPHA,[dM]:t.SRC_ALPHA_SATURATE,[cM]:t.DST_COLOR,[oM]:t.DST_ALPHA,[aM]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[uM]:t.ONE_MINUS_DST_COLOR,[lM]:t.ONE_MINUS_DST_ALPHA,[fM]:t.CONSTANT_COLOR,[hM]:t.ONE_MINUS_CONSTANT_COLOR,[pM]:t.CONSTANT_ALPHA,[mM]:t.ONE_MINUS_CONSTANT_ALPHA};function ct(U,oe,ce,ge,ie,J,ye,Fe,rt,Je){if(U===qi){x===!0&&(_e(t.BLEND),x=!1);return}if(x===!1&&(ee(t.BLEND),x=!0),U!==ZS){if(U!==m||Je!==E){if((u!==_r||y!==_r)&&(t.blendEquation(t.FUNC_ADD),u=_r,y=_r),Je)switch(U){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ip:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Up:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,g=null,T=null,C=null,R.set(0,0,0),P=0,m=U,E=Je}return}ie=ie||oe,J=J||ce,ye=ye||ge,(oe!==u||ie!==y)&&(t.blendEquationSeparate(Ot[oe],Ot[ie]),u=oe,y=ie),(ce!==v||ge!==g||J!==T||ye!==C)&&(t.blendFuncSeparate(N[ce],N[ge],N[J],N[ye]),v=ce,g=ge,T=J,C=ye),(Fe.equals(R)===!1||rt!==P)&&(t.blendColor(Fe.r,Fe.g,Fe.b,rt),R.copy(Fe),P=rt),m=U,E=!1}function Oe(U,oe){U.side===Yn?_e(t.CULL_FACE):ee(t.CULL_FACE);let ce=U.side===sn;oe&&(ce=!ce),Le(ce),U.blending===vs&&U.transparent===!1?ct(qi):ct(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(U){M!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),M=U)}function Se(U){U!==qS?(ee(t.CULL_FACE),U!==L&&(U===Lp?t.cullFace(t.BACK):U===KS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),L=U}function ut(U){U!==O&&(B&&t.lineWidth(U),O=U)}function Me(U,oe,ce){U?(ee(t.POLYGON_OFFSET_FILL),(z!==oe||X!==ce)&&(t.polygonOffset(oe,ce),z=oe,X=ce)):_e(t.POLYGON_OFFSET_FILL)}function Ve(U){U?ee(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function Pt(U){U===void 0&&(U=t.TEXTURE0+I-1),Y!==U&&(t.activeTexture(U),Y=U)}function Mt(U,oe,ce){ce===void 0&&(Y===null?ce=t.TEXTURE0+I-1:ce=Y);let ge=K[ce];ge===void 0&&(ge={type:void 0,texture:void 0},K[ce]=ge),(ge.type!==U||ge.texture!==oe)&&(Y!==ce&&(t.activeTexture(ce),Y=ce),t.bindTexture(U,oe||q[U]),ge.type=U,ge.texture=oe)}function b(){const U=K[Y];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(U){We.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function Ne(U){ze.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function Te(U,oe){let ce=c.get(oe);ce===void 0&&(ce=new WeakMap,c.set(oe,ce));let ge=ce.get(U);ge===void 0&&(ge=t.getUniformBlockIndex(oe,U.name),ce.set(U,ge))}function de(U,oe){const ge=c.get(oe).get(U);l.get(oe)!==ge&&(t.uniformBlockBinding(oe,ge,U.__bindingPointIndex),l.set(oe,ge))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Y=null,K={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,u=null,v=null,g=null,y=null,T=null,C=null,R=new Ue(0,0,0),P=0,E=!1,M=null,L=null,O=null,z=null,X=null,We.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Ie,drawBuffers:Ce,useProgram:Ye,setBlending:ct,setMaterial:Oe,setFlipSided:Le,setCullFace:Se,setLineWidth:ut,setPolygonOffset:Me,setScissorTest:Ve,activeTexture:Pt,bindTexture:Mt,unbindTexture:b,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:we,texImage3D:ae,updateUBOMapping:Te,uniformBlockBinding:de,texStorage2D:le,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:te,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ae,scissor:he,viewport:Ne,reset:ke}}function $A(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return p?new OffscreenCanvas(b,S):Ll("canvas")}function x(b,S,H){let Z=1;const te=Mt(b);if((te.width>H||te.height>H)&&(Z=H/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Q=Math.floor(Z*te.width),Ae=Math.floor(Z*te.height);f===void 0&&(f=_(Q,Ae));const le=S?_(Q,Ae):f;return le.width=Q,le.height=Ae,le.getContext("2d").drawImage(b,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Ae+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){t.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(b,S,H,Z,te=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Q=S;if(S===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),S===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),S===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),H===t.UNSIGNED_INT&&(Q=t.RGB32UI),H===t.BYTE&&(Q=t.RGB8I),H===t.SHORT&&(Q=t.RGB16I),H===t.INT&&(Q=t.RGB32I)),S===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),H===t.UNSIGNED_INT&&(Q=t.RGBA32UI),H===t.BYTE&&(Q=t.RGBA8I),H===t.SHORT&&(Q=t.RGBA16I),H===t.INT&&(Q=t.RGBA32I)),S===t.RGB&&(H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),S===t.RGBA){const Ae=te?Pl:Ke.getTransfer(Z);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=Ae===nt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(b,S){let H;return b?S===null||S===Lr||S===La?H=t.DEPTH24_STENCIL8:S===mi?H=t.DEPTH32F_STENCIL8:S===Na&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Lr||S===La?H=t.DEPTH_COMPONENT24:S===mi?H=t.DEPTH_COMPONENT32F:S===Na&&(H=t.DEPTH_COMPONENT16),H}function T(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Hn&&b.minFilter!==Qn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){const S=b.target;S.removeEventListener("dispose",C),P(S),S.isVideoTexture&&d.delete(S)}function R(b){const S=b.target;S.removeEventListener("dispose",R),M(S)}function P(b){const S=i.get(b);if(S.__webglInit===void 0)return;const H=b.source,Z=h.get(H);if(Z){const te=Z[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(Z).length===0&&h.delete(H)}i.remove(b)}function E(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const H=b.source,Z=h.get(H);delete Z[S.__cacheKey],a.memory.textures--}function M(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let te=0;te<S.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=b.textures;for(let Z=0,te=H.length;Z<te;Z++){const Q=i.get(H[Z]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(H[Z])}i.remove(b)}let L=0;function O(){L=0}function z(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function X(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function I(b,S){const H=i.get(b);if(b.isVideoTexture&&Ve(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&H.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,b,S);return}}else b.isExternalTexture&&(H.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function B(b,S){const H=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){q(H,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function $(b,S){const H=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){q(H,b,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function D(b,S){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ee(H,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const Y={[gd]:t.REPEAT,[Er]:t.CLAMP_TO_EDGE,[vd]:t.MIRRORED_REPEAT},K={[Hn]:t.NEAREST,[TM]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[Lc]:t.LINEAR_MIPMAP_NEAREST,[wr]:t.LINEAR_MIPMAP_LINEAR},se={[bM]:t.NEVER,[UM]:t.ALWAYS,[PM]:t.LESS,[yv]:t.LEQUAL,[NM]:t.EQUAL,[IM]:t.GEQUAL,[LM]:t.GREATER,[DM]:t.NOTEQUAL};function ve(b,S){if(S.type===mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qn||S.magFilter===Lc||S.magFilter===vo||S.magFilter===wr||S.minFilter===Qn||S.minFilter===Lc||S.minFilter===vo||S.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Y[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Y[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Y[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==vo&&S.minFilter!==wr||S.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function We(b,S){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",C));const Z=S.source;let te=h.get(Z);te===void 0&&(te={},h.set(Z,te));const Q=X(S);if(Q!==b.__cacheKey){te[Q]===void 0&&(te[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[Q].usedTimes++;const Ae=te[b.__cacheKey];Ae!==void 0&&(te[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(S)),b.__cacheKey=Q,b.__webglTexture=te[Q].texture}return H}function ze(b,S,H){return Math.floor(Math.floor(b/H)/S)}function He(b,S,H,Z){const Q=b.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,H,Z,S.data);else{Q.sort((ae,he)=>ae.start-he.start);let Ae=0;for(let ae=1;ae<Q.length;ae++){const he=Q[Ae],Ne=Q[ae],Te=he.start+he.count,de=ze(Ne.start,S.width,4),ke=ze(he.start,S.width,4);Ne.start<=Te+1&&de===ke&&ze(Ne.start+Ne.count-1,S.width,4)===de?he.count=Math.max(he.count,Ne.start+Ne.count-he.start):(++Ae,Q[Ae]=Ne)}Q.length=Ae+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),we=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ae=0,he=Q.length;ae<he;ae++){const Ne=Q[ae],Te=Math.floor(Ne.start/4),de=Math.ceil(Ne.count/4),ke=Te%S.width,U=Math.floor(Te/S.width),oe=de,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,ke,U,oe,ce,H,Z,S.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,we)}}function q(b,S,H){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const te=We(b,S),Q=S.source;n.bindTexture(Z,b.__webglTexture,t.TEXTURE0+H);const Ae=i.get(Q);if(Q.version!==Ae.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const le=Ke.getPrimaries(Ke.workingColorSpace),Ee=S.colorSpace===ki?null:Ke.getPrimaries(S.colorSpace),we=S.colorSpace===ki||le===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ae=x(S.image,!1,r.maxTextureSize);ae=Pt(S,ae);const he=s.convert(S.format,S.colorSpace),Ne=s.convert(S.type);let Te=g(S.internalFormat,he,Ne,S.colorSpace,S.isVideoTexture);ve(Z,S);let de;const ke=S.mipmaps,U=S.isVideoTexture!==!0,oe=Ae.__version===void 0||te===!0,ce=Q.dataReady,ge=T(S,ae);if(S.isDepthTexture)Te=y(S.format===Ia,S.type),oe&&(U?n.texStorage2D(t.TEXTURE_2D,1,Te,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Te,ae.width,ae.height,0,he,Ne,null));else if(S.isDataTexture)if(ke.length>0){U&&oe&&n.texStorage2D(t.TEXTURE_2D,ge,Te,ke[0].width,ke[0].height);for(let ie=0,J=ke.length;ie<J;ie++)de=ke[ie],U?ce&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,he,Ne,de.data):n.texImage2D(t.TEXTURE_2D,ie,Te,de.width,de.height,0,he,Ne,de.data);S.generateMipmaps=!1}else U?(oe&&n.texStorage2D(t.TEXTURE_2D,ge,Te,ae.width,ae.height),ce&&He(S,ae,he,Ne)):n.texImage2D(t.TEXTURE_2D,0,Te,ae.width,ae.height,0,he,Ne,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Te,ke[0].width,ke[0].height,ae.depth);for(let ie=0,J=ke.length;ie<J;ie++)if(de=ke[ie],S.format!==On)if(he!==null)if(U){if(ce)if(S.layerUpdates.size>0){const ye=om(de.width,de.height,S.format,S.type);for(const Fe of S.layerUpdates){const rt=de.data.subarray(Fe*ye/de.data.BYTES_PER_ELEMENT,(Fe+1)*ye/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Fe,de.width,de.height,1,he,rt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,ae.depth,he,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Te,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,ae.depth,he,Ne,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Te,de.width,de.height,ae.depth,0,he,Ne,de.data)}else{U&&oe&&n.texStorage2D(t.TEXTURE_2D,ge,Te,ke[0].width,ke[0].height);for(let ie=0,J=ke.length;ie<J;ie++)de=ke[ie],S.format!==On?he!==null?U?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,he,de.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Te,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de.width,de.height,he,Ne,de.data):n.texImage2D(t.TEXTURE_2D,ie,Te,de.width,de.height,0,he,Ne,de.data)}else if(S.isDataArrayTexture)if(U){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Te,ae.width,ae.height,ae.depth),ce)if(S.layerUpdates.size>0){const ie=om(ae.width,ae.height,S.format,S.type);for(const J of S.layerUpdates){const ye=ae.data.subarray(J*ie/ae.data.BYTES_PER_ELEMENT,(J+1)*ie/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ae.width,ae.height,1,he,Ne,ye)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,Ne,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,he,Ne,ae.data);else if(S.isData3DTexture)U?(oe&&n.texStorage3D(t.TEXTURE_3D,ge,Te,ae.width,ae.height,ae.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,Ne,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,he,Ne,ae.data);else if(S.isFramebufferTexture){if(oe)if(U)n.texStorage2D(t.TEXTURE_2D,ge,Te,ae.width,ae.height);else{let ie=ae.width,J=ae.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,Te,ie,J,0,he,Ne,null),ie>>=1,J>>=1}}else if(ke.length>0){if(U&&oe){const ie=Mt(ke[0]);n.texStorage2D(t.TEXTURE_2D,ge,Te,ie.width,ie.height)}for(let ie=0,J=ke.length;ie<J;ie++)de=ke[ie],U?ce&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he,Ne,de):n.texImage2D(t.TEXTURE_2D,ie,Te,he,Ne,de);S.generateMipmaps=!1}else if(U){if(oe){const ie=Mt(ae);n.texStorage2D(t.TEXTURE_2D,ge,Te,ie.width,ie.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Ne,ae)}else n.texImage2D(t.TEXTURE_2D,0,Te,he,Ne,ae);m(S)&&u(Z),Ae.__version=Q.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ee(b,S,H){if(S.image.length!==6)return;const Z=We(b,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const Q=i.get(te);if(te.version!==Q.__version||Z===!0){n.activeTexture(t.TEXTURE0+H);const Ae=Ke.getPrimaries(Ke.workingColorSpace),le=S.colorSpace===ki?null:Ke.getPrimaries(S.colorSpace),Ee=S.colorSpace===ki||Ae===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!we&&!ae?he[J]=x(S.image[J],!0,r.maxCubemapSize):he[J]=ae?S.image[J].image:S.image[J],he[J]=Pt(S,he[J]);const Ne=he[0],Te=s.convert(S.format,S.colorSpace),de=s.convert(S.type),ke=g(S.internalFormat,Te,de,S.colorSpace),U=S.isVideoTexture!==!0,oe=Q.__version===void 0||Z===!0,ce=te.dataReady;let ge=T(S,Ne);ve(t.TEXTURE_CUBE_MAP,S);let ie;if(we){U&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ke,Ne.width,Ne.height);for(let J=0;J<6;J++){ie=he[J].mipmaps;for(let ye=0;ye<ie.length;ye++){const Fe=ie[ye];S.format!==On?Te!==null?U?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Fe.width,Fe.height,Te,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,ke,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,Fe.width,Fe.height,Te,de,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,ke,Fe.width,Fe.height,0,Te,de,Fe.data)}}}else{if(ie=S.mipmaps,U&&oe){ie.length>0&&ge++;const J=Mt(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,ke,J.width,J.height)}for(let J=0;J<6;J++)if(ae){U?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,Te,de,he[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,he[J].width,he[J].height,0,Te,de,he[J].data);for(let ye=0;ye<ie.length;ye++){const rt=ie[ye].image[J].image;U?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,rt.width,rt.height,Te,de,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,ke,rt.width,rt.height,0,Te,de,rt.data)}}else{U?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,de,he[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Te,de,he[J]);for(let ye=0;ye<ie.length;ye++){const Fe=ie[ye];U?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Te,de,Fe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,ke,Te,de,Fe.image[J])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),Q.__version=te.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function _e(b,S,H,Z,te,Q){const Ae=s.convert(H.format,H.colorSpace),le=s.convert(H.type),Ee=g(H.internalFormat,Ae,le,H.colorSpace),we=i.get(S),ae=i.get(H);if(ae.__renderTarget=S,!we.__hasExternalTextures){const he=Math.max(1,S.width>>Q),Ne=Math.max(1,S.height>>Q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Q,Ee,he,Ne,S.depth,0,Ae,le,null):n.texImage2D(te,Q,Ee,he,Ne,0,Ae,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Me(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,ae.__webglTexture,0,ut(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,ae.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(b,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){const Z=S.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,Q=y(S.stencilBuffer,te),Ae=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=ut(S);Me(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Q,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Q,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,b)}else{const Z=S.textures;for(let te=0;te<Z.length;te++){const Q=Z[te],Ae=s.convert(Q.format,Q.colorSpace),le=s.convert(Q.type),Ee=g(Q.internalFormat,Ae,le,Q.colorSpace),we=ut(S);H&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,Ee,S.width,S.height):Me(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,Ee,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const te=Z.__webglTexture,Q=ut(S);if(S.depthTexture.format===Da)Me(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(S.depthTexture.format===Ia)Me(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ye(b){const S=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Z}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=b.texture.mipmaps;Z&&Z.length>0?Ce(S.__webglFramebuffer[0],b):Ce(S.__webglFramebuffer,b)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ie(S.__webglDepthbuffer[Z],b,!1);else{const te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Q)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ie(S.__webglDepthbuffer,b,!1);else{const te=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ot(b,S,H){const Z=i.get(b);S!==void 0&&_e(Z.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ye(b)}function N(b){const S=b.texture,H=i.get(b),Z=i.get(S);b.addEventListener("dispose",R);const te=b.textures,Q=b.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,a.memory.textures++),Q){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)H.__webglFramebuffer[le][Ee]=t.createFramebuffer()}else H.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)H.__webglFramebuffer[le]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let le=0,Ee=te.length;le<Ee;le++){const we=i.get(te[le]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&Me(b)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Ee=te[le];H.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const we=s.convert(Ee.format,Ee.colorSpace),ae=s.convert(Ee.type),he=g(Ee.internalFormat,we,ae,Ee.colorSpace,b.isXRRenderTarget===!0),Ne=ut(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,he,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,H.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)_e(H.__webglFramebuffer[le][Ee],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee);else _e(H.__webglFramebuffer[le],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let le=0,Ee=te.length;le<Ee;le++){const we=te[le],ae=i.get(we);let he=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,ae.__webglTexture),ve(he,we),_e(H.__webglFramebuffer,b,we,t.COLOR_ATTACHMENT0+le,he,0),m(we)&&u(he)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Z.__webglTexture),ve(le,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)_e(H.__webglFramebuffer[Ee],b,S,t.COLOR_ATTACHMENT0,le,Ee);else _e(H.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,le,0);m(S)&&u(le),n.unbindTexture()}b.depthBuffer&&Ye(b)}function ct(b){const S=b.textures;for(let H=0,Z=S.length;H<Z;H++){const te=S[H];if(m(te)){const Q=v(b),Ae=i.get(te).__webglTexture;n.bindTexture(Q,Ae),u(Q),n.unbindTexture()}}}const Oe=[],Le=[];function Se(b){if(b.samples>0){if(Me(b)===!1){const S=b.textures,H=b.width,Z=b.height;let te=t.COLOR_BUFFER_BIT;const Q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(b),le=S.length>1;if(le)for(let we=0;we<S.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=b.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<S.length;we++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ae=i.get(S[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,H,Z,0,0,H,Z,te,t.NEAREST),l===!0&&(Oe.length=0,Le.length=0,Oe.push(t.COLOR_ATTACHMENT0+we),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Oe.push(Q),Le.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Le)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<S.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ae=i.get(S[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function ut(b){return Math.min(r.maxSamples,b.samples)}function Me(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(b){const S=a.render.frame;d.get(b)!==S&&(d.set(b,S),b.update())}function Pt(b,S){const H=b.colorSpace,Z=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==bs&&H!==ki&&(Ke.getTransfer(H)===nt?(Z!==On||te!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Mt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=I,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=D,this.rebindTextures=Ot,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Me}function YA(t,e){function n(i,r=ki){let s;const a=Ke.getTransfer(r);if(i===ti)return t.UNSIGNED_BYTE;if(i===th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===dv)return t.BYTE;if(i===fv)return t.SHORT;if(i===Na)return t.UNSIGNED_SHORT;if(i===eh)return t.INT;if(i===Lr)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===Wa)return t.HALF_FLOAT;if(i===mv)return t.ALPHA;if(i===gv)return t.RGB;if(i===On)return t.RGBA;if(i===Da)return t.DEPTH_COMPONENT;if(i===Ia)return t.DEPTH_STENCIL;if(i===vv)return t.RED;if(i===ih)return t.RED_INTEGER;if(i===_v)return t.RG;if(i===rh)return t.RG_INTEGER;if(i===sh)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_d||i===xd||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Md||i===Ed||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Md||i===Ed)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Td||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Nd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd||i===Od||i===kd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Td)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ad)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bd||i===zd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bd)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vd||i===Gd||i===Wd||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===La?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Nv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new tr({vertexShader:QA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new ec(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZA extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new KA,u={},v=n.getContextAttributes();let g=null,y=null;const T=[],C=[],R=new Ze;let P=null;const E=new wn;E.viewport=new yt;const M=new wn;M.viewport=new yt;const L=[E,M],O=new _E;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=T[q];return ee===void 0&&(ee=new tu,T[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=T[q];return ee===void 0&&(ee=new tu,T[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=T[q];return ee===void 0&&(ee=new tu,T[q]=ee),ee.getHandSpace()};function I(q){const ee=C.indexOf(q.inputSource);if(ee===-1)return;const _e=T[ee];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let q=0;q<T.length;q++){const ee=C[q];ee!==null&&(C[q]=null,T[q].disconnect(ee))}z=null,X=null,m.reset();for(const q in u)delete u[q];e.setRenderTarget(g),p=null,h=null,f=null,r=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ie=null,Ce=null;v.depth&&(Ce=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=v.stencil?Ia:Da,Ie=v.stencil?La:Lr);const Ye={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Dr(h.textureWidth,h.textureHeight,{format:On,type:ti,depthTexture:new Pv(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Dr(p.framebufferWidth,p.framebufferHeight,{format:On,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(q){for(let ee=0;ee<q.removed.length;ee++){const _e=q.removed[ee],Ie=C.indexOf(_e);Ie>=0&&(C[Ie]=null,T[Ie].disconnect(_e))}for(let ee=0;ee<q.added.length;ee++){const _e=q.added[ee];let Ie=C.indexOf(_e);if(Ie===-1){for(let Ye=0;Ye<T.length;Ye++)if(Ye>=C.length){C.push(_e),Ie=Ye;break}else if(C[Ye]===null){C[Ye]=_e,Ie=Ye;break}if(Ie===-1)break}const Ce=T[Ie];Ce&&Ce.connect(_e)}}const D=new G,Y=new G;function K(q,ee,_e){D.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(_e.matrixWorld);const Ie=D.distanceTo(Y),Ce=ee.projectionMatrix.elements,Ye=_e.projectionMatrix.elements,Ot=Ce[14]/(Ce[10]-1),N=Ce[14]/(Ce[10]+1),ct=(Ce[9]+1)/Ce[5],Oe=(Ce[9]-1)/Ce[5],Le=(Ce[8]-1)/Ce[0],Se=(Ye[8]+1)/Ye[0],ut=Ot*Le,Me=Ot*Se,Ve=Ie/(-Le+Se),Pt=Ve*-Le;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pt),q.translateZ(Ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Mt=Ot+Ve,b=N+Ve,S=ut-Pt,H=Me+(Ie-Pt),Z=ct*N/b*Mt,te=Oe*N/b*Mt;q.projectionMatrix.makePerspective(S,H,Z,te,Mt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ee=q.near,_e=q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),O.near=M.near=E.near=ee,O.far=M.far=E.far=_e,(z!==O.near||X!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,X=O.far),O.layers.mask=q.layers.mask|6,E.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Ie=q.parent,Ce=O.cameras;se(O,Ie);for(let Ye=0;Ye<Ce.length;Ye++)se(Ce[Ye],Ie);Ce.length===2?K(O,E,M):O.projectionMatrix.copy(E.projectionMatrix),ve(q,O,Ie)};function ve(q,ee,_e){_e===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return u[q]};let We=null;function ze(q,ee){if(d=ee.getViewerPose(c||a),_=ee,d!==null){const _e=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ie=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let N=0;N<_e.length;N++){const ct=_e[N];let Oe=null;if(p!==null)Oe=p.getViewport(ct);else{const Se=f.getViewSubImage(h,ct);Oe=Se.viewport,N===0&&(e.setRenderTargetTextures(y,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(y))}let Le=L[N];Le===void 0&&(Le=new wn,Le.layers.enable(N),Le.viewport=new yt,L[N]=Le),Le.matrix.fromArray(ct.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ct.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),N===0&&(O.matrix.copy(Le.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(Le)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const N=f.getDepthInformation(_e[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let N=0;N<_e.length;N++){const ct=_e[N].camera;if(ct){let Oe=u[ct];Oe||(Oe=new Nv,u[ct]=Oe);const Le=f.getCameraImage(ct);Oe.sourceTexture=Le}}}}for(let _e=0;_e<T.length;_e++){const Ie=C[_e],Ce=T[_e];Ie!==null&&Ce!==void 0&&Ce.update(Ie,ee,c||a)}We&&We(q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const He=new Iv;He.setAnimationLoop(ze),this.setAnimationLoop=function(q){We=q},this.dispose=function(){}}}const hr=new ni,JA=new St;function eC(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Cv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,y=v.envMapRotation;g&&(m.envMap.value=g,hr.copy(y),hr.x*=-1,hr.y*=-1,hr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(hr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function c(v,g){let y=r[v.id];y===void 0&&(_(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",m));const T=g.program;i.updateUBOMapping(v,T);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function d(v){const g=f();v.__bindingPointIndex=g;const y=t.createBuffer(),T=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],y=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,R=y.length;C<R;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,M=P.length;E<M;E++){const L=P[E];if(p(L,C,E,T)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let I=0;I<z.length;I++){const B=z[I],$=x(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,O+X,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,y,T){const C=v.value,R=g+"_"+y;if(T[R]===void 0)return typeof C=="number"||typeof C=="boolean"?T[R]=C:T[R]=C.clone(),!0;{const P=T[R];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return T[R]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(v){const g=v.uniforms;let y=0;const T=16;for(let R=0,P=g.length;R<P;R++){const E=Array.isArray(g[R])?g[R]:[g[R]];for(let M=0,L=E.length;M<L;M++){const O=E[M],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,I=z.length;X<I;X++){const B=z[X],$=x(B),D=y%T,Y=D%$.boundary,K=D+Y;y+=Y,K!==0&&T-K<$.storage&&(y+=T-K),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}const C=y%T;return C>0&&(y+=T-C),v.__size=y,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class nC{constructor(e={}){const{canvas:n=OM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const v=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=Sn;let C=0,R=0,P=null,E=-1,M=null;const L=new yt,O=new yt;let z=null;const X=new Ue(0);let I=0,B=n.width,$=n.height,D=1,Y=null,K=null;const se=new yt(0,0,B,$),ve=new yt(0,0,B,$);let We=!1;const ze=new ch;let He=!1,q=!1;const ee=new St,_e=new G,Ie=new yt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ot(){return P===null?D:1}let N=i;function ct(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",ie,!1),N===null){const F="webgl2";if(N=ct(F,w),N===null)throw ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Oe,Le,Se,ut,Me,Ve,Pt,Mt,b,S,H,Z,te,Q,Ae,le,Ee,we,ae,he,Ne,Te,de,ke;function U(){Oe=new fT(N),Oe.init(),Te=new YA(N,Oe),Le=new sT(N,Oe,e,Te),Se=new XA(N,Oe),Le.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),ut=new mT(N),Me=new DA,Ve=new $A(N,Oe,Se,Me,Le,Te,ut),Pt=new oT(y),Mt=new dT(y),b=new SE(N),de=new iT(N,b),S=new hT(N,b,ut,de),H=new vT(N,S,b,ut),ae=new gT(N,Le,Ve),le=new aT(Me),Z=new LA(y,Pt,Mt,Oe,Le,de,le),te=new eC(y,Me),Q=new UA,Ae=new HA(Oe),we=new nT(y,Pt,Mt,Se,H,p,l),Ee=new WA(y,H,Le),ke=new tC(N,ut,Le,Se),he=new rT(N,Oe,ut),Ne=new pT(N,Oe,ut),ut.programs=Z.programs,y.capabilities=Le,y.extensions=Oe,y.properties=Me,y.renderLists=Q,y.shadowMap=Ee,y.state=Se,y.info=ut}U();const oe=new ZA(y,N);this.xr=oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(B,$,!1))},this.getSize=function(w){return w.set(B,$)},this.setSize=function(w,F,W=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,$=F,n.width=Math.floor(w*D),n.height=Math.floor(F*D),W===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(B*D,$*D).floor()},this.setDrawingBufferSize=function(w,F,W){B=w,$=F,D=W,n.width=Math.floor(w*W),n.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,F,W,j){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,F,W,j),Se.viewport(L.copy(se).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,F,W,j){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,F,W,j),Se.scissor(O.copy(ve).multiplyScalar(D).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(w){Se.setScissorTest(We=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,W=!0){let j=0;if(w){let k=!1;if(P!==null){const re=P.texture.format;k=re===sh||re===rh||re===ih}if(k){const re=P.texture.type,fe=re===ti||re===Lr||re===Na||re===La||re===th||re===nh,xe=we.getClearColor(),me=we.getClearAlpha(),Pe=xe.r,De=xe.g,Re=xe.b;fe?(_[0]=Pe,_[1]=De,_[2]=Re,_[3]=me,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=Pe,x[1]=De,x[2]=Re,x[3]=me,N.clearBufferiv(N.COLOR,0,x))}else j|=N.COLOR_BUFFER_BIT}F&&(j|=N.DEPTH_BUFFER_BIT),W&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),we.dispose(),Q.dispose(),Ae.dispose(),Me.dispose(),Pt.dispose(),Mt.dispose(),H.dispose(),de.dispose(),ke.dispose(),Z.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Gn),oe.removeEventListener("sessionend",fh),ar.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ut.autoReset,F=Ee.enabled,W=Ee.autoUpdate,j=Ee.needsUpdate,k=Ee.type;U(),ut.autoReset=w,Ee.enabled=F,Ee.autoUpdate=W,Ee.needsUpdate=j,Ee.type=k}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){const F=w.target;F.removeEventListener("dispose",J),ye(F)}function ye(w){Fe(w),Me.remove(w)}function Fe(w){const F=Me.get(w).programs;F!==void 0&&(F.forEach(function(W){Z.releaseProgram(W)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,j,k,re){F===null&&(F=Ce);const fe=k.isMesh&&k.matrixWorld.determinant()<0,xe=Vv(w,F,W,j,k);Se.setMaterial(j,fe);let me=W.index,Pe=1;if(j.wireframe===!0){if(me=S.getWireframeAttribute(W),me===void 0)return;Pe=2}const De=W.drawRange,Re=W.attributes.position;let Xe=De.start*Pe,tt=(De.start+De.count)*Pe;re!==null&&(Xe=Math.max(Xe,re.start*Pe),tt=Math.min(tt,(re.start+re.count)*Pe)),me!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,me.count)):Re!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Re.count));const _t=tt-Xe;if(_t<0||_t===1/0)return;de.setup(k,j,xe,W,me);let at,it=he;if(me!==null&&(at=b.get(me),it=Ne,it.setIndex(at)),k.isMesh)j.wireframe===!0?(Se.setLineWidth(j.wireframeLinewidth*Ot()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(k.isLine){let be=j.linewidth;be===void 0&&(be=1),Se.setLineWidth(be*Ot()),k.isLineSegments?it.setMode(N.LINES):k.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else k.isPoints?it.setMode(N.POINTS):k.isSprite&&it.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ua("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const be=k._multiDrawStarts,ft=k._multiDrawCounts,qe=k._multiDrawCount,on=me?b.get(me).bytesPerElement:1,Fr=Me.get(j).currentProgram.getUniforms();for(let ln=0;ln<qe;ln++)Fr.setValue(N,"_gl_DrawID",ln),it.render(be[ln]/on,ft[ln])}else if(k.isInstancedMesh)it.renderInstances(Xe,_t,k.count);else if(W.isInstancedBufferGeometry){const be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ft=Math.min(W.instanceCount,be);it.renderInstances(Xe,_t,ft)}else it.render(Xe,_t)};function rt(w,F,W){w.transparent===!0&&w.side===Yn&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Ka(w,F,W),w.side=er,w.needsUpdate=!0,Ka(w,F,W),w.side=Yn):Ka(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),u=Ae.get(W),u.init(F),g.push(u),W.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==W&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const j=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const xe=re[fe];rt(xe,W,k),j.add(xe)}else rt(re,W,k),j.add(re)}),u=g.pop(),j},this.compileAsync=function(w,F,W=null){const j=this.compile(w,F,W);return new Promise(k=>{function re(){if(j.forEach(function(fe){Me.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){k(w);return}setTimeout(re,10)}Oe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Je=null;function ri(w){Je&&Je(w)}function Gn(){ar.stop()}function fh(){ar.start()}const ar=new Iv;ar.setAnimationLoop(ri),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(w){Je=w,oe.setAnimationLoop(w),w===null?ar.stop():ar.start()},oe.addEventListener("sessionstart",Gn),oe.addEventListener("sessionend",fh),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(F),F=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,P),u=Ae.get(w,g.length),u.init(F),g.push(u),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(ee,qn,F.reversedDepth),q=this.localClippingEnabled,He=le.init(this.clippingPlanes,q),m=Q.get(w,v.length),m.init(),v.push(m),oe.enabled===!0&&oe.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&nc(re,F,-1/0,y.sortObjects)}nc(w,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Y,K),Ye=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ye&&we.addToRenderList(m,w),this.info.render.frame++,He===!0&&le.beginShadows();const W=u.state.shadowsArray;Ee.render(W,w,F),He===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(u.setupLights(),F.isArrayCamera){const re=F.cameras;if(k.length>0)for(let fe=0,xe=re.length;fe<xe;fe++){const me=re[fe];ph(j,k,w,me)}Ye&&we.render(w);for(let fe=0,xe=re.length;fe<xe;fe++){const me=re[fe];hh(m,w,me,me.viewport)}}else k.length>0&&ph(j,k,w,F),Ye&&we.render(w),hh(m,w,F);P!==null&&R===0&&(Ve.updateMultisampleRenderTarget(P),Ve.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,F),de.resetDefaultState(),E=-1,M=null,g.pop(),g.length>0?(u=g[g.length-1],He===!0&&le.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function nc(w,F,W,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ze.intersectsSprite(w)){j&&Ie.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const fe=H.update(w),xe=w.material;xe.visible&&m.push(w,fe,xe,W,Ie.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ze.intersectsObject(w))){const fe=H.update(w),xe=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ie.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ie.copy(fe.boundingSphere.center)),Ie.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(xe)){const me=fe.groups;for(let Pe=0,De=me.length;Pe<De;Pe++){const Re=me[Pe],Xe=xe[Re.materialIndex];Xe&&Xe.visible&&m.push(w,fe,Xe,W,Ie.z,Re)}}else xe.visible&&m.push(w,fe,xe,W,Ie.z,null)}}const re=w.children;for(let fe=0,xe=re.length;fe<xe;fe++)nc(re[fe],F,W,j)}function hh(w,F,W,j){const k=w.opaque,re=w.transmissive,fe=w.transparent;u.setupLightsView(W),He===!0&&le.setGlobalState(y.clippingPlanes,W),j&&Se.viewport(L.copy(j)),k.length>0&&qa(k,F,W),re.length>0&&qa(re,F,W),fe.length>0&&qa(fe,F,W),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ph(w,F,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Dr(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Wa:ti,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=u.state.transmissionRenderTarget[j.id],fe=j.viewport||L;re.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);const xe=y.getRenderTarget(),me=y.getActiveCubeFace(),Pe=y.getActiveMipmapLevel();y.setRenderTarget(re),y.getClearColor(X),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&we.render(W);const De=y.toneMapping;y.toneMapping=Ki;const Re=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),He===!0&&le.setGlobalState(y.clippingPlanes,j),qa(w,W,j),Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,_t=F.length;tt<_t;tt++){const at=F[tt],it=at.object,be=at.geometry,ft=at.material,qe=at.group;if(ft.side===Yn&&it.layers.test(j.layers)){const on=ft.side;ft.side=sn,ft.needsUpdate=!0,mh(it,W,j,be,ft,qe),ft.side=on,ft.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ve.updateMultisampleRenderTarget(re),Ve.updateRenderTargetMipmap(re))}y.setRenderTarget(xe,me,Pe),y.setClearColor(X,I),Re!==void 0&&(j.viewport=Re),y.toneMapping=De}function qa(w,F,W){const j=F.isScene===!0?F.overrideMaterial:null;for(let k=0,re=w.length;k<re;k++){const fe=w[k],xe=fe.object,me=fe.geometry,Pe=fe.group;let De=fe.material;De.allowOverride===!0&&j!==null&&(De=j),xe.layers.test(W.layers)&&mh(xe,F,W,me,De,Pe)}}function mh(w,F,W,j,k,re){w.onBeforeRender(y,F,W,j,k,re),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,F,W,j,w,re),k.transparent===!0&&k.side===Yn&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,y.renderBufferDirect(W,F,j,k,w,re),k.side=er,k.needsUpdate=!0,y.renderBufferDirect(W,F,j,k,w,re),k.side=Yn):y.renderBufferDirect(W,F,j,k,w,re),w.onAfterRender(y,F,W,j,k,re)}function Ka(w,F,W){F.isScene!==!0&&(F=Ce);const j=Me.get(w),k=u.state.lights,re=u.state.shadowsArray,fe=k.state.version,xe=Z.getParameters(w,k.state,re,F,W),me=Z.getProgramCacheKey(xe);let Pe=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?Mt:Pt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",J),Pe=new Map,j.programs=Pe);let De=Pe.get(me);if(De!==void 0){if(j.currentProgram===De&&j.lightsStateVersion===fe)return vh(w,xe),De}else xe.uniforms=Z.getUniforms(w),w.onBeforeCompile(xe,y),De=Z.acquireProgram(xe,me),Pe.set(me,De),j.uniforms=xe.uniforms;const Re=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=le.uniform),vh(w,xe),j.needsLights=Wv(w),j.lightsStateVersion=fe,j.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=De,j.uniformsList=null,De}function gh(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=rl.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function vh(w,F){const W=Me.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Vv(w,F,W,j,k){F.isScene!==!0&&(F=Ce),Ve.resetTextureUnits();const re=F.fog,fe=j.isMeshStandardMaterial?F.environment:null,xe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:bs,me=(j.isMeshStandardMaterial?Mt:Pt).get(j.envMap||fe),Pe=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let _t=Ki;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_t=y.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=at!==void 0?at.length:0,be=Me.get(j),ft=u.state.lights;if(He===!0&&(q===!0||w!==M)){const jt=w===M&&j.id===E;le.setState(j,w,jt)}let qe=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ft.state.version||be.outputColorSpace!==xe||k.isBatchedMesh&&be.batching===!1||!k.isBatchedMesh&&be.batching===!0||k.isBatchedMesh&&be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&be.instancing===!1||!k.isInstancedMesh&&be.instancing===!0||k.isSkinnedMesh&&be.skinning===!1||!k.isSkinnedMesh&&be.skinning===!0||k.isInstancedMesh&&be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&be.instancingMorph===!1&&k.morphTexture!==null||be.envMap!==me||j.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==Pe||be.vertexTangents!==De||be.morphTargets!==Re||be.morphNormals!==Xe||be.morphColors!==tt||be.toneMapping!==_t||be.morphTargetsCount!==it)&&(qe=!0):(qe=!0,be.__version=j.version);let on=be.currentProgram;qe===!0&&(on=Ka(j,F,k));let Fr=!1,ln=!1,ks=!1;const ht=on.getUniforms(),_n=be.uniforms;if(Se.useProgram(on.program)&&(Fr=!0,ln=!0,ks=!0),j.id!==E&&(E=j.id,ln=!0),Fr||M!==w){Se.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(N,"projectionMatrix",w.projectionMatrix),ht.setValue(N,"viewMatrix",w.matrixWorldInverse);const Kt=ht.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,_e.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ht.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ln=!0,ks=!0)}if(k.isSkinnedMesh){ht.setOptional(N,k,"bindMatrix"),ht.setOptional(N,k,"bindMatrixInverse");const jt=k.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),ht.setValue(N,"boneTexture",jt.boneTexture,Ve))}k.isBatchedMesh&&(ht.setOptional(N,k,"batchingTexture"),ht.setValue(N,"batchingTexture",k._matricesTexture,Ve),ht.setOptional(N,k,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",k._indirectTexture,Ve),ht.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",k._colorsTexture,Ve));const xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&ae.update(k,W,on),(ln||be.receiveShadow!==k.receiveShadow)&&(be.receiveShadow=k.receiveShadow,ht.setValue(N,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_n.envMap.value=me,_n.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),ln&&(ht.setValue(N,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&Gv(_n,ks),re&&j.fog===!0&&te.refreshFogUniforms(_n,re),te.refreshMaterialUniforms(_n,j,D,$,u.state.transmissionRenderTarget[w.id]),rl.upload(N,gh(be),_n,Ve)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(rl.upload(N,gh(be),_n,Ve),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ht.setValue(N,"center",k.center),ht.setValue(N,"modelViewMatrix",k.modelViewMatrix),ht.setValue(N,"normalMatrix",k.normalMatrix),ht.setValue(N,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const jt=j.uniformsGroups;for(let Kt=0,ic=jt.length;Kt<ic;Kt++){const or=jt[Kt];ke.update(or,on),ke.bind(or,on)}}return on}function Gv(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Wv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,F,W){const j=Me.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Me.get(w.texture).__webglTexture=F,Me.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:W,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const W=Me.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const jv=N.createFramebuffer();this.setRenderTarget=function(w,F=0,W=0){P=w,C=F,R=W;let j=!0,k=null,re=!1,fe=!1;if(w){const me=Me.get(w);if(me.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(me.__webglFramebuffer===void 0)Ve.setupRenderTarget(w);else if(me.__hasExternalTextures)Ve.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&Me.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const De=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[F])?k=De[F][W]:k=De[F],re=!0):w.samples>0&&Ve.useMultisampledRTT(w)===!1?k=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[W]:k=De,L.copy(w.viewport),O.copy(w.scissor),z=w.scissorTest}else L.copy(se).multiplyScalar(D).floor(),O.copy(ve).multiplyScalar(D).floor(),z=We;if(W!==0&&(k=jv),Se.bindFramebuffer(N.FRAMEBUFFER,k)&&j&&Se.drawBuffers(w,k),Se.viewport(L),Se.scissor(O),Se.setScissorTest(z),re){const me=Me.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,W)}else if(fe){const me=F;for(let Pe=0;Pe<w.textures.length;Pe++){const De=Me.get(w.textures[Pe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pe,De.__webglTexture,W,me)}}else if(w!==null&&W!==0){const me=Me.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,W)}E=-1},this.readRenderTargetPixels=function(w,F,W,j,k,re,fe,xe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){Se.bindFramebuffer(N.FRAMEBUFFER,me);try{const Pe=w.textures[xe],De=Pe.format,Re=Pe.type;if(!Le.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&W>=0&&W<=w.height-k&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(F,W,j,k,Te.convert(De),Te.convert(Re),re))}finally{const Pe=P!==null?Me.get(P).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,j,k,re,fe,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(F>=0&&F<=w.width-j&&W>=0&&W<=w.height-k){Se.bindFramebuffer(N.FRAMEBUFFER,me);const Pe=w.textures[xe],De=Pe.format,Re=Pe.type;if(!Le.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe),N.readPixels(F,W,j,k,Te.convert(De),Te.convert(Re),0);const tt=P!==null?Me.get(P).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,tt);const _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await kM(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Xe),N.deleteSync(_t),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,W=0){const j=Math.pow(2,-W),k=Math.floor(w.image.width*j),re=Math.floor(w.image.height*j),fe=F!==null?F.x:0,xe=F!==null?F.y:0;Ve.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,fe,xe,k,re),Se.unbindTexture()};const Xv=N.createFramebuffer(),$v=N.createFramebuffer();this.copyTextureToTexture=function(w,F,W=null,j=null,k=0,re=null){re===null&&(k!==0?(Ua("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=k,k=0):re=0);let fe,xe,me,Pe,De,Re,Xe,tt,_t;const at=w.isCompressedTexture?w.mipmaps[re]:w.image;if(W!==null)fe=W.max.x-W.min.x,xe=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,De=W.min.y,Re=W.isBox3?W.min.z:0;else{const xn=Math.pow(2,-k);fe=Math.floor(at.width*xn),xe=Math.floor(at.height*xn),w.isDataArrayTexture?me=at.depth:w.isData3DTexture?me=Math.floor(at.depth*xn):me=1,Pe=0,De=0,Re=0}j!==null?(Xe=j.x,tt=j.y,_t=j.z):(Xe=0,tt=0,_t=0);const it=Te.convert(F.format),be=Te.convert(F.type);let ft;F.isData3DTexture?(Ve.setTexture3D(F,0),ft=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ve.setTexture2DArray(F,0),ft=N.TEXTURE_2D_ARRAY):(Ve.setTexture2D(F,0),ft=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=N.getParameter(N.UNPACK_ROW_LENGTH),on=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Fr=N.getParameter(N.UNPACK_SKIP_PIXELS),ln=N.getParameter(N.UNPACK_SKIP_ROWS),ks=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Pe),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re);const ht=w.isDataArrayTexture||w.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const xn=Me.get(w),jt=Me.get(F),Kt=Me.get(xn.__renderTarget),ic=Me.get(jt.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,ic.__webglFramebuffer);for(let or=0;or<me;or++)ht&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(w).__webglTexture,k,Re+or),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.get(F).__webglTexture,re,_t+or)),N.blitFramebuffer(Pe,De,fe,xe,Xe,tt,fe,xe,N.DEPTH_BUFFER_BIT,N.NEAREST);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Me.has(w)){const xn=Me.get(w),jt=Me.get(F);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Xv),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,$v);for(let Kt=0;Kt<me;Kt++)ht?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,k,Re+Kt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,k),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jt.__webglTexture,re,_t+Kt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jt.__webglTexture,re),k!==0?N.blitFramebuffer(Pe,De,fe,xe,Xe,tt,fe,xe,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(ft,re,Xe,tt,_t+Kt,Pe,De,fe,xe):N.copyTexSubImage2D(ft,re,Xe,tt,Pe,De,fe,xe);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ft,re,Xe,tt,_t,fe,xe,me,it,be,at.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(ft,re,Xe,tt,_t,fe,xe,me,it,at.data):N.texSubImage3D(ft,re,Xe,tt,_t,fe,xe,me,it,be,at):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,re,Xe,tt,fe,xe,it,be,at.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,re,Xe,tt,at.width,at.height,it,at.data):N.texSubImage2D(N.TEXTURE_2D,re,Xe,tt,fe,xe,it,be,at);N.pixelStorei(N.UNPACK_ROW_LENGTH,qe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,on),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Fr),N.pixelStorei(N.UNPACK_SKIP_ROWS,ln),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ks),re===0&&F.generateMipmaps&&N.generateMipmap(ft),Se.unbindTexture()},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&Ve.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ve.setTextureCube(w,0):w.isData3DTexture?Ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ve.setTexture2DArray(w,0):Ve.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){C=0,R=0,P=null,Se.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}const iC=[{id:"frontal_lobe",name:"Frontal Lobe",position:[0,.4,.8],size:[1.4,.8,1.2],shape:"ellipsoid"},{id:"parietal_lobe",name:"Parietal Lobe",position:[0,.6,-.2],size:[1.2,.6,.8],shape:"ellipsoid"},{id:"temporal_lobe",name:"Temporal Lobe",position:[.9,0,.3],size:[.7,.5,.9],shape:"curved"},{id:"occipital_lobe",name:"Occipital Lobe",position:[0,.3,-1.1],size:[.8,.5,.6],shape:"ellipsoid"},{id:"insula",name:"Insula",position:[.6,.1,.4],size:[.3,.3,.4],shape:"small"},{id:"thalamus",name:"Thalamus",position:[0,-.1,.1],size:[.3,.25,.4],shape:"ellipsoid"},{id:"hippocampus",name:"Hippocampus",position:[.5,-.3,.2],size:[.15,.1,.6],shape:"elongated"},{id:"amygdala",name:"Amygdala",position:[.4,-.2,.5],size:[.12,.1,.15],shape:"small"},{id:"caudate_nucleus",name:"Caudate Nucleus",position:[.3,.1,.2],size:[.2,.15,.3],shape:"elongated"},{id:"putamen",name:"Putamen",position:[.4,0,.1],size:[.15,.2,.2],shape:"small"},{id:"globus_pallidus",name:"Globus Pallidus",position:[.25,-.05,.05],size:[.1,.12,.15],shape:"small"},{id:"nucleus_accumbens",name:"Nucleus Accumbens",position:[.15,-.15,.3],size:[.08,.08,.1],shape:"small"},{id:"brainstem",name:"Brainstem",position:[0,-.8,-.1],size:[.2,.6,.3],shape:"elongated"},{id:"cerebellum",name:"Cerebellum",position:[0,-.9,-.7],size:[.8,.4,.6],shape:"curved"},{id:"default_mode_network_DMN",name:"Default Mode Network",position:[0,.2,.4],size:[.3,.2,.3],shape:"network"},{id:"dorsal_attention_network_DAN",name:"Dorsal Attention Network",position:[0,.7,.2],size:[.4,.2,.4],shape:"network"},{id:"ventral_attention_network_VAN",name:"Ventral Attention Network",position:[.6,.4,.5],size:[.3,.2,.3],shape:"network"},{id:"frontoparietal_control_network_FPCN",name:"Frontoparietal Control Network",position:[.4,.6,.1],size:[.3,.2,.3],shape:"network"},{id:"salience_network",name:"Salience Network",position:[.3,.3,.4],size:[.2,.2,.2],shape:"network"}];function rC(t){const[e,n,i]=t.size;switch(t.shape){case"ellipsoid":const r=new Bi(1,16,12);return r.scale(e,n,i),r;case"curved":const s=new Bi(1,12,8);s.scale(e,n,i);const a=s.attributes.position.array;for(let c=0;c<a.length;c+=3)a[c]*=1+Math.sin(a[c+1]*2)*.1,a[c+2]*=1+Math.cos(a[c]*3)*.15;return s.attributes.position.needsUpdate=!0,s;case"elongated":const o=new uh(e*.3,i,8,16);return o.rotateZ(Math.PI/6),o;case"small":return new Bi(Math.max(e,n,i)*.7,8,6);case"network":const l=new Bi(1,8,6);return l.scale(e,n,i),l;default:return new Bi(1,8,6)}}function sC(){const t=new Bi(1.8,32,24),e=t.attributes.position.array;for(let i=0;i<e.length;i+=3){const r=e[i],s=e[i+1],a=e[i+2],o=Math.sin(r*4)*.1+Math.cos(s*6)*.08+Math.sin(a*5)*.12;e[i]*=1+o,e[i+1]*=1+o*.8,e[i+2]*=1+o*1.2}t.attributes.position.needsUpdate=!0,t.computeVertexNormals();const n=new $d({color:13154716,transparent:!0,opacity:.4,side:Yn,shininess:10});return new kn(t,n)}function Lm(t){return t<20?new Ue(3900150):t<40?new Ue(440020):t<60?new Ue(1096065):t<80?new Ue(16096779):new Ue(15680580)}function Bv({brainData:t,className:e=""}){const n=V.useRef(null),i=V.useRef(null),r=V.useRef(null),s=V.useRef(null),a=V.useRef(),o=V.useRef([]),[l,c]=V.useState({visible:!1,x:0,y:0,content:""});return V.useEffect(()=>{if(!n.current)return;const d=new cE;d.background=new Ue(2068),i.current=d;const f=new wn(60,1,.1,1e3);f.position.set(3,1.5,3),f.lookAt(0,0,0),s.current=f;const h=new nC({antialias:!0,alpha:!0});h.setSize(400,400),h.setPixelRatio(window.devicePixelRatio),h.shadowMap.enabled=!0,h.shadowMap.type=cv,r.current=h,n.current.appendChild(h.domElement);const p=new vE(4210752,.3);d.add(p);const _=new rm(16777215,.7);_.position.set(5,5,5),_.castShadow=!0,d.add(_);const x=new rm(4227327,.3);x.position.set(-5,2,-5),d.add(x);const m=sC();d.add(m);const u=iC.map(I=>{const B=t[I.id]||0,$=Lm(B),D=rC(I);let Y;if(I.shape==="network"){const se=B===0?new Ue(6710886):$.clone().multiplyScalar(1.2);Y=new Dl({color:se,transparent:!0,opacity:B===0?.2:.5+B/100*.3})}else{const se=B===0?new Ue(8947848):$;Y=new $d({color:se,emissive:B===0?new Ue(0):$.clone().multiplyScalar(B/100*.2),opacity:B===0?.3:.7+B/100*.2,transparent:!0,shininess:15,specular:new Ue(2236962)})}const K=new kn(D,Y);return K.position.set(...I.position),K.userData={regionId:I.id,regionName:I.name,activity:B},K.castShadow=!0,K.receiveShadow=!0,d.add(K),{...I,activity:B,color:`#${$.getHexString()}`,mesh:K}});o.current=u;let v=!1,g={x:0,y:0},y=0,T=0;const C=I=>{v=!0,g={x:I.clientX,y:I.clientY}},R=()=>{v=!1},P=I=>{if(v){const B={x:I.clientX-g.x,y:I.clientY-g.y};y+=B.x*.01,T+=B.y*.01,T=Math.max(-Math.PI/2,Math.min(Math.PI/2,T));const $=f.position.length();f.position.x=$*Math.cos(T)*Math.sin(y),f.position.y=$*Math.sin(T),f.position.z=$*Math.cos(T)*Math.cos(y),f.lookAt(0,0,0),g={x:I.clientX,y:I.clientY}}},E=I=>{const B=f.position.length(),$=Math.max(2,Math.min(8,B+I.deltaY*.01));f.position.normalize().multiplyScalar($)},M=new xE,L=new Ze,O=I=>{if(v)return;const B=h.domElement.getBoundingClientRect();L.x=(I.clientX-B.left)/B.width*2-1,L.y=-((I.clientY-B.top)/B.height)*2+1,M.setFromCamera(L,f);const $=M.intersectObjects(u.map(D=>D.mesh).filter(D=>D));if($.length>0){const D=$[0].object,{regionName:Y,activity:K}=D.userData;c({visible:!0,x:I.clientX,y:I.clientY,content:`${Y}: ${K}%`})}else c(D=>({...D,visible:!1}))};h.domElement.addEventListener("mousedown",C),window.addEventListener("mouseup",R),window.addEventListener("mousemove",P),h.domElement.addEventListener("wheel",E),h.domElement.addEventListener("mousemove",O);const z=()=>{d.rotation.y+=.003,u.forEach(I=>{if(I.mesh){const B=1+I.activity/100*.15;I.mesh.scale.setScalar(B)}}),h.render(d,f),a.current=requestAnimationFrame(z)};z();const X=()=>{if(n.current){const I=n.current.clientWidth,B=n.current.clientHeight;f.aspect=I/B,f.updateProjectionMatrix(),h.setSize(I,B)}};return window.addEventListener("resize",X),()=>{a.current&&cancelAnimationFrame(a.current),h.domElement.removeEventListener("mousedown",C),window.removeEventListener("mouseup",R),window.removeEventListener("mousemove",P),h.domElement.removeEventListener("wheel",E),h.domElement.removeEventListener("mousemove",O),window.removeEventListener("resize",X),n.current&&h.domElement&&n.current.removeChild(h.domElement),h.dispose()}},[]),V.useEffect(()=>{o.current.length>0&&o.current.forEach(d=>{const f=t[d.id]||0,h=Lm(f);if(d.mesh&&d.mesh.material instanceof $d){const p=f===0?new Ue(8947848):h;d.mesh.material.color=p,d.mesh.material.emissive=f===0?new Ue(0):h.clone().multiplyScalar(f/100*.2),d.mesh.material.opacity=f===0?.3:.7+f/100*.2,d.mesh.userData.activity=f}else if(d.mesh&&d.mesh.material instanceof Dl){const p=f===0?new Ue(6710886):h.clone().multiplyScalar(1.2);d.mesh.material.color=p,d.mesh.material.opacity=f===0?.2:.5+f/100*.3,d.mesh.userData.activity=f}d.activity=f})},[t]),A.jsxs("div",{className:`relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden ${e}`,children:[A.jsx("div",{ref:n,className:"w-full h-full"}),A.jsxs("div",{className:"absolute bottom-4 left-4 bg-gray-800/90 p-3 rounded-lg text-white text-xs",children:[A.jsx("div",{className:"font-semibold mb-2",children:"Brain Activity"}),A.jsxs("div",{className:"flex items-center space-x-3",children:[A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("div",{className:"w-3 h-3 rounded bg-blue-500"}),A.jsx("span",{children:"Low"})]}),A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("div",{className:"w-3 h-3 rounded bg-green-500"}),A.jsx("span",{children:"Med"})]}),A.jsxs("div",{className:"flex items-center space-x-1",children:[A.jsx("div",{className:"w-3 h-3 rounded bg-red-500"}),A.jsx("span",{children:"High"})]})]})]}),A.jsxs("div",{className:"absolute top-4 right-4 bg-gray-800/90 p-2 rounded-lg text-white text-xs",children:[A.jsx("div",{children:"🖱️ Drag to rotate"}),A.jsx("div",{children:"🔍 Scroll to zoom"}),A.jsx("div",{children:"🧠 Hover for details"})]}),l.visible&&A.jsx("div",{className:"absolute pointer-events-none bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10",style:{left:l.x+10,top:l.y-30},children:l.content})]})}const Il="cortexcam-activities";function aC(){try{const t=localStorage.getItem(Il);if(t){const e=JSON.parse(t);return{...e,activities:e.activities.map(n=>{var i;return{...n,timestamp:new Date(n.timestamp),activityDate:n.activityDate?new Date(n.activityDate):new Date(n.timestamp),activityTime:n.activityTime||"12:00",imageUrl:(i=n.image)!=null&&i.base64?`data:${n.image.mime};base64,${n.image.base64}`:n.imageUrl}}),lastProcessed:e.lastProcessed?new Date(e.lastProcessed):null}}}catch(t){console.error("Failed to load activities from storage:",t)}return{activities:[],aggregatedScores:{},lastProcessed:null}}async function oC(t){try{const e=t.activities.map(i=>({id:i.id,hours:i.hours,timestamp:i.timestamp,activityDate:i.activityDate,activityTime:i.activityTime,brainScores:i.brainScores,isProcessing:!1,image:{name:(i.image instanceof File,i.image.name),size:(i.image instanceof File,i.image.size),type:i.image instanceof File?i.image.type:"mime"in i.image?i.image.mime:i.image.type},imageUrl:i.imageUrl})),n={...t,activities:e};localStorage.setItem(Il,JSON.stringify(n)),console.log(`💾 Saved ${e.length} activities to localStorage (metadata only)`)}catch(e){console.error("Failed to save activities to storage:",e),e instanceof DOMException&&e.name==="QuotaExceededError"&&(console.warn("🗑️ LocalStorage quota exceeded, clearing activities to free space"),localStorage.removeItem(Il))}}function zv(){const[t,e]=V.useState(aC);V.useEffect(()=>{oC(t).catch(d=>{console.error("Failed to save to storage:",d)})},[t]);const n=d=>{const f=new Date,h={id:Date.now().toString(),image:d,imageUrl:URL.createObjectURL(d),hours:1,timestamp:f,activityDate:new Date,activityTime:f.toTimeString().slice(0,5),isProcessing:!1};return e(p=>({...p,activities:[...p.activities,h]})),h},i=(d,f)=>{e(h=>({...h,activities:h.activities.map(p=>p.id===d?{...p,...f}:p)}))},r=d=>{e(f=>({...f,activities:f.activities.filter(h=>h.id!==d)}))},s=d=>{e(f=>({...f,aggregatedScores:d,lastProcessed:new Date}))},a=V.useCallback((d="day")=>{const f=t.activities.filter(u=>u.brainScores&&Object.keys(u.brainScores).length>0);if(console.log("🔍 getTimeSeriesData called:",{timeframe:d,totalActivities:t.activities.length,processedActivities:f.length,activities:f.map(u=>({id:u.id,activityDate:u.activityDate.toISOString().split("T")[0],activityTime:u.activityTime,brainScoresCount:Object.keys(u.brainScores||{}).length}))}),f.length===0)return console.log("❌ No processed activities found"),{};const h=new Date,p=h.toISOString().split("T")[0];console.log("🕐 Current time info:",{now:h.toISOString(),today:p,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone});const _=f.filter(u=>{if(d==="day"){const v=f.map(R=>R.activityDate.toISOString().split("T")[0]),g=[...new Set(v)].sort(),y=g[g.length-1],T=u.activityDate.toISOString().split("T")[0],C=T===y;return console.log(`📅 Day filter: activity "${T}" vs most recent "${y}" = ${C}`),C}else{const v=new Date;v.setDate(v.getDate()-7);const g=u.activityDate>=v;return console.log(`📅 Week filter: activity ${u.activityDate.toISOString()} vs ${v.toISOString()} = ${g}`),g}});if(console.log("🔍 After timeframe filtering:",{timeframe:d,filteredCount:_.length,filtered:_.map(u=>({activityDate:u.activityDate.toISOString().split("T")[0],activityTime:u.activityTime}))}),_.length===0)return console.log("❌ No activities in selected timeframe"),{};const x={},m=new Set;return _.forEach(u=>{Object.keys(u.brainScores||{}).forEach(v=>m.add(v))}),m.forEach(u=>{x[u]=[];const v=[];if(_.forEach(g=>{var P;const y=g.activityDate.toISOString().split("T")[0],T=g.activityTime,C=`${y}T${T}:00`,R=((P=g.brainScores)==null?void 0:P[u])||0;v.push({datetime:C,score:R,hours:g.hours})}),v.sort((g,y)=>g.datetime.localeCompare(y.datetime)),d==="day"){const g={};if(v.forEach(({datetime:y,score:T,hours:C})=>{const R=y.split("T")[1].split(":")[0];g[R]||(g[R]={totalScore:0,totalHours:0,count:0}),g[R].totalScore+=T*C,g[R].totalHours+=C,g[R].count+=1}),Object.entries(g).forEach(([y,T])=>{const C=Math.round(T.totalScore/T.totalHours);x[u].push({time:`${y}:00`,value:C})}),x[u].length===1){const y=x[u][0];x[u]=[{time:"00:00",value:Math.max(1,y.value-10)},y,{time:"23:59",value:Math.max(1,y.value-5)}]}else if(x[u].length===2){const[y,T]=x[u],C=Math.round((y.value+T.value)/2);x[u].splice(1,0,{time:"12:00",value:C})}}else v.forEach(({datetime:g,score:y,hours:T})=>{const C=g.split("T")[0],R=x[u].find(P=>P.time===C);if(R){const P=R.value*R.totalHours,E=y*T,M=R.totalHours+T;R.value=Math.round((P+E)/M),R.totalHours=M}else x[u].push({time:C,value:Math.round(y),totalHours:T})});x[u].forEach(g=>{delete g.totalHours})}),console.log("📊 Generated time series from real activity dates:",{processedActivities:f.length,regions:m.size,sampleData:Object.keys(x).slice(0,3).map(u=>({region:u,dataPoints:x[u].length,dates:x[u].map(v=>v.time)}))}),x},[t.activities,t.aggregatedScores]),o=V.useCallback(d=>{const f=t.activities.filter(p=>p.brainScores&&Object.keys(p.brainScores).length>0&&p.activityDate.toISOString().split("T")[0]===d),h={};return f.forEach(p=>{const _=parseInt(p.activityTime.split(":")[0],10);h[_]||(h[_]={hour:_,activities:[],totalHours:0,brainScoresSums:{},brainScoresCounts:{}});const x=(p.image instanceof File,p.image.name);h[_].activities.push({id:p.id,name:x,time:p.activityTime,hours:p.hours,brainScores:p.brainScores||{}}),h[_].totalHours+=p.hours,Object.entries(p.brainScores||{}).forEach(([m,u])=>{h[_].brainScoresSums[m]=(h[_].brainScoresSums[m]||0)+u,h[_].brainScoresCounts[m]=(h[_].brainScoresCounts[m]||0)+1})}),Object.values(h).map(p=>({hour:p.hour,activities:p.activities,totalHours:p.totalHours,avgBrainActivity:Object.fromEntries(Object.entries(p.brainScoresSums).map(([_,x])=>[_,Math.round(x/p.brainScoresCounts[_])]))})).sort((p,_)=>p.hour-_.hour)},[t.activities]),l=()=>{e({activities:[],aggregatedScores:{},lastProcessed:null})},c=()=>{localStorage.removeItem(Il),console.log("🗑️ Cleared localStorage cache"),e({activities:[],aggregatedScores:{},lastProcessed:null}),t.activities.forEach(d=>{d.imageUrl&&d.imageUrl.startsWith("blob:")&&URL.revokeObjectURL(d.imageUrl)}),console.log("✅ Cache cleared successfully")};return{activities:t.activities,aggregatedScores:t.aggregatedScores,lastProcessed:t.lastProcessed,hasEnoughData:t.activities.some(d=>d.brainScores&&Object.keys(d.brainScores).length>0),addActivity:n,updateActivity:i,removeActivity:r,setAggregatedScores:s,getTimeSeriesData:a,getHourlyBreakdown:o,clearAllActivities:l,clearCache:c}}const Dm=[{id:"frontal_lobe",name:"Frontal Lobe",description:"The executive control center responsible for planning, decision-making, problem-solving, and personality.",functions:["Executive function","Planning","Decision making","Working memory"],activation:["Complex puzzles","Strategic planning","Learning new skills","Mental challenges"],color:"#7aa2f7"},{id:"parietal_lobe",name:"Parietal Lobe",description:"Processes sensory information and integrates spatial awareness, touch, and body position.",functions:["Spatial processing","Sensory integration","Attention","Body awareness"],activation:["Spatial puzzles","Navigation tasks","Touch exercises","Coordination activities"],color:"#8bd5ca"},{id:"temporal_lobe",name:"Temporal Lobe",description:"Processes auditory information, language comprehension, and memory formation.",functions:["Auditory processing","Language comprehension","Memory formation","Sound recognition"],activation:["Listening to music","Language learning","Auditory training","Memory exercises"],color:"#4ecdc4"},{id:"occipital_lobe",name:"Occipital Lobe",description:"Primary visual processing center that interprets visual information from the eyes.",functions:["Visual processing","Pattern recognition","Color detection","Motion tracking"],activation:["Visual tasks","Art appreciation","Reading","Video games"],color:"#a7c957"},{id:"insula",name:"Insula",description:"Processes internal body sensations, emotions, and empathy.",functions:["Interoception","Emotional awareness","Empathy","Self-awareness"],activation:["Mindfulness meditation","Body awareness exercises","Emotional processing","Breathing exercises"],color:"#f7768e"},{id:"thalamus",name:"Thalamus",description:"Relay station that processes and transmits sensory and motor information to the cortex.",functions:["Sensory relay","Motor relay","Arousal","Attention filtering"],activation:["Sensory stimulation","Attention exercises","Multi-sensory activities","Focus training"],color:"#c6a0f6"},{id:"cerebellum",name:"Cerebellum",description:"Coordinates movement, balance, posture, and contributes to cognitive functions.",functions:["Balance","Motor coordination","Motor learning","Cognitive coordination"],activation:["Balance exercises","Dance","Sports","Coordination training"],color:"#ff6b9d"},{id:"brainstem",name:"Brainstem",description:"Controls vital functions like breathing, heart rate, and consciousness.",functions:["Vital functions","Arousal","Sleep regulation","Reflexes"],activation:["Breathing exercises","Meditation","Sleep optimization","Stress management"],color:"#ffa500"},{id:"hippocampus",name:"Hippocampus",description:"Essential for memory formation, spatial navigation, and learning new information.",functions:["Memory formation","Spatial navigation","Pattern recognition","Learning"],activation:["Memory games","Learning new routes","Studying","Spatial puzzles"],color:"#95e1d3"},{id:"amygdala",name:"Amygdala",description:"Processes emotions, especially fear, and plays a key role in emotional memory.",functions:["Threat detection","Emotional memory","Fight-or-flight response","Social emotions"],activation:["Emotional experiences","Novel situations","Social interactions","Stress response"],color:"#f7768e"},{id:"caudate_nucleus",name:"Caudate Nucleus",description:"Part of the basal ganglia involved in motor control and learning.",functions:["Motor control","Habit formation","Goal-directed behavior","Learning"],activation:["Skill practice","Habit formation","Goal setting","Motor learning"],color:"#9d7cd8"},{id:"putamen",name:"Putamen",description:"Controls movement and motor skills, involved in procedural learning.",functions:["Motor control","Movement regulation","Procedural learning","Motor habits"],activation:["Repetitive movements","Motor skills practice","Exercise","Manual tasks"],color:"#e0af68"},{id:"globus_pallidus",name:"Globus Pallidus",description:"Regulates voluntary movement by controlling motor output.",functions:["Movement regulation","Motor control","Action selection","Motor inhibition"],activation:["Controlled movements","Precision tasks","Motor planning","Movement inhibition"],color:"#73daca"},{id:"nucleus_accumbens",name:"Nucleus Accumbens",description:"Reward center that processes pleasure, motivation, and reinforcement learning.",functions:["Reward processing","Motivation","Pleasure","Addiction responses"],activation:["Enjoyable activities","Achievement goals","Social rewards","Learning rewards"],color:"#bb9af7"},{id:"default_mode_network_DMN",name:"Default Mode Network",description:"Active during rest and introspection, involved in self-referential thinking.",functions:["Self-reflection","Mind wandering","Autobiographical memory","Future planning"],activation:["Meditation","Daydreaming","Self-reflection","Rest periods"],color:"#7dcfff"},{id:"dorsal_attention_network_DAN",name:"Dorsal Attention Network",description:"Controls goal-directed, top-down attention and focus.",functions:["Focused attention","Goal-directed behavior","Cognitive control","Task focus"],activation:["Focused tasks","Concentration exercises","Goal pursuit","Attention training"],color:"#f7768e"},{id:"ventral_attention_network_VAN",name:"Ventral Attention Network",description:"Processes stimulus-driven attention and responds to unexpected events.",functions:["Stimulus detection","Alertness","Reorienting attention","Surprise response"],activation:["Novel stimuli","Unexpected events","Alertness training","Environment scanning"],color:"#ff9e64"},{id:"frontoparietal_control_network_FPCN",name:"Frontoparietal Control Network",description:"Flexible control system that adapts to task demands and cognitive control.",functions:["Cognitive flexibility","Task switching","Adaptive control","Executive control"],activation:["Multitasking","Problem solving","Cognitive flexibility exercises","Task switching"],color:"#9ece6a"},{id:"salience_network",name:"Salience Network",description:"Identifies relevant stimuli and switches between different brain networks.",functions:["Salience detection","Network switching","Relevance assessment","Attention switching"],activation:["Important decision making","Prioritization tasks","Relevance judgments","Focus switching"],color:"#e0af68"}];function lC(){const[t,e]=V.useState("day"),[n,i]=V.useState({}),{getTimeSeriesData:r,hasEnoughData:s,lastProcessed:a,clearCache:o}=zv();V.useEffect(()=>{i(r(t))},[r,t]);const l=V.useMemo(()=>Object.fromEntries(Dm.map(d=>{var p;const f=n[d.id]||[],h=((p=f[f.length-1])==null?void 0:p.value)||0;return[d.id,h]})),[n]),c=V.useMemo(()=>{const d=Object.values(l);return d.reduce((f,h)=>f+h,0)/d.length||0},[l]);return A.jsxs("div",{className:"space-y-8",children:[A.jsxs("div",{className:"card",children:[A.jsxs("div",{className:"text-center mb-6",children:[A.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-brand-500 to-accent-teal bg-clip-text text-transparent mb-2",children:"Brain Activity Dashboard"}),A.jsx("p",{className:"text-dark-100",children:s?`Track your cognitive engagement throughout the ${t}`:"Add activities in the Aggregate tab and process them to see your personalized brain data"}),!s&&A.jsx("div",{className:"mt-3 text-sm text-accent-pink",children:"Process at least one activity to see your brain activity data"}),a&&A.jsxs("div",{className:"mt-2 text-xs text-dark-100",children:["Last updated: ",a.toLocaleString()]}),s&&A.jsx("div",{className:"mt-4",children:A.jsx("button",{onClick:()=>{confirm("This will clear all brain data and reset the dashboard. Are you sure?")&&o()},className:"btn-secondary text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/30",children:"🗑️ Reset Dashboard"})})]}),A.jsx("div",{className:"flex justify-center mb-6",children:A.jsxs("div",{className:"flex bg-dark-900 rounded-lg p-1",children:[A.jsx("button",{onClick:()=>e("day"),className:`px-4 py-2 rounded-md text-sm transition-all ${t==="day"?"bg-brand-600 text-white":"text-dark-100 hover:text-white"}`,children:"Latest Day"}),A.jsx("button",{onClick:()=>e("week"),className:`px-4 py-2 rounded-md text-sm transition-all ${t==="week"?"bg-brand-600 text-white":"text-dark-100 hover:text-white"}`,children:"7 Days"})]})}),s?A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[A.jsxs("div",{className:"text-center",children:[A.jsxs("div",{className:"text-3xl font-bold text-brand-500 mb-1",children:[Math.round(c),"%"]}),A.jsx("div",{className:"text-sm text-dark-100",children:"Overall Activity"})]}),A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"text-3xl font-bold text-accent-teal mb-1",children:Object.values(l).filter(d=>d>60).length}),A.jsx("div",{className:"text-sm text-dark-100",children:"Highly Active Regions"})]}),A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"text-3xl font-bold text-accent-pink mb-1",children:Object.values(l).filter(d=>d<30).length}),A.jsx("div",{className:"text-sm text-dark-100",children:"Underutilized Regions"})]})]}),A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto",children:[A.jsxs("div",{className:"flex flex-col items-center",children:[A.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"2D Brain Map"}),A.jsx("div",{className:"max-w-md",children:A.jsx(Kf,{scores:l})})]}),A.jsxs("div",{className:"flex flex-col items-center",children:[A.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"3D Brain Model"}),A.jsx(Bv,{brainData:l,className:"w-full"})]})]})]}):A.jsxs("div",{className:"text-center py-8",children:[A.jsx("div",{className:"text-gray-500 mb-4",children:A.jsxs("svg",{width:"200",height:"120",className:"mx-auto opacity-30",children:[A.jsx("path",{d:"M100 20 C140 20, 180 50, 180 80 C180 100, 140 110, 100 110 C60 110, 20 100, 20 80 C20 50, 60 20, 100 20 Z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:"5,5"}),A.jsx("text",{x:"100",y:"70",textAnchor:"middle",className:"text-xs fill-current",children:"Brain Map"})]})}),A.jsx("p",{className:"text-dark-100 text-sm",children:"Brain visualization will appear here after processing activities"})]})]}),A.jsxs("div",{children:[A.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Brain Region Details"}),s?A.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Dm.map(d=>A.jsx(XS,{region:d,usageData:n[d.id]||[]},d.id))}):A.jsxs("div",{className:"card text-center py-12",children:[A.jsx("div",{className:"text-6xl mb-4",children:"🧠"}),A.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"No Brain Data Yet"}),A.jsx("p",{className:"text-dark-100 mb-6",children:"Process activities in the Aggregate tab to see detailed brain region analysis"}),A.jsxs("div",{className:"flex flex-col items-center gap-2 text-sm text-dark-100",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"w-2 h-2 bg-accent-pink rounded-full"}),"Add an activity image"]}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"w-2 h-2 bg-accent-teal rounded-full"}),'Click "Process X Activities"']}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"w-2 h-2 bg-brand-500 rounded-full"}),"Return here to see your brain activity"]})]})]})]}),A.jsxs("div",{className:"card",children:[A.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"💡 Optimization Tips"}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[A.jsxs("div",{children:[A.jsx("h3",{className:"font-medium text-accent-teal mb-2",children:"Boost Underutilized Regions"}),A.jsxs("ul",{className:"space-y-2 text-sm text-dark-100",children:[A.jsxs("li",{className:"flex items-start",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0"}),"Try memory games to activate your hippocampus"]}),A.jsxs("li",{className:"flex items-start",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0"}),"Practice mindfulness to engage your anterior cingulate"]}),A.jsxs("li",{className:"flex items-start",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0"}),"Learn a new skill to challenge your prefrontal cortex"]})]})]}),A.jsxs("div",{children:[A.jsx("h3",{className:"font-medium text-accent-teal mb-2",children:"Maintain Balance"}),A.jsxs("ul",{className:"space-y-2 text-sm text-dark-100",children:[A.jsxs("li",{className:"flex items-start",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0"}),"Mix cognitive and physical activities"]}),A.jsxs("li",{className:"flex items-start",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0"}),"Take breaks to prevent cognitive fatigue"]}),A.jsxs("li",{className:"flex items-start",children:[A.jsx("span",{className:"w-1.5 h-1.5 bg-accent-pink rounded-full mt-2 mr-2 flex-shrink-0"}),"Vary your daily activities for well-rounded engagement"]})]})]})]})]})]})}function Hv(){const[t,e]=V.useState(!1),n=async(a,o)=>{const l=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o||{})});if(!l.ok)throw new Error(await l.text());return l.json()};return{loading:t,analyzeScene:async a=>{e(!0);try{return await n("/analyze/scene",a)}finally{e(!1)}},mapAll:async a=>{e(!0);try{return await n("/map/all",a)}finally{e(!1)}},aggregateBrain:async a=>{e(!0);try{return await n("/map/aggregate",a)}finally{e(!1)}}}}function cC(t){const[e,n]=V.useState([]),[i,r]=V.useState(!1);return{messages:e,connected:i,connect:o=>{const l=new WebSocket(t);return l.onopen=()=>r(!0),l.onclose=()=>r(!1),l.onmessage=c=>{try{const d=JSON.parse(c.data);n(f=>[...f,d]),o==null||o(d)}catch(d){console.error("Failed to parse WS message:",d)}},l},clearMessages:()=>n([])}}function uC({onSceneAnalyzed:t,onBrainScores:e}){const[n,i]=V.useState("ios"),[r,s]=V.useState("demo"),[a,o]=V.useState(null),[l,c]=V.useState(""),[d,f]=V.useState(null),[h,p]=V.useState(null),[_,x]=V.useState({}),[m,u]=V.useState(""),{loading:v,analyzeScene:g,mapAll:y}=Hv(),{connect:T,clearMessages:C}=cC(`ws://${location.host}/ws/analyze`),R=O=>{var X;const z=(X=O.target.files)==null?void 0:X[0];if(z){o(z);const I=URL.createObjectURL(z);c(I)}},P=O=>new Promise(z=>{const X=new FileReader;X.onload=()=>{const B=X.result.split(",")[1];z({base64:B,mime:O.type})},X.readAsDataURL(O)}),E=async()=>{if(a)try{u("Analyzing...");const{base64:O,mime:z}=await P(a),X=await g({device_meta:{platform:n},user_id:r,image_base64:O,image_mime:z});f(X.scene_json),t(X.scene_json),u("Scene analyzed successfully")}catch(O){u(`Error: ${O}`)}},M=async()=>{if(!(!d||!a))try{u("Processing with GPT...");const{base64:O,mime:z}=await P(a),X=await y({scene_json:d,image_base64:O,image_mime:z});p(X.mapping),x(X.brain_scores_100),e(X.brain_scores_100),u("GPT processing complete")}catch(O){u(`Error: ${O}`)}},L=()=>{if(!a)return;C(),u("Connecting...");const O=T(z=>{z.type==="status"?u(`[${z.stage}] ${z.detail}`):z.type==="result"?(z.scene_json&&(f(z.scene_json),t(z.scene_json)),z.mapping&&p(z.mapping),z.brain_scores_100&&(x(z.brain_scores_100),e(z.brain_scores_100)),u("Stream analysis complete")):z.type==="error"&&u(`Error: ${z.message}`)});O.onopen=async()=>{const{base64:z,mime:X}=await P(a);O.send(JSON.stringify({device_meta:{platform:n},user_id:r,image_base64:z,image_mime:X}))}};return A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"card",children:[A.jsx("h2",{className:"text-xl font-semibold mb-4 text-brand-500",children:"Analyze Scene"}),A.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[A.jsxs("select",{value:n,onChange:O=>i(O.target.value),className:"input",children:[A.jsx("option",{value:"ios",children:"iOS"}),A.jsx("option",{value:"android",children:"Android"}),A.jsx("option",{value:"web",children:"Web"})]}),A.jsx("input",{type:"text",value:r,onChange:O=>s(O.target.value),placeholder:"User ID",className:"input"}),A.jsx("input",{type:"file",accept:"image/*",onChange:R,className:"input"})]}),A.jsxs("div",{className:"flex flex-wrap gap-3 mb-4",children:[A.jsx("button",{onClick:E,disabled:!a||v,className:"btn-primary disabled:opacity-50",children:"Analyze"}),A.jsx("button",{onClick:L,disabled:!a||v,className:"btn-secondary disabled:opacity-50",children:"Analyze (Stream)"}),A.jsx("button",{onClick:M,disabled:!d||!a||v,className:"btn-accent disabled:opacity-50",children:"Process with GPT (Brain Scores)"})]}),l&&A.jsx("div",{className:"mb-4",children:A.jsx("img",{src:l,alt:"Preview",className:"max-h-32 rounded-lg border border-dark-800 shadow-lg"})}),m&&A.jsx("div",{className:"text-sm text-dark-100 mb-4 font-mono bg-dark-900/50 p-2 rounded",children:m}),d&&A.jsxs("div",{className:"mb-4",children:[A.jsx("h3",{className:"text-sm font-medium mb-2 text-accent-teal",children:"Scene JSON"}),A.jsx("pre",{className:"text-xs bg-dark-900 border border-dark-800 rounded p-3 overflow-auto max-h-40",children:JSON.stringify(d,null,2)})]}),h&&A.jsxs("div",{className:"mb-4",children:[A.jsx("h3",{className:"text-sm font-medium mb-2 text-accent-teal",children:"Mapping"}),A.jsx("pre",{className:"text-xs bg-dark-900 border border-dark-800 rounded p-3 overflow-auto max-h-40",children:JSON.stringify(h,null,2)})]})]}),Object.keys(_).length>0&&A.jsxs("div",{className:"card",children:[A.jsx("h2",{className:"text-xl font-semibold mb-6 text-brand-500",children:"Brain Analysis Results"}),A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[A.jsxs("div",{children:[A.jsx("h3",{className:"text-sm font-medium mb-3 text-accent-pink",children:"2D Brain Map"}),A.jsx(Kf,{scores:_})]}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-sm font-medium mb-3 text-accent-pink",children:"3D Brain Model"}),A.jsx(Bv,{brainData:_,className:"h-64"})]})]}),A.jsxs("div",{className:"mt-4",children:[A.jsx("h3",{className:"text-sm font-medium mb-2 text-accent-pink",children:"Brain Scores Data"}),A.jsx("pre",{className:"text-xs bg-dark-900 border border-dark-800 rounded p-3 overflow-auto max-h-40",children:JSON.stringify(_,null,2)})]})]})]})}function dC({activity:t,onUpdate:e,onRemove:n}){const i=a=>{e(t.id,{hours:a})},r=a=>{const o=new Date(a);e(t.id,{activityDate:o})},s=a=>{e(t.id,{activityTime:a})};return A.jsxs("div",{className:"card group relative",children:[A.jsx("button",{onClick:()=>n(t.id),className:"absolute top-2 right-2 w-6 h-6 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center text-sm",children:"×"}),A.jsx("div",{className:"aspect-video w-full rounded-lg overflow-hidden mb-4 bg-dark-900",children:A.jsx("img",{src:t.imageUrl,alt:"Activity",className:"w-full h-full object-cover"})}),t.isProcessing&&A.jsx("div",{className:"absolute inset-0 bg-dark-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center z-10",children:A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"animate-spin w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full mx-auto mb-2"}),A.jsx("div",{className:"text-sm text-brand-500 font-medium",children:"🔬 Analyzing with AI..."}),A.jsx("div",{className:"text-xs text-dark-100 mt-1",children:"BLIP + OpenAI brain analysis"})]})}),!t.isProcessing&&t.brainScores&&Object.keys(t.brainScores).length>0&&A.jsx("div",{className:"absolute top-2 left-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium",children:"✅ Analyzed"}),A.jsxs("div",{className:"space-y-3",children:[A.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-medium text-accent-purple mb-1 uppercase tracking-wide",children:"Date"}),A.jsx("input",{type:"date",value:t.activityDate.toISOString().split("T")[0],onChange:a=>r(a.target.value),className:"input w-full text-sm"})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-medium text-accent-purple mb-1 uppercase tracking-wide",children:"Time"}),A.jsx("input",{type:"time",value:t.activityTime,onChange:a=>s(a.target.value),className:"input w-full text-sm"})]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-medium text-accent-teal mb-1 uppercase tracking-wide",children:"Hours Spent"}),A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("input",{type:"number",min:"0",step:"0.25",value:t.hours,onChange:a=>i(parseFloat(a.target.value)||0),className:"input w-20 text-center"}),A.jsx("span",{className:"text-sm text-dark-100",children:"hours"})]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-medium text-accent-orange mb-1 uppercase tracking-wide",children:"File"}),A.jsxs("div",{className:"text-sm text-dark-100 truncate font-mono",children:[(t.image instanceof File,t.image.name),!(t.image instanceof File)&&!("base64"in t.image)&&A.jsx("span",{className:"text-xs text-orange-400 ml-2",children:"(metadata only)"})]})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-medium text-accent-pink mb-1 uppercase tracking-wide",children:"Added"}),A.jsx("div",{className:"text-sm text-dark-100",children:t.timestamp.toLocaleString()})]}),t.brainScores&&A.jsxs("div",{children:[A.jsx("label",{className:"block text-xs font-medium text-accent-purple mb-1 uppercase tracking-wide",children:"Top Active Regions"}),A.jsx("div",{className:"flex flex-wrap gap-1",children:Object.entries(t.brainScores).sort(([,a],[,o])=>o-a).slice(0,3).map(([a,o])=>A.jsxs("span",{className:"text-xs bg-accent-purple/20 text-accent-purple px-2 py-1 rounded-full",children:[a.replace(/_/g," ").slice(0,12),"... ",o,"%"]},a))})]})]})]})}function fC({onAdd:t,disabled:e}){const n=V.useRef(null),i=()=>{var s;e||(s=n.current)==null||s.click()},r=s=>{var o;const a=(o=s.target.files)==null?void 0:o[0];a&&(t(a),s.target.value="")};return A.jsxs("div",{onClick:i,className:`card border-2 border-dashed border-dark-800 hover:border-brand-500/50 transition-all duration-200 cursor-pointer group ${e?"opacity-50 cursor-not-allowed":""}`,children:[A.jsx("input",{ref:n,type:"file",accept:"image/*",onChange:r,className:"hidden",disabled:e}),A.jsx("div",{className:"aspect-video w-full flex items-center justify-center mb-4 rounded-lg bg-dark-900/50 group-hover:bg-dark-850/50 transition-colors",children:A.jsxs("div",{className:"text-center",children:[A.jsx("div",{className:"w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-brand-500/30 transition-colors",children:A.jsx("svg",{className:"w-6 h-6 text-brand-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})}),A.jsx("div",{className:"text-sm text-brand-500 font-medium mb-1",children:"Add Activity"}),A.jsx("div",{className:"text-xs text-dark-100",children:"Upload an image"})]})}),A.jsxs("div",{className:"space-y-2 opacity-50",children:[A.jsx("div",{className:"h-4 bg-dark-900 rounded"}),A.jsx("div",{className:"h-3 bg-dark-900 rounded w-2/3"}),A.jsx("div",{className:"h-3 bg-dark-900 rounded w-1/2"})]})]})}function hC({onAggregateScores:t}){var v;const[e,n]=V.useState(""),[i,r]=V.useState(null),{loading:s,mapAll:a,analyzeScene:o}=Hv(),{activities:l,addActivity:c,updateActivity:d,removeActivity:f,setAggregatedScores:h,clearAllActivities:p,clearCache:_}=zv(),x=g=>new Promise((y,T)=>{if(!(g instanceof File)&&"base64"in g){console.log("Using stored base64 data for:",g.name),y({base64:g.base64,mime:g.mime});return}if(!(g instanceof File)&&!("base64"in g)){console.error("Cannot process activity - no image data available for:",g.name),T(new Error(`Activity "${g.name}" needs to be re-uploaded - image data not available`));return}console.log("Converting File to base64:",g.name);const C=new FileReader;C.onload=()=>{const P=C.result.split(",")[1];y({base64:P,mime:g.type})},C.onerror=T,C.readAsDataURL(g)}),m=g=>{c(g)},u=async()=>{var g,y;if(l.length===0){console.log("No activities to process");return}console.log(`🚀 Starting to process ${l.length} activities sequentially`);try{n(`🚀 Starting to process ${l.length} activities...`),r(null),l.forEach(I=>{d(I.id,{isProcessing:!1,brainScores:void 0})});const T=[];for(let I=0;I<l.length;I++){const B=l[I],$=(B.image instanceof File,B.image.name);console.log(`📸 Processing activity ${I+1}/${l.length}: ${$}`),d(B.id,{isProcessing:!0}),n(`📸 Processing activity ${I+1}/${l.length}: ${$}`);try{console.log("🔄 Converting image to base64...");const{base64:D,mime:Y}=await x(B.image);console.log(`✅ Image converted successfully - Size: ${D.length} chars, MIME: ${Y}`),console.log(`🎬 Step 1: Analyzing scene with BLIP for activity ${I+1}...`),n(`🎬 Step 1/2: Getting scene description for ${$}`);const se=(await o({device_meta:{platform:"web"},user_id:"aggregate_user",image_base64:D,image_mime:Y})).scene_json;console.log(`🎬 BLIP scene analysis complete for activity ${I+1}:`,{caption:se.caption,objectCount:((g=se.objects)==null?void 0:g.length)||0,textCount:((y=se.text)==null?void 0:y.length)||0}),console.log(`🧠 Step 2: Analyzing brain activity with OpenAI for activity ${I+1}...`),n(`🧠 Step 2/2: Analyzing brain activity for ${$}`);const ve=await a({scene_json:se,image_base64:D,image_mime:Y,hours:B.hours});console.log(`🎯 OpenAI brain analysis complete for activity ${I+1}:`,{sceneCaption:se.caption,hasBrainScores:!!ve.brain_scores_100,brainScoreCount:Object.keys(ve.brain_scores_100||{}).length,hasDomainScores:!!ve.domain_scores_100,mapping:ve.mapping});const We=ve.brain_scores_100||{};console.log(`🧠 Brain scores extracted for activity ${I+1}:`,{regionCount:Object.keys(We).length,sceneContext:se.caption,activityName:$,activityDate:B.activityDate.toISOString(),topRegions:Object.entries(We).sort(([,ze],[,He])=>He-ze).slice(0,3).map(([ze,He])=>`${ze}: ${He}`),allScoresSample:Object.entries(We).slice(0,5).map(([ze,He])=>`${ze}: ${He}`)}),Object.keys(We).length===0&&console.warn(`⚠️ No brain scores returned for activity ${I+1} - OpenAI call may have failed`),T.push({brainScores:We,hours:B.hours,activityName:$,sceneCaption:se.caption}),console.log(`✅ Completed processing activity ${I+1}: ${$}`),d(B.id,{brainScores:We,isProcessing:!1}),n(`✅ Completed ${I+1}/${l.length}: ${$}`),I<l.length-1&&await new Promise(ze=>setTimeout(ze,500))}catch(D){console.error(`❌ Error processing activity ${I+1} (${$}):`,D),n(`❌ Error processing ${$}: ${D}`),d(B.id,{isProcessing:!1}),console.log("🔄 Continuing with next activity...");continue}}console.log(`🤖 Step 3: Intelligent aggregation with OpenAI from ${T.length} processed activities...`),n(`🤖 Step 3/3: AI-powered aggregation of ${T.length} activities...`);const C=T.reduce((I,B)=>I+B.hours,0);console.log("📊 Individual results summary for aggregation:",{totalActivities:T.length,totalHours:C,activitiesWithScores:T.filter(I=>Object.keys(I.brainScores).length>0).length,activities:T.map(I=>({name:I.activityName,hours:I.hours,scoreCount:Object.keys(I.brainScores).length,sceneCaption:I.sceneCaption}))}),console.log("🤖 Using client-side intelligent aggregation with existing brain scores...");const R=new Set;T.forEach(I=>{Object.keys(I.brainScores).forEach(B=>R.add(B))}),console.log(`🧠 Found ${R.size} unique brain regions across all activities`);const P={};for(const I of R){let B=0,$=0;for(const D of T){const Y=D.brainScores[I]||0,K=D.hours;B+=Y*K,$+=K}$>0&&(P[I]=Math.round(B/$))}const E=Object.entries(P).filter(([,I])=>I<30).sort(([,I],[,B])=>I-B).slice(0,10).map(([I])=>I),M=Object.entries(P).sort(([,I],[,B])=>B-I).slice(0,5),L=C===1?"1 hour":`${C} hours`;let z=`Analyzed ${T.length===1?"1 activity":`${T.length} activities`} over ${L}. `;if(M.length>0){const I=M[0];z+=`Highest engagement: ${I[0].replace(/_/g," ")} (${I[1]}%). `}E.length>0?z+=`${E.length} regions show low activity and could benefit from targeted exercises.`:z+="Great balance across brain regions!";const X={per_image_brain_scores_100:T.map(I=>I.brainScores),aggregate_scores_100:P,underutilized_regions:E,summary:z};console.log("🎉 Final OpenAI aggregated result:",{totalActivities:T.length,totalHours:C,aggregatedRegions:Object.keys(X.aggregate_scores_100).length,topActiveRegions:Object.entries(X.aggregate_scores_100).sort(([,I],[,B])=>B-I).slice(0,5).map(([I,B])=>`${I}: ${B}%`),underutilizedCount:X.underutilized_regions.length,underutilizedRegions:X.underutilized_regions.slice(0,5),aiSummary:X.summary}),r(X),h(X.aggregate_scores_100),t(X.aggregate_scores_100),n("🎉 Complete! 3-step AI analysis: BLIP → OpenAI → Aggregation. Data is now on the Home page.")}catch(T){n(`Error: ${T}`),l.forEach(C=>{d(C.id,{isProcessing:!1})})}};return A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"card",children:[A.jsxs("div",{className:"flex items-center justify-between mb-4",children:[A.jsxs("div",{children:[A.jsx("h2",{className:"text-xl font-semibold text-brand-500",children:"Daily Activities"}),A.jsx("p",{className:"text-dark-100 text-sm",children:"Add your activities to track brain engagement patterns"})]}),A.jsxs("div",{className:"flex gap-2",children:[l.length>0&&A.jsxs("div",{className:"flex gap-2",children:[A.jsx("button",{onClick:p,className:"btn-secondary text-xs",children:"Clear Activities"}),A.jsx("button",{onClick:()=>{confirm("This will clear all stored data including activities and aggregated scores. Are you sure?")&&(_(),n("Cache cleared successfully"),r(null))},className:"btn-secondary text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 border-red-500/30",children:"🗑️ Clear Cache"})]}),A.jsx("button",{onClick:()=>{console.log("Process button clicked!",{activitiesCount:l.length,loading:s,activities:l.map(g=>({id:g.id,name:g.image.name}))}),u()},disabled:l.length===0||s,className:"btn-accent disabled:opacity-50",children:s?"Processing...":`Process ${l.length} Activities`})]})]}),e&&A.jsx("div",{className:"text-sm text-dark-100 mb-4 font-mono bg-dark-900/50 p-2 rounded",children:e}),l.length>=3&&A.jsx("div",{className:"bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4",children:A.jsxs("div",{className:"text-green-400 text-sm font-medium flex items-center",children:[A.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full mr-2"}),"Ready for analysis! Process activities to update your Home dashboard."]})})]}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[l.map(g=>A.jsx(dC,{activity:g,onUpdate:d,onRemove:f},g.id)),A.jsx(fC,{onAdd:m,disabled:s})]}),i&&A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"card",children:[A.jsx("h3",{className:"text-lg font-semibold text-brand-500 mb-4",children:"Aggregated Brain Activity"}),A.jsx(Kf,{scores:i.aggregate_scores_100})]}),A.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[i.summary&&A.jsxs("div",{className:"card",children:[A.jsx("h3",{className:"text-sm font-medium mb-3 text-accent-purple uppercase tracking-wide",children:"Daily Summary"}),A.jsx("p",{className:"text-dark-100 leading-relaxed",children:i.summary})]}),((v=i.underutilized_regions)==null?void 0:v.length)>0&&A.jsxs("div",{className:"card",children:[A.jsx("h3",{className:"text-sm font-medium mb-3 text-accent-pink uppercase tracking-wide",children:"Underutilized Regions"}),A.jsx("div",{className:"flex flex-wrap gap-2",children:i.underutilized_regions.map(g=>A.jsx("span",{className:"text-xs bg-accent-pink/20 text-accent-pink px-2 py-1 rounded-full",children:g.replace(/_/g," ")},g))}),A.jsx("p",{className:"text-xs text-dark-100 mt-2",children:"Consider activities that engage these areas for better balance."})]})]})]})]})}function pC(){const t=sr(),e=[{path:"/",label:"Home",icon:"🏠"},{path:"/analyze",label:"Analyze",icon:"🧠"},{path:"/aggregate",label:"Aggregate",icon:"📊"}];return A.jsx("nav",{className:"mt-4",children:A.jsx("div",{className:"flex space-x-1 bg-dark-900/50 rounded-lg p-1",children:e.map(n=>{const i=t.pathname===n.path;return A.jsxs(qf,{to:n.path,className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all ${i?"bg-brand-600 text-white shadow-lg":"text-dark-100 hover:text-white hover:bg-dark-800/50"}`,children:[A.jsx("span",{className:"text-base",children:n.icon}),n.label]},n.path)})})})}function mC(){const[t,e]=V.useState(null),[,n]=V.useState({});return A.jsx(US,{children:A.jsxs("div",{className:"min-h-screen",children:[A.jsx("header",{className:"bg-gradient-to-r from-dark-900/90 to-dark-850/90 backdrop-blur-md border-b border-dark-800 sticky top-0 z-10",children:A.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsxs("div",{children:[A.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-brand-500 to-accent-teal bg-clip-text text-transparent",children:"CortexCam v0.1"}),A.jsx("p",{className:"text-dark-100 text-sm",children:"Wellness insights from scenes"})]}),A.jsx("a",{href:"/docs",target:"_blank",className:"text-brand-500 hover:text-brand-400 transition-colors text-sm",children:"API Docs →"})]}),A.jsx(pC,{})]})}),A.jsxs("main",{className:"max-w-6xl mx-auto px-6 py-8",children:[A.jsxs(fS,{children:[A.jsx(Ko,{path:"/",element:A.jsx(lC,{})}),A.jsx(Ko,{path:"/analyze",element:A.jsx(uC,{onSceneAnalyzed:e,onBrainScores:n})}),A.jsx(Ko,{path:"/aggregate",element:A.jsx(hC,{onAggregateScores:n})})]}),t&&window.location.pathname==="/analyze"&&A.jsxs("div",{className:"card mt-8",children:[A.jsx("h2",{className:"text-xl font-semibold mb-4 text-brand-500",children:"Current Scene"}),A.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",children:[A.jsxs("div",{children:[A.jsx("div",{className:"text-accent-teal font-medium",children:"Caption"}),A.jsx("div",{className:"text-dark-100",children:t.caption})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-accent-teal font-medium",children:"Platform"}),A.jsx("div",{className:"text-dark-100",children:t.device.platform})]}),A.jsxs("div",{children:[A.jsx("div",{className:"text-accent-teal font-medium",children:"Timestamp"}),A.jsx("div",{className:"text-dark-100",children:new Date(t.ts).toLocaleString()})]})]})]})]}),A.jsx("footer",{className:"bg-gradient-to-r from-dark-900/90 to-dark-850/90 border-t border-dark-800 mt-16",children:A.jsx("div",{className:"max-w-6xl mx-auto px-6 py-4 text-center text-sm text-dark-100",children:A.jsx("p",{children:"This prototype is for internal exploration. Ensure privacy-preserving defaults and avoid clinical framing."})})})]})})}uu.createRoot(document.getElementById("root")).render(A.jsx(u_.StrictMode,{children:A.jsx(mC,{})}));
