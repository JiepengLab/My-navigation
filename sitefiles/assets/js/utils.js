var utils={init:function(e){return _.assign({pageLoad:!1,loading:null},e)},getQueryString:function(e,t){var n=location.search.match(new RegExp("[?&]"+e+"=([^&]+)","i"));return!n||n.length<1?t||"":decodeURIComponent(n[1])},getQueryStringList:function(e){var t=utils.getQueryString(e);return t?t.split(","):[]},getQueryBoolean:function(e){var t=location.search.match(new RegExp("[?&]"+e+"=([^&]+)","i"));return!(!t||t.length<1)&&("true"===t[1]||"True"===t[1])},getQueryInt:function(e,t){var n=location.search.match(new RegExp("[?&]"+e+"=([^&]+)","i"));return!n||n.length<1?t||0:utils.toInt(n[1])},getQueryIntList:function(e){var t=location.search.match(new RegExp("[?&]"+e+"=([^&]+)","i"));return!t||t.length<1?[]:_.map(t[1].split(","),function(e){return utils.toInt(e)})},loadExternals:function(e,t){if(e)for(var n=document.getElementsByTagName("head")[0],a=0;a<e.length;a++){var i=e[a],r=document.createElement("link");r.href=i,r.rel="stylesheet",r.type="text/css",n.appendChild(r)}if(t)for(n=document.getElementsByTagName("head")[0],a=0;a<t.length;a++){i=t[a];var s=document.createElement("script");s.src=i,s.type="text/javascript",n.appendChild(s)}},loadEditors:function(e,t){setTimeout(function(){for(var n=0;n<e.length;n++){var a=e[n];if("TextEditor"===a.inputType){UE.delEditor(a.attributeName);var i=utils.getEditor(a.attributeName);i.attributeName=a.attributeName,i.ready(function(){this.addListener("contentChange",function(){t[this.attributeName]=this.getContent()})})}}},100)},getEditor:function(e,t){return UE.getEditor(e,{allowDivTransToP:!1,maximumWords:99999999,initialFrameWidth:null,initialFrameHeight:t&&t>0?t:320,autoHeightEnabled:!1,autoFloatEnabled:!1,zIndex:2e3})},toCamelCase:function(e){if(!e||e[0]!==e[0].toUpperCase())return e;for(var t=e.split(""),n=e.split(""),a=0;a<t.length;a++){if(1==a&&t[a]!==t[a].toUpperCase())return n.join("");var i=a+1<t.length;if(a>0&&i&&t[a+1]!==t[a+1].toUpperCase())return n.join("");if(utils.isNumeric(t[a]))return n.join("");n[a]=_.toLower(t[a])}return n.join("")},toInt:function(e){return e?"number"==typeof e?e:parseInt(e,10)||0:0},toArray:function(e){return(e||"").split(",")},formatDate:function(e){var t=new Date(e),n=""+(t.getMonth()+1),a=""+t.getDate(),i=t.getFullYear();return n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[i,n,a].join("-")},isNumeric:function(e){return/^\d+$/.test(e)},getQueryIntList:function(e){var t=utils.getQueryString(e);return t?_.map(t.split(","),function(e){return parseInt(e,10)}):[]},getIndexUrl:function(e){var t=$rootUrl+"/";return e&&(t+="?",_.forOwn(e,function(e,n){t+=n+"="+encodeURIComponent(e)+"&"}),t=t.substr(0,t.length-1)),t},getRootUrl:function(e,t){return utils.getPageUrl(null,e,t)},getAssetsUrl:function(e){return"/sitefiles/assets/"+e},getCloudsUrl:function(e,t){return utils.getPageUrl("clouds",e,t)},getCmsUrl:function(e,t){return utils.getPageUrl("cms",e,t)},getWxUrl:function(e,t){return utils.getPageUrl("wx",e,t)},getPluginsUrl:function(e,t){return utils.getPageUrl("plugins",e,t)},getSettingsUrl:function(e,t){return utils.getPageUrl("settings",e,t)},getCommonUrl:function(e,t){return utils.getPageUrl("common",e,t)},getPageUrl:function(e,t,n){var a=$rootUrl+"/";return a+=e?e+"/"+t+"/":t+"/",n&&(a+="?",_.forOwn(n,function(e,t){a+=t+"="+encodeURIComponent(e)+"&"}),a=a.substr(0,a.length-1)),a},getCountName:function(e){return utils.toCamelCase(e+"Count")},getExtendName:function(e,t){return utils.toCamelCase(t?e+t:e)},pad:function(e){for(var t=e+"";t.length<2;)t="0"+t;return t},getUrl:function(e,t){return t&&(t.startsWith("/")||-1!=t.indexOf("://"))?t:(e=_.trimEnd(e,"/"))+"/"+_.trimStart(_.trimStart(_.trimStart(t,"~"),"@"),"/")},getFriendlyDate:function(e){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(e));var t=new Date,n=Math.round((t-e)/1e3);if(n>0){if(n<86400)return"今天";if(n<172800)return"昨天";if(e.getFullYear()===t.getFullYear())return utils.pad(e.getMonth()+1)+"月"+utils.pad(e.getDate())+"日"}return e.getFullYear()+"-"+utils.pad(e.getMonth()+1)+"-"+utils.pad(e.getDate())},getFriendlyDateTime:function(e){"[object Date]"!==Object.prototype.toString.call(e)&&(e=new Date(e));var t=new Date,n=Math.round((t-e)/1e3);if(n>0){if(n<86400)return"今天 "+utils.pad(e.getHours())+":"+utils.pad(e.getMinutes())+":"+utils.pad(e.getSeconds());if(n<172800)return"昨天 "+utils.pad(e.getHours())+":"+utils.pad(e.getMinutes())+":"+utils.pad(e.getSeconds());if(e.getFullYear()===t.getFullYear())return utils.pad(e.getMonth()+1)+"月"+utils.pad(e.getDate())+"日 "+utils.pad(e.getHours())+":"+utils.pad(e.getMinutes())+":"+utils.pad(e.getSeconds())}return e.getFullYear()+"-"+utils.pad(e.getMonth()+1)+"-"+utils.pad(e.getDate())+" "+utils.pad(e.getHours())+":"+utils.pad(e.getMinutes())+":"+utils.pad(e.getSeconds())},getRootVue:function(){return top.$vue||window.$vue},getTabVue:function(e){if(!e)return window.$vue;var t=utils.getRootVue().tabs.find(function(t){return t.name==e});return t?top.document.getElementById("frm-"+t.name).contentWindow.$vue:null},getTabName:function(){return utils.getRootVue().tabName},openTab:function(e){var t=utils.getRootVue();-1!==t.tabs.findIndex(function(t){return t.name==e})&&(t.tabName=e)},addTab:function(e,t){var n=utils.getRootVue(),a=n.tabs.findIndex(function(e){return e.url==t}),i=null;-1===a?(i={title:e,name:utils.uuid(),url:t},n.tabs.push(i)):(i=n.tabs[a],top.document.getElementById("frm-"+i.name).contentWindow.location.href=t);n.tabName=i.name},removeTab:function(e){var t=utils.getRootVue();e||(e=t.tabName),t.tabName===e&&(t.activeChildMenu=null,t.tabs.forEach(function(n,a){if(n.name===e){var i=t.tabs[a+1]||t.tabs[a-1];i&&(t.tabName=i.name)}})),t.tabs=t.tabs.filter(function(t){return t.name!==e})},addQuery:function(e,t){return e?(e+=-1===e.indexOf("?")?"?":"&",_.forOwn(t,function(t,n){e+=n+"="+encodeURIComponent(t)+"&"}),e.substr(0,e.length-1)):""},alertDelete:function(e){return!!e&&(alert({title:e.title,text:e.text,type:"warning",confirmButtonText:e.button||"删 除",confirmButtonClass:"el-button el-button--danger",cancelButtonClass:"el-button el-button--default",showCancelButton:!0,cancelButtonText:"取 消"}).then(function(t){t.value&&e.callback&&e.callback()}),!1)},alertSuccess:function(e){return!!e&&(alert({title:e.title,text:e.text,type:"success",confirmButtonText:e.button||"确 定",confirmButtonClass:"el-button el-button--primary",showCancelButton:!1}).then(function(t){t.value&&e.callback&&e.callback()}),!1)},alertWarning:function(e){return!!e&&(alert({title:e.title,text:e.text,type:"warning",confirmButtonText:e.button||"确 定",confirmButtonClass:"el-button el-button--danger",showCancelButton:!1}).then(function(t){t.value&&e.callback&&e.callback()}),!1)},getErrorMessage:function(e){if(e.response&&500===e.response.status)return JSON.stringify(e.response.data);var t=e.message;return e.response&&e.response.data&&(e.response.data.exceptionMessage?t=e.response.data.exceptionMessage:e.response.data.message&&(t=e.response.data.message)),t},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},notifySuccess:function(e,t){utils.getRootVue().$notify.success({title:"成功",message:e,position:t||"top-right"})},notifyWarning:function(e,t){utils.getRootVue().$notify.warning({title:"警告",message:e,position:t||"top-right"})},notifyInfo:function(e,t){utils.getRootVue().$notify.info({title:"提示",message:e,position:t||"top-right"})},notifyError:function(e,t){if(e){var n="";n=e.response?utils.getErrorMessage(e):"string"==typeof e?e:e+"",utils.getRootVue().$notify.error({title:"错误",message:n,position:t||"top-right"})}},success:function(e){utils.getRootVue().$message({type:"success",message:e,showIcon:!0})},error:function(e,t){if(e)if("string"==typeof e)if(t&&t.redirect){var n=utils.uuid();sessionStorage.setItem(n,JSON.stringify({message:e})),t.current?i.href=utils.getRootUrl("error",{uuid:n}):top.location.href=utils.getRootUrl("error",{uuid:n})}else utils.getRootVue().$message({type:"error",message:e,showIcon:!0});else if(e.response){var a=utils.getErrorMessage(e);if(!(!t||!t.ignoreAuth)||!e.response||401!==e.response.status&&403!==e.response.status){if(e.response&&500===e.response.status||t&&t.redirect){n=utils.uuid();return sessionStorage.setItem(n,a),t&&t.redirect?void(top.location.href=utils.getRootUrl("error",{uuid:n})):void top.utils.openLayer({url:utils.getRootUrl("error",{uuid:n})})}if(e.response&&400===e.response.status&&t&&t.redirect){n=utils.uuid();sessionStorage.setItem(n,JSON.stringify({message:e})),top.location.href=utils.getRootUrl("error",{uuid:n})}}else{var i=_.trimEnd(window.location.href,"/");_.endsWith(i,"/ss-admin")||_.endsWith(i,"/home")?top.location.href=utils.getRootUrl("login"):top.location.href=utils.getRootUrl("login",{status:401})}utils.getRootVue().$message({type:"error",message:a,showIcon:!0})}else"object"==typeof e&&utils.getRootVue().$message({type:"error",message:e+"",showIcon:!0})},loading:function(e,t,n){t?e.pageLoad&&(e.loading=e.$loading({text:n||"页面加载中..."})):e.loading?e.loading.close():e.pageLoad=!0},scrollTop:function(){document.documentElement.scrollTop=document.body.scrollTop=0},closeLayer:function(e){return e?parent.location.reload():parent.layer.closeAll(),!1},openLayer:function(e){if(!e||!e.url)return!1;if(e.width){var t=e.width+"";-1==t.indexOf("%")&&-1==t.indexOf("px")&&(e.width=t+"px")}else e.width=$(window).width()-50+"px";if(e.height){var n=e.height+"";-1==n.indexOf("%")&&-1==n.indexOf("px")&&(e.height=n+"px")}else e.height=$(window).height()-50+"px";var a=layer.open({type:2,btn:null,title:e.title,area:[e.width,e.height],maxmin:!e.max,resize:!e.max,shadeClose:!0,content:e.url,success:e.success});return setTimeout(function(){document.getElementById("layui-layer-iframe"+a).focus()},100),e.max&&layer.full(a),!1},contains:function(e,t){return e&&t&&-1!==e.indexOf(t)},openDocs:function(e){var t=utils.getRootVue(),n=utils.getTabVue(t.tabName);if(n&&n.homepage){if(-1!==n.homepage.indexOf("://"))return void window.open(n.homepage,"_docs");e=n.homepage}-1!==(e=(e=(e=e.replace(".","")).replace("/","")).replace("ss-admin/","")).indexOf("?")&&(e=e.substring(0,e.indexOf("?"))),window.open("https://sscms.com/docs/v7/handbook/"+e,"_docs")},keyPress:function(e,t){$(document).keydown(function(n){if(n.ctrlKey&&13==n.which||10==n.which||n.shiftKey&&13==n.which||10==n.which)e&&e();else if("Escape"===n.key)t&&t();else if("F1"===n.key){var a=location.href;-1!==a.indexOf("/ss-admin/")&&(a=a.substring(a.indexOf("/ss-admin/"))),utils.openDocs(a),n.preventDefault(),n.stopPropagation()}})},focus:function(e,t){setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},100)},ctrlSave:function(e){$(document).keydown(function(t){var n=t.which||t.keyCode;t.ctrlKey&&83==n&&(t.preventDefault(),e&&e())})},validateMobile:function(e,t,n){t?/^1[3-9]\d{9}$/.test(t)?n():n(new Error(e.message||"字段必须是有效的手机号码")):n()},validateDecimal:function(e,t,n){t?/^-?\d+(\.\d{1,2})?$/.test(t)?n():n(new Error(e.message||"字段必须是数字")):n()},validateDigits:function(e,t,n){t?/^-?\d+$/.test(t)?n():n(new Error(e.message||"字段必须是整数")):n()},validateMax:function(e,t,n){t&&t.length>parseInt(e.value)?n(new Error(e.message||"字段不能超过指定的长度")):n()},validateMaxValue:function(e,t,n){t?/^-?\d+(\.\d{1,2})?$/.test(t)?t&&parseInt(t)>parseInt(e.value)?n(new Error(e.message||"字段必须是数值，并且不能大于指定的值")):n():n(new Error(e.message||"字段必须是数值，并且不能大于指定的值")):n()},validateMin:function(e,t,n){t&&t.length<parseInt(e.value)?n(new Error(e.message||"字段不能低于指定的长度")):n()},validateMinValue:function(e,t,n){t?/^-?\d+(\.\d{1,2})?$/.test(t)?t&&parseInt(t)<parseInt(e.value)?n(new Error(e.message||"字段必须是数值，并且不能小于指定的值")):n():n(new Error(e.message||"字段必须是数值，并且不能小于指定的值")):n()},validateIdCard:function(e,t,n){t?/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t)?n():n(new Error(e.message||"字段必须是身份证号码")):n()},validateChinese:function(e,t,n){if(t){for(var a=!0,i=0;i<t.length;i++)-1!==escape(t[i]).indexOf("%u")||(a=!1);a?n():n(new Error(e.message||"字段必须是中文"))}else n()},validateInt:function(e,t,n){t?/^[-]?\d+$/.test(t)?n():n(new Error(e.message||"字段必须是有效的数字值")):n()},getForm:function(e,t){for(var n=_.assign({},t),a=0;a<e.length;a++){var i=e[a],r=utils.toCamelCase(i.attributeName);if("TextEditor"===i.inputType)setTimeout(function(){var e=utils.getEditor(i.attributeName);e.attributeName=i.attributeName,e.ready(function(){this.addListener("contentChange",function(){$this.form[this.attributeName]=this.getContent()})})},100);else if("CheckBox"===i.inputType||"SelectMultiple"===i.inputType){var s=[];n[r]&&("string"==typeof n[r]?s=[n[r]]:Array.isArray(n[r])&&(s=n[r])),n[r]=s}}return n},getValue:function(e,t,n){for(var a=t[utils.toCamelCase(n)],i=0;i<e.length;i++){var r=e[i];if(r.attributeName===n&&r.items&&0!==r.items.length)if("Radio"===r.inputType||"SelectOne"===r.inputType)for(var s=0;s<r.items.length;s++){a===(l=r.items[s]).value&&(a=l.label)}else if("CheckBox"===r.inputType||"SelectMultiple"===r.inputType){var o=[],u=[];a&&("string"==typeof a?o=[a]:Array.isArray(a)&&(o=a));for(s=0;s<r.items.length;s++){var l=r.items[s];-1!==o.indexOf(l.value)&&u.push(l.label)}a=u.length>0?u.join(" , "):""}}return a},getRules:function(e){var t=[{required:"字段为必填项"},{email:"字段必须是有效的电子邮件"},{mobile:"字段必须是有效的手机号码"},{url:"字段必须是有效的url"},{alpha:"字段只能包含英文字母"},{alphaDash:"字段只能包含英文字母、数字、破折号或下划线"},{alphaNum:"字段只能包含英文字母或数字"},{alphaSpaces:"字段只能包含英文字母或空格"},{decimal:"字段必须是数字"},{digits:"字段必须是整数"},{max:"字段不能超过指定的长度"},{maxValue:"字段必须是数值，并且不能大于指定的值"},{min:"字段不能低于指定的长度"},{minValue:"字段必须是数值，并且不能小于指定的值"},{regex:"字段必须匹配指定的正则表达式"},{chinese:"字段必须是中文"},{zip:"字段必须是邮政编码"},{idCard:"字段必须是身份证号码"}];if(e){for(var n=[],a=0;a<e.length;a++){var i=e[a],r=utils.toCamelCase(i.type);if("required"===r)n.push({required:!0,message:i.message||t.required});else if("email"===r)n.push({type:"email",message:i.message||t.email});else if("mobile"===r)n.push({validator:utils.validateMobile,message:i.message||t.mobile});else if("url"===r)n.push({type:"url",message:i.message||t.url});else if("alpha"===r)n.push({type:"string",pattern:/^[a-zA-Z]+$/,message:i.message||t.alpha});else if("alphaDash"===r)n.push({type:"string",pattern:/^[a-zA-Z0-9_-]+$/,message:i.message||t.alphaDash});else if("alphaNum"===r)n.push({type:"string",pattern:/^[a-zA-Z0-9]+$/,message:i.message||t.alphaNum});else if("alphaSpaces"===r)n.push({type:"string",pattern:/^[a-zA-Z\s]+$/,message:i.message||t.alphaSpaces});else if("decimal"===r)n.push({validator:utils.validateDecimal,message:i.message||t.decimal});else if("digits"===r)n.push({validator:utils.validateDigits,message:i.message||t.digits});else if("max"===r)n.push({validator:utils.validateMax,message:i.message||t.max,value:i.value});else if("maxValue"===r)n.push({validator:utils.validateMaxValue,message:i.message||t.maxValue,value:i.value});else if("min"===r)n.push({validator:utils.validateMin,message:i.message||t.min,value:i.value});else if("minValue"===r)n.push({validator:utils.validateMinValue,message:i.message||t.minValue,value:i.value});else if("regex"===r&&i.value){var s=new RegExp(i.value,"ig");n.push({type:"string",pattern:s,message:i.message||t.regex})}else"chinese"===r?n.push({validator:utils.validateChinese,message:i.message||t.chinese}):"zip"===r?n.push({type:"string",pattern:/^[0-9]{6,6}$/,message:i.message||t.zip}):"idCard"===r&&n.push({validator:utils.validateIdCard,message:i.message||t.idCard})}return n}return null}};if(Object.defineProperty(Object.prototype,"getEntityValue",{value:function(e){var t;for(t in this)if(t.toLowerCase()==e.toLowerCase())return this[t]}}),window.swal&&swal.mixin)var alert=swal.mixin({confirmButtonClass:"el-button el-button--primary",cancelButtonClass:"el-button el-button--default",buttonsStyling:!1});var PER_PAGE=30,DEFAULT_AVATAR_URL="/sitefiles/assets/images/default_avatar.png",$token=sessionStorage.getItem(ACCESS_TOKEN_NAME)||localStorage.getItem(ACCESS_TOKEN_NAME)||utils.getQueryString("accessToken"),$api=axios.create({baseURL:$apiUrl,headers:{Authorization:"Bearer "+$token}});$api.csrfPost=function(e,t,n){return $api.post(t,n,{headers:{"X-CSRF-TOKEN":e}})};