(this["webpackJsonpweather-api"]=this["webpackJsonpweather-api"]||[]).push([[0],{174:function(e,t,n){e.exports=n(396)},179:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),o=n.n(c),l=(n(179),n(41)),i=n(102),u={UPDATE_WEATHER_REQUEST:"@user/UPDATE_WEATHER_REQUEST",UPDATE_WEATHER_SUCCESS:"@user/UPDATE_WEATHER_SUCCESS",UPDATE_WEATHER_FAILURE:"@user/UPDATE_WEATHER_FAILURE"};var s=n(39),p=n(40);function E(){var e=Object(s.a)(["\n  margin: 20px;\n\n  form {\n    max-width: 768px;\n    margin: 0px auto;\n\n    input {\n      padding: 24px 20px;\n    }\n\n    button {\n      padding-top: 12px;\n      padding-bottom: 12px;\n    }\n  }\n\n  .alert {\n    max-width: 768px;\n    margin: 0px auto;\n  }\n"]);return E=function(){return e},e}var m=p.b.div(E());function d(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),p=s[0],E=s[1],d=Object(l.b)();return r.a.createElement(m,null,r.a.createElement("form",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Get a five-day forecast in your favorite cities",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary",onClick:function(e){var t;e.preventDefault(),n&&(d((t=n,{type:u.UPDATE_WEATHER_REQUEST,payload:{city:t}})),c(""),E("")),""===n&&E("Write city name")}},"Submit"))),p?r.a.createElement("div",{className:"alert alert-danger"},p):null)}var b=n(49),f=n.n(b),h=n(71);function v(e){return r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement(h.Sparklines,{height:120,width:180,data:e.data},r.a.createElement(h.SparklinesLine,{color:e.color}),r.a.createElement(h.SparklinesReferenceLine,{type:"avg"})),r.a.createElement("div",null,(t=e.data,f.a.round(f.a.sum(t)/t.length))," ",e.units)));var t}n(72);function y(){var e=Object(s.a)(["\n  td,\n  th {\n    vertical-align: middle !important;\n    text-align: center !important;\n  }\n\n  td:first-of-type,\n  td:first-of-type > div {\n    height: 200px;\n    width: 250px;\n  }\n"]);return y=function(){return e},e}var g=p.b.table(y());function T(){var e=Object(l.c)((function(e){return e.weathers}));return void 0!==e&&e.length>0?r.a.createElement(g,{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Temperature (C)"),r.a.createElement("th",null,"Pressure (hPa)"),r.a.createElement("th",null,"Humidity (%)"))),r.a.createElement("tbody",null,e.map((function(e){var t=f.a.map(e.list.map((function(e){return e.main.temp})),(function(e){return e-273.15})),n=e.list.map((function(e){return e.main.pressure})),a=e.list.map((function(e){return e.main.humidity})),c=e.city.coord;c.lon,c.lat;return r.a.createElement("tr",{key:e.city.id},r.a.createElement("td",null,e.city.name),r.a.createElement(v,{data:t,color:"orange",units:"C"}),r.a.createElement(v,{data:n,color:"green",units:"hPa"}),r.a.createElement(v,{data:a,color:"black",units:"%"}))})))):null}var A=n(171),x=n(70),U=n(21),R=[];var _=Object(U.c)({weathers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.UPDATE_WEATHER_SUCCESS:return[t.payload.weather].concat(Object(x.a)(e));case u.UPDATE_WEATHER_FAILURE:return t.payload.err;default:return e}}}),S=n(43),j=n.n(S),O=n(26),w=n(170),P="66a80829085f138206554340f458199f",C=n.n(w).a.create({baseURL:"http://api.openweathermap.org/data/2.5"}),D=j.a.mark(H);function H(e){var t,n,a;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,n=t.city,r.next=5,Object(O.b)(C.get,"forecast?appid=".concat(P,"&q=").concat(n,",nz"));case 5:return a=r.sent,r.next=8,Object(O.c)((o=a.data,{type:u.UPDATE_WEATHER_SUCCESS,payload:{weather:o}}));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(O.c)((c=r.t0,{type:u.UPDATE_WEATHER_FAILURE,payload:{err:c}}));case 14:case"end":return r.stop()}var c,o}),D,null,[[1,10]])}var W=Object(O.a)([Object(O.d)(u.UPDATE_WEATHER_REQUEST,H)]),k=j.a.mark(L);function L(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)([W]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),k)}var N=Object(A.a)({}),I=function(e,t){var n=U.a.apply(void 0,Object(x.a)(t));return Object(U.e)(e,n)}(_,[N]);N.run(L);n(395);function F(){var e=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n  *:focus {\n    outline: 0;\n  }\n  html, body, #root {\n    height: 100%;\n  }\n  body {\n    -webkit-font-smoothing: antialiased;\n  }\n  body, input, button {\n    font: 14px 'Roboto', sans-serif;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    list-style: none;\n  }\n  button {\n    cursor: pointer;\n  }\n"]);return F=function(){return e},e}var Q=Object(p.a)(F());var z=function(){return r.a.createElement(l.a,{store:I},r.a.createElement(d,null),r.a.createElement(Q,null),r.a.createElement(T,null))};o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.3b58d71b.chunk.js.map