(this.webpackJsonpflipkart=this.webpackJsonpflipkart||[]).push([[0],{117:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(10),c=a.n(r),s=(a(117),a(194)),o=a(48),l=a(17),m=a(85),d=a(182),p=a(187),h=a(188),g=a(189),u=a(86),j=a(190),b=a(183),f=a(14),x=a(195),O=a(178),k=a(2),w=Object(m.a)((function(e){return{search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:15,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),y=function(){var e=w();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:e.search,children:[Object(k.jsx)("div",{className:e.searchIcon,children:Object(k.jsx)(O.a,{})}),Object(k.jsx)(x.a,{placeholder:"Search for products,brands and more",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})})},v=a(184),T=a(185),N=a(186),F=a(180),q=a(181),C=a(193),S=Object(m.a)({component:{width:"90vh",height:"70vh"},login:{padding:"25px 35px",display:"flex",flex:1,flexDirection:"column","& > *":{marginTop:10}},text:{color:"#878787",fontSize:14},loginBtn:{textTransfrom:"none",background:"#FB641B",color:"#ffffff",height:48,borderRadius:2},requestBtn:{textTransfrom:"none",background:"#FFFFFF",color:"#2874f0",height:48,borderRadius:2,boxShadow:"0 2px 4px 0 rgba(0 0 0 / 20%)"},createText:{textAlign:"center",marginTop:"2rem",fontSize:14,color:"#2874f0",fontWeight:600,cursor:"pointer"}}),B=function(e){var t=e.open,a=e.setopen,n=S(),r=Object(i.useState)("login"),c=Object(o.a)(r,2),l=c[0],m=c[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(F.a,{open:t,onClose:function(){a(!1),m("login")},children:Object(k.jsx)(q.a,{className:n.component,children:"login"===l?Object(k.jsxs)(s.a,{className:n.login,children:[Object(k.jsx)(C.a,{name:"username",placeholder:"Enter Email/Mobile Number"}),Object(k.jsx)(C.a,{name:"password",placeholder:"Enter Password"}),Object(k.jsx)(b.a,{className:n.text,children:"By continuing, you agree to Flipkart's Terms of Use and Privacy Policy."}),Object(k.jsx)(v.a,{variant:"contained",className:n.loginBtn,children:"Login"}),Object(k.jsx)(b.a,{style:{textAlign:"center"},className:n.text,children:"OR"}),Object(k.jsx)(v.a,{variant:"contained",className:n.requestBtn,children:"Requsst OTP"}),Object(k.jsx)(b.a,{className:n.createText,onClick:function(){m("signup")},children:"New to Flipkart? Create an account"})]}):Object(k.jsxs)(s.a,{className:n.login,children:[Object(k.jsx)(C.a,{name:"username",placeholder:"Enter Firstname"}),Object(k.jsx)(C.a,{name:"username",placeholder:"Enter Lastname"}),Object(k.jsx)(C.a,{name:"password",placeholder:"Enter Password"}),Object(k.jsx)(C.a,{name:"username",placeholder:"Enter Username"}),Object(k.jsx)(C.a,{name:"password",placeholder:"Enter Email"}),Object(k.jsx)(C.a,{name:"username",placeholder:"Enter Password"}),Object(k.jsx)(C.a,{name:"password",placeholder:"Enter Phone number"}),Object(k.jsx)(v.a,{variant:"contained",className:n.loginBtn,children:"sign UP"})]})})})})},z=a(39),P=Object(m.a)((function(e){return{login:Object(l.a)({background:"#ffffff",color:"#2874f0",textTransform:"none",fontWeight:600,borderRadius:2,padding:"5px 40px",boxShadow:"none"},e.breakpoints.down("sm"),{background:"#2874f0",color:"#ffffff"}),wraper:Object(l.a)({margin:"0 7% 0 auto",display:"flex","& > *":Object(l.a)({marginRight:50,alignItems:"center",textDecoration:"none",color:"white"},e.breakpoints.down("sm"),{color:"#2874f0",display:"flex",alignItems:"center",flexDirection:"column",marginTop:10})},e.breakpoints.down("sm"),{display:"block"}),cartItem:{display:"flex"}}})),E=function(){var e=P(),t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(s.a,{className:e.wraper,children:[Object(k.jsxs)(z.b,{children:[" ",Object(k.jsx)(v.a,{variant:"contained",className:e.login,onClick:function(){r(!0)},children:"Login "})," "]}),Object(k.jsxs)(z.b,{children:[" ",Object(k.jsx)(b.a,{children:"More"})," "]}),Object(k.jsxs)(z.b,{to:"/cart",className:e.cartItem,children:[Object(k.jsx)(T.a,{badgeContent:1,color:"secondary",children:Object(k.jsx)(N.a,{})}),Object(k.jsx)(b.a,{style:{marginLeft:10},children:"Cart"})]}),Object(k.jsx)(B,{open:n,setopen:r})]})})},A=a(95),R=a.n(A),I=Object(m.a)((function(e){return{header:{background:"#2874f0",height:55},logo:{width:75},subURL:{width:10,marginLeft:4,height:10},container:{display:"flex",justifyContent:"center",alignItems:"center"},component:{marginLeft:"12%",lineheight:0,textDecoration:"none",color:"white"},subheading:{fontSize:10,fontStyle:"italic"},list:{width:250},menuButton:Object(l.a)({display:"none"},e.breakpoints.down("sm"),{display:"block"}),customButtons:Object(l.a)({margin:"0 7% 0 auto"},e.breakpoints.down("sm"),{display:"none"})}})),L=function(){var e=I(),t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(h.a,{className:e.header,children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(u.a,{color:"inherit",className:e.menuButton,onClick:function(){r(!0)},children:Object(k.jsx)(R.a,{})}),Object(k.jsx)(j.a,{open:n,onClose:function(){r(!1)},children:Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(s.a,{className:e.list,children:Object(k.jsx)(d.a,{children:Object(k.jsx)(p.a,{children:Object(k.jsx)(E,{})})})})})}),Object(k.jsxs)(z.b,{to:"/",className:e.component,children:[Object(k.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png",alt:"flipkart logo",className:e.logo}),Object(k.jsxs)(s.a,{className:e.container,children:[Object(k.jsx)(b.a,{className:e.subheading,children:"Explore Plus"}),Object(k.jsx)("img",{src:"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png",alt:"logo",className:e.subURL})]})]}),Object(k.jsx)(y,{}),Object(k.jsx)("span",{className:e.customButtons,children:Object(k.jsx)(E,{})})]})})})},U=[{url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",text:"Top Offers"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",text:"Grocery"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",text:"Mobile"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",text:"Fashion"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",text:"Electronics"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",text:"Home"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",text:"Appliances"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",text:"Travel"},{url:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",text:"Beauty, Toys & More"}],D=Object(m.a)((function(e){return{navbarCenter:Object(l.a)({display:"flex",margin:"55px 0 0 0",justifyContent:"space-between",overflowX:"overlay"},e.breakpoints.down("md"),{margin:0}),navContainer:{textAlign:"center",padding:"12px 8px"},image:{width:64}}})),M=function(){var e=D();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(s.a,{className:e.navbarCenter,children:U.map((function(t){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(s.a,{className:e.navContainer,children:[Object(k.jsx)("img",{src:t.url,alt:"navbar item image",className:e.image}),Object(k.jsx)(b.a,{children:t.text})]})})}))})})},W=a(96),H=a.n(W),G=["https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50","https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50"],V=Object(m.a)((function(e){return{images:Object(l.a)({width:"100%",height:280},e.breakpoints.down("sm"),{objectFit:"cover",height:180})}})),J=function(){var e=V();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(H.a,{autoPlay:!0,animation:"slide",indicators:!1,navButtonsAlwaysVisible:!0,cycleNavigation:!0,children:G.map((function(t){return Object(k.jsx)("img",{src:t,className:e.images})}))})})},K=a(192),_=[{id:"product1",url:"https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",title:{shortTitle:"Home & Kitchen",longTitle:"Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)"},price:{mrp:1195,cost:625,discount:"47%"},description:"This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",discount:"Extra 10% Off",tagline:"Deal of the day"},{id:"product2",url:"https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",title:{shortTitle:"Sandwich Makers",longTitle:"Flipkart SmartBuy Sandwich 01 Grill  (Black)"},price:{mrp:1499,cost:899,discount:"40%"},description:"This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",discount:"From 99+5% Off",tagline:"Pestige, Nova & more"},{id:"product3",url:"https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",title:{shortTitle:"Fitness Gear",longTitle:"AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)"},price:{mrp:499,cost:166,discount:"66%"},description:"This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",discount:"Upto 70% Off",tagline:"Deal of the Day"},{id:"product4",url:"https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",title:{shortTitle:"Smart Watches",longTitle:"Molife Sense 500 Smartwatch  (Black Strap, Freesize)"},price:{mrp:6999,cost:4049,discount:"42%"},description:"The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",discount:"Grab Now",tagline:"Best Seller"},{id:"product5",url:"https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",title:{shortTitle:"Trimmers, Dryers & more",longTitle:"Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)"},price:{mrp:1899,cost:1124,discount:"40%"},description:"",discount:"From \u20b9499",tagline:"Kubra, Nova & more"},{id:"product6",url:"https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70",title:{shortTitle:"Table Fans",longTitle:"Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)"},price:{mrp:2250,cost:1199,discount:"46%"},description:'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',discount:"Minimum 40% Off",tagline:"Top Selling"},{id:"product7",url:"https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70",detailUrl:"https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70",title:{shortTitle:"Headphones",longTitle:"boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset "},price:{mrp:2990,cost:1199,discount:"59%"},description:"Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.",discount:"Minimum 50% Off",tagline:"Grab Now!"}],X=a(97),Q=a.n(X),Y=(a(150),{desktop:{breakpoint:{max:3e3,min:1024},items:5},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}}),Z=Object(m.a)({image:{height:150,padding:"15px 10px"}}),$=function(){var e=Z();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(s.a,{style:{background:"#ffffff"},children:Object(k.jsx)(Q.a,{responsive:Y,infinite:!0,draggable:!1,swipeable:!1,centerMode:!0,autoPlay:!0,autoPlaySpeed:1e4,keyBoardControl:!0,showDots:!1,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",containerClass:"carousel-container",children:_.map((function(t){return Object(k.jsxs)(s.a,{style:{textAlign:"center"},children:[Object(k.jsx)("img",{src:t.url,alt:"image",className:e.image}),Object(k.jsx)(b.a,{children:t.title.shortTitle}),Object(k.jsx)(b.a,{style:{color:"green"},children:t.discount}),Object(k.jsx)(b.a,{style:{color:"#212121",opacity:".6"},children:t.tagline})]})}))})})})},ee=["https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50","https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg","https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50"],te=a(191),ae=Object(m.a)({container:{display:"flex",marginTop:20,justifyContent:"space-between"}}),ie=function(){var e=ae();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(te.a,{lg:12,sm:12,md:12,xs:12,container:!0,className:e.container,children:ee.map((function(e){return Object(k.jsx)(te.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:Object(k.jsx)("img",{src:e,style:{width:"100%"}})})}))})})},ne=Object(m.a)((function(e){return{bannerCarousel:{padding:10,background:"#f2f2f2"},component:{display:"flex"},leftWraper:Object(l.a)({width:"80%"},e.breakpoints.down("sm"),{width:"100%"}),rightWraper:Object(l.a)({background:"#ffffff",padding:6,margin:"0 0 0 7px",width:"18%"},e.breakpoints.down("sm"),{display:"none"})}})),re=function(){var e=ne();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(M,{}),Object(k.jsxs)(s.a,{className:e.bannerCarousel,children:[Object(k.jsx)(J,{}),Object(k.jsxs)(s.a,{className:e.component,children:[Object(k.jsx)(s.a,{className:e.leftWraper,children:Object(k.jsx)($,{})}),Object(k.jsx)(s.a,{className:e.rightWraper,children:Object(k.jsx)("img",{src:"https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70",alt:"advertisement image",style:{width:188}})})]}),Object(k.jsx)(K.a,{}),Object(k.jsx)(ie,{}),Object(k.jsx)($,{}),Object(k.jsx)(K.a,{}),Object(k.jsx)(s.a,{children:Object(k.jsx)("img",{src:"https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50",alt:"covid image",style:{width:"100%",margin:"5px 0"}})})]})]})},ce=Object(m.a)({container:{margin:"0 80px",background:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"60vh",fontSize:"50px",color:"rgb(33, 33, 33)",opacity:.6}}),se=function(){var e=ce();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(s.a,{className:e.container,children:Object(k.jsx)(s.a,{children:"No Items Is Add On The Cart..."})})})},oe=a(11);var le=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(z.a,{children:[Object(k.jsx)(L,{}),Object(k.jsx)(s.a,{style:{marginTop:54},children:Object(k.jsxs)(oe.c,{children:[Object(k.jsx)(oe.a,{exact:!0,path:"/",component:re}),Object(k.jsx)(oe.a,{exact:!0,path:"/cart",component:se})]})})]})})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,197)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))};c.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(le,{})}),document.getElementById("root")),me()}},[[151,1,2]]]);
//# sourceMappingURL=main.866ea8a6.chunk.js.map