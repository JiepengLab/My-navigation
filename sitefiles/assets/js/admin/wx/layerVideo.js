var $url="/wx/layerVideo",data=utils.init({siteId:utils.getQueryInt("siteId"),showType:"card",groups:null,count:null,videos:null,form:{siteId:utils.getQueryInt("siteId"),keyword:"",groupId:0,page:1,perPage:24}}),methods={apiList:function(t){var i=this;this.form.page=t,utils.loading(this,!0),$api.get($url,{params:this.form}).then(function(t){var o=t.data;i.groups=o.groups,i.count=o.count,i.videos=o.videos}).catch(function(t){utils.error(t)}).then(function(){utils.loading(i,!1)})},getGroupName:function(){var t=this;return this.form.groupId>0?_.find(this.groups,function(i){return i.id===t.form.groupId}).groupName:""},btnAudioClick:function(t){parent.$vue.runLayerVideo(t),utils.closeLayer()},btnGroupClick:function(t){var i=this;this.form.groupId=t,this.form.page=1,utils.loading(this,!0),$api.get($url,{params:this.form}).then(function(t){var o=t.data;i.groups=o.groups,i.count=o.count,i.videos=o.videos}).catch(function(t){utils.error(t)}).then(function(){utils.loading(i,!1)})},btnSearchClick(){utils.loading(this,!0),this.apiList(1)},btnPageClick:function(t){utils.loading(this,!0),this.apiList(t)},btnCancelClick:function(){utils.closeLayer()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){this.apiList(1)}});