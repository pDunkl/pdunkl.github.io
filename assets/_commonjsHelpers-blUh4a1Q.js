import{bo as n,aK as u,s as d,bH as f,v as r,I as i,bi as l,bR as c,bQ as p,aW as m,bS as b}from"./index-RdBijPrE.js";const _={class:"custom-modal__inner"},y={__name:"CustomModal",props:{showModal:{},showModalModifiers:{}},emits:["update:showModal"],setup(e){const t=n(e,"showModal");return(s,o)=>(u(),d(l(b),{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=a=>t.value=a),class:"custom-modal"},{default:f(()=>[r("div",{class:"custom-modal__close",onClick:o[0]||(o[0]=a=>t.value=!1)},[i(l(p),{path:l(c)},null,8,["path"])]),r("div",_,[m(s.$slots,"default")])]),_:3},8,["modelValue"]))}};var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function w(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var s=function o(){return this instanceof o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};s.prototype=t.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(s,o,a.get?a:{enumerable:!0,get:function(){return e[o]}})}),s}export{y as _,v as a,h as c,w as g};
