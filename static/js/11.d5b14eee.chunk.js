(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[11],{492:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p={tag:d.e,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.c)(u()(a,"input-group-text"),t);return r.a.createElement(o,Object(n.a)({},c,{className:l}))};f.propTypes=p,f.defaultProps={tag:"span"},a.a=f},498:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.e,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var n=e[a];if(delete p[a],n){var s=!t;f.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var m=Object(d.c)(u()(a,o?"no-gutters":null,l?"form-row":"row",f),t);return r.a.createElement(c,Object(n.a)({},p,{className:m}))};b.propTypes=f,b.defaultProps=m,a.a=b},499:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),m={tag:d.e,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var o=!n;if(Object(d.a)(s)){var r,c=o?"-":"-"+a+"-",p=g(o,a,s.size);i.push(Object(d.c)(u()(((r={})[p]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var f=g(o,a,s);i.push(f)}}})),i.length||i.push("col");var p=Object(d.c)(u()(a,i),t);return r.a.createElement(c,Object(n.a)({},l,{className:p}))};h.propTypes=m,h.defaultProps=b,a.a=h},504:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p={tag:d.e,size:l.a.string,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=e.size,l=Object(s.a)(e,["className","cssModule","tag","size"]),i=Object(d.c)(u()(a,"input-group",c?"input-group-"+c:null),t);return r.a.createElement(o,Object(n.a)({},l,{className:i}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},505:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p=t(492),f={tag:d.e,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=e.addonType,l=e.children,i=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(d.c)(u()(a,"input-group-"+c),t);return"string"===typeof l?r.a.createElement(o,Object(n.a)({},i,{className:f}),r.a.createElement(p.a,{children:l})):r.a.createElement(o,Object(n.a)({},i,{className:f,children:l}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},506:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(489),r=t(30),c=t(2),l=t.n(c),i=t(61),u=t.n(i),d=t(487),p=t.n(d),f=t(488),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,d=e.addon,m=e.plaintext,b=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),y="form-control";m?(y+="-plaintext",j=u||"input"):"file"===o?y+="-file":"range"===o?y+="-range":h&&(y=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.f)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var O=Object(f.c)(p()(a,i&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,y),t);return("input"===j||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(f.f)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(j,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":i}))},a}(l.a.Component);b.propTypes=m,b.defaultProps={type:"text"},a.a=b},507:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(489),r=t(30),c=t(2),l=t.n(c),i=t(61),u=t.n(i),d=t(487),p=t.n(d),f=t(488),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,c=e.close,i=e.cssModule,u=e.color,d=e.outline,m=e.size,b=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,j=Object(f.c)(p()(r,{close:c},c||"btn",c||v,!!m&&"btn-"+m,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var y=c?"Close":null;return l.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:j,ref:g,onClick:this.onClick,"aria-label":t||y}))},a}(l.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},a.a=b},516:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p={tag:d.e,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,l=e.inverse,i=e.outline,p=e.tag,f=e.innerRef,m=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.c)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(i?"border":"bg")+"-"+o),t);return r.a.createElement(p,Object(n.a)({},m,{className:b,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},517:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(2),r=t.n(o),c=t(61),l=t.n(c),i=t(487),u=t.n(i),d=t(488),p={tag:d.e,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.c)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},l,{className:i,ref:o}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},518:function(e,a,t){"use strict";var n=t(19),s=t(49),o=t(489),r=t(30),c=t(2),l=t.n(c),i=t(61),u=t.n(i),d=t(487),p=t.n(d),f=t(488),m={children:u.a.node,inline:u.a.bool,tag:f.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,r=e.tag,c=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(f.c)(p()(a,!!o&&"form-inline"),t);return l.a.createElement(r,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=m,b.defaultProps={tag:"form"},a.a=b},614:function(e,a,t){"use strict";t.r(a);var n=t(151),s=t(152),o=t(154),r=t(153),c=t(2),l=t.n(c),i=t(498),u=t(499),d=t(516),p=t(517),f=t(518),m=t(504),b=t(505),g=t(492),h=t(506),v=t(507),j=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).loading=function(){return l.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},s.showModal=function(e){return function(a){var t="http://localhost:4000/api/topic/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){console.log("posts",e)}))}},s.state={posts:[]},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:4000/api/topic",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({posts:a.data.tours})}))}},{key:"render",value:function(){var e=this.state.posts;return console.log("data",e),l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(i.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{style:{width:"91%",marginLeft:"6%"}},l.a.createElement(p.a,null,l.a.createElement(f.a,{style:{width:"40%",marginLeft:"30%",backgroundColor:"blue",borderRadius:"2%"}},l.a.createElement("h1",{style:{marginLeft:"2%",color:"white",textAlign:"center",padding:"10px"}},"User Login"),l.a.createElement("h5",{style:{marginLeft:"2%",color:"white"}},"Reference No."),l.a.createElement(m.a,{className:"mb-3",style:{padding:"2%"}},l.a.createElement(b.a,{addonType:"prepend"},l.a.createElement(g.a,null,l.a.createElement("i",{className:"icon-user"}))),l.a.createElement(h.a,{type:"text",placeholder:"Username",autoComplete:"username"})),l.a.createElement("h5",{style:{marginLeft:"2%",color:"white"}},"Mobile No."),l.a.createElement(m.a,{className:"mb-3",style:{padding:"2%"}},l.a.createElement(b.a,{addonType:"prepend"},l.a.createElement(g.a,null,l.a.createElement("i",{className:"icon-user"}))),l.a.createElement(h.a,{type:"text",placeholder:"Number"})),l.a.createElement(m.a,{className:"mb-3",style:{padding:"2%",height:"25%"}},l.a.createElement(b.a,{addonType:"prepend"}),l.a.createElement(d.a,{style:{width:"100%"}},l.a.createElement(p.a,null,l.a.createElement("label",{style:{color:"#4CAF50",marginLeft:"40%",fontSize:"24px"}},"ABCD")))),l.a.createElement("h5",{style:{marginLeft:"2%",color:"white"}},"Enter Code Shown:"),l.a.createElement(m.a,{className:"mb-4",style:{padding:"2%"}},l.a.createElement(b.a,{addonType:"prepend"},l.a.createElement(g.a,null,l.a.createElement("i",{className:"icon-lock"}))),l.a.createElement(h.a,{type:"text"})),l.a.createElement(v.a,{color:"success",block:!0},"Login")))))))}}]),t}(c.Component);a.default=j}}]);
//# sourceMappingURL=11.d5b14eee.chunk.js.map