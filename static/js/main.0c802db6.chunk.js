(this["webpackJsonpmi-app"]=this["webpackJsonpmi-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(3),i=t.n(a),s=(t(13),t(14),t(15),t(0));var o=function(){return Object(s.jsxs)("nav",{children:[Object(s.jsx)("p",{children:"AbrahamLogo"}),Object(s.jsx)("button",{id:"burger",className:"burger",children:Object(s.jsx)("i",{className:"fas fa-bars"})}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:!0,children:"Inicio"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:!0,children:"Blog"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:!0,children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:!0,children:"Nosotros"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:!0,children:"Contact"})})]})]})},j=t(6),l=t(4),h=t(5),u=t(8),b=t(7);t(17);function d(e){return Object(s.jsxs)("figure",{children:[Object(s.jsx)("img",{src:e.avatar,alt:e.namne}),Object(s.jsx)("figcaption",{children:e.name})]})}var f=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(l.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).state={pokemons:[]},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/").then((function(e){return e.json()})).then((function(n){console.log(n),n.results.forEach((function(n){fetch(n.url).then((function(e){return e.json()})).then((function(n){console.log(n);var t={id:n.id,name:n.name,avatar:n.sprites.front_default},c=[].concat(Object(j.a)(e.state.pokemons),[t]);e.setState({pokemons:c})}))}))}))}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Pediciones Asincronas en componente de clase"}),Object(s.jsx)("h3",{children:"AJAX-APIS"}),Object(s.jsx)("div",{className:"pokemon",children:this.state.pokemons.map((function(e){return Object(s.jsx)(d,{name:e.name,avatar:e.avatar},e.id)}))})]})}}]),t}(c.Component);var O=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(f,{})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.0c802db6.chunk.js.map