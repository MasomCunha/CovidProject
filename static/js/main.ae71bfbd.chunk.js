(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{223:function(e,t,a){e.exports=a(440)},228:function(e,t,a){},229:function(e,t,a){},437:function(e,t,a){},438:function(e,t,a){},440:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(50),c=a.n(l),o=(a(228),a(24)),s=a(25),u=a(28),i=a(27),m=(a(229),a(54)),d=a.n(m),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://disease.sh/v2/countries/").then((function(t){e.props.addData(t)})),d.a.get("https://disease.sh/v2/historical/all").then((function(t){e.props.addGlobalData(t)}))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null)}}]),a}(n.Component),E=a(452),h=a(450),f=a(451),p=a(443),g=a(444),b=a(445),v=a(184),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={content:"",suggestions:[]},e.countryData=function(){var t=[];return null!==e.props.data&&e.props.data.map((function(e){t.push(e.country)})),console.log(t),t},e.onTextChange=function(t){var a=t.target.value,n=[];if(a.length>0){var r=new RegExp("^".concat(a),"i");n=e.countryData().sort().filter((function(e){return r.test(e)}))}e.setState((function(){return{suggestions:n,content:a}}))},e.renderSuggestions=function(){var t=e.state.suggestions;return 0===t.length?null:r.a.createElement("ul",null,t.map((function(t,a){return r.a.createElement("p",{style:{cursor:"pointer"},key:a,onClick:function(){return e.selectedText(t)}},t)})))},e.handleClick=function(t){t.preventDefault(),e.props.addCountry(e.state.content),e.props.changeList(!1),e.setState({content:""})},e}return Object(s.a)(a,[{key:"selectedText",value:function(e){this.setState((function(){return{content:e,suggestions:[]}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{style:{width:"370px"}},r.a.createElement(g.a,{placeholder:"insert country",onChange:this.onTextChange,value:this.state.content}),r.a.createElement(b.a,{addonType:"append"},r.a.createElement(v.a,{style:{cursor:"pointer"},onClick:this.handleClick},"search"))),this.renderSuggestions())}}]),a}(n.Component),C=a(446),x=a(447),O=a(448),w=a(455),D=a(453),I=a(456),j=a(449),A=function(e){var t=e.changeRequest,a=e.changeList,n=e.sortType;return r.a.createElement("div",null,r.a.createElement(C.a,{tabs:!0},r.a.createElement(x.a,{style:{cursor:"pointer",background:"#ff9933"},onClick:function(){a(!0)}},r.a.createElement(O.a,null,"All")),r.a.createElement(x.a,{style:{cursor:"pointer",background:"yellow"},onClick:function(){t("cases")}},r.a.createElement(O.a,null,"Cases")),r.a.createElement(x.a,{style:{cursor:"pointer",background:"red"},onClick:function(){t("deaths")}},r.a.createElement(O.a,null,"Deaths")),r.a.createElement(x.a,{style:{cursor:"pointer",background:"green"},onClick:function(){t("recovered")}},r.a.createElement(O.a,null,"Recovered")),r.a.createElement(w.a,{nav:!0,inNavbar:!0},r.a.createElement(D.a,{nav:!0,caret:!0,style:{background:"#654de5",color:"black"}},"Sort"),r.a.createElement(I.a,{right:!0},r.a.createElement(j.a,{onClick:function(){n("Largest")}},"Descending"),r.a.createElement(j.a,{onClick:function(){n("Smallest")}},"Ascending")))))},S=a(35),M=function(e){var t=e.request,a=e.data,n=e.input,l=e.list,c=e.sortType;"Largest"!==c||"cases"!==t&&null!==t||(a?a.sort((function(e,t){return e.cases<t.cases?1:-1})):console.log("no data")),"Smallest"!==c||"cases"!==t&&null!==t||(a?a.sort((function(e,t){return e.cases>t.cases?1:-1})):console.log("no data")),"Largest"===c&&"deaths"===t&&(a?a.sort((function(e,t){return e.deaths<t.deaths?1:-1})):console.log("no data")),"Smallest"===c&&"deaths"===t&&(a?a.sort((function(e,t){return e.deaths>t.deaths?1:-1})):console.log("no data")),"Largest"===c&&"recovered"===t&&(a?a.sort((function(e,t){return e.recovered<t.recovered?1:-1})):console.log("no data")),"Smallest"===c&&"recovered"===t&&(a?a.sort((function(e,t){return e.recovered>t.recovered?1:-1})):console.log("no data"));return r.a.createElement(E.a,{style:{height:"400px",overflowY:"scroll",background:"#617069"}},!0===l?"cases"===t||null===t?r.a.createElement("div",null,a?a.map((function(e){return r.a.createElement(S.b,{to:"/country/".concat(e.country)},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",background:"yellow",textAlign:"center"}}," ",e.cases," ")),r.a.createElement(f.a,null,r.a.createElement("p",{style:{textAlign:"center"},key:e.country},r.a.createElement("img",{src:e.countryInfo.flag,width:"50",alt:e.country}))),r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black"}},e.country))))})):console.log("can\xb4t find any data")):"deaths"===t?r.a.createElement("div",null,a?a.map((function(e){return r.a.createElement(S.b,{to:"/country/".concat(e.country)},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",background:"red",textAlign:"center"}}," ",e.deaths," ")),r.a.createElement(f.a,null,r.a.createElement("p",{style:{textAlign:"center"},key:e.country},r.a.createElement("img",{src:e.countryInfo.flag,width:"50",alt:e.country}))),r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black"}},e.country))))})):console.log("can\xb4t find any data")):"recovered"===t?r.a.createElement("div",null,a?a.map((function(e){return r.a.createElement(S.b,{to:"/country/".concat(e.country)},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",background:"green",textAlign:"center"}}," ",e.recovered," ")),r.a.createElement(f.a,null,r.a.createElement("p",{style:{textAlign:"center"},key:e.country},r.a.createElement("img",{src:e.countryInfo.flag,width:"50",alt:e.country}))),r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black"}},e.country))))})):console.log("can\xb4t find any data")):void 0:"cases"===t||null===t?r.a.createElement("div",null,a.map((function(e){return e.country!==n||r.a.createElement(S.b,{to:"/country/".concat(e.country)},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",background:"yellow",textAlign:"center"}}," ",e.cases," ")),r.a.createElement(f.a,null,r.a.createElement("p",{style:{textAlign:"center"},key:e.country},r.a.createElement("img",{src:e.countryInfo.flag,width:"50",alt:e.country}))),r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black"}},e.country))))}))):"deaths"===t?r.a.createElement("div",null,a.map((function(e){return e.country!==n||r.a.createElement(S.b,{to:"/country/".concat(e.country)},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",background:"red",textAlign:"center"}}," ",e.deaths," ")),r.a.createElement(f.a,null,r.a.createElement("p",{style:{textAlign:"center"},key:e.country},r.a.createElement("img",{src:e.countryInfo.flag,width:"50",alt:e.country}))),r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black"}},e.country))))}))):"recovered"===t?r.a.createElement("div",null,a.map((function(e){return e.country!==n||r.a.createElement(S.b,{to:"/country/".concat(e.country)},r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",background:"green",textAlign:"center"}}," ",e.recovered," ")),r.a.createElement(f.a,null,r.a.createElement("p",{style:{color:"black",textAlign:"center"},key:e.country},r.a.createElement("img",{src:e.countryInfo.flag,width:"50",alt:e.country})))))}))):void 0)},T=a(16),F=function(e){var t=e.globalData,a=e.request,l=[];if(null!==t){for(var c=Object.entries(t.cases),o=Object.entries(t.deaths),s=Object.entries(t.recovered),u=0;u<c.length;u++){var i={};i.name=c[u][0],i.cases=c[u][1],i.deaths=o[u][1],i.recovered=s[u][1],l.push(i)}for(var m=0;m<l.length;m++){var d=l[m].name.split("/");switch(d[0]){case"1":l[m].name="Jan/"+d[1];break;case"2":l[m].name="Fev/"+d[1];break;case"3":l[m].name="Mar/"+d[1];break;case"4":l[m].name="Apr/"+d[1];break;case"5":l[m].name="May/"+d[1];break;case"6":l[m].name="Jun/"+d[1];break;case"7":l[m].name="Jul/"+d[1];break;case"8":l[m].name="Aug/"+d[1];break;case"9":l[m].name="Sep/"+d[1];break;case"10":l[m].name="Out/"+d[1];break;case"11":l[m].name="Nov/"+d[1];break;case"12":l[m].name="Dec/"+d[1];break;default:console.log("wrong month")}}}return r.a.createElement("div",null,t?r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"Grafic title",style:{fontSize:"20px"}},"Covid world evolution since ",l[0].name),r.a.createElement(T.b,{width:600,height:300,data:l},r.a.createElement(T.h,{dataKey:"name",interval:2,stroke:"black"}),r.a.createElement(T.i,{tickFormatter:function(e){return new Intl.NumberFormat("ru-RU",{style:"decimal"}).format(e/1e3)+"K"},stroke:"black"}),r.a.createElement(T.c,{stroke:"#eee",strokeDasharray:"5 5"}),r.a.createElement(T.g,null),r.a.createElement(T.d,null),"cases"===a||null===a?r.a.createElement(T.a,{type:"monotone",dataKey:"cases",stroke:"#ffcc00",fill:"#ffcc00"}):"deaths"===a?r.a.createElement(T.a,{type:"monotone",dataKey:"deaths",stroke:"#ff0000",fill:"#ff0000"}):"recovered"===a?r.a.createElement(T.a,{type:"monotone",dataKey:"recovered",stroke:"#33cc33",fill:"#33cc33"}):void 0)):r.a.createElement("h1",null,"Loading..."))},q=a(457),L=a(458),N=a(454),z=a(459);a(437);var K=function(e){var t=e.request,a=e.data,n=(e.input,e.list,function(){return"cases"===t||null===t?"yellow":"deaths"===t?"red":"recovered"===t?"green":void 0}),l=function(e){return"cases"===t||null===t?e.cases:"deaths"===t?e.deaths:"recovered"===t?e.recovered:void 0};return r.a.createElement(q.a,{center:[41.56,-8.39],zoom:2},r.a.createElement(L.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a?a.map((function(e){return r.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillColor:n(),radius:l(e),color:n()},r.a.createElement(z.a,null,"country: "+e.country,r.a.createElement("br",null),"cases: "+e.cases,r.a.createElement("br",null),"deaths: "+e.deaths,r.a.createElement("br",null),"recovered: "+e.recovered))})):console.log("no data"))},R=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:null,globalData:null,request:null,input:"",list:!0,sortType:""},e.addData=function(t){e.setState({data:t.data})},e.addGlobalData=function(t){e.setState({globalData:t.data})},e.changeRequest=function(t){e.setState({request:t})},e.addCountry=function(t){e.setState({input:t})},e.changeList=function(t){e.setState({list:t})},e.sortType=function(t){e.setState({sortType:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"InfoCovid"),r.a.createElement("br",null),r.a.createElement(E.a,null,r.a.createElement(h.a,{xs:"1",sm:"1",md:"2"},r.a.createElement(f.a,{xs:{size:12},sm:{size:12},md:{size:5}},r.a.createElement(k,{data:this.state.data,addCountry:this.addCountry,changeList:this.changeList}),r.a.createElement("br",null),r.a.createElement(A,{changeRequest:this.changeRequest,changeList:this.changeList,sortType:this.sortType}),r.a.createElement(y,{addData:this.addData,addGlobalData:this.addGlobalData}),r.a.createElement(M,{data:this.state.data,request:this.state.request,input:this.state.input,list:this.state.list,sortType:this.state.sortType})),r.a.createElement(f.a,{xs:{size:12},sm:{size:12},md:{size:7}},r.a.createElement(K,{data:this.state.data,request:this.state.request,list:this.state.list,input:this.state.input}),r.a.createElement("br",null),r.a.createElement(F,{globalData:this.state.globalData,request:this.state.request})))))}}]),a}(n.Component),J=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.country),d.a.get("https://disease.sh/v2/countries/"+"".concat(this.props.country)).then((function(t){e.props.addCountryInfo(t)})),d.a.get("https://disease.sh/v2/historical/"+"".concat(this.props.country)).then((function(t){e.props.addCountryCases(t.data)}))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null)}}]),a}(n.Component),G=function(e){var t=e.countryInfo;return r.a.createElement("div",null," ",t?r.a.createElement(n.Fragment,null,r.a.createElement("p",{style:{textAlign:"center",fontSize:"50px",fontFamily:"'Anton', sans-serif",color:"#1b2d24"}},t.data.country),r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("img",{src:t.data.countryInfo.flag,width:"200px",alt:t.data.country}))):r.a.createElement("h1",null,"Loading..."))},P=function(e){var t=e.countryCases,a=[];if(null!==t){for(var l=Object.entries(t.timeline.cases),c=Object.entries(t.timeline.deaths),o=Object.entries(t.timeline.recovered),s=0;s<l.length;s++){var u={};u.name=l[s][0],u.cases=l[s][1],u.deaths=c[s][1],u.recovered=o[s][1],a.push(u)}for(var i=0;i<a.length;i++){var m=a[i].name.split("/");switch(m[0]){case"1":a[i].name="Jan/"+m[1];break;case"2":a[i].name="Fev/"+m[1];break;case"3":a[i].name="Mar/"+m[1];break;case"4":a[i].name="Apr/"+m[1];break;case"5":a[i].name="May/"+m[1];break;case"6":a[i].name="Jun/"+m[1];break;case"7":a[i].name="Jul/"+m[1];break;case"8":a[i].name="Aug/"+m[1];break;case"9":a[i].name="Sep/"+m[1];break;case"10":a[i].name="Out/"+m[1];break;case"11":a[i].name="Nov/"+m[1];break;case"12":a[i].name="Dec/"+m[1];break;default:console.log("wrong month")}}}return r.a.createElement("div",null,t?r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"Grafic title",style:{fontSize:"20px"}},"Covid evolution since ",a[0].name),r.a.createElement(T.f,{width:730,height:300,data:a},r.a.createElement(T.h,{dataKey:"name",interval:2,stroke:"black"}),r.a.createElement(T.i,{stroke:"black",tickFormatter:function(e){return(new Intl.NumberFormat).format(e/1e3)+"K"}}),r.a.createElement(T.c,{stroke:"#eee",strokeDasharray:"5 5"}),r.a.createElement(T.g,null),r.a.createElement(T.d,null),r.a.createElement(T.e,{type:"monotone",dataKey:"cases",stroke:"#ffcc00"}),r.a.createElement(T.e,{type:"monotone",dataKey:"deaths",stroke:"#ff0000"}),r.a.createElement(T.e,{type:"monotone",dataKey:"recovered",stroke:"#33cc33"}))):r.a.createElement("h1",null,"There is no Information"))},Y=function(e){var t=e.countryInfo;return r.a.createElement(E.a,null,r.a.createElement(h.a,{xs:"1",md:"2"},r.a.createElement(f.a,null,function(){if(t)return console.log(t.data),r.a.createElement(n.Fragment,null,r.a.createElement("h1",{style:{color:"#1b2d24"}}," ",function(){var e=new Date;return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()}()),r.a.createElement("p",{style:{color:"yellow"}},"Cases: ",t.data.todayCases),r.a.createElement("p",{style:{color:"red"}},"Deaths: ",t.data.todayDeaths),r.a.createElement("p",{style:{color:"green"}},"Recovered: ",t.data.todayRecovered),r.a.createElement("p",{style:{color:"blue"}},"Tests: ",t.data.tests))}()),r.a.createElement(f.a,null,function(){if(t)return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{style:{color:"#1b2d24"}},"Per 1 Million"),r.a.createElement("p",{style:{color:"yellow"}},"Cases per 1 Million: ",t.data.casesPerOneMillion),r.a.createElement("p",{style:{color:"red"}},"Deaths per 1 Million: ",t.data.deathsPerOneMillion),r.a.createElement("p",{style:{color:"green"}},"Recovered per 1 Million: ",t.data.recoveredPerOneMillion),r.a.createElement("p",{style:{color:"blue"}},"Tests per 1 Million: ",t.data.testsPerOneMillion))}())))},B=(a(438),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={country:e.props.match.params.country,countryInfo:null,countryCases:null},e.addCountryInfo=function(t){e.setState({countryInfo:t})},e.addCountryCases=function(t){e.setState({countryCases:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(E.a,null,r.a.createElement(J,{country:this.state.country,addCountryCases:this.addCountryCases,addCountryInfo:this.addCountryInfo}),r.a.createElement(h.a,{xs:"1",md:"2"},r.a.createElement(f.a,{className:"FlagAndName"},r.a.createElement(G,{countryInfo:this.state.countryInfo})),r.a.createElement(f.a,{className:"Information"},r.a.createElement(Y,{countryInfo:this.state.countryInfo,countryCases:this.state.countryCases}))),r.a.createElement("br",null),r.a.createElement(h.a,{xs:"1"},r.a.createElement(f.a,{className:"Map"},r.a.createElement(P,{countryCases:this.state.countryCases})))))}}]),a}(n.Component)),U=a(15);var H=function(){return r.a.createElement("div",{className:"App",style:{"background-color":"#a3b6ad"}},r.a.createElement(S.a,null,r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/",exact:!0,component:R}),r.a.createElement(U.a,{path:"/country/:country",component:B}))))};a(439);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.ae71bfbd.chunk.js.map