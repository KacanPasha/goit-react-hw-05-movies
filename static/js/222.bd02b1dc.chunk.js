"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[222,781],{315:function(n,e,t){t.d(e,{Hg:function(){return u},IQ:function(){return d},Jh:function(){return h},TP:function(){return p},XT:function(){return l}});var r=t(861),a=t(757),o=t.n(a),c=t(340),i="db6e6625e26b450a55d1e6974d660ebb",s="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},781:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,o,c,i,s,u,l,p=t(861),d=t(439),h=t(757),f=t.n(h),x=t(791),v=t(689),g=t(87),m=t(315),b=t(35),j=t(168),Z=t(867),y=Z.ZP.div(r||(r=(0,j.Z)(["\ndisplay: flex;\ntext-align: left;\nmargin:16px;\n"]))),k=Z.ZP.div(a||(a=(0,j.Z)(["\nmargin:16px;\n\n\n"]))),w=Z.ZP.button(o||(o=(0,j.Z)(["\n  background-color: rgba(255, 99, 71, 0.2);\n  color: black;\n  font-size: 20px;\n  text-decoration: none;\n  margin: 16px;\n  border-radius: 10px;\n  border: none;\n  padding: 8px;\n  &:hover,\n  &:focus {\n    background-color: tomato;\n  }\n"]))),_=Z.ZP.div(c||(c=(0,j.Z)(["\ndisplay: block;\ntext-align: left;\nborder-bottom: 1px solid;\nmargin: 16px;\nborder-bottom: 1px solid tomato;\n    box-shadow: 0 2px 4px rgba(255, 99, 71, 0.5);\n\n"]))),P=Z.ZP.h2(i||(i=(0,j.Z)(["\nmargin-left: 16px;"]))),U=(0,Z.ZP)(g.rU)(s||(s=(0,j.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 20px;\n  list-style-type: none;\n  border-bottom: 2px solid tomato;\n \n    \n\n&:hover,\n&:focus {\n  color: tomato;\n  \n}\n"]))),S=Z.ZP.ul(u||(u=(0,j.Z)(["\nlist-style-type: none;\nmargin: 0;\nmargin-top: 8px;\npadding: 16px;\n"]))),A=Z.ZP.li(l||(l=(0,j.Z)(["\nmargin-top: 8px;\n"]))),C=t(184);function E(){var n,e=(0,v.UO)().id,t=(0,x.useState)(null),r=(0,d.Z)(t,2),a=r[0],o=r[1];(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,m.TP)(e);case 3:t=n.sent,o(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var c=(0,v.TH)();return(0,C.jsxs)("div",{children:[(0,C.jsxs)(_,{children:[(0,C.jsx)(g.rU,{to:(null===(n=c.state)||void 0===n?void 0:n.from)||"/",children:(0,C.jsx)(w,{type:"button",children:"\u2190 Go back"})}),a?(0,C.jsx)("div",{children:(0,C.jsxs)(y,{children:[(0,C.jsx)("div",{children:a.poster_path?(0,C.jsx)("img",{width:"300px",height:"450px",src:"https://image.tmdb.org/t/p/w300/".concat(a.poster_path),alt:a.title}):(0,C.jsx)("img",{width:"300px",height:"300px",src:b,alt:"No_Photo"})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)("h1",{children:[a.title," (",a.release_date.substring(0,4),")"]}),(0,C.jsxs)("p",{children:["User Score: ",Math.round(10*a.vote_average),"%"]}),(0,C.jsx)("h2",{children:"Overview"}),(0,C.jsx)("p",{children:a.overview}),(0,C.jsx)("h2",{children:"Genres:"}),(0,C.jsx)("p",{children:a.genres.map((function(n,e){var t=n.name;return(0,C.jsxs)("span",{children:[t,e<a.genres.length-1?", ":";"]},n.id)}))})]})]})}):"Loading..."]}),(0,C.jsxs)(_,{children:[(0,C.jsx)(P,{children:"Additional information"}),(0,C.jsxs)(S,{children:[(0,C.jsx)(A,{children:(0,C.jsx)(U,{to:"/movies/".concat(e,"/cast"),state:{from:c},children:"Cast"})}),(0,C.jsx)(A,{children:(0,C.jsx)(U,{to:"/movies/".concat(e,"/reviews"),state:{from:c},children:"Reviews"})})]})]})]})}},222:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a=t(861),o=t(439),c=t(757),i=t.n(c),s=t(791),u=t(689),l=t(315),p=t(168),d=t(867).ZP.ul(r||(r=(0,p.Z)(["\n  display: block;\n  list-style-type: none;\n  text-align: left;\n\n"]))),h=t(781),f=t(184);function x(){var n=(0,u.UO)().id,e=(0,s.useState)(null),t=(0,o.Z)(e,2),r=t[0],c=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Jh)(n);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,f.jsxs)("div",{children:[(0,f.jsx)(h.default,{}),(0,f.jsx)(d,{children:r&&r.results&&Array.isArray(r.results)&&r.results.length>0?r.results.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("h2",{children:n.author}),(0,f.jsxs)("p",{children:["Character: ",n.content]})]},n.id)})):(0,f.jsx)("li",{children:r&&r.results&&!Array.isArray(r.results)?"Sorry, no data available.":"No trending data available"})})]})}},35:function(n,e,t){n.exports=t.p+"static/media/stub.6ea1a7be90280172e477.jpg"}}]);
//# sourceMappingURL=222.bd02b1dc.chunk.js.map