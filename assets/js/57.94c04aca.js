(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{217:function(e,t,n){"use strict";
/**
 * vue-global-events v1.1.2
 * (c) 2019 Damian Dulisz <damian.dulisz@gmail.com>, Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */
var r;n.r(t);var i=/^[~!&]*/,s=/\W+/,o={"!":"capture","~":"once","&":"passive"};function a(e){var t=e.match(i)[0];return(null==r?r=/msie|trident/.test(window.navigator.userAgent.toLowerCase()):r)?t.indexOf("!")>-1:t.split("").reduce((function(e,t){return e[o[t]]=!0,e}),{})}var u={name:"GlobalEvents",props:{target:{type:String,default:"document"},filter:{type:Function,default:function(e){return!0}}},render:function(e){return e()},mounted:function(){var e=this;this._listeners=Object.create(null),Object.keys(this.$listeners).forEach((function(t){var n=e.$listeners[t],r=function(r){e.filter(r,n,t)&&n(r)};window[e.target].addEventListener(t.replace(s,""),r,a(t)),e._listeners[t]=r}))},beforeDestroy:function(){for(var e in this._listeners)window[this.target].removeEventListener(e.replace(s,""),this._listeners[e],a(e))}};t.default=u}}]);