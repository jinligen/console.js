/*!
 * @preserve https://github.com/wusfen/console.js
 *
 * 通过以下方式开启 Console控制台
 * url#12  url##12  url#/#12  url?f12  url?k=v&f12
 * hash路由勿用第一种
 */
!function(){var a=function(){},c=function(o,e){for(var n in e)o[n]=e[n];return o},d=function(o){return Object.prototype.toString.call(o).slice(8,-1).toLowerCase()},n=function(o){var e=n.el=n.el||document.createElement("div");return e.innerHTML=o,e.children[0]},f=function(o,e){for(var n=0;n<o.children.length;n++){var r=o.children[n];if(e==r.className||e==r.tagName.toLowerCase())return r;var i=f(r,e);if(i)return i}},t=function(o,e){o.className+=" "+e},r=function(o,e){o.className=o.className.replace(RegExp(" *"+e,"ig"),"")},p=function(o,e){var n;n=e,o.className.match(n)?r(o,e):t(o,e)},s=n('<div console> <style type="text/css"> .console {z-index: 999999999; position: fixed; left: 0; right: 0; bottom: -1px; font-size: 12px; font-family: Menlo, Monaco, Consolas, "Courier New", monospace; line-height: 1.5; background: rgba(255, 255, 255, .98); box-shadow: rgba(0, 0, 0, 0.2) 0px 0 15px 0; transition: .5s; max-height: 0; max-height: 500px; display: none; } .console * {font: inherit; box-sizing: border-box; } .console.show {display: block; } .console.closed {max-height: 0; } .console.closed .f12 {opacity: .8; } .console .f12 {position: absolute; bottom: 100%; right: 0; background: rgba(255, 255, 255, .98); border: solid 1px #eee; border-bottom: 0; border-radius: 5px 5px 0 0; padding: 5px; box-shadow: rgba(0, 0, 0, 0.1) 4px -4px 10px -4px; color: #555; letter-spacing: -1px; cursor: pointer; } .console ul {list-style: none; margin: 0; padding: 0; padding-bottom: 3em; margin-bottom: -3em; max-height: 350px; overflow: auto; -webkit-overflow-scrolling: touch; } .console ul li {padding: .5em; border-bottom: solid 1px #f7f7f7; overflow: auto; } .console ul li>.obj {float: left; max-width: 100%; padding: 0 .5em; } .console .log {color: #555; } .console .info {background: #f3faff; color: #0095ff; } .console .warn {background: #fffaf3; color: #FF6F00; } .console .error {background: #fff7f7; color: red; } .console .cmd {position: relative; background: #fff; color: #0af; } .console .cmd .key:before {content: "$ "; position: absolute; left: 0; color: #ddd; } .console .obj {cursor: default; white-space: nowrap; } .console .key {color: #a71d5d; } .console .value {white-space: pre; } .console .children {padding-left: 2em; border-left: dotted 1px #ddd; display: none; } .console .children.open {display: block; } .console .input {line-height: 1.25; display: block; width: 100%; border: none; outline: none; height: 3em; padding: .25em 1em; resize: none; position: relative; background: rgba(255, 255, 255, .8); } </style> <div class="console"> <span class="f12">F12</span> <ul> <li> <div class="obj"> <span class="key"></span> <span class="value"></span> <div class="children"></div> </div> </li> </ul> <textarea class="input" placeholder="$"></textarea> </div> </div>'),e=f(s,"console"),o=f(e,"f12"),l=f(e,"ul"),u=f(e,"li"),h=f(e,"obj"),i=(f(e,"children"),f(e,"input"));l.innerHTML="",o.onclick=function(){p(e,"closed")};var g=function(o,e,n){l.scrollTop+l.clientHeight>l.scrollHeight-20&&setTimeout(function(){l.scrollTop+=999},41);var r=u.cloneNode(!0);t(r,o),r.innerHTML="",l.appendChild(r);for(var i=0;i<e.length;i++)m("",e[i],r,n);200<l.children.length&&l.removeChild(l.children[0])},m=function(o,e,n,r){var i=h.cloneNode(!0),t=f(i,"key"),l=f(i,"value"),a=f(i,"children");if(n.appendChild(i),!r&&e&&e.nodeType){if(1==e.nodeType){var c=e.cloneNode().outerHTML.split("></"),s=c[0]+(c[1]?">":"");c[1];t.innerText=s,l.innerText=""}else 3==e.nodeType?e.nodeValue.match(/\S/)&&(l.innerText=e.nodeValue.replace(/</g,"&lt;").replace(/>/g,"&gt;")):9==e.nodeType&&(t.innerText=o,l.innerText=e.nodeName);e.childNodes;e=function(o){for(var e=[],n=o.length;n--;)e[n]=o[n];return e}(e.childNodes)}else t.innerText=o,(!e||e.toString||e.valueOf)&&(l.innerText=e+""),"array"==d(e)&&(l.innerText=e.length+"["+e+"]");e&&"object"==typeof e&&(t.onclick=l.onclick=function(){p(a,"open"),l._printed||(l._printed=!0,v(e,a,r))})},v=function(o,e,n){var r="array"==d(o);for(var i in o)if(m(i,o[i],e,n),r&&500<i)return void m("...","",e,n)};function b(){if(!b.bool){b.bool=!0;var o={log:a,info:a,warn:a,error:a,dir:a};window.console=window.console||o;var e=c({},window.console);for(var n in o)!function(o){console[o]=function(){e[o].apply(console,arguments),g(o,arguments,"dir"==o)}}(n);addEventListener("error",function(o){g("error",l([o]))},!0),setTimeout(function(){document.body.appendChild(s)},1);for(var r=console._logs||[],i=0;i<r.length;i++){var t=r[i];g(t.type,"error"==t.type?l(t.arr):t.arr)}delete console._logs}function l(o){if(1==o.length){var e=o[0],n=e.target,r=n.src||n.href;if(!r)return e.toString=function(){return e.message},[e,e.filename,e.lineno+":"+e.colno];r=decodeURIComponent(r),e.toString=function(){return r}}return o}}i.onkeydown=function(o){var e=i.value;if(13!=o.keyCode||!e.match(/[{(,;]$/)){if(13==o.keyCode&&""===e)return l.innerHTML="",!1;if(13==o.keyCode){g("cmd",[e]),setTimeout(function(){i.value="",l.scrollTop+=9999},41),e=e.match(/^\s*{/)?"("+e+")":e;var n=window.eval(e);return console.log(n),!1}}},navigator.userAgent.match(/mobile/i)&&b(),location.href.match(/[?&#]f12/)&&(t(e,"show"),b()),addEventListener("hashchange",function(o){location.hash.match("#f12")?(b(),t(e,"show")):r(e,"show")})}();