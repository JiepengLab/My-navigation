var $url="/plugins/addLayerUpload",$urlActionsUpload=$url+"/actions/upload",$urlActionsOverride=$url+"/actions/override",$urlActionsRestart=$url+"/actions/restart",data=utils.init({uploadUrl:$apiUrl+$urlActionsUpload,uploadList:[],plugin:null}),methods={apiOverride:function(i){var t=this;t.apiRestart(!0,function(){$api.post($urlActionsOverride,{pluginId:t.plugin.pluginId,fileName:i}).then(function(){parent.utils.alertSuccess({title:"插件更新成功",text:"插件名称："+t.plugin.displayName+"，插件Id："+t.plugin.pluginId+"，插件版本："+t.plugin.version,callback:function(){t.apiRestart(!1,function(){window.top.location.reload(!0)})}})}).catch(function(i){utils.error(i)}).then(function(){utils.loading(t,!1)})})},apiRestart:function(i,t){utils.loading(this,!0),$api.post($urlActionsRestart,{isDisablePlugins:i}).then(function(n){i?setTimeout(function(){t()},12e4):setTimeout(function(){t()},3e4)}).catch(function(i){utils.error(i)})},uploadBefore(i){var t=-1!==i.name.indexOf(".zip",i.name.length-".zip".length);return t||utils.error("插件包文件只能是 Zip 格式!"),t},uploadProgress:function(){utils.loading(this,!0)},uploadSuccess:function(i,t){var n=this;this.loading&&this.loading.close();var l=i.oldPlugin;n.plugin=i.newPlugin;var e=i.fileName;l?parent.utils.alertDelete({title:"是否覆盖插件",text:"系统检测到插件已存在，插件名称："+n.plugin.displayName+"，插件Id："+n.plugin.pluginId+"，当前版本："+l.version+"，上传包版本："+n.plugin.version+"，是否覆盖？",button:"覆盖插件",callback:function(){n.apiOverride(e)}}):n.apiRestart(!1,function(){parent.utils.alertSuccess({title:"插件安装成功",text:"插件名称："+n.plugin.displayName+"，插件Id："+n.plugin.pluginId+"，插件版本："+n.plugin.version,callback:function(){window.top.location.reload(!0)}})})},uploadError:function(i){this.loading&&this.loading.close();var t=JSON.parse(i.message);utils.error(t.message)},btnCancelClick:function(){utils.closeLayer()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(null,this.btnCancelClick),utils.loading(this,!1)}});