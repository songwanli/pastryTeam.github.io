!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function r(e){for(var r=e.display.lineSpace.childNodes.length-1;r>=0;r--){var o=e.display.lineSpace.childNodes[r];/(^|\s)CodeMirror-ruler($|\s)/.test(o.className)&&o.parentNode.removeChild(o)}}function o(r){for(var o=r.getOption("rulers"),t=r.defaultCharWidth(),i=r.charCoords(e.Pos(r.firstLine(),0),"div").left,l=r.display.scroller.offsetHeight+30,s=0;s<o.length;s++){var n=document.createElement("div");n.className="CodeMirror-ruler";var d,c=o[s];"number"==typeof c?d=c:(d=c.column,c.className&&(n.className+=" "+c.className),c.color&&(n.style.borderColor=c.color),c.lineStyle&&(n.style.borderLeftStyle=c.lineStyle),c.width&&(n.style.borderLeftWidth=c.width)),n.style.left=i+d*t+"px",n.style.top="-50px",n.style.bottom="-20px",n.style.minHeight=l+"px",r.display.lineSpace.insertBefore(n,r.display.cursorDiv)}}function t(e){r(e),o(e)}e.defineOption("rulers",!1,function(i,l,s){s&&s!=e.Init&&(r(i),i.off("refresh",t)),l&&l.length&&(o(i),i.on("refresh",t))})});