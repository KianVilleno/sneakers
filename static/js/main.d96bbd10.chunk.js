(this.webpackJsonpsneakers=this.webpackJsonpsneakers||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(3),s=t.n(r),i=(t(12),t(4)),l=t(5),o=t(7),u=t(6),h=(t(13),t(14),t(0)),j=function(e){var n,t=e.sneaker;return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{className:"card-container-image",alt:"sneaker",src:t.main_picture_url}),Object(h.jsx)("span",{className:"card-label-retail-price",children:"Retail Price"}),Object(h.jsx)("span",{className:"card-label-price",children:(n=t.retail_price_cents,Number(.01*n).toLocaleString("en-US",{style:"currency",currency:"USD"}))}),Object(h.jsx)("span",{className:"card-label-name",children:t.name})]})},d=function(e){var n=e.sneakers;return Object(h.jsx)("div",{className:"card-list",children:n.map((function(e){return Object(h.jsx)(j,{sneaker:e},e.id)}))})},b=(t(16),function(e){e.placeholder;var n=e.handleChange;return Object(h.jsx)("div",{className:"search-box",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("input",{type:"search",onChange:n}),Object(h.jsx)("i",{className:"fa fa-search"})]})})}),f=(t(17),function(e){Object(o.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={sneakers:[],searchField:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json").then((function(e){return e.json()})).then((function(n){return e.setState({sneakers:n.sneakers})}))}},{key:"render",value:function(){var e=this.state,n=e.sneakers,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"App-title",children:"SNEAKERS"}),Object(h.jsx)(b,{placeholder:"Search for sneaker",handleChange:this.handleChange}),Object(h.jsx)(d,{sneakers:a}),Object(h.jsx)("footer",{children:"PROEJECT BY KIAN VILLENO"})]})}}]),t}(a.Component)),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.d96bbd10.chunk.js.map