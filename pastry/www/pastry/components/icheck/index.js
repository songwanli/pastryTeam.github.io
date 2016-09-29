console.log("def:component_icheck"),define(["js/core","~/plugins/icheck/icheck","css!~/plugins/icheck/bootstrap-icheck.css"],function(e){var t,i,s,n,a,l,c;return i=e.CONST,l=e.api,s=e.Component,a=e.Template,n=e.DependencyManager,t=l.$,c=[],s.ICheck=s.Base.extend({initialize:function(s){var n,h,o;_.defaults(this,{isValueGroup:!0}),s.model=s.model||new e.Model.Simple,this._super.apply(this,arguments),h=this.model,h.mapping.value=l.getTypeVal("String",h.mapping.name,"value"),n={checkboxClass:l.getTypeVal("String",s.checkboxClass,"icheckbox_square-blue"),radioClass:l.getTypeVal("String",s.radioClass,"iradio_square-blue"),increaseArea:l.getTypeVal("String",s.increaseArea,"20%"),hoverClass:window.hasOwnProperty("ontouchstart")||document.hasOwnProperty("ontouchstart")?" ":""},this.$el.attr("name",this.$el.data("name")),o=this,this.text=t("<label for='"+this.id+"' style='display:inline'></label>"),this.text.insertAfter(this.$el),this.textTemplate=a.obtainTemplate(this.$el.data("text-template")||"CheckBox"),this.iCheck=this.$el.iCheck(n),i.IE_FLAG&&(this.$el.parent().css({position:"absolute"}),this.$el.parent().parent().find("label").css({display:"inline","margin-left":this.$el.width()+"px"})),this.iCheck.on("ifChanged",function(){var e,t;e=o.isSelect(),t=void 0,e?(t=o.$el.val(),h.setValue(t)):(o.$el.val(h.getValue()),h.clear()),_.isFunction(o.onChange)&&o.onChange({isSelected:e,value:t}),c.push(this.id),o.calcDependencyByChangeIdsArr()}),_.isUndefined(this.getValue())&&(this.iCheck.is(":checked")?h.setValue(o.$el.val(),{silent:!0}):h.clear({silent:!0}))},doRender:function(){var e;return this.iCheck.iCheck(_.isUndefined(this.getValue())?"uncheck":"check"),e=this.model?this.model.toJSON():{},e.isSelected=this.isSelect(),this.text.html(this.textTemplate(e)),!0},setSelect:function(e){this.iCheck.iCheck(e?"check":"uncheck")},isSelect:function(){return this.iCheck.is(":checked")},isReady:function(){var e,t;return e={},e[this.model.mapping.value]=this.getValue(),t=this.model.validate(e),null===t},calcDependencyByChangeIdsArr:_.debounce(function(){n.calcDependency(c),c=[]},200)})});