var $url="/clouds/censor",$urlCloud="cms/censor",$urlCloudAddWords=$urlCloud+"/actions/addWords",$urlCloudDelete=$urlCloud+"/actions/delete",data=utils.init({activeName:"settings",count:0,cloudWords:[],isAdd:!1,formInline:{isWhiteList:!1,keyword:"",currentPage:1,offset:0,limit:30},form:{words:""},isCloudCensorText:!1,isCloudCensorTextAuto:!1,isCloudCensorTextIgnore:!1,isCloudCensorTextWhiteList:!1}),methods={apiGet:function(){var t=this;utils.loading(this,!0),$api.get($url).then(function(i){var o=i.data;t.isCloudCensorText=o.isCloudCensorText,t.isCloudCensorTextAuto=o.isCloudCensorTextAuto,t.isCloudCensorTextIgnore=o.isCloudCensorTextIgnore,t.isCloudCensorTextWhiteList=o.isCloudCensorTextWhiteList}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},apiSubmit:function(){var t=this;utils.loading(this,!0),$api.post($url,{isCloudCensorText:this.isCloudCensorText,isCloudCensorTextAuto:this.isCloudCensorTextAuto,isCloudCensorTextIgnore:this.isCloudCensorTextIgnore,isCloudCensorTextWhiteList:this.isCloudCensorTextWhiteList}).then(function(t){t.data;utils.success("违规检测设置保存成功！")}).catch(function(t){utils.error(t)}).then(function(){utils.loading(t,!1)})},btnSubmitClick:function(){this.apiSubmit()},btnTabsClick:function(){this.formInline.isWhiteList="whitelist"===this.activeName,"whitelist"!=this.activeName&&"blacklist"!=this.activeName||this.apiCloudGet()},apiCloudGet:function(){var t=this;utils.loading(this,!0),cloud.get($urlCloud,{params:this.formInline}).then(function(i){var o=i.data;t.count=o.count,t.cloudWords=o.cloudWords}).catch(function(t){utils.error(t,{ignoreAuth:!0})}).then(function(){utils.loading(t,!1)})},apiCloudDelete:function(t){var i=this;utils.loading(this,!0),cloud.post($urlCloudDelete,{isWhiteList:this.formInline.isWhiteList,id:t}).then(function(t){t.data;utils.success(i.getWordType()+"违规词删除成功！"),i.apiCloudGet()}).catch(function(t){utils.error(t,{ignoreAuth:!0})}).then(function(){utils.loading(i,!1)})},apiCloudAddWords:function(){var t=this;utils.loading(this,!0),cloud.post($urlCloudAddWords,{isWhiteList:this.formInline.isWhiteList,words:this.form.words}).then(function(i){i.data;utils.success(t.getWordType()+"违规词添加成功！"),t.isAdd=!1,t.apiCloudGet()}).catch(function(t){utils.error(t,{ignoreAuth:!0})}).then(function(){utils.loading(t,!1)})},btnAddClick:function(){this.isAdd=!0,this.form.words=""},btnSearchClick:function(){this.apiCloudGet()},handleCurrentChange:function(t){this.formInline.currentPage=t,this.formInline.offset=this.formInline.limit*(t-1),this.btnSearchClick()},getWordType:function(){return this.formInline.isWhiteList?"白名单":"黑名单"},getDialogTitle:function(){return"添加"+this.getWordType()+"违规词"},btnDeleteClick:function(t){var i=this,o=this.getWordType();utils.alertDelete({title:"删除"+o+"违规词",text:"此操作将删除"+o+"违规词 “"+t.word+"”，确定吗？",callback:function(){i.apiCloudDelete(t.id)}})},btnAddSubmitClick:function(){var t=this;this.$refs.form.validate(function(i){i&&t.apiCloudAddWords()})},btnCloseClick:function(){utils.removeTab()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(this.btnSubmitClick,this.btnCloseClick);var t=this;cloud.checkAuth(function(){t.apiGet()})}});