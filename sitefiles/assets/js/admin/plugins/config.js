var $url="/plugins/config",$urlActionsGetChannels="/plugins/config/actions/getChannels",$urlActionsSubmitChannels="/plugins/config/actions/submitChannels",$urlActionsRestart="/plugins/config/actions/restart",data=utils.init({pluginId:utils.getQueryString("pluginId"),siteId:utils.getQueryInt("siteId"),form:{taxis:0,allSites:!0,siteIds:null},sites:null,siteConfigs:null,siteName:null,treeData:[],defaultExpandedKeys:[],pageType:null,channelsForm:null}),methods={apiGet:function(){var t=this;utils.loading(this,!0),$api.get($url,{params:{pluginId:this.pluginId}}).then(function(i){var n=i.data;t.plugin=n.plugin,t.sites=n.sites,t.siteConfigs=n.plugin.siteConfigs||[],t.form={taxis:n.plugin.taxis,allSites:n.plugin.allSites,siteIds:n.plugin.siteIds||[]},t.pageType="sites"}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiSubmit:function(){var t=this;utils.loading(this,!0),$api.post($url,{pluginId:this.pluginId,taxis:this.form.taxis,allSites:this.form.allSites,siteIds:this.siteIds}).then(function(i){i.data;t.apiRestart()}).catch(function(i){utils.error(i),utils.loading(t,!1)})},apiRestart:function(){utils.loading(this,!0),$api.post($urlActionsRestart).then(function(t){setTimeout(function(){utils.alertSuccess({title:"插件配置保存成功",text:"插件配置保存成功，系统需要重新加载",callback:function(){window.top.location.reload(!0)}})},3e4)}).catch(function(t){utils.error(t)})},apiGetChannels:function(t){var i=this;utils.loading(this,!0),$api.post($urlActionsGetChannels,{pluginId:this.pluginId,siteId:t}).then(function(t){var n=t.data;i.siteName=n.siteName,i.channel=n.channel,i.channelsForm={siteId:n.siteConfig.siteId,allChannels:n.siteConfig.allChannels,channelIds:n.siteConfig.channelIds},i.treeData=[n.channel],i.defaultExpandedKeys=[n.channel.id],i.pageType="channels"}).catch(function(t){utils.error(t)}).then(function(){utils.loading(i,!1)})},apiSubmitChannels:function(){var t=this;utils.loading(this,!0),$api.post($urlActionsSubmitChannels,{pluginId:this.pluginId,siteId:this.channelsForm.siteId,allChannels:this.channelsForm.allChannels,channelIds:this.channelsForm.channelIds}).then(function(i){i.data;t.apiRestart()}).catch(function(i){utils.error(i),utils.loading(t,!1)})},getSiteConfig:function(t){var i=this.siteConfigs.find(function(i){return i.siteId===t.value});return i||(i={siteId:t.value,allChannels:!1,channelIds:[]}),i},handleTreeChanged:function(){this.channelsForm.channelIds=this.$refs.tree.getCheckedKeys()},btnChannelsClick:function(t){this.apiGetChannels(t.value)},btnSubmitClick:function(){var t=this;this.$refs.form.validate(function(i){i&&t.apiSubmit()})},btnCloseClick:function(){utils.removeTab()},btnChannelsSubmitClick:function(){this.apiSubmitChannels()},btnCancelClick:function(){this.pageType="sites"}},$vue=new Vue({el:"#main",data:data,methods:methods,computed:{siteIds:function(){var t=[];return!this.form.allSites&&this.form.siteIds&&this.form.siteIds.length>0&&(t=this.form.siteIds.map(function(t){return"number"==typeof t?t:t[t.length-1]})),t}},created:function(){utils.keyPress(this.btnSubmitClick,this.btnCloseClick),this.siteId>0?this.apiGetChannels(this.siteId):this.apiGet()}});