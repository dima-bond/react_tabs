(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=(n(13),n(3)),i=n(4),s=n(7),u=n(6),b=n(5),m=n.n(b),f=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:"Tab 1"},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.selectedTab,n=this.props.tabs,a=n.find((function(t){return t.title===e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tab"},n.map((function(n){return c.a.createElement("button",{className:m()({active:n.title===e}),key:n.title,type:"button",onClick:function(){t.onTabSelected(n.title)}},n.title)}))),c.a.createElement("div",{className:"tab__content"},a.content))}}]),n}(c.a.Component),p=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],d=function(){return c.a.createElement(f,{tabs:p})};o.a.render(c.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8fa6c968.chunk.js.map