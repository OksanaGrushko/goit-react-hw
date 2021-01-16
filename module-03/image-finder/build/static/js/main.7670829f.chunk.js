(this["webpackJsonpreact-home"]=this["webpackJsonpreact-home"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(9),o=n.n(c),i=n(8),s=n(3),l=n(4),u=n(6),h=n(5),m=function(e){var t=e.children;return Object(a.jsx)("div",{className:"Layout",children:t})},g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handlerChange=function(t){e.setState({inputValue:t.target.value})},e.handlerSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:this.handlerSubmit,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.inputValue,onChange:this.handlerChange})]})})}}]),n}(r.Component);function p(e){var t=e.webformatURL,n=e.tags,r=e.onImgClick,c=e.largeImageURL;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image",onClick:r,"data-large_img_url":c})})}function j(e){var t=e.images,n=e.onImgClick;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){e.id;var t=e.webformatURL,r=e.tags,c=e.largeImageURL;return Object(a.jsx)(p,{webformatURL:t,tags:r,largeImageURL:c,onImgClick:n},t)}))})}var b=n(10),d=n.n(b),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(d.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),n}(r.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handlKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlKeyDown)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"Overlay",children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:this.props.selectImgUrl,alt:this.props.searchImgUrl})})})}}]),n}(r.Component),y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onScroll()}},{key:"render",value:function(){return Object(a.jsx)("button",{className:"Button",type:"button",onClick:this.props.onClick,children:"Load more"})}}]),n}(r.Component),v={baseURL:"https://pixabay.com/api/",apiKey:"18172537-3926a404f6aac535e082de079",perPage:12,getItems:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(this.apiKey,"&image_type=photo&orientation=horizontal&per_page=").concat(this.perPage)).then((function(e){return e.json()})).then((function(e){return e.hits}))}},I=(n(37),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,loading:!1,searchImgUrl:"",error:null,selectImgUrl:null},e.fetchImage=function(){var t=e.state,n=t.searchImgUrl,a=t.page;e.setState({loading:!0}),v.getItems(n,a).then((function(t){return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handlerSearchFormSubmit=function(t){e.setState({searchImgUrl:t,page:1,images:[]})},e.onGalleryImageClick=function(t){e.setState({selectImgUrl:t.target.dataset.large_img_url})},e.closeModal=function(){e.setState({selectImgUrl:null})},e.onScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchImgUrl!==this.state.searchImgUrl&&this.fetchImage()}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.loading,r=e.images,c=e.selectImgUrl;return Object(a.jsxs)(m,{children:[Object(a.jsx)(g,{onSubmit:this.handlerSearchFormSubmit}),Object(a.jsxs)("div",{children:[t&&Object(a.jsxs)("p",{children:["Whoops, something went wrong: $",t.message]}),r.length>0&&Object(a.jsx)(j,{images:r,onImgClick:this.onGalleryImageClick}),n&&Object(a.jsx)(f,{}),r.length>0&&!n&&Object(a.jsx)(y,{type:"button",onClick:this.fetchImage,onScroll:this.onScroll})]}),Object(a.jsx)("div",{children:c&&Object(a.jsx)(O,{selectImgUrl:c,onClose:this.closeModal})})]})}}]),n}(r.Component));n(38);o.a.render(Object(a.jsx)(I,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7670829f.chunk.js.map