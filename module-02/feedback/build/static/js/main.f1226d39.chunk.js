(this["webpackJsonpreact-home"]=this["webpackJsonpreact-home"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(8),a=n.n(o),i=n(9),u=n(10),s=n(11),d=n(16),l=n(15),b=function(e){var t=e.children;return Object(r.jsx)("div",{className:"Layout",children:t})},j=n(2),h=n(3);function f(){var e=Object(j.a)(["\n  margin-bottom: 10px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]);return f=function(){return e},e}function O(){var e=Object(j.a)(["\n  margin: 20px 0;\n"]);return O=function(){return e},e}function g(){var e=Object(j.a)(["\n  /* display: flex; */\n"]);return g=function(){return e},e}function v(){var e=Object(j.a)(["\n  margin: 5px;\n  padding: 3px 7px;\n  font-weight: 700;\n  outline: none;\n  border: 1px solid grey;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n    background-color: rgba(170, 170, 170, 0.4);\n  }\n"]);return v=function(){return e},e}var x=h.a.button(v()),p=(h.a.div(g()),h.a.h2(O())),m=h.a.p(f());function k(e){var t=e.title,n=e.children;return Object(r.jsxs)("section",{children:[Object(r.jsx)(p,{children:t}),n]})}function y(e){var t=e.good,n=e.neutral,c=e.bad,o=e.total,a=e.positivePercentage;return console.log(t,n,c,o,a),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(m,{children:["Good: ",t]}),Object(r.jsxs)(m,{children:["Neutral: ",n]}),Object(r.jsxs)(m,{children:["Bad: ",c]}),Object(r.jsxs)(m,{children:["Total: ",o]}),Object(r.jsxs)(m,{children:["Positive feedback: ",a,"%"]})]})}function F(e){e.options;var t=e.onLeaveFeedback;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{type:"button",onClick:function(){return t("good")},children:"Good"}),Object(r.jsx)(x,{type:"button",onClick:function(){return t("neutral")},children:"Neutral"}),Object(r.jsx)(x,{type:"button",onClick:function(){return t("bad")},children:"Bad"})]})}function P(e){var t=e.message;return Object(r.jsx)("p",{children:t})}var w=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.hendleIncrement=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+=1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+=t}),0)},e.countPositiveFeedbackPercentage=function(){return 0!==e.state.good?Math.trunc(e.state.good/e.countTotalFeedback()*100):e.state.good},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,o=this.countTotalFeedback(),a=this.countPositiveFeedbackPercentage();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(b,{children:[Object(r.jsx)(k,{title:"Please leave feedback",children:Object(r.jsx)(F,{onLeaveFeedback:this.hendleIncrement})}),Object(r.jsx)(k,{title:"Statistics",children:0!==o?Object(r.jsx)(y,{good:t,neutral:n,bad:c,total:o,positivePercentage:a}):Object(r.jsx)(P,{message:"No feedback given"})})]})})}}]),n}(c.Component);n(24);a.a.render(Object(r.jsx)(w,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f1226d39.chunk.js.map