console.log("def:debug_start_param"),define(["js/api","~/debug/titlebar_menu"],function(a,r){var e,n;return n=void 0,e=window.framework_ready,window.framework_ready=function(a){n=a,e.apply(this,arguments)},r.addMenu({id:"showStartParam",title:"P",callback:function(){return alert(JSON.stringify(n,null,"  "))}})});