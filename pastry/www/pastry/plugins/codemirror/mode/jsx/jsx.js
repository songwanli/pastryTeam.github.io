!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../javascript/javascript"],t):t(CodeMirror)}(function(t){"use strict";function e(t,e,n,r){this.state=t,this.mode=e,this.depth=n,this.prev=r}function n(r){return new e(t.copyState(r.mode,r.state),r.mode,r.depth,r.prev&&n(r.prev))}t.defineMode("jsx",function(r){function i(t){var e=t.tagName;t.tagName=null;var n=s.indent(t,"");return t.tagName=e,n}function o(t,e){return e.context.mode==s?a(t,e,e.context):c(t,e,e.context)}function a(n,a,c){if(2==c.depth)return n.match(/^.*?\*\//)?c.depth=1:n.skipToEnd(),"comment";if("{"==n.peek()){s.skipAttribute(c.state);var d=i(c.state),p=c.state.context;if(p&&n.match(/^[^>]*>\s*$/,!1)){for(;p.prev&&!p.startOfLine;)p=p.prev;p.startOfLine?d-=r.indentUnit:c.prev.state.lexical&&(d=c.prev.state.lexical.indented)}else 1==c.depth&&(d+=r.indentUnit);return a.context=new e(t.startState(u,d),u,0,a.context),null}if(1==c.depth){if("<"==n.peek())return s.skipAttribute(c.state),a.context=new e(t.startState(s,i(c.state)),s,0,a.context),null;if(n.match("//"))return n.skipToEnd(),"comment";if(n.match("/*"))return c.depth=2,o(n,a)}var x=s.token(n,c.state),f=n.current(),l;return/\btag\b/.test(x)?/>$/.test(f)?c.state.context?c.depth=0:a.context=a.context.prev:/^</.test(f)&&(c.depth=1):!x&&(l=f.indexOf("{"))>-1&&n.backUp(f.length-l),x}function c(n,r,i){if("<"==n.peek()&&u.expressionAllowed(n,i.state))return u.skipExpression(i.state),r.context=new e(t.startState(s,u.indent(i.state,"")),s,0,r.context),null;var o=u.token(n,i.state);if(!o&&null!=i.depth){var a=n.current();"{"==a?i.depth++:"}"==a&&0==--i.depth&&(r.context=r.context.prev)}return o}var s=t.getMode(r,{name:"xml",allowMissing:!0,multilineTagIndentPastTag:!1}),u=t.getMode(r,"javascript");return{startState:function(){return{context:new e(t.startState(u),u)}},copyState:function(t){return{context:n(t.context)}},token:o,indent:function(t,e,n){return t.context.mode.indent(t.context.state,e,n)},innerMode:function(t){return t.context}}},"xml","javascript"),t.defineMIME("text/jsx","jsx")});