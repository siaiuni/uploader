/*!build time : 2013-09-24 4:57:58 PM*/
KISSY.add("gallery/uploader/1.5/plugins/preview/preview",function(a,b,c,d,e,f){function g(){var b="";if("undefined"==typeof window.FileReader)switch(a.UA.shell){case"firefox":b="domfile";break;case"ie":switch(a.UA.ie){case 6:b="simple";break;default:b="filter"}}else b="html5";return b}function h(a,b){if(!a)return!1;if("filter"!=m)a.src=b||o;else if(b){b=b.replace(/[)'"%]/g,function(a){return escape(escape(a))});try{a.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=b}catch(c){}}return!0}function i(b){var c=this,d={maxWidth:40,maxHeight:40};c.config=a.mix(d,b),i.superclass.constructor.call(c,b)}var j=b.all,k=document,l="[Plugin: Preview] ",m=g(),n={check:"check",success:"success",showed:"showed",error:"error"},o=f.ie<8?"http://a.tbcdn.cn/p/fp/2011a/assets/space.gif":"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";return a.extend(i,e,{pluginInitializer:function(a){if(!a)return!1;var b=this;b.set("uploader",a),a.on("add",b._uploaderAddHandler,b)},_uploaderAddHandler:function(b){var c=this,d=c.get("uploader");if(d.get("hasRestore"))return!1;var e=d.get("fileInput"),f=b.file,g=f.data,h=f.id,i=c.get("preHook"),k=j(i+h);return k.length?(d.get("multiple")&&"ajax"==d.get("type")?c.show(g,k,function(){k.show()}):(c.preview(e,k),k.show()),void 0):(a.log("\u94a9\u5b50\u4e3a\uff1a"+i+h+"\uff0c\u627e\u4e0d\u5230\u56fe\u7247\u5143\u7d20\uff0c\u65e0\u6cd5\u9884\u89c8\u56fe\u7247"),!1)},show:function(b,c,d){if(!b||!c||!c.length)return!1;var e=this,f=new FileReader;f.onload=function(a){var b=e.data=a.target.result;e.fire(n.getData,{data:b,mode:m}),c.attr("src",b),d&&d.call(e,b),e.fire(n.showed,{img:b})},f.onerror=function(){a.log(l+"File Reader Error. Your browser may not fully support html5 file api","warning"),e.fire(n.error)},f.readAsDataURL(b)},preview:function(b,d){b=c.get(b),d=c.get(d);var e=this,g=function(){e.fire(n.getData,{data:e.data,mode:m}),d&&(h(d,e.data),e.fire(n.showed,{img:d}))};if(e.data=void 0,b){switch(10==f.ie&&(m="filter"),m){case"domfile":e.data=b.files[0].getAsDataURL();break;case"filter":b.select();try{e.data=k.selection.createRange().text}catch(i){a.log(l+"IE\u4e0b\u56e0\u4e3a\u5b89\u5168\u95ee\u9898\u4f1a\u629b\u51fa\u62d2\u7edd\u8bbf\u95ee\u7684\u9519\u8bef\uff0c\u4e0d\u59a8\u788d\u9884\u89c8: "),a.log(i,"dir")}finally{k.selection.empty()}e.data||(e.data=b.value);break;case"html5":var j=new FileReader;j.onload=function(a){e.data=a.target.result,g()},j.onerror=function(){a.log(l+"File Reader Error. Your browser may not fully support html5 file api","warning"),e.fire(n.error)},b.files&&j.readAsDataURL(b.files[0]);break;case"simple":default:e.data=b.value}e.data?g():"html5"!=m&&(h(d),e.fire(n.error))}else a.log(l+"File Input Element does not exists.");return e.data}},{ATTRS:{pluginId:{value:"preview"},uploader:{value:""},preHook:{value:".J_Pic_"}}}),i},{requires:["node","dom","event","base","ua"]});