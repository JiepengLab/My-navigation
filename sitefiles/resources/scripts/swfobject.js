if(void 0===deconcept)var deconcept=new Object;void 0===deconcept.util&&(deconcept.util=new Object),void 0===deconcept.SWFObjectUtil&&(deconcept.SWFObjectUtil=new Object),deconcept.SWFObject=function(t,e,i,r,s,n,a,l,c,o){if(document.getElementById){this.DETECT_KEY=o||"detectflash",this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY),this.params=new Object,this.variables=new Object,this.attributes=new Array,t&&this.setAttribute("swf",t),e&&this.setAttribute("id",e),i&&this.setAttribute("width",i),r&&this.setAttribute("height",r),s&&this.setAttribute("version",new deconcept.PlayerVersion(s.toString().split("."))),this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion(),!window.opera&&document.all&&this.installedVer.major>7&&(deconcept.SWFObject.doPrepUnload=!0),n&&this.addParam("bgcolor",n);var h=a||"high";this.addParam("quality",h),this.setAttribute("useExpressInstall",!1),this.setAttribute("doExpressInstall",!1);var d=l||window.location;this.setAttribute("xiRedirectUrl",d),this.setAttribute("redirectUrl",""),c&&this.setAttribute("redirectUrl",c)}},deconcept.SWFObject.prototype={useExpressInstall:function(t){this.xiSWFPath=t||"expressinstall.swf",this.setAttribute("useExpressInstall",!0)},setAttribute:function(t,e){this.attributes[t]=e},getAttribute:function(t){return this.attributes[t]},addParam:function(t,e){this.params[t]=e},getParams:function(){return this.params},addVariable:function(t,e){this.variables[t]=e},getVariable:function(t){return this.variables[t]},getVariables:function(){return this.variables},getVariablePairs:function(){var t,e=new Array,i=this.getVariables();for(t in i)e[e.length]=t+"="+i[t];return e},getSWFHTML:function(){var t="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","PlugIn"),this.setAttribute("swf",this.xiSWFPath)),t='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"',t+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var e=this.getParams();for(var i in e)t+=[i]+'="'+e[i]+'" ';var r=this.getVariablePairs().join("&");r.length>0&&(t+='flashvars="'+r+'"'),t+="/>"}else{this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","ActiveX"),this.setAttribute("swf",this.xiSWFPath)),t='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">',t+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var s=this.getParams();for(var i in s)t+='<param name="'+i+'" value="'+s[i]+'" />';var n=this.getVariablePairs().join("&");n.length>0&&(t+='<param name="flashvars" value="'+n+'" />'),t+="</object>"}return t},write:function(t){if(this.getAttribute("useExpressInstall")){var e=new deconcept.PlayerVersion([6,0,65]);this.installedVer.versionIsValid(e)&&!this.installedVer.versionIsValid(this.getAttribute("version"))&&(this.setAttribute("doExpressInstall",!0),this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl"))),document.title=document.title.slice(0,47)+" - Flash Player Installation",this.addVariable("MMdoctitle",document.title))}return this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))?(("string"==typeof t?document.getElementById(t):t).innerHTML=this.getSWFHTML(),!0):(""!=this.getAttribute("redirectUrl")&&document.location.replace(this.getAttribute("redirectUrl")),!1)}},deconcept.SWFObjectUtil.getPlayerVersion=function(){var t=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var e=navigator.plugins["Shockwave Flash"];e&&e.description&&(t=new deconcept.PlayerVersion(e.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")))}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0)for(var i=1,r=3;i;)try{r++,i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+r),t=new deconcept.PlayerVersion([r,0,0])}catch(t){i=null}else{try{i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){try{i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");t=new deconcept.PlayerVersion([6,0,21]),i.AllowScriptAccess="always"}catch(e){if(6==t.major)return t}try{i=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){}}null!=i&&(t=new deconcept.PlayerVersion(i.GetVariable("$version").split(" ")[1].split(",")))}return t},deconcept.PlayerVersion=function(t){this.major=null!=t[0]?parseInt(t[0]):0,this.minor=null!=t[1]?parseInt(t[1]):0,this.rev=null!=t[2]?parseInt(t[2]):0},deconcept.PlayerVersion.prototype.versionIsValid=function(t){return!(this.major<t.major)&&(this.major>t.major||!(this.minor<t.minor)&&(this.minor>t.minor||!(this.rev<t.rev)))},deconcept.util={getRequestParameter:function(t){var e=document.location.search||document.location.hash;if(null==t)return e;if(e)for(var i=e.substring(1).split("&"),r=0;r<i.length;r++)if(i[r].substring(0,i[r].indexOf("="))==t)return i[r].substring(i[r].indexOf("=")+1);return""}},deconcept.SWFObjectUtil.cleanupSWFs=function(){for(var t=document.getElementsByTagName("OBJECT"),e=t.length-1;e>=0;e--)for(var i in t[e].style.display="none",t[e])"function"==typeof t[e][i]&&(t[e][i]=function(){})},deconcept.SWFObject.doPrepUnload&&(deconcept.unloadSet||(deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){},window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)},window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload),deconcept.unloadSet=!0)),!document.getElementById&&document.all&&(document.getElementById=function(t){return document.all[t]});var getQueryParamValue=deconcept.util.getRequestParameter,FlashObject=deconcept.SWFObject,SWFObject=deconcept.SWFObject;