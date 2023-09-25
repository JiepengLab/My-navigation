var $url="/common/material/layerImageSelect",data=utils.init({siteId:utils.getQueryInt("siteId"),inputType:utils.getQueryString("inputType"),attributeName:utils.getQueryString("attributeName"),no:utils.getQueryInt("no"),pageType:"card",isSiteOnly:!1,groups:null,count:null,items:null,selectedGroupId:0,form:{siteId:utils.getQueryInt("siteId"),keyword:"",groupId:0,page:1,perPage:24}}),methods={insert:function(t,i){if("Image"===this.inputType)parent.$vue.runMaterialLayerImageSelect&&parent.$vue.runMaterialLayerImageSelect(this.attributeName,this.no,t);else if("TextEditor"===this.inputType&&parent.$vue.runEditorLayerImage){var e='<img src="'+i+'" style="border: 0; max-width: 100%" />';parent.$vue.runEditorLayerImage(this.attributeName,e)}},apiList:function(t){var i=this;this.form.page=t,utils.loading(this,!0),$api.post($url,this.form).then(function(t){var e=t.data;i.isSiteOnly=e.isSiteOnly,i.isSiteOnly&&(i.form.groupId=-i.siteId),i.groups=e.groups,i.count=e.count,i.items=e.items}).catch(function(t){utils.error(t)}).then(function(){utils.loading(i,!1)})},getLinkUrl:function(t){return utils.getCmsUrl("material"+t,{siteId:this.siteId})},btnSelectClick:function(t){var i=this;utils.loading(this,!0),$api.post($url+"/actions/select",{siteId:this.siteId,materialId:t.id}).then(function(t){var e=t.data;i.insert(e.virtualUrl,e.imageUrl),utils.closeLayer()}).catch(function(t){utils.error(t)}).then(function(){utils.loading(i,!1)})},btnSelectGroupClick:function(t){this.selectedGroupId=this.selectedGroupId===t?0:t},btnGroupClick:function(t){var i=this;this.form.groupId=t,this.form.page=1,utils.loading(this,!0),$api.post($url,this.form).then(function(t){var e=t.data;i.groups=e.groups,i.count=e.count,i.items=e.items}).catch(function(t){utils.error(t)}).then(function(){utils.loading(i,!1)})},btnDropdownClick:function(t){this.pageType=t},btnSearchClick(){utils.loading(this,!0),this.apiList(1)},btnPageClick:function(t){utils.loading(this,!0),this.apiList(t)},btnCancelClick:function(){utils.closeLayer()}},$vue=new Vue({el:"#main",data:data,methods:methods,created:function(){utils.keyPress(null,this.btnCancelClick),this.apiList(1)}});