(this["webpackJsonpreact-neumorphism-music"]=this["webpackJsonpreact-neumorphism-music"]||[]).push([[7],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var c=t(36),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u6682\u672a\u5f00\u53d1";return{type:c.a,payload:n,show:e}}},102:function(e,n,t){e.exports={"songs-wrapper":"SongList_songs-wrapper__3hZnd","wrapper-content":"SongList_wrapper-content__3Eu5K",card:"SongList_card__14Ovo",content:"SongList_content__1QPqV",img:"SongList_img__1dn9V",info:"SongList_info__2b-3g","song-info":"SongList_song-info__2uN1B","song-name":"SongList_song-name__16kcA","play-button":"SongList_play-button__3Mk03"}},103:function(e,n,t){"use strict";var c=t(89),a=t(0),i=t(102),r=t.n(i),o=t(35),s=t(32),l=t(93),u=t.n(l),d=t(95),b=t(14),j=Object(a.forwardRef)((function(e,n){var i=e.recommendSongs,l=e.curId,j=Object(s.b)(),g=function(e){var n;j(o.a.changeSongListAction((n=i,JSON.parse(JSON.stringify(n))))),j(o.a.changeCurrentIndexAction(e))},p=Object(a.useRef)(null);return Object(a.useImperativeHandle)(n,(function(){return{play:function(e){g(e)},getListDom:function(){return p.current}}})),Object(b.jsx)("div",{className:r.a["songs-wrapper"],ref:p,children:Object(b.jsx)("div",{className:r.a["wrapper-content"],children:i.map((function(e,n){return Object(b.jsx)(c.c,{className:r.a.card,children:Object(b.jsxs)(c.d,{className:r.a.content,children:[Object(b.jsx)("div",{className:r.a.img,children:Object(b.jsx)(u.a,{debounce:500,placeholder:Object(b.jsx)("img",{src:t(90).default,alt:"music",width:"50",height:"100%",className:r.a.img}),children:Object(b.jsx)("img",{src:e.album.picUrl,alt:"",className:r.a.img,width:"100%",height:"100%"})})}),Object(b.jsxs)("div",{className:r.a.info,children:[Object(b.jsx)("p",{className:r.a["song-name"],children:e.name}),Object(b.jsx)("p",{className:r.a["song-info"],children:"".concat(Object(d.a)(e.singers)," - ").concat(e.album.name)})]}),Object(b.jsx)(c.b,{className:r.a["play-button"],onClick:function(){g(n)},children:Object(b.jsx)(c.e,{icon:e.id===l?"podcast":"play"})})]})},e.id)}))})})}));n.a=Object(a.memo)(j)},131:function(e,n,t){e.exports={"album-wrap":"Singer_album-wrap__2WZOG",header:"Singer_header__1fD9J","singer-name":"Singer_singer-name__OLqi4","detail-wrap":"Singer_detail-wrap__1N38l","detail-button":"Singer_detail-button__38wuR","img-card":"Singer_img-card__1-1oi",content:"Singer_content__2RYex","songs-wrap":"Singer_songs-wrap__ftYA1"}},134:function(e,n,t){"use strict";t.r(n);var c=t(92),a=t(89),i=t(0),r=t(93),o=t(32),s=t(2),l=t(137),u=t(91),d=t(103),b=t(96),j=t(131),g=t.n(j),p=t(38),m=t(101),f=t(33),O=t(14),_=function(){var e=Object(s.h)(),n=Object(s.g)(),t=Object(o.b)(),j=Object(i.useRef)(null),_=Object(o.c)((function(e){return{loading:e.singer.loading,singerDetail:e.singer.singerDetail,curIdx:e.player.currentIndex,songList:e.player.songList,status:e.player.playStatus}})),h=_.loading,x=_.singerDetail,v=_.curIdx,w=_.songList,S=_.status,N=Object(i.useState)(!0),L=Object(c.a)(N,2),y=L[0],k=L[1],D={flex:1,overflow:"hidden",marginBottom:v>-1?"60px":0};return Object(i.useEffect)((function(){var n=e.id;t(Object(p.a)(Number(n)))}),[]),Object(O.jsx)(l.a,{timeout:300,in:y,unmountOnExit:!0,classNames:"fly",onExited:n.goBack,appear:!0,children:Object(O.jsxs)("div",{className:g.a["album-wrap"],children:[Object(O.jsxs)("div",{className:g.a.header,onClick:function(){k(!1)},children:[Object(O.jsx)(a.e,{icon:"chevron-left"}),Object(O.jsx)("p",{className:g.a["singer-name"],children:null===x||void 0===x?void 0:x.name})]}),!h&&Object(O.jsx)("div",{style:D,children:x&&Object(O.jsx)(u.a,{onScroll:r.forceCheck,children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:g.a["detail-wrap"],children:[Object(O.jsx)(a.b,{className:g.a["detail-button"],onClick:function(){var e;S?t(Object(f.changePlayStatusAction)(!1)):null===(e=j.current)||void 0===e||e.play(0)},children:Object(O.jsx)(a.e,{icon:S?"pause":"play"})}),Object(O.jsx)(a.c,{className:g.a["img-card"],children:Object(O.jsx)(a.d,{className:g.a.content,style:{backgroundImage:"url(".concat(x.picUrl,")")}})}),Object(O.jsx)(a.b,{className:g.a["detail-button"],onClick:function(){t(Object(m.a)(!0,"\u529f\u80fd\u6682\u672a\u5f00\u53d1\u54df"))},children:Object(O.jsx)(a.e,{icon:"ellipsis-h"})})]}),Object(O.jsx)("div",{className:g.a["songs-wrap"],children:Object(O.jsx)(d.a,{recommendSongs:x.hotSongs,ref:j,curId:v>-1?w[v].id:-1})})]})})}),h&&Object(O.jsx)(b.a,{})]})})};n.default=Object(i.memo)(_)},90:function(e,n,t){"use strict";t.r(n),n.default=t.p+"static/media/music.6275a6ce.png"},91:function(e,n,t){"use strict";var c=t(16),a=t(92),i=t(99),r=t(98),o=t(0),s=t(94),l=t.n(s),u=t(14),d=Object(o.forwardRef)((function(e,n){var t=e.direction,s=void 0===t?"vertical":t,d=e.click,b=void 0===d||d,j=e.children,g=e.bounceTop,p=void 0===g||g,m=e.bounceBottom,f=void 0===m||m,O=e.bounceLeft,_=void 0===O||O,h=e.bounceRight,x=void 0===h||h,v=(e.pullDownLoading,e.pullUpLoading,e.onScroll),w=(e.onPullDown,e.onPullUp,Object(i.a)(e,["direction","click","children","bounceTop","bounceBottom","bounceLeft","bounceRight","pullDownLoading","pullUpLoading","onScroll","onPullDown","onPullUp"])),S=Object(o.useState)(null),N=Object(a.a)(S,2),L=N[0],y=N[1],k=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e=new r.a(k.current,Object(c.a)({click:b,probeType:3,scrollX:"horizontal"===s,scrollY:"vertical"===s,tap:"tap",bounce:{top:p,bottom:f,left:_,right:x}},w));return y(e),function(){y(null)}}),[]),Object(o.useImperativeHandle)(n,(function(){return{refresh:function(){L&&(L.refresh(),L.scrollTo(0,0))},getBScroll:function(){if(L)return L}}})),Object(o.useEffect)((function(){if(v&&L)return L.on("scroll",v),function(){L.off("scroll")}}),[L,v]),Object(o.useEffect)((function(){L&&L.refresh()})),Object(u.jsx)("div",{className:l.a["scroll-wrapper"],ref:k,children:j})}));n.a=Object(o.memo)(d)},94:function(e,n,t){e.exports={"scroll-wrapper":"Scroll_scroll-wrapper__3QrgQ"}},95:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a}));var c=function(e){return e.map((function(e){return e.name})).join(" / ")},a=function(e){return"https://music.163.com/song/media/outer/url?id=".concat(e,".mp3")}},96:function(e,n,t){"use strict";var c=t(89),a=t(97),i=t.n(a),r=t(0),o=t(14),s=function(){return Object(o.jsx)("div",{className:i.a["loading-wrap"],children:Object(o.jsx)(c.e,{icon:"spinner",className:i.a.loading})})};n.a=Object(r.memo)(s)},97:function(e,n,t){e.exports={"loading-wrap":"Loading_loading-wrap__2zic1",loading:"Loading_loading__38WPi",myScale:"Loading_myScale__2HXha"}}}]);
//# sourceMappingURL=7.9b784062.chunk.js.map