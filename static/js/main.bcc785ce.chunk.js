(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[0],{29:function(t,e,r){},39:function(t,e,r){"use strict";r.r(e);var c=r(2),a=r.n(c),n=r(22),s=r.n(n),o=(r(29),r(3)),i=r(4),p=r(6),d=r(5),u=r(14),l=r(13),j=r(8),h="products",b="categories",O="data_load",m="cart_add",f="cart_update",x="cart_delete",y="cart_clear",v=r(24),g=Object(u.b)(function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t,r){for(var c=0;c<e.length;c++){var a=e[c](t,r);if(a!==t)return a}return t}}((function(t,e){switch(e.type){case O:return Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},e.payload.dataType,e.payload.data));default:return t||{}}}),(function(t,e){var r=Object(j.a)({cart:[],cartItems:0,cartPrice:0},t);switch(e.type){case m:var c=e.payload.product,a=e.payload.quantity,n=r.cart.find((function(t){return t.product.id===c.id}));return n?n.quantity+=a:r.cart=[].concat(Object(v.a)(r.cart),[e.payload]),r.cartItems+=a,r.cartPrice+=c.price*a,r;case f:return r.cart=r.cart.map((function(t){if(t.product.id===e.payload.product.id){var c=e.payload.quantity-t.quantity;return r.cartItems+=c,r.cartPrice+=t.product.price*c,e.payload}return t})),r;case x:var s=r.cart.find((function(t){return t.product.id===e.payload.id}));return r.cartItems-=s.quantity,r.cartPrice-=s.quantity*s.product.price,r.cart=r.cart.filter((function(t){return t!==s})),r;case y:return Object(j.a)(Object(j.a)({},t),{},{cart:[],cartItems:0,cartPrice:0});default:return t||{}}}))),C=r(17),N=r(43),k=r(45),w=r(44),P=r(42),F={categories:["Watersports","Soccer","Chess","Running"],products:[{id:1,name:"Kayak",category:"Watersports",description:"A boat for one person",price:300},{id:2,name:"Nike Shoes",category:"Soccer",description:"FIFA approved size",price:100},{id:3,name:"P3",category:"Running",description:"P3 (Running)",price:5},{id:4,name:"Life jacket",category:"Watersports",description:" keeps one floating in the water",price:100},{id:5,name:"P5",category:"Chess",description:"P5 (Chess)",price:7}]},S=r(41),T=r(0),A=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return Object(T.jsx)(w.a,{path:this.props.to,exact:this.props.exact,children:function(e){var r=t.props.className||"m-2 btn btn-block",c=t.props.activeClass||"btn-primary",a=t.props.inActiveClass||"btn-secondary",n="".concat(r," ").concat(e.match?c:a);return Object(T.jsx)(S.a,{to:t.props.to,className:n,children:t.props.children})}})}}]),r}(c.Component),q=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return Object(T.jsxs)(a.a.Fragment,{children:[Object(T.jsx)(A,{to:this.props.baseUrl,exact:!0,children:"All"}),this.props.categories&&this.props.categories.map((function(e){return Object(T.jsx)(A,{to:"".concat(t.props.baseUrl,"/").concat(e.toLowerCase()),children:e},e)}))]})}}]),r}(c.Component),I=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return null==this.props.products||0===this.props.products.length?Object(T.jsx)("h5",{className:"p-2",children:"No Products"}):this.props.products.map((function(e){return Object(T.jsxs)("div",{className:"card m-1 p-1 bg-light",children:[Object(T.jsxs)("h4",{children:[e.name,Object(T.jsxs)("span",{className:"badge badge-pill badge-primary float-right",children:["$",e.price.toFixed(2)]})]}),Object(T.jsxs)("div",{className:"card-text bg-white p-1",children:[e.description,Object(T.jsx)("button",{className:"btn btn-success btn-sm float-right",onClick:function(e){return t.props.addToCart},children:"Add To Cart"})]})]},e.id)}))}}]),r}(c.Component),L=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(o.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).getSummary=function(){return t.props.cartItems>0?void 0:Object(T.jsx)("span",{children:"Your cart: (empty) "})},t.getLinkClasses=function(){return"btn btn-sm bg-dark text-white\n    ".concat(0===t.props.cartItems?"disabled":"")},t}return Object(i.a)(r,[{key:"render",value:function(){return Object(T.jsx)("div",{className:"float-right",children:Object(T.jsxs)("small",{children:[this.getSummary(),Object(T.jsx)(S.a,{className:this.getLinkClasses(),to:"/shop/cart",children:Object(T.jsx)("i",{className:"fa fa-shopping-cart"})})]})})}}]),r}(c.Component),Q=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(o.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).handleAddToCart=function(){var e;(e=t.props).addToCart.apply(e,arguments),t.props.history.push("/shop/cart")},t}return Object(i.a)(r,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:"container-fluid",children:[Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"col bg-dark text-white float-left",children:[Object(T.jsx)("div",{className:"navbar-brand",children:"SPORTS QUEST"}),Object(T.jsx)(L,Object(j.a)({},this.props))]})}),Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"col-3 p-2",children:Object(T.jsx)(q,{baseUrl:"/shop/products",categories:this.props.categories})}),Object(T.jsxs)("div",{className:"col-9 p-2",children:[Object(T.jsx)(I,{products:this.props.products}),"addToCart=",this.handleAddToCart]}),Object(T.jsx)("div",{className:"col -6 p-2",children:Object(T.jsx)("img",{src:"/k1/ex.jpg",width:"300",alt:"xe"})})]})]})}}]),r}(c.Component),D=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(o.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).handleChange=function(e,r){t.props.updateQuantity(e,r.target.value)},t}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return this.props.cart&&0!==this.props.cart.length?Object(T.jsxs)(a.a.Fragment,{children:[this.props.cart.map((function(e){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)("input",{type:"number",value:e.quantity,onChange:function(r){return t.handleChange(e.product,r)}})}),Object(T.jsx)("td",{children:e.product.name}),Object(T.jsxs)("td",{children:["$",e.product.price.toFixed(2)]}),Object(T.jsxs)("td",{children:["$",(e.quantity*e.product.price).toFixed(2)]}),Object(T.jsx)("td",{children:Object(T.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return t.props.removeFromCart(e.product)},children:"Remove"})})]},e.product.id)})),Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{colSpan:"3",className:"text-right",children:"Total:"}),Object(T.jsxs)("th",{colSpan:"2",children:["$",this.props.cartPrice.toFixed(2)]})]})]}):Object(T.jsx)("tr",{children:Object(T.jsx)("td",{colSpan:"5",children:"Your cart is empty"})})}}]),r}(c.Component),R=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(o.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))).getLinkClasses=function(){return"btn btn-secondary m-1\n".concat(0===t.props.cartItems?"disabled":"")},t}return Object(i.a)(r,[{key:"render",value:function(){return Object(T.jsxs)("div",{className:"m-3",children:[Object(T.jsx)("h2",{className:"text-center",children:"Your Cart"}),Object(T.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{children:"Quantity"}),Object(T.jsx)("th",{children:"Product"}),Object(T.jsx)("th",{className:"text-right",children:"Price"}),Object(T.jsx)("th",{className:"text-right",children:"Subtotal"}),Object(T.jsx)("th",{})]})}),Object(T.jsx)("tbody",{children:Object(T.jsx)(D,{cart:this.props.cart,cartPrice:this.props.cartPrice,updateQuantity:this.props.updateCartQuantity,removeFromCart:this.props.removeFromCart})})]}),Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)(S.a,{className:"btn btn-primary m-1",to:"/shop",children:"Continue Shopping"}),Object(T.jsx)(S.a,{className:this.getLinkClasses(),to:"/shop/checkout",children:"Checkout"})]})]})}}]),r}(c.Component),_={loadData:function(t){return{type:O,payload:{dataType:t,data:F[t]}}},addToCart:function(t,e){return{type:m,payload:{product:t,quantity:e||1}}},updateCartQuantity:function(t,e){return{type:f,payload:{product:t,quantity:e}}},removeFromCart:function(t){return{type:x,payload:t}},clearCart:function(){return{type:y}}},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e&&"All"!==e?t.filter((function(t){return t.category.toLowerCase()===e.toLowerCase()})):t},$=Object(C.b)((function(t){return Object(j.a)({},t)}),_)(function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return Object(T.jsxs)(k.a,{children:[Object(T.jsx)(w.a,{path:"/shop/products/:category?",render:function(e){return Object(T.jsx)(Q,Object(j.a)(Object(j.a)(Object(j.a)({},t.props),e),{},{products:U(t.props.products,e.match.params.category)}))}}),Object(T.jsx)(w.a,{path:"/shop/cart",render:function(e){return Object(T.jsx)(R,Object(j.a)(Object(j.a)({},t.props),e))}}),Object(T.jsx)(P.a,{to:"/shop/products"})]})}},{key:"componentDidMount",value:function(){this.props.loadData(b),this.props.loadData(h)}}]),r}(c.Component)),W=function(t){Object(p.a)(r,t);var e=Object(d.a)(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(T.jsx)(C.a,{store:g,children:Object(T.jsx)(N.a,{children:Object(T.jsxs)(k.a,{children:[Object(T.jsx)(w.a,{path:"/shop",component:$}),Object(T.jsx)(P.a,{to:"/shop"})]})})})}}]),r}(c.Component),Y=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,46)).then((function(e){var r=e.getCLS,c=e.getFID,a=e.getFCP,n=e.getLCP,s=e.getTTFB;r(t),c(t),a(t),n(t),s(t)}))};r(37),r(38);s.a.render(Object(T.jsx)(W,{}),document.getElementById("root")),Y()}},[[39,1,2]]]);
//# sourceMappingURL=main.bcc785ce.chunk.js.map