(function(e){function t(t){for(var n,c,l=t[0],s=t[1],i=t[2],d=0,p=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,l=1;l<o.length;l++){var s=o[l];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"25f9":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=o("75a3"),a=o.n(r),c={class:"container mx-auto flex flex-col justify-start items-center px-2"},l=Object(n["createElementVNode"])("img",{src:a.a,class:"mb-12"},null,-1);function s(e,t,o,r,a,s){var i=Object(n["resolveComponent"])("GetPhotos"),u=Object(n["resolveComponent"])("new-gallery");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("div",c,[l,Object(n["createVNode"])(i,{onStartGallery:s.startShow},null,8,["onStartGallery"])]),a.showGallery?(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:0,photoList:a.dataForGallery.photos,amount:a.amount,startIndex:a.idx},null,8,["photoList","amount","startIndex"])):Object(n["createCommentVNode"])("",!0)],64)}var i={class:"container mx-auto"},u=["data-src"],d=["src"],p={class:"text-xl"};function f(e,t,o,r,a,c){var l=Object(n["resolveComponent"])("lightgallery");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createVNode"])(l,{settings:{speed:500,plugins:e.plugins},onInit:c.onInit,onBeforeSlide:c.onBeforeSlide,class:"min-w-screen grid grid-cols-1 md:grid-cols-4 gap-20"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.arr,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{"data-lg-size":"1406-1390",class:"gallery-item flex flex-col justify-start items-center border-2 border-gray-200 bg-white self-straight rounded cursor-pointer","data-src":e.img_src,"data-sub-html":"<h4></h4> <p> </p>"},[Object(n["createElementVNode"])("img",{style:{"object-fit":"cover"},class:"img-responsive",src:e.img_src},null,8,d),Object(n["createElementVNode"])("p",p,Object(n["toDisplayString"])(e.id),1),Object(n["createElementVNode"])("p",null,Object(n["toDisplayString"])(e.earth_date),1)],8,u)})),256))]})),_:1},8,["settings","onInit","onBeforeSlide"])])}var m=o("97a5"),h=o.n(m),b=o("c79a"),g=o("18c1"),y=o("c3c6"),j={props:["photoList","startIndex","amount"],components:{Lightgallery:h.a},beforeMount:function(){for(var e=0;e<this.amount;e++)this.arr.push(this.photoList[e])},data:function(){return{plugins:[b["a"],g["a"],y["a"]],arr:[]}},methods:{onInit:function(){console.log("lightGallery has been initialized")},onBeforeSlide:function(){console.log("calling before slide")}}},v=(o("ce33"),o("6b0d")),O=o.n(v);const x=O()(j,[["render",f]]);var w=x,S={class:"w-full lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-end mb-6"},D={class:"flex flex-col justify-start items-center w-full"},E=Object(n["createElementVNode"])("p",{class:"mb-2 text-lg"},"Number of images:",-1),N={class:"flex flex-col justify-start items-center w-full"},V=Object(n["createElementVNode"])("p",{class:"mb-2 text-lg"},"Select date:",-1),k={class:"flex justify-center"};function G(e,t,o,r,a,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",S,[Object(n["createElementVNode"])("div",D,[E,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"number",min:"1",max:"50","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.amount=e}),class:"border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[n["vModelText"],a.amount]])]),Object(n["createElementVNode"])("div",N,[V,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"date","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.date=e}),class:"border border-gray-200 text-lg rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none"},null,512),[[n["vModelText"],a.date]])]),Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(){return c.getData&&c.getData.apply(c,arguments)}),class:"bg-blue-600 text-white text-lg rounded-lg py-2 px-8 self-center h-12"}," Submit ")])])}o("fb6a");var B=o("bc3a"),_=o.n(B),L={emits:["startGallery"],data:function(){return{today:new Date,dataFromServer:[],amount:1,amountOfPhotos:0,page:1,date:(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2),query:null}},beforeMount:function(){this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date)},watch:{amount:function(){this.amount>50&&(this.amount=50)}},computed:{getData:function(){var e=this;this.amountOfPhotos=this.amount,this.amount<=25?this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date,"&page=1"):this.query="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=".concat(this.date),_.a.get(this.query).then((function(t){e.dataFromServer=t.data,e.$emit("startGallery",e.dataFromServer,5,e.amount)}))}},methods:{openGallery:function(e){this.$emit("startGallery",this.dataFromServer,e,this.amount)}}};o("aa58");const M=O()(L,[["render",G]]);var q=M,P={data:function(){return{showGallery:!1,dataForGallery:[],idx:0,amount:0,showBigGallery:!1}},methods:{startShow:function(e,t,o){this.showGallery=!0,this.dataForGallery=e,this.idx=t,this.amount=o},closeShow:function(){this.showGallery=!1}},name:"App",components:{GetPhotos:q,NewGallery:w}};o("6c1f");const F=O()(P,[["render",s]]);var T=F;Object(n["createApp"])(T).mount("#app")},"6c1f":function(e,t,o){"use strict";o("87bc")},"75a3":function(e,t,o){e.exports=o.p+"img/nasa.2e3a9cbf.png"},"87bc":function(e,t,o){},"95be":function(e,t,o){},aa58:function(e,t,o){"use strict";o("95be")},ce33:function(e,t,o){"use strict";o("25f9")}});
//# sourceMappingURL=app.0192968d.js.map