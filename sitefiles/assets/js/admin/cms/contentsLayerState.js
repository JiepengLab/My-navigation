var $url="/cms/contents/contentsLayerState",data=utils.init({siteId:utils.getQueryInt("siteId"),channelId:utils.getQueryInt("channelId"),contentId:utils.getQueryInt("contentId"),contentChecks:null,content:null,state:null}),methods={apiGet:function(){var t=this;utils.loading(this,!0),$api.get($url,{params:{siteId:this.siteId,channelId:this.channelId,contentId:this.contentId}}).then(function(n){var e=n.data;t.contentChecks=e.contentChecks,t.content=e.content,t.state=e.state}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},getContentUrl:function(t){return t.checked?utils.getRootUrl("redirect",{siteId:t.siteId,channelId:t.channelId,contentId:t.id}):$apiUrl+"/preview/"+t.siteId+"/"+t.channelId+"/"+t.id},btnAdminClick:function(t){utils.openLayer({title:"管理员查看",url:utils.getCommonUrl("adminLayerView",{adminId:t}),full:!0})},btnSubmitClick:function(){window.parent.layer.closeAll(),window.parent.utils.openLayer({title:"审核内容",url:utils.getCmsUrl("contentsLayerCheck",{siteId:this.siteId,channelId:this.channelId,channelContentIds:this.channelId+"_"+this.contentId}),full:!0})},btnCancelClick:function(){utils.closeLayer()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCancelClick),this.apiGet()}});