var $url="/common/groupChannelLayerAdd",$urlUpdate=$url+"/actions/update",data=utils.init({siteId:utils.getQueryInt("siteId"),groupId:utils.getQueryInt("groupId"),form:{groupName:"",description:""}}),methods={apiGet:function(){var t=this;utils.loading(this,!0),$api.get($url,{params:{siteId:this.siteId,groupId:this.groupId}}).then(function(i){var e=i.data;t.form.groupName=e.groupName,t.form.description=e.description}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiSubmit:function(){var t=this;utils.loading(this,!0),0===this.groupId?$api.post($url,{siteId:this.siteId,groupName:this.form.groupName,description:this.form.description}).then(function(i){var e=i.data;parent.$vue.updateGroups(e,t.getSuccessMessage()),utils.closeLayer()}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)}):$api.post($urlUpdate,{siteId:this.siteId,groupId:this.groupId,groupName:this.form.groupName,description:this.form.description}).then(function(i){var e=i.data;parent.$vue.updateGroups(e,t.getSuccessMessage()),utils.closeLayer()}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},getSuccessMessage:function(){return"栏目组"+(this.groupId>0?"修改成功！":"添加成功！")},btnSubmitClick:function(){var t=this;this.$refs.form.validate(function(i){i&&t.apiSubmit()})},btnCancelClick:function(){utils.closeLayer()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCancelClick),this.groupId>0?this.apiGet():utils.loading(this,!1),utils.focus(this,"groupName")}});