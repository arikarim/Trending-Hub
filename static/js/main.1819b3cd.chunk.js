(this.webpackJsonptrending=this.webpackJsonptrending||[]).push([[0],{112:function(e,t,a){},114:function(e,t,a){},144:function(e,t,a){},179:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),i=(a(112),a(11)),o=a.n(i),l=a(19),d=a(230),u=a(43),p=a(15),j=(a(114),a(2)),b=function(e){return Object(j.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:" Trending Hub  "})},h=a(8),v=a(218),f=a(221),m=a(223),O=a(95),g=a.n(O),x=a(96),_=a.n(x),w=a(70),y=a.n(w),k=a(97),S=a.n(k),N=Object(v.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function C(){var e=N(),t=c.a.useState(0),a=Object(h.a)(t,2),r=a[0],s=a[1],i=Object(p.f)();return Object(n.useEffect)((function(){0===r?i.push("/"):1===r?i.push("/movies"):2===r?i.push("/series"):3===r&&i.push("/search")}),[r,i]),Object(j.jsxs)(f.a,{value:r,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(j.jsx)(m.a,{style:{color:"white"},label:"Trending",icon:Object(j.jsx)(g.a,{})}),Object(j.jsx)(m.a,{style:{color:"white"},label:"Movies",icon:Object(j.jsx)(_.a,{})}),Object(j.jsx)(m.a,{style:{color:"white"},label:"TV Series",icon:Object(j.jsx)(S.a,{})}),Object(j.jsx)(m.a,{style:{color:"white"},label:"Search",icon:Object(j.jsx)(y.a,{})})]})}var P=a(20),T=a.n(P),M="https://image.tmdb.org/t/p/w300",U="https://image.tmdb.org/t/p/w500",E="https://www.movienewz.com/img/films/poster-holder.jpg",B=a(227),I=a(234),R=a(224),z=a(183),F=a(225),G=a(226),L=(a(144),a(98)),W=a.n(L),A=(a(178),a(179),function(e){return e.preventDefault()}),D=function(e){var t=e.media_type,a=e.id,c=Object(n.useState)(),r=Object(h.a)(c,2),s=r[0],i=r[1],d=null===s||void 0===s?void 0:s.map((function(e){return Object(j.jsxs)("div",{className:"carouselItem",children:[Object(j.jsx)("img",{src:e.profile_path?"".concat(M,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:A,className:"carouselItem__img"}),Object(j.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),u=function(){var e=Object(l.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/credits?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&lanfuage=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);return Object(j.jsx)(W.a,{autoPlay:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},infinite:!0,mouseTracking:!0,disableButtonsControls:!0,disableDotsControls:!0,items:d})},H=a(99),V=a.n(H),q=(a(180),Object(v.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"90%",backgroundColor:"rgba(0, 0, 0, 0.87)",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}})));function J(e){var t=e.c,a=e.children,r=e.media_type,s=e.id,i=q(),d=c.a.useState(!1),b=Object(h.a)(d,2),v=b[0],f=b[1],m=Object(n.useState)(),O=Object(h.a)(m,2),g=O[0],x=O[1],_=Object(n.useState)(),w=Object(h.a)(_,2),y=w[0],k=w[1],S=Object(n.useState)(),N=Object(h.a)(S,2),C=N[0],P=N[1],M=Object(n.useState)(),B=Object(h.a)(M,2),L=B[0],W=B[1],A=Object(p.f)(),H=Object(n.useState)({}),J=Object(h.a)(H,2),$=J[0],K=J[1],Q=Object(n.useState)(!1),X=Object(h.a)(Q,2),Y=X[0],Z=X[1],ee=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.themoviedb.org/3/".concat(r,"/").concat(s,"?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&lanfuage=en-US"));case 3:t=e.sent,a=t.data,x(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.themoviedb.org/3/".concat(r,"/").concat(s,"/videos?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&lanfuage=en-US"));case 3:a=e.sent,n=a.data,k(null===(t=n.results[0])||void 0===t?void 0:t.key),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){ee(),te()}),[]);return Object(j.jsxs)("div",{className:"position-relative col-10 px-md-3 col-md-4 col-lg-3",children:[Object(j.jsxs)(V.a,{flipSpeedBackToFront:.2,flipSpeedFrontToBack:.2,isFlipped:1==Y&&Y,flipDirection:"horizontal",children:[Object(j.jsx)("div",{onMouseEnter:function(){Z(!0)},className:"media mx-auto",type:"button",children:a}),Object(j.jsxs)("div",{onClick:function(){f(!0)},style:$,className:"media mx-auto",onMouseOut:function(){Z(!1),K({})},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"text-center",children:null===t||void 0===t?void 0:t.original_title}),Object(j.jsxs)("p",{className:"desc",children:[Object(j.jsx)("span",{className:"span-color mr-2",children:"Vote:"})," ",null===t||void 0===t?void 0:t.vote_average]}),Object(j.jsxs)("p",{className:"desc",children:[Object(j.jsx)("span",{className:"span-color mr-2",children:"Lamguage:"})," ",null===t||void 0===t?void 0:t.original_language]}),Object(j.jsxs)("p",{className:"desc",children:[Object(j.jsx)("span",{className:"span-color mr-2",children:"Release:"})," ",null===t||void 0===t?void 0:t.release_date]}),Object(j.jsxs)("p",{className:"desc",children:[Object(j.jsx)("span",{className:"span-color mr-2",children:"Overview:"})," ",null===t||void 0===t?void 0:t.overview]})]}),t&&console.log(t)]})]}),Object(j.jsx)(I.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:i.modal,open:v,onClose:function(){f(!1)},closeAfterTransition:!0,BackdropComponent:R.a,BackdropProps:{timeout:500},children:Object(j.jsx)(z.a,{in:v,children:g&&Object(j.jsx)("div",{className:i.paper,children:Object(j.jsxs)("div",{className:"ContentModal",children:[Object(j.jsx)("img",{src:g.poster_path?"".concat(U,"/").concat(g.poster_path):E,alt:g.name||g.title,className:"ContentModal__portrait"}),Object(j.jsx)("img",{src:g.backdrop_path?"".concat(U,"/").concat(g.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:g.name||g.title,className:"ContentModal__landscape"}),Object(j.jsxs)("div",{className:"ContentModal__about",children:[Object(j.jsxs)("span",{className:"ContentModal__title",children:[g.name||g.title," (",(g.first_air_date||g.release_date||"-----").substring(0,4),")"]}),g.tagline&&Object(j.jsx)("i",{className:"tagline",children:g.tagline}),Object(j.jsx)("span",{className:"ContentModal__description",children:g.overview}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{id:s,media_type:r})}),Object(j.jsx)(F.a,{variant:"contained",startIcon:Object(j.jsx)(G.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(y),children:"Watch the Trailer"}),"movie"===r&&Object(j.jsx)(u.b,{className:"btn btn-primary my-2",to:"/watch/".concat(s),children:"watch"}),"tv"===r&&Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(){return A.push("/watch/".concat(s,"/").concat(C,"/").concat(L))},children:[Object(j.jsx)("input",{className:"form-control my-2 inputs",type:"number",placeholder:"season",onChange:function(e){return P(e.target.value)},required:!0}),Object(j.jsx)("input",{className:"form-control my-2 inputs",type:"number",placeholder:"episode",onChange:function(e){return W(e.target.value)},required:!0}),Object(j.jsx)("button",{className:"btn btn-primary my-2",type:"submit",children:"watch"})]})})]})]})})})})]})}var $=function(e){var t=e.content,a=e.id,n=e.poster,c=e.title,r=e.date,s=e.media_type,i=e.vote_average;return Object(j.jsxs)(J,{className:"mx-auto",c:t,media_type:s,id:a,children:[Object(j.jsx)(B.a,{badgeContent:i,color:i>6?"primary":"secondary"}),Object(j.jsx)("img",{className:"poster",src:n?"".concat(M).concat(n):E,alt:c}),Object(j.jsx)("b",{className:"title",children:c}),Object(j.jsxs)("span",{className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(j.jsx)("span",{className:"subTitle",children:r})]})]})},K=a(233),Q=a(101),X=a(228),Y=Object(Q.a)({palette:{type:"dark"}}),Z=function(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?15:a;return Object(j.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(j.jsx)(X.a,{theme:Y,children:Object(j.jsx)(K.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"secondary"})})})},ee=function(e){var t,a=Object(n.useState)(1),c=Object(h.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)([]),d=Object(h.a)(i,2),u=d[0],p=d[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&page=").concat(r));case 2:t=e.sent,a=t.data,p(a.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[r]);var v={backgroundImage:"url(".concat(U+(null===(t=u[0])||void 0===t?void 0:t.backdrop_path),")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",width:"100%"};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:v,className:"main"}),u[0]?console.log(u[0]):"",Object(j.jsx)("span",{className:"pagesTitle",children:"Trending"}),Object(j.jsx)("div",{className:"trending",children:u&&u.map((function(e,t){return Object(j.jsx)($,{content:e,id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(j.jsx)(Z,{setPage:s})]})},te=a(231),ae=a(232),ne=a(229),ce=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(0),i=Object(h.a)(s,2),d=i[0],u=i[1],p=Object(n.useState)(1),b=Object(h.a)(p,2),v=b[0],f=b[1],m=Object(n.useState)([]),O=Object(h.a)(m,2),g=O[0],x=O[1],_=Object(n.useState)(),w=Object(h.a)(_,2),k=w[0],S=w[1],N=Object(Q.a)({palette:{type:"dark",primary:{main:"#fff"}}}),C=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://api.themoviedb.org/3/search/".concat(d?"tv":"movie","?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&query=").concat(c,"&page=").concat(v,"&include_adult=false"));case 3:t=e.sent,a=t.data,console.log(a.results),x(a.results),S(a.total_pages),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),C()}),[d,v]),Object(j.jsxs)("div",{children:[Object(j.jsxs)(X.a,{theme:N,children:[Object(j.jsxs)("div",{style:{display:"flex",margin:"15px 0"},children:[Object(j.jsx)(te.a,{style:{flex:1},label:"search",variant:"filled",onChange:function(e){return r(e.target.value)}}),Object(j.jsx)(F.a,{variant:"contained",style:{marginLeft:10},onClick:C,children:Object(j.jsx)(y.a,{})})]}),Object(j.jsxs)(ae.a,{value:d,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){u(t),f(1)},children:[Object(j.jsx)(ne.a,{style:{width:"50%"},label:"Search Movies"}),Object(j.jsx)(ne.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(j.jsxs)("div",{className:"trending",children:[g&&g.map((function(e,t){return Object(j.jsx)($,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:0===d?"movie":"tv",vote_average:e.vote_average},e.id)})),g&&0===g.length&&(d?Object(j.jsx)("h2",{children:"No Series Found"}):Object(j.jsx)("h2",{children:"No Movies Found"}))]}),k>1&&Object(j.jsx)(Z,{setPage:f,numOfPages:k})]})},re=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},se=a(48),ie=a(235),oe=function(e){var t=e.genres,a=e.setGenres,c=e.selectedGenres,r=e.setSelectedGenres,s=e.setPage,i=e.type,d=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/genre/".concat(i,"/list?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US"));case 2:t=e.sent,n=t.data,a(n.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return d(),function(){a({})}}),[]);return Object(j.jsxs)("div",{style:{padding:"6px 0",width:"100%"},children:[c&&c.map((function(e){return Object(j.jsx)(ie.a,{label:e.name,size:"small",color:"secondary",style:{margin:2},clickable:!0,onDelete:function(){return function(e){r(c.filter((function(t){return t.id!==e.id}))),a([].concat(Object(se.a)(t),[e])),s(1)}(e)}},e.id)})),t&&t.map((function(e){return Object(j.jsx)(ie.a,{label:e.name,size:"small",style:{margin:2},clickable:!0,onClick:function(){return function(e){r([].concat(Object(se.a)(c),[e])),a(t.filter((function(t){return t.id!==e.id}))),s(1)}(e)}},e.id)}))]})},le=function(e){var t,a=Object(n.useState)(1),c=Object(h.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)([]),d=Object(h.a)(i,2),u=d[0],p=d[1],b=Object(n.useState)(),v=Object(h.a)(b,2),f=v[0],m=v[1],O=Object(n.useState)([]),g=Object(h.a)(O,2),x=g[0],_=g[1],w=Object(n.useState)([]),y=Object(h.a)(w,2),k=y[0],S=y[1],N=re(k),C=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=").concat(r,"&with_genres=").concat(N));case 2:t=e.sent,a=t.data,p(a.results),m(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C()}),[r,k]);var P={backgroundImage:"url(".concat(U+(null===(t=u[0])||void 0===t?void 0:t.backdrop_path),")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",width:"100%"};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:P,className:"main"}),Object(j.jsx)("span",{className:"pagesTitle",children:"Series"}),Object(j.jsx)(oe,{genres:x,setGenres:_,selectedGenres:k,setSelectedGenres:S,setPage:s,type:"tv"}),Object(j.jsx)("div",{className:"trending",children:u&&u.map((function(e,t){return Object(j.jsx)($,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),f>1&&Object(j.jsx)(Z,{setPage:s,numOfPages:f})]})},de=function(e){var t,a=Object(n.useState)([]),c=Object(h.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)([]),d=Object(h.a)(i,2),u=d[0],p=d[1],b=Object(n.useState)(1),v=Object(h.a)(b,2),f=v[0],m=v[1],O=Object(n.useState)([]),g=Object(h.a)(O,2),x=g[0],_=g[1],w=Object(n.useState)(),y=Object(h.a)(w,2),k=y[0],S=y[1],N=re(u),C=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(f,"&with_genres=").concat(N));case 2:t=e.sent,a=t.data,_(a.results),S(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){C()}),[f,u]);var P={backgroundImage:"url(".concat(U+(null===(t=x[0])||void 0===t?void 0:t.backdrop_path),")"),backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",width:"100%"};return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:P,className:"main"}),Object(j.jsx)("span",{className:"pagesTitle",children:"Movies"}),Object(j.jsx)(oe,{genres:r,setGenres:s,selectedGenres:u,setSelectedGenres:p,setPage:m,type:"movie"}),Object(j.jsx)("div",{className:"trending",children:x&&x.map((function(e){return Object(j.jsx)($,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),k>1&&Object(j.jsx)(Z,{setPage:m,numOfPages:k})]})},ue=a(72),pe=a(36),je=function(){var e=Object(pe.c)((function(e){return e.popularMovies})),t=Object(p.g)().id;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ue.a,{className:"frame",url:"https://www.2embed.ru/embed/tmdb/movie?id=".concat(t),width:"100%",height:"100%",allowFullScreen:!0,frameBorder:"0"}),Object(j.jsx)("h1",{className:"text-center my-3",children:"Popular Movies"}),Object(j.jsx)("div",{className:"trending",children:e&&e.map((function(e,t){return Object(j.jsx)($,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),e&&console.log(e)]})},be=function(){var e=Object(pe.c)((function(e){return e.popularTv})),t=Object(p.g)(),a=t.id,n=t.season,c=t.ep;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ue.a,{className:"frame",url:"https://www.2embed.ru/embed/tmdb/tv?id=".concat(a,"&s=").concat(n,"&e=").concat(c),width:"100%",height:"100%",allowFullScreen:!0,frameBorder:"0"}),Object(j.jsx)("h1",{className:"text-center my-3",children:"Popular Tv Series"}),Object(j.jsx)("div",{className:"trending",children:e&&e.map((function(e,t){return Object(j.jsx)($,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),e&&console.log(e)]})},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"POPULAR",popular:e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"POPULAR",popular:e}};var fe=function(){var e=Object(pe.b)();return Object(n.useEffect)((function(){var t=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&page=1"));case 3:a=t.sent,e(he(a.data.results)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get(" https://api.themoviedb.org/3/tv/popular?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&page=1"));case 3:a=t.sent,e(ve(a.data.results)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t(),a()}),[e]),Object(j.jsxs)(u.a,{basename:"/Trending-Hubb",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(d.a,{className:"cont",children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/movies",component:de}),Object(j.jsx)(p.a,{exact:!0,path:"/series",component:le}),Object(j.jsx)(p.a,{exact:!0,path:"/search",component:ce}),Object(j.jsx)(p.a,{exact:!0,path:"/watch/:id",component:je}),Object(j.jsx)(p.a,{exact:!0,path:"/watch/:id/:season/:ep",component:be}),Object(j.jsx)(p.a,{path:"/",component:ee})]})})}),Object(j.jsx)(C,{})]})},me=a(76),Oe=Object(me.a)({popularMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POPULAR":return Object(se.a)(t.popular);default:return e}},popularTv:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POPULAR":return Object(se.a)(t.popular);default:return e}}}),ge=Object(me.b)(Oe),xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(j.jsx)(pe.a,{store:ge,children:Object(j.jsx)(fe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Trending-Hubb",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Trending-Hubb","/service-worker.js");xe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_e(t,e)}))}}()}},[[182,1,2]]]);
//# sourceMappingURL=main.1819b3cd.chunk.js.map