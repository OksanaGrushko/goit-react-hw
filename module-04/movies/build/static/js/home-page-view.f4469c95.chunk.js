(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[1],{40:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var c=n(18),a=n(19),i=n(21),r=n(20),o=n(0),s=n.n(o),h=n(47),u=n(46),f=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={shows:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;u.a.fetchShowWithTrending().then((function(e){return t.setState({shows:e})}))}},{key:"render",value:function(){var t=this.state.shows;return s.a.createElement("div",null,s.a.createElement("h2",null,"Trending today"),t.length>0&&s.a.createElement(h.a,{shows:t,location:this.props.location}))}}]),n}(o.Component)},46:function(t,e,n){"use strict";e.a={baseURL:"https://api.themoviedb.org/3",apiKey:"71607c3510b1a3ebfcb0586b3d831a6c",fetchShowWithSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(this.baseURL,"/search/movie?api_key=").concat(this.apiKey,"&query=").concat(t)).then((function(t){return t.json()})).then((function(t){return t.results}))},fetchShowWithTrending:function(){return fetch("".concat(this.baseURL,"/trending/all/day?api_key=").concat(this.apiKey)).then((function(t){return t.json()})).then((function(t){return t.results}))},fetchShowWithMovies:function(t){return fetch("".concat(this.baseURL,"/movie/").concat(t,"?api_key=").concat(this.apiKey)).then((function(t){return t.json()})).then((function(t){return t}))},fetchShowWithActors:function(t){return fetch("".concat(this.baseURL,"/movie/").concat(t,"/credits?api_key=").concat(this.apiKey)).then((function(t){return t.json()})).then((function(t){return t.cast}))},fetchShowWithRevievs:function(t){return fetch("".concat(this.baseURL,"/movie/").concat(t,"/reviews?api_key=").concat(this.apiKey)).then((function(t){return t.json()})).then((function(t){return t.results}))}}},47:function(t,e,n){"use strict";var c=n(0),a=n.n(c),i=n(7);e.a=function(t){var e=t.shows,n=t.location;return a.a.createElement("ul",null,e&&e.map((function(t){return a.a.createElement("li",{key:t.id},a.a.createElement(i.b,{to:{pathname:"/movies/".concat(t.id),state:{from:n}}},t.title?t.title:t.name))})))}}}]);
//# sourceMappingURL=home-page-view.f4469c95.chunk.js.map