!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("htmlhint")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","htmlhint"],e):e(CodeMirror)}(function(e){"use strict";var t={"tagname-lowercase":!0,"attr-lowercase":!0,"attr-value-double-quotes":!0,"doctype-first":!1,"tag-pair":!0,"spec-char-escape":!0,"id-unique":!0,"src-not-empty":!0,"attr-no-duplication":!0};e.registerHelper("lint","html",function(r,i){var o=[];if(!window.HTMLHint)return o;for(var n=HTMLHint.verify(r,i&&i.rules||t),a=0;a<n.length;a++){var s=n[a],c=s.line-1,l=s.line-1,u=s.col-1,f=s.col;o.push({from:e.Pos(c,u),to:e.Pos(l,f),message:s.message,severity:s.type})}return o})});