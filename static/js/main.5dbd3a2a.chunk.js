(this["webpackJsonpreact-neumorphism-music"]=this["webpackJsonpreact-neumorphism-music"]||[]).push([[2],[,,,,,function(n,t,e){"use strict";e.d(t,"c",(function(){return r})),e.d(t,"b",(function(){return a})),e.d(t,"g",(function(){return c})),e.d(t,"e",(function(){return u})),e.d(t,"f",(function(){return o})),e.d(t,"a",(function(){return i})),e.d(t,"d",(function(){return s}));var r="SET_CURRENT_SONG",a="SET_CURRENT_INDEX",c="SET_SONG_LIST",u="SET_PLAY_STATUS",o="SET_SHOW_SONG_LIST",i="DELETE_SONG",s="SET_FULLSCREEN"},,,,,,,function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"d",(function(){return a})),e.d(t,"e",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"g",(function(){return o})),e.d(t,"f",(function(){return i})),e.d(t,"a",(function(){return s}));var r="/banner",a="/personalized",c="/personalized/newsong",u="/toplist/detail",o="/artist/list",i="/artists",s="/playlist/detail"},function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e(42),a=e.n(r).a.create({baseURL:"https://collin-netease-cloud-music-api.vercel.app/",timeout:1e4});a.interceptors.response.use((function(n){if(200===n.status&&200===n.data.code)return Promise.resolve(n.data);return Promise.reject(n.data)}),(function(n){return n&&n.response?(n.response.status>=500?console.log("\u7cfb\u7edf\u5f00\u5c0f\u5dee\u4e86, \u8bf7\u8054\u7cfb\u6280\u672f\u7ba1\u7406\u5458\u6216\u7a0d\u540e\u91cd\u8bd5"):console.log("\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25, \u8bf7\u5237\u65b0\u91cd\u8bd5"),Promise.reject(n.response)):(console.log("\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25, \u8bf7\u5237\u65b0\u91cd\u8bd5"),Promise.reject(n))}));var c=function(n,t){return a.get(n,{params:t})}},,,,function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));var r="SET_RECOMMEND_LIST",a="SET_RECOMMEND_SONGS"},,function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));var r="SET_SINGER_DETAIL",a="SET_SINGER_LOADING"},,,,function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="SET_SINGER_LIST"},function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"a",(function(){return f}));var r=e(3),a=e.n(r),c=e(16),u=e(4),o=e(13),i=e(12),s=function(n,t){return Object(o.a)(i.g,{offset:n,initial:t})},f=function(){var n=Object(u.a)(a.a.mark((function n(t){var e,r,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(o.a)(i.f,{id:t});case 2:return e=n.sent,r=e.artist,u=e.hotSongs,n.abrupt("return",Object(c.a)(Object(c.a)({},r),{},{hotSongs:u.map((function(n){return{id:n.id,name:n.name,album:n.al,singers:n.ar,dt:n.dt}}))}));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="SET_RANK_DATA"},function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="SET_ALBUM_DETAIL"},,,,,,,function(n,t,e){"use strict";e.r(t),e.d(t,"changeCurrentSongAction",(function(){return a})),e.d(t,"changeCurrentIndexAction",(function(){return c})),e.d(t,"changeSongListAction",(function(){return u})),e.d(t,"changePlayStatusAction",(function(){return o})),e.d(t,"changeShowSongListAction",(function(){return i})),e.d(t,"deleteSongAction",(function(){return s})),e.d(t,"changeFullscreenAction",(function(){return f}));var r=e(5),a=function(n){return{type:r.c,payload:n}},c=function(n){return{type:r.b,payload:n}},u=function(n){return{type:r.g,payload:n}},o=function(n){return{type:r.e,payload:n}},i=function(n){return{type:r.f,payload:n}},s=function(n){return{type:r.a,payload:n}},f=function(n){return{type:r.d,payload:n}}},,function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return u}));var r=e(33),a=e(6),c=e(5),u=Object(a.a)((function(n,t){var e=t.type,r=t.payload;switch(e){case c.c:n.currentSong=r;break;case c.b:var a=r;a<0?a=n.songList.length-1:a>=n.songList.length&&(a=0),n.currentIndex=a,n.playStatus=!0;break;case c.g:n.songList=r;break;case c.f:n.showSongList=r;break;case c.e:n.playStatus=r;break;case c.a:!function(n,t){var e=n.songList,r=n.currentIndex;e.splice(t,1),t<=r&&(n.currentIndex=0===n.currentIndex?0:n.currentIndex-1)}(n,t.payload);break;case c.d:n.fullScreen=r}}),{currentSong:null,songList:[],currentIndex:-1,playStatus:!1,showSongList:!1,fullScreen:!1})},function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="TOGGLE_TOAST"},function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(3),a=e.n(r),c=e(4),u=e(24),o=e(23),i=function(n){return function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.b)(0,n);case 2:r=t.sent,e((a=r.artists,{type:o.a,payload:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(n){return t.apply(this,arguments)}}()}},function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(3),a=e.n(r),c=e(4),u=e(24),o=e(19),i=function(n){return{type:o.a,payload:n}},s=function(n){return function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e((a=!0,{type:o.b,payload:a})),t.next=3,Object(u.a)(n);case 3:r=t.sent,e(i(r));case 5:case"end":return t.stop()}var a}),t)})));return function(n){return t.apply(this,arguments)}}()}},function(n,t,e){"use strict";e.r(t),e.d(t,"changeRecommendList",(function(){return f})),e.d(t,"changeRecommendSongs",(function(){return l})),e.d(t,"getRecommendListAction",(function(){return d})),e.d(t,"getRecommendSongsAcrion",(function(){return p}));var r=e(3),a=e.n(r),c=e(4),u=e(13),o=e(12),i=function(){var n=Object(c.a)(a.a.mark((function n(){var t,e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)(o.e);case 2:return t=n.sent,e=t.result,n.abrupt("return",e.map((function(n){return{id:n.id,name:n.name,album:n.song.album,singers:n.song.artists,dt:n.song.duration}})));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=e(17),f=function(n){return{type:s.a,payload:n}},l=function(n){return{type:s.b,payload:n}},d=function(n){return function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a=n,Object(u.a)(o.d,{limit:a});case 2:r=t.sent,e(f(r.result));case 4:case"end":return t.stop()}var a}),t)})));return function(n){return t.apply(this,arguments)}}()},p=function(){return function(){var n=Object(c.a)(a.a.mark((function n(t){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i();case 2:e=n.sent,t(l(e));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}},function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(3),a=e.n(r),c=e(4),u=e(13),o=e(12),i=e(25),s=function(){return function(){var n=Object(c.a)(a.a.mark((function n(t){var e,r,c,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(u.a)(o.c);case 2:e=n.sent,r=e.list,c=r.filter((function(n){var t;return!(null===(t=n.tracks)||void 0===t?void 0:t.length)})),s=r.filter((function(n){var t;return null===(t=n.tracks)||void 0===t?void 0:t.length})),t((a={globalList:c,officialList:s},{type:i.a,payload:a}));case 5:case"end":return n.stop()}var a}),n)})));return function(t){return n.apply(this,arguments)}}()}},function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e(3),a=e.n(r),c=e(4),u=e(26),o=e(16),i=e(13),s=e(12),f=function(){var n=Object(c.a)(a.a.mark((function n(t){var e,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.a)(s.a,{id:t});case 2:return e=n.sent,r=e.playlist,n.abrupt("return",Object(o.a)(Object(o.a)({},r),{},{tracks:r.tracks.map((function(n){return{id:n.id,name:n.name,album:n.al,singers:n.ar,dt:n.dt}}))}));case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(n){return function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(n);case 2:r=t.sent,e((a=r,{type:u.a,payload:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(n){return t.apply(this,arguments)}}()}},,,,,,,,,,function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"a",(function(){return r}));var r=e(39),a=e(6),c=e(17),u=Object(a.b)((function(n,t){switch(t.type){case c.a:n.recommendList=t.payload;break;case c.b:n.recommendSongs=t.payload,n.loading=!1}}),{recommendList:[],recommendSongs:[],loading:!0})},function(n,t,e){n.exports={App:"App_App__2gXF4"}},,,,,,,,function(n,t,e){},,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){},,function(n,t,e){},function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(21),c=e.n(a),u=(e(60),e(52)),o=e.n(u),i=e(27),s=e(34),f=e(2),l=e(14),d=Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(5)]).then(e.bind(null,136))})),p=Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,139))})),b=Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,138))})),m=Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,140))})),g=Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(8)]).then(e.bind(null,133))})),y=[{component:d,routes:[{path:"/",exact:!0,render:function(){return Object(l.jsx)(f.a,{to:"/recommend"})}},{path:"/recommend",key:"recommend",component:p,routes:[{path:"/recommend/:id",key:"recommendAlbum",component:g}]},{path:"/singers",key:"singers",component:b,routes:[{path:"/singers/:id",key:"singer",component:Object(r.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(7)]).then(e.bind(null,134))}))}]},{path:"/rank",key:"rank",component:m,routes:[{path:"/rank/:id",key:"rank",component:g}]},{path:"/album/:id",exact:!0,key:"album",component:g}]}],h=e(32),v=e(20),O=e(51),S=e(53),j=e(6),L=e(36),_=Object(j.b)((function(n,t){switch(t.type){case L.a:t.show?(n.showToast=!0,n.toastText=t.payload):n.showToast=!1}}),{showToast:!1,toastText:""}),w=e(35),E=e(23),T=Object(j.a)((function(n,t){switch(t.type){case E.a:n.singerList=t.payload}}),{singerList:[]}),x=(e(37),e(25)),k=Object(j.a)((function(n,t){switch(t.type){case x.a:var e=t.payload,r=e.globalList,a=e.officialList;n.globalList=r,n.officialList=a,n.loading=!1}}),{globalList:[],officialList:[],loading:!0}),A=(e(40),e(26)),I=Object(j.a)((function(n,t){switch(t.type){case A.a:n.albumDetail=t.payload,n.loading=!1}}),{albumDetail:null,loading:!0}),N=(e(41),e(19)),R=Object(j.a)((function(n,t){switch(t.type){case N.a:n.singerDetail=t.payload,n.loading=!1}}),{singerDetail:null,loading:!0}),D=(e(38),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c),P=Object(v.b)({recommend:O.b,toast:_,player:w.b,singers:T,rank:k,album:I,singer:R}),C=Object(v.d)(P,D(Object(v.a)(S.a)));var G=function(){return Object(l.jsx)(h.a,{store:C,children:Object(l.jsx)("div",{className:o.a.App,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(r.Suspense,{fallback:null,children:Object(s.a)(y)})})})})},z=function(n){n&&n instanceof Function&&e.e(11).then(e.bind(null,135)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;e(n),r(n),a(n),c(n),u(n)}))};e(84),e(85),e(86);c.a.render(Object(l.jsx)(G,{}),document.getElementById("root")),z()}],[[87,3,4]]]);
//# sourceMappingURL=main.5dbd3a2a.chunk.js.map