var $url="/plugins/add",data=utils.init({cmsVersion:null,packageIds:null,containerized:null,q:utils.getQueryString("q"),keyword:utils.getQueryString("q")||"",extensionWithReleases:null}),methods={apiGet:function(){var e=this;$api.get($url).then(function(t){var n=t.data;e.cmsVersion=n.cmsVersion,e.packageIds=n.packageIds,e.containerized=n.containerized;var i=t.headers.server;if(e.containerized||i&&"Kestrel"!==i)cloud.getExtensions(e.cmsVersion,e.keyword).then(function(t){var n=t.data;e.extensionWithReleases=n.extensionWithReleases}).catch(function(e){utils.error(e)}).then(function(){utils.loading(e,!1)});else{var s=cloud.getDocsUrl("getting-started/deploy.html");utils.error('页面加载失败，SSCMS 插件需要在进程管理器（Nginx、Apache、IIS、Windows 服务）中运行，请参考文档 <a href="'+s+'" target="_blank">托管和部署</a>',{redirect:!0})}}).catch(function(e){utils.error(e)})},getIconUrl:function(e){return cloud.hostStorage+"/"+_.trim(e,"/")},isInstalled:function(e){return-1!==this.packageIds.indexOf(e.userName+"."+e.name)},btnSearchClick:function(){location.href="?q="+this.keyword},btnUploadClick:function(){utils.openLayer({title:"离线安装/更新插件",url:utils.getPluginsUrl("addLayerUpload"),width:550,height:350})},btnViewClick:function(e){utils.addTab(e.extension.displayName,utils.getPluginsUrl("view",{userName:e.extension.userName,name:e.extension.name}))},btnCloseClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSearchClick,this.btnCloseClick),this.apiGet()}});