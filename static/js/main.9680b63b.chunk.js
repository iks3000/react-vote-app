(this["webpackJsonpref-vote-app"]=this["webpackJsonpref-vote-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(2),l=a.n(i),s=(a(9),a(10),a(3)),c=window.Seed=function(){function e(){return Math.floor(50*Math.random()+15)}return{list:[{id:1,title:"Yellow Pail",description:"On-demand sand castle construction expertise.",url:"#",votes:e(),submitterAvatarUrl:"react-vote-app/images/avatars/daniel.jpg",productImageUrl:"react-vote-app/images/products/image-aqua.png"},{id:2,title:"Supermajority: The Fantasy Congress League",description:"Earn points when your favorite politicians pass legislation.",url:"#",votes:e(),submitterAvatarUrl:"react-vote-app/images/avatars/kristy.png",productImageUrl:"react-vote-app/images/products/image-rose.png"},{id:3,title:"Tinfoild: Tailored tinfoil hats",description:"We already have your measurements and shipping address.",url:"#",votes:e(),submitterAvatarUrl:"react-vote-app/images/avatars/veronika.jpg",productImageUrl:"react-vote-app/images/products/image-steel.png"},{id:4,title:"Haught or Naught",description:"High-minded or absent-minded? You decide.",url:"#",votes:e(),submitterAvatarUrl:"react-vote-app/images/avatars/molly.png",productImageUrl:"react-vote-app/images/products/image-yellow.png"}]}}(),o=function(e){return n.a.createElement("div",{className:"item mp-3 mb-3"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:e.productImageUrl,alt:""})),n.a.createElement("div",null,n.a.createElement("div",{className:"vote"},n.a.createElement("button",{className:"btn btn-success btn-sm shadow-none",onClick:function(){return e.handleProductUpVote(e.id)}},n.a.createElement("span",{className:"d-flex justify-content-center"},n.a.createElement("svg",{className:"bi bi-caret-up-fill link-style",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z"})))),n.a.createElement("span",{className:"ml-2"},e.votes)),n.a.createElement("div",{className:"description mt-2 mb-2"},n.a.createElement("h5",null,e.title),n.a.createElement("div",null,e.description)),n.a.createElement("div",{className:"extra"},n.a.createElement("span",{className:"mr-2"},"Submitted by:"),n.a.createElement("img",{className:"avatar",src:e.submitterAvatarUrl,alt:""}))))},m=function(){var e=Object(r.useState)(c.list),t=Object(s.a)(e,2),a=t[0],i=t[1];console.log(c.list[0].productImageUrl);var l=function(e){var t=a.map((function(t){return t.id===e?Object.assign({},t,{votes:t.votes+1}):t}));i(t)},m=a.sort((function(e,t){return t.votes-e.votes})).map((function(e){return n.a.createElement(o,{key:"item-"+e.id,id:e.id,title:e.title,description:e.description,url:e.url,votes:e.votes,submitterAvatarUrl:e.submitterAvatarUrl,productImageUrl:e.productImageUrl,handleProductUpVote:l})}));return n.a.createElement("div",null,n.a.createElement("h2",{className:"text-center mt-3 mb-3"},"Popular Products"),n.a.createElement("hr",null),m)};var u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(m,null)))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(11)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.9680b63b.chunk.js.map