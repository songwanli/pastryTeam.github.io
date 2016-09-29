console.log("def:component_codeMirror"),define(["js/core","~/plugins/codemirror/lib/codemirror","~/plugins/codemirror/addon/search/jump-to-line","~/plugins/codemirror/addon/scroll/annotatescrollbar","~/plugins/codemirror/mode/meta","css!~/plugins/codemirror/lib/codemirror"],function(e,t){var i,r,o;return o=e.api,i=o.$,r=e.Component,r.CodeMirror=r.Base.extend({initialize:function(e){var r,o,n,s,a,c,d,l;this._super(e),n=this.el,r=this.$el,d={lineNumbers:"false"!==r.attr("data-line-numbers")},l=r.is("[data-search]"),l&&(d.extraKeys=_.defaults({},d.extraKeys,{"Alt-F":"findPersistent"}),require(["css!~/plugins/codemirror/addon/dialog/dialog.css","~/plugins/codemirror/addon/search/search"],function(){})),o=this.cm=t.fromTextArea(n,d),i(o.display.wrapper).css("height",r.height()),a=r.is("[data-match-highlighter]"),require(["~/plugins/codemirror/addon/search/match-highlighter"],function(){o.setOption("highlightSelectionMatches",{showToken:/\w/,annotateScrollbar:!0})}),c=r.attr("data-mode"),c&&this.setMode(c),s=r.attr("data-hint"),s&&this.setHint(s)},setMode:function(e){var t;t=this.cm,e?require(["~/plugins/codemirror/mode/"+e+"/"+e],function(){t.setOption("mode",e)}):t.setOption("mode",null)},setHint:function(e){var i,r,o,n;i=this.cm,r=function(e,i){return(!i||i())&&setTimeout(function(){return e.state.completionActive?void 0:e.showHint({completeSingle:!1})},100),t.Pass},o=function(e){return r(e,function(){var i;return i=e.getCursor(),"<"===e.getRange(t.Pos(i.line,i.ch-1),i)})},n=function(e){return r(e,function(){var i,r;return r=e.getTokenAt(e.getCursor()),"string"!==r.type||/['"]/.test(r.string.charAt(r.string.length-1))&&1!==r.string.length?(i=t.innerMode(e.getMode(),r.state).state,i.tagName):!1})},require(["css!~/plugins/codemirror/addon/hint/show-hint.css","~/plugins/codemirror/addon/hint/show-hint","~/plugins/codemirror/addon/hint/anyword-hint","~/plugins/codemirror/addon/hint/"+e+"-hint"],function(){i.addKeyMap({"Alt-/":"autocomplete","'<'":r,"'/'":o,"' '":n,"'='":n})})},clearHistory:function(){this.cm.doc.clearHistory()},setValue:function(e,i){var r,o;i&&(i.mode?this.setMode(i.mode):i.fileName&&(r=null!=(o=t.findModeByFileName(i.fileName))?o.mode:void 0,this.setMode(r))),this.cm.setValue(e),this.cm.clearHistory()},getValue:function(){return this.cm.getValue()},getSize:function(){return this.cm.doc.size}})});