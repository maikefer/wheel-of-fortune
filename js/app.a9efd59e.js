(function(e){function t(t){for(var i,o,s=t[0],l=t[1],d=t[2],f=0,u=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(u.length)u.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"29b8":function(e,t,n){"use strict";var i=n("8021"),r=n.n(i);r.a},"568a":function(e,t,n){"use strict";var i=n("c824"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"addPrize",(function(){return ae})),n.d(i,"addSpinResult",(function(){return oe})),n.d(i,"hideOptions",(function(){return se})),n.d(i,"loadPreset",(function(){return le})),n.d(i,"removePreset",(function(){return de})),n.d(i,"removePrize",(function(){return ce})),n.d(i,"saveAndReset",(function(){return fe})),n.d(i,"saveNewPreset",(function(){return ue})),n.d(i,"savePreset",(function(){return he})),n.d(i,"showOptions",(function(){return pe})),n.d(i,"updateAvailable",(function(){return me})),n.d(i,"updateWheelSize",(function(){return ve}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade-in",mode:"out-in",appear:""}},[e.showOptions?n("OptionsPanel"):n("WheelPanel")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-panel wheel-panel"},[n("div",{staticClass:"show-records-container"},[n("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.displayRecords(t)}}},[e._v("Ergebnisse")])]),n("transition",{attrs:{name:"fade"}},[e.showRecords?n("RecordsPanel",{on:{close:e.hideRecords}}):e._e()],1),n("div",{staticClass:"wheel-panel-content"},[n("div",{staticClass:"wheel-header-area"},[n("div",{staticClass:"wheel-header",style:{width:e.headerWidth+"px"}},[n("div",{staticClass:"wheel-header-title"},[e._v(e._s(e.name))])])]),n("Wheel",{ref:"wheel",on:{result:e.spinCompleted}}),n("div",{staticClass:"wheel-footer-area"},[n("div",{staticClass:"wheel-footer"},[n("div",{staticClass:"wheel-result",domProps:{innerHTML:e._s(e.resultText)}}),n("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.startSpin(t)}}},[e._v(e._s(e.spinText))])])])],1),n("img",{staticClass:"background-image",attrs:{src:e.background?e.background:null}})],1)},l=[],d=(n("b0c0"),n("ac1f"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"records-panel"},[n("div",{staticClass:"records-panel-header"},[e._v("Ergebnisse")]),n("div",{ref:"content",staticClass:"records-panel-content"},[n("table",{staticClass:"records-panel-list"},[0===e.records.length?n("tr",[e._v(" (Du hast noch nicht am Glücksrad gedreht) ")]):e._l(e.records,(function(t,i){return n("tr",{key:i,staticClass:"records-panel-item"},[n("td",{attrs:{width:"30"}},[e._v(e._s(i+1))]),n("td",{attrs:{width:"190"}},[e._v(e._s(t))])])}))],2)]),n("div",{staticClass:"hide-records-container"},[n("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.close(t)}}},[e._v("Schließen")])])])}),c=[],f={name:"RecordsPanel",computed:{records:function(){return this.$store.state.records}},methods:{close:function(){this.$emit("close")}},updated:function(){var e=this.$refs.content;e.scrollTop=e.scrollHeight}},u=f,h=(n("29b8"),n("2877")),p=Object(h["a"])(u,d,c,!1,null,null,null),m=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wheels-container"},[n("div",{staticClass:"wheels"},[n("div",{staticClass:"wheel-container"},[n("canvas",{ref:"mainCanvas",staticClass:"wheel-main"})]),n("div",{staticClass:"wheel-container"},[n("canvas",{ref:"subCanvas",staticClass:"wheel-sub"})])])])},g=[],b=(n("cb29"),n("0d03"),n("4160"),n("e25e"),n("159b"),{name:"Glücksrad der Adjektive",winningText:"Ergebnis: <b>%s</b>",background:"",removeWinning:!1,prizes:[{name:"Finde 4 Adjektive für Wasser.",freq:1,bg:"#D4EFFE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 3 Adjektive für deine Lehrerin.",freq:1,bg:"#79AECE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 4 Adjektive für deine Eltern.",freq:1,bg:"#659FC3",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 2 Adjektive für den Winter.",freq:1,bg:"#548bac",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 6 Adjektive für ein Buch.",freq:1,bg:"#D4EFFE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 5 Adjektive für die Schule.",freq:1,bg:"#79AECE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 3 Adjektive für einen Löwen.",freq:1,bg:"#659FC3",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 3 Adjektive für eine Schnecke.",freq:1,bg:"#548bac",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 3 Adjektive für eine Blume.",freq:1,bg:"#D4EFFE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 5 Adjektive für das Wetter.",freq:1,bg:"#79AECE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 6 Adjektive für ein Auto.",freq:1,bg:"#659FC3",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 4 Adjektive für den Sommer.",freq:1,bg:"#548bac",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 4 Adjektive für einen Baum.",freq:1,bg:"#D4EFFE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 6 Adjektive für ein Auto.",freq:1,bg:"#79AECE",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 3 Adjektive und ihr Gegenteil.",freq:1,bg:"#659FC3",text:"#222",hide:!1,fontMod:1.5},{name:"Finde 4 Adjektive und steigere sie.",freq:1,bg:"#548bac",text:"#222",hide:!1,fontMod:1.5}]}),w={name:"Wheel of Verbes",winningText:"Congratulations! You win: <b>%s</b>!",background:"static/smrt.jpg",removeWinning:!1,prizes:[{name:"No Service",freq:4,bg:"#FFCC80",text:"#222",hide:!1,fontMod:1},{name:"Tunnel Ponding",freq:4,bg:"#F48FB1",text:"#222",hide:!1,fontMod:1},{name:"Delay 60 mins",freq:4,bg:"#81D4FA",text:"#222",hide:!1,fontMod:1},{name:"Lightning Fault",freq:4,bg:"#B39DDB",text:"#222",hide:!1,fontMod:1},{name:"Delay 10 mins",freq:4,bg:"#C5E1A5",text:"#222",hide:!1,fontMod:1},{name:"Track Fault",freq:4,bg:"#F48FB1",text:"#222",hide:!1,fontMod:1},{name:"Delay 40 mins",freq:4,bg:"#81D4FA",text:"#222",hide:!1,fontMod:1},{name:"Full-day Closure",freq:4,bg:"#FFCC80",text:"#222",hide:!1,fontMod:1},{name:"Train Fault",freq:4,bg:"white",text:"#222",hide:!1,fontMod:1},{name:"Delay 20 mins",freq:4,bg:"#81D4FA",text:"#222",hide:!1,fontMod:1},{name:"Signal Fault",freq:4,bg:"#B39DDB",text:"#222",hide:!1,fontMod:1},{name:"Delay 10 mins",freq:4,bg:"#C5E1A5",text:"#222",hide:!1,fontMod:1},{name:"No Delay",freq:1,bg:"#111",text:"white",hide:!1,fontMod:1.4},{name:"Collision",freq:2,bg:"#ef9a9a",text:"#222",hide:!1,fontMod:1},{name:"No Delay",freq:1,bg:"#111",text:"white",hide:!1,fontMod:1.4}]},x={name:"Wheel of Hello",winningText:"Your turn to answer the question, <b>%s</b>!",background:"",removeWinning:!0,prizes:[{name:"James"},{name:"John"},{name:"Robert"},{name:"Michael"},{name:"William"},{name:"David"},{name:"Richard"},{name:"Charles"},{name:"Mary"},{name:"Patricia"},{name:"Linda"},{name:"Barbara"},{name:"Elizabeth"},{name:"Jennifer"},{name:"Maria"},{name:"Susan"}]},C=[b,w,x],M=["#ef9a9a","#FFF59D","#80CBC4","#F48FB1","#FFCC80","#81D4FA","#B39DDB","#C5E1A5"],F=M.length,P=4,y="#333",S=function(e){var t=[];return e.forEach((function(e){e.hide||t.push(e)})),t},k=function(e){return M[e%F]},A=function(e,t){var n=parseInt(e);if(n>0&&n<=C.length)return C[n-1];var i=t[n-1-C.length];return i?i.data:null},q=function(e){var t=0;return e.forEach((function(e){t+=e.freq||P})),t},D=(n("4d63"),n("25f0"),function(e){return JSON.parse(JSON.stringify(e))}),E=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},j=function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=n.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null};function O(e,t){for(var n=q(t),i=0,r=-1,a=0;a<t.length;++a){var o=t[a].freq||P;i+=o;var s=e+2*Math.PI*(i-o)/n,l=e+2*Math.PI*i/n;_(1.5*Math.PI,s,l)&&(r=a)}return r}function _(e,t,n){return t%=2*Math.PI,n%=2*Math.PI,t<=n?t<e&&n>=e:t<e||n>=e}function I(e,t,n){var i=Math.min(e.width,e.height)/2.05,r=e.width/2,a=e.height/2,o=e.getContext("2d");o.clearRect(0,0,e.width,e.height);var s=o.createRadialGradient(r,a,0,r,a,i);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0.1)");for(var l=q(n),d=0,c=0;c<n.length;++c){var f=n[c],u=f.freq||P;d+=u;var h=t+2*Math.PI*(d-u)/l,p=t+2*Math.PI*d/l,m=t+2*Math.PI*(d-u/2)/l,v=_(1.5*Math.PI,h,p);o.beginPath(),o.moveTo(r,a),o.arc(r,a,i,h,p,!1),o.fillStyle=f.bg||k(c),o.fill(),o.fillStyle=s,o.fill(),o.save();var g=16;e.width<e.height&&(g=20),o.fillStyle=f.text||y,v&&(o.shadowColor=f.text||y,o.shadowBlur=i/15),o.font=g+"px 'Muli', sans-serif",o.textAlign="right",o.textBaseline="middle",o.translate(r,a),o.rotate(m),o.fillText(f.name,.91*i,0),o.restore()}}function R(e){var t=Math.min(e.width,e.height)/2.05,n=e.width/2,i=e.height/2,r=e.getContext("2d");r.save(),r.beginPath(),r.arc(n,i,1.005*t,0,2*Math.PI,!0),r.arc(n,i,.985*t,0,2*Math.PI,!1),r.fillStyle="#8d8d8d",r.fill(),r.fillStyle="#8d8d8d",r.beginPath(),r.arc(n,i,t/30,0,2*Math.PI,!1),r.fill(),r.translate(n,i),r.rotate(Math.PI/2),r.beginPath(),r.moveTo(1.01*-t,.05*-t),r.lineTo(.935*-t,0),r.lineTo(1.01*-t,.05*t),r.fillStyle="#eb5156",r.fill(),r.restore()}var z={name:"Wheel",data:function(){return{angle:0,resizeIntervalId:null}},computed:{prizes:function(){return this.$store.state.available},removeWinning:function(){return this.$store.state.data.removeWinning||!1}},methods:{resize:function(){var e=this,t=this.$refs.mainCanvas,n=this.$refs.subCanvas,i=window.devicePixelRatio||1,r=t.offsetWidth*i,a=t.offsetHeight*i;t.width===r&&t.height===a||(t.width=r,t.height=a,n.width=r,n.height=a,this.$store.commit("updateWheelSize",Math.min(t.width,t.height)),window.requestAnimationFrame((function(){I(t,e.angle,e.prizes),R(n)})))},spinCompleted:function(){var e=O(this.angle,this.prizes);this.$store.commit("addSpinResult",e),this.$emit("result",e)},startSpin:function(){var e=this.$refs.mainCanvas,t=this.prizes,n=this,i=E(450,530),r=.12+.001*E(0,80),a=0,o=+new Date;function s(){for(var l=+new Date,d=Math.min(i,(l-o)/10);a<=d;++a)n.angle+=r*(i-a)/i;I(e,n.angle,t),a<i?window.requestAnimationFrame(s):n.spinCompleted()}window.requestAnimationFrame(s)}},mounted:function(){this.resizeIntervalId=setInterval(this.resize,10)},beforeDestroy:function(){clearInterval(this.resizeIntervalId)}},T=z,W=(n("568a"),Object(h["a"])(T,v,g,!1,null,null,null)),$=W.exports,B=n("2f62"),J={name:"WheelPanel",components:{RecordsPanel:m,Wheel:$},data:function(){return{showRecords:!1,spinning:!1,spinText:"Drehen!",resultText:"Bereit? Drehe am Glücksrad!"}},computed:Object(B["b"])({spins:function(e){return e.spins},name:function(e){return e.data.name||"Glücksrad der Adjektive"},winningText:function(e){return e.data.winningText||"Ergebnis: <b>%s</b>"},background:function(e){return e.data.background||""},prizes:function(e){return e.available},headerWidth:function(e){return e.size}}),methods:{displayRecords:function(){this.showRecords=!0},hideRecords:function(){this.showRecords=!1},spinCompleted:function(e){var t=this.prizes[e];this.spinning=!1,this.spinText="Drehe nochmal!",this.resultText=this.winningText.replace("%s",t.name)},startSpin:function(){if(!this.spinning){if(this.$store.commit("updateAvailable"),0===this.prizes.length)return;this.spinning=!0,this.spinText="Das Rad dreht...",this.resultText="&#8203;",this.$refs.wheel.startSpin()}}}},N=J,G=(n("716a"),Object(h["a"])(N,s,l,!1,null,null,null)),L=G.exports,H={name:"App",components:{WheelPanel:L}},Y=H,U=(n("034f"),Object(h["a"])(Y,a,o,!1,null,null,null)),V=U.exports,K=n("94d5"),Q=n("63e0");n("a434");function X(e){try{var t=window[e],n="_storage_test_";return t.setItem(n,n),t.removeItem(n),!0}catch(i){return!1}}function Z(e,t,n){try{e.setItem(t,n)}catch(i){console.error("Error storing item: "+i)}}var ee=X("localStorage")?window.localStorage:window.sessionStorage,te=function(){var e=ee.getItem("wofOptions");if(e)try{e=JSON.parse(e)}catch(t){e=null,console.error("Error loading options: "+t)}return e},ne=function(){var e=[],t=ee.getItem("wofPresets");if(t)try{t=JSON.parse(t);for(var n=0;n<t.length;++n){var i=ee.getItem("wofPresetData"+n);i=JSON.parse(i),e.push({name:t[n],data:i})}}catch(r){console.error("Error loading presets: "+r)}return e},ie=function(e){Z(ee,"wofOptions",JSON.stringify(e))},re=function(e){for(var t=[],n=0;n<e.length;++n){var i=e[n];t.push(i.name),Z(ee,"wofPresetData"+n,JSON.stringify(i.data))}Z(ee,"wofPresets",JSON.stringify(t))},ae=function(e,t){e.options.prizes.push(t)},oe=function(e,t){e.totalSpins++,e.spins++,e.lastResult=t,e.records.push(e.available[t].name)},se=function(e){e.showOptions=!1},le=function(e,t){t&&(e.options=D(t))},de=function(e,t){e.presets.splice(t,1),re(e.presets)},ce=function(e,t){e.options.prizes.splice(t,1)},fe=function(e){e.spins=0,e.lastResult=-1,e.records=[],e.data=D(e.options),e.available=D(S(e.data.prizes)),ie(e.options)},ue=function(e,t){e.presets.push({name:t,data:D(e.data)}),re(e.presets)},he=function(e,t){e.presets[t].data=D(e.data),re(e.presets)},pe=function(e){e.showOptions=!0},me=function(e){-1!==e.lastResult&&e.data.removeWinning&&(e.available.splice(e.lastResult,1),e.lastResult=-1)},ve=function(e,t){e.size=t};r["a"].use(B["a"]);var ge=te(),be=ne(),we=A(j("preset"),be),xe=D(we||(ge||b));ge||(ge=D(xe));var Ce={totalSpins:0,spins:0,lastResult:-1,showOptions:!1,size:0,options:ge,data:xe,available:D(S(xe.prizes)),records:[],presets:be},Me=new B["a"].Store({state:Ce,getters:K,actions:Q,mutations:i});var Fe=Me;r["a"].config.productionTip=!1,r["a"].directive("focus",{inserted:function(e){e.focus()}}),new r["a"]({el:"#app",store:Fe,render:function(e){return e(V)}})},"63e0":function(e,t){},"716a":function(e,t,n){"use strict";var i=n("95b0"),r=n.n(i);r.a},8021:function(e,t,n){},"85ec":function(e,t,n){},"94d5":function(e,t){},"95b0":function(e,t,n){},c824:function(e,t,n){}});
//# sourceMappingURL=app.a9efd59e.js.map